import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Lockfiles Are Not Enough: Dependency Hygiene for Supply-Chain Attacks";
const DESCRIPTION = "Pinning a version pins your exposure too. Real hygiene is a short list of habits: review what enters, minimize what runs, and know what you ship.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ SUPPLY CHAIN :: YOUR CODE IS 5% OF WHAT RUNS         ║
║                                                      ║
║   package.json ──► 12 direct ──► 1,800 transitive    ║
║                                                      ║
║   every install runs someone's postinstall script    ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function DependencyPinningSupplyChainHygieneArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The actual threat model</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Install-time scripts run with your credentials in environment scope: npm tokens, cloud keys, SSH config. A compromised transitive dependency does not need to exploit your app; it needs to execute once on a developer machine or CI runner. Typosquats, hijacked maintainer accounts, and protestware all enter through npm install, not through your code review."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"A lockfile pins versions, which stops silent drift, but it does not stop you from deliberately upgrading into a compromised release the day it ships. Recency is not safety; for dependencies, the dangerous window is the first days of a bad version, before anyone notices."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Habits that punch above their weight</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Update on a delay, not on release day: a week or two of lag lets the ecosystem's tripwires fire before your CI does."}</li>
            <li>{"Audit the diff for anything with install scripts or new maintainers; a package.json change is the payload's favorite hiding place."}</li>
            <li>{"Disable install scripts by default in CI and enable them per package on an allowlist."}</li>
            <li>{"Count dependencies like budget: every one is a standing subscription to a stranger's opsec. Deleting a dependency is a security improvement."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Know what you ship</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"When the next headline vulnerability lands, the question is whether it is in your tree, and the answer should take minutes. Keep an inventory, the lockfile is already most of one, and run advisory scanning in CI with a policy: critical findings block, everything else gets a ticket with an owner."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"None of this is exotic. It is the same discipline as secrets handling: minimize, review the edges, and make the audit trail cheap enough that people actually run it."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · dependency-pinning-supply-chain-hygiene · TastyTechBytes
      </footer>
    </div>
  );
}
