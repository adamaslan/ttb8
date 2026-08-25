# Making the Instagram Pipeline 10x More Robust

A hardening + generalization guide for the **article → image → Instagram** pipeline in ttb8.
The goal: turn a brittle, host-specific, schema-drifting set of scripts into a generic,
validated, idempotent, observable publishing pipeline that any project (not just ttb8)
can reuse.

> Companion to [`article-to-instagram-pipeline.md`](./article-to-instagram-pipeline.md).
> That doc is the *happy path*. This doc is *everything that breaks the happy path* and
> how to make it not break.

---

## 1. Current State — What's Fragile Today

A direct audit of the pipeline as it exists in the repo:

| # | Fragility | Evidence in repo | Blast radius |
|---|-----------|------------------|--------------|
| 1 | **Schema drift** between docs and reality | Doc says `{caption, image_path, dry_run:true}`; `instagram-queue/norway-*.json` actually has `{text, local_image_path, campaign_name, dry_run:false}` | Publish silently posts wrong/empty content or the backend rejects the payload |
| 2 | **Hardcoded absolute paths** to another repo | `local_image_path` = `/Users/adamaslan/code/startup-ideas/social-pr-autopilot/frontend/public/...` | Breaks on any other machine, any other project — not generic |
| 3 | **No payload validation** before POST | No schema check anywhere | Bad caption / missing image fails *after* hitting the Graph API |
| 4 | **Credentials held only in a live process** | `uvicorn ... --reload` holds the token in env | Killing the backend loses creds (this exact incident is in the global CLAUDE.md) |
| 5 | **Public-URL reachability is a silent assumption** | "use ngrok" with no verification | Graph API returns a vague media error; root cause invisible |
| 6 | **No idempotency / no status record** | No record of what posted | Re-running double-posts; crash mid-publish = unknown state |
| 7 | **No token-expiry handling** | Long-lived token assumed valid forever | Posts start failing ~60 days later with a cryptic 190 error |
| 8 | **Image not validated** for IG constraints | `ascii_to_png` / `*-ig.py` produce arbitrary sizes | IG rejects aspect ratios outside 4:5–1.91:1, files >8MB |
| 9 | **`dry_run` already flipped to `false`** in a committed queue file | `norway-*.json` has `"dry_run": false` | A re-run of that file live-posts with no prompt |
| 10 | **One-off Python scripts per article** | `norway-ai-elementary-school-ban-ig.py` is bespoke | Every article needs hand-written image code |

---

## 2. The Generic Contract — One Schema, Versioned

Stop letting the queue file shape drift. Define **one canonical schema**, version it, and
make every producer (`/prep-instagram-post`, `/hn-to-instagram`) and the consumer (backend)
agree on it.

### `instagram-queue/<slug>.json` — v2 schema

```json
{
  "schema_version": 2,
  "channel": "instagram",
  "slug": "norway-ai-elementary-school-ban",
  "title": "Norway Bans AI in Elementary Schools",
  "date": "2026-06-22",
  "caption": "Norway just drew a line in the sand...\n.\n.\n.\n#tastytechbytes #norway",
  "image": {
    "local_path": "public/norway-ai-elementary-school-ban.png",
    "public_url": null,
    "width": 1080,
    "height": 1080,
    "bytes": 412393,
    "sha256": "ab12...ef"
  },
  "campaign_name": "Norway AI Elementary School Ban",
  "dry_run": true,
  "status": "queued",
  "attempts": [],
  "ig_media_id": null,
  "ig_permalink": null
}
```

### Why each field

