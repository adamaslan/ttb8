---
date: 2026-08-24
type: entity
tags: [deployment, netlify, ssr, build]
sources: [docs/agent-guides/deployment.md, netlify.toml, netlify/prepare.js, server/app.ts, package.json, PR#43]
---

# entity: Deployment (Netlify)

## What it is

ttb8 deploys to Netlify with SSR served through Netlify Functions. The build is a two-stage pipeline:

```
npm run build
  └─ react-router build      → build/client/ (static assets) + build/server/ (SSR bundle)
  └─ node netlify/prepare.js → wires the SSR bundle into a Netlify Function
```

- **Publish dir**: `build/client` (per `netlify.toml`)
- **Build command**: `npm run build`
- Static assets under `/assets/*` are cached immutably (fingerprinted filenames)
- **Local preview**: `npm start` runs `netlify serve`, which requires the Netlify CLI and reproduces the Functions-wrapped SSR path locally (as opposed to `npm run dev`, which runs the Express dev server directly via `dev-server.js`)
- **Server adapter**: `server/app.ts` is an Express app that `netlify/prepare.js` wraps for the Functions runtime — the same Express app is used for local dev (`cross-env NODE_ENV=development node ./dev-server.js`) and production, so behavior differences between `npm run dev` and prod are mostly limited to the Netlify Functions wrapping itself.

### CSP Headers

`netlify.toml`'s Content-Security-Policy currently allowlists:
- Clerk domains: `clerk.tastytechbytes.com`, `accounts.tastytechbytes.com`
- Cloudflare challenge domains (Clerk's bot protection dependency)
- Google AdSense (`pagead2.googlesyndication.com`)

**Rule from the source doc**: any new third-party script added to the site must get a corresponding CSP entry in `netlify.toml`, or the browser will block it in production even though it may work fine in local dev (CSP is only enforced via the deployed headers).

## Where used

- Every deploy, via Netlify's own build trigger on push (exact trigger — auto-deploy on `main` vs. PR previews — not confirmed in source docs, flag as open question)
- `npm run typecheck` is the pre-commit gate mentioned in the root `CLAUDE.md`; it is not itself part of the Netlify build command, so a typecheck failure would not necessarily block a deploy unless Netlify's build step also runs it (open question below)

## Known failures

- None recorded yet in this wiki as a formal incident. Multiple commits in history reference "address Gemini review" fixes (hyphenation, grammar, WCAG contrast, meta bugs, missing cards, color contrast) — these read as pre-merge review catches rather than production deploy incidents, so they live in [[concept-gemini-review-gate]] rather than as `incident-*.md` pages.

## Open questions

- ❓ Does the Netlify build step run `npm run typecheck`, or only `npm run build`? If only the latter, a type error could theoretically reach a deploy since `react-router build` and `tsc` are separate commands.
- ❓ What triggers a deploy — every push to `main`, or a specific branch/webhook? Not documented in `docs/agent-guides/deployment.md`'s excerpt read so far.
- ❓ Are there Netlify deploy previews for PR branches (e.g. `add-articles-batch`)? Would matter for verifying an article renders correctly before merge.

## See also

- [[entity-auth]] — Clerk's CSP requirements, enforced at this layer
- [[concept-gemini-review-gate]] — the manual review pass that substitutes for a test suite pre-merge
- `docs/agent-guides/deployment.md` — full deployment guide
