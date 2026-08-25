import React from 'react';
import { Link } from 'react-router';
import hero from "/how-solo-dev-built-1990s-fps-cat-game-without-ai.jpg";
import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: "How a Solo Dev Built a 1990s FPS Cat Game Without AI" },
    { property: "og:image", content: hero },
    { property: "og:title", content: "How a Solo Dev Built a 1990s FPS Cat Game Without AI" },
    { property: "og:description", content: "Discover how one developer created Catlantean 3D, a retro FPS cat game with 256 colors and software raycasting, entirely by hand." },
    { property: "og:type", content: "article" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "How a Solo Dev Built a 1990s FPS Cat Game Without AI" },
    { property: "twitter:description", content: "Discover how one developer created Catlantean 3D, a retro FPS cat game with 256 colors and software raycasting, entirely by hand." },
    { property: "twitter:image", content: hero },
    { property: "linkedin:title", content: "How a Solo Dev Built a 1990s FPS Cat Game Without AI" },
    { property: "linkedin:description", content: "Discover how one developer created Catlantean 3D, a retro FPS cat game with 256 colors and software raycasting, entirely by hand." },
    { property: "linkedin:image", content: hero },
    { property: "keywords", content: "retro FPS, software raycasting, Blender pre-renders, Aseprite pixel art, handcrafted game development, 1990s game aesthetics" },
  ];
};

const RemixPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">How a Solo Dev Built a 1990s FPS Cat Game Without AI</h1>
          <p className="mt-2">A developer hand-crafted Catlantean 3D, a retro FPS with 256 colors and software raycasting, using only Blender and Aseprite.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        
        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Introduction</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">In a world dominated by AI-generated assets and procedural pipelines, one developer took a different path. Staniks built <a href="https://staniks.github.io/articles/catlantean-3d-blog-1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Catlantean 3D</a>, a retro first-person shooter (FPS) starring cats, using nothing but handcrafted tools and techniques. The game mimics the look and feel of 1990s classics with 256 colors, software raycasting, and painstakingly created art. For developers tired of AI shortcuts, this project proves that manual craftsmanship still has a place in modern game development.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">The Vision Behind a Handcrafted Retro FPS</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Staniks didn’t set out to build just another retro FPS clone. Instead, they aimed to capture the raw, tactile feel of 1990s shooters like Doom and Duke Nukem 3D, but with a feline twist. The game’s aesthetic leans heavily into the era’s signature 256-color palette and low-poly models, creating a nostalgic yet fresh experience. By avoiding AI-generated assets entirely, the developer ensured every texture, sprite, and level detail was intentionally designed. For teams already using <Link to="/cloudflare-flagship-simplifies-feature-flags" className="text-blue-600 underline">Cloudflare Flagship for effortless feature flags</Link>, this project highlights how manual control can lead to more polished and unique outcomes.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Tools and Techniques: Building Without AI</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">To achieve the retro look, Staniks relied on a mix of traditional tools. <a href="https://www.blender.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Blender</a> served as the backbone for pre-rendering 3D assets, while <a href="https://www.aseprite.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Aseprite</a> handled pixel art and sprites with surgical precision. Procedural textures were generated sparingly, ensuring they complemented the handcrafted elements rather than replacing them. Software raycasting, a technique popularized in the 90s, was implemented from scratch to maintain authenticity. The result is a game that feels both nostalgic and meticulously crafted, a rarity in today’s AI-driven development landscape.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">The Challenges of Handcrafted Development</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Building a game entirely by hand is no small feat. Each level required manual design, from layout to lighting, with no shortcuts for asset generation. The 256-color limitation meant every pixel had to be carefully chosen to avoid visual clutter. Staniks also had to implement software raycasting from the ground up, a process that demanded deep understanding of rendering techniques. Despite these hurdles, the developer’s commitment to the craft resulted in a game that feels authentic and cohesive, a testament to the power of manual iteration.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Why This Matters for Modern Developers</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">In an era where AI tools promise to automate creativity, Catlantean 3D stands as a reminder of the value of human touch. The game demonstrates that constraints—like limited colors or no AI assistance—can spark innovation rather than stifle it. For developers seeking to differentiate their projects, this approach offers a blueprint for creating something truly unique. Whether you’re building a retro-inspired title or experimenting with new mechanics, the lessons from this project are clear: sometimes, the best way forward is to go back.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Conclusion</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Catlantean 3D is more than just a retro FPS—it’s a statement. By rejecting AI-generated assets and embracing manual craftsmanship, Staniks created a game that feels both timeless and personal. For developers looking to break away from the AI-driven norm, this project is proof that creativity thrives under constraints. As the gaming industry continues to evolve, projects like this remind us that sometimes, the most innovative solutions come from the simplest tools and the most deliberate hands.</p>
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
