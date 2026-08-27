# todo2 — future / deferred

Items deliberately deferred out of [todo1.md](todo1.md). Nothing here is
blocking; each needs a product or design decision before code.

Style authority: [docs/agent-guides/style-guide.md](agent-guides/style-guide.md).
Dark mode is already mandatory there (§4: "No light backgrounds anywhere on an
article page") — anything below must be designed dark-first, not retrofitted.

---

## F1 — "More about the author" page/section

**Origin:** proposed while reformatting
[dextego-10-things-ai-sales-coaching.tsx](../app/routes/dextego-10-things-ai-sales-coaching.tsx)
and **removed** — it wasn't asked for. Parking the idea rather than losing it.

**What exists today:** that article now carries an inline author card (name +
one-line bio + date pill, in the guide's data-row card shape) and a byline
reading `May 2026 by Adam Timur Aslan`. A standalone `/about` route also exists
([app/routes/about.tsx](../app/routes/about.tsx)).

**Open questions before building anything:**

- Is the inline author card enough, or does each article need a link out?
  Adding a link to every article is a 56-route change — worth it only if the
  destination earns the click.
- Should the author card be a **shared component** rather than copied per route?
  It will be, once more than ~3 articles carry it. See style guide §11.
- Does `/about` serve as the author page, or is a separate `/author/...` needed
  (relevant only if there is ever more than one author)?
- The bio line in the dextego article is placeholder text. **Real bio copy is a
  prerequisite** for anything here.

**Do not** add per-article author links until the destination and the shared
component both exist.

---

## F2 — Ad space

Carried forward from todo1 items (c) and (d), expanded.

### The layout constraint

Article pages are a **single-column dark shell**, `max-w-3xl`, sections stacked
with `space-y-8` (style guide §4). There is no sidebar. So every placement
option below is either "fits the existing shell" or "changes the shell" — and
that is the first decision, because it determines whether this is a per-article
change or a site-wide one.

### Placement options

| Slot | Fits current shell? | Notes |
|---|---|---|
| In-article mid-roll | ✅ yes | Drop a card between `<section>`s. Cheapest. For a listicle like dextego, a natural break is after item 05. |
| End-of-article | ✅ yes | Between the verdict card and the back-link. Lowest friction, lowest value. |
| Sidebar rail | ❌ no | Requires abandoning single-column. Would need a `lg:grid-cols-[1fr_320px]` shell rewrite across all article routes. |
| Homepage grid slot | ➖ separate | [homepage-grid.md](agent-guides/homepage-grid.md) already mentions an ad rail — check what's specified there before designing new. |
| Sticky footer bar | ✅ yes | Overlays the shell, no structural change. Most intrusive to reading. |

**Recommendation:** start with in-article mid-roll + end-of-article. Both fit
the existing shell, so they can ship without touching 56 routes' layout.

### Ad styling — must match dark mode

An ad unit that renders light will visibly break the page. Constraints:

- Base on the guide's section card: `bg-gray-950 rounded-xl border border-gray-800 p-6`.
- Ads must be **visually distinguishable from editorial content** — a reader
  should never mistake one for an article section. Suggest a differentiated
  border (`border-dashed`, or a non-green accent) plus an explicit
  `Sponsored` / `Advertisement` label in the guide's uppercase micro-heading
  style (`text-xs font-semibold uppercase tracking-wide`), in a **non-green**
  color so it doesn't read as editorial.
- Green (`green-400`/`green-500`) is the editorial accent. **Ads should not use
  it.** Pick one reserved ad accent color and document it in style guide §2.
- Third-party ad iframes will not respect the dark palette. If external ad
  networks are ever used, the container needs a defined treatment (letterbox
  the unit rather than let a white rectangle sit on `bg-black`).

### Designing this in Figma (MCP)

The Figma MCP server is connected and can generate the mockups. Suggested flow —
**read the `/figma-use` skill first; it is mandatory before calling `use_figma`**:

1. Pull the existing dark palette into Figma variables so mockups use real
   tokens, not eyeballed hex — source values are in style guide §2.
2. Mock the ad slots **in place** inside a full article-page artboard, not as
   isolated components. The whole question is how they sit against `bg-black`
   between editorial cards; an isolated unit answers nothing.
3. Produce at least: mid-roll, end-of-article, sticky footer. Add sidebar only
   if the shell rewrite is actually on the table.
4. Mock **both** a house ad (fully styled, dark) and a worst-case third-party
   iframe (white rectangle) — the second is what the container treatment has to
   survive.
5. Bring results back via `get_design_context` / Code Connect rather than
   re-implementing by hand.

### Ad-free tier (todo1 item d)

Depends entirely on F2 shipping first. Mechanism already exists — Clerk is wired
([auth.md](agent-guides/auth.md)) — so this is a product/pricing decision, not
an engineering one. Do not build until there are ads to remove.

---

## F3 — Roll the dark-mode reformat across remaining articles

**Reference implementation:**
[dextego-10-things-ai-sales-coaching.tsx](../app/routes/dextego-10-things-ai-sales-coaching.tsx)
— reformatted, typechecks clean. Establishes: black shell, badge/title header,
mono green deck line, `bg-gray-950` section cards, green-400 links, numbered
data-row cards for listicles, inline author card, slug footer.

**Scope:** ~55 remaining routes ([app/routes.ts](../app/routes.ts) declares 56).
Most predate the style guide and use the old light shell (`bg-gray-100`,
`bg-blue-600` header, `bg-gray-200` footer, `text-blue-600` links).

**This is the right Haiku delegation.** Per `/fixy` §4.1: the judgment call
(what the dark mapping *is*) is already decided and frozen in the dextego file.
What remains is mechanical transformation across N files — one agent, N files,
sequential, with the class map supplied literally in the brief. Do **not**
delegate until the dextego pattern is signed off, and dedupe first (todo1 item 2
flags ~14 near-duplicate routes — reformatting all four Catlantean variants
before deciding which survive is wasted work).
