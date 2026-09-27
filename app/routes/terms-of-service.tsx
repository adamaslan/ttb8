import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Terms of Service";
const SLUG = "terms-of-service";

export const meta: MetaFunction = () => [
  { title: TITLE },
  {
    name: "description",
    content: "The terms governing your use of TastyTechBytes, including its financial/signal-scan content."
  },
  { property: "og:title", content: TITLE },
  { property: "og:type", content: "article" }
];

export default function TermsOfService() {
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

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <p className="text-sm leading-relaxed text-gray-300">
            By accessing or using TastyTechBytes ("TTB", "the site", "we",
            "us"), you agree to these Terms of Service. If you do not agree,
            do not use the site. These terms apply to every page on the
            site, including its finance, signal-scan, and trading/investing
            content — see the separate{" "}
            <Link to="/disclaimer" className="text-green-400 underline decoration-dotted hover:text-green-300">
              Financial Disclaimer
            </Link>{" "}
            for what that content is and is not.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Nature of the Service
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            The site publishes technology, engineering, and select
            financial-markets articles for informational and educational
            purposes. It is not a broker-dealer, a registered investment
            adviser, or a licensed financial services provider, and nothing
            on the site should be treated as such.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Acceptable Use
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            You agree to use the site only for lawful purposes and not to
            interfere with, disrupt, or attempt to gain unauthorized access
            to it or its underlying systems. You may view, read, and share
            links to individual pages for personal, non-commercial use.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Restrictions on Scraping &amp; Automated Access
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Automated collection or extraction of data from this site —
            including scraping, crawling, or bulk-downloading article
            content, signal data, or backtest results — without prior
            written permission is prohibited. This does not restrict
            standard, well-behaved search-engine indexing.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Intellectual Property
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Site content — text, articles, ASCII art, graphics, and
            original data visualizations — is the property of TastyTechBytes
            or its named authors and is protected by copyright. You may
            quote brief excerpts with attribution and a link back to the
            source page. Reproducing, republishing, or redistributing full
            articles or datasets without permission is not allowed.
            Third-party trademarks, tickers, and company names referenced
            in articles (e.g. in signal reports) belong to their respective
            owners and are used for identification only — their appearance
            here does not imply endorsement of, or affiliation with,
            TastyTechBytes.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Third-Party Links &amp; Data
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            The site may link to, or cite data from, third-party sources
            (news outlets, market-data providers, other websites). We do
            not control and are not responsible for the availability,
            accuracy, or content of any third-party site or feed.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            No Warranty; Limitation of Liability
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            The site is provided "as is" without warranties of any kind,
            express or implied. To the fullest extent permitted by law,
            TastyTechBytes and its authors disclaim liability for any
            damages — direct, indirect, incidental, or consequential —
            arising from your use of, or inability to use, the site, or
            from any decision made in reliance on its content, financial
            or otherwise.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Changes to These Terms
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            We may update these terms from time to time; the "Last updated"
            date above reflects the most recent revision. Continued use of
            the site after a change constitutes acceptance of the updated
            terms.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Termination
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            We may restrict or terminate access to the site, at our
            discretion, for conduct that violates these terms or is
            otherwise harmful to the site or other users.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Severability &amp; Entire Agreement
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            If any provision of these terms is found unenforceable, the
            remaining provisions continue in full force. Together with the{" "}
            <Link to="/disclaimer" className="text-green-400 underline decoration-dotted hover:text-green-300">
              Financial Disclaimer
            </Link>
            , these terms make up the entire agreement between you and
            TastyTechBytes regarding use of the site.
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
