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

## [2026-08-25] incident (inline) | Dextego homepage hero image cropped/dead-space in featured slot — root cause is aspect ratio, not CSS | cost: several failed layout attempts

After the hero-image fix above, placing Dextego's cover image (`public/dextego1.png`, confirmed 1080×1125px near-square) into the Part 1 "big" homepage slot (`md:col-span-2 md:row-span-2`, a wide/tall container) produced either visible dead space or a cropped/sliced image across four consecutive CSS-only attempts (`max-h-64`, `flex-1 object-cover`, forced `aspectRatio: "16 / 9"`, `w-4/5` + centering). None fully worked because a near-square image cannot cleanly fill a wide-tall slot without either cropping or gapping. Reverted to plain `h-auto max-w-full` (safe, no crop, but doesn't fill the slot) as of this entry. Real fix belongs upstream in image generation: the Part 1 featured slot needs a landscape-oriented source image (~16:9 or ~4:3), not a square one re-cropped after the fact. Touched [[entity-article-pipeline]] (new known-failure entry) and this log.

## [2026-08-25] ingest | todo3-restyle Phase 0/1 — registered ai-articles + smartbidder-diageo, consolidated 5 duplicate clusters | pages touched: 3

Executed `docs/todo3-restyle.md` Phase 0 (registered the previously-orphaned
`ai-articles.tsx` and `smartbidder-diageo.tsx` routes in `app/routes.ts`) and
Phase 1 (duplicate cluster cleanup). 18 duplicate article routes consolidated
to 5 winners: 11 converted to 301-redirect stubs (source archived to
`file-archive/`), 2 fabricated "Cloudflare Flagship 2.0/3.0" routes removed
outright with no redirect (they announced product versions that don't exist —
an accuracy problem, not a duplication problem). `article-registry.json`
trimmed 17→6 entries; `ai-articles.tsx` card list updated to match. One
dangling in-body link (snapstate → deleted Flagship 3.0 route) found and
repointed during cleanup. `npm run typecheck` clean after all changes. New
page [[concept-seo-duplicate-consolidation]] synthesizes the policy and the
Cloudflare exception. Phase 2 (light→dark restyle of the 11 surviving
LIGHT-shell articles) delegated to 3 background Haiku subagents per the
frozen class map in the same doc — completed and verified same day (see next
entry). Phase 3 guide accent hue decided (cyan) but guide build not started;
Phase 4 triage not started.

## [2026-08-25] ingest | todo3-restyle Phase 2 — 11 LIGHT-shell articles restyled dark via 3 Haiku subagents | pages touched: 1

Delegation ledger: parent=sonnet, 3 background Haiku agents (batch A: 4 files
— cloudflare-flagship-feature-flags-made-easy, cloudflare-flagship-simplifies-
feature-flags, how-one-dev-built-catlantean-3d-by-hand, threejs-and-web3;
batch B: 4 files — 5-ways-ai-can-help-farmland-restoration, dspy101, what-are
-the-best-free-text-to-speech-tools, what-is-rag; batch C: 3 files —
first-pentest-free-tools-intro (363 lines, largest), snapstate-persistent-
state-for-ai-agents, vscode-bug-github-dev-token-stealing-one-click). Each
applied the frozen class map from `docs/todo3-restyle.md` (light shell →
`bg-black`, blue header → black/green-accent header with badge pill,
`bg-gray-100` sections → `bg-gray-950` cards, etc.), transcribing prose
byte-for-byte per the §4.1 no-rewrite contract. Verified in parent: grep for
all 4 forbidden legacy classes across all 11 files returns nothing;
`npm run typecheck` clean; section/heading counts preserved pre/post on the
largest file (37→38, consistent with structure not content loss). One false
positive investigated and cleared: a `<Link to="/robinhood-ai-agent-trading-
mcp-developers">` inside the transcribed snapstate prose looked suspicious
post-restyle since that route is a 301 stub (per the same-day Phase 1
cleanup), but `git diff` confirmed the link and its surrounding sentence
were already in the file pre-restyle — Haiku transcribed it correctly, and
the retired route still resolves via its redirect. This is the last content
change from `docs/todo3-restyle.md` Phase 2. Touched
[[concept-seo-duplicate-consolidation]] indirectly (no page edit needed) and
this log.

## [2026-08-25] ingest | PR #44 complete todo3-restyle Phase 3 (guides) + Phase 4 (legacy triage) | pages touched: 3

Phase 3: built the first two real guides — `/guides/continuous-pentesting-ci`
(content moved from `pensar-continuous-pentesting-ci.tsx`) and
`/guides/three-webstorm-shortcuts` (promoted out of Phase 4's OTHER bucket) —
cyan accent, sticky step-index ToC, numbered `Step N —` sections, `Last
verified` footer. Old slugs 301 directly to the new routes (no redirect
chains). Phase 4: triaged the 22 remaining legacy OTHER-shell routes — 2
archived as stale (`nab-2023-audio-video-gear`, `weirdinternetfacts`), 1
promoted to guide, 19 restyled to the dark-shell class map via 3 background
Haiku agents (verified in parent: zero forbidden classes, `npm run
typecheck` and `npm run build` clean, no fabrication tells). Three
guide-titled candidates were considered for promotion and rejected on
inspection — prose, not actual numbered steps.

Touched [[entity-routing]] (new `/guides/*` route type documented, the
`ai-articles.tsx` registration drift note corrected now that Phase 0 closed
it), [[concept-seo-duplicate-consolidation]] (added a "related but distinct"
section distinguishing staleness-archiving from duplicate-consolidation, and
the guide-promotion rejections), and this log. `docs/todo3-restyle.md` is
now fully complete (Phases 0–4).
