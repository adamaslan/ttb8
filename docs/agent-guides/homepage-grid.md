# Homepage Grid — Style Guide & Authoring Plan

Style guide and authoring rules for the three grid sections on [app/routes/_index.tsx](../../app/routes/_index.tsx). Read this before adding, removing, or reordering homepage cards.

## Mental model — three parts

The homepage below the hero is **three independent grid sections**, in order:

| Part | Purpose | Cards | Hierarchy |
|------|---------|-------|-----------|
| 1. Hero rail | Featured / editor's picks | exactly **5** | 1 big (middle) + 2 left + 2 right |
| 2. Quick row | Skim row of small cards | exactly **4** | uniform — no visual hierarchy |
| 3. Long feed + ad rail | Bulk article archive | open-ended (currently ~14) | content column + sticky ad column |

Each part has its own grid; they do **not** share columns. Don't try to make them line up vertically.

## Breakpoints

Tailwind v4 defaults are in use. Three breakpoints matter:

- `default` (mobile, <640px) — everything stacks to 1 column.
- `md` (≥768px) — 2-column layouts begin.
- `lg` (≥1024px) — full multi-column layouts.

The page sets `mx-4 md:mx-16 lg:mx-36` on `<main>` — respect this; do not add extra outer padding inside sections.

## Part 1 — Hero rail (5 cards)

**Goal:** one prominent "feature" card in the middle, flanked by two smaller cards on each side.

### Layout

```
lg+:   [L1][   BIG    ][R1]
       [L2][   BIG    ][R2]

md:    [L1][BIG][BIG][R1]
       [L2][BIG][BIG][R2]
       (BIG is 2 cols wide spanning 2 rows)

mobile: stacked single column
```

### Tailwind recipe

Container:
```tsx
<section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
```

Card slot classes:
- **Left top (L1)**: `md:col-start-1 md:row-start-1`
- **Left bottom (L2)**: `md:col-start-1 md:row-start-2`
- **Big (middle)**: `md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-1`
- **Right top (R1)**: `md:col-start-4 md:row-start-1`
- **Right bottom (R2)**: `md:col-start-4 md:row-start-2`

### Card variants

The 5 slots use **two card variants** — `<HeroCard size="big" />` for the middle, `<HeroCard size="small" />` for the four flankers. (Currently inlined as raw markup; extract to a component if Part 1 changes more than once.)

- **Big**: larger image, h2 at `lg:text-4xl`, badge `text-base`.
- **Small**: tighter padding, h2 at `lg:text-2xl`, badge `text-sm`.

## Part 2 — Quick row (4 cards)

**Goal:** an even, scannable row. No card is more important than another.

### Tailwind recipe

```tsx
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
```

All four cards use the **small** card variant. Don't introduce `col-span` overrides here — uniformity is the point.

If you need to feature one of these, promote it into Part 1 instead.

## Part 3 — Long feed + ad rail

**Goal:** the bulk archive. Reads like a magazine feed. Reserves a column for ads.

### Layout

```
lg+:   [card][card][AD ]   <- ad is sticky as you scroll
       [card][card][AD ]
       [card][card][AD ]

md:    [card][card]        <- no ad rail (too narrow)
       [card][card]

mobile: stacked single column, ad slot inlined every ~6 cards
```

### Tailwind recipe

Container:
```tsx
<section className="lg:grid lg:grid-cols-[1fr_1fr_300px] lg:gap-6">
  {/* Content column spans 2 of 3 on lg, full width on md */}
  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* article cards here */}
  </div>

  {/* Ad rail — sticky on lg, hidden on md/mobile */}
  <aside className="hidden lg:block">
    <div className="sticky top-4 space-y-4">
      <AdSlot id="rail-1" />
      <AdSlot id="rail-2" />
    </div>
  </aside>
</section>
```

The `300px` fixed-width column matches standard IAB medium rectangle (300×250) and half-page (300×600) ad units.

### Ad slot placeholder

Until real ads ship, drop this stub:

