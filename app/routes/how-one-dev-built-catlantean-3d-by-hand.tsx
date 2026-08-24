import React from 'react';
import { Link } from 'react-router';
import hero from "/how-one-dev-built-catlantean-3d-by-hand.jpg";
import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: "From Blender to Raycasting: How One Dev Built a 1990s FPS Cat Game by Hand" },
    { property: "og:image", content: hero },
    { property: "og:title", content: "From Blender to Raycasting: How One Dev Built a 1990s FPS Cat Game by Hand" },
    { property: "og:description", content: "Discover how a solo developer built Catlantean 3D, a 1990s-style FPS with 256 colors and software raycasting, entirely by hand." },
    { property: "og:type", content: "article" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "From Blender to Raycasting: How One Dev Built a 1990s FPS Cat Game by Hand" },
    { property: "twitter:description", content: "Discover how a solo developer built Catlantean 3D, a 1990s-style FPS with 256 colors and software raycasting, entirely by hand." },
    { property: "twitter:image", content: hero },
    { property: "linkedin:title", content: "From Blender to Raycasting: How One Dev Built a 1990s FPS Cat Game by Hand" },
    { property: "linkedin:description", content: "Discover how a solo developer built Catlantean 3D, a 1990s-style FPS with 256 colors and software raycasting, entirely by hand." },
    { property: "linkedin:image", content: hero },
    { property: "keywords", content: "retro FPS, software raycasting, Blender pre-renders, Aseprite pixel art, handcrafted game development" },
  ];
};

const RemixPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">From Blender to Raycasting: How One Dev Built a 1990s FPS Cat Game by Hand</h1>
          <p className="mt-2">A solo developer recreated a retro FPS experience using only handcrafted tools and zero AI generation.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        
        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Introduction</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">In a world dominated by AI-generated assets and procedural pipelines, one developer took a different path. <a href="https://staniks.github.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Stanislas</a> built Catlantean 3D, a 1990s-style first-person shooter starring cats, entirely by hand. The game features software raycasting, 256-color palettes, and meticulously crafted art—all created without relying on AI generation. For those who appreciate the craft of retro game development, this project is a masterclass in manual creation. If you&#x27;re curious about how handcrafted techniques can rival modern automation, check out <Link to="/handcrafted-magic-behind-catlantean-3d-no-ai" className="text-blue-600 underline">The Handcrafted Magic Behind Catlantean 3D: A 1990s FPS Built Without AI</Link>.</p>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">The game’s aesthetic deliberately mimics the look and feel of classic 90s shooters, from its pixelated textures to its limited color palette. By eschewing AI tools entirely, Stanislas demonstrates how traditional methods can produce unique, personal, and technically impressive results. This approach stands in stark contrast to today’s AI-driven pipelines, proving that human creativity remains irreplaceable.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Software Raycasting: The Engine Behind the Game</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">At the heart of Catlantean 3D is a custom software raycasting engine, a technique popularized by games like Wolfenstein 3D. Unlike modern 3D engines that rely on hardware acceleration, this engine performs all calculations in software, delivering a distinct retro aesthetic. The raycasting approach allows for efficient rendering of 2.5D environments while maintaining the feel of a true first-person shooter. For developers interested in retro techniques, <a href="https://lodev.org/cgtutor/raycasting.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">raycasting</a> remains a fascinating study in optimization and simplicity.</p>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Stanislas implemented the raycasting logic from scratch, ensuring precise control over every pixel rendered on screen. This level of customization is nearly impossible with modern engines that abstract away such details. The result is a game that feels authentically vintage, complete with the limitations and quirks of the era.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Handcrafted Art: From Blender to Pixel Perfection</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Every asset in Catlantean 3D was created manually, starting with 3D models built in <a href="https://www.blender.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Blender</a>. Stanislas used Blender to pre-render sprites and textures, which were then meticulously edited in <a href="https://www.aseprite.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Aseprite</a>, a pixel art tool beloved by retro developers. The workflow involved exporting models as sprites, coloring them within a strict 256-color palette, and refining details by hand. This painstaking process ensured consistency and authenticity in the game’s visual style.</p>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">The use of Aseprite highlights the importance of specialized tools in retro game development. Unlike modern pipelines that rely on automated asset generation, this approach prioritizes control and artistic intent. For developers looking to revive classic styles, combining Blender’s modeling power with Aseprite’s precision offers a powerful handcrafted workflow.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Procedural Textures and Pixel Art: The Devil’s in the Details</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Beyond static sprites, Catlantean 3D incorporates procedural textures to add depth and variety to its environments. Stanislas designed these textures manually, using algorithms to generate patterns that mimic the look of hand-painted surfaces. The pixel art, meanwhile, was crafted entirely in Aseprite, with each frame of animation drawn pixel by pixel. This level of detail is rare in modern games, where assets are often outsourced or generated procedurally.</p>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">The result is a game that feels alive and tactile, with textures and animations that reflect human creativity rather than algorithmic repetition. For developers seeking to break free from AI-generated assets, this project serves as a compelling case study in manual craftsmanship.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Why Handcrafted Games Matter in the Age of AI</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">In an era where AI tools can generate textures, models, and even entire game levels, projects like Catlantean 3D stand out for their authenticity. By avoiding AI generation entirely, Stanislas preserved the unique vision and personal touch that defines indie game development. This approach fosters creativity and innovation, proving that constraints can lead to unexpected brilliance.</p>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">For developers tired of relying on AI pipelines, Catlantean 3D offers a refreshing alternative. It’s a reminder that sometimes, the best way to build something extraordinary is to roll up your sleeves and do it yourself. Whether you’re a solo developer or part of a team, the lessons from this project are invaluable for anyone seeking to create games with soul.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold mb-4">Conclusion</h2>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">Catlantean 3D is more than just a retro FPS—it’s a testament to the power of handcrafted development. By building the game entirely by hand, Stanislas created something truly unique, blending technical skill with artistic vision. For developers looking to escape the AI-driven status quo, this project is both an inspiration and a challenge.</p>
          <p className="mt-2 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">If you’re eager to dive deeper into the techniques behind Catlantean 3D, read the full story at <a href="https://staniks.github.io/articles/catlantean-3d-blog-1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">How One Dev Hand-Crafted a Retro FPS Cat Game</a>. Whether you’re a retro enthusiast or a modern developer seeking new perspectives, there’s plenty to learn from this remarkable project.</p>
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
