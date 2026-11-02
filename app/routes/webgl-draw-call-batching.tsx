import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Draw Calls: The WebGL Performance Budget Nobody Graphs";
const DESCRIPTION = "GPU triangle counts get the attention, but the CPU-side cost of issuing draws is what caps most scenes. Measuring and merging calls is the fix.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ DRAW CALLS :: THE CPU SIDE OF THE FRAME              ║
║                                                      ║
║   per call: validate state ──► upload ──► draw       ║
║   budget: ~1-2k calls at 60fps, fewer on mobile      ║
║                                                      ║
║   fix: batch, instance, atlas                        ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function WebglDrawCallBatchingArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The hidden half of the frame budget</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Each draw call makes the driver validate state, bind buffers and textures, and submit work. Sixteen milliseconds per frame at 60fps, and a few thousand calls eat it regardless of how few triangles they contain. This is why a scene of simple boxes can chug while a single dense mesh flies: the GPU was never the constraint."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Measure first: renderer.info in Three.js reports calls per frame. That number, not polygon count, is the one to graph against frame time when a scene slows down."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The three hammers</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Batch static geometry: merge meshes that share a material and never move independently. One call, one buffer, done at load time."}</li>
            <li>{"Instance repeated geometry: same mesh, many transforms, one call, as covered in the InstancedMesh pattern."}</li>
            <li>{"Atlas textures: material changes force separate calls; packing textures into atlases lets different-looking objects share one material and batch together."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"State sorting helps too: drawing same-material objects consecutively avoids rebinding. Most engines do this automatically once objects share materials, which is another reason atlasing compounds."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The trade you are making</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Batching trades flexibility for submission efficiency: merged meshes lose per-object culling and independent transforms; instanced meshes share geometry. So batch by behavior: static level geometry merges, repeated dynamics instance, interactive hero objects stay separate."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The budget is per frame, not per scene, so the last step is checking the worst camera angle, not the average one. A lobby that runs at 60 and a crowd shot that runs at 22 is a draw-call graph with one bad frame in it."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        3D World - Helpful · webgl-draw-call-batching · TastyTechBytes
      </footer>
    </div>
  );
}
