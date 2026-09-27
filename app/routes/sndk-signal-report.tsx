import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const ASCII_ART = `
╔══════════════════════════════════════════════════╗
║ SNDK :: DAILY CONFLUENCE & MA ALIGNMENT SCAN     ║
║                                                  ║
║ Scan: 1y / 1d, 251 bars (thru Fri 9/25/26)       ║
║   ├── Confluence Bias ..... BULLISH (LOW CONF)   ║
║   ├── Confluence Score .... 0.153 / Action: HOLD ║
║   ├── Signal Split ........ 4 bull / 3 bear      ║
║                                                  ║
║   ★★ STRONGEST SIGNAL: MA ALIGNMENT (STRONG) ★★  ║
║   10SMA > 20SMA > 50SMA -- bullish stairstep     ║
║                                                  ║
║     50SMA $1517  ..oOO                           ║
║     20SMA $1664  ....oOO                         ║
║     10SMA rising ......oOO** <- $1777.80 close   ║
║                                                  ║
║   Counter-signal: red Kumo cloud ahead           ║
║   Price is +60.5% above the 200SMA (extended)    ║
║                                                  ║
║   251 bars · 7 live signals · 387 backtest hits  ║
╚══════════════════════════════════════════════════╝
`;

const TITLE = "SNDK Signal Report: MA Stairstep Meets a Stretched 200SMA";
const DATE = "September 2026";
const SLUG = "sndk-signal-report";
const HERO_IMAGE = "/sexysignal1.jpeg";

export const meta: MetaFunction = () => [
  { title: TITLE },
  {
    name: "description",
    content:
      "SNDK confluence scan: bullish MA stairstep vs. a 60.5% extension above the 200SMA. Live signals, technical snapshot, and a directional backtest across 5-40 day horizons from the local signals-app engine."
  },
  { property: "og:title", content: TITLE },
  {
    property: "og:description",
    content: "SanDisk ($SNDK) signal report — MA alignment, Ichimoku, and a 5-40 day backtest answer whether to buy, wait, or skip it."
  },
  { property: "og:type", content: "article" },
  { property: "og:image", content: HERO_IMAGE },
  { property: "twitter:card", content: "summary_large_image" },
  { property: "twitter:image", content: HERO_IMAGE }
];

const bodyParagraphs = [
  "This report runs SanDisk ($SNDK) through the same local signals-app pipeline used for the IPI scan above — a rule-based, no-LLM Layer 1–5 confluence engine (fetch → indicators → detect → confluence → rank) executed against 251 daily bars, roughly one trading year, pulled live from yfinance on September 27, 2026. The last completed session is Friday, September 25, 2026, with SNDK closing at $1,777.80 — up sharply from a 50-bar low near $998.19 and now 60.5% above its 200-day SMA.",
  "On that final bar the engine's rule-based confluence ranker returns a bullish bias but a weak net score of 0.153 and only 0.30 confidence — enough for a HOLD action, not a buy trigger. Four of the seven fired detectors lean bullish (MA alignment, price above the Ichimoku cloud, an OBV bull cross, and strong Chaikin Money Flow accumulation) against three bearish flags (a red Kumo cloud, extension more than 20% above the 200SMA, and a 10-bar volume/price divergence).",
  "The single strongest fired signal is MA ALIGNMENT BULLISH — the only detector tagged STRONG in this scan. SNDK's 10-, 20-, and 50-day SMAs are stacked in a clean bullish stairstep (Tenkan 1,706.84 > 20SMA 1,663.79 > 50SMA 1,516.76). But two secondary reads argue for patience: ADX sits at just 17.2, well under the ~20–25 threshold trend-followers use to call a trend \"confirmed,\" and the daily stochastic (%K 68.7 under %D 76.7) is curling down out of overbought — short-term momentum is cooling even while the longer moving averages stay aligned bullish."
];

