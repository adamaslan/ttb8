---
date: 2026-08-25
type: concept
tags: [seo, duplicates, redirects, article-registry, routing]
sources: [docs/todo3-restyle.md, app/routes.ts, app/article-registry.json, app/routes/ai-articles.tsx]
---

# Concept: SEO Duplicate Consolidation

## The pattern

`app/article-registry.json` was not a content index — it was **an SEO A/B
variant index**. Before 2026-08-25 it held exactly 17 entries, and all 17 were
members of five duplicate clusters: the same article, published under 2–4
near-identical slugs/titles (snapstate, robinhood, catlantean/1990s-FPS,
Cloudflare Flagship, vscode github.dev oauth). This is the third axis of
[[concept-article-source-of-truth-drift]] — not registry-vs-routes.ts drift,
but **the registry silently encoding a duplication problem** rather than a
canonical list.

The consolidation policy, applied per cluster:

1. **Pick one winner** — longest/most complete body, cleanest slug, already in
   the registry where possible. This is a judgment call, never automated.
2. **Retire the rest as 301 stubs** — the losing route file is replaced with a
   5-line `redirect(..., { status: 301 })` loader (pattern originated in
   `continuous-pentesting-ci-guide.tsx`), so the slug stays crawlable/indexed
   but consolidates link equity onto the winner instead of splitting it.
3. **Archive, never delete** — the original `.tsx` source is copied to
   `file-archive/` with an `ARCHIVED:`/`REASON:` header before being
   overwritten, per the repo-wide archive-don't-delete rule.
4. **Drop the loser from `article-registry.json` and `ai-articles.tsx`'s card
   list** — those are discovery surfaces; keeping dead-end/redirect cards in
   them serves no one.

## Where it appears

Applied to four clusters on 2026-08-25 (`docs/todo3-restyle.md` Phase 1):

- **snapstate** (3→1): kept `snapstate-persistent-state-for-ai-agents`
- **robinhood** (4→1): kept `robinhood-agentic-trading` (already dark-shell,
  ~2x the word count of the runner-up — the only cluster needing zero restyle)
- **catlantean/1990s FPS** (4→1): kept `how-one-dev-built-catlantean-3d-by-hand`
- **vscode github.dev oauth** (3→1): kept
  `vscode-bug-github-dev-token-stealing-one-click` (a literal `-v2` slug was
  retired — a versioned suffix should never be the public-facing one)

Net: 18 routes → 5 (11 became 301 stubs). `article-registry.json` went from
17 → 6 entries (the 4 winners above, plus `lastfm-goes-independent-*` and the
Cloudflare survivor below, neither of which was ever a true duplicate — they
rode along in the original 17 regardless).

## Contradictions / tensions

**Cluster D (Cloudflare Flagship) broke the pattern.** The 4 Flagship
variants were not SEO A/B copies of one true story — two of them
(`cloudflare-flagship-2-zero-code-feature-flags`,
`cloudflare-flagship-3-zero-redeployments`) announced a fabricated
**"Flagship 2.0"** and **"3.0"** as real product releases. No such versions
exist. This is a factual-accuracy problem wearing a duplication problem's
clothes, and the standard 301-and-consolidate policy was wrong for it:
redirecting a retracted claim to the real article implies the claim was
merged/superseded, when it should read as never having been true.

Resolution: those two were **removed outright** — route file deleted, entry
dropped from `routes.ts`, source archived to `file-archive/` — with **no
redirect**. The two real-story variants
(`cloudflare-flagship-feature-flags-made-easy`,
`cloudflare-flagship-simplifies-feature-flags`) were left as an unresolved
2-way duplicate for a future pass, specifically *not* consolidated in the same
sweep, to keep the accuracy fix and the SEO consolidation from being
conflated in one commit.

> ⚠️ One in-body content link broke as a side effect: `snapstate-persistent-state-for-ai-agents.tsx`
> linked to `/cloudflare-flagship-3-zero-redeployments` (the now-deleted fabricated
> route). Repointed to the real `cloudflare-flagship-feature-flags-made-easy` rather
> than left dangling. This is the generalizable risk of removing (not redirecting) a
> route: unlike 301 stubs, a hard removal requires a repo-wide reference sweep first.

## Related but distinct: Phase 4 staleness archiving (PR#44)

Phase 4 of `docs/todo3-restyle.md` reused steps 2–3 of this pattern (301 stub
+ archive-with-header) for a **different reason**: not duplication, but
staleness/thinness. `nab-2023-audio-video-gear` (a 2023 trade-show gear
roundup) and `weirdinternetfacts` (a 44-line trivia listicle with no
consistent shell) were retired to `/` with no winner to redirect to, since
there was no duplicate cluster — just one obsolete post each. Same mechanism,
different trigger; don't conflate "this is a copy of that" with "this is
stale," since the former implies a live winner to redirect to and the latter
usually doesn't.

Phase 4 also promoted one file out of the OTHER-shell bucket entirely:
`three-essential-webstorm-shortcuts` became the second real guide
(`/guides/three-webstorm-shortcuts`) rather than being restyled as a flat
article — see [[entity-routing]] for the new `/guides/*` route type. Two
other guide-titled candidates (`how-to-invest-in-whisky`,
`the-ultimate-guide-to-flyers-in-blender-with-the-node-editor`,
`how-to-use-the-pie-menu-in-blender`) were considered for promotion and
rejected on inspection — despite "how-to"/"guide" titles, all three are
flowing prose with no actual numbered steps a reader executes, so they were
restyled as articles instead. Title shape alone is not sufficient signal for
the guide/article split; the content has to actually be step-shaped.

## See also

- [[concept-article-source-of-truth-drift]] — the registry/routes.ts/ai-articles.tsx
  triple-source problem this consolidation partially unwound
- [[entity-routing]] — `app/routes.ts`, edited directly as part of this cleanup
- `docs/todo3-restyle.md` — the frozen work plan and Phase 1 cluster tables
  this page synthesizes
