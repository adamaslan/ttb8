import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Finding CRISPR Off-Targets With Computation First";
const DESCRIPTION = "Editing the wrong locus is the failure mode. Guide design is now a search-and-score problem, and the wet lab confirms what the pipeline ranks.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ OFF-TARGET PIPELINE                                  ║
║                                                      ║
║   20nt guide ──► genome scan (≤3 mismatches)         ║
║        ──► score candidates ──► rank ──► validate    ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function CrisprOffTargetDetectionComputationArticle() {
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
          <span className="rounded-full bg-pink-600 px-3 py-1 text-sm font-bold text-white">
            Tech World - Helpful
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The problem shape</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A CRISPR guide RNA is about twenty nucleotides that tell the nuclease where to cut. The genome is three billion bases, so the search for similar sequences, potential off-targets, is a real string-matching problem: find every site within a small mismatch or bulge budget, then estimate how likely each is to actually be cut."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Exhaustive alignment against a whole genome per guide is the expensive version; in practice, indexed search structures and seed-and-extend schemes make the scan tractable, and scoring models rank the candidates so the lab only validates the dangerous-looking handful."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What the scores know</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Mismatch position matters: mismatches near the PAM-proximal seed region disrupt cutting far more than distal ones, so position-weighted scoring beats raw mismatch counts."}</li>
            <li>{"Chromatin context matters: a site in closed chromatin is a theoretical off-target that the nuclease physically struggles to reach; accessibility data improves the ranking."}</li>
            <li>{"Bulges matter: small insertions and deletions between guide and target change the chemistry, and RNA-DNA bulge models capture what pure mismatch counting misses."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Computation proposes, the lab disposes</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"In silico ranking is a filter for attention, not a verdict: unbiased genome-wide assays catch the off-targets the models miss, and the two methods check each other. The engineering takeaway transfers cleanly: when ground truth is expensive, you build a cheap model to rank what gets measured, and you keep the measurement honest."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"For guide design today, the workflow is: generate candidate guides, scan each against the reference genome, score and rank off-target risk, pick the guide whose worst candidate is most benign, then validate empirically at the scale the application demands, higher for anything clinical, lighter for a screen."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Tech World - Helpful · crispr-off-target-detection-computation · TastyTechBytes
      </footer>
    </div>
  );
}
