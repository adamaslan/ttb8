# Wiki Index — ttb8

_Last updated: 2026-08-25 (todo3-restyle Phase 3/4 — first guides built + legacy triage, PR#44)_

**New here / cold-started? Read [[START-HERE]] first** — it routes you to the right pages for your task in the right order.

Catalog is organized by page type. This wiki is ttb8-only; the Instagram publish backend (`social-pr-autopilot`) lives outside this repo and is referenced by path/description, not `[[…]]`.

**Scope today:** routing, the article-to-Instagram pipeline, auth, deployment, and 3D components. No incidents or decisions recorded yet — this wiki started 2026-08-24, so history predating it hasn't been backfilled. See [[overview]] "Not yet documented" for known gaps.

---

## Start Here / Overview

- [[START-HERE]] — orient first: the 60-second orient + a task-routed reading order
- [[overview]] — stack, system map, current health, what's documented vs. pending

---

## System Entities

One page per named component. These are the hubs — everything links to entities.

- [[entity-routing]] — `app/routes.ts`; the explicit route registry, the single most load-bearing file in the repo
- [[entity-article-pipeline]] — article → Imagen cover image → Instagram post, spanning this repo and the external `social-pr-autopilot` backend; see also `docs/agent-guides/ideal-article-instagram-workflow.md` for the full outlet map (live vs. proposed-only channels)
- [[entity-auth]] — Clerk (`@clerk/react-router`); client `<SignedIn>`/`<SignedOut>` vs. server `getAuth()` gating
- [[entity-deployment]] — Netlify SSR build pipeline (`react-router build` → `netlify/prepare.js` → Functions) + CSP headers
- [[entity-three-components]] — `Cloud.tsx`/`chicken.tsx`; client-only Three.js components and SSR hydration risk

---

## Concepts

Cross-cutting patterns and design choices.

- [[concept-article-source-of-truth-drift]] — `article-registry.json`, `app/routes.ts`, and `ai-articles.tsx` each claim to enumerate "the articles," none generated from the others
- [[concept-gemini-review-gate]] — the manual post-commit review pass that substitutes for an automated test suite
- [[concept-seo-duplicate-consolidation]] — the registry-as-duplicate-index problem, the 301-stub-and-archive policy, and the Cloudflare Flagship fabricated-version exception

---

## Decisions

_None recorded yet. Add a `decision-*.md` page the next time a deliberate architectural choice is made or surfaced in a PR._

---

## Incidents

_None recorded yet. The 2026-08-24 Netlify build failure (routes.ts referencing uncommitted route files, fixed same day in PR #43) is documented inline in the [[log|log.md]] rather than as a standalone incident page — promote it to `incident-2026-08-24-*.md` if it recurs or warrants a fuller root-cause writeup._

---

## Schema

- [[SCHEMA]] — conventions, page types, secret policy, PR-ingest workflow
