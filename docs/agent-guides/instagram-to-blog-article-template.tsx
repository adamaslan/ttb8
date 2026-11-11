// Instagram → Blog article route template
// Verified 2026-11-10 against ttb8 PR #52:
// app/routes/structured-outputs-json-schema-llms.tsx
// (branch article/first-structured-outputs-20261110,
//  SHA c7649ce34c9ddd875085c32f428386bc02e022ca)
// Replace every {{PLACEHOLDER}} and write the body sections by hand.
// Nothing in this file is merged or published until Tasty approves the PR.

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "{{TITLE}}";
const DESCRIPTION = "{{DESCRIPTION}}";

const ASCII_ART = `{{ASCII_ART}}`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function {{COMPONENT_NAME}}() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="border-b border-gray-800 bg-black py-6">
        <div className="container mx-auto max-w-3xl px-4">
          <pre className="overflow-x-auto font-mono text-[9px] leading-tight text-green-400 sm:text-xs">
            {ASCII_ART}
          </pre>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl space-y-8 px-4 py-8">
        <div className="space-y-3">
          <span className="rounded-full bg-purple-400 px-3 py-1 text-sm font-bold text-white">
            {{CATEGORY}}
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">{{DATE}} · TastyTechBytes</p>
        </div>

        {/* ---------------------------------------------------------------
            BODY — hand-written JSX per article. This is the part a template
            cannot capture. The three section patterns below mirror PR #52:
            plain paragraphs, a code block, and an ordered list. Keep the
            ones the article needs, delete the rest, and write the copy
            fresh — do not paste an Instagram caption in as the body.
            --------------------------------------------------------------- */}

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">{{SECTION_1_HEADING}}</h2>
          <p className="text-sm leading-relaxed text-gray-300">{{SECTION_1_BODY}}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">{{SECTION_2_HEADING}}</h2>
          <p className="text-sm leading-relaxed text-gray-300">{{SECTION_2_BODY}}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`{{CODE_BLOCK}}`}</pre>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">{{SECTION_3_HEADING}}</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{{LIST_ITEM_1}}</li>
            <li>{{LIST_ITEM_2}}</li>
          </ol>
          <p className="text-sm leading-relaxed text-gray-300">{{SECTION_3_CLOSING}}</p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Source and limits</h2>
          <p className="text-sm leading-relaxed text-gray-300">{{SOURCE_NOTE}}</p>
          <a className="text-sm text-green-400 underline" href="{{SOURCE_URL}}">{{SOURCE_LINK_TEXT}}</a>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        {{CATEGORY}} · {{SLUG}} · TastyTechBytes
      </footer>
    </div>
  );
}
