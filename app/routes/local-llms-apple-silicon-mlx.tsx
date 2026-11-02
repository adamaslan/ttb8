import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Running Local LLMs on Apple Silicon: What Fits in Memory and What It Costs You";
const DESCRIPTION = "Unified memory makes a laptop a plausible inference box. The constraints are real: memory bandwidth is the speed limit, and quantization is the price of admission.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ LOCAL INFERENCE :: MEMORY IS THE WHOLE BUDGET        ║
║                                                      ║
║   weights + KV cache <= unified memory               ║
║   tokens/sec  ~  memory bandwidth                    ║
║                                                      ║
║   4-bit quant: half the size, small quality tax      ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function LocalLlmsAppleSiliconMlxArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The physics of it</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Apple Silicon shares one memory pool between CPU and GPU, so a machine with 32 GB can load models that would need a dedicated GPU with comparable VRAM. Generation speed is bound by memory bandwidth: every token requires reading the model's weights, so tokens per second tracks how many GB per second the chip can stream. That is why a small model on a high-bandwidth chip beats a big model on a bigger, slower machine."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"GGUF through llama.cpp and MLX are the two mainstream runtimes. Both support quantized weights, both are fine. MLX tends to win on Apple-specific throughput for supported architectures; llama.cpp wins on portability and breadth of model support."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Quantization is the negotiation</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"4-bit quantization roughly quarters weight size: a 7-8B parameter model lands near 4-5 GB, a 70B model near 40 GB."}</li>
            <li>{"The quality drop from 8-bit is usually invisible; from 4-bit it is small for chat and larger for precise tasks like math or code."}</li>
            <li>{"Do not forget the KV cache: long contexts consume memory on top of weights, and it grows with every token of conversation."}</li>
            <li>{"Leave headroom for the OS. A machine that swaps is a machine that generates one token per second."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"Rule of thumb: usable model size is about two thirds of total memory, minus what your context length needs. That puts comfortable local territory at 7-14B models for 16-32 GB machines and quantized 70B-class models for 64 GB and up."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What local is actually for</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Local inference earns its keep for privacy-sensitive data, offline work, development loops where API latency and cost distort your testing, and fixed high-volume tasks where a small fine-tuned model beats a general API. It loses for frontier-quality reasoning, long-document work past your memory budget, and anything where a dropped laptop is an availability incident."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The pattern that works: develop against the local model, gate quality with an eval suite, and keep an API fallback for the queries the small model fails. Local-first with a measured escape hatch, not local-only as ideology."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · local-llms-apple-silicon-mlx · TastyTechBytes
      </footer>
    </div>
  );
}
