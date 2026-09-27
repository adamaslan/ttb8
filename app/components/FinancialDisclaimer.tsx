import { Link } from "react-router";

/**
 * Compact disclaimer block for every finance/trading/investing page on the
 * site. Drop it near the bottom of the article body, above the "Back to
 * Home" link. Full legal text lives at /disclaimer and /terms-of-service —
 * this is the short-form pointer, not a replacement for either page.
 */
export function FinancialDisclaimer() {
  return (
    <section className="rounded-xl border border-yellow-800 bg-yellow-950/20 p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-yellow-500">
        Not Financial Advice
      </p>
      <p className="mt-2 text-xs leading-relaxed text-gray-400">
        This page is provided for informational and educational purposes
        only. Nothing on it constitutes investment, legal, accounting, or tax
        advice, or a recommendation to buy, sell, or hold any security.
        Past performance does not guarantee future results, and all figures
        can change without notice. See the full{" "}
        <Link to="/disclaimer" className="text-yellow-400 underline decoration-dotted hover:text-yellow-300">
          Disclaimer
        </Link>{" "}
        and{" "}
        <Link to="/terms-of-service" className="text-yellow-400 underline decoration-dotted hover:text-yellow-300">
          Terms of Service
        </Link>{" "}
        before relying on anything here.
      </p>
    </section>
  );
}
