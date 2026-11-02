import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Modular Synths for Programmers: It's All Signal Flow";
const DESCRIPTION = "A modular patch is a dataflow graph with cables. Oscillators are sources, filters are map operations, envelopes are scheduled events, and the clock is the event loop.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ MODULAR :: A DATAFLOW GRAPH WITH KNOBS               ║
║                                                      ║
║   VCO ──► VCF ──► VCA ──► out                        ║
║            ▲       ▲                                 ║
║           LFO     envelope (triggered per note)      ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function ModularSynthSignalFlowProgrammersArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Two kinds of signal</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Every patch separates into audio and control. Audio is the sound itself, a fast signal you eventually hear. Control voltage is data: slow signals that set parameters, open filters, fire envelopes. The cable between an LFO and a filter's cutoff is a function call with a continuous argument; the envelope generator is an event that runs an attack-decay-sustain-release function when triggered."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Once the two-signal split clicks, module names stop being jargon. VCO is a waveform source. VCF is a tunable filter stage. VCA is multiplication. A mixer is sum. A sequencer is an iterator with a clock."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The classic voice, decomposed</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`// a subtractive voice as pseudocode
onNote(gate, pitchCV):
  vco.tune(pitchCV)              // pitch is data
  env.trigger(gate)              // event fires
  audio = vco.wave()             // saw, square, sine
  audio = vcf(audio, cutoff + env.out + lfo.out)
  audio = vca(audio, env.out)    // amplitude shaped by event
  out(audio)`}</pre>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">{"Read left to right, a basic patch is a pipeline; read the modulation, and it is the same pipeline with time-varying parameters. Complexity in modular is not more modules, it is more modulators: the interesting patches route slow signals into everything."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Why programmers take to it</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Modular rewards the same instincts as good code: small modules with one job, explicit connections, no hidden state beyond what you patch. Debugging is even familiar: when the patch is silent, you trace the signal path from source to output and find the stage where it stops, which is just a breakpoint with a screwdriver."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Start with one oscillator, one filter, one envelope, one VCA. That four-module voice can teach every concept the thousand-module walls use; the walls just run more of them in parallel."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Tech World - Helpful · modular-synth-signal-flow-programmers · TastyTechBytes
      </footer>
    </div>
  );
}
