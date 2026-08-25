# Ideal Article → Publishing Workflow

A map of **every outlet, system, and moving part** involved in turning a written idea into a
live article on tastytechbytes.com and a published Instagram post — current state plus the
gaps called out in the companion docs. This is the "what exists and where" reference;
[`article-to-instagram-pipeline.md`](./article-to-instagram-pipeline.md) is the step-by-step
happy path, and [`instagram-robustness.md`](./instagram-robustness.md) is the hardening plan
for the Instagram leg specifically.

---

## 1. The full outlet map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  AUTHORING (ttb8 repo)                                                      │
│                                                                               │
│  app/routes/<slug>.tsx  ──registered in──▶  app/routes.ts                   │
│         │                                          │                        │
│         │                                          ▼                        │
│         │                                   tastytechbytes.com/<slug>       │
│         │                                   (live route — outlet #1)        │
│         │                                                                    │
│         ├──card added to──▶ app/routes/_index.tsx (homepage grid)           │
│         │                    tastytechbytes.com/  (outlet #2)               │
│         │                                                                    │
│         └──(optional, currently unwired)──▶ app/routes/ai-articles.tsx      │
│                              a /articles-style grid — NOT registered in     │
│                              routes.ts, so not a live outlet today          │
│                              (see concept-article-source-of-truth-drift)    │
└─────────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  COVER IMAGE GENERATION                                                     │
│                                                                               │
│  Option A: Imagen 4 Fast API  ──▶ public/<slug>.png/.jpg  ($0.02/image)     │
│  Option B: bespoke *-ig.py script (ascii_to_png style) — one-off per article │
│  Option C (proposed, robustness doc §6): one generic ig_card.py generator,  │
│            always emits a validated 1080×1080 PNG                           │
└─────────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  DEPLOYMENT (Netlify — outlet the article actually goes live through)       │
│                                                                               │
│  git push → PR → merge to main                                              │
│    └─ npm run build (react-router build + netlify/prepare.js)               │
│         └─ Netlify Functions serve SSR; build/client is the static publish  │
│              dir. Article is now live at outlet #1/#2 above.                │
│    └─ (proposed, auto-social-on-deploy.md) Netlify "deploy-succeeded"       │
│         outgoing webhook → social-pr-autopilot /netlify-deploy-hook          │
│         — NOT currently configured; today's flow is manual, see §4          │
└─────────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  CAPTION AUTHORING                                                          │
│                                                                               │
│  /prep-instagram-post <slug>  (Claude Code slash command, manual today)     │
│    reads the article → writes hook + why-it-matters + CTA + hashtags        │
│    → instagram-queue/<slug>.json                                            │
│                                                                               │
│  Queue schema is currently drifting between v1 (docs) and ad hoc shapes     │
│  seen in committed files (`text`/`local_image_path` vs `caption`/`image`)   │
│  — see instagram-robustness.md §2 for the proposed v2 schema fix.           │
└─────────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  PUBLISH BACKEND — social-pr-autopilot (separate repo, NOT in ttb8)         │
│                                                                               │
│  FastAPI/uvicorn, run in mamba env `auto1`                                  │
│    POST /publish  ← reads instagram-queue/<slug>.json                       │
│      └─ image must be reachable at $INSTAGRAM_PUBLIC_BASE_URL/<slug>.png    │
│           (locally: ngrok tunnel; production: not yet defined — open Q)     │
│      └─ Instagram Graph API                                                 │
│           create media container → publish container                       │
│           = outlet #3: Instagram post, tied back to tastytechbytes.com      │
│             via the caption's "link in bio" CTA                             │
│                                                                               │
│  Holds live credentials in process env — NEVER kill without the global      │
│  CLAUDE.md warning-and-confirm rule; this exact incident already happened.  │
└─────────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼ (proposed / not yet wired)
┌─────────────────────────────────────────────────────────────────────────────┐
│  OTHER CHANNELS (auto-social-on-deploy.md §"Optional: multi-channel")       │
│                                                                               │
│  Twitter/X   (≤280 char caption formatter — not implemented)                │
│  LinkedIn    (~150 char + link performs best — not implemented)             │
│  Both are sketched as siblings to publish_instagram() behind the same       │
│  deploy-hook endpoint; neither exists today.                                │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Every outlet, enumerated

| # | Outlet | Where it's produced | Live today? |
|---|---|---|---|
| 1 | Article page — `tastytechbytes.com/<slug>` | `app/routes/<slug>.tsx` + `route()` entry in `app/routes.ts` | ✅ Yes |
| 2 | Homepage card — `tastytechbytes.com/` | `app/routes/_index.tsx` | ✅ Yes |
| 3 | `/articles`-style grid | `app/routes/ai-articles.tsx` | ❌ No — file exists, unregistered |
| 4 | `article-registry.json` (metadata) | `app/article-registry.json` | ⚠️ Written but nothing reads it |
| 5 | Instagram post | `social-pr-autopilot` → Graph API | ✅ Yes, manual trigger only |
| 6 | Auto-post on deploy | Netlify webhook → `/netlify-deploy-hook` | ❌ No — designed, not configured |
| 7 | Twitter/X post | Same deploy-hook, channel-specific formatter | ❌ No — sketched only |
| 8 | LinkedIn post | Same deploy-hook, channel-specific formatter | ❌ No — sketched only |
| 9 | `posted-log.jsonl` / publish ledger | Proposed in `instagram-robustness.md` §8 | ❌ No — no publish history exists today |
| 10 | `/health` endpoint on the backend | Proposed in `instagram-robustness.md` §8 | ❌ No |

Only outlets **1, 2, and 5** are real today, and 5 requires a human to run `/prep-instagram-post`, start ngrok, start the backend, and flip `dry_run` by hand.

---

## 3. Every system/tool involved

| System | Role | Lives where |
|---|---|---|
| React Router v7 route registry | Makes the article a real URL | `app/routes.ts` (this repo) |
| Homepage grid | Discoverability on the site itself | `app/routes/_index.tsx` (this repo) |
| Netlify | Build + SSR hosting | External platform, config in `netlify.toml` |
| Imagen 4 API (Google) | Cover image generation | External API, `$GEMINI_API_KEY` |
| `/prep-instagram-post` | Caption authoring | Claude Code slash command (this repo's `.claude/`) |
| `instagram-queue/*.json` | Handoff file between this repo and the backend | This repo, gitignored contents vary by article |
| `social-pr-autopilot` | Actual publish call to Instagram | **Separate repo**, run via `uvicorn`, mamba env `auto1` |
| ngrok | Makes local images reachable to Instagram | Local dev tool, ephemeral URL |
| Instagram Graph API | The actual publish target | Meta platform, needs Business Account + long-lived token |
| `ai-news-pipeline-tracker.csv` | Proposed source of truth for "what's published, what's posted" | Referenced in `auto-social-on-deploy.md`, not confirmed to exist yet in this repo — verify before relying on it |

---

## 4. Current state vs. ideal state

**Current state (what actually happens today):**
1. Write article route, register it, add homepage card — all manual, all in this repo.
2. Generate cover image (Imagen curl, or a bespoke script) — manual.
3. Run `/prep-instagram-post <slug>` — writes the queue JSON, still `dry_run: true`.
4. Manually start `social-pr-autopilot` backend + ngrok.
5. Manually POST to `/publish` for a dry run, review, flip `dry_run: false`, POST again.
6. No record anywhere of what was posted or when — the queue file itself is the only trace, and it isn't append-only.

**Ideal state (per the two companion docs, not yet built):**
1. Article ships → merges to `main` → Netlify build succeeds.
2. Netlify's `deploy-succeeded` webhook fires → `social-pr-autopilot`'s `/netlify-deploy-hook` detects the new slug automatically (via the tracker CSV or a diff against `article-registry.json`).
3. Backend builds the caption + validates the image (format, size, aspect ratio — `instagram-robustness.md` §3) **before** touching the Graph API.
4. Backend checks a `posted-log.jsonl` / sidecar log to guarantee no double-post, publishes atomically with a `queued → publishing → published|failed` state machine (§4).
5. Optionally fans out to Twitter/X and LinkedIn behind the same hook.
6. A `/health` endpoint on the backend reports token age and config completeness so a human can check readiness without guessing.

The gap between these two states is entirely the **robustness backlog** in `instagram-robustness.md` §10 (schema v2 → validation → idempotency → generic config → token guard → one image generator → observability) plus **wiring the Netlify webhook** described in `auto-social-on-deploy.md`. Neither has been implemented as of this doc's writing.

---

## 5. Open questions / gaps worth resolving

- ❓ Does `ai-news-pipeline-tracker.csv` actually exist in this repo? `auto-social-on-deploy.md` treats it as the source of truth for "published but not yet posted," but it isn't listed among the files reviewed for this workflow map — confirm before building the auto-deploy hook against it.
- ❓ Is `article-registry.json` meant to become the single source of truth this whole map derives from (route registration, homepage card, Instagram queue metadata all generated from one JSON entry)? Nothing currently reads it that way — see `concept-article-source-of-truth-drift.md` in `docs/wiki-ttb8/`.
- ❓ What's the production (non-ngrok) value for `INSTAGRAM_PUBLIC_BASE_URL`? Every doc describes the local/ngrok flow only.
- ❓ Should `app/routes/ai-articles.tsx` become outlet #3 (a real `/articles` page), or is it dead code to remove? It's the only outlet in this map that's fully built but deliberately or accidentally disconnected.

---

## Related docs

- [`article-to-instagram-pipeline.md`](./article-to-instagram-pipeline.md) — step-by-step happy path
- [`instagram-robustness.md`](./instagram-robustness.md) — hardening plan for the Instagram leg
- [`auto-social-on-deploy.md`](./auto-social-on-deploy.md) — the proposed Netlify-webhook auto-trigger
- [`routing.md`](./routing.md) — route registry mechanics
- [`deployment.md`](./deployment.md) — Netlify build pipeline
- `docs/wiki-ttb8/entity-article-pipeline.md` — the wiki's synthesized entity page for this same pipeline
- `docs/wiki-ttb8/concept-article-source-of-truth-drift.md` — the registry/routes/ai-articles.tsx divergence referenced throughout this doc
