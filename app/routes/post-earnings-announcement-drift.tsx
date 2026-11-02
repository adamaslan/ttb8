import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Post-Earnings Announcement Drift: The Slow-Motion Anomaly";
const DESCRIPTION = "Markets underreact to earnings surprises, then catch up over weeks. PEAD is one of the oldest, most documented anomalies in the literature.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ PEAD :: THE REACTION THAT KEEPS REACTING             ║
║                                                      ║
║   earnings surprise ──► jump ──► slow drift for weeks║
║                                                      ║
║   underreaction, then catch-up                       ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function PostEarningsAnnouncementDriftArticle() {
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
          <span className="rounded-full bg-green-700 px-3 py-1 text-sm font-bold text-white">
            Finance - Signal Scan
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The pattern</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Sort stocks by standardized earnings surprise, actual versus expected, scaled by the usual dispersion. The big positive surprises do not just jump on announcement day; on average they keep outperforming for weeks afterward, and the big negatives keep lagging. Documented since the late 1960s, replicated across markets and decades, persistent enough to have a name: post-earnings announcement drift."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The textbook efficient-market response is an instant, complete repricing. The drift is the measured gap between that textbook and the tape: attention, position limits, and institutional process slow the incorporation of news."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What a careful implementation respects</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"The surprise definition is the strategy: street consensus versus models versus time-series expectations are different signals with different noise."}</li>
            <li>{"Capacity is limited: the effect concentrates in smaller, less-covered names where trading it moves the price."}</li>
            <li>{"The drift is an average over hundreds of events; any single earnings date is dominated by the announcement jump itself and the coin-flip of guidance."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Why it survives being known</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Anomalies die when arbitraging them is easy, scalable, and safe. Drift harvesting is none of the three: it requires holding through event risk, it works best exactly where trading is expensive, and its edge per trade is small against real costs. Known and harvested are different states."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"For the practitioner, the actionable version is modest: expect underreaction, do not assume the first day's move is the full move, and treat any systematic capture as a capacity-constrained, cost-sensitive strategy rather than a free lunch someone left on the table."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance - Signal Scan · post-earnings-announcement-drift · TastyTechBytes
      </footer>
    </div>
  );
}
