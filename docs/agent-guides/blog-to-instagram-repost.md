# Blog → Instagram: Repurposing an Article into an Instagram Post

Process used for the first repurposed post (PR #52 article → Instagram),
so it can be repeated for future articles.

## Source article

- **Article:** "Getting Reliable JSON Out of LLMs: Structured Outputs That Survive Production"
- **Route:** `/structured-outputs-json-schema-llms` (`app/routes/structured-outputs-json-schema-llms.tsx`)
- **Source PR:** #52 — "Publish first article: reliable JSON with structured outputs" (branch `article/first-structured-outputs-20261110`)
- **Live URL (once merged):** https://tastytechbytes.com/structured-outputs-json-schema-llms
- **Instagram account:** @tastytechbytes

## Process

1. **Read the article.** Pull the title, description, key sections, and any
   visual hook (this article's homepage card is a green-on-black
   `TEXT → SCHEMA → VALID JSON` banner). Note the article's own angle:
   schema-constrained decoding moves the contract into the decoder, so the
   failure mode changes from silent corruption to a visible retry.
2. **Pick a fun angle.** Translate the core idea into one vivid metaphor
   the image and caption can share. For this article: the decoder as an
   enforcer — first a nightclub bouncer, then a noir detective
   interrogating bad JSON, then the detective became a woman with sexy
   nerd vibes (glasses, leather jacket, circuit-board tee).
3. **Generate the image.** Vertical 4:5 portrait (1408×1760), matching the
   angle. Keep it bold and eye-catching; avoid readable text in generated
   images (it garbles). Save the working file under
   `workspace/blog-ig-integration/`.
4. **Write the caption (≤ 2,200 characters).** Structure that worked here:
   hook → the failure mode in plain language → what structured outputs
   changes → the article's adoption steps → "link in bio" + article URL →
   hashtags (#json #llm #ai #structuredoutputs #jsonschema #webdev
   #coding #aidev).
5. **Show image + caption in chat first.** Instagram feed posts have no
   draft mode, so nothing is previewable on Instagram itself. Publish only
   after explicit approval of the exact image and caption.
6. **Publish** with `instagram-cli post-feed --account-id <tastytechbytes
   fbid> --file <image> --caption '<caption>'`. No retries on publish
   (a retry can duplicate the post). Record the published post URL below.
7. **Iterate on feedback.** This post went through three images:
   - v1: nightclub bouncer — declined at approval; feedback was that it
     was boring.
   - v2: cheerful robot sorting JSON puzzle pieces — superseded before
     review.
   - v3: noir detective interrogating crumpled JSON under a red lamp —
     the version shown for approval.
   - v4: same noir scene, but the detective is a woman with sexy nerd
     vibes — published version.

## Assets for this post

- Image (v4, published): `workspace/blog-ig-integration/media-generation-structured-outputs-woman-detec-0-cbf35de0-0f36-43ed-b607-3c93c6f49498.jpg`
- Caption: `workspace/blog-ig-integration/structured-outputs-ig-caption.txt`
- Published Instagram post: https://www.instagram.com/p/DflDFWgjuaU/

## Repeating this for the next article

- Source the article from its PR (title, route, description, key points).
- Reuse steps 2–6. Keep the caption structure and hashtag set; swap the
  metaphor, image, and adoption steps to fit the article.
- The homepage-watcher baseline (`workspace/blog-ig-integration/`) tracks
  which articles already have Instagram versions.
