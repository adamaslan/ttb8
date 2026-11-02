import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Shipping glTF: Draco, KTX2, and the Size Budget";
const DESCRIPTION = "A glTF that ships to the web has a budget like any other asset. Geometry compression and GPU textures are the two levers that matter.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ GLTF DIET :: COMPRESS WHAT THE WIRE CARRIES          ║
║                                                      ║
║   geometry ──► Draco/meshopt ──► small buffers       ║
║   textures ──► KTX2/Basis  ──► GPU-ready, small      ║
║                                                      ║
║   decode cost < download cost (usually)              ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function GltfOptimizationDracoKtx2Article() {
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
          <span className="rounded-full bg-purple-900 px-3 py-1 text-sm font-bold text-white">
            3D World - Helpful
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Where the bytes are</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Open a heavy glTF and the distribution is predictable: textures dominate, geometry second, everything else noise. So the optimization order is fixed: textures first, geometry second, and do not spend a day quantizing animation curves to save twelve kilobytes."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"KTX2 with Basis compression keeps textures compressed all the way to the GPU: smaller downloads, and smaller VRAM footprint than decoded PNGs, which matters on mobile where the texture budget kills before the download does. Draco or meshopt compress geometry buffers; meshopt decodes faster, Draco compresses tighter, both beat raw floats by multiples."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">A pipeline, not a one-off</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`# the workhorse: gltf-transform
gltf-transform optimize model.glb out.glb \\
  --compress meshopt --texture-compress ktx2`}</pre>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Run optimization in CI or the asset build, never by hand; hand-optimized files regress the day someone re-exports."}</li>
            <li>{"Budget per scene, not per model: five optimized 2 MB models are still a 10 MB landing experience."}</li>
            <li>{"Measure decode time on a mid-range phone; compression that saves 400 KB and costs 800 ms on the main thread is a bad trade for above-the-fold content."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The format courtesies</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Ship .glb for delivery, single file, no external references to 404. Strip what the viewer never sees: editor metadata, unused UV sets, vertex colors nobody samples. And version the pipeline's output, because the day the hero asset looks wrong in production, the question is whether the source changed or the optimizer did."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The goal is boring: assets that arrive fast, decode off the critical path, and look identical to what art signed off. glTF gives you the knobs; the budget makes you turn them."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        3D World - Helpful · gltf-optimization-draco-ktx2 · TastyTechBytes
      </footer>
    </div>
  );
}
