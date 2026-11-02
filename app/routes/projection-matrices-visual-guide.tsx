import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Projection Matrices, Explained With Boxes Instead of Greek";
const DESCRIPTION = "The perspective matrix is a box reshaping machine: it squashes the view volume into a cube. Everything else is bookkeeping.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ PROJECTION :: RESHAPE THE WORLD INTO A CUBE          ║
║                                                      ║
║   view frustum ──► [perspective matrix] ──► NDC cube ║
║   far things shrink; near things stay big            ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function ProjectionMatricesVisualGuideArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What the matrix is for</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The camera sees a frustum: a truncated pyramid from the near plane to the far plane. The GPU wants a cube, coordinates from -1 to 1 on every axis, because clipping and rasterizing in a cube is simple. A projection matrix is the reshape from frustum to cube, nothing more mystical than that."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Perspective falls out of the reshape: the far end of the frustum is wider, so squashing it into the cube shrinks distant x and y. Things far away get small because the box got squeezed, not because the matrix knows about distance emotionally."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The knobs you actually set</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Field of view: how wide the frustum opens. Wide FOV, more squeeze at the edges, that stretched look at the corners."}</li>
            <li>{"Aspect: keeps the squeeze honest on non-square screens. Forgetting it is why stretched-rendering bugs look the way they do."}</li>
            <li>{"Near and far: they set how depth precision is spent. A near plane at 0.001 with a far plane at 100,000 spends all the precision on emptiness, and distant geometry z-fights."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"The practical advice that follows: push the near plane out as far as your scene allows, pull the far plane in, and most shimmering-depth problems vanish without touching a shader."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Orthographic is the same idea, simpler</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"An ortho projection reshapes a plain box into the cube: no squeeze, no perspective, parallel stays parallel. That is why it suits editors, maps, and UI: measurements stay comparable across depth."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Once projection is a box-reshaper, the rest of the pipeline snaps into place: model and view matrices position the world in front of the camera, projection packs it into the cube, and the viewport stretch puts it on your pixels. Four steps, each a rectangle of numbers with one job."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        3D World - Helpful · projection-matrices-visual-guide · TastyTechBytes
      </footer>
    </div>
  );
}
