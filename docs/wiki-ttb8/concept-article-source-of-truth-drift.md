---
date: 2026-08-27
type: concept
tags: [drift, articles, data-modeling, registry, sections]
sources: [app/article-registry.json, app/routes.ts, app/routes/ai-articles.tsx, app/routes/_index.tsx, app/lib/section-articles.ts, PR#43, PR#45]
---

# concept: Article Source-of-Truth Drift

## The pattern

Three separate places claim to enumerate "the articles on this site," and none of them is generated from the others:

1. **`app/article-registry.json`** — a structured list (slug, title, og_description, image, keywords) intended to be metadata-authoritative. Currently 18 entries.
2. **`app/routes.ts`** — the actual routable URLs (this one *is* authoritative for what 404s vs. renders — see [[entity-routing]]). Includes all 18 registry articles plus ~41 older/evergreen routes not in the registry at all.
3. **`app/routes/ai-articles.tsx`** — a standalone grid component with its **own hardcoded** array of 40 articles (title/description/link/image, not imported from the registry). It is itself unregistered in `routes.ts`, so it currently renders nothing in production.

As of the 2026-08-24 ingest (PR #43), adding the Dextego article required manually touching two of these three places (`routes.ts` and `ai-articles.tsx`) plus the homepage grid in `_index.tsx` — a fourth list, separate from all three — and `article-registry.json` was **not** updated as part of that change, meaning it's already stale relative to the live site.

**PR #45 added a fifth enumerator: `app/lib/section-articles.ts`** — a hand-maintained `Record<"culture"|"biotech"|"finance", SectionArticle[]>` backing the new nav section pages. It re-copies title/description/link/image for ~13 articles that also live in `ai-articles.tsx` and/or `_index.tsx`, with no shared source. Its `link` slugs aren't checked against `app/routes.ts`. The `ai` section deliberately reuses `/ai-articles` instead of getting a `section-articles.ts` key, so the split is: three sections in the new file, one section still the old standalone component. See [[decision-hand-maintained-section-taxonomy]] for why a `category` field on `article-registry.json` (todo1 item 2 steps 1–2) was deferred.

## Where it appears

- Every "add a new article" task, per `.claude/skills/add-article-route.md` and `docs/agent-guides/article-to-instagram-pipeline.md`, which describe registering the route and adding a homepage card — neither mentions updating `article-registry.json`, suggesting the registry may already be a vestigial/abandoned data source rather than a currently-maintained one.
- `ai-articles.tsx`'s article count (40) is a superset of the homepage's article count, implying it may have been snapshotted from `_index.tsx` at some point and then diverged as new articles were added to the homepage but not back-ported to `ai-articles.tsx`.

## Contradictions / tensions

> ⚠️ Contradiction: `article-registry.json` claims ~6–18 canonical articles (counts disagree across docs); `app/routes.ts` serves ~62 total routes; `ai-articles.tsx` independently lists ~42; `app/lib/section-articles.ts` independently lists ~13; `_index.tsx` has its own homepage-card list. Five hand-maintained enumerations, none generated from another, no automated check comparing any pair.

The tension: a registry-driven model (single JSON, everything else derives from it) would remove this drift entirely, but nothing currently reads `article-registry.json` to generate routes or homepage cards — it appears to have been introduced without becoming load-bearing.

## See also

- [[entity-routing]] — the actually-authoritative list for what renders
- [[entity-article-pipeline]] — the manual, multi-step process that produces this drift each time an article is added, including the related "hero defined in `meta()` but never rendered in JSX" failure caught on the same Dextego article
- [[decision-hand-maintained-section-taxonomy]] — PR#45's choice to add the 5th enumerator by hand rather than backfill a registry `category` field
