import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Blender Geometry Nodes: Scatter Fields Without the Node Soup";
const DESCRIPTION = "Procedural scattering is three ideas: points, density, and variation. Keep the graph small and the field stays art-directable.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ SCATTER :: THE MINIMAL GRAPH                         ║
║                                                      ║
║   mesh ──► distribute points ──► instance on points  ║
║                 ▲ density tex      ▲ random rot/scale║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function BlenderGeometryNodesScatterFieldsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The core graph is five nodes</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Distribute Points on Faces turns your surface into a point cloud; Instance on Points puts geometry at each point. Density comes from a texture or attribute; rotation and scale get small random ranges. That is the whole engine behind most grass, rubble, crowd, and debris fields you have seen."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Everything else, slope masks, proximity exclusion, camera-distance culling, is a modulation of density or scale. If the graph is getting long, the question to ask is which of those two values each new node is really editing."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Direct the field, don't decorate it</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Paint density with a weight map instead of trusting uniform scatter; art direction lives in the mask."}</li>
            <li>{"Kill instances on steep slopes with a normal-dot-product mask: three nodes, instantly believable terrain logic."}</li>
            <li>{"Cull by camera distance for hero shots: points beyond a radius scale to zero instead of costing render time."}</li>
            <li>{"Randomize per-instance collection index for mixed scatter, rocks and tufts in one pass, rather than stacking separate systems."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Keep it editable</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The failure mode of geometry nodes is the hundred-node graph that produces something great that nobody dares touch. Defense: expose the five values that matter, density, seed, scale range, slope cutoff, distance cull, as group inputs, and collapse the rest into named frames."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Proceduralism pays when the scene changes; a scatter graph you can re-seed and re-mask in seconds survives the art review. The one that was hand-tuned into a corner does not."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        3D World - Helpful · blender-geometry-nodes-scatter-fields · TastyTechBytes
      </footer>
    </div>
  );
}
