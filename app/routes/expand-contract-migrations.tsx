import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Zero-Downtime Migrations: The Expand-and-Contract Pattern";
const DESCRIPTION = "Rename a column in one deploy and you will learn about connection pools, old code, and rollbacks at the same time. Expand-and-contract makes schema change boring.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ EXPAND-CONTRACT :: OLD AND NEW COEXIST, THEN ONE     ║
║                                                      ║
║   1 add new column      (old code unaffected)        ║
║   2 dual-write + backfill                            ║
║   3 read from new, verify                            ║
║   4 drop old           (separate deploy, reversible) ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function ExpandContractMigrationsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Why the one-deploy rename fails</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"During any deploy, old and new code run at the same time against one database. Rename email to email_address atomically with the code change, and old instances start failing the moment the migration lands. Roll the code back and the new column breaks the old build. The window is minutes on a small fleet and hours on a big one. The schema must serve both versions for the whole window."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The four steps</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Expand: add the new column or table alongside the old. Nothing reads it yet; old code is untouched."}</li>
            <li>{"Migrate writes: code writes both, and a backfill copies history, in small batches with throttling so the copy never becomes the outage."}</li>
            <li>{"Switch reads: read from the new shape, verify parity in production, keep dual-writing until you trust it."}</li>
            <li>{"Contract: drop the old column in a later deploy, after rollbacks of the read switch would no longer need it."}</li>
          </ol>
          <p className="text-sm leading-relaxed text-gray-300">{"Each step is separately deployable and separately reversible. That is the entire point: no single deploy is ever both the schema change and the code change."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The discipline around it</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Additive changes, new nullable columns, new tables, are always safe; lead with them."}</li>
            <li>{"Never make a new column NOT NULL until the backfill completes and old code is gone."}</li>
            <li>{"Keep drop steps on a delay: a week of quiet dual-running is cheap insurance against the rollback you did not expect."}</li>
            <li>{"Automate the check: a nightly job comparing old and new values catches backfill gaps before the drop makes them permanent."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"The pattern feels slow exactly once, and then it becomes the reason schema changes stop appearing in incident reviews."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · expand-contract-migrations · TastyTechBytes
      </footer>
    </div>
  );
}
