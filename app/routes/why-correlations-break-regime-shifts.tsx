import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Why Correlations Break Exactly When You Need Them";
const DESCRIPTION = "Diversification is estimated on calm data and needed in storms. The breakdown is not bad luck; it is the structure of the estimate.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ CORRELATION REGIMES                                  ║
║                                                      ║
║   calm:   pairs wander, ρ low, hedges work           ║
║   stress: everything sells together, ρ → 1           ║
║                                                      ║
║   the average of the two is neither                  ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function WhyCorrelationsBreakRegimeShiftsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The estimate you actually made</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A correlation computed over two years of quiet markets is a description of quiet markets. It is not a property of the assets; it is a property of the window. When vol expands, the shared factor, risk appetite itself, swamps the idiosyncratic differences that made assets look independent. Long-run average correlation averages the calm and the storm into a number that describes neither."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"This is why portfolio construction fails symmetrically: hedges calibrated on full-sample correlation are too small in crises and too expensive in calm. The number was never stable; your usage assumed it was."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Mechanics of the breakdown</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Forced sellers do not pick what to sell by correlation matrix; they sell what they hold, together, which manufactures co-movement on the way down."}</li>
            <li>{"Hedges crowd: when many books hold the same offsetting positions, the unwind synchronizes them."}</li>
            <li>{"Cross-asset links activate under stress: funding, margin, and collateral connect markets that fundamentals kept separate."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What to do with the knowledge</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Estimate conditionally, not on full samples: separate calm and stressed windows and plan for the stressed estimate. Watch correlation itself as a signal, rising pairwise correlation across sectors is regime information, not noise. And hold hedges that do not depend on estimated correlation at all, cash, defined-risk option structures, position size, for the tail where estimates go to die."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The one-line version: correlation is a forecast, not a constant, and its error bars widen exactly when you lean on it hardest."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance - Signal Scan · why-correlations-break-regime-shifts · TastyTechBytes
      </footer>
    </div>
  );
}
