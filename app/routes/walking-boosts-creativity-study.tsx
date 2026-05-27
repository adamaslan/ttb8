import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const ASCII_ART = `
╔══════════════════════════════════════════════════════════╗
║   WALKING BOOSTS CREATIVE THINKING                      ║
║                                                          ║
║   sitting desk                                          ║
║      │                                                   ║
║      ▼                                                   ║
║   same prompt ───────────────┐                           ║
║                              ▼                           ║
║                        short walk                        ║
║                              │                           ║
║                              ▼                           ║
║        divergent ideas  ░░░░░░░░░░░░  more branches      ║
║        single-answer tasks  ░░░       not the point      ║
║                                                          ║
║   Use walking for ideation. Sit down for the edit.       ║
╚══════════════════════════════════════════════════════════╝
`;

const TITLE = "Take a Walk Before You Brainstorm: The Study Behind the Old Advice";
const DATE = "May 2026";
const SLUG = "walking-boosts-creativity-study";
const HERO_IMAGE = "/walking-boosts-creativity-study.png";
const APA_URL = "https://www.apa.org/news/press/releases/2014/04/creativity-walk";
const PUBMED_URL = "https://pubmed.ncbi.nlm.nih.gov/24749966/";
const STANFORD_URL = "https://ed.stanford.edu/news/study-finds-walking-boosts-creativity";

const bodyParagraphs = [
  "The old advice to take a walk when you are stuck has actual lab backing. In a 2014 study, Marily Oppezzo and Daniel Schwartz found that walking improved creative idea generation in real time and shortly afterward.",
  "The useful detail for builders is narrower than the headline. Walking helped divergent thinking: coming up with many possible uses, analogies, and idea branches. It did not magically improve focused, single-answer problem solving.",
  "So the move is simple: walk for the messy ideation phase, then sit down when the job becomes editing, ranking, checking, or shipping.",
];

const experimentNotes = [
  {
    label: "Participants",
    detail: "Four experiments with 176 college students and adults doing standard creativity tasks.",
  },
  {
    label: "Conditions",
    detail: "Walking indoors, sitting indoors, walking outdoors, and sitting outdoors while being moved along the same path.",
  },
  {
    label: "Main signal",
    detail: "Creativity scores rose while walking, and some of that boost remained after participants sat back down.",
  },
  {
    label: "Boundary",
    detail: "The boost showed up for divergent creativity tasks, not for convergent tasks with one correct answer.",
  },
];

const workflowRules = [
  "Take a 5- to 16-minute walk before naming, outlining, sketching, or debugging a vague product problem.",
  "Do not use the walk to finalize a decision. Use it to widen the option set.",
  "Capture raw ideas immediately after the walk, before your brain starts pruning them into polite office shapes.",
  "Move back to a desk for the ranking pass: feasibility, evidence, cost, and what actually ships.",
  "If you are remote, use a voice memo. If you are in an office, make walking meetings opt-in and accessibility-aware.",
];

const useCases = [
  {
    name: "Naming and positioning",
    detail: "When every product name sounds like a SaaS generator coughed, walk first. Generate breadth before judgment.",
  },
  {
    name: "Article outlines",
    detail: "A stroll is good for finding the weird angle. The desk is better for turning it into sections that behave.",
  },
  {
    name: "Debugging fuzzy bugs",
    detail: "Walking can help generate hypotheses. It will not replace logs, repro steps, or a boring test case.",
  },
  {
    name: "Design critique",
    detail: "Use movement to loosen alternatives, then come back to pixels, constraints, and tradeoffs.",
  },
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

export default function WalkingBoostsCreativityStudyPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <pre className="text-xs leading-tight font-mono overflow-x-auto text-green-400">{ASCII_ART}</pre>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <div>
          <span className="rounded-full bg-pink-600 px-3 py-1 text-sm font-bold text-white">
            Tech World - Helpful
          </span>
          <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">{DATE}</p>
        </div>

        <img
          src={HERO_IMAGE}
          alt="8-bit pixel art of a person walking on a treadmill with idea circuits overhead"
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
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">
            What The Study Actually Tested
          </h2>
          <div className="space-y-2">
            {experimentNotes.map((item) => (
              <div key={item.label} className="bg-gray-950 rounded-lg border border-gray-800 p-4">
                <div className="font-semibold text-green-400 text-sm mb-1">{item.label}</div>
                <div className="text-xs text-gray-400">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            The Best Part: The Room Did Not Matter Much
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            One surprising result was that walking on a treadmill in a plain indoor room still helped. A nicer route outside is welcome, but the core mechanism was not just scenery. Movement itself seemed to loosen the idea generator.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            That matters for real work because you do not need a perfect park, a retreat, or a lifestyle influencer morning routine. A boring hallway loop can be enough for the first pass.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">
            How To Use This Without Making It Weird
          </h2>
          <ul className="space-y-2">
            {workflowRules.map((rule) => (
              <li key={rule} className="flex gap-2 text-sm text-gray-300">
                <span className="text-green-400 font-bold">▸</span>
                {rule}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">
            Practical Workflows
          </h2>
          <div className="space-y-2">
            {useCases.map((item) => (
              <div key={item.name} className="bg-gray-950 rounded-lg border border-gray-800 p-4">
                <div className="font-semibold text-gray-100 text-sm">{item.name}</div>
                <div className="text-xs text-gray-400 mt-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-3">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide">Source Notes</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            This TastyTechBytes take is based on the APA press release, the PubMed abstract for the original paper, and Stanford's summary of the research.
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-gray-300">
              <span className="text-green-400 font-bold">▸</span>
              <a href={APA_URL} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                APA: creativity and walking press release
              </a>
            </li>
            <li className="flex gap-2 text-sm text-gray-300">
              <span className="text-green-400 font-bold">▸</span>
              <a href={PUBMED_URL} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                PubMed: Give your ideas some legs
              </a>
            </li>
            <li className="flex gap-2 text-sm text-gray-300">
              <span className="text-green-400 font-bold">▸</span>
              <a href={STANFORD_URL} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                Stanford GSE: walking and creativity summary
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
        Tech World - Helpful · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
