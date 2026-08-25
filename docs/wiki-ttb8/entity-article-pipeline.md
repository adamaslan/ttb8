---
date: 2026-08-24
type: entity
tags: [articles, instagram, imagen, automation, publishing]
sources: [docs/agent-guides/article-to-instagram-pipeline.md, docs/agent-guides/instagram-robustness.md, instagram-queue/, docs/agent-guides/style-guide.md, PR#43]
---

# entity: Article → Image → Instagram Pipeline

## What it is

The semi-manual pipeline that turns a written article into a published Instagram post, spanning this repo and a separate backend:

```
app/routes/<slug>.tsx (hand-written article)
  → registered in app/routes.ts                    (entity-routing)
  → cover image via Imagen 4 Fast API → public/<slug>.png   ($0.02/image)
  → card added to app/routes/_index.tsx
  → /prep-instagram-post <slug>  → instagram-queue/<slug>.json
  → social-pr-autopilot backend (uvicorn, separate repo) → Instagram Graph API
```

- **Image generation**: `imagen-4.0-fast-generate-001` at $0.02/image is the default (vs. $0.04 standard, $0.06 ultra). Prompt convention: lead with `"8-bit pixel art of ..."`, include `"dark background"`/`"terminal green"` for the site's retro aesthetic, keep prompts under ~100 words.
- **Caption authoring**: the `/prep-instagram-post <slug>` slash command reads the article and writes a caption following a fixed structure — hook (≤150 chars) → 2–3 sentences on why it matters → CTA ("Link in bio for the full guide.") → separator → 8–15 hashtags always starting with `#tastytechbytes`.
- **Publish job format**: `instagram-queue/<slug>.json` — `{channel, caption, image_path, title, slug, date, dry_run}`. `dry_run: true` by default; must be manually flipped to `false` before a live post.
- **Publish backend**: `social-pr-autopilot` (FastAPI/uvicorn, **not in this repo** — per user memory, run in mamba env `auto1`) exposes `POST /publish`, which consumes the queue JSON and calls the Instagram Graph API. Requires `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_BUSINESS_ACCOUNT_ID`, `INSTAGRAM_PUBLIC_BASE_URL` env vars — the image must be reachable at `$INSTAGRAM_PUBLIC_BASE_URL/<slug>.png`, which locally means running `ngrok http 3000` and pointing the base URL at the ngrok tunnel.

## Where used

- Every article published to Instagram follows this exact sequence — see commit history for repeated instances (Norway AI ban article, Pensar article, Robinhood articles, etc.)
- `docs/agent-guides/instagram-robustness.md` — a companion doc (added 2026-08-24, not yet read into this wiki in detail) presumably covering pipeline hardening; flag for a follow-up ingest pass

## Known failures

- **The running backend holds live credentials in-process.** Per the user's global CLAUDE.md safety rule, killing the uvicorn backend to fix a stale tunnel URL previously destroyed in-memory API credentials, requiring manual retrieval from the Meta Graph API Explorer. This is the origin of the "never kill a running process without warning" rule — treat any running `social-pr-autopilot` backend as holding unrecoverable state.
- **The backend is outside this repo's control.** If it isn't running, `/prep-instagram-post` still succeeds (it only writes the queue JSON) — the failure is silent until someone tries to actually publish.
- **`ngrok` URLs are ephemeral.** Every local restart requires updating `INSTAGRAM_PUBLIC_BASE_URL` and re-verifying the image is reachable before publishing; stale URLs produce Graph API fetch failures on Instagram's side, not this repo's.
- **A cover image can be wired into `meta()` and never rendered on the page.** The Dextego article (`app/routes/dextego-10-things-ai-sales-coaching.tsx`, PR #43) defined `const hero = "/dextego1.png"` and used it in `og:image`/`twitter:image`/`linkedin:image` only — no `<img>` in the JSX body, so the article shipped with no visible hero image despite passing typecheck and looking complete in the meta tags. Fixed 2026-08-25 by adding `docs/agent-guides/style-guide.md` §7 "Render it in the article body, not just meta tags," with the required `<img>` snippet placed right after `<header>`.
- **Standard Imagen 1024×1024 square output doesn't fit the Part 1 "big" homepage slot.** The Part 1 hero rail's featured card spans `md:col-span-2 md:row-span-2` (see [[concept-article-source-of-truth-drift]] and `docs/agent-guides/homepage-grid.md`) — a wide, tall slot. Dextego's cover image (`public/dextego1.png`, confirmed 1080×1125px — near-square, not landscape) was placed there and went through several unsuccessful layout fixes: `max-h-64` cut it off, `flex-1 object-cover` cropped/sliced it, a forced `aspectRatio: "16 / 9"` cropped it further, and `w-4/5` + centering just relocated the dead space instead of removing it. None of these CSS-only approaches work because the fix belongs upstream, in image generation, not in the homepage layout: **the featured/"big" slot needs a genuinely landscape (e.g. ~16:9 or ~4:3) source image, not a re-crop of a square one.** Currently reverted to plain `h-auto max-w-full` (no forced crop) as of 2026-08-25 — safe but still leaves the aspect-ratio mismatch unresolved. `docs/agent-guides/style-guide.md` §7 documents cover image generation (1024×1024 square, sized for Instagram) but has no separate guidance for the wider homepage-featured-slot case.

## Open questions

- ❓ Is there a production (non-ngrok) `INSTAGRAM_PUBLIC_BASE_URL`? The docs only describe the local/ngrok flow.
- ❓ What does `docs/agent-guides/instagram-robustness.md` add on top of the base pipeline guide — retry logic? rate-limit handling? Needs a read-through and cross-link from this page.
- ❓ Is there any guard preventing a `dry_run: false` post before the image is confirmed publicly reachable? The checklist in the source doc is manual, not enforced.

## See also

- [[entity-routing]] — step 1, registering the article route
- [[concept-article-source-of-truth-drift]] — the homepage card is a separate authoring step from the route registration this pipeline depends on
- `docs/agent-guides/article-to-instagram-pipeline.md` — full step-by-step guide with the Imagen curl command and cost table
- `docs/agent-guides/instagram-robustness.md` — companion robustness doc: the v2 queue schema, image/caption validation, idempotent publish state machine, credential/token-expiry handling, and a generic per-project config
- `docs/agent-guides/auto-social-on-deploy.md` — proposed (not yet wired) Netlify `deploy-succeeded` webhook that would trigger publish automatically instead of the current manual `/prep-instagram-post` + backend flow
- `docs/agent-guides/ideal-article-instagram-workflow.md` — **full outlet map**: every system, every live vs. proposed-only outlet (article page, homepage card, `/articles` grid, Instagram, Twitter/X, LinkedIn), and the current-state-vs-ideal-state gap
