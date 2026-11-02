import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Field Recording in the City: Gear, Gain Staging, and Usable Chaos";
const DESCRIPTION = "A city is the most overdriven input you will ever record. The skill is capturing range, from subway rumble to a street performer's detail, without clipping either end.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ FIELD RECORDING :: THE CITY AS AN INPUT SIGNAL       ║
║                                                      ║
║   rumble 20Hz ──► voice 1kHz ──► brakes 4kHz         ║
║                                                      ║
║   stereo pair + wind protection + headroom           ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function FieldRecordingCitySoundscapesArticle() {
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
          <span className="rounded-full bg-pink-600 px-3 py-1 text-sm font-bold text-white">
            Tech World - Helpful
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The signal you're up against</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Urban ambience spans an absurd dynamic and spectral range: sub-bass from traffic and trains, midrange humanity, and transient spikes from sirens, construction, and bus brakes that will happily clip a recorder set for conversation level. The environment will not do a second take, so the entire craft is headroom and position."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Gear that earns its place</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"A small stereo pair or a quality stereo handheld covers 90% of the work; portability beats fidelity you leave at home."}</li>
            <li>{"32-bit float recording removes gain-stress entirely: the capture range exceeds what the mics can deliver, so nothing clips and nothing is too quiet to recover."}</li>
            <li>{"Wind protection is not optional: a basic furry windshield is the difference between a recording and a rumble track."}</li>
            <li>{"Closed headphones for monitoring on site: you are listening for handling noise, wind, and clipping, not for enjoyment."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Technique: position is the mix</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"You cannot EQ your way out of a bad spot. Distance is the balance control: close for the subject, far for the room tone of the street. Corners, underpasses, and courtyards are natural filters, and recording the same performer from three positions gives you an edit you could never get from one perfect spot."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Record longer than feels necessary, log takes with a voice slate, and capture thirty seconds of pure room tone everywhere. The room tone is what lets an edit breathe, and it is the one thing you cannot fake later."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Tech World - Helpful · field-recording-city-soundscapes · TastyTechBytes
      </footer>
    </div>
  );
}
