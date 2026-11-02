import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Scanning for Bollinger Bandwidth Squeezes";
const DESCRIPTION = "Compression precedes expansion. A bandwidth squeeze scan finds coiled charts systematically, if you define compression before you look for it.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ SQUEEZE SCAN :: VOLATILITY COMPRESSION               ║
║                                                      ║
║   bandwidth = (upper - lower) / mid                  ║
║   squeeze   = bandwidth at N-day percentile low      ║
║                                                      ║
║   signal: compression. direction: not included.      ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function BollingerBandwidthSqueezeScannerArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What the squeeze is</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Bollinger Bands wrap price in a moving average plus and minus two standard deviations. When realized volatility collapses, the bands pinch. Bandwidth, the spread between bands normalized by the mean, makes that pinch measurable and comparable across tickers and time."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"A squeeze scan ranks the universe by bandwidth percentile over a lookback: anything sitting at its own six-month compression low is a candidate. The scan finds coiled springs; it says nothing about which way they unwind."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Defining the scan precisely</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Universe and hygiene first: liquidity floor, no stale prints, splits and symbol changes handled before any signal math."}</li>
            <li>{"Bandwidth percentile over a fixed lookback, with the threshold chosen once and frozen: changing the definition after seeing results is how scans become stories."}</li>
            <li>{"Confirmation inputs kept separate from the scan: trend filter, volume behavior, upcoming earnings. The scan ranks; it does not trade."}</li>
          </ul>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`mid = close.rolling(20).mean()
sd  = close.rolling(20).std()
bandwidth = ((mid + 2*sd) - (mid - 2*sd)) / mid
pct = bandwidth.rolling(126).apply(
    lambda w: (w <= w[-1]).mean())   # own-history percentile
squeeze = pct < 0.10`}</pre>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Where squeeze scans lie</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Low volatility can stay low for months; the squeeze identifies where a move is possible, not when, and false breakouts out of tight ranges are common enough to be the cost of doing business. Liquidity distortions dominate the tail of the scan: the tightest bandwidths often belong to names where your own order moves the price."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Treat the output as a watchlist with timestamps, not a signal with conviction. Log every scan result and score the expansions afterward; a scan you do not measure is a horoscope with better formatting."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance - Signal Scan · bollinger-bandwidth-squeeze-scanner · TastyTechBytes
      </footer>
    </div>
  );
}
