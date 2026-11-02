import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Reading a Limit Order Book: Microstructure for Builders";
const DESCRIPTION = "The book is the market. Price, spread, and depth are outputs of a queueing system you can model with engineering instincts.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ THE BOOK :: TWO QUEUES FACING EACH OTHER             ║
║                                                      ║
║   asks  100.02 × 800                                 ║
║         100.01 × 300                                 ║
║   ───── spread = 0.01 ─────                          ║
║   bids  100.00 × 500                                 ║
║          99.99 × 1,200                               ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function LimitOrderBookMechanicsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The machine under the ticker</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A limit order book is two sorted queues: bids descending, asks ascending. A market order matches against the best prices on the other side, walking levels until filled; a limit order joins its queue at its price. The ticker price you watch is just the print of the last match, a side effect, not the state."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Spread and depth are the state. The spread is the toll for immediacy; the depth at each level is how much size you can move before paying worse prices. Every execution question, how much will this order cost me, is answered by the shape of those two queues at that moment."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Dynamics that matter</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Queue priority is price-time: improving the price beats joining early, which is why the inside spread is contested territory."}</li>
            <li>{"Displayed size is a lower bound on truth: iceberg orders and cancelation games mean the visible book is a negotiating position, not a commitment."}</li>
            <li>{"Imbalance, the ratio of bid to ask size at the inside, carries short-horizon information, but it decays in seconds and is traded away fast."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Practical consequences for builders</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"If you route orders: your cost model is spread plus walked-depth, and slicing large orders exists to avoid paying the whole book's slope at once. If you consume data feeds: sequence numbers, snapshots versus deltas, and reconnection handling are the difference between a book you can trust and a book that looks right until it is very wrong."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"If you backtest: fill assumptions are the silent killer. Simulating a fill at the mid when the book would have walked three levels is not optimism; it is fiction."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance - Signal Scan · limit-order-book-mechanics · TastyTechBytes
      </footer>
    </div>
  );
}
