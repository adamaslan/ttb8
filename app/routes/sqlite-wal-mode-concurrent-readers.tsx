import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "SQLite WAL Mode: Concurrent Readers Without a Server";
const DESCRIPTION = "The default journal mode serializes your app under load. WAL mode lets readers and one writer proceed together, and it is one PRAGMA away.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ WAL MODE :: READERS DON'T WAIT FOR THE WRITER        ║
║                                                      ║
║   readers ──► snapshot of committed state            ║
║   writer  ──► appends to WAL ──► checkpoint          ║
║                                                      ║
║   one writer at a time, still                        ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function SqliteWalModeConcurrentReadersArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What the default mode costs you</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"In rollback-journal mode, a writer takes a lock that blocks readers, and readers block the writer. For a side project with three users, fine. For a dashboard, a queue consumer, or an app server with background jobs, you get SQLITE_BUSY storms at the worst moments: deploy time, traffic spikes, the nightly import."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Write-ahead logging changes the mechanics. Writers append new pages to a WAL file; readers keep a consistent snapshot of the last committed state. Reads and one write proceed concurrently, and commits get faster because the append is sequential."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Turn it on, then fix the surrounding habits</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`PRAGMA journal_mode = WAL;      -- persistent, per database file
PRAGMA synchronous = NORMAL;  -- safe in WAL, much faster than FULL
PRAGMA busy_timeout = 5000;   -- wait instead of instant SQLITE_BUSY`}</pre>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Set busy_timeout everywhere: WAL removes reader-writer contention, not writer-writer. Two writers still serialize, and a zero timeout turns that into random errors."}</li>
            <li>{"Keep transactions short. A long write transaction delays checkpoints and lets the WAL file grow unboundedly."}</li>
            <li>{"Batch writes: one transaction of a thousand inserts beats a thousand transactions by orders of magnitude."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The limits that still apply</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"WAL does not make SQLite multi-writer, distributed, or network-safe. One writer at a time, on one machine, on local disk; the WAL file's shared-memory coordination does not work reliably over NFS-style mounts. When you outgrow that, the migration path is a real server database, not more PRAGMAs."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"But the territory WAL covers is bigger than its reputation: most CRUD apps, internal tools, and read-heavy dashboards run happily for years on one well-configured SQLite file, with backups as simple as copying it through the online backup API."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · sqlite-wal-mode-concurrent-readers · TastyTechBytes
      </footer>
    </div>
  );
}
