import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "The 3-2-1 Backup Rule, Updated for Sync-and-Delete Mistakes";
const DESCRIPTION = "Three copies, two media, one offsite still holds. What changed is the threat: sync clients replicate your deletions as fast as your files.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ 3-2-1 + HISTORY :: SYNC IS NOT A BACKUP              ║
║                                                      ║
║   laptop ──► external drive ──► offsite/immutable    ║
║                      │                               ║
║            versioned: delete today, recover last week║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function Backup321RuleModernVersionArticle() {
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
          <span className="rounded-full bg-pink-600 px-3 py-1 text-sm font-bold text-white">
            Tech World - Helpful
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The rule that aged well</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"3-2-1 survives because it is about failure independence: three copies of anything important, on two different kinds of storage, with one somewhere else. House fire, dead SSD, stolen bag: no single event takes more than one copy. That logic does not expire."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"What has changed since the rule was coined is that the dominant copy mechanism is now sync, and sync propagates mistakes at network speed. Delete a folder on your laptop and the cloud copy deletes too; ransomware encrypts a drive and the synced copy encrypts behind it. Sync is availability. A backup is the ability to go backward."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The modern additions</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Versioning or snapshots on at least one copy, so a bad sync, bad save, or bad week is recoverable from before it happened."}</li>
            <li>{"One copy the sync client cannot reach: an offline drive, or object storage with immutability or object-lock, so malware and accidents cannot rewrite history."}</li>
            <li>{"Restore drills: an untested backup is a hope. Restore one file and one full directory on a schedule; the restore is the product."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">A setup a person can actually run</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Laptop to an external drive on a schedule with snapshots; the same data to an offsite bucket with object lock for thirty to ninety days; critical small stuff, documents, photos metadata, keys, additionally in an encrypted archive somewhere else entirely. Total effort after setup: plugging in a drive."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The rule was never really about copies. It is about making sure that no single bad hour, yours, a drive's, or an attacker's, can take the only version of something you cannot remake."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Tech World - Helpful · backup-3-2-1-rule-modern-version · TastyTechBytes
      </footer>
    </div>
  );
}
