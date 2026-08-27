# todo3 — site-wide restyle + duplicate cleanup

Haiku-executable work plan. Every unit below is mechanical: the judgment calls
are already made and frozen in this document. Follow `/fixy` §4.1 — no agent
invents a value, picks a winner, or deletes a file on its own.

**Verified against the repo 2026-08-25.** 60 route files, 56 registered.

**PHASE 0 and PHASE 1 are COMPLETE as of 2026-08-25.** `ai-articles` and
`smartbidder-diageo` are registered. All five duplicate clusters (A–E) have
been resolved: cluster winners kept as-is, retired variants converted to
301-redirect stubs (source archived to `file-archive/` with an ARCHIVED
header), and the two fabricated Cloudflare "Flagship 2.0"/"3.0" routes were
removed outright (no redirect) with sources archived. `article-registry.json`
trimmed from 17 to 6 entries. `ai-articles.tsx` cards updated to match. Guide
accent hue for Phase 3 is decided: **cyan-400/cyan-500**. Phase 3's actual
build is deferred — not started.

| Shell state | Count (pre-Phase-1) |
|---|---|
| `DARK` — already `min-h-screen bg-black` | 10 |
| `LIGHT` — `bg-gray-100` / blue header / gray footer | 22 |
| `OTHER` — no clear shell, mostly short legacy posts | 28 |

Reference implementation (the frozen pattern):
[app/routes/dextego-10-things-ai-sales-coaching.tsx](../app/routes/dextego-10-things-ai-sales-coaching.tsx)
— typechecks clean, signed off.

---

## PHASE 2 — Articles: light → dark (HAIKU DELEGABLE) — COMPLETE (2026-08-25)

All 11 files restyled via 3 background Haiku subagents, verified in parent:
zero forbidden classes remain, `npm run typecheck` clean, section counts
preserved, word counts self-reported unchanged per file.

11 LIGHT-shell files survive Phase 1 dedup:

```
5-ways-ai-can-help-farmland-restoration.tsx
cloudflare-flagship-feature-flags-made-easy.tsx
cloudflare-flagship-simplifies-feature-flags.tsx
dspy101.tsx
how-one-dev-built-catlantean-3d-by-hand.tsx
first-pentest-free-tools-intro.tsx
what-are-the-best-free-text-to-speech-tools.tsx
snapstate-persistent-state-for-ai-agents.tsx
threejs-and-web3.tsx
what-is-rag.tsx
vscode-bug-github-dev-token-stealing-one-click.tsx
```

### The frozen class map — transcribe, never improvise

| Element | FROM | TO |
|---|---|---|
| Shell | `min-h-screen bg-gray-100 text-gray-800` | `min-h-screen bg-black text-gray-100` |
| Header | `bg-blue-600 text-white py-6 shadow-lg` | `bg-black border-b border-gray-800 py-6` |
| Container | `container mx-auto px-4` | `container mx-auto px-4 max-w-3xl` |
| Main | `container mx-auto px-4 py-8` | `container mx-auto px-4 py-8 space-y-8 max-w-3xl` |
| H1 | `text-3xl font-bold` | `text-3xl font-bold text-green-400 mt-3` |
| Section | `mb-8` (bare) | `bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4` |
| H2 | `text-lg sm:text-2xl lg:text-3xl font-serif font-bold mb-4` | `text-xs font-semibold text-green-500 uppercase tracking-wide mb-1` |
| Body `<p>` | `text-lg sm:text-xl lg:text-2xl font-serif` | `text-gray-300 leading-relaxed text-sm` |
| Links | `text-blue-600 underline` | `text-green-400 hover:underline` |
| `<strong>` | (bare) | `text-gray-100` |
| Footer | `bg-gray-200 py-4 text-center` | `bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600` |
| Footer text | `© 2025 TastyTechBytes…` | `{CATEGORY} · {SLUG} · TastyTechBytes` |
| Back link | `text-blue-500 text-lg` / "Go back to Home" | `text-green-400 hover:underline text-sm` / "← Back to Home" |
| Hero img | `h-1/2 w-1/2 rounded-2xl` | `w-full rounded-xl border border-gray-800` |