const keyTakeaways = [
  {
    label: "MA Stairstep Intact, But Not Confirmed by ADX",
    detail:
      "10 > 20 > 50 SMA is the only STRONG-strength signal on the board, but ADX at 17.2 sits well under the ~20 threshold that typically confirms a trending regime — the stairstep is real, the trend strength isn't yet."
  },
  {
    label: "60.5% Above the 200SMA — Historically Stretched",
    detail:
      "Distance from the 200-day SMA is +60.5%, yet price is still 24.5% below the 252-bar high of $2,354.39 — SNDK isn't making new highs right now, it's mid-pullback inside a much larger structural uptrend."
  },
  {
    label: "Volume Isn't Confirming the Bounce",
    detail:
      "Friday's session traded 7.32M shares against a 20-day average of 10.66M (-31%), and the engine flagged a 10-bar VOLUME BEARISH DIVERGENCE — price higher, volume lighter. Moves on thin volume tend not to hold."
  },
  {
    label: "Backtest Rewards Patience, Not the Entry Candle",
    detail:
      "Across the 51 scannable bars in this window, bullish-labeled signals on SNDK hit 48.6% of the time at a 5-day horizon but 89.8% at 40 days — the historical edge has been holding through the noise, not timing the exact entry."
  }
];

export interface SignalRow {
  signal: string;
  description: string;
  strength: string;
  category: string;
}

const liveSignals: SignalRow[] = [
  {
    signal: "MA ALIGNMENT BULLISH",
    description: "10 > 20 > 50 SMA",
    strength: "STRONG BULLISH",
    category: "MA_TREND"
  },
  {
    signal: "PRICE ABOVE KUMO",
    description: "Close $1,777.80 above cloud top $1,676.29",
    strength: "BULLISH",
    category: "ICHIMOKU"
  },
  {
    signal: "OBV BULL CROSS EMA",
    description: "OBV crossed above its 20-period EMA",
    strength: "BULLISH",
    category: "OBV_CMF"
  },
  {
    signal: "CMF STRONG BUYING",
    description: "Chaikin Money Flow: 0.151 (accumulation)",
    strength: "BULLISH",
    category: "OBV_CMF"
  },
  {
    signal: "BEARISH KUMO",
    description: "Red cloud: SpanA (1,459.63) < SpanB (1,676.29)",
    strength: "BEARISH",
    category: "ICHIMOKU"
  },
  {
    signal: ">20% ABOVE 200SMA",
    description: "60.5% above 200-period SMA",
    strength: "BEARISH",
    category: "MA_DISTANCE"
  },
  {
    signal: "VOLUME BEARISH DIVERGENCE (10b)",
    description: "Price rising but volume falling over 10 bars",
    strength: "BEARISH",
    category: "VOLUME"
  }
];

const strengthClass: Record<string, string> = {
  "STRONG BULLISH": "bg-green-600 text-white",
  BULLISH: "bg-green-900 text-green-300",
  BEARISH: "bg-red-900 text-red-300",
  "STRONG BEARISH": "bg-red-600 text-white"
};

const technicalSnapshot: { label: string; value: string; read: string }[] = [
  { label: "Close (9/25/26)", value: "$1,777.80", read: "Last completed session" },
  { label: "RSI(14) / RSI(5)", value: "57.3 / 57.0", read: "Neutral — room in both directions" },
  { label: "Stochastic %K / %D", value: "68.7 / 76.7", read: "Curling down from overbought" },
  { label: "ADX / +DI / -DI", value: "17.2 / 31.9 / 20.0", read: "Bullish lean, trend not confirmed" },
  { label: "ATR(14)", value: "$111.61 (6.3% of price)", read: "High-volatility regime" },
  { label: "Bollinger(30,1.5) %B", value: "0.906", read: "Inside upper band — no breakout yet" },
  { label: "MACD / Signal / Hist", value: "67.4 / 53.9 / +13.5", read: "Bullish and expanding" },
  { label: "CMF(20)", value: "+0.151", read: "Accumulation" },
  { label: "Dist. 20 / 50 / 200 SMA", value: "+6.9% / +17.2% / +60.5%", read: "Extended above every major MA" },
  { label: "Volume vs 20d avg", value: "7.32M vs 10.66M (-31%)", read: "Light — no volume confirmation" },
  { label: "Ichimoku cloud", value: "Price above top ($1,676), cloud red", read: "Mixed" }
];

