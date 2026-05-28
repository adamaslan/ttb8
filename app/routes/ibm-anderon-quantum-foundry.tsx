import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const ASCII_ART = `
╔══════════════════════════════════════════════════════════╗
║   IBM ANDERON: 300MM QUANTUM FOUNDRY                    ║
║                                                          ║
║   CHIPS Act capital  ───────┐                            ║
║   IBM cash + IP      ───────┼──►  Anderon                ║
║   Albany 300mm fab   ───────┘       │                    ║
║                                      ▼                    ║
║                              superconducting wafers      ║
║                                      │                    ║
║       trapped ion / photonic / neutral atom bets         ║
║                    ░░ smaller equity stakes ░░           ║
║                                                          ║
║   The quantum race is becoming a manufacturing race.     ║
╚══════════════════════════════════════════════════════════╝
`;

const TITLE = "IBM's Anderon Quantum Foundry Is a $2B Bet on 300mm Qubits";
const DATE = "May 2026";
const SLUG = "ibm-anderon-quantum-foundry";
const HERO_IMAGE = "/ibm-anderon-quantum-foundry.png";
const SOURCE_URL =
  "https://futurumgroup.com/insights/2-billion-chips-act-investment-in-quantum-bets-on-ibms-300mm-superconducting-silicon/";
const IBM_URL =
  "https://newsroom.ibm.com/ibm-and-u-s-department-of-commerce-announce-americas-first-purpose-built-quantum-foundry";

const bodyParagraphs = [
  "IBM and the U.S. Department of Commerce are trying to turn quantum computing into a manufacturing problem. Anderon, IBM's new standalone quantum foundry, is backed by a proposed $1 billion CHIPS award plus another $1 billion from IBM.",
  "The interesting part is not just the money. It is where the money lands: a 300mm superconducting silicon wafer flow in Albany, New York, while seven other quantum companies get smaller equity-style bets across trapped ion, photonic, neutral atom, and other approaches.",
  "That is a very loud signal from industrial policy land: the U.S. wants a quantum supply chain that looks more like semiconductors and less like lab-only physics experiments.",
];

const fundingTiers = [
  {
    label: "IBM / Anderon",
    amount: "$1B proposed CHIPS award + $1B IBM investment",
    read: "Infrastructure-scale capital for a standalone 300mm quantum foundry.",
  },
  {
    label: "GlobalFoundries",
    amount: "$375M proposed award",
    read: "A second serious manufacturing lane for quantum-focused fabrication.",
  },
  {
    label: "Seven other quantum companies",
    amount: "$38M-$100M each",
    read: "Portfolio bets across alternative modalities, but not full foundry-scale buildout.",
  },
];

const whyItMatters = [
  {
    name: "300mm wafers change the iteration loop",
    detail:
      "Quantum hardware still needs physics breakthroughs, but faster wafer turns mean more experiments, more yield learning, and more boring-but-crucial process discipline.",
  },
  {
    name: "Superconducting qubits get the fab advantage",
    detail:
      "IBM's approach can borrow more directly from semiconductor tooling than trapped-ion or optics-heavy systems, so manufacturing economics become part of the technical moat.",
  },
  {
    name: "Control electronics are part of the chip story",
    detail:
      "The qubits are not the whole system. Scalable quantum machines need classical control chips, cryogenic packaging, routing, and test flows that can mature together.",
  },
  {
    name: "The government is taking portfolio risk",
    detail:
      "Minority equity stakes across nine companies spread the bet, but the large checks reveal a preference for quantum paths that can plug into real fabs sooner.",
  },
];

const watchList = [
  "Whether Anderon becomes a true multi-tenant foundry or mostly an IBM supply chain.",
  "Whether alternative modalities can raise their own manufacturing and packaging capital.",
  "How quickly IBM's control ASIC roadmap catches up with the qubit roadmap.",
  "Whether GlobalFoundries competes directly with Anderon or builds a more modality-neutral lane.",
  "Whether 300mm throughput creates durable advantage before fault-tolerant quantum is commercially useful.",
];

export const meta: MetaFunction = () => [
  { title: TITLE },
  { name: "description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:type", content: "article" },
  { property: "og:image", content: HERO_IMAGE },
  { property: "twitter:card", content: "summary_large_image" },
  { property: "twitter:image", content: HERO_IMAGE },
];

export default function IbmAnderonQuantumFoundryPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <pre className="text-xs leading-tight font-mono overflow-x-auto text-green-400">{ASCII_ART}</pre>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <div>
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">AI News</span>
          <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">{DATE}</p>
        </div>

        <img
          src={HERO_IMAGE}
          alt="8-bit pixel art of a quantum wafer foundry"
          className="w-full rounded-xl border border-gray-800"
        />

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          {bodyParagraphs.map((para, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">
              {para}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">The Capital Stack</h2>
          <div className="space-y-2">
            {fundingTiers.map((tier) => (
              <div key={tier.label} className="bg-gray-950 rounded-lg border border-gray-800 p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div className="font-semibold text-gray-100 text-sm">{tier.label}</div>
                  <span className="text-xs bg-gray-800 text-gray-300 rounded-full px-2 py-1 w-fit">{tier.amount}</span>
                </div>
                <div className="text-xs text-gray-400 mt-2">{tier.read}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Why This Is Not Just Another Quantum Press Release
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Quantum news usually arrives wrapped in qubit counts, coherence charts, and roadmap promises. This one is different because it pushes the conversation down into wafer diameter, process design kits, in-line testing, and repeatable manufacturing.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The bet is that superconducting silicon can ride more of the existing semiconductor machine than other approaches. If that is true, the winning question becomes less "who has the prettiest demo?" and more "who can learn fastest from thousands of fabricated devices?"
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">The Technical Read</h2>
          <div className="space-y-2">
            {whyItMatters.map((item) => (
              <div key={item.name} className="bg-gray-950 rounded-lg border border-gray-800 p-4">
                <div className="font-semibold text-green-400 text-sm mb-1">{item.name}</div>
                <div className="text-xs text-gray-400">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">What To Watch Next</h2>
          <ul className="space-y-2">
            {watchList.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-gray-300">
                <span className="text-green-400 font-bold">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-3">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide">Source Notes</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            This TastyTechBytes take is based on Futurum's analysis of the CHIPS quantum package and IBM's Anderon announcement.
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-gray-300">
              <span className="text-green-400 font-bold">▸</span>
              <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                Futurum: $2B CHIPS Act investment in quantum and IBM's 300mm superconducting silicon bet
              </a>
            </li>
            <li className="flex gap-2 text-sm text-gray-300">
              <span className="text-green-400 font-bold">▸</span>
              <a href={IBM_URL} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                IBM: Anderon quantum foundry announcement
              </a>
            </li>
          </ul>
        </section>

        <p className="text-center">
          <Link to="/" className="text-green-400 hover:underline text-sm">
            ← Back to Home
          </Link>
        </p>
      </main>

      <footer className="bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        AI News · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
