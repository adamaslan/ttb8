# todo1 — site coherence & structure

Working notes for TastyTechBytes. Each item states the goal, what's verified on
disk today, and the concrete next step. Verified against the repo 2026-08-27.

Canonical reference for anything visual: [docs/agent-guides/style-guide.md](docs/agent-guides/style-guide.md).
Don't re-specify style rules here — point at that file and note the delta.

---

## 0 — Coherent style for articles

**Goal:** every article page reads as one publication, not 56 one-off designs.

**Status:** a site-wide style guide already exists at
[docs/agent-guides/style-guide.md](docs/agent-guides/style-guide.md) (12 sections,
covering palette, typography, dark-theme article shell, section cards, category
badges, and a "things to avoid" list). The gap is *enforcement*, not
documentation — existing routes predate it and haven't been audited against it.

**Next step:** pick 3–5 exemplar routes, confirm they match the guide, then
audit the rest against those. Track which routes have been brought into line.

### Exemplars to standardize on

- dark mode centric - 

**Bordered multi-color boxes** — [pensar-continuous-pentesting-ci.tsx](app/routes/pensar-continuous-pentesting-ci.tsx)

The pattern is a base card plus a semantic color-tier map:

- Base card: `bg-gray-950 rounded-xl border border-gray-800 p-6` ([:147](app/routes/pensar-continuous-pentesting-ci.tsx#L147))
- Tier map: `SIGNAL_TIER` at [:100-102](app/routes/pensar-continuous-pentesting-ci.tsx#L100-L102) —
  `green` / `yellow` / `blue`, each `border-{c}-700 bg-{c}-950 text-{c}-300`
- Applied to a grid of tiles at [:257](app/routes/pensar-continuous-pentesting-ci.tsx#L257)

To reuse: lift `SIGNAL_TIER` into a shared component rather than copying the
literal into each new route. See §11 Components Reference in the style guide.

**H1 + subtitle header block** — [snapstate-persistent-state-for-ai-agent-workflows.tsx](app/routes/snapstate-persistent-state-for-ai-agent-workflows.tsx#L27-L33)

Three stacked elements inside a colored `<header>`:

1. Category pill — `rounded-full bg-purple-400 px-3 py-1 text-sm font-bold text-white`
2. `<h1 className="mt-3 text-3xl font-bold">` — the full title
3. `<p className="mt-2">` — the one-line subtitle/deck

**Byline ("May 2026 by Adam Timur Aslan")** — ⚠️ *not found in the routes checked.*
`grep` for "Adam Timur Aslan" in `snapstate-persistent-state-for-ai-agent-workflows.tsx`
returned nothing. Before treating this as an exemplar, find which route actually
renders it (`grep -rn "Adam Timur Aslan" app/routes/`) — or accept that it needs
building, in which case it's a new shared component, not a copy job.

---

## a/b/c/d — Content types & monetization

Four separate concerns bundled in the original note; splitting them:

- **a — Articles.** The existing 56 routes. Covered by item 0 and item 2.
- **b — Guides.** Distinct from articles: longer, evergreen, task-oriented.
  Open question: is this a new category badge (style guide §10), a separate
  route prefix (`/guides/:slug`), or just an article tag? **Decide before
  writing any.** `continuous-pentesting-ci-guide` already exists as a flat
  route and is the natural first test case.
- **c — Ad space.** Needs a decision on placement before layout work: in-article
  mid-roll, sidebar, or homepage grid slot. Note that the article shell is
  single-column dark (style guide §4), so a sidebar means a shell change.
- **d — Ad-free concept.** Future. Depends on (c) existing first, and implies
  auth-gating — Clerk is already wired ([docs/agent-guides/auth.md](docs/agent-guides/auth.md)),
  so the mechanism exists; the product decision doesn't.

---

## 1 — `/ai-articles` is a dead link ⚠️ RESOLVED (2026-08-25)

**Status:** `ai-articles` route was built and registered in Phase 0 of
todo3-restyle (commit 8e25daa, 2026-08-24). The navbar link at
[app/components/Navbar.tsx:77](app/components/Navbar.tsx#L77) now resolves
correctly to `/ai-articles`.

**Verification:** `grep ai-articles app/routes.ts` confirms the route is
registered and the 404 blocker is cleared.

---

## 2 — Nav as sections: culture / biotech / ai / finance ✅ SHIPPED (2026-08-27)

**Goal:** replace the flat nav with four content sections.

**Status:** navbar now links `culture / biotech / ai / finance` + About
([app/components/Navbar.tsx](app/components/Navbar.tsx)). Three new section
pages: [app/routes/culture.tsx](app/routes/culture.tsx),
[app/routes/biotech.tsx](app/routes/biotech.tsx),
[app/routes/finance.tsx](app/routes/finance.tsx) — `ai` reuses the existing
`/ai-articles`. The homepage "Daily Financial Tech Article" banner was removed;
those daily articles now live on `/finance` (which also links the full
`/correlations-archive`). Article→section assignment for hand-written articles
is a hand-maintained map in
[app/lib/section-articles.ts](app/lib/section-articles.ts) — NOT a registry
`category` field yet (steps 1–2 below are still the "proper" version if the map
grows unwieldy). `npm run typecheck` passes.

**Delta / follow-ups:**
- Section membership is currently a literal list in `section-articles.ts`, not
  driven off `article-registry.json`. Revisit steps 1–2 if it needs to scale.
- The culture/biotech/finance mapping was a judgment call — see
  `section-articles.ts` and adjust freely.

**Blocker — the registry can't support this yet.** `app/article-registry.json`
holds **6 entries** against **56 declared routes** (corrected 2026-08-27 —
earlier count of 17 was stale). There is no `category` or `section` field on
any entry — only `slug`, `title`, `og_description`, `image`, `keywords`. So
"show me all biotech articles" is currently unanswerable without inventing a
taxonomy from free-text keywords.

**Dedup status: already done.** Checked 2026-08-27 — the near-duplicate slug
clusters flagged below are *not* live duplicates. In each cluster all but one
file are 5-line `redirect()` loaders returning a 301 to the canonical route
(e.g. `vscode-github-dev-oauth-token-stealing-one-click.tsx` → 301 →
`/vscode-bug-github-dev-token-stealing-one-click`). The one exception is the
four `robinhood-agentic-trading*` routes — three are 301 stubs to
`/robinhood-agentic-trading`, and per user direction (2026-08-27) this overlap
is intentional and left as-is. No further dedup work needed before
categorizing.

**`ai-articles.tsx` listing gap: fixed 2026-08-27.** The hardcoded list only
surfaced 30 of the 56 routes. Added the 12 missing real-content routes (10
PyTorch/SQLite/neural-net articles, the two `/guides/*` pieces, IBM Anderon
quantum foundry, Lore version control, the Blender geometry-nodes guide, and
the walking/creativity study). Verified referenced images exist in `public/`
and `npm run typecheck` passes.

**Prerequisite work, in order:**

1. **Reconcile registry ↔ routes.** 50 routes have no registry entry (of 56
   total, minus dedup redirects). Decide whether the registry is meant to be
   complete (then backfill) or is deliberately a subset (then document what
   qualifies). *Not started.*
2. **Add a `category` field** to the registry schema, constrained to the four
   section names. Style guide §10 already defines category badge colors — reuse
   those names rather than minting new ones. *Not started.*
3. **Then** build section routes and rework the navbar. *Not started —
   unblocked now that dedup is confirmed done.*

---

## 3 — Older article-creation pathways / subdomains

**Goal:** understand prior approaches before building new tooling, and evaluate
`finance.tastytechbytes.com`-style subdomains.

**Source doc:** [/Users/adamaslan/code/homebase/docs/boll4-500c.md](/Users/adamaslan/code/homebase/docs/boll4-500c.md)
— exists, 22.8 KB. ⚠️ **It is not about article pathways.** Its headings are a
YFinance signal detector spec: signal scoring tables, confluence ranking,
multi-timeframe outlook, JSON/Markdown report output. It's a *finance data
pipeline* doc.

**So this item is really two things:**

- **3a — Article-creation pathways.** The current pipeline is documented in
  [docs/agent-guides/article-to-instagram-pipeline.md](docs/agent-guides/article-to-instagram-pipeline.md)
  and [.claude/skills/add-article-route.md](.claude/skills/add-article-route.md).
  If there's an older pathway worth revisiting, it isn't boll4 — locate the real
  doc before spending time here.
- **3b — `finance.tastytechbytes.com`.** boll4 *is* relevant here: it describes
  a generator that emits Markdown reports, which is a plausible content source
  for a finance subdomain. Note the deploy constraint: the site is Netlify SSR
  with `publish = "build/client"` ([docs/agent-guides/deployment.md](docs/agent-guides/deployment.md)) —
  a subdomain is either a second Netlify site or a routing change, and that
  decision comes before any content work.

---

## Suggested order

1. **Item 1** — one-line nav fix, removes a live 404. Do it today.
2. **Item 2 step 3 (dedupe)** — shrinks everything downstream.
3. **Item 2 steps 1–2** — registry backfill + `category` field.
4. **Item 0 audit** — now that the article set is deduped and known.
5. **Items b/c/d, 3b** — product decisions; none are blocked on code.

Run `npm run typecheck` before committing anything (no test suite).
