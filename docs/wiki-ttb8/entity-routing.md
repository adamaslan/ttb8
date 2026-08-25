---
date: 2026-08-24
type: entity
tags: [routing, react-router, articles]
sources: [app/routes.ts, app/routes/_index.tsx, docs/agent-guides/routing.md, .claude/skills/add-article-route.md, PR#43]
---

# entity: Routing

## What it is

`app/routes.ts` is the single, explicit source of truth for every URL the app serves. ttb8 uses React Router v7 in framework mode — **there is no filesystem auto-routing**. A file dropped in `app/routes/` does nothing on its own; it must have a matching `route("<slug>", "./routes/<slug>.tsx")` entry in `app/routes.ts` or the URL 404s.

- `index("routes/_index.tsx")` — homepage, `/`
- `route("articles/:slug", "./routes/articles.$slug.tsx")` — a dynamic catch-all for some articles
- Most content is registered individually, one `route()` line per article slug
- `app/routes/admin1.tsx` and `app/routes/ai-articles.tsx` exist as files but are **intentionally or accidentally unregistered** — `admin1.tsx` deliberately (private admin route), `ai-articles.tsx` apparently accidentally (see [[concept-article-source-of-truth-drift]])

Separately, the **homepage grid** (`app/routes/_index.tsx`) has its own list of article cards — registering a route does not automatically add a homepage card, and vice versa. See `docs/agent-guides/homepage-grid.md` for the card-authoring pattern.

## Where used

- Every article page in the site
- `.claude/skills/add-article-route.md` — the canonical 3-step recipe (create file → register route → typecheck) that every article-adding session should follow
- `docs/agent-guides/article-to-instagram-pipeline.md` step 1 — the pipeline explicitly calls out "register the route in `app/routes.ts`" as part of publishing a new article

## Known failures

- **Silent 404 on forgotten registration.** The most common mistake per the source docs: create `app/routes/<slug>.tsx`, forget the `route()` line, ship, and the URL 404s with no build-time error (TypeScript doesn't catch it because the file is just unused).
- **`app/routes/ai-articles.tsx` is unregistered** — it renders a full 40-article grid but has no route, so it is currently dead code reachable only by direct dev inspection. See [[concept-article-source-of-truth-drift]] for how its hardcoded article list also drifted from `article-registry.json`.

## Open questions

- ❓ Is `ai-articles.tsx` meant to eventually replace the homepage grid, or is it an abandoned experiment? Its list is a superset of the homepage's articles, suggesting it may have been intended as a dedicated `/articles` index page that was never wired up.
- ❓ Should `app/routes.ts` import article metadata from `article-registry.json` to generate routes, rather than hand-listing both? Would remove one of the three drift points in [[concept-article-source-of-truth-drift]].

## See also

- [[entity-article-pipeline]] — routing is step 1 of the article-to-Instagram pipeline
- [[concept-article-source-of-truth-drift]] — the registry/routes/ai-articles.tsx divergence
- `docs/agent-guides/routing.md` — full routing architecture doc
- `docs/agent-guides/homepage-grid.md` — homepage card authoring
