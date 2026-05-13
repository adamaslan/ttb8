# prep-instagram-post

Prepare a ttb8 article for the Instagram direct-publish pipeline in social-pr-autopilot.

## What this command does

1. Reads the target article route file from `app/routes/`
2. Extracts title, date, tag, body paragraphs, and the article slug
3. Generates a caption optimized for Instagram (hook + body + hashtags, ≤2200 chars)
4. Confirms the article's image exists in `public/` (or flags it as missing)
5. Writes a ready-to-post JSON payload to `instagram-queue/<slug>.json`
6. Prints the `curl` command to fire the payload at the social-pr-autopilot backend

## Usage

```
/prep-instagram-post <slug>
```

Where `<slug>` is the kebab-case route name (e.g. `continuous-pentesting-ci-guide`).

---

## Step 1 — Read the article

Read `app/routes/<slug>.tsx`. Extract:
- `TITLE` constant → post title
- `DATE` constant → post date
- `SLUG` constant → slug (double-check matches argument)
- First element of `bodyParagraphs` → opening hook
- Tag label from the badge div (e.g. "AI News", "AI Tips", "Code World") → category
- Image import path (the `src={...}` in the card) → image file

## Step 2 — Locate the image

Check `public/<image-file>` exists. If not:
- Warn the user: "No image found at public/<image-file>. Run `/prep-instagram-post` again after adding one, or the pipeline will fail."
- Continue anyway so the caption is ready.

The image must be a JPEG or PNG ≤ 8 MB for the Instagram Graph API.

## Step 3 — Generate the Instagram caption

Write a caption in this format (≤2200 chars total):

```
<Hook sentence — first body paragraph, trimmed to ~150 chars if needed>

<2–3 sentences expanding on why this matters, drawn from bodyParagraphs>

<One concrete takeaway or CTA, e.g. "Link in bio for the full guide.">

.
.
.
#hashtag1 #hashtag2 ... (8–15 relevant tags)
```

Rules:
- No markdown formatting (no `**bold**`, no backticks)
- Emojis allowed, but sparingly (1–2 max)
- Hashtags go at the very end, separated from body by three dots on their own lines
- Always include `#tastytechbytes` as the first hashtag

## Step 4 — Write the payload

Create the directory `instagram-queue/` in the ttb8 project root if it doesn't exist.

Write `instagram-queue/<slug>.json`:

```json
{
  "channel": "instagram",
  "caption": "<generated caption>",
  "image_path": "public/<image-file>",
  "title": "<TITLE>",
  "slug": "<slug>",
  "date": "<DATE>",
  "dry_run": true
}
```

`dry_run` is `true` by default — the user must change it to `false` to actually post.

## Step 5 — Print the publish command

Print the following for the user to copy-run when ready:

```
# Dry run (preview only — no post sent):
curl -X POST http://localhost:8000/publish \
  -H "Content-Type: application/json" \
  -d @instagram-queue/<slug>.json

# To actually post, set dry_run=false first:
# edit instagram-queue/<slug>.json → "dry_run": false
# then re-run the curl above
```

Also remind the user:
- The social-pr-autopilot backend must be running (`cd /Users/adamaslan/code/zxy3/social-pr-autopilot/backend && uvicorn app.main:app --reload`)
- `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_BUSINESS_ACCOUNT_ID`, and `INSTAGRAM_PUBLIC_BASE_URL` must be set in the backend's `.env`
- The image at `public/<image-file>` must be publicly reachable at `$INSTAGRAM_PUBLIC_BASE_URL/<image-file>` (use ngrok locally)

## Step 6 — Report back

Summarize:
- Caption (full text)
- Image path checked: exists / missing
- Payload written to: `instagram-queue/<slug>.json`
- Next step: start backend + run curl (or flip `dry_run` to `false`)
