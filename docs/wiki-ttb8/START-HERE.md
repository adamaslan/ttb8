---
date: 2026-08-24
type: overview
tags: [orientation, start-here, onboarding, entry-point]
sources: [./index.md, ./overview.md, ./SCHEMA.md]
---

# START HERE — Orient Before You Change

**If you are a cold-started agent or a human returning after time away, read this page first.** Orientation is cheap here by design: the wiki is a small, connected graph. Land on any page, follow **See also**, and the whole model is one or two hops away.

## The 60-second orient (always do this)

1. Read [[overview]] — the stack, the system map, current health, and what's *not* yet documented.
2. Skim [[index]] — the full catalog by page type.
3. Check the newest line in [[log|log.md]] — it names the last change and which pages hold it.

## Orient by task — read these, in this order

| If you're touching… | Read first (in order) | Watch out for |
|---|---|---|
| **A new or existing article route** (`app/routes/<slug>.tsx`) | [[entity-routing]] → `.claude/skills/add-article-route.md` | every route file needs an explicit `route()` entry in `app/routes.ts` or it 404s |
| **The article → image → Instagram pipeline** | [[entity-article-pipeline]] → [[concept-article-source-of-truth-drift]] | `article-registry.json`, `ai-articles.tsx`, and `routes.ts` can silently diverge — check all three |
| **Auth / gated content** | [[entity-auth]] | client gating (`<SignedIn>`) vs. server gating (`getAuth()` in a loader) are different code paths, pick the right one |
| **Deploy / build issues** | [[entity-deployment]] | build is a two-step pipeline (`react-router build` then `netlify/prepare.js`); a CSP change requires editing `netlify.toml` |
| **3D components** (`Cloud.tsx`) | [[entity-three-components]] | Three.js renders are client-only; watch for SSR hydration mismatches |
| **Landing page / homepage grid** | [[entity-routing]] → `docs/agent-guides/homepage-grid.md` | homepage cards are separate from the route registry — adding a route doesn't add a card |

## Before you finish

When your change ships (especially via `gh pr create`), the wiki owes an ingest — see [[SCHEMA]] → "On PR Creation." This is not automated by a hook in ttb8 yet (unlike `nuwrrrld-portal`'s `wiki-guard`); it is a manual discipline for now — do it anyway.

## See also

- [[overview]] — the system map this page routes into
- [[index]] — the full catalog
- [[SCHEMA]] — conventions, page types, secret policy, PR-ingest workflow
