---
date: 2026-08-24
type: overview
tags: [overview, stack, health, system-map]
sources: [../../package.json, ../../app/routes.ts, ../../server/app.ts, ../../netlify/prepare.js, PR#43]
---

# Overview — ttb8 (TastyTechBytes)

> 🧭 **Orienting for a task?** Start at [[START-HERE]] — it gives a 60-second orient and a task-routed reading order. This page is the system map it routes into.

A React Router v7 SSR blog/content site — **TastyTechBytes** — deployed on Netlify, with Clerk authentication, Three.js 3D components, and a semi-manual pipeline for turning each article into an Instagram post via a separate backend (`social-pr-autopilot`).

## Stack

- **Framework**: React Router v7 (`^7.11.0`, framework/SSR mode) + React 19 + TypeScript
- **Styling**: TailwindCSS v4
- **3D**: `@react-three/fiber` + `@react-three/drei` + `three` — used in `app/components/Cloud.tsx`
- **Auth**: Clerk (`@clerk/react-router ^2.3.7`) — custom domain `clerk.tastytechbytes.com`, see [[entity-auth]]
- **Deploy**: Netlify — SSR via Netlify Functions, static assets from `build/client`, see [[entity-deployment]]
- **Server adapter**: Express (`server/app.ts`), wrapped for Netlify Functions in `netlify/prepare.js`
- **Firebase Admin** (`firebase-admin ^13.8.0`) is a dependency but not yet documented in this wiki — see "Not yet documented" below
- **No test suite** — `npm run typecheck` is the only automated gate before committing

## System map

```
app/routes/<slug>.tsx  (article route, hand-written)
  │
  ├─ registered in app/routes.ts        ─────────────► entity-routing
  ├─ card added to app/routes/_index.tsx (homepage)  ─► entity-routing
  ├─ cover image generated via Imagen API ───────────► entity-article-pipeline
  └─ /prep-instagram-post <slug>
       └─ instagram-queue/<slug>.json
            └─ social-pr-autopilot backend (separate repo, FastAPI/uvicorn)
                 └─ Instagram Graph API ─────────────► entity-article-pipeline

Browser
  └─ app/root.tsx (Clerk provider + Navbar) ─────────► entity-auth
       └─ SSR via server/app.ts (Express) ───────────► entity-deployment
            └─ netlify/prepare.js wraps for Netlify Functions
```

## Current health

**Wired and documented:**

- ✅ Route registry is explicit and centralized (`app/routes.ts`) — no filesystem auto-routing — [[entity-routing]]
- ✅ Article → image → Instagram pipeline, end to end, with a cost model (~$0.02/article via Imagen 4 Fast) — [[entity-article-pipeline]]
- ✅ Clerk auth (client `<SignedIn>`/`<SignedOut>` and server `getAuth()` patterns) — [[entity-auth]]
- ✅ Netlify SSR deploy pipeline (`react-router build` → `netlify/prepare.js` → Functions) — [[entity-deployment]]

**Known gaps / risks:**

- ⚠️ **`article-registry.json` and `app/routes/ai-articles.tsx` drift from each other and from `app/routes.ts`.** The registry currently lists 18 articles; `ai-articles.tsx` hardcodes its own list of 40 articles rather than importing the registry; `ai-articles.tsx` is itself unregistered in `app/routes.ts` (per [[entity-routing]] this makes it a draft/unreachable page). Three sources of truth for "what articles exist," none of them canonical — see [[concept-article-source-of-truth-drift]].
- ⚠️ **No test suite.** `npm run typecheck` is the only gate; article content correctness (broken links, missing images, meta tag completeness) has historically been caught by a manual Gemini review pass per PR (see commit history: "address Gemini review" appears repeatedly) rather than CI.
- ⚠️ **Instagram publish pipeline lives partly outside this repo.** `social-pr-autopilot`'s backend (uvicorn) does the actual Graph API call; ttb8 only produces the `instagram-queue/<slug>.json` job file. A broken/unstarted backend silently blocks publishing with no error surfaced in this repo.
- ⚠️ **`origin` remote pointed at an unreachable repo** (`crypto-pay3/ttb8`) until 2026-08-24; `upstream` (`adamaslan/ttb8`) is the real remote gh/PRs resolve to. Removed as part of PR #43's branch work — confirm no tooling/CI still assumes an `origin` remote exists.

**Not yet documented in this wiki** (awaits future ingest):

- `firebase-admin` usage — present in dependencies, purpose not yet traced
- `app/admin1.tsx` — intentionally unregistered/private admin route (per [[entity-routing]] source doc), contents not reviewed
- `scripts/` directory (new as of 2026-08-24) — not yet inventoried

## See also

- [[index]] — full page catalog
- [[entity-routing]] — the route registry, the single most load-bearing file in the repo
- [[entity-article-pipeline]] — how an article becomes an Instagram post
- `nuwrrrld-portal/docs/wiki-portal/overview.md` — a sibling wiki using the same schema, much larger surface area
