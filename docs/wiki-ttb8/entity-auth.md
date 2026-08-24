---
date: 2026-08-24
type: entity
tags: [auth, clerk]
sources: [docs/agent-guides/auth.md, app/root.tsx, PR#43]
---

# entity: Auth (Clerk)

## What it is

Clerk (`@clerk/react-router ^2.3.7`) provides authentication, mounted as a provider in `app/root.tsx`. Custom domain `clerk.tastytechbytes.com` is used instead of the default `clerk.accounts.dev`.

Two distinct gating patterns exist and are not interchangeable:

- **Client-side**: `<SignedIn>` / `<SignedOut>` + `<RedirectToSignIn>` from `@clerk/react-router` — used for UI that conditionally renders based on auth state without needing a hard server redirect.
- **Server-side (loader)**: `getAuth(args)` from `@clerk/react-router/ssr.server` inside a route's `loader`, checking `userId` and throwing a `redirect("/sign-in")` if absent — used when a route must not even render protected data to an unauthenticated request.

Environment variables: `VITE_CLERK_PUBLISHABLE_KEY` (frontend, Netlify env) and `CLERK_SECRET_KEY` (server, Netlify env). Never committed; local values live in `.claude/settings.local.json`, which is gitignored.

## Where used

- `app/root.tsx` — provider mount point for the whole app
- Any route that needs to gate content — per `.claude/skills/add-article-route.md`, articles needing auth wrap content with `<SignedIn>`/`<SignedOut>`
- CSP entries in `netlify.toml` explicitly allowlist Clerk's domains (`clerk.tastytechbytes.com`, `accounts.tastytechbytes.com`) and Cloudflare challenge domains (Clerk's bot protection) — see [[entity-deployment]]

## Known failures

- None recorded yet in this wiki. (Compare to `nuwrrrld-portal`'s billing/auth incident history — that repo's Stripe+Clerk stack has a documented production outage; ttb8's simpler auth-only Clerk usage has no equivalent incident on record as of this ingest.)

## Open questions

- ❓ Is Clerk used for anything beyond gating `admin1.tsx` and optionally-gated articles? The source docs don't describe a broader entitlement/subscription model like `nuwrrrld-portal`'s — ttb8 appears to be auth-only, no billing.
- ❓ Who has access to `admin1.tsx`, and how is that authorization decided (any signed-in user, or a specific role/allowlist)? Not documented.

## See also

- [[entity-deployment]] — CSP header requirements for Clerk's domains
- [[entity-routing]] — `admin1.tsx` is deliberately unregistered/private, separate from Clerk gating
- `docs/agent-guides/auth.md` — full auth patterns doc with code samples
