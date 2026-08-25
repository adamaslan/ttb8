# Wiki Log — ttb8

Append-only chronological record of wiki activity. Newest entries at the bottom.

## [2026-08-24] init | created wiki-ttb8 mirroring nuwrrrld-portal's karpathywiki pattern | pages touched: 9

Created SCHEMA.md, START-HERE.md, overview.md, index.md, log.md, and 5 entity + 2 concept pages (entity-routing, entity-article-pipeline, entity-auth, entity-deployment, entity-three-components, concept-article-source-of-truth-drift, concept-gemini-review-gate), synthesized from `docs/agent-guides/*`, `.claude/skills/*`, `package.json`, `app/routes.ts`, and recent git history. No incidents/decisions backfilled — wiki starts from today forward per user's chosen scope.

## [2026-08-24] incident (inline) | Netlify build failure on PR #43 — routes.ts referenced 10 uncommitted route files/images | cost: near-miss

`app/routes.ts` (committed in 465f121) registered 10 article routes (vscode-*, snapstate-* ×2, catlantean/handcrafted-* ×4, lore-open-source-*) whose `.tsx` files and images existed only in the local working tree, never committed. Netlify's deploy-preview build for PR #43 failed with `ENOENT` during Vite's route-config resolution. Root cause: these files had been sitting untracked since before this session began; the earlier "Dextego" commit only staged/committed the dextego-specific files and left the pre-existing untracked set behind. Fixed by committing all 10 `.tsx` files + 10 images in 8e25daa, verified with a local `npm run build` before pushing. Not yet promoted to a standalone `incident-*.md` page — see [[index]] Incidents section.

## [2026-08-24] ingest | PR #43 add Dextego AI sales coaching article + fix Netlify build | pages touched: 3

Touched [[entity-routing]] (route ordering — Dextego placed where WebStorm was, WebStorm moved to the end), [[entity-article-pipeline]] (no new pattern, but the article follows the documented flow), and this log. The build-fix commit (8e25daa) is the first real instance of [[concept-article-source-of-truth-drift]]'s cousin failure mode: not drift between registries, but drift between "committed" and "working tree" — same root problem (multiple sources of truth for "what exists"), different axis.

## [2026-08-25] ingest | Dextego article missing rendered hero image | pages touched: 3

The Dextego article defined `hero` and used it only in `meta()` (`og:image`/`twitter:image`/`linkedin:image`) — no `<img>` in the JSX body, so the article page rendered with no visible cover image despite the homepage card and social previews looking correct. Fixed in code (added the `<img>` after `<header>`) and in `docs/agent-guides/style-guide.md` §7, which now requires the cover image be rendered in the article body, not just wired into `meta()`. Touched [[entity-article-pipeline]] (new known-failure entry), [[concept-article-source-of-truth-drift]] (cross-link), and this log.
