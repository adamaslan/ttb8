# TastyTechBytes (TTB8) — Article Style Guide

Authoritative design, structure, and implementation standard for all article routes, signal reports, and technical guides across TastyTechBytes.

---

## 1. Brand Identity & Aesthetic

* **Name:** TastyTechBytes
* **Domain:** `tastytechbytes.com`
* **Voice:** Direct, highly technical, concise, credible. Written like one senior engineer or quantitative researcher speaking to another. Avoid marketing fluff, corporate buzzwords, and faux enthusiasm.
* **Aesthetic:** Dark terminal / cyberpunk hacker + retro 8-bit pixel art. Pitch-black backgrounds (`#000000` / `bg-black`), terminal-green monospace accents (`#4ade80` / `text-green-400`), subtle dark gray borders (`#1f2937` / `border-gray-800`), and clean high-contrast category badges.

---

## 2. Page Architecture & Structure

Every article route in `app/routes/<slug>.tsx` must adhere to this standard layout hierarchy:

```
┌────────────────────────────────────────────────────────┐
│ <header> ASCII Art Diagram (font-mono text-green-400)  │
├────────────────────────────────────────────────────────┤
│ <main> (max-w-3xl or max-w-4xl, space-y-8)             │
│   ├── Hero Image (<img src={HERO_IMAGE} ... />)        │
│   ├── Category Badge + Title (<h1>) + Date Meta        │
│   ├── Executive Summary / Lead Section                 │
│   ├── Key Takeaways / Card Grid                        │
│   ├── Detailed Content / Signal Charts / Code Blocks   │
│   ├── Methodology / Source Attribution / References   │
│   └── ← Back to Home Link                              │
├────────────────────────────────────────────────────────┤
│ <footer> (border-t border-gray-800 text-gray-600)      │
└────────────────────────────────────────────────────────┘
```

---

## 3. Article Route Code Template

```tsx
import type { MetaFunction } from "react-router";
import { Link } from "react-router";

// 1. ASCII Art Diagram (under 60 chars wide, wrapped in box drawing)
const ASCII_ART = `
╔══════════════════════════════════════════════════════════╗
║   SYSTEM :: CONCEPT ARCHITECTURE                         ║
║                                                          ║
║   Input Stream ────────► Processing Engine               ║
║                            ├── Signal Extraction ✓       ║
║                            └── Confluence Rank (HIGH)    ║
║                                                          ║
║   Key Takeaway or Principle Summary                      ║
╚══════════════════════════════════════════════════════════╝
`;

// 2. Constants
const TITLE = "Descriptive, High-Signal Article Title";
const DATE = "Month YYYY";
const SLUG = "kebab-case-slug";
const HERO_IMAGE = "/kebab-case-slug.jpg";

// 3. Narrative Copy
const bodyParagraphs = [
  "Opening paragraph delivering the core insight immediately.",
  "Supporting technical context, evidence, and data points.",
  "Actionable takeaways for engineers, builders, or traders."
];

// 4. Meta Function
export const meta: MetaFunction = () => [
  { title: TITLE },
  { name: "description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:type", content: "article" },
  { property: "og:image", content: HERO_IMAGE },
  { property: "twitter:card", content: "summary_large_image" },
  { property: "twitter:image", content: HERO_IMAGE },
];

// 5. Component
export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="border-b border-gray-800 bg-black py-6">
        <div className="container mx-auto px-4">
          <pre className="overflow-x-auto font-mono text-xs leading-tight text-green-400">
            {ASCII_ART}
          </pre>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl space-y-8 px-4 py-8">
        {/* Cover Image */}
        <section className="mb-4">
          <img
            className="mx-auto h-auto max-h-[420px] w-full max-w-2xl rounded-2xl border border-gray-800 object-cover shadow-2xl"
            src={HERO_IMAGE}
            alt={TITLE}
          />
        </section>

        {/* Badge & Title */}
        <div className="space-y-3">
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
            AI News
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">
            {TITLE}
          </h1>
          <p className="text-sm text-gray-500">{DATE} · TastyTechBytes</p>
        </div>

        {/* Section Cards */}
        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Executive Summary
          </h2>
          {bodyParagraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-gray-300">
              {p}
            </p>
          ))}
        </section>

        {/* Back Link */}
        <p className="text-center pt-4">
          <Link to="/" className="text-sm text-green-400 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI News · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
```

---

## 4. Color Palette & Component Tokens

| Element | Tailwind Class | Hex Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Page Background** | `bg-black` | `#000000` | Full page container `<div className="min-h-screen bg-black">` |
| **Card Background** | `bg-gray-950` | `#030712` | Main section wrappers `<section>` |
| **Inner Card / Slot** | `bg-black/60` or `bg-gray-900` | `#000000` / `#111827` | Sub-cards, stat metric cards, table containers |
| **Borders** | `border-gray-800` | `#1f2937` | Outer section and card borders |
| **Divider Lines** | `border-gray-900` | `#111827` | Inner row dividers |
| **Accent Green** | `text-green-400` / `text-green-500` | `#4ade80` / `#22c55e` | ASCII diagrams, `<h1>`, section headers (`<h2>`) |
| **Primary Text** | `text-gray-100` / `text-white` | `#f3f4f6` / `#ffffff` | Headings, emphasized metrics, key titles |
| **Body Text** | `text-gray-300` | `#d1d5db` | Explanatory copy, paragraphs |
| **Muted Text** | `text-gray-400` – `text-gray-600` | `#9ca3af` – `#4b5563` | Timestamps, metadata, labels, captions |

