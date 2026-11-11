# Instagram → Blog: article route template

Status: VERIFIED — checked line-by-line 2026-11-10 evening (America/New_York)
against the PR #52 route file
`app/routes/structured-outputs-json-schema-llms.tsx`
(branch `article/first-structured-outputs-20261110`,
SHA `c7649ce34c9ddd875085c32f428386bc02e022ca`).
NOT submitted as a PR. Nothing merges or publishes without Tasty's approval.

The first draft of this template was simplified in several places; verification
against the real file corrected:
- missing `react-router` imports (`MetaFunction` type, `Link`)
- `meta` is a typed `MetaFunction` const with the `| TastyTechBytes` title
  suffix and og/twitter entries, not a plain function returning two items
- exact Tailwind classes for the outer div, header, container, badge, h1,
  date line, sections, h2, paragraphs, code blocks, and lists
- the header/container wrapper around the ASCII art, the footer, and the
  "← Back to Home" link
- DESCRIPTION is used in meta only — the header shows TITLE + date line,
  not a description paragraph

Source pattern (from PR #52):
- TITLE, DESCRIPTION, and ASCII_ART constants at the top
- a typed meta export
- standard layout: black background, green ASCII art header, category badge,
  date line, and sections
- the article body itself is hand-written JSX per article — a template can
  capture the boilerplate, not the body.

## How to use

1. Copy `instagram-to-blog-article-template.tsx` to
   `app/routes/<slug>.tsx` in ttb8 (slug = the article's URL slug).
2. Replace every `{{PLACEHOLDER}}`.
3. Write the body sections by hand in the article's own voice — do not
   paste an Instagram caption in as the body.
4. Open a PR in ttb8. Nothing merges or publishes without Tasty's approval.

## Placeholders

- `{{SLUG}}` — URL slug, e.g. `structured-outputs-json-schema-llms`
- `{{TITLE}}` — article title
- `{{DESCRIPTION}}` — one-line description (used in meta only)
- `{{CATEGORY}}` — category badge text, e.g. `AI Tips / Tutorials`
- `{{DATE}}` — date line, e.g. `November 2026`
- `{{ASCII_ART}}` — green ASCII art header for this article
- `{{COMPONENT_NAME}}` — e.g. `StructuredOutputsJsonSchemaLlmsArticle`
- `{{SECTION_N_HEADING}}` / `{{SECTION_N_BODY}}` — hand-written sections
- `{{CODE_BLOCK}}` — code sample inside a section (optional)
- `{{LIST_ITEM_N}}` / `{{SECTION_3_CLOSING}}` — ordered-list section
- `{{SOURCE_NOTE}}` / `{{SOURCE_URL}}` / `{{SOURCE_LINK_TEXT}}` — sources

## What stays boilerplate vs. hand-written

- Boilerplate (template): imports, constants, meta export, page wrapper,
  header, badge, date line, footer, back link, section scaffolding,
  code-block and list patterns.
- Hand-written per article: every body section, examples, code samples,
  and the adoption / takeaway steps.

## Origin

- Blog → Instagram for the same article is documented in
  `docs/agent-guides/blog-to-instagram-repost.md` (ttb8 PR #53).
- First Instagram → Blog candidate: whichever Instagram post Tasty picks.
  No post has been picked yet as of 2026-11-10 evening.
