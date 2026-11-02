import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "LUFS and the End of the Loudness War: What Streaming Normalization Changed";
const DESCRIPTION = "Streaming platforms normalize playback loudness, which removed the incentive to master everything at maximum smash. Dynamics are back on the menu.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ NORMALIZATION :: LOUDER NO LONGER WINS               ║
║                                                      ║
║   crushed master ──► turned DOWN to target           ║
║   dynamic master ──► same loudness, punch intact     ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function LoudnessNormalizationLufsStreamingArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The war, briefly</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"For two decades, records competed to be the loudest thing on the CD changer: compress and limit the master until the waveform is a brick, because louder reads as better in a blind comparison. The cost was dynamics: quiet-loud contrast, drum transients, and the shape of a performance flattened into a rectangle."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The metric that ended it is LUFS, a loudness measure weighted to human hearing and integrated over time. Major streaming apps measure each track's integrated loudness and turn playback toward a common target. Where normalization is actually in effect, a hyper-compressed master no longer plays louder than a dynamic one; it plays at the same volume with less life in it. The qualifier matters: targets differ by platform, and normalization is reduced or absent on some web players, TVs, and third-party devices, so the old incentive is diminished, not abolished."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What normalization actually does</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Targets sit in the mid-teens LUFS integrated, varying by platform, with true-peak ceilings to prevent inter-sample clipping."}</li>
            <li>{"Turning tracks down is lossless and free; turning quiet masters up is where platforms get conservative, so very dynamic material may sit slightly below the loudest bricks."}</li>
            <li>{"Album mode versus track mode matters: gapless and album-context playback preserve the artist's internal level relationships."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"The mastering consequence, on platforms where normalization applies: aiming for a loudness number is now a choice, not a survival tactic. A master with healthy crest factor survives normalization intact; a crushed one just gets attenuated."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">For people who make or measure audio</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Mix and master to sound, then check the numbers: integrated LUFS, short-term loudness at the loudest passage, and true peak. If your limiter is working six dB on the chorus, normalization removed the reason and kept the damage."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"And for listeners: the same system is why some older, louder-mastered tracks now sound oddly small next to modern dynamic ones. The volume knob did not change; the incentive did."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Tech World - Helpful · loudness-normalization-lufs-streaming · TastyTechBytes
      </footer>
    </div>
  );
}
