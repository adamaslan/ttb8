---
date: 2026-08-27
type: decision
tags: [routing, sections, navbar, data-modeling, articles]
sources: [app/lib/section-articles.ts, app/routes/culture.tsx, app/routes/biotech.tsx, app/routes/finance.tsx, app/components/Navbar.tsx, docs/todo1.md, PR#45]
---

# decision: Hand-maintained section taxonomy (not a registry `category` field)

## Decision

The four-section navbar (`culture / biotech / ai / finance`, todo1 item 2) is
backed by a hand-written module, `app/lib/section-articles.ts`, holding a
`Record<"culture"|"biotech"|"finance", SectionArticle[]>` of literal
title/description/link/image objects. The `ai` section is not in this module at
all — its navbar link points at the pre-existing `/ai-articles` route.

`docs/todo1.md` item 2 steps 1–2 (reconcile `article-registry.json` against
routes, then add a constrained `category` field to the registry and drive
section pages off it) were **explicitly deferred**, not done.

## Date

2026-08-27 (PR #45).

## Context

- The registry (`app/article-registry.json`) holds ~6 entries against ~56
  declared routes and has **no** `category`/`section` field. Making it
  section-authoritative first requires backfilling ~50 missing entries — a
  large, separate task (todo1 item 2 step 1, "Not started").
- Nothing currently reads `article-registry.json` to generate routes or cards
  (see [[concept-article-source-of-truth-drift]]) — wiring sections off it
  would be the first load-bearing consumer, raising the stakes of getting the
  backfill right.
- The user asked to "add the existing articles to these sections" as the
  immediate goal, and (via clarifying questions) chose "you propose the
  mapping" over "add a category field to article-registry.json."
- Section membership for the hand-written articles is a subjective editorial
  call (~13 articles), not a mechanical derivation — a human needs to review it
  regardless of where it's stored.

## Alternatives considered

1. **Registry `category` field, section pages derive from it** (todo1 item 2 as
   written). Rejected *for now*: blocked on the ~50-entry registry backfill and
   on making the registry load-bearing, neither of which the immediate task
   needed. Still the right end state if the section lists grow unwieldy.
2. **A `category` field on each route file's `meta()`**, scanned at build time.
   Rejected: React Router framework mode has no build-time route-metadata
   scan; would need custom tooling.
3. **One dynamic `route("s/:section", …)`** instead of three near-identical
   route files. Deferred as a cleanup — noted as an open question on
   [[entity-routing]]; three flat files are fine at three sections.

## Consequences

- **Fifth independent article enumeration.** `section-articles.ts` joins
  `article-registry.json`, `app/routes.ts`, `ai-articles.tsx`, and the
  `_index.tsx` homepage grid. See [[concept-article-source-of-truth-drift]].
- **Unverified slugs.** `link` values are hand-copied; nothing checks them
  against `app/routes.ts`, so a typo or a later route rename silently produces
  a 404 card. `npm run typecheck` will not catch this.
- **Cheap to change.** The mapping is one readable file with a comment saying
  it's a judgment call — re-categorizing is a one-file edit, and migrating to a
  registry-driven model later is unblocked, not foreclosed.
- The `ai` section staying on `/ai-articles` means the "add to a section" flow
  is asymmetric: three sections edit `section-articles.ts`, the AI one edits
  `ai-articles.tsx`.

## Validated by

- `npm run typecheck` passes.
- Not yet validated in a browser (`/culture`, `/biotech`, `/finance` render;
  navbar links resolve) — on the PR #45 test plan, unchecked at ingest time.

## See also

- [[entity-routing]] — where the section routes and the navbar are documented
- [[concept-article-source-of-truth-drift]] — the drift this decision knowingly adds to
- `docs/todo1.md` item 2 — the original "nav as sections" plan and its deferred steps
