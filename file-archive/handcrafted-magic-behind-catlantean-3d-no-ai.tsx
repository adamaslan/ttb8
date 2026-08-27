/*
ARCHIVED: 2026-08-25
REASON: Duplicate/SEO-variant route retired per docs/todo3-restyle.md Phase 1 cluster cleanup.
ORIGINAL ROUTE: /handcrafted-magic-behind-catlantean-3d-no-ai
*/
import React from 'react';
import { Link } from 'react-router';
import hero from "/handcrafted-magic-behind-catlantean-3d-no-ai.jpg";
import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: "The Handcrafted Magic Behind Catlantean 3D: A 1990s FPS Built Without AI" },
    { property: "og:image", content: hero },
    { property: "og:title", content: "The Handcrafted Magic Behind Catlantean 3D: A 1990s FPS Built Without AI" },
    { property: "og:description", content: "Discover how one developer built Catlantean 3D, a 1990s-style FPS with handcrafted art and software raycasting—without a single line of AI generation." },
    { property: "og:type", content: "article" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "The Handcrafted Magic Behind Catlantean 3D: A 1990s FPS Built Without AI" },
    { property: "twitter:description", content: "Discover how one developer built Catlantean 3D, a 1990s-style FPS with handcrafted art and software raycasting—without a single line of AI generation." },
    { property: "twitter:image", content: hero },
    { property: "linkedin:title", content: "The Handcrafted Magic Behind Catlantean 3D: A 1990s FPS Built Without AI" },
    { property: "linkedin:description", content: "Discover how one developer built Catlantean 3D, a 1990s-style FPS with handcrafted art and software raycasting—without a single line of AI generation." },
    { property: "linkedin:image", content: hero },
    { property: "keywords", content: "retro FPS, software raycasting, handcrafted game dev, Aseprite, Blender pre-renders, pixel art" },
  ];
};

const RemixPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">The Handcrafted Magic Behind Catlantean 3D: A 1990s FPS Built Without AI</h1>
          <p className="mt-2">A solo developer recreates a retro FPS using pure craftsmanship, from raycasting to pixel art.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        
        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Introduction</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">In a world dominated by AI-assisted game development, one developer has taken a bold step backward—crafting an entire retro FPS from scratch without relying on any generative tools. Enter <a href="https://staniks.github.io/articles/catlantean-3d-blog-1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Catlantean 3D</a>, a meticulously handcrafted first-person shooter that channels the aesthetic and technical spirit of 1990s classics like *Doom* and *Wolfenstein 3D*. Unlike many modern indie titles that lean on AI for asset creation or level design, this project proves that raw creativity and technical skill can still produce stunning results. For developers curious about the nuts and bolts of retro game development, this is a masterclass in constraint-driven design.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Software Raycasting: The Engine Behind the Retro Look</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">At the heart of Catlantean 3D lies a custom software raycasting engine, a technique popularized in the 1990s to simulate 3D environments with minimal hardware. Unlike modern 3D engines that rely on GPUs and complex shaders, raycasting renders environments by casting rays from the player’s perspective to calculate wall heights and textures. This approach not only reduces computational overhead but also lends itself to the chunky, pixelated charm of classic FPS games. The developer’s implementation is a testament to understanding foundational graphics programming, proving that even today’s hardware can handle such techniques when optimized properly. For those interested in diving deeper, <a href="https://lodev.org/cgtutor/raycasting.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">raycasting is well-documented</a> as a gateway to learning 3D rendering fundamentals.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Handcrafted Art: From Blender to Pixel Perfection</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Every asset in Catlantean 3D was painstakingly created by hand, from the environments to the enemies. The developer used <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Blender</a> to pre-render 3D models and textures, which were then meticulously edited in <a href="https://www.aseprite.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Aseprite</a> to achieve the game’s signature 256-color palette. This hybrid approach—combining 3D pre-renders with pixel art—allowed for a level of detail and consistency that’s rare in retro-inspired projects. The result is a visual style that feels authentic to the era while maintaining a unique identity. For developers looking to blend modern tools with retro aesthetics, this project offers a compelling blueprint.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Procedural Textures and the Challenge of Consistency</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">One of the most interesting aspects of Catlantean 3D is its use of procedural textures to maintain visual cohesion across the game’s environments. Procedural generation isn’t typically associated with retro FPS games, but here it’s used sparingly to ensure textures remain sharp and readable at low resolutions. The developer’s approach involved hand-tweaking algorithms to avoid the chaotic, unpredictable results often seen in fully automated systems. This balance between automation and manual control highlights a key lesson for indie developers: procedural tools can enhance creativity, but they must serve the vision, not replace it. For teams already using <Link to="/snapstate-persistent-state-ai-agents-workflow-memory" className="text-blue-600 underline">SnapState to preserve workflow state</Link>, the discipline required for this project will feel familiar.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Why This Matters in the Age of AI Game Dev</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">In an era where AI tools like MidJourney or Stable Diffusion can generate assets in seconds, Catlantean 3D stands as a reminder of the value of human craftsmanship. The project isn’t just a technical achievement—it’s a philosophical statement about the role of the developer in the creative process. By eschewing AI entirely, the creator of Catlantean 3D demonstrates that constraints can spark innovation, and that the time invested in handcrafted work yields a product with soul. For developers feeling overwhelmed by the AI hype, this project is proof that skill, patience, and passion still matter more than the latest tools. It’s a call to embrace the grind of manual creation, even in a world that increasingly favors automation.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Conclusion</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Catlantean 3D is more than just a retro FPS—it’s a love letter to the craft of game development. By building the entire game from scratch, the developer has created something truly unique in a landscape crowded with AI-assisted projects. Whether you’re a seasoned developer or a curious newcomer, there’s plenty to learn from this project’s approach to raycasting, art, and procedural generation. As AI continues to reshape the industry, stories like this one remind us that the human touch remains irreplaceable. For those inspired to try their hand at retro game development, Catlantean 3D is both a challenge and an inspiration.</p>
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
