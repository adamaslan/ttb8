# Article → Image → Instagram Pipeline Guide

A generic, reusable guide for automating the full pipeline: write a web article, generate a cover image with the Imagen API, add it to the index page, and publish to Instagram via the Graph API.

---

## Overview

```
Article route (.tsx)
    ↓
Imagen 4 API  →  public/<slug>.png
    ↓
_index.tsx    →  article card added above previous
    ↓
/prep-instagram-post <slug>
    ↓
instagram-queue/<slug>.json
    ↓
social-pr-autopilot backend  →  Instagram Graph API
```

---

## Prerequisites

| Tool | Purpose |
|------|---------|
| Google Gemini / Imagen API key | Image generation |
| Instagram Business Account | Publishing |
| Instagram Graph API access token | Auth for the Graph API |
| `ngrok` (local) or a public URL | Serving images to Instagram |
| social-pr-autopilot backend running | Publish proxy |

---

## Step 1 — Write the article route

Create `app/routes/<slug>.tsx` following the standard ttb8 article pattern:

- `TITLE`, `DATE`, `SLUG` constants at the top
- `bodyParagraphs` array for the article body
- A badge label (e.g. `"AI News"`) for the category chip
- A `<pre>` block with ASCII art in the header
- Export a `meta` function with OG tags
- `← Back to Home` link at the bottom

Register the route in `app/routes.ts`:
```ts
route("continuous-pentesting-ci-guide", "./routes/continuous-pentesting-ci-guide.tsx"),
```

---

## Step 2 — Generate the cover image with Imagen API

Use `imagen-4.0-fast-generate-001` for standard quality at the lowest cost.

### Pricing (as of May 2026)

| Model | Cost per image |
|-------|---------------|
| `imagen-4.0-fast-generate-001` | **$0.02** |
| `imagen-4.0-generate-001` (standard) | **$0.04** |
| `imagen-4.0-ultra-generate-001` | **$0.06** |

At ~1 image per article, fast tier costs **$0.02/article**. 50 articles/month = **$1.00/month**.

### curl command

```bash
curl -s -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-fast-generate-001:predict?key=$GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "instances": [{"prompt": "8-bit pixel art of <article topic>, retro terminal aesthetic, dark background"}],
    "parameters": {"sampleCount": 1}
  }' | python3 -c "
import sys, json, base64
data = json.load(sys.stdin)
b64 = data['predictions'][0]['bytesBase64Encoded']
with open('public/<slug>.png','wb') as f:
    f.write(base64.b64decode(b64))
print('saved')
"
```

Prompt tips:
- Lead with `"8-bit pixel art of ..."` to get a consistent retro style matching the site aesthetic
- Include `"dark background"` and `"terminal green"` for the CI/tech look
- Keep the prompt under 100 words — Imagen performs best with concise descriptions

---

## Step 3 — Add the article card to the index page

In `app/routes/_index.tsx`:

1. Import the image at the top:
```tsx
import myArticleImage from "/continuous-pentesting-ci-guide.png";
```

2. Add a `<Link>` card in the grid **above** the previous article's card:
```tsx
<Link to="/continuous-pentesting-ci-guide">
  <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
    <div className="rounded-full bg-red-600 p-1 text-lg font-bold tracking-tight text-white">
      AI News
    </div>
    <img
      className="m-2 h-auto max-w-full rounded-full"
      src={myArticleImage}
      alt="<Article title>"
    />
    <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-2xl lg:pb-12 lg:text-3xl">
      <Article title>
    </h1>
  </div>
</Link>
```

Badge color conventions used in this project:
- `bg-red-600` — AI News / security
- `bg-purple-400` — AI Tips
- `bg-blue-500` — Software
- `bg-purple-900` — 3D World
- `bg-green-400` — Code World / Random

---

## Step 4 — Prepare the Instagram post

Run the slash command:

```
/prep-instagram-post <slug>
```

This reads the article, writes a caption, and outputs `instagram-queue/<slug>.json`:

```json
{
  "channel": "instagram",
  "caption": "...",
  "image_path": "public/<slug>.png",
  "title": "...",
  "slug": "<slug>",
  "date": "...",
  "dry_run": true
}
```

Caption structure the command generates:
1. Hook (first body paragraph, ≤150 chars)
2. 2–3 sentences on why it matters
3. CTA ("Link in bio for the full guide.")
4. Separator (three dots on their own lines)
5. 8–15 hashtags, always starting with `#tastytechbytes`

---

## Step 5 — Publish via social-pr-autopilot

### Start the backend

```bash
cd <path-to-social-pr-autopilot>/backend
uvicorn app.main:app --reload
```

Required env vars in `.env`:
```
INSTAGRAM_ACCESS_TOKEN=<long-lived token>
INSTAGRAM_BUSINESS_ACCOUNT_ID=<numeric ID>
INSTAGRAM_PUBLIC_BASE_URL=https://<your-ngrok-or-domain>
```

The image at `public/<slug>.png` must be reachable at `$INSTAGRAM_PUBLIC_BASE_URL/<slug>.png` — locally use ngrok:
```bash
ngrok http 3000
# then set INSTAGRAM_PUBLIC_BASE_URL=https://<hash>.ngrok.io
```

### Dry run (preview, no post sent)

```bash
curl -X POST http://localhost:8000/publish \
  -H "Content-Type: application/json" \
  -d @instagram-queue/<slug>.json
```

### Live post

Edit `instagram-queue/<slug>.json`, set `"dry_run": false`, then re-run the curl.

---

## Checklist

- [ ] Article route created and registered in `app/routes.ts`
- [ ] ASCII art header written into the route
- [ ] `npm run typecheck` passes
- [ ] Imagen API image generated and saved to `public/<slug>.png`
- [ ] Index page updated with card above previous article
- [ ] `/prep-instagram-post <slug>` run — caption reviewed
- [ ] `instagram-queue/<slug>.json` created
- [ ] Backend running with all three env vars set
- [ ] Image publicly reachable at `$INSTAGRAM_PUBLIC_BASE_URL/<slug>.png`
- [ ] Dry run tested → `dry_run` flipped to `false` → live post sent

---

## Cost summary

For a single article:

| Step | Cost |
|------|------|
| Imagen 4 Fast image | $0.02 |
| Instagram Graph API | Free |
| Hosting / ngrok (local) | Free |
| **Total per article** | **~$0.02** |

At 50 articles/month: **~$1.00/month** for image generation.

Sources:
- [AI Image Generation API Pricing (April 2026)](https://www.buildmvpfast.com/api-costs/ai-image)
- [Imagen 4 Pricing and API Access (2026)](https://magichour.ai/blog/imagen-4-pricing-and-api)
