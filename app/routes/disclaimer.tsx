import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Financial Disclaimer";
const SLUG = "disclaimer";

export const meta: MetaFunction = () => [
  { title: TITLE },
  {
    name: "description",
    content:
      "TastyTechBytes financial content — signal scans, backtests, and trading/investing articles — is informational only and not investment, legal, accounting, or tax advice."
  },
  { property: "og:title", content: TITLE },
  { property: "og:type", content: "article" }
];

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <main className="container mx-auto max-w-3xl space-y-8 px-4 py-12">
        <div className="space-y-3">
          <span className="rounded-full bg-yellow-600 px-3 py-1 text-sm font-bold text-white">
            Legal
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">Last updated September 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border-2 border-yellow-700 bg-yellow-950/20 p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-yellow-400">
            Short version
          </p>
          <p className="text-sm leading-relaxed text-gray-200">
            Nothing on TastyTechBytes — including signal reports, confluence
            scans, backtests, technical-indicator snapshots, or any trading
            or investing article — is financial advice. It's informational
            and educational content only. Do your own research, and talk to
            a licensed financial advisor before making investment decisions.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Informational Purposes Only
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            TastyTechBytes ("TTB", "the site", "we") publishes technology,
            engineering, and — on select pages — financial-markets content.
            Any page discussing a ticker, an index, an ETF, a trading
            strategy, a backtest, or an investment approach is provided
            for informational and educational purposes only. Nothing on
            this site constitutes investment, legal, accounting, or tax
            advice, or a recommendation or solicitation to buy, sell, or
            hold any security, cryptocurrency, or other financial
            instrument. No content here is a personalized recommendation —
            it does not account for your individual financial situation,
            objectives, or risk tolerance.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Past Performance, Backtests &amp; Forward-Looking Statements
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Past performance — whether of a security, an index, a trading
            signal, or a backtested strategy — is not a guarantee or
            reliable indicator of future results. Backtest statistics
            published on this site (hit rates, confluence scores, and
            similar figures) are computed over a specific historical
            window and may reflect a single market regime, survivorship
            in the underlying data, or a small sample size; they are not
            a projection of what will happen going forward. Any
            statement about what "might," "could," or "is likely to"
            happen is a forward-looking statement subject to risks,
            uncertainties, and assumptions, and actual outcomes may
            differ materially.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Data Sources &amp; Accuracy
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Market data referenced on this site is sourced from
            third-party providers (including, where noted, Yahoo
            Finance/yfinance, Alpaca, and Finnhub) believed to be
            reliable but not guaranteed as to accuracy, completeness, or
            timeliness. Quotes and figures may be delayed and can
            contain errors, gaps, or provider-side revisions. Technical
            indicators, confluence scores, and signal labels are
            computed by an automated rules-based engine and, where
            stated, may involve AI-assisted synthesis — they are not
            reviewed or endorsed by a licensed financial professional
            before publication.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            No Warranty
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            This site and its content are provided "as is" and "as
            available," without warranty of any kind, express or
            implied, including but not limited to warranties of
            accuracy, merchantability, fitness for a particular purpose,
            or non-infringement. We do not warrant that any content is
            free of errors, or that any strategy, signal, or scan
            discussed will be profitable or suitable for you.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Limitation of Liability
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            To the fullest extent permitted by law, TastyTechBytes and
            its authors are not liable for any loss or damage —
            including direct, indirect, incidental, consequential, or
            punitive damages, or any trading or investment losses —
            arising from your use of, or reliance on, any content on
            this site. Investing and trading involve substantial risk of
            loss and are not suitable for every investor; you are solely
            responsible for any decision you make.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Related
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            This disclaimer works alongside our{" "}
            <Link to="/terms-of-service" className="text-green-400 underline decoration-dotted hover:text-green-300">
              Terms of Service
            </Link>
            , which govern your use of the site generally. If anything
            here conflicts with a statement on an individual article
            page, this disclaimer controls.
          </p>
        </section>

        <p className="pt-4 text-center text-sm">
          <Link to="/" className="text-green-400 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Legal · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
