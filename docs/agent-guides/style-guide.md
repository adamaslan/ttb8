# TastyTechBytes — Site-Wide Style Guide

Authoritative style reference for all surfaces: homepage, article pages, and social media (Instagram, and any future channels). Read this before building or editing any UI or content.

The old homepage-only doc (`homepage-grid.md`) remains for homepage grid layout rules. This file covers everything else and takes precedence where they overlap.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Dark Theme — Article Pages](#4-dark-theme--article-pages)
5. [Homepage Grid](#5-homepage-grid)
6. [Article Page Structure](#6-article-page-structure)
7. [Cover Images](#7-cover-images)
8. [Instagram Posts](#8-instagram-posts)
9. [Other Social Channels](#9-other-social-channels)
10. [Category Badges](#10-category-badges)
11. [Components Reference](#11-components-reference)
12. [Things to Avoid](#12-things-to-avoid)

---

## 1. Brand Identity

**Name:** TastyTechBytes  
**Domain:** tastytechbytes.com  
**Tagline:** "Keeping it Tasty in 2025" (update year in `_index.tsx` annually)  
**Voice:** Direct, slightly irreverent, technically credible. Not corporate. Not try-hard casual. Write like a sharp engineer talking to another sharp engineer.  
**Aesthetic:** Dark terminal / hacker + retro pixel art. Black backgrounds, green monospace accents, colorful category badges as the only pops of color.

### Logo / wordmark

Rendered in the Navbar as animated staggered text with gradient "Bytes":

- "Tasty" — white, `font-black`, slight per-letter rotation
- 🍰 and ⚡ emoji separators
- "Bytes" — each letter a different gradient (`purple→pink`, `blue→green`, `orange→red`, `yellow→orange`, `green→blue`)

Never reproduce the logo as a flat static string. Always use the Navbar component.

---

## 2. Color System

### Base palette (all pages)

| Token | Tailwind class | Use |
|-------|---------------|-----|
| Page background | `bg-black` | Homepage `<main>`, all article pages |
| Card background | `bg-gray-950` | Article section cards |
| Card hover | `hover:bg-gray-900` | Homepage article cards |
| Card border | `border-gray-800` | Article section cards |
| Ad slot border | `border-gray-700` | Ad placeholder borders |
| Ad slot background | `bg-gray-900` | Ad placeholder fill |
| Primary text | `text-white` or `text-gray-100` | Headlines, body on dark bg |
| Secondary text | `text-gray-300` | Body paragraphs in article cards |
| Muted text | `text-gray-400` – `text-gray-600` | Captions, dates, meta, footers |
| Accent / code | `text-green-400` | ASCII art, code blocks, terminal output, article section headings |
| Code block bg | `bg-black` | `<pre>` blocks inside article cards |
| Code block border | `border-gray-800` | `<pre>` blocks |
| Inline code | `bg-gray-800 text-green-300` | `<code>` spans |

### Accent gradients (Navbar and hero only)

| Use | Classes |
|-----|---------|
| Site hero title | `text-blue-400` |
| Daily article banner | `bg-gradient-to-r from-blue-500 to-purple-600` |
| Nav link hovers | cyan→blue, green→blue, pink→purple (per link) |

Do not use gradients on article pages or social images — they undermine the terminal aesthetic.

### Category badge colors

Keep colors consistent across every surface (homepage cards, article badges, Instagram captions, future social).

| Category | Tailwind class | Notes |
|----------|---------------|-------|
| AI News | `bg-red-600` | Releases, announcements, security |
| AI Tips | `bg-purple-400` | Tutorials, how-tos |
| Drink World | `bg-yellow-500` | Whiskey, beverages |
| 3D World | `bg-purple-900` | Blender, ThreeJS art |
| Code World — Helpful | `bg-red-900` | Dev tutorials |
| Code World — Random | `bg-green-400` | Fun, trivia |
| Code Art — ThreeJS | `bg-green-800` | Visual coding |
| Software — IDE | `bg-blue-500` | Editor tips |
| Tech World | `bg-pink-600` | Hardware, gear hacks |

**When adding a new category:** reuse an existing color first. If you must add one, document it here in the same PR.

---

## 3. Typography

### Font stack

Tailwind's default sans stack for UI text. `font-mono` for all code, ASCII art, and terminal output.

### Scale (Tailwind responsive)

| Element | Classes |
|---------|---------|
| Site title (homepage) | `text-2xl sm:text-4xl lg:text-6xl font-extrabold uppercase` |
| Article page h1 | `text-3xl font-bold` |
| Article section heading | `text-xs font-semibold uppercase tracking-wide` (green-500) |
| Homepage card h2 (big) | `text-2xl sm:text-3xl lg:text-4xl font-bold` |
| Homepage card h2 (small) | `text-xl sm:text-2xl font-bold` |
| Body paragraph | `text-sm` or `text-base`, `leading-relaxed` |
| Code / terminal | `text-xs font-mono` |
| Badge / pill | `text-sm font-bold` (hero big card: `text-base`) |
| Date / meta | `text-sm text-gray-500` |
| Footer | `text-xs text-gray-600` |

### Heading hierarchy

- `<h1>` — article page title only (one per page)
- `<h2>` — homepage card titles and article section headings
- `<h3>` and below — within article sections only

---

## 4. Dark Theme — Article Pages

Every article page uses a full black/dark theme. No light backgrounds anywhere on an article page.

### Shell

```tsx
<div className="min-h-screen bg-black text-gray-100">
  <header className="bg-black border-b border-gray-800 py-6">
    <div className="container mx-auto px-4">
      <pre className="text-xs leading-tight font-mono overflow-x-auto text-green-400">
        {ASCII_ART}
      </pre>
    </div>
  </header>

  <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
    {/* content sections */}
  </main>

  <footer className="bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600">
    {Category} · {SLUG} · TastyTechBytes
  </footer>
</div>
```

### Section cards

```tsx
<section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
  <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
    Section Title
  </h2>
  <p className="text-gray-300 leading-relaxed text-sm">...</p>
</section>
```

### Code blocks

```tsx
<pre className="bg-black text-green-400 text-xs rounded-lg p-4 overflow-x-auto font-mono border border-gray-800">
  {`your code here`}
</pre>
```

### Inline code

```tsx
<code className="bg-gray-800 text-green-300 px-1 rounded">value</code>
```

### Links (article body)

```tsx
<a href="..." className="text-green-400 hover:underline">link text</a>
```

### Badge / title block (top of article)

```tsx
<div>
  <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
    AI News
  </span>
  <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
  <p className="text-sm text-gray-500 mt-1">{DATE}</p>
</div>
```

### Feature/info cards (e.g. feature grids)

```tsx
<div className="bg-gray-950 rounded-lg border border-gray-800 p-4">
  <div className="font-semibold text-green-400 text-sm mb-1">{name}</div>
  <div className="text-xs text-gray-400">{detail}</div>
</div>
```

### CI pattern / data row cards

```tsx
<div className="bg-gray-950 rounded-lg border border-gray-800 p-4 flex justify-between items-start gap-4">
  <div>
    <div className="font-semibold text-gray-100 text-sm">{label}</div>
    <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
  </div>
  <span className="text-xs bg-gray-800 text-gray-300 rounded-full px-2 py-1 shrink-0">
    {tag}
  </span>
</div>
```

### Bullet lists

```tsx
<ul className="space-y-2">
  <li className="flex gap-2 text-sm text-gray-300">
    <span className="text-green-400 font-bold">▸</span>
    Item text
  </li>
</ul>
```

### Back-to-home link

```tsx
<p className="text-center">
  <Link to="/" className="text-green-400 hover:underline text-sm">← Back to Home</Link>
</p>
```

---

## 5. Homepage Grid

See [homepage-grid.md](./homepage-grid.md) for full layout rules (3-part grid, breakpoints, slot classes, ad rail).

Key rules that also apply site-wide:

- Homepage `<main>` background: `bg-black`
- Card hover: `hover:bg-gray-900` (transition-all duration-300 ease-in-out)
- Card images: `rounded-2xl` (not `rounded-full`)
- Card headings: `text-white`, `font-bold`, `tracking-tight`
- Image imports: always Vite static imports at the top of `_index.tsx`, never inline `/path.jpg` strings

---

## 6. Article Page Structure

Every article route must follow this constant + structure convention:

```tsx
const TITLE = "Article Title Here";
const DATE  = "Month YYYY";
const SLUG  = "kebab-case-slug";   // must match filename and route

const bodyParagraphs = [ /* strings */ ];
```

Required sections in order:

1. `<header>` — ASCII art block in `text-green-400 font-mono`
2. Badge + `<h1>` + date
3. Intro section (bodyParagraphs)
4. Content sections (steps, features, tables, code blocks)
5. Resources/links section
6. Source attribution
7. `← Back to Home` link
8. `<footer>`

Required meta exports:

```tsx
export const meta: MetaFunction = () => [
  { title: TITLE },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];
```

ASCII art: every article gets a unique ASCII diagram in the header that visually represents the article's core concept. Keep it under 60 chars wide so it wraps cleanly on mobile. Style: box-drawing characters (`╔ ║ ╚ ─ ┌ └ ├ │`), `░` for progress, `▼ ◆ ✓ ✗` for status.

---

## 7. Cover Images

Every article needs a cover image for the homepage card and Instagram.

### Rule: Ask First Before Generating Images
- **Always ask the user first** before generating any new images. The user often has existing images prepared in `ttb8/images/` or elsewhere.
- Only proceed with image generation if the user confirms or requests a new image to be generated.

### Generation (If Requested)

Use Imagen API (`imagen-4.0-fast-generate-001`, $0.02/image). See [article-to-instagram-pipeline.md](./article-to-instagram-pipeline.md) for the full curl command.

### Prompt template

```
8-bit pixel art of <article topic>, retro terminal aesthetic, dark background, terminal green accents
```

Keep prompts under 100 words. Always include `dark background` — light images clash with the site's black theme.

### File conventions

- Save to `public/<slug>.png` (or `.jpg`)
- Import in `_index.tsx` at the top: `import myImg from "/slug.png";`
- Never inline the string path directly in JSX

### Dimensions

Instagram requires a minimum 1080×1080 px square or 1080×1350 portrait. Imagen outputs 1024×1024 by default — acceptable for both.

### Render it in the article body, not just meta tags

The cover image constant must appear as an actual `<img src={hero} ... />` in
the article JSX, not only in `meta()` (`og:image`, `twitter:image`,
`linkedin:image`). Meta tags control link-preview cards on other platforms —
they render nothing on the page itself. A hero defined but only referenced in
`meta()` silently ships an article with no image above the fold.

```tsx
<section className="mb-8">
  <img className="mx-auto my-auto h-1/2 w-1/2 rounded-2xl" src={hero} alt="{descriptive alt}" />
</section>
```

Place it directly after the `<header>`, before the first body paragraph.

### If the article will be featured in Part 1's "big" homepage slot

Generate a landscape image (~16:9 or ~4:3), not the default 1024×1024 square.
The Part 1 featured slot (`md:col-span-2 md:row-span-2`, see
[homepage-grid.md](./homepage-grid.md)) is wide and tall; a square image
placed there forces a choice between visible dead space or a cropped/sliced
image, and no CSS-only fix resolves this cleanly — it has to be solved at
generation time. See `docs/wiki-ttb8/entity-article-pipeline.md` "Known
failures" for the incident this came from.

---

## 8. Instagram Posts

### Account

Handle: `@tastytechbytes`  
First hashtag always: `#tastytechbytes`

### Caption structure

```
<Hook — first body paragraph, trimmed to ~150 chars>

<2–3 sentences on why this matters, drawn from bodyParagraphs>

<CTA — "Link in bio for the full guide." or similar>

.
.
.
#tastytechbytes #hashtag2 #hashtag3 ... (8–15 total)
```

### Caption rules

- No markdown (`**bold**`, backticks, `#Header`)
- Max 2200 characters total
- Emojis: 1–2 max, only if they add meaning (not decoration)
- Hashtags always at the very end, after three separator dots on their own lines
- Tone: same as article voice — direct, technically credible, not hype-y

### Hashtag selection

Always start with `#tastytechbytes`. Then mix:
- Topic-specific (e.g. `#pentesting`, `#appsecurity`, `#blender3d`)
- Audience (e.g. `#devops`, `#webdev`, `#aitools`, `#machinelearning`)
- Platform (e.g. `#coding`, `#programming`, `#techblog`)

Avoid generic vanity tags (`#instagood`, `#follow`) — they attract spam, not readers.

### Image requirements

- Format: JPEG or PNG
- Max size: 8 MB
- Aspect ratio: 1:1 (square, 1080×1080) preferred; 4:5 portrait (1080×1350) also works
- Must be publicly reachable at `$INSTAGRAM_PUBLIC_BASE_URL/<slug>.png` at post time

### Workflow

Run `/prep-instagram-post <slug>` to generate the caption and JSON payload. Full publishing steps in [article-to-instagram-pipeline.md](./article-to-instagram-pipeline.md).

---

## 9. Other Social Channels

No other channels are currently active. When adding one, document it here. General principles that will apply:

### Twitter / X

- Max 280 chars for main tweet; thread if longer
- Same voice — no hype, no emoji spam
- Lead with the hook sentence from the article
- End with the URL (not "link in bio")
- Hashtags: 1–2 max at the end, not inline
- Image: the same cover image as Instagram

### LinkedIn

- Longer form than Twitter, shorter than the article
- Audience skews professional — lean into the technical credibility angle
- No hashtag wall; 3–5 max, inline or at end
- Include a direct link (LinkedIn doesn't penalize external links as heavily as other platforms)
- Format: short paragraphs, no markdown

### General rules for any new channel

1. Document the channel's handle, audience, and character limits here before using it
2. Reuse the article's `TITLE`, `bodyParagraphs[0]`, and cover image as raw material
3. Always include the site name ("TastyTechBytes") and a link back
4. Match the voice: direct, technically credible, not corporate, not try-hard

---

## 10. Category Badges

Use exactly these labels — no variations:

| Label | Background |
|-------|-----------|
| `AI News` | `bg-red-600` |
| `AI Tips` | `bg-purple-400` |
| `Drink World - Helpful` | `bg-yellow-500` |
| `3D World - Helpful` | `bg-purple-900` |
| `Code World - Helpful` | `bg-red-900` |
| `Code World - Random` | `bg-green-400` |
| `Code Art - ThreeJS` | `bg-green-800` |
| `Software - Webstorm` | `bg-blue-500` |
| `Tech World - Helpful` | `bg-pink-600` |

Badge markup (article page):
```tsx
<span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
  AI News
</span>
```

Badge markup (homepage card):
```tsx
<div className="rounded-full bg-red-600 p-1 text-sm font-bold tracking-tight text-white">
  AI News
</div>
```

---

## 11. Components Reference

| Component | File | Notes |
|-----------|------|-------|
| Navbar | `app/components/Navbar.tsx` | Rendered in `root.tsx` — never import in individual routes |
| AdSlot | inline in `_index.tsx` | Extract to component if used outside homepage |
| Cloud (3D) | `app/components/Cloud.tsx` | Three.js; keep heavy 3D in `app/components/` |

---

## 12. Things to Avoid

### UI / layout

- **Don't** use `bg-white`, `bg-gray-100`, or any light background on article pages — the whole site is dark
- **Don't** use `rounded-full` on rectangular images — use `rounded-2xl`
- **Don't** inline absolute image paths (`"/foo.jpeg"`) — use Vite imports
- **Don't** add `style={{ ... }}` for layout — use Tailwind classes
- **Don't** use gradients on article pages — terminal aesthetic only
- **Don't** mix `col-start-N` with `col-span` overrides in the same grid section without explicit `grid-rows-N`

### Content / copy

- **Don't** write article body text longer than ~150 chars per sentence — readability drops on mobile
- **Don't** copy the same paragraph into both intro and TOCTOU sections — split them instead
- **Don't** use inline `**markdown bold**` in article JSX — use `<span className="font-semibold">` instead

### Social media

- **Don't** use markdown formatting in Instagram captions
- **Don't** add more than 2 emojis per post
- **Don't** post without confirming `dry_run: false` in the JSON payload
- **Don't** add generic hashtags (`#instagood`, `#love`, `#follow`)
- **Don't** post before verifying the image is publicly reachable at `$INSTAGRAM_PUBLIC_BASE_URL/<slug>.png`

### Routes

- **Don't** create a route file without registering it in `app/routes.ts`
- **Don't** delete a route without adding a 301 redirect to the old slug
- **Don't** commit without running `npm run typecheck`
