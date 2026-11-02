import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "When a Reranker Beats a Bigger Embedding Model";
const DESCRIPTION = "Retrieval quality is a two-stage problem. Upgrading the first stage is expensive; adding a second stage is usually the better dollar.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ TWO-STAGE RETRIEVAL                                  ║
║                                                      ║
║   corpus ──► bi-encoder ──► top-100 (cheap, rough)   ║
║                    │                                 ║
║                    └─► cross-encoder ──► top-5       ║
║                         (slow, precise, few pairs)   ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function RerankersVsBiggerEmbeddingsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The asymmetry that makes this work</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"An embedding model scores a query against a document by encoding each one separately and comparing vectors. That separation is what makes search over millions of documents fast, and it is also the accuracy ceiling: query and document never see each other during encoding, so fine-grained relevance distinctions get compressed away."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"A reranker, usually a cross-encoder, reads the query and one candidate together and scores the pair. That is far more accurate per document and far too slow to run over a whole corpus. The two-stage pattern exploits the asymmetry: embeddings retrieve a rough top hundred cheaply, the reranker sorts the hundred precisely, and the model sees only the final five or ten."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">When the upgrade is worth it</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Your recall is fine but precision at the top is bad: the right document is in the candidate set, ranked ninth. This is the reranker's exact home turf."}</li>
            <li>{"Queries are nuanced: negation, multi-hop constraints, or domain jargon that embeddings flatten."}</li>
            <li>{"You cannot re-embed the corpus: bigger embedding models mean re-encoding every document and re-validating the index. A reranker bolts on with zero changes to stored vectors."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"When recall itself is broken, when the right document never makes the candidate set at all, no reranker can save you. That is when you fix chunking, metadata filters, or yes, the embedding model."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Measure the pair, not the part</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Evaluate the pipeline end to end on labeled query-document pairs: recall of the first stage at your candidate depth, then precision of the final ranking after reranking. A reranker that improves benchmark nDCG but adds 300 ms to every query may be a net loss for an interactive product; a small cross-encoder over fifty candidates is often the sweet spot."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The practical default for a mid-size RAG system in this era: decent open embedding model, candidate depth around 50 to 100, lightweight cross-encoder rerank, and a cache keyed on query text. It routinely outperforms a naive swap to a flagship embedding model at a fraction of the migration cost."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · rerankers-vs-bigger-embeddings · TastyTechBytes
      </footer>
    </div>
  );
}
