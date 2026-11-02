import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "RAG Chunking: The Few Decisions That Actually Matter";
const DESCRIPTION = "Chunk size arguments consume teams for weeks. Retrieval quality usually hinges on three decisions: respecting structure, preserving context, and matching chunk size to the question.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ CHUNKING :: SPLIT WHERE MEANING SPLITS               ║
║                                                      ║
║   doc ──► headings ──► sections ──► chunks           ║
║              + parent context attached               ║
║                                                      ║
║   bad split: sentence cut mid-thought                ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function ChunkingStrategiesThatMatterArticle() {
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
          <span className="rounded-full bg-purple-400 px-3 py-1 text-sm font-bold text-white">
            AI Tips / Tutorials
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Respect the document's own structure</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The most common chunking failure is splitting on a fixed token count straight through headings, tables, and code blocks. The resulting chunks are internally incoherent: half a table, a paragraph that starts mid-argument, a code sample without its explanation. Embeddings of incoherent text retrieve incoherently."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Split on the document's structure first: markdown headings, HTML sections, function boundaries, slide boundaries. Only split further when a structural unit exceeds your size budget. A recursive splitter that tries headings, then paragraphs, then sentences gets most of the win with little code."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Chunks are retrieved alone but read alone-er</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A chunk that says it is deprecated in section 4.2 is useless if section 4.2 is never retrieved alongside it. Two cheap fixes cover most of this. First, prepend context: document title, section path, and a one-line summary into every chunk before embedding. Second, use overlap or parent-child retrieval: embed small chunks for precision, but hand the model the surrounding section for coherence."}</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Prepend: doc title + heading path into each chunk's embedded text."}</li>
            <li>{"Overlap 10-15% for narrative text; skip overlap for code and tables where duplication confuses."}</li>
            <li>{"Parent-child: retrieve on the child, render the parent section to the model."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Size follows the question, not the dogma</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Short factual questions want small, dense chunks. Synthesis questions, summarize the migration plan, want big sections. If your traffic mixes both, index at two granularities or use parent-child retrieval rather than compromising on a middle size that serves neither."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Then measure. Build thirty question-and-expected-source pairs from real usage, and check whether the right chunk lands in the top results. That half day of measurement settles chunking debates that otherwise run for sprints."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · chunking-strategies-that-matter · TastyTechBytes
      </footer>
    </div>
  );
}
