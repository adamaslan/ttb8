import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Your Backtest Is Overfit: Deflated Sharpe and the Multiple-Testing Problem";
const DESCRIPTION = "Test enough variants and one will look great by chance. The fix is not a better strategy; it is honest accounting of how many tries you spent finding it.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ MULTIPLE TESTING :: THE GRAVEYARD OF VARIANTS        ║
║                                                      ║
║   try N parameter sets ──► max Sharpe                ║
║   expected max under null grows with N               ║
║                                                      ║
║   deflate: adjust the bar for N                      ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function BacktestOverfittingDeflatedSharpeArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Selection is a bias amplifier</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Every parameter sweep, every dropped filter, every just-checking variant is a draw from the distribution of luck. Choose the best of a hundred draws and you have selected for luck as much as for edge. Under pure noise, the maximum Sharpe of a hundred trials is impressively positive; the backtest cannot tell you whether you found signal or won the lottery."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The painful part: the overfit version usually looks the best. It fits the specific crises of the sample with precision that no real edge has."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Accounting for your tries</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Deflated Sharpe ratio and family-wise corrections formalize one question: given how many variants were tried, how good does the winner need to be to beat luck? The inputs are the trial count, the sample length, and the return distribution's shape. The honest input is the hard one: the real trial count includes every informal peek and abandoned idea, not just the logged grid search."}</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Count all trials, including the mental ones you automated later."}</li>
            <li>{"Prefer holdout data the selection never saw; the walk-forward split is the minimum standard."}</li>
            <li>{"Treat marginal winners as losers: a strategy that only passes after leniency was going to fail live anyway."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Process discipline over math</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The durable fix is procedural: a research log that records hypotheses before testing, a holdout that stays locked until the candidate is chosen, and a paper-trading period that costs time instead of money. The math then has honest inputs."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"A backtest is a measurement of one specific history with one specific config. Confidence comes from everything around it: how few tries you spent, how the strategy behaves when perturbed, and whether it keeps working when the market stops resembling the sample."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance - Signal Scan · backtest-overfitting-deflated-sharpe · TastyTechBytes
      </footer>
    </div>
  );
}