interface BacktestRow {
  horizon: string;
  bullishHit: string;
  bearishHit: string;
  note: string;
}

const backtestRows: BacktestRow[] = [
  { horizon: "5 trading days", bullishHit: "48.6% (69/142)", bearishHit: "42.4% (70/165)", note: "Near coin-flip — no short-term edge" },
  { horizon: "10 trading days", bullishHit: "56.9% (74/130)", bearishHit: "36.1% (52/144)", note: "Edge starts tilting bullish" },
  { horizon: "20 trading days", bullishHit: "84.6% (88/104)", bearishHit: "14.2% (16/113)", note: "Strong trend-following edge" },
  { horizon: "40 trading days", bullishHit: "89.8% (44/49)", bearishHit: "2.9% (1/35)", note: "Bearish signals have been a trap" }
];

export default function SndkSignalReport() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="border-b border-gray-800 bg-black py-6">
        <div className="container mx-auto px-4">
          <pre className="overflow-x-auto font-mono text-xs leading-tight text-green-400">
            {ASCII_ART}
          </pre>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl space-y-8 px-4 py-8">
        <section className="mb-4">
          <img
            className="mx-auto h-auto max-h-[420px] w-full max-w-2xl rounded-2xl border border-gray-800 object-cover shadow-2xl"
            src={HERO_IMAGE}
            alt={TITLE}
          />
        </section>

        <div className="space-y-3">
          <span className="rounded-full bg-green-700 px-3 py-1 text-sm font-bold text-white">
            Finance / Signal Scan
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">{DATE} · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Executive Summary
          </h2>
          {bodyParagraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-gray-300">
              {p}
            </p>
          ))}
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {keyTakeaways.map((item) => (
            <div key={item.label} className="rounded-xl border border-gray-800 bg-gray-950 p-5">
              <h3 className="mb-2 text-sm font-bold text-green-400">{item.label}</h3>
              <p className="text-xs leading-relaxed text-gray-400">{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Live Confluence — Every Fired Signal (Latest Bar)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs">
              <thead>
                <tr className="border-b border-gray-800 text-gray-500">
                  <th className="py-2 pr-4">Signal</th>
                  <th className="py-2 pr-4">Strength</th>
                  <th className="py-2 pr-4">Category</th>
                  <th className="py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {liveSignals.map((s) => (
                  <tr key={s.signal} className="border-b border-gray-900">
                    <td className="py-2 pr-4 font-semibold text-gray-200">{s.signal}</td>
                    <td className="py-2 pr-4">
                      <span
                        className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                          strengthClass[s.strength] ?? "bg-gray-800 text-gray-300"
                        }`}
                      >
                        {s.strength}
                      </span>
                    </td>
                    <td className="py-2 pr-4 text-gray-500">{s.category}</td>
                    <td className="py-2 text-gray-400">{s.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Source: <code className="text-green-500">signals analyze SNDK --no-llm --json</code> ·
            confluence score 0.153 · confidence 0.30 · data quality 0.70 (last bar 62.1h stale
            over the weekend gap).
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Technical Snapshot (Latest Bar)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-xs">
              <thead>
                <tr className="border-b border-gray-800 text-gray-500">
                  <th className="py-2 pr-4">Indicator</th>
                  <th className="py-2 pr-4">Value</th>
                  <th className="py-2">Read</th>
                </tr>
              </thead>
              <tbody>
                {technicalSnapshot.map((row) => (
                  <tr key={row.label} className="border-b border-gray-900">
                    <td className="py-2 pr-4 font-semibold text-gray-200">{row.label}</td>
                    <td className="py-2 pr-4 text-green-400">{row.value}</td>
                    <td className="py-2 text-gray-400">{row.read}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Backtest — Directional Hit Rate by Holding Period
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            <code className="text-green-500">signals backtest SNDK --period 1y --horizon &#123;5,10,20,40&#125; --json</code>{" "}
            replays every bullish- and bearish-labeled signal across the 51 bars in this window
            that clear the 200-bar indicator warmup, and checks whether the sign of the forward
            return agreed with the signal's direction over each horizon.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs">
              <thead>
                <tr className="border-b border-gray-800 text-gray-500">
                  <th className="py-2 pr-4">Horizon</th>
                  <th className="py-2 pr-4">Bullish hit rate</th>
                  <th className="py-2 pr-4">Bearish hit rate</th>
                  <th className="py-2">Read</th>
                </tr>
              </thead>
              <tbody>
                {backtestRows.map((row) => (
                  <tr key={row.horizon} className="border-b border-gray-900">
                    <td className="py-2 pr-4 font-semibold text-gray-200">{row.horizon}</td>
                    <td className="py-2 pr-4 text-green-400">{row.bullishHit}</td>
                    <td className="py-2 pr-4 text-red-400">{row.bearishHit}</td>
                    <td className="py-2 text-gray-400">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            "Hit" = the sign of the forward return matched the signal's direction (bullish hit =
            price higher N days later; bearish hit = price lower). Source:{" "}
            <code className="text-green-500">backtests/engine.py::score_historical_signals</code>.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border-2 border-green-700 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            The Trade Plan: Buy Monday, Wait, or Skip It?
          </h2>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-yellow-400">Swing (5–10 trading days): WAIT</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              The live confluence is a HOLD (score 0.153, confidence 0.30) and the 5–10 day
              backtest hit rate for bullish signals (48.6%–56.9%) is close to a coin flip — no
              statistical edge to chase into Monday's open. Stochastic is curling down, volume is
              running 31% below its 20-day average, and ADX hasn't confirmed a trend. Trigger to
              flip bullish: a reclaim of the $1,810.65 upper Bollinger band on volume above the
              10.66M 20-day average, or RSI(14) breaking back above 60 with the stochastic
              turning back up.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-green-400">
              Long-Term / Position (20–40+ trading days): ACCUMULATE ON WEAKNESS, DON'T CHASE HERE
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              At the 20–40 day horizon the backtest strongly favors staying long-biased — 84.6%–
              89.8% hit rate on bullish signals, versus bearish signals failing outright (2.9%–
              14.2%). But that edge has mostly been captured by holding through pullbacks, not by
              buying at a fresh 60.5% extension above the 200SMA. A better risk/reward entry zone
              sits back near the $1,663–$1,706 band (20SMA / Tenkan-sen confluence) or the $1,517
              50SMA, both of which have acted as support on prior pullbacks in this dataset.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-gray-200">Avoid entirely?</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              No. There's no bearish confluence case strong enough to avoid the name outright —
              CMF is accumulating, OBV just crossed its EMA bullish, and the moving-average stack
              is intact. The case against SNDK right now is about entry price and timing, not
              direction.
            </p>
          </div>

          <div className="rounded-lg border border-yellow-700 bg-yellow-950/30 p-4">
            <p className="text-xs leading-relaxed text-yellow-300">
              <strong>Sample-size caveat:</strong> this backtest window is SNDK's entire trading
              history as a standalone stock — it spun off from Western Digital in February 2025,
              so 2y and max-period backtests fail outright on insufficient data. Only 51 bars
              clear the 200-bar indicator warmup this pipeline requires. That's a single-regime
              sample: nearly the whole window sits inside one dominant NAND-flash-shortage
              uptrend. A hit-rate spread this lopsided (89.8% bullish / 2.9% bearish at 40 days)
              says "don't fight this trend" — it does not yet say "this specific setup has a
              repeatable edge independent of the trend." Not financial advice.
            </p>
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Methodology
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Every number on this page comes from a local run of{" "}
            <code className="text-green-500">signals-app</code> (mamba env{" "}
            <code className="text-green-500">signals-app</code>), the same engine that produced
            the IPI scan above — no synthetic or hand-written figures. Data source is yfinance via
            the app's <code className="text-green-500">DataFetcher</code>; no LLM synthesis was
            used (<code className="text-green-500">--no-llm</code>), so the bias/action call is
            the deterministic rule-based fallback, not a model opinion. Full process notes,
            including exactly which commands ran and whether any database was touched, live in{" "}
            <code className="text-green-500">docs/sndk-signal-report-process.md</code> in this
            repo.
          </p>
        </section>

        <p className="pt-4 text-center text-sm">
          <Link to="/" className="text-green-400 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance / Signal Scan · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