- **`schema_version`** — the backend rejects anything it doesn't recognize instead of guessing. Bump on any breaking change.
- **`caption`** (not `text`) — pick one name and enforce it. Add a backend alias for `text` *only* as a deprecation shim that logs a warning.
- **`image.local_path`** — **project-relative**, never absolute. The backend resolves it against a configured `PROJECT_ROOT`. This is the single biggest "make it generic" fix.
- **`image.sha256` / `bytes` / `width` / `height`** — computed at prep time so validation happens *before* the network call.
- **`status`** — `queued → publishing → published | failed`. The file is the source of truth; a crash leaves a readable state.
- **`attempts[]`** — append-only log of `{ts, dry_run, error|media_id}`. Idempotency + audit trail.
- **`dry_run`** — **always written as `true`**. The user flips it. Never commit `false` (fixes fragility #9).

### Migration shim (back-compat without drift)

The backend should accept v1 payloads but normalize + warn:

```python
def normalize_payload(raw: dict) -> dict:
    if raw.get("schema_version") == 2:
        return raw
    logger.warning("v1 payload received; normalizing. Update the producer to v2.")
    caption = raw.get("caption") or raw.get("text")
    local = raw.get("image", {}).get("local_path") or raw.get("local_image_path") or raw.get("image_path")
    if not caption or not local:
        raise ValidationError("v1 payload missing caption/image")
    return {
        "schema_version": 2, "channel": "instagram",
        "slug": raw.get("slug", "unknown"), "caption": caption,
        "image": {"local_path": local, "public_url": None},
        "dry_run": raw.get("dry_run", True), "status": "queued", "attempts": [],
    }
```

---

## 3. Validate Before You POST (Fail Fast, Fail Local)

The current pipeline discovers problems *after* hitting the Graph API. Move every check
to prep time. **A bad post should never reach Instagram's servers.**

### Caption validation
- Length ≤ **2200** chars (Graph API hard limit).
- ≤ **30** hashtags (IG limit; posts with more are silently truncated/penalized).
- No markdown (`**`, backticks) — IG renders them literally.
- Must start with the hook, end with hashtags after a `.\n.\n.` separator.
- Always includes `#tastytechbytes` (or the project's brand tag — see §7).

### Image validation (do this once, in code — not per-article scripts)
IG Graph API constraints:
- Format: **JPEG or PNG** only.
- Size: **≤ 8 MB**.
- Aspect ratio: between **4:5 (0.8)** and **1.91:1 (1.91)**. Square 1:1 is safest.
- Min width 320px; recommended 1080×1080.

```python
from PIL import Image
from pathlib import Path

IG_MAX_BYTES = 8 * 1024 * 1024
IG_MIN_RATIO, IG_MAX_RATIO = 0.8, 1.91
IG_MIN_WIDTH = 320

def validate_ig_image(path: Path) -> dict:
    """Return {width,height,bytes,sha256} or raise ValidationError."""
    if not path.exists():
        raise ValidationError(f"Image missing: {path}")
    size = path.stat().st_size
    if size > IG_MAX_BYTES:
        raise ValidationError(f"Image {size} bytes > 8MB cap")
    with Image.open(path) as im:
        if im.format not in {"JPEG", "PNG"}:
            raise ValidationError(f"Unsupported format {im.format}")
        w, h = im.size
        ratio = w / h
        if w < IG_MIN_WIDTH:
            raise ValidationError(f"Width {w}px < {IG_MIN_WIDTH}px")
        if not (IG_MIN_RATIO <= ratio <= IG_MAX_RATIO):
            raise ValidationError(f"Aspect ratio {ratio:.2f} outside 0.8–1.91")
    return {"width": w, "height": h, "bytes": size, "sha256": _sha256(path)}
```

### Public-URL reachability (kills fragility #5)
Before publishing, **HEAD the public URL** and confirm IG can actually fetch it:

```python
async def assert_image_reachable(public_url: str) -> None:
    async with httpx.AsyncClient(timeout=10) as client:
        r = await client.head(public_url, follow_redirects=True)
        if r.status_code != 200:
            raise ValidationError(f"Image not reachable at {public_url} (HTTP {r.status_code})")
        ctype = r.headers.get("content-type", "")
        if not ctype.startswith("image/"):
            raise ValidationError(f"{public_url} served {ctype!r}, not an image")
```

If this fails, the error names the exact cause (tunnel down, wrong base URL, 404) instead
of the Graph API's opaque "media could not be fetched."

---

## 4. Idempotency & Status — Never Double-Post, Always Know State

The two-step Graph API publish (create container → publish container) must be **idempotent
and crash-safe**. The queue file is the ledger.

### State machine

```
queued ──validate──▶ publishing ──create+publish──▶ published
   │                     │                              │
   └── validation fail   └── API error                  └── ig_media_id + permalink recorded
                              │
                              ▼
                           failed (with error in attempts[])
```

### Rules
1. **Refuse to publish if `status == "published"`** and `ig_media_id` is set — print the existing permalink instead. (Re-running is a no-op, not a double-post.)
2. Write `status: "publishing"` **before** the create call; if the process dies, the file shows the in-flight state.
3. On success, write `ig_media_id`, `ig_permalink`, `status: "published"`, and append to `attempts[]` — **atomically** (write temp file + `os.replace`).
4. On any error, set `status: "failed"`, append `{ts, error}` to `attempts[]`, and **do not** retry automatically inside the same invocation — surface it.

```python
import json, os, tempfile
from pathlib import Path

def atomic_write_json(path: Path, data: dict) -> None:
    fd, tmp = tempfile.mkstemp(dir=path.parent, suffix=".tmp")
    try:
        with os.fdopen(fd, "w") as f:
            json.dump(data, f, indent=2)
        os.replace(tmp, path)   # atomic on POSIX
    except BaseException:
        os.path.exists(tmp) and os.unlink(tmp)
        raise
```

### Retry only the network, with backoff (per global guidelines — use `tenacity`)
```python
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type

@retry(
    retry=retry_if_exception_type((httpx.TransportError, httpx.HTTPStatusError)),
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=15),
    reraise=True,
)
async def _graph_post(client, url, payload): ...
```
Retry transient transport/5xx only. **Never retry a 400/190** (bad request / bad token) —
those are permanent and retrying just spams the API.

---

## 5. Credentials — Stop Losing the Token (Fragility #4)

This is the exact incident in the global CLAUDE.md: the running `uvicorn` held the only
copy of the credentials in its process env, and killing it lost them.

### Rules
1. **Credentials live in a file (`.env`), never only in a process.** The backend reads `.env` at startup and on `/reload`. Killing the process is then always safe.
2. **Never kill the backend to "refresh" anything** without the warning + confirmation from the global safety rule. To pick up a new tunnel URL, prefer an endpoint that re-reads config over a restart.
3. **Token-expiry guard.** Long-lived IG tokens last ~60 days. Store `token_issued_at`; on startup, warn if older than 50 days and refresh via the Graph API before it expires:

```python
# Exchange a long-lived token for a fresh one (extends ~60 days)
GET https://graph.facebook.com/v19.0/oauth/access_token
    ?grant_type=fb_exchange_token
    &client_id={app_id}&client_secret={app_secret}
    &fb_exchange_token={current_long_lived_token}
```

4. On a Graph API **error code 190** (invalid/expired token), fail with an actionable message:
   *"Token expired — run the refresh flow; do NOT restart the backend to fix this."*

### Required env (validated at startup — fail loud if missing)
```
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_BUSINESS_ACCOUNT_ID=
INSTAGRAM_PUBLIC_BASE_URL=
PROJECT_ROOT=/abs/path/to/ttb8        # resolves image.local_path → absolute
INSTAGRAM_TOKEN_ISSUED_AT=2026-06-01  # for expiry warnings
```

```python
import os
REQUIRED = ["INSTAGRAM_ACCESS_TOKEN", "INSTAGRAM_BUSINESS_ACCOUNT_ID",
            "INSTAGRAM_PUBLIC_BASE_URL", "PROJECT_ROOT"]
missing = [k for k in REQUIRED if not os.getenv(k)]
if missing:
    raise SystemExit(f"Missing required env: {', '.join(missing)}")
```

---

## 6. One Image Generator, Not One Script Per Article (Fragility #8, #10)

Replace bespoke `*-ig.py` files with **one parameterized, IG-validated generator**. It always
emits a 1080×1080 PNG that passes §3 validation by construction.

```python
"""ig_card.py — generic 1080x1080 Instagram card generator.

Usage:
    python ig_card.py --slug norway-ai --title "NORWAY BANS AI" \
        --subtitle "IN ELEMENTARY SCHOOLS" --lines "Teachers lead." "Kids learn."
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import argparse, textwrap

CANVAS = 1080
BG = (20, 20, 40)
PALETTE = {"title": (255, 220, 0), "subtitle": (0, 255, 136), "body": (255, 100, 100)}

def _font(size: int) -> ImageFont.FreeTypeFont:
    for p in ("/System/Library/Fonts/Courier.dfont", "/System/Library/Fonts/Menlo.ttc"):
        if Path(p).exists():
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def _centered(draw, text, font, y, fill):
    w = draw.textbbox((0, 0), text, font=font)[2]
    draw.text(((CANVAS - w) // 2, y), text, font=font, fill=fill)

def make_card(slug: str, title: str, subtitle: str, lines: list[str], out_dir: Path) -> Path:
    img = Image.new("RGB", (CANVAS, CANVAS), BG)
    d = ImageDraw.Draw(img)
    _centered(d, title, _font(64), 220, PALETTE["title"])
    _centered(d, subtitle, _font(40), 320, PALETTE["subtitle"])
    y = 480
    for line in lines:
        for wrapped in textwrap.wrap(line, width=34):
            _centered(d, wrapped, _font(28), y, PALETTE["body"])
            y += 56
    out = out_dir / f"{slug}.png"
    img.save(out, "PNG")
    return out  # guaranteed 1080x1080 PNG → passes validate_ig_image()

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", required=True); ap.add_argument("--title", required=True)
    ap.add_argument("--subtitle", default=""); ap.add_argument("--lines", nargs="*", default=[])
    ap.add_argument("--out", default="public")
    a = ap.parse_args()
    p = make_card(a.slug, a.title, a.subtitle, a.lines, Path(a.out))
    print(f"✓ {p} (1080x1080)")
```

Keep `ascii_to_png.py` for the in-article `<pre>` aesthetic, but the **IG raster** always
comes from this validated generator (or Imagen, also run through `validate_ig_image`).

---

## 7. Make It Generic — Drop the ttb8 Hardcoding

Pull every project-specific value into a small config so the *same* pipeline runs for any
site, not just ttb8.

### `instagram.config.json` (project root)
```json
{
  "project_root": ".",
  "queue_dir": "instagram-queue",
  "image_dir": "public",
  "brand_hashtag": "#tastytechbytes",
  "badge_colors": {
    "AI News": "bg-red-600", "AI Tips": "bg-purple-400",
    "Software": "bg-blue-500", "3D World": "bg-purple-900", "Code World": "bg-green-400"
  },
  "backend_url": "http://localhost:8000/publish"
}
```

### What becomes generic
- **Paths**: `image.local_path` is project-relative; the backend joins it with `PROJECT_ROOT`. No more `/Users/adamaslan/...` baked into queue files.
- **Brand tag**: `#tastytechbytes` comes from config, not hardcoded in the prep command.
- **Badge colors / categories**: config-driven, so another site supplies its own palette.
- **Backend URL**: config, not a literal in every doc.

A second project reuses the pipeline by dropping in its own `instagram.config.json` — zero
code changes. **This is the "more generic" half of the request.**

---

## 8. Observability — Know What Happened Without Guessing

- **Structured logging** (per global guidelines: `%`-style, no f-strings in log calls):
  ```python
  logger.info("publish start slug=%s dry_run=%s", slug, dry_run)
  logger.info("publish ok slug=%s media_id=%s permalink=%s", slug, mid, link)
  logger.warning("publish failed slug=%s code=%s msg=%s", slug, code, msg)
  ```
- **A `posted-log.jsonl`** (append-only): one line per real publish `{ts, slug, media_id, permalink}`. This is the at-a-glance "what went out" record the pipeline lacks today.
- **`/health` endpoint** on the backend: returns token age (days), whether all env is set, and whether `INSTAGRAM_PUBLIC_BASE_URL` currently serves a known test image. Check it *before* a publish session.

---

## 9. Hardened Checklist (replaces the happy-path one)

Pre-flight (all local, no API calls):
- [ ] Queue file is **v2 schema**, `schema_version: 2`
- [ ] `image.local_path` is **project-relative** (no absolute paths)
- [ ] `validate_ig_image()` passes (format, ≤8MB, ratio 0.8–1.91, ≥320px)
- [ ] Caption ≤2200 chars, ≤30 hashtags, no markdown, brand tag present
- [ ] `dry_run: true` (never committed as `false`)
- [ ] `status: "queued"`, `attempts: []`

Publish session:
- [ ] Backend `/health` green: env complete, token age <50 days, public URL serving images
- [ ] `assert_image_reachable(public_url)` passes
- [ ] Dry run shows the exact caption + image that will post
- [ ] Flip `dry_run → false` **in the file**, confirm `status != "published"` (no double-post)
- [ ] Publish writes `status: "published"`, `ig_media_id`, `ig_permalink` atomically
- [ ] `posted-log.jsonl` has the new line

Safety (from global CLAUDE.md):
- [ ] **Never** kill the running backend to fix a tunnel/token without the ⚠️ warning + confirmation
- [ ] Token refresh handled via Graph API exchange, not a restart

---

## 10. Implementation Order (do these in sequence)

1. **Schema v2 + migration shim** (§2) — stops the drift bleeding everywhere else. Highest leverage.
2. **`validate_ig_image` + caption validation** (§3) — fail fast, fail local.
3. **Atomic status writes + idempotency guard** (§4) — never double-post.
4. **Config file + project-relative paths** (§7) — makes it generic for any project.
5. **Token-expiry guard + `/health`** (§5, §8) — kills the recurring credential incident.
6. **One image generator** (§6) — retires the per-article scripts.
7. **Reachability check + `posted-log.jsonl`** (§3, §8) — observability.

Each step is independently shippable and leaves the pipeline strictly more robust than before.
