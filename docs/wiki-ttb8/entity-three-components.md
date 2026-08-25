---
date: 2026-08-24
type: entity
tags: [three.js, react-three-fiber, 3d, components]
sources: [app/components/Cloud.tsx, app/components/chicken.tsx, docs/agent-guides/routing.md, PR#43]
---

# entity: Three.js Components

## What it is

`app/components/` holds the site's shared 3D components, built on `@react-three/fiber` + `@react-three/drei` over `three`:

- `Cloud.tsx` — the primary documented 3D component (per `docs/agent-guides/routing.md`)
- `chicken.tsx` — a second 3D/decorative component, not yet detailed in source docs read so far
- `Navbar.tsx` — not 3D, but lives alongside these as the third shared component; rendered globally via `root.tsx` so individual routes never import it directly

Per the routing guide: Three.js renders are **client-only**. Any route using `Cloud` (or similar) must wrap the canvas in a fixed-height container to avoid layout shift, and may need a `ClientOnly`-style pattern or dynamic import if SSR causes hydration issues — since the base app otherwise renders fully server-side (see [[entity-deployment]]).

## Where used

- Any article/page route that opts into a 3D visual element imports `Cloud` (or `chicken`) directly from `app/components/`
- Not used in the base article template (per `.claude/skills/add-article-route.md`'s plain Tailwind template) — 3D is opt-in per route, not default

## Known failures

- None recorded yet in this wiki. SSR/hydration mismatches are flagged as a known *risk class* in the routing guide (client-only rendering) but no specific incident has been logged.

## Open questions

- ❓ What does `chicken.tsx` render, and on which routes is it actually used? Not covered by the routing guide excerpt read so far — needs a source read.
- ❓ Is there a shared `ClientOnly` wrapper component in the codebase, or does each route implementing 3D handle the SSR guard ad hoc? If ad hoc, that's a duplication risk worth a concept page once confirmed across 2+ routes.

## See also

- [[entity-deployment]] — SSR is the general rendering mode these components must work around
- `docs/agent-guides/routing.md` — the SSR/hydration guidance for Three.js routes
