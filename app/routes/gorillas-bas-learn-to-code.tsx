import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Gorillas.bas: The Artillery Game That Taught a Generation to Read Code";
const DESCRIPTION = "DOS shipped with source code you could play and then edit. Two gorillas throwing bananas quietly recruited more programmers than any curriculum.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ GORILLAS.BAS :: PLAY IT, THEN READ IT                ║
║                                                      ║
║   input: angle, velocity                             ║
║   loop:  x += vx; y += vy; vy += gravity             ║
║   edit:  gravity = 50  ──► everything changes        ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function GorillasBasLearnToCodeArticle() {
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
          <span className="rounded-full bg-green-400 px-3 py-1 text-sm font-bold text-white">
            Code World - Random
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The game in the box</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"MS-DOS 5 shipped QBasic with two games, Nibbles and Gorillas, as full, readable source. Gorillas was an artillery duel: two gorillas on a procedurally generated skyline, each entering an angle and a velocity, a banana arcing between them with gravity, wind, and pixel-art explosions."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The masterstroke was not the game, it was the format. The same program you played was the program you were looking at. No toolchain, no install, no permission: type qbasic, press play, then scroll up and read how it works."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The first mod is a physics lesson</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Almost everyone made the same first edit: the gravity constant. Then the explosion radius, then the sun's smile, then something that broke the collision detection and taught what a bounding box is. Each edit was a hypothesis with an immediate, visible verdict. That loop, change a constant, watch the system change, is the core motion of programming, delivered as a toy."}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`' the whole simulation, roughly
x = x + vx
y = y + vy
vy = vy + gravity * dt
' change gravity to 5 and bananas orbit the skyline`}</pre>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The distribution model nobody replicated</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Gorillas.bas worked because the runtime, the editor, and the source were one installed thing, and the audience for the game and the audience for its code were the same person thirty seconds apart. Modern equivalents exist, Pico-8 carts, view-source web toys, Glitch remixes, but no mainstream platform since has shipped playable, editable source to every single user by default."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"A generation of engineers can trace their careers to a banana. That is not nostalgia; it is evidence about how programming is actually learned: by touching a working system you already care about."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Random · gorillas-bas-learn-to-code · TastyTechBytes
      </footer>
    </div>
  );
}
