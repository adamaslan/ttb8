import { Link } from "react-router";
import analytics from "/analytics1.jpeg";
import banner from "/old-comp1.jpeg";
import studio from "/studio.jpg";
import burden from "/js-burden.jpeg";
import box from "/boxchicken2.jpeg";
import graph4 from "/graph4.jpeg";
import blender1 from "/blender1.jpeg";
import airpods from "/airpods.jpeg";
import js1 from "/js1.jpeg";
import soundguy1 from "/soundsguy1.jpeg";
import webstorm1 from "/webstorm1.jpeg";
import cloud from "/cloud1.jpeg"
import cask from "/cask1.jpeg";
import letters1 from "/letters1.png";
import databricks from "/databricks.png";
import dspyprompt from "/dspyprompt.png";
import huggingface1 from "/huggingface1.png";
import fish1 from "/fish1.png";
import text2speech from "/text2speech.png";
import restorationImage from "/restoration.png";

export const meta = () => {
  return [{ property: "og:image", content: box }];
};

export default function Art2() {

  return (
    <main className=" items-left justify-left mx-4 min-h-screen bg-white lg:mx-36 md:mx-16">
    
    <h1 className="text-left text-xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl ">
        <span className="block uppercase text-blue-500 drop-shadow-md">
          Tasty Tech Bytes
        </span>
      </h1>

      <p className="text-left text-xl font-extrabold tracking-tight sm:text-xl lg:text-4xl">
        {" "}
        Keeping it Tasty in 2025
      </p>
      
      {/* elaborate div section */}

      <div className="grid lg:grid-cols-4 h-1/4 gap-4"> 
      <div className="col-span-1  h-1/4  ">
 
      <Link to="/how-to-invest-in-whisky">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-yellow-500 p-1 text-lg font-bold tracking-tight text-white">
            Drink World - Helpful
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={cask}
            alt="casks"
          />
          <h1 className="pb-4 text-left text-lg font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
          3 Ways to Invest in Whiskey
          </h1>

        </div>
      </Link>
      <Link to="/how-to-use-the-pie-menu-in-blender">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
        <div className="rounded-full bg-purple-900 p-1 text-lg font-bold tracking-tight text-white">
            3D World - Helpful
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={blender1}
            alt="computer and graphs"
          />
          <h1 className="pb-4 text-left text-lg font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            The Pie Menu Rocks in Blender
          </h1>

        </div>
      </Link>
      </div>
      
       <div className="lg:col-span-2  lg:h-1/4  "><Link to="/three-essential-webstorm-shortcuts">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-blue-500 p-1 text-lg font-bold tracking-tight text-white">
            Software - Webstorm
          </div>
          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={webstorm1}
            alt="computer and graphs"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            The Three WebStorm Shortcuts to Rule Them All
          </h1>{" "}
        </div>
      </Link></div>

        <div className="col-span-1 h-1/4 "> <Link to="/weirdinternetfacts">

        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-green-400 p-1 text-lg font-bold tracking-tight text-white">
            Code World - Random
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={banner}
            alt="computer and graphs"
          />
          <h1 className="pb-4 text-left text-lg font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            4 Weird Things about the Internet
          </h1>
        </div>
      </Link>
      
      
     
      <Link to="/nab-2023-audio-video-gear">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-red-900 p-1 text-lg font-bold tracking-tight text-white">
            Code World - Helpful
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={soundguy1}
            alt="computer and graphs"
          />
          <h1 className="pb-4 text-left text-lg font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            Highlights from NAB 2023
          </h1>

        </div>
      </Link>
          </div> 


        </div>


{/* smaller div section */}


        <div className="grid grid-cols-4 h-1/4 gap-4">
          
           <div className="col-span-1 row-span-1 "> <Link to="/threekeys-to-getting-a-frontend-or-fullstackjob">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-red-900 p-1 text-lg font-bold tracking-tight text-white">
            Code World - Helpful
          </div>
          <img
            className="m-2 h-auto flex-col rounded-full shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            src={studio}
            alt="Studio by Warren Hansen"
          />
          <h1 className="pb-3 text-left text-lg font-bold tracking-tight shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 sm:text-3xl lg:text-4xl">
            The 3 Keys To Getting Your Dream Frontend or Full Stack Engineer Job
          </h1>{" "}
        </div>
      </Link></div> 
           
           <div className="col-span-1 "> <Link to="/vuejs-independant-javascript-framework">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-red-900 p-1 text-lg font-bold tracking-tight text-white">
            Code World - Helpful
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={burden}
            alt="computer and graphs"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            VueJS as the Most Indie Yet Established Javascript Framework
          </h1>
        </div>
      </Link></div>
            <div className="col-span-1  ">
      <Link to="/astro-the-most-innovative-javascript-framework.tsx">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-red-900 p-1 text-lg font-bold tracking-tight text-white">
            Code World - Helpful
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={box}
            alt="computer and graphs"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            Astro.js as the Most Innovative and Modern Javascript Framework
          </h1>
        </div>
      </Link>
      </div>
             <div className="col-span-1  ">
     
     <Link to="/the-art-of-the-clean-install">
       <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
         <div className="rounded-full bg-red-900 p-1 text-lg font-bold tracking-tight text-white">
           Code World - Helpful
         </div>

         <img
           className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
           src={graph4}
           alt="computer and graphs"
         />
         <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
           The Art of the Clean Install
         </h1>

       </div>
     </Link></div> 
     </div>

    
     {/* Bigger articles */}

     
     <Link to="/what-is-rag">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-purple-400 p-1 text-lg font-bold tracking-tight text-white">
            AI Tips
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={fish1}
            alt="fish"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">RAG 101 Tutorial: All you need to know about RAG</h1>
        </div>
      </Link>   

      <Link to="/what-are-the-best-free-text-to-speech-tools">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-purple-400 p-1 text-lg font-bold tracking-tight text-white">
            AI Tips
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={text2speech}
            alt="text to speech"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            What are the Best Free Text-to-Speech Tools? </h1>
        </div>
      </Link>   

     <Link to="/dspy101">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-purple-400 p-1 text-lg font-bold tracking-tight text-white">
            AI Tips
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={dspyprompt}
            alt="dspyprompt"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">DSPy 101 Tutorial: Prompting Guide</h1>
        </div>
      </Link>   

     <Link to="/databricks-dspy-jetblue-ai-chatbot">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-purple-400 p-1 text-lg font-bold tracking-tight text-white">
            AI Tips
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={databricks}
            alt="databricks"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl "> JetBlue Optimizes Databricks LLM Pipelines with DSPy </h1>
        </div>
      </Link>   

     <Link to="/5-ways-to-enhance-rag-efficiency-with-dspy">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-purple-400 p-1 text-lg font-bold tracking-tight text-white">
            AI Tips
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={letters1}
            alt="letters"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl "> 5 ways to enhance RAG efficiency with DSPy   </h1>
        </div>
      </Link>
      
      <Link to="/threejs-and-web3">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-green-800 p-1 text-lg font-bold tracking-tight text-white">
            Code Art - ThreeJS
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={cloud}
            alt="clouds"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            ThreeJS, the old Web3?
          </h1>
        </div>
      </Link>

      <Link to="/easy-domain-verification-with-google">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
        <div className="rounded-full bg-red-900 p-1 text-lg font-bold tracking-tight text-white">
           Code World - Helpful
         </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={analytics}
            alt="analytics chart"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
          The Easy Way to Verify Domain Ownership with Google
          </h1>
        </div>
      </Link>
      <Link to="/lies-about-javascript">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
        <div className="rounded-full bg-red-900 p-1 text-lg font-bold tracking-tight text-white">
           Code World - Helpful
         </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={js1}
            alt="javascript chart"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
          Sweet Little JavaScript Lies About Javascript          </h1>
        </div>
      </Link>
      <Link to="/create-your-own-huggingface-space-easy">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-red-900 p-1 text-lg font-bold tracking-tight text-white">
            Code World - Helpful
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={huggingface1}
            alt="emoji"
          />
          <h1 className="pb-4 text-left text-lg font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
          The easy way to publish on Hugging Face Spaces
          </h1>

        </div>
      </Link>
      <Link to="/5-ways-ai-can-help-farmland-restoration">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-green-700 p-1 text-lg font-bold tracking-tight text-white">
            AI & Sustainability
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={restorationImage}
            alt="Farmland restoration"
          />
          <h1 className="pb-4 text-left text-xl font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
             5 Ways AI Can Help Farmland Restoration
          </h1>
        </div>
      </Link>
      {/* New Link for Models Table */}
      <Link to="/models-table">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-indigo-600 p-1 text-lg font-bold tracking-tight text-white">
            AI Models
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={databricks} 
            alt="AI models table"
          />
          <h1 className="pb-4 text-left text-lg font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            View Registered AI Models
          </h1>

        </div>
      </Link>

      <Link to="/using-airpods-and-audacity-hack">
        <div className="transition-shadow duration-300 ease-in-out hover:bg-gray-100">
          <div className="rounded-full bg-pink-600 p-1 text-lg font-bold tracking-tight text-white">
            Tech World - Helpful
          </div>

          <img
            className="items-left justify-left m-2 h-auto max-w-full flex-col rounded-full"
            src={airpods}
            alt="computer and graphs"
          />
          <h1 className="pb-4 text-left text-lg font-bold tracking-tight sm:text-3xl lg:pb-12 lg:text-4xl ">
            AirPods Audacity: How to make AirPods(or any other bluetooth audio) work with Audacity 2023
          </h1>

        </div>
      </Link>
    </main>
  );
}