Also add near the existing `TITLE`/`DESC` consts:
`const SLUG`, `const CATEGORY`, `const DATE`, `const AUTHOR = "Adam Timur Aslan";`

Header gains the badge block and mono deck line — copy verbatim from the
dextego file, lines 168–185.

### Haiku brief template (§4.1 contract — every field required)

```
INPUT:    /abs/path/docs/todo3-restyle.md  (this class map only)
          + /abs/path/app/routes/dextego-10-things-ai-sales-coaching.tsx (read-only reference)
OUTPUT:   /abs/path/app/routes/<slug>.tsx   (in place, one file)
FORMAT:   TSX, React Router v7 route module. Preserve default export name,
          meta() export, and ALL prose text byte-for-byte.
SKELETON: match dextego-10-things-ai-sales-coaching.tsx structure exactly
COPY:     apply the class map literally; article prose is pre-written —
          transcribe, never rewrite, summarize, shorten, or "improve" it
FORBID:   no network/git/DB; no editing app/routes.ts; no renaming files;
          no deleting sections; no changing <a href> targets; no new prose
ONEMPTY:  if the file has no <section>, leave it and report "SKIPPED: <slug>"
ONMISSING:if an element in the map is absent, skip that row — never invent one
VERIFY:   word count of visible prose unchanged ±0; zero occurrences of
          bg-gray-100|bg-blue-600|bg-gray-200|text-blue-600 remain
DONE:     reply only: "wrote <path>, prose words <N>"
```

### Fan-out (§4.2)

One agent, **N files sequential** — same transform, independent files. Do not
spawn one agent per file; cold-start dominates. Cap at 2–3 agents total,
splitting the file list between them.

### Parent verification — never trust the DONE line

```bash
# must return nothing:
grep -lE 'bg-gray-100|bg-blue-600|bg-gray-200|text-blue-600' app/routes/*.tsx
npm run typecheck
```
Plus: diff prose word counts before/after per file, and spot-check first/last
section text literally. If a file fails twice, pull it into the parent — that
means it needed judgment and was misclassified.

---

## PHASE 3 — Guides must look different from articles — COMPLETE (2026-08-25)

**Guide accent hue: DECIDED — cyan-400/cyan-500.** (Confirmed 2026-08-25.)

First guide built at `/guides/continuous-pentesting-ci`
([app/routes/guides.continuous-pentesting-ci.tsx](../app/routes/guides.continuous-pentesting-ci.tsx)):
content moved from `pensar-continuous-pentesting-ci.tsx` (archived to
`file-archive/`), reworked with cyan accent, badge pill (`GUIDE`), mono
header deck (read time / difficulty / prerequisite count), sticky step-index
nav, numbered `Step N —` sections, and a footer `Last verified:` line. Both
old slugs (`continuous-pentesting-ci-guide`, `pensar-continuous-pentesting-ci`)
now 301 directly to the new route. `npm run typecheck` clean.

Second guide: `/guides/three-webstorm-shortcuts` (promoted from Phase 4
triage — see below), same treatment, smaller (3 steps, no code blocks).

### Shared with articles (do not diverge — this is one publication)

Black shell, `bg-gray-950` cards, green accent family for articles / cyan for
guides, mono/uppercase micro-headings, footer format, `max-w-3xl`.

### Divergences (frozen)

| Axis | Article (today) | Guide |
|---|---|---|
| Accent | `green-400` / `green-500` | **`cyan-400` / `cyan-500`** — same treatment, different hue |
| Badge pill | `bg-red-600` category | `bg-cyan-600` + label `GUIDE` |
| Header deck | mono `▸` one-liner | mono block: est. read time · difficulty · prerequisites |
| Nav | none | **sticky step index / ToC** — the real functional difference |
| Sections | flat `space-y-8` cards | numbered steps with a persistent progress rail |
| Code | occasional | first-class, expected in most sections |
| Footer | `{CATEGORY} · {SLUG}` | adds `Last verified: {DATE}` — guides rot; articles don't |
| Route | flat `/slug` | **`/guides/:slug`** — makes the type addressable |

