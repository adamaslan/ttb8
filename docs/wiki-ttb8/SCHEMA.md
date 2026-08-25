# Wiki Schema — ttb8

The LLM owns this layer entirely. The user curates sources and asks questions; the LLM writes and maintains every wiki page. This mirrors the karpathywiki pattern used in `nuwrrrld-portal/docs/wiki-portal/SCHEMA.md`, `gcp3/docs/wiki-gcp3/`, `gcp3-mobile/docs/wiki-mobile/`, and `holdemfoldemapp/docs/wiki-holdfold/`.

## Three Layers

```
docs/wiki-ttb8/raw/      — IMMUTABLE source documents. User drops files here. LLM reads, never writes.
docs/wiki-ttb8/          — LLM-written pages: entities, concepts, decisions, incidents, synthesis.
docs/wiki-ttb8/SCHEMA.md — This file. Co-evolved by user + LLM. Governs all wiki behavior.
```

Raw sources are evidence; wiki pages are interpretation. Never copy source material verbatim — always synthesize, integrate, and cross-link.

## Directory Layout

```
docs/wiki-ttb8/
├── SCHEMA.md              — This file (conventions + workflow)
├── START-HERE.md          — 60-second orient + task-routed reading order
├── index.md               — Catalog of every page + one-line summary
├── log.md                 — Append-only chronological record
├── overview.md            — System map, stack, current health
│
├── entity-*.md            — One page per named component (the hubs)
├── concept-*.md           — Cross-cutting patterns
├── incident-*.md          — One page per production incident
├── decision-*.md          — Recorded design decisions
│
└── raw/                   — Immutable source documents
```

## Page Types & What They Must Contain

### Entity Pages (`entity-*.md`)
One page per named component. These are the hubs — everything links to entities.

Required sections: **What it is**, **Where used**, **Known failures**, **Open questions**, **See also**.

### Concept Pages (`concept-*.md`)
Cross-cutting patterns and design choices.

Required sections: **The pattern**, **Where it appears**, **Contradictions / tensions**, **See also**.

### Incident Pages (`incident-*.md`)
One page per production incident (broken build, broken deploy, broken publish pipeline, review-caught regression). Must update every entity page it touches.

Required sections: **Date & severity**, **What happened**, **Root cause**, **Resolution**, **Impact on design**, **Open items**.

### Decision Pages (`decision-*.md`)
Recorded design decisions. The single most important thing a decision page does is explain *why*.

Required sections: **Decision**, **Date**, **Context**, **Alternatives considered**, **Consequences**, **Validated by**, **See also**.

## Page Conventions

- **Filename**: kebab-case prefix tells the type: `entity-`, `concept-`, `incident-`, `decision-`
- **Frontmatter**:
  ```yaml
  ---
  date: 2026-08-24
  type: entity | concept | incident | decision | overview
  tags: [routing, articles, netlify]
  sources: [app/routes.ts, PR#43]
  ---
  ```
- **Link style**: `[[filename|text]]`
- **Contradiction notices**: `> ⚠️ Contradiction: page X says A; code says B. Unresolved.`
- **Open question notices**: `> ❓ Open question: …`

## Cross-Repo Boundary

This wiki is ttb8-only. ttb8 publishes to Instagram via a separate `social-pr-autopilot` backend that lives outside this repo — link to it by path/description, not `[[…]]`, since Obsidian-style wikilinks don't cross vaults:

```
See the social-pr-autopilot backend (outside this repo) for the FastAPI publish proxy that
`instagram-queue/*.json` jobs are handed to.
```

Never edit another repo's wiki from a ttb8 session.

## Secret Policy

**Never write real API keys, tokens, Clerk publishable/secret keys, Instagram Graph API access tokens, Instagram Business Account IDs, ngrok URLs, or Netlify site IDs into wiki pages.**

Use placeholders:
- Clerk publishable key → `{clerk-publishable-key}` (env `VITE_CLERK_PUBLISHABLE_KEY`)
- Clerk secret key → `{clerk-secret-key}` (env `CLERK_SECRET_KEY`)
- Instagram access token → `{instagram-access-token}` (env `INSTAGRAM_ACCESS_TOKEN`)
- Instagram Business Account ID → `{instagram-business-account-id}` (env `INSTAGRAM_BUSINESS_ACCOUNT_ID`)
- Public base URL (ngrok/domain) → `{instagram-public-base-url}` (env `INSTAGRAM_PUBLIC_BASE_URL`)
- Gemini/Imagen API key → `{gemini-api-key}` (env `GEMINI_API_KEY`)

## On PR Creation

Whenever a PR is opened for this repo (`gh pr create`), treat the PR as an ingest source before finishing the task:

1. **Secret scan** — grep the diff for credentials before reading
2. **Read the diff + PR description** — extract key facts, decisions, contradictions
3. **Identify which pages to create or update** — new route/component → update [[entity-routing]] or the relevant entity; new incident (broken build, broken deploy, Gemini-review-caught regression) → `incident-*.md` (+ update every entity it touches); design decision revealed → `decision-*.md`; contradiction → mark inline on both pages
4. **Never copy verbatim** — synthesize, integrate, cross-link
5. **Update `index.md`** — add any new pages
6. **Append to `log.md`** — `## [{date}] ingest | PR #{number} {title} | pages touched: N`

A single source should typically touch 2–6 pages given ttb8's smaller surface area (compared to portal's 3–10) — if it touches only 1, look for what else the change actually implies (e.g. a new article route usually touches [[entity-routing]] **and** [[entity-article-pipeline]]).

## Log Format

```
## [2026-08-24] ingest | PR #43 add dextego article | pages touched: 3
## [2026-08-24] query | Where does the Instagram caption get generated?
## [2026-08-24] lint | 0 orphans, 1 open question
```
