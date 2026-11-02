import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "VIX Futures Term Structure: Contango, Backwardation, and What It Costs";
const DESCRIPTION = "Volatility futures usually slope upward, and that slope is a carrying cost on every long-vol position. The curve shape is the trade before the trade.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ VOL TERM STRUCTURE                                   ║
║                                                      ║
║   contango:      F1 < F2 < F3   (normal, calm)       ║
║   backwardation: F1 > F2 > F3   (stress, fear now)   ║
║                                                      ║
║   long vol in contango pays the roll                 ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function VixTermStructureContangoArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What the curve is saying</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"VIX futures are prices for volatility at different future dates. In calm markets the curve slopes up: uncertainty about next year exceeds uncertainty about next week, and sellers of insurance charge term premium. That upward slope, contango, is the default state of the vol market."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Backwardation, the curve flipped downward, is the stress signature: fear is concentrated in the present. Front-month vol pricing above later months means the market is paying up for protection right now and expects, or hopes, it passes."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Contango is a bill, not an opinion</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A long position in front-month vol futures must be rolled: sell the expiring cheaper contract, buy the next, richer one. In contango every roll sells low and buys high, and the bleed is structural, roughly the slope of the curve, independent of whether vol rises or falls. Products that hold long vol futures convert that bleed into a long-run decay that no hedging narrative cancels."}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`# the roll yield, conceptually
roll_cost ≈ (F2 - F1) / F1   # per roll, in contango: positive cost
# hold long vol for a year of calm rolls and the
# carry dominates the P&L`}</pre>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Using the curve as information</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Curve level: where the whole strip sits versus its own history is a fear gauge with more depth than the VIX print alone."}</li>
            <li>{"Curve shape: the flip into backwardation has been one of the cleaner stress confirmations, because it requires real money paid for immediate protection."}</li>
            <li>{"Position consequences: long-vol exposure in contango needs a thesis strong enough to outrun the roll; short-vol exposure collects it and owns the tail."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"The term structure turns vol from a number into a market with a carry. Read the carry first; it is the cost of every seat at that table."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance - Signal Scan · vix-term-structure-contango · TastyTechBytes
      </footer>
    </div>
  );
}
