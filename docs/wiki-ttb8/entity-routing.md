---
date: 2026-08-27
type: entity
tags: [routing, react-router, articles, guides, sections, navbar]
sources: [app/routes.ts, app/routes/_index.tsx, app/components/Navbar.tsx, docs/agent-guides/routing.md, .claude/skills/add-article-route.md, PR#43, PR#44, PR#45, docs/todo1.md, docs/todo3-restyle.md]
---

# entity: Routing

## What it is

`app/routes.ts` is the single, explicit source of truth for every URL the app serves. ttb8 uses React Router v7 in framework mode — **there is no filesystem auto-routing**. A file dropped in `app/routes/` does nothing on its own; it must have a matching `route("<slug>", "./routes/<slug>.tsx")` entry in `app/routes.ts` or the URL 404s.

- `index("routes/_index.tsx")` — homepage, `/`
- `route("articles/:slug", "./routes/articles.$slug.tsx")` — a dynamic catch-all for some articles
- Most content is registered individually, one `route()` line per article slug
- `app/routes/admin1.tsx` exists as a file but is **intentionally unregistered** (private admin route). `ai-articles.tsx` was registered in Phase 0 of `docs/todo3-restyle.md` and is no longer a drift case.
- `/guides/:slug`-shaped routes are a new, deliberately distinct addressable type as of PR#44: `route("guides/continuous-pentesting-ci", "./routes/guides.continuous-pentesting-ci.tsx")` and `route("guides/three-webstorm-shortcuts", "./routes/guides.three-webstorm-shortcuts.tsx")`. Unlike the dynamic `articles/:slug` catch-all, each guide is still its own explicit `route()` line — there is no `guides/:slug` dynamic route yet, just a naming convention (`guides.<slug>.tsx` file → `guides/<slug>` URL) applied by hand per Phase 3 of `docs/todo3-restyle.md`.
- **Section index routes** `/culture`, `/biotech`, `/finance` are a new flat route type as of PR#45 (todo1 item 2). Each is a single hand-written route file (`routes/culture.tsx` etc.) that renders a card grid from `app/lib/section-articles.ts`. `/finance` additionally has a `loader` pulling `getAllArticleCards()` (the daily financial-tech series). The fourth nav section, `ai`, is **not** a new route — the navbar `ai` link points at the pre-existing `/ai-articles`.

Separately, the **homepage grid** (`app/routes/_index.tsx`) has its own list of article cards — registering a route does not automatically add a homepage card, and vice versa. See `docs/agent-guides/homepage-grid.md` for the card-authoring pattern. As of PR#45 the homepage no longer has a "Daily Financial Tech Article" banner or a `loader` — that daily-series surface moved to `/finance`.

## Navbar

`app/components/Navbar.tsx` is a hand-tuned decorative component (per-letter rotation spans). As of PR#45 its content links are exactly the four sections — **culture / biotech / ai / finance** — plus About. The earlier decorative "AI • Articles" link and the "Archive" link were removed. `/archive` and `/correlations-archive` routes still exist and render; they're just no longer in the top nav (`/finance` links `/correlations-archive` inline).

## Where used

- Every article page in the site
- `.claude/skills/add-article-route.md` — the canonical 3-step recipe (create file → register route → typecheck) that every article-adding session should follow
- `docs/agent-guides/article-to-instagram-pipeline.md` step 1 — the pipeline explicitly calls out "register the route in `app/routes.ts`" as part of publishing a new article

## Known failures

- **Silent 404 on forgotten registration.** The most common mistake per the source docs: create `app/routes/<slug>.tsx`, forget the `route()` line, ship, and the URL 404s with no build-time error (TypeScript doesn't catch it because the file is just unused).
- **`ai-articles.tsx`'s hardcoded article list can still drift from `article-registry.json`** even though the route is now registered — registering the route (Phase 0) did not wire the two lists together. See [[concept-article-source-of-truth-drift]].
- **`app/lib/section-articles.ts` (PR#45) adds a 5th independent article enumeration.** Its `link` values are hand-copied slugs; nothing checks them against `app/routes.ts`, so a section card can point at a 404 if a slug is mistyped or a route is later renamed. See [[concept-article-source-of-truth-drift]] and [[decision-hand-maintained-section-taxonomy]].

## Open questions

- ❓ Is `ai-articles.tsx` meant to eventually replace the homepage grid, or is it an abandoned experiment? Its list is a superset of the homepage's articles, suggesting it may have been intended as a dedicated `/articles` index page that was never wired up.
- ❓ Should `app/routes.ts` import article metadata from `article-registry.json` to generate routes, rather than hand-listing both? Would remove one of the three drift points in [[concept-article-source-of-truth-drift]].
- ❓ Now that two `/guides/*` routes exist, is a real `route("guides/:slug", "./routes/guides.$slug.tsx")` dynamic catch-all (mirroring `articles/:slug`) worth building once a third guide is added, or does hand-registering stay fine at this scale?
- ❓ The section routes `/culture` `/biotech` `/finance` are three near-identical files differing only in which `SECTION_ARTICLES` key they read. Worth collapsing to one `route("s/:section", …)` dynamic route once a 4th non-`ai` section appears?

## See also

- [[entity-article-pipeline]] — routing is step 1 of the article-to-Instagram pipeline
- [[concept-article-source-of-truth-drift]] — the registry/routes/ai-articles.tsx divergence
- `docs/agent-guides/routing.md` — full routing architecture doc
- `docs/agent-guides/homepage-grid.md` — homepage card authoring
