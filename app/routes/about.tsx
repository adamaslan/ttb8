import { Link } from "react-router";

export default function About() {
  return (
    <div className="mx-3 lg:mx-36">
      <h1 className="tracking-light text-center text-2xl font-extrabold text-blue-500 sm:text-4xl lg:text-5xl">
        Welcome to Tasty Tech Bytes
      </h1>
      <div className="mt-8 text-lg leading-relaxed">
        <p className="mb-4">
          Tasty Tech Bytes is more than just a blog. TTB is a new kind of tech publication that breaks the boundaries between traditional media, hands-on tutorials, and deep technical research. We're building a space where newsworthy breakthroughs in AI, modern web development, and software culture collide with in-depth walkthroughs and research-grade explorations.
        </p>
        <p className="mb-4">
          Our content spans from cutting-edge innovations in Artificial Intelligence and Machine Learning—like Retrieval-Augmented Generation (RAG) and DSPy—to hands-on guides using frameworks like Astro and Vue.js. Whether we’re building Hugging Face Spaces or decoding the nuances of JavaScript, every piece is crafted to blur the lines between insight, instruction, and inspiration. We're not just covering trends—we’re experimenting, explaining, and amplifying them.
        </p>
        <p className="mb-4">
          Unlike legacy tech media, which often separates tutorials from journalism and overlooks the practical struggles of developers, we weave it all together. You'll find sharp developer advice (like WebStorm shortcut mastery or how to land full-stack jobs), alongside offbeat cultural pieces (like using AirPods with Audacity or exploring lost corners of internet history). We're here to equip developers and technologists with the skills, context, and curiosity to thrive.
        </p>
        <p className="mb-4">
          Tasty Tech Bytes is a manifesto as much as a media platform. We're challenging the old silos of tech coverage by offering an integrated, hacker-minded, research-informed lens on where code, culture, and creativity intersect. Whether you're scaling your startup or writing your first script, you're not just reading—you’re joining a movement.
        </p>
      </div>
      <p className="text-center text-lg font-extrabold tracking-tight text-yellow-500 sm:text-2xl lg:text-4xl mt-8">
        Go back{" "}
        <Link
          to="/"
          className="text-center text-6xl font-extrabold tracking-tight text-blue-500 sm:text-xl lg:text-4xl"
        >
          Home
        </Link>
      </p>
    </div>
  );
}
