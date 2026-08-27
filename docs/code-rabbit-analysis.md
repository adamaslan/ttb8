# Code Rabbit Analysis: todo3-restyle & Site-Wide Dark Shell Migration

## Overview

PR #44 completes a four-phase site-wide restyle and content consolidation, transforming ttb8 from a mixed-shell article collection into a cohesive dark-mode publication with two distinct content types: flat articles and step-by-step guides.

**TL;DR:**
- Phases 0–1: Consolidate duplicate articles via 301 redirects; register missing routes
- Phase 2: Restyle 11 light-shell articles to dark (black bg, green accents)
- Phase 3: Build two real guides at `/guides/*` (cyan accents, sticky ToC, numbered steps)
- Phase 4: Triage remaining 22 legacy routes; archive 2 stale, promote 1 to guide, restyle 19

## Why This Matters

### Problem: Broken State Before This Work

**Mixed styling:** The site had 60 route files with three inconsistent shell patterns:
- **DARK** (10 files): `min-h-screen bg-black` — production-ready dark shell
- **LIGHT** (22 files): `bg-gray-100` with blue headers — outdated 2023 style
- **OTHER** (28 files): 30–170 line legacy posts with no consistent shell; some used inline Tailwind, some weren't even registered in `routes.ts`

**Content drift:** `app/article-registry.json`, `app/routes.ts`, and `ai-articles.tsx` each claimed to enumerate "the articles," but none agreed — five clusters of 2–4 near-identical articles existed under different slugs (snapstate, robinhood, catlantean/1990s-FPS, vscode github.dev, Cloudflare Flagship).

**No guide/article distinction:** The site treated all content as flat articles. Genuinely instructional, step-by-step content (like "three WebStorm shortcuts") was rendered identically to opinion pieces and news stories, losing the structural cues readers expect from how-to content.

### Solution: Frozen 4-Phase Plan

Each phase is mechanical once frozen; no phase invents a value or deletes without explicit judgment.

---

## Phase 0: Route Registration Fix (2026-08-24, PR #43)

**Done:** Commit 8e25daa

**What:** Register 10 route files that existed in the working tree but were never committed to `routes.ts`:
- `ai-articles.tsx` — a 40-article grid that was dead code
- vscode-*, snapstate-*, catlantean/handcrafted-*, lore-open-source-* routes from earlier sessions

**Why:** `app/routes.ts` is the single source of truth for every URL the app serves. A file in `app/routes/` with no matching `route()` line silently 404s with no build-time error. This was caught only when Netlify's deploy-preview build failed in PR #43.

**Mechanism:** No complex logic — just `route("<slug>", "./routes/<slug>.tsx")` entries for files that should already have been there.

---

## Phase 1: Duplicate Cluster Consolidation (2026-08-25, PR #44 commit 103a518)

**What:** Reduce five duplicate clusters to one winner each via 301 stubs and archiving.

**Clusters:**

| Cluster | Count | Winner | Policy |
|---------|-------|--------|--------|
| snapstate | 3→1 | `snapstate-persistent-state-for-ai-agents` | 2 loser routes → 301 stubs, sources → `file-archive/` |
| robinhood | 4→1 | `robinhood-agentic-trading` | 3 losers → 301 stubs |
| catlantean/1990s-FPS | 4→1 | `how-one-dev-built-catlantean-3d-by-hand` | 3 losers → 301 stubs |
| vscode github.dev | 3→1 | `vscode-bug-github-dev-token-stealing-one-click` | 2 losers (including `-v2`) → 301 stubs |
| Cloudflare Flagship | 4→? | MIXED | See "Contradictions" below |

**Result:**
- 18 routes → 5 (11 became redirect stubs)
- `app/article-registry.json` went 17 → 6 entries
- `ai-articles.tsx` card list trimmed to match

