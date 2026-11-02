import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "InstancedMesh in Three.js: 10,000 Objects Without the Frame Drop";
const DESCRIPTION = "Thousands of Mesh objects means thousands of draw calls. One InstancedMesh draws them all in a single call, and the API is smaller than the problem.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ INSTANCING :: SAME GEOMETRY, MANY TRANSFORMS         ║
║                                                      ║
║   before: 10,000 meshes ──► 10,000 draw calls        ║
║   after:  1 geometry + 10,000 matrices ──► 1 call    ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function ThreejsInstancedmeshPerformanceArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The draw call wall</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Every distinct Mesh costs a draw call, and draw calls are the budget that runs out first: a forest, a crowd, a field of particles-as-objects dies at a few thousand independent meshes not because the GPU cannot draw the triangles, but because the CPU cannot submit the calls fast enough."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"InstancedMesh tells the GPU to draw the same geometry many times with a per-instance transform. One call submits the whole crowd. The constraint is baked into the name: one geometry, one material, many matrices."}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`const mesh = new THREE.InstancedMesh(geo, mat, COUNT);
const m = new THREE.Matrix4();
for (let i = 0; i < COUNT; i++) {
  m.setPosition(x[i], y[i], z[i]);
  mesh.setMatrixAt(i, m);
}
mesh.instanceMatrix.needsUpdate = true;`}</pre>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Per-instance data beyond position</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Color: instanceColor gives each instance its own tint without new materials."}</li>
            <li>{"Animation: update the matrix buffer per frame for moving swarms; set usage to DynamicDrawUsage so the driver optimizes for rewrites."}</li>
            <li>{"Custom attributes: when color and transform are not enough, instanced buffer attributes feed per-instance values into the shader."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What instancing does not fix</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Frustum culling applies to the whole InstancedMesh as one unit, so a spread-out field draws even when mostly off-screen; split into spatial chunks when that matters. Picking works, raycasting returns an instanceId, but per-instance event handlers are on you to wire."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"And if your ten thousand objects are ten thousand different geometries, instancing is the wrong tool: merge static geometry into batches instead. The rule of thumb: same shape many times, instance; many shapes once each, merge."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        3D World - Helpful · threejs-instancedmesh-performance · TastyTechBytes
      </footer>
    </div>
  );
}
