/*
ARCHIVED: 2026-08-25
REASON: Duplicate/SEO-variant route retired per docs/todo3-restyle.md Phase 1 cluster cleanup.
ORIGINAL ROUTE: /how-solo-dev-built-1990s-fps-cat-game-entirely-by-hand
*/
import React from 'react';
import { Link } from 'react-router';
import hero from "/how-solo-dev-built-1990s-fps-cat-game-entirely-by-hand.jpg";
import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: "How a Solo Dev Built a 1990s FPS Cat Game Entirely by Hand" },
    { property: "og:image", content: hero },
    { property: "og:title", content: "How a Solo Dev Built a 1990s FPS Cat Game Entirely by Hand" },
    { property: "og:description", content: "Discover how one developer built Catlantean 3D, a retro FPS cat game with 256 colors and handcrafted art, using only Blender, Aseprite, and procedural technique" },
    { property: "og:type", content: "article" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "How a Solo Dev Built a 1990s FPS Cat Game Entirely by Hand" },
    { property: "twitter:description", content: "Discover how one developer built Catlantean 3D, a retro FPS cat game with 256 colors and handcrafted art, using only Blender, Aseprite, and procedural technique" },
    { property: "twitter:image", content: hero },
    { property: "linkedin:title", content: "How a Solo Dev Built a 1990s FPS Cat Game Entirely by Hand" },
    { property: "linkedin:description", content: "Discover how one developer built Catlantean 3D, a retro FPS cat game with 256 colors and handcrafted art, using only Blender, Aseprite, and procedural technique" },
    { property: "linkedin:image", content: hero },
    { property: "keywords", content: "retro FPS, handcrafted game dev, software raycasting, Blender pre-renders, Aseprite pixel art, no AI generation" },
  ];
};

const RemixPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">How a Solo Dev Built a 1990s FPS Cat Game Entirely by Hand</h1>
          <p className="mt-2">A developer recreated a retro first-person shooter with handcrafted art, software raycasting, and zero AI tools.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        
        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Introduction</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">A solo developer has taken retro game development to heart with Catlantean 3D, a first-person shooter that deliberately mimics the look and feel of 1990s classics like Doom and Duke Nukem 3D. Unlike modern titles that rely on AI-generated assets or asset stores, this project was built entirely by hand, from its 256-color palette to its software-based raycasting engine. The result is a testament to the power of manual craftsmanship in an era dominated by automation. For those curious about the technical and artistic choices behind this project, the developer’s blog dives deep into the process <a href="https://staniks.github.io/articles/catlantean-3d-blog-1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">How One Dev Hand-Crafted a Retro FPS Cat Game</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Software Raycasting: The Engine Behind the Game</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">At the core of Catlantean 3D is a custom software raycasting engine, a technique popularized by early 3D shooters like Wolfenstein 3D. Unlike modern engines that leverage hardware acceleration, this implementation relies purely on CPU-based calculations to render walls, floors, and sprites. The developer chose this approach to stay true to the limitations and charm of 1990s game design, where performance constraints shaped every creative decision. For teams interested in exploring similar techniques, <a href="https://www.blender.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Blender</a> served as the primary tool for pre-rendering assets and testing level layouts before final implementation.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Handcrafted Art: From Blender to Pixel Perfection</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Every asset in Catlantean 3D was created manually, starting with 3D models built in <a href="https://www.blender.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Blender</a> and exported as sprites. The developer then refined these assets in Aseprite, a pixel art tool, to achieve the game’s signature 256-color aesthetic. This process ensured consistency and a cohesive visual style, avoiding the pitfalls of generic or AI-generated assets. The attention to detail extended to procedural textures, which were hand-tuned to match the retro look without relying on modern texture baking tools. For a deeper look at the artistic process, check out <Link to="/handcrafted-magic-behind-catlantean-3d-no-ai" className="text-blue-600 underline">The Handcrafted Magic Behind Catlantean 3D: A 1990s FPS Built Without AI</Link>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">The Challenge of Building Without AI</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">In an industry where AI tools are increasingly used for asset generation and optimization, Catlantean 3D stands out as a deliberate rejection of automation. The developer spent months painstakingly crafting each texture, model, and level by hand, trading speed for authenticity. This approach highlights the value of manual labor in preserving the unique aesthetic and feel of retro games. It also serves as a reminder that not every project benefits from AI assistance, especially when the goal is to recreate the limitations and creativity of a bygone era.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Lessons for Modern Game Developers</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Catlantean 3D offers several takeaways for developers working today, whether they’re indie creators or part of larger teams. First, it demonstrates the importance of constraints in sparking creativity—limitations like 256 colors or software rendering can lead to innovative solutions. Second, it underscores the value of handcrafted assets in creating a distinct identity for a game. Finally, it serves as a case study in how older techniques can be adapted for modern audiences without relying on cutting-edge tools. For those looking to explore similar projects, the developer’s earlier breakdown of the process provides a useful starting point <Link to="/how-one-dev-built-catlantean-3d-by-hand" className="text-blue-600 underline">From Blender to Raycasting: How One Dev Built a 1990s FPS Cat Game by Hand</Link>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Conclusion</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Catlantean 3D is more than just a retro FPS—it’s a celebration of handcrafted game development in an age of automation. By eschewing AI tools and embracing manual techniques, the developer has created a game that feels authentically 1990s while still being playable today. This project serves as both an inspiration and a challenge to developers who might be tempted to rely too heavily on AI for asset creation. Whether you’re a seasoned developer or a hobbyist, there’s something to learn from the dedication and creativity on display here.</p>
        </section>

        <p className="text-center text-blue-500 text-lg">
          <Link to="/">Go back to Home</Link>
        </p>
      </main>

      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-sm">&copy; 2025 TastyTechBytes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RemixPage;
