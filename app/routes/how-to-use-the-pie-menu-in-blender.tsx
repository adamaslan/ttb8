

import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import blender1 from "/blender1.jpeg";

const TITLE = "The Pie Menu Rocks in Blender";
const DESC = "Learn how to use Blender's pie menu to quickly access viewport controls, switch between camera views, and master scene navigation with keyboard shortcuts.";
const SLUG = "how-to-use-the-pie-menu-in-blender";
const CATEGORY = "3D/Design";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { name: "description", content: DESC },
    { property: "og:image", content: blender1 },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESC },
    { property: "og:type", content: "article" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: TITLE },
    { property: "twitter:description", content: DESC },
    { property: "twitter:image", content: blender1 },
  ];
};

export default function HowToUseThePieMenuInBlender() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
            {CATEGORY}
          </span>
          <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">
            by <span className="text-gray-300">{AUTHOR}</span>
          </p>
          <p className="mt-4 flex items-start gap-2 font-mono text-xs sm:text-sm text-green-400/90 tracking-tight">
            <span className="text-green-500 font-bold shrink-0">▸</span>
            Master Blender's pie menu for fast viewport navigation.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <img
          className="w-full rounded-xl border border-gray-800"
          src={blender1}
          alt="Blender pie menu"
        />

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Getting Started
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Using the pie menu is a quick method of accessing the Numpad hot keys and unlike Numpad emulation, it does not mess with the default shortcuts. For accessing that pie menu you need to press the backtick (`), which is located above the tab button on the left-hand side of your keyboard.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Viewport Navigation
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            The pie menu allows you to change the way you see your scene and objects in the 3D Viewport. You can choose between perspective and orthographic views, which affect the depth and distortion of your scene. You can also choose different angles to view your scene from, such as front, back, left, right, top and bottom. These angles can help you align and position your objects more precisely and easily. The view pie menu also has options to toggle quad view and toggle camera view, which can give you more control and flexibility over your scene layout and rendering.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Learn More
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            For the Pie Menu in Blender docs, you can visit <a href="https://docs.blender.org/manual/en/latest/addons/interface/viewport_pies.html" className="text-green-400 hover:underline">here</a>.
          </p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-green-400 hover:underline text-sm">
            ← Back to Home
          </Link>
        </p>
      </main>

      <footer className="bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        {CATEGORY} · {SLUG} · TastyTechBytes
      </footer>
    </div>
);
}

