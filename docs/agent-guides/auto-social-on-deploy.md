# Auto Social Post on Article Deploy

How to trigger Instagram (and other channel) posts automatically when a new article
merges to `main` and deploys on Netlify.

---

## Overview

The pipeline has three stages:

```
PR merged to main
  └─ Netlify build succeeds (deploy-succeeded event)
       └─ Netlify webhook → social-pr-autopilot backend
            └─ POST /publish → Instagram Graph API
```

The key insight: Netlify fires an outgoing webhook on `deploy-succeeded`. The
social-pr-autopilot backend already accepts a `POST /publish` payload. The only
missing piece is a **thin adapter** that receives the Netlify webhook, detects
which article slug is new, builds the caption payload, and forwards it.

---

## Prerequisites

- `social-pr-autopilot` backend running and reachable at a public URL (not
  `localhost` — use a VPS, Railway, Render, or Fly.io)
- `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_BUSINESS_ACCOUNT_ID`, and
  `INSTAGRAM_PUBLIC_BASE_URL` set in the backend's `.env`
- Article images committed to `public/` and served at `$INSTAGRAM_PUBLIC_BASE_URL`
- The `ai-news-pipeline-tracker.csv` kept up-to-date (slug + status columns are
  used to detect new articles)

---

## Step 1 — Add a Netlify outgoing webhook

In the Netlify dashboard for the `ttb8` site:

1. **Site settings → Build & deploy → Deploy notifications → Outgoing webhooks**
2. Click **Add notification → Outgoing webhook**
3. Event: `Deploy succeeded`
4. URL: `https://<your-backend-host>/netlify-deploy-hook`
5. Save. Netlify will POST a JSON body to that URL on every successful deploy.

The Netlify payload looks like:

```json
{
  "id": "...",
  "site_id": "...",
  "deploy_id": "...",
  "title": "Deploy title",
  "branch": "main",
  "commit_ref": "abc123",
  "deploy_url": "https://tastytechbytes.com"
}
```

Only the `branch` field is used — ignore deploys that are not `main`.

---

## Step 2 — Add the `/netlify-deploy-hook` endpoint to social-pr-autopilot

In the social-pr-autopilot backend, add a new route. The logic:

1. Verify the request comes from Netlify (check a shared secret header).
2. Ignore if `branch != "main"`.
3. Read `ai-news-pipeline-tracker.csv` from the ttb8 repo (checked out as a
   sibling directory, or fetched from GitHub via API).
4. Find any rows where `status == "published"` and no `social_posted_at` timestamp
   exists yet — that's the new article.
5. For each new slug, build the caption payload (same logic as `/prep-instagram-post`)
   and call `POST /publish` internally with `dry_run: false`.
6. Write `social_posted_at` back to the CSV (or a sidecar `.json` log) to prevent
   double-posting.

```python
# backend/app/routers/deploy_hook.py  (sketch)

from fastapi import APIRouter, Header, HTTPException, Request
from app.services.caption import build_caption_payload
from app.services.instagram import publish
from app.services.tracker import find_unposted_slugs, mark_posted

router = APIRouter()

NETLIFY_SECRET = os.environ["NETLIFY_WEBHOOK_SECRET"]

@router.post("/netlify-deploy-hook")
async def netlify_deploy_hook(
    request: Request,
    x_webhook_secret: str = Header(None),
):
    if x_webhook_secret != NETLIFY_SECRET:
        raise HTTPException(status_code=401)

    body = await request.json()
    if body.get("branch") != "main":
        return {"skipped": "not main branch"}

    slugs = find_unposted_slugs()          # reads tracker CSV / sidecar log
    for slug in slugs:
        payload = build_caption_payload(slug)  # same logic as /publish
        await publish(payload, dry_run=False)
        mark_posted(slug)

    return {"posted": slugs}
```

---

## Step 3 — Secure the webhook

Add a shared secret so random actors can't trigger posts:

1. Generate a secret: `openssl rand -hex 32`
2. Set `NETLIFY_WEBHOOK_SECRET=<value>` in the backend's `.env`
3. In the Netlify outgoing webhook settings, add a custom header:
   - Header name: `x-webhook-secret`
   - Value: `<same value>`

---

## Step 4 — Track which slugs have been posted

The simplest approach: a sidecar JSON file committed alongside
`ai-news-pipeline-tracker.csv`:

```json
// social-post-log.json
{
  "continuous-pentesting-ci-guide": "2026-05-12T18:42:00Z",
  "snapstate-persistent-state-for-ai-agent-workflows": "2026-05-13T09:11:00Z"
}
```

`find_unposted_slugs()` reads the tracker CSV, filters `status == "published"`,
then excludes any slug already in `social-post-log.json`.

Commit `social-post-log.json` to the ttb8 repo so it survives backend restarts.
The backend must have write access to the repo (GitHub App token or deploy key).

Alternatively, store this in a small SQLite DB on the backend host — simpler if
you don't want the backend writing back to git.

---

## Step 5 — Test the hook locally

Use [ngrok](https://ngrok.com) to expose your local backend, then manually
trigger a deploy in Netlify:

```bash
# Terminal 1 — run backend
cd social-pr-autopilot/backend
uvicorn app.main:app --reload

# Terminal 2 — expose it
ngrok http 8000
# → Forwarding https://abc123.ngrok.io → localhost:8000

# In Netlify dashboard: update the webhook URL to https://abc123.ngrok.io/netlify-deploy-hook
# Then trigger a manual deploy: Netlify dashboard → Deploys → Trigger deploy
```

Watch the backend logs for the incoming payload and the Instagram API response.

---

## Failure modes and mitigations

| Failure | Mitigation |
|---|---|
| Backend is down when Netlify fires | Netlify does not retry outgoing webhooks — add a cron job that re-checks for unposted slugs every hour |
| Double-post on re-deploy | `social-post-log.json` / sidecar DB prevents re-processing already-posted slugs |
| Image not yet publicly reachable | Netlify's CDN propagation is fast but not instant — add a 30-second sleep before the publish call, or poll the image URL before posting |
| Instagram API rate limit | The Graph API allows ~200 posts/day per account; not a concern for ttb8's publish cadence |
| Wrong article posted | The tracker CSV is the source of truth — keep `status` accurate; only rows marked `published` with no `social_posted_at` are eligible |

---

## Optional: multi-channel

To also post to Twitter/X or LinkedIn on deploy, add channel-specific services
behind the same `/netlify-deploy-hook` endpoint:

```python
for slug in slugs:
    payload = build_caption_payload(slug)
    await publish_instagram(payload)
    await publish_twitter(payload)     # add when ready
    await publish_linkedin(payload)    # add when ready
    mark_posted(slug)
```

Each channel gets its own caption formatter (Twitter needs ≤280 chars; LinkedIn
allows 3000 but performs best at ~150 + link).

---

## Related files

- [prep-instagram-post command](../../.claude/commands/prep-instagram-post.md) — manual version of this pipeline
- [ai-news-pipeline-tracker.csv](../../ai-news-pipeline-tracker.csv) — source of truth for slug/status
- [deployment.md](deployment.md) — Netlify build and env var setup
