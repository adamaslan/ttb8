import type { MetaFunction } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: "Ai Articles" },
    { name: "description", content: "List of Ai Articles for the Publication." },
  ];
};

export default function AiArticles() {
  const articles = [
    {
      title: "5 Ways AI Can Help Farmland Restoration",
      description: "Explore how artificial intelligence can play a crucial role in restoring farmlands and promoting sustainable agriculture practices.",
      link: "/5-ways-ai-can-help-farmland-restoration",
      image: "/restoration.png"
    },
    {
      title: "5 Ways to Enhance RAG Efficiency with DSPy",
      description: "Discover five effective strategies to improve the efficiency of Retrieval-Augmented Generation (RAG) systems using the DSPy framework.",
      link: "/5-ways-to-enhance-rag-efficiency-with-dspy",
      image: "/dspyprompt.png"
    },
    {
      title: "Databricks, DSPy, JetBlue AI Chatbot",
      description: "An in-depth look at the integration of Databricks, DSPy, and the development of an AI chatbot for JetBlue.",
      link: "/databricks-dspy-jetblue-ai-chatbot",
      image: "/databricks.png"
    },
    {
      title: "DSPy 101",
      description: "An introductory guide to DSPy, covering its core concepts and how it simplifies the development of advanced language models.",
      link: "/dspy101",
      image: "/dspyprompt.png"
    },
    {
      title: "What is RAG?",
      description: "An explanation of what Retrieval-Augmented Generation (RAG) is and how it enhances the capabilities of language models.",
      link: "/what-is-rag",
      image: "/graph4.jpeg"
    },
    {
      title: "Create Your Own HuggingFace Space Easy",
      description: "A step-by-step guide to creating your own space on HuggingFace for sharing and deploying machine learning models.",
      link: "/create-your-own-huggingface-space-easy",
      image: "/huggingface1.png"
    },
    {
      title: "Astro The Most Innovative Javascript Framework",
      description: "An exploration of Astro, highlighting why it stands out as one of the most innovative JavaScript frameworks for building fast content-focused websites.",
      link: "/astro-the-most-innovative-javascript-framework",
      image: "/js1.jpeg"
    },
    {
      title: "Vuejs Independant Javascript Framework",
      description: "A look into Vue.js as an independent JavaScript framework, focusing on its flexibility and ease of integration into various projects.",
      link: "/vuejs-independant-javascript-framework",
      image: "/js1.jpeg"
    },
    {
      title: "Lies About Javascript",
      description: "Debunking common myths and misconceptions about JavaScript, providing clarity on its true capabilities and limitations.",
      link: "/lies-about-javascript",
      image: "/js-burden.jpeg"
    },
    {
      title: "Three Essential Webstorm Shortcuts",
      description: "Boost your productivity with these three essential Webstorm shortcuts that every developer should know.",
      link: "/three-essential-webstorm-shortcuts",
      image: "/webstorm1.jpeg"
    },
    {
      title: "Three Keys To Getting A Frontend Or Fullstack Job",
      description: "Unlock the secrets to landing a frontend or fullstack development job with these three crucial strategies.",
      link: "/threekeys-to-getting-a-frontend-or-fullstackjob",
      image: "/letters1.png"
    },
    {
      title: "Easy Domain Verification With Google",
      description: "A simple guide to verifying your domain with Google, essential for using various Google services and tools.",
      link: "/easy-domain-verification-with-google",
      image: "/analytics1.jpeg"
    },
    {
      title: "What Are The Best Free Text To Speech Tools",
      description: "Discover the top free text-to-speech tools available, perfect for converting written content into natural-sounding audio.",
      link: "/what-are-the-best-free-text-to-speech-tools",
      image: "/text2speech.png"
    },
    {
      title: "How To Use The Pie Menu In Blender",
      description: "Master the Pie Menu in Blender to speed up your workflow and access tools more efficiently.",
      link: "/how-to-use-the-pie-menu-in-blender",
      image: "/blender1.jpeg"
    },
    {
      title: "Using Airpods And Audacity Hack",
      description: "A clever hack to use AirPods with Audacity for improved audio recording and editing.",
      link: "/using-airpods-and-audacity-hack",
      image: "/airpods.jpeg"
    },
    {
      title: "NAB 2023 Audio Video Gear",
      description: "A comprehensive review of the latest audio and video gear showcased at NAB 2023, highlighting innovations and must-have equipment.",
      link: "/nab-2023-audio-video-gear",
      image: "/soundsguy1.jpeg"
    },
    {
      title: "Smartbidder Diageo",
      description: "An analysis of Smartbidder's collaboration with Diageo, focusing on how technology optimizes bidding strategies in the beverage industry.",
      link: "/smartbidder-diageo",
      image: "/old-comp1.jpeg"
    },
    {
      title: "The Art Of The Clean Install",
      description: "A guide to performing a clean installation of your operating system, ensuring optimal performance and a fresh start.",
      link: "/the-art-of-the-clean-install",
      image: "/old-comp1.jpeg"
    },
    {
      title: "Threejs And Web3",
      description: "Exploring the exciting possibilities of combining Three.js for 3D graphics with Web3 technologies for decentralized applications.",
      link: "/threejs-and-web3",
      image: "/studio.jpg"
    },
    {
      title: "How To Invest In Whisky",
      description: "A guide to investing in whisky, covering market trends, valuation, and strategies for building a profitable collection.",
      link: "/how-to-invest-in-whisky",
      image: "/cask1.jpeg"
    },
    {
      title: "Weirdinternetfacts",
      description: "Dive into a collection of bizarre and fascinating facts from the internet, guaranteed to surprise and entertain.",
      link: "/weirdinternetfacts",
      image: "/fish1.png"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <div key={article.link} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <a href={article.link} className="block">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}