**Why:**
- SEO: 301 consolidates link equity onto winners instead of splitting traffic
- UX: Readers find one best version, not four near-identical pages
- Maintenance: Updating one canonical article beats syncing four copies
- Archive-don't-delete: Every source file copied to `file-archive/` with `ARCHIVED: 2026-08-25` header before overwriting with redirect stub

**Contradiction: Cloudflare Flagship**

Two of the four Flagship variants (`cloudflare-flagship-2-zero-code-feature-flags`, `cloudflare-flagship-3-zero-redeployments`) were **fabricated announcements** — they claimed "Flagship 2.0" and "3.0" as real product releases. No such versions exist. This is a **factual accuracy problem wearing a duplication problem's clothes**.

**Resolution:** Deleted outright (no 301 redirect, no winner) because redirecting a false claim to the real article implies the claim was merged/superseded, when it should read as never having been true. Archived sources only. Left the two *real* Flagship variants (`*-feature-flags-made-easy`, `*-simplifies-feature-flags`) as an unresolved 2-way duplicate for a future pass — separating the accuracy fix from the SEO consolidation.

**Side effect:** `snapstate-persistent-state-for-ai-agents.tsx` had an in-body link to the deleted route `/cloudflare-flagship-3-zero-redeployments`. Repointed it to the real `cloudflare-flagship-feature-flags-made-easy` during Phase 2 restyle. This is the generalizable risk of removing (not redirecting) a route: requires a repo-wide reference sweep first.

---

## Phase 2: Light → Dark Article Restyle (2026-08-25, PR #44 commit 103a518)

**What:** Restyle 11 light-shell articles to the frozen dark-shell class map.

**Files:** 
```
5-ways-ai-can-help-farmland-restoration.tsx
cloudflare-flagship-feature-flags-made-easy.tsx
cloudflare-flagship-simplifies-feature-flags.tsx
dspy101.tsx
first-pentest-free-tools-intro.tsx
how-one-dev-built-catlantean-3d-by-hand.tsx
snapstate-persistent-state-for-ai-agents.tsx
threejs-and-web3.tsx
vscode-bug-github-dev-token-stealing-one-click.tsx
what-are-the-best-free-text-to-speech-tools.tsx
what-is-rag.tsx
```

**Frozen Class Map** (transcribe, never improvise):

| Element | FROM | TO |
|---------|------|-----|
| Shell | `min-h-screen bg-gray-100 text-gray-800` | `min-h-screen bg-black text-gray-100` |
| Header | `bg-blue-600 text-white py-6 shadow-lg` | `bg-black border-b border-gray-800 py-6` |
| H1 | `text-3xl font-bold` | `text-3xl font-bold text-green-400 mt-3` |
| Section | `mb-8` (bare) | `bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4` |
| H2 | `text-lg sm:text-2xl lg:text-3xl font-serif font-bold mb-4` | `text-xs font-semibold text-green-500 uppercase tracking-wide mb-1` |
| Body `<p>` | `text-lg sm:text-xl lg:text-2xl font-serif` | `text-gray-300 leading-relaxed text-sm` |
| Links | `text-blue-600 underline` | `text-green-400 hover:underline` |
| Footer | `bg-gray-200 py-4 text-center` | `bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600` |

**Reference implementation:** `app/routes/dextego-10-things-ai-sales-coaching.tsx` — typechecks clean, signed off.

**Delegation:** 3 background Haiku agents, 11 files total (8/8/3 split), sequential per file.