---

## 5. Category Badges

Use established category badge colors consistently across article pages and homepage cards:

| Category | Tailwind Background | Hex / Hue | Usage Context |
| :--- | :--- | :--- | :--- |
| **AI News** | `bg-red-600` | `#dc2626` | Major AI announcements, models, security findings |
| **AI Tips / Tutorials** | `bg-purple-400` | `#c084fc` | Prompting, DSPy, RAG patterns |
| **Finance / Signal Scan** | `bg-green-700` or `bg-yellow-500` | `#15803d` / `#eab308` | Market scanners, Bollinger scans, trading infra |
| **Drink World - Helpful** | `bg-yellow-500` | `#eab308` | Whiskey investing, brewing, beverage tech |
| **3D World - Helpful** | `bg-purple-900` | `#581c87` | Blender nodes, raycasting, Three.js shaders |
| **Code World - Helpful** | `bg-red-900` | `#7f1d1d` | Dev tutorials, architecture, databases |
| **Code World - Random** | `bg-green-400` | `#4ade80` | Curiosities, retro hacks, fun dev experiments |
| **Tech World - Helpful** | `bg-pink-600` | `#db2777` | Productivity, neuroscience studies, hardware hacks |

---

## 6. ASCII Art Header Specifications

Every article must lead with a custom ASCII diagram in the `<header>` block:
1. **Font & Color:** `font-mono text-xs leading-tight text-green-400`
2. **Width Constraint:** Must be at or under **58–60 characters wide** to prevent horizontal overflow and wrapping on mobile screens.
3. **Box Drawing Set:** Use single or double line box characters (`╔ ═ ╗ ║ ╚ ╝ ┌ ─ ┐ │ └ ┘ ├ ┤ ┬ ┴ ┼`).
4. **Indicators & Glyphs:** Use `░ ▒ ▓` for progress/density, `► ▼ ▲ ◄` for flow arrows, `✓ ✗` for status indicators, `◆ ● ▪` for bullet nodes.

---

## 7. Cover / Hero Images

### Mandatory Rule: Ask First Before Generating
- **Always ask before generating images:** Do NOT call image generation APIs or tools without first checking with the user. The user frequently already has images ready (e.g. in `ttb8/images/` or local assets).
- Only generate a new image if the user explicitly instructs or confirms to generate one.

* **Prompt Pattern:**
  `8-bit pixel art of <article topic>, retro terminal aesthetic, dark background, terminal green accents`
* **Aspect Ratio:** `1:1` square (1024×1024) or `16:9` for top hero slots.
* **Storage Location:** Save to `public/<slug>.jpg` or `public/<slug>.png`.
* **JSX Requirement:** Render above the fold inside `<main>` as a rounded container:
  ```tsx
  <section className="mb-4">
    <img
      className="mx-auto h-auto max-h-[420px] w-full max-w-2xl rounded-2xl border border-gray-800 object-cover shadow-2xl"
      src={HERO_IMAGE}
      alt={TITLE}
    />
  </section>
  ```

---

## 8. Data, Signal Scanners & Technical Charts

When presenting quantitative reports (such as financial scans or benchmarks):
* **Stat Grid:** 4–5 column responsive grid (`grid grid-cols-2 sm:grid-cols-5 gap-3`) with uppercase `text-[11px] font-semibold text-gray-400` labels and large monospace numbers (`text-2xl font-bold font-mono`).
* **Directional Badges:**
  - Bullish: `bg-green-950 text-green-300 border border-green-800`
  - Bearish: `bg-red-950 text-red-300 border border-red-800`
  - Neutral: `bg-gray-900 text-gray-400 border border-gray-700`
* **SVG Vector Charts:**
  - Always provide `viewBox` with responsive dimensions (`preserveAspectRatio="none"`).
  - Background lines: `stroke="#374151"` or `stroke="#4b5563"`.
  - Upward / Bullish fills: `#22c55e` (green).
  - Downward / Bearish fills: `#ef4444` (red).
  - Net Area fills: `#3b82f6` with `fillOpacity="0.2"`.
* **Tables:** Wrap in scrollable `overflow-y-auto max-h-72` containers with sticky-friendly headers and alternating hover states (`hover:bg-gray-900/40`).

---

## 9. Publishing & Registration Checklist

When adding a new article to TastyTechBytes:
1. **Route File:** Create `app/routes/<slug>.tsx` matching the kebab-case naming standard.
2. **Route Manifest:** Register route in `app/routes.ts`:
   ```ts
   route("<slug>", "./routes/<slug>.tsx"),
   ```
3. **Homepage Feed:** In `app/routes/_index.tsx`:
   - Import cover image statically at the top: `import myCover from "/<slug>.jpg";`
   - Insert `<Link to="/<slug>"><article>...</article></Link>` in the appropriate homepage section (Part 1 Hero, Part 2 Middle, or Part 3 Feed).
4. **Section Category Array:** Add entry to `app/lib/section-articles.ts` under the respective category (`finance`, `culture`, `biotech`).
5. **Typecheck Verification:** Run `npm run typecheck` to guarantee zero build or TypeScript errors before shipping.
