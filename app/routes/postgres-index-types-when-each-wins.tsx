import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "B-Tree, GIN, BRIN: Picking Postgres Indexes by Query Shape";
const DESCRIPTION = "The default index is right most of the time. The other types exist for specific query shapes, and knowing the shapes is the whole skill.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ INDEX TYPES :: MATCH THE STRUCTURE TO THE QUERY      ║
║                                                      ║
║   equality/range  ──► B-tree                         ║
║   contains/many   ──► GIN                            ║
║   huge + ordered  ──► BRIN (tiny, approximate)       ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function PostgresIndexTypesWhenEachWinsArticle() {
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
          <span className="rounded-full bg-red-900 px-3 py-1 text-sm font-bold text-white">
            Code World - Helpful
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">B-tree: the default for a reason</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Equality and range queries on ordered data are what B-trees do, and that is most queries: id =, created_at >, status IN. Composite B-trees follow the leftmost-prefix rule, so an index on (tenant_id, created_at) serves tenant_id alone but not created_at alone. Column order is the design decision: equality columns first, range columns last, ordered by selectivity when the planner needs help."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The underrated trick is the covering index: INCLUDE the few columns a hot query selects, and Postgres answers from the index without touching the table. That turns a millisecond query into a microsecond one on the paths that matter."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">GIN: for containment and many-valued columns</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"When the question is contains rather than equals, arrays holding a tag, a JSONB document with a key, full-text search matching words, the B-tree's ordering is useless. GIN indexes the contents: each array element, each JSON key, each lexeme points back to its rows. Writes get slower and the index gets bigger, so it earns its place only on columns genuinely queried by containment."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">BRIN: the tiny index for huge ordered tables</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"BRIN stores min and max per block range. On a hundred-million-row events table where physical order tracks time, a BRIN on the timestamp is kilobytes instead of gigabytes and skips whole regions of the table for range scans. On unsorted data it is worthless, because every range overlaps every block."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The decision procedure is honest: EXPLAIN the actual slow query, look at whether it scans what you think it scans, and add the narrowest index that changes the plan. Indexes are bets that a query shape will recur; measure before placing them and prune the ones that never pay off."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · postgres-index-types-when-each-wins · TastyTechBytes
      </footer>
    </div>
  );
}
