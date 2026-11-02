import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "The 200-Day Regime Filter: What It Does and Does Not Protect Against";
const DESCRIPTION = "Above the 200-day, hold risk; below it, step aside. The simplest regime filter in finance works on a specific kind of pain and fails on another.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ REGIME FILTER :: ONE LINE, TWO STATES                ║
║                                                      ║
║   price ──────╲                                      ║
║   200dma ──────╲────                                 ║
║                ╲  below: exposure off                ║
║   avoids grind; not the crash                        ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function RegimeFilter200DayAverageArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The rule and its actual claim</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The filter: hold the asset while price is above its 200-day moving average, move to cash while below. The honest claim is not prediction. It is exposure timing: extended downtrends, the grinding bear markets where most long-run damage compounds, keep price below the average for months, so the rule spends those months out. The giveback is whipsaw in sideways markets and late exits from tops, every single time."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Evaluated over long histories on broad indexes, the rule has historically traded some return for large reductions in drawdown and time-underwater. That profile is a preference, not a free improvement: you are buying shallower bad years with missed chunks of recoveries."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Where it fails, specifically</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Crash reversals: a vertical drop followed by a vertical recovery, 2020-style, puts you out at the bottom and back in near the top. The filter is built for grinding bears, not V-shapes."}</li>
            <li>{"Chop: repeated crossings in a range market produce a sequence of small losses that add up to a real cost with no protection to show for it."}</li>
            <li>{"Single names: gaps through the average on idiosyncratic news make the exit price far worse than the signal price. The filter's record lives on diversified indexes."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">If you use it, use it mechanically</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The value of a regime filter is behavioral: a pre-committed rule executes in the drawdowns when discretionary judgment freezes. That value evaporates if the rule is negotiable at the exact moment it fires. Choose the variant, the asset universe, the rebalance cadence, and the re-entry rule in advance, write them down, and let the backtest's whipsaw years, not its average, decide whether you can actually live with it."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance - Signal Scan · regime-filter-200-day-average · TastyTechBytes
      </footer>
    </div>
  );
}