```tsx
function AdSlot({ id }: { id: string }) {
  return (
    <div
      data-ad-slot={id}
      className="flex h-[250px] w-[300px] items-center justify-center rounded-lg border border-dashed border-gray-700 bg-gray-900 text-xs text-gray-500"
    >
      Ad · {id}
    </div>
  );
}
```

When real ads ship (AdSense, BSA, etc.), replace the inner div only — keep the `data-ad-slot` and outer wrapper for consistent measurement.

## Card anatomy (all parts)

Every card is a `<Link>` wrapping this structure:

```tsx
<Link to="/article-slug">
  <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
    <div className="rounded-full bg-{category-color} p-1 text-lg font-bold text-white">
      {Category Label}
    </div>
    <img
      className="m-2 h-auto max-w-full rounded-full"
      src={imageImport}
      alt="{descriptive alt}"
    />
    <h2 className="pb-4 text-left text-xl font-bold text-white sm:text-2xl lg:pb-12 lg:text-3xl">
      {Article Title}
    </h2>
  </article>
</Link>
```

**Rules:**
- Use `<article>` not `<div>` for semantic HTML.
- Headings are `<h2>` (the `<h1>` on the page is the site title).
- Always provide meaningful `alt` text — never `""` or `"image"`.
- Image imports go at the top of `_index.tsx` (don't inline `/foo.jpeg` strings — break SSR cache hints).

## Category color palette

Keep colors consistent across cards in the same category. Background uses the `bg-{color}` on the pill div.

| Category | Class | Notes |
|----------|-------|-------|
| Drink World | `bg-yellow-500` | Whiskey, beverages |
| 3D World | `bg-purple-900` | Blender, ThreeJS art |
| Code World — Helpful | `bg-red-900` | Tutorials, how-tos |
| Code World — Random | `bg-green-400` | Fun, trivia |
| Code Art — ThreeJS | `bg-green-800` | Visual coding |
| Software — IDE | `bg-blue-500` | Editor tips |
| AI Tips | `bg-purple-400` | Tutorials |
| AI News | `bg-red-600` | Releases, announcements |
| AI News (alt) | `bg-purple-400` | Use sparingly — clashes with AI Tips |
| Tech World | `bg-pink-600` | Hardware, gear hacks |

**When adding a new category:** prefer reusing an existing color before inventing a new one. If you must add a new color, document it here in the same PR.

## Adding a new article to the homepage

1. Create the route per [.claude/skills/add-article-route.md](../../.claude/skills/add-article-route.md).
2. Add the image import at the top of [_index.tsx](../../app/routes/_index.tsx).
3. Decide placement:
   - **Truly featured / newest big story** → Part 1, replacing one of the flankers (demote an existing flanker into Part 3).
   - **Notable but not headline** → Part 2 (must remove or demote one existing card to keep it at 4).
   - **Default** → Part 3, top of the content column.
4. Use the card markup from "Card anatomy" above.
5. Pick a category color from the palette.
6. Run `npm run typecheck`.

**Part 1 and Part 2 are fixed-size.** You cannot add to them without removing — that's intentional. If you find yourself wanting to bend this rule, the article belongs in Part 3.

## Things to avoid

- **Don't** mix `col-start-N` with `col-span` overrides in the same section unless using explicit `grid-rows-N`. That's what caused the broken Part 3 layout originally.
- **Don't** add a 5th card to Part 2 or a 6th to Part 1 by squeezing — restructure instead.
- **Don't** use `rounded-full` on rectangular images expecting a circle — Tailwind will produce a pill, not a circle. Use `rounded-2xl` if you want soft corners on landscape images.
- **Don't** inline absolute image URLs (`"/foo.jpeg"`) on the homepage — use Vite imports so SSR can hash them.
- **Don't** add inline `style={{ ... }}` for layout — extend this guide and use a Tailwind class instead.

## Future work

- Extract Part 1's two card variants into `<HeroCard size="big|small" />` once we change them again.
- Wire the ad rail to a real network when monetization lands.
- Consider lazy-loading Part 3 images (`loading="lazy"`) once we add more than ~20 cards.