**Both guides built and deployed** (2026-08-25):
- `/guides/continuous-pentesting-ci` (from `pensar-continuous-pentesting-ci`, cyan accent)
- `/guides/three-webstorm-shortcuts` (promoted from Phase 4, cyan accent)

---

## PHASE 4 — Triage the 28 `OTHER` routes — COMPLETE (2026-08-25)

Re-scanned 2026-08-25: 22 live OTHER-shell files remain (6 fewer than the
pre-Phase-1 count of 28, since several were already archived/removed during
Phase 1 dedup). **Frozen triage table:**

| Bucket | Files | Notes |
|---|---|---|
| Archive | `nab-2023-audio-video-gear`, `weirdinternetfacts` | stale/thin, 301'd to `/`, sources in `file-archive/` |
| Promote → guide | `three-essential-webstorm-shortcuts` | only one that's *actually* numbered-steps-shaped; rebuilt at `/guides/three-webstorm-shortcuts` (cyan accent, sticky ToC) |
| Restyle | remaining 19 | `how-to-invest-in-whisky`, `how-to-use-the-pie-menu-in-blender`, and `the-ultimate-guide-to-flyers-in-blender-with-the-node-editor` were re-classified from "promote" to "restyle" on inspection — despite guide-ish titles, all three are flowing prose/listicles with no actual numbered steps a reader executes, so the guide template would be a poor fit. Full restyle list: `lies-about-javascript`, `smartbidder-diageo`, `easy-domain-verification-with-google`, `using-airpods-and-audacity-hack`, `vuejs-independant-javascript-framework`, `astro-the-most-innovative-javascript-framework`, `the-art-of-the-clean-install`, `threekeys-to-getting-a-frontend-or-fullstackjob`, `create-your-own-huggingface-space-easy`, `5-ways-to-enhance-rag-efficiency-with-dspy`, `introduction-to-neural-networks`, `databricks-dspy-jetblue-ai-chatbot`, `lore-open-source-version-control-scalability`, `10-essential-pytorch-elements-in-a-rnn`, `10_Essential_PyTorch_Elements_in_LSTMs`, `10_Ways_to_Optimize_SQLite_Before_Migrating_to_PostgreSQL`, `how-to-invest-in-whisky`, `how-to-use-the-pie-menu-in-blender`, `the-ultimate-guide-to-flyers-in-blender-with-the-node-editor` |

Archive + guide-promotion done in parent (destructive/judgment work). Restyle
of the 19 delegated to 3 background Haiku agents (8/8/3 split) using the Phase
2 frozen class map — verification pending in parent per the `/fixy`-style
contract (word count unchanged, forbidden classes gone, `npm run typecheck`
clean).

---

## Order of operations

1. ~~**Phase 0** — register `ai-articles`, decide `smartbidder-diageo`. Parent.~~ DONE
2. ~~**Phase 1** — confirm cluster winners, confirm the Flagship 2.0/3.0 removal, archive + 301. Parent.~~ DONE
3. ~~**Phase 3 decision only** — pick the guide accent hue. Parent.~~ DONE — cyan
4. ~~**Phase 2** — delegate the article restyle. Haiku, verified in parent.~~ DONE
5. ~~**Phase 4 triage table** — parent; then delegate execution.~~ DONE
6. ~~**Phase 3 build** — first guide in parent, rest delegated.~~ DONE

Run `npm run typecheck` after every phase — no test suite exists.

**Never delegate:** deletions, `app/routes.ts` edits, cluster-winner choices,
the Flagship accuracy call, the guide design decision, prose rewriting.
