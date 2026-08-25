---
date: 2026-08-24
type: concept
tags: [review, quality-gate, testing, gemini]
sources: [git log, PR#43]
---

# concept: The Gemini Review Gate

## The pattern

ttb8 has no automated test suite (`npm run typecheck` is the only CI-equivalent gate, per root `CLAUDE.md`). In its place, a recurring pattern appears throughout git history: a commit titled `fix(articles): address Gemini review — ...` follows shortly after most feature/article PRs, catching issues a test suite would normally catch — hyphenation and grammar errors, WCAG color-contrast violations, broken Vite imports, non-unique titles, incomplete meta descriptions, a 301 redirect bug, a TOCTOU-shaped paragraph split, missing homepage cards.

This is a manual, human-in-the-loop (or LLM-in-the-loop, given the name) review pass rather than an enforced CI gate — nothing blocks a merge if the review step is skipped.

## Where it appears

- Commit history shows this pattern at least 4 times across recent PRs (#35, #36, #39's predecessor work): `50ce340`, `8ead3b8`, `704d21b`, `2ad872f` are all "address Gemini review" fixup commits following a feature commit
- Each instance catches a different class of bug — content quality (grammar), accessibility (contrast), correctness (imports, redirects), and content-model completeness (missing cards, duplicate titles) — suggesting the review pass is broad-spectrum rather than narrowly scoped

## Contradictions / tensions

The review catches real, mergeable-looking bugs *after* the fact (post-commit, pre-merge fixups), which is strictly worse than either (a) an automated lint/test gate that blocks the original commit, or (b) a review pass performed *before* the first commit lands. Neither is currently in place — see [[entity-deployment]]'s open question about whether `npm run typecheck` is even enforced at deploy time, separate from this content-quality gate entirely.

## See also

- [[entity-deployment]] — the build-time gate this concept sits alongside but doesn't overlap with (typecheck catches type errors, Gemini review catches content/a11y/correctness issues)
- [[concept-article-source-of-truth-drift]] — one of the bug classes this review has caught ("missing SnapState card") is a direct instance of the drift this concept describes
