---
date: 2026-09-27
type: entity
tags: [legal, disclaimer, terms-of-service, finance, compliance]
sources: [app/routes/disclaimer.tsx, app/routes/terms-of-service.tsx, app/components/FinancialDisclaimer.tsx, PR#48, PR#49]
---

# entity: Legal / Compliance Pages

## What it is

Two standalone legal pages plus one shared component, added in PR #49 as
the site started publishing signal-scan / backtest content (IPI, SNDK)
that reads as investing/trading material:

- `app/routes/disclaimer.tsx` (`/disclaimer`) — the financial disclaimer:
  informational-only use, no buy/sell/hold recommendation, past
  performance and backtests aren't predictive, data-source accuracy
  caveat, no warranty, limitation of liability.
- `app/routes/terms-of-service.tsx` (`/terms-of-service`) — general site
  ToS: acceptable use, no-scraping, IP/copyright, third-party links,
  no warranty, changes/termination/severability.
- `app/components/FinancialDisclaimer.tsx` — a short "Not Financial
  Advice" block with links to both pages. This is what actually gets
  dropped onto individual article pages, not the full pages themselves.

Both full pages are **original content written for TastyTechBytes** —
structurally similar to a typical research-site disclaimer/ToS (the
brief was "similar to Zacks.com's disclaimer/ToS"), but not copied
verbatim. Zacks-specific business details (their arbitration clause,
Illinois venue, AAA/JAMS references, subscription-tier terms) were
deliberately **not** reused since they don't apply to this site and
copying another company's actual legal text as your own would be both
inaccurate and legally sloppy.

## Where used

`<FinancialDisclaimer />` is wired into every page PR #49 identified as
financial/investing content that already existed on `main`:

- `/finance` (section index)
- `/ipi-signal-report`
- `/how-to-invest-in-whisky`
- `/robinhood-agentic-trading`
- `/smartbidder-diageo`

`/sndk-signal-report` (still on open PR #48 at the time PR #49 was
opened, since it doesn't exist on `main` yet) gets the component in a
follow-up commit on PR #48 itself rather than this branch — see
[[entity-routing]].

## Known failures

- **No enforcement mechanism.** Nothing checks that a *new* finance
  article actually includes `<FinancialDisclaimer />` — it's a manual
  step, same failure shape as every other item in
  [[concept-article-source-of-truth-drift]]. A future finance article
  that forgets to import the component ships with no disclaimer and
  nothing catches it at typecheck or build time.
- **Category boundary is judgment, not a rule.** `how-to-invest-in-whisky`
  and `smartbidder-diageo` are badged `Lifestyle` and `AI News`
  respectively, not `Finance` — they were included because they appear
  in `SECTION_ARTICLES.finance` (see [[entity-routing]]), not because of
  their own category badge. There's no single source of truth for "is
  this page financial" beyond that section-articles membership, which
  itself is one of the five drift-prone enumerations in
  [[concept-article-source-of-truth-drift]].

## Open questions

- ❓ Should "is this a financial page" become a field on
  `article-registry.json` (the deferred `category` field from
  [[decision-hand-maintained-section-taxonomy]]) so `<FinancialDisclaimer />`
  could eventually be applied automatically via a layout/loader check
  instead of a manual per-file import?
- ❓ Should the redirect stubs (`robinhood-agentic-trading-ai-agents-*.tsx`,
  which 301 to `/robinhood-agentic-trading`) carry their own disclaimer,
  or is inheriting it via the redirect target sufficient? Current answer:
  sufficient, since the redirect happens server-side before any content
  renders.

## See also

- [[entity-routing]] — where `/disclaimer` and `/terms-of-service` are
  registered
- [[concept-article-source-of-truth-drift]] — why "which pages are
  financial" has no single source of truth