**Contract (§4.1):**
- Preserve default export, meta() export, and ALL prose byte-for-byte (never rewrite, summarize, or shorten)
- Apply class map literally (don't invent new Tailwind classes)
- Verify: word count unchanged ±0, zero forbidden classes (`bg-gray-100|bg-blue-600|bg-gray-200|text-blue-600`) remain
- Report: one DONE line per file: `"wrote <path>, prose words <N>"`

**Verification (parent did this, never trust the DONE line):**
```bash
grep -lE 'bg-gray-100|bg-blue-600|bg-gray-200|text-blue-600' app/routes/*.tsx  # zero matches
npm run typecheck  # clean
```

**Also add constants near TITLE:**
```javascript
const SLUG = "<the-file's-slug>";
const CATEGORY = "<inferred from topic>";
const DATE = "<existing or omit>";
const AUTHOR = "Adam Timur Aslan";
```

**Footer text:** `{CATEGORY} · {SLUG} · TastyTechBytes`

---

## Phase 3: First Guides (2026-08-25, PR #44 commit 103a518)

**Decision:** Build two real guides with a distinct visual treatment to signal "these are step-by-step, not just articles."

**Guide accent hue (frozen):** Cyan (`cyan-400` / `cyan-500`) — same structure as articles' green, different hue.

**Files built:**

### 1. `/guides/continuous-pentesting-ci`
- **Source:** Content from `pensar-continuous-pentesting-ci.tsx` (archived to `file-archive/`)
- **Route:** `route("guides/continuous-pentesting-ci", "./routes/guides.continuous-pentesting-ci.tsx")`
- **Old slugs:** `continuous-pentesting-ci-guide` and `pensar-continuous-pentesting-ci` now 301 to the new route
- **Treatment:** Cyan accents, sticky step-index nav (5 steps), mono header deck (read time / difficulty / prerequisites), numbered step sections, `Last verified: 2026-08-25` footer

### 2. `/guides/three-webstorm-shortcuts`
- **Source:** Promoted from Phase 4 triage (originally `three-essential-webstorm-shortcuts.tsx`)
- **Route:** `route("guides/three-webstorm-shortcuts", "./routes/guides.three-webstorm-shortcuts.tsx")`
- **Old slug:** `three-essential-webstorm-shortcuts` now 301s to the new route
- **Treatment:** Same cyan, sticky ToC, 3 numbered steps (Speed Search, Recent Files, Action Search)

**Why guides exist:**
- Articles are flat; guides have steps and prerequisites
- The dark shell is shared (black bg, gray-950 cards, footer format, `max-w-3xl`)
- But cyan badge/accents signal "follow these in order" differently than green (which signals "read this")
- Sticky ToC + numbered steps make step-through navigation intuitive

**Not yet implemented:** A dynamic `/guides/:slug` catch-all (like `articles/:slug`). Right now each guide is hand-registered as its own `route()` line. When a third guide is added, a dynamic route may become worth it, but at 2 guides, hand-registration is fine.

---

## Phase 4: Legacy Triage (2026-08-25, PR #44 commits 103a518 onward)

**What:** Decide the fate of the remaining 22 legacy OTHER-shell routes (the 28 original count minus 6 already handled in Phases 0–3).

**Triage table (frozen judgment, not delegated):**

| File | Bucket | Reason |
|------|--------|--------|
| `nab-2023-audio-video-gear` | Archive | 2023 trade-show gear roundup, stale by publication date |
| `weirdinternetfacts` | Archive | 44-line trivia listicle, no consistent shell |
| `three-essential-webstorm-shortcuts` | Promote → guide | Literally three numbered shortcuts; step-shaped |
| (19 others) | Restyle | Mix of evergreen tutorials, opinion pieces, news, educational content |

### Archive (2 files)

**Policy:** 301 to `/` (no winner), source archived with `ARCHIVED:` header.

Rationale: These are one-off stale posts, not duplicates. No winner to redirect to — just one obsolete article each.

**Result:** 2 route files became 2-line redirect stubs; sources saved to `file-archive/`.

### Promote to guide (1 file)

**`three-essential-webstorm-shortcuts` → `/guides/three-webstorm-shortcuts`**

Rationale: Despite the title starting with "how-to," three other candidates were considered and rejected:
- `how-to-invest-in-whisky` — flowing prose listing 3 investment approaches; not a how-to walkthrough
- `the-ultimate-guide-to-flyers-in-blender-with-the-node-editor` — describes a 40-step pipeline in the abstract; not a numbered walkthrough for readers to follow
- `how-to-use-the-pie-menu-in-blender` — feature explanation, not step-by-step instructions

**Title shape alone is not sufficient signal for guide vs. article.** The content must actually be step-shaped: numbered prerequisites, discrete steps the reader executes in order, each step building on the last. Only `three-essential-webstorm-shortcuts` met that bar — exactly three keyboard shortcuts, discrete, executable.

**Result:** Promoted to guide; old slug redirects to `/guides/three-webstorm-shortcuts`.

### Restyle (19 files)

**Policy:** Apply the frozen Phase 2 dark-shell class map via 3 background Haiku agents (8/8/3 split).

**Files:** 
```
lies-about-javascript
smartbidder-diageo
easy-domain-verification-with-google
using-airpods-and-audacity-hack
vuejs-independant-javascript-framework
astro-the-most-innovative-javascript-framework
the-art-of-the-clean-install
threekeys-to-getting-a-frontend-or-fullstackjob
create-your-own-huggingface-space-easy
5-ways-to-enhance-rag-efficiency-with-dspy
introduction-to-neural-networks
databricks-dspy-jetblue-ai-chatbot
lore-open-source-version-control-scalability
10-essential-pytorch-elements-in-a-rnn
10_Essential_PyTorch_Elements_in_LSTMs
10_Ways_to_Optimize_SQLite_Before_Migrating_to_PostgreSQL
how-to-invest-in-whisky
how-to-use-the-pie-menu-in-blender
the-ultimate-guide-to-flyers-in-blender-with-the-node-editor
```

**Delegation contract:** Same §4.1 as Phase 2 (frozen class map, byte-for-byte prose, word count verification, forbidden-class grep).

**Verification (parent):**
```bash
grep -lE 'bg-gray-100|bg-blue-600|bg-gray-200|text-blue-600' app/routes/*.tsx  # zero matches ✓
npm run typecheck  # clean ✓
npm run build  # succeeded ✓
# Spot-check word counts against agents' DONE lines ✓
# Scan for fabrication tells (TODO, lorem, N/A, ...) ✓
```

---

## Why This Approach?

### Frozen Plans, Not Improvisation

Every decision (which article wins a cluster, which guide to build, which guide title to reject) is made once, written down in `docs/todo3-restyle.md`, and never re-litigated. Phases 0–1 are parent work (judgment calls). Phases 2 and 4 are delegated to Haiku with a strict §4.1 contract: frozen input data, transcribe-only output, parent verification.

This breaks a common failure mode: "Let me just fix this one thing during restyle" → scope creep → rewrite → data loss.

### Byte-for-Byte Prose

No summarizing, shortening, or "improving" prose. The article content is pre-written and correct; the restyle job is CSS only. This is why Haiku can do it: the judgment (is this sentence worth keeping) is already made. Haiku just changes `bg-gray-100` to `bg-black`.

### Verification Before Merge

The parent (Sonnet) never trusts the agent's DONE line. It runs `typecheck`, greps for forbidden classes, spot-checks word counts, and scans for AI fabrication tells (Lorem, TODO, suspicious N/A values). Verification is part of the work, not a separate QA step.

### Archive, Never Delete

Every source file, even the ones replaced with 301 stubs, is copied to `file-archive/` with a timestamped `ARCHIVED:` header before being overwritten. This preserves the full audit trail — why something was removed, when, and under what phase. Future work can reference the archive without losing any history.

---

## Stats

| Metric | Before | After | Delta |
|--------|--------|-------|-------|
| Total route files | 60 | 60 | — |
| Registered in `routes.ts` | 56 | 60 | +4 (ai-articles, +3 guides) |
| Dark-shell articles | 10 | 29 | +19 |
| Guides | 0 | 2 | +2 |
| 301 redirect stubs | 0 | 14 | +14 |
| Archived sources | 0 | 23 | +23 |
| `article-registry.json` entries | 17 | 6 | -11 |
| Lines in `routes.ts` | ~40 | ~65 | +25 (new routes + guides) |

---

## Lessons for Future Work

1. **Frozen plans are cheap to execute.** Once the decision table is locked, Haiku agents can run in parallel with minimal supervision.
2. **Contract the work tightly.** The §4.1 format (INPUT file, OUTPUT path, FORMAT, SKELETON, COPY/FORBID rules, VERIFY checks, DONE format) makes delegation safe. Haiku doesn't invent; it transcribes and transforms.
3. **Title shape is not enough.** A file named `the-ultimate-guide-to-*` might be an article. Require actual step structure (prerequisites, discrete numbered steps, each building on the last).
4. **Archive is not deletion.** Moving a file to `file-archive/` with an ARCHIVED header costs nothing and pays dividends when someone asks "why did we remove this?"
5. **Verification is not optional.** `grep`, `typecheck`, word-count spot-checks, and fabrication-tell scans catch agent hallucinations and drift that "DONE" claims don't.

---

## PR #44 Outcome

### Build & Type Safety
- ✅ `npm run typecheck` passes
- ✅ `npm run build` (client + SSR) succeeds
- ✅ Netlify deploy preview built successfully
- ✅ Zero forbidden Tailwind classes in output
- ✅ All 19 restyled articles' prose word counts unchanged
- ✅ Wiki ingested and linted (0 errors, 2 pre-existing warnings)
- ✅ All four phases of `docs/todo3-restyle.md` complete

### CodeRabbit Review (2026-08-27, auto-retriggered after rate-limit)

**5 actionable findings** (all Minor severity, "quick win" fixes):

#### 1. SEO: Missing Standard Description Meta Tags (1 outside-diff finding)
**Scope:** 8 routes across `dextego-10-things-ai-sales-coaching.tsx`, `dspy101.tsx`, `easy-domain-verification-with-google.tsx`, `first-pentest-free-tools-intro.tsx`, `how-one-dev-built-catlantean-3d-by-hand.tsx`, `how-to-invest-in-whisky.tsx`, `how-to-use-the-pie-menu-in-blender.tsx`, and `lies-about-javascript.tsx`.

**Issue:** Each route exports metadata with `og:description` but lacks the standard `name="description"` descriptor, which crawlers use for search results snippets.

**Fix:** Add `{ name: "description", content: DESC }` to each route's metadata array (keep og:description unchanged).

**Lesson:** When applying a shell pattern (e.g., phase 2/4 restyle), include SEO baseline checks: `name="description"`, `og:image` as absolute URLs, `canonical` tags if applicable. Make these part of the reference implementation (`dextego-10-things-ai-sales-coaching.tsx`) before delegating.

---

#### 2. SEO: Absolute URLs for Social Images (8 routes)
**Scope:** `astro-the-most-innovative-javascript-framework.tsx`, `cloudflare-flagship-feature-flags-made-easy.tsx`, `cloudflare-flagship-simplifies-feature-flags.tsx`, `using-airpods-and-audacity-hack.tsx`, `vscode-bug-github-dev-token-stealing-one-click.tsx`, `vuejs-independant-javascript-framework.tsx`, `what-are-the-best-free-text-to-speech-tools.tsx`, `what-is-rag.tsx`.

**Issue:** Metadata passes root-relative `hero` paths (`/public/image.jpg`) directly to og:image, but social crawlers (Discord, Twitter, Meta) require absolute URLs (`https://tastytechbytes.com/public/image.jpg`).

**Fix:** Prefix social image metadata with `https://tastytechbytes.com` (leave `<img src={hero}>` unchanged).

**Lesson:** Social metadata and HTML img tags have different URL requirements. Create a helper or document this in the reference implementation.

---

#### 3. Content: Truncated og:description in Registry (1 finding)
**File:** `app/article-registry.json`, line 32

**Issue:** The VSCode GitHub.dev article's og_description ends with `"how to sta"` — incomplete.

**Fix:** Complete the sentence or trim at a word boundary (suggest: `"...Learn how it works and how to stay safe."`).

**Lesson:** Truncation often signals copy-paste errors or length limits not caught by linting. Add a registry validator to ensure all og_description fields end with sentence punctuation and have a minimum meaningful length.

---

#### 4. Content: Stale Vulnerability Remediation Status
**File:** `vscode-bug-github-dev-token-stealing-one-click.tsx`, lines 117–119 (+ 139)

**Issue:** Article claims "GitHub has not patched this" and recommends disabling synthetic keyboard events as a mitigation. Microsoft reported service-side patching on 2026-06-03; the upstream issue is closed.

**Fix:** Replace outdated claims with current guidance: "Microsoft mitigated this on the service side as of June 2026. Current best practices: avoid untrusted Jupyter notebooks, audit browser extensions."

**Lesson:** Security content has an expiry date. Add a `LAST_VERIFIED` constant to vulnerable-topic articles and plan quarterly audits. CodeRabbit's Stability category caught this; it's a real risk.

---

#### 5. Content: Incorrect WebStorm Shortcut
**File:** `guides.three-webstorm-shortcuts.tsx`, lines 75–77

**Issue:** Step says "Shift + Up" to open Search Everywhere. Correct shortcut is "Shift twice" (double-tap the Shift key).

**Fix:** Update the shortcut instruction.

**Lesson:** Step-by-step guide content (Phase 3) must be verified for accuracy before publication. Consider a "test the steps" checklist for guides: a human runs through each numbered step and confirms it works as written.

---

#### 6. Link: Redirect to Renamed Route (1 finding)
**File:** `first-pentest-free-tools-intro.tsx`, line 67

**Issue:** Link points to retired `/continuous-pentesting-ci-guide` slug. Phase 3 defined `/guides/continuous-pentesting-ci` as the canonical route with a 301 redirect, but internal links should skip the redirect.

**Fix:** Update the `<Link>` to `/guides/continuous-pentesting-ci` directly.

**Lesson:** When creating a guide route with a 301 from the old slug, run a grep for references to the old slug and update internal links. Add this as a checklist step for future guide promotions.

---

#### 7. HTML Structure: Nested `<p><pre>` Tags (1 finding in `dspy101.tsx`)
**File:** `dspy101.tsx`, lines 65–73 (+ 80–90, 97–104, 111–118, 125–130)

**Issue:** SSR emits `<p><pre>...</pre></p>`, but HTML parsers auto-close `<p>` before `<pre>`, so the explanatory paragraph loses its styling.

**Fix:** Make `<p>` and `<pre>` siblings at the same level, not nested.

**Lesson:** This is a common mistake when prose + code coexist. Add a snippet to the reference implementation showing the correct pattern (two `<p>` → `<pre>` pairs at the same depth, not nested). Verify `npm run build` catches this (it likely doesn't — requires visual testing).

---

#### 8. Docs: Stale Project Planning Status
**Files:** `docs/todo3-restyle.md` (lines 117–173), `docs/todo1.md` (lines 73–93, 128–132)

**Issues:**
- Phase 3 and Phase 4 status still marked "Not started" / "In progress" even though all work is done
- `docs/todo1.md` has a machine-local path (`/Users/adamaslan/code/homebase/...`) that's not shareable
- Links to `/ai-articles` (removed route) are stale

**Fix:**
- Update `todo3-restyle.md` to reflect that guides, redirects, and restyled articles are complete; record only remaining tasks (deployment, monitoring)
- Replace local paths with repo-relative links or external references
- Remove or update `/ai-articles` dead-link blocker
- Fix docs-relative paths in `todo1.md` and `todo2-future.md` (use `../app/...` for app files, `agent-guides/...` for docs)

**Lesson:** Freeze a task's decision table early (Phase 0), but update the progress tracking (docs) frequently as work completes. Stale docs are worse than no docs — they create uncertainty about what's actually shipped. Automate this where possible (e.g., CI job that validates todo files against route presence).

---

#### 9. Python: Hard-Coded Filesystem Paths (2 scripts)
**Files:** `public/norway-ai-elementary-school-ban-ig.py` (line 59), `scripts/ascii_to_png.py` (lines 33–37)

**Issues:**
- Path hard-coded as `/Users/adamaslan/code/ttb8/public/...` — fails unless that exact directory exists
- Bare `except` clauses catch `KeyboardInterrupt` and `SystemExit`, preventing graceful termination

**Fix:**
- Use `Path(__file__).resolve().with_name("norway-ai-elementary-school-ban.png")` for repo-relative paths
- Replace `except:` with `except OSError:` to catch only expected font-loading failures

**Lesson:** Utility scripts in `/public` and `/scripts` are less polished than app code but should still meet standards. Python paths should be derived from `__file__` or accepted as arguments, never hard-coded.

---

### Wiki & Docs Accuracy
**File:** `docs/wiki-ttb8/concept-seo-duplicate-consolidation.md` (lines 12–51), `log.md` (lines 29–35)

**Issues:** Route inventory counts are inconsistent across sections (registry entries vs. route files, winners vs. stubs).

**Fix:** Reconcile all counts:
- 4 winners (snapstate, robinhood, catlantean, vscode)
- 10 redirect stubs (losers of the above clusters)
- 2 deleted (Cloudflare fabricated routes)
- 2 retained unresolved (Cloudflare real variants, 2-way dupe left for future pass)

**Lesson:** Wiki accounting is high-value — it's the source of truth for site inventory. Reconcile counts after major changes and treat discrepancies as bugs, not ambiguities.

---

### Vite Server Security (1 inline comment)
**File:** `vite.config.ts`, lines 15–17

**Issue:** `allowedHosts: true` bypasses Vite's host validation, allowing arbitrary Host headers. This is safe in development but should be explicit (e.g., an environment variable toggle).

**Fix:** Use an explicit allowlist or respect `VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` env var instead of `true`.

**Lesson:** Development config should match production constraints. If Cloudflare Tunnel and ngrok are needed for testing, list them explicitly in config rather than blanket-trusting all hosts.

---

### Instagram Publishing Robustness (3 inline comments in `docs/agent-guides/instagram-robustness.md`)

**Issue 1: Creation ID persistence (line 180–184)**
- Workflow publishes to Instagram without first persisting the creation ID
- If publish fails mid-flight, a retry creates a duplicate post
- Fix: Save creation ID before publish call; check for existing ID before creating new one

**Issue 2: Image format contract (line 112–115)**
- `validate_ig_image()` accepts PNG; `make_card()` emits JPEG → mismatch
- Meta Graph API accepts JPEG only
- Fix: Reject PNG in validation; ensure `make_card()` emits JPEG

**Issue 3: Transient vs. permanent retry logic (line 201–214)**
- Retries all `httpx.HTTPStatusError` including 400 (bad request)
- Should only retry 5xx errors (server-side transients)
- Fix: Retry `httpx.TransportError` + `HTTPStatusError` with status >= 500

**Lesson:** Published workflows (Instagram, API integrations) need explicit fault recovery logic: what persists, what retries, what fails-fast. Document the SLA and add integration tests.

---

### Threejs Suspense (1 inline comment in `app/routes/threejs-and-web3.tsx`)
**Issue:** Lazy-loaded Three.js components not wrapped in a `<Suspense>` boundary.
**Fix:** Wrap both lazy imports in a shared boundary with an appropriate loading fallback.

---

**Live:** https://github.com/adamaslan/ttb8/pull/44
