import { Link, data } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { getLatestStaticArticle } from "~/lib/articles-static.server";

export async function loader(_args: LoaderFunctionArgs) {
  const dailyArticle = getLatestStaticArticle();
  return data(
    { dailyArticle },
    {
      headers: {
        "Cache-Control": "public, max-age=600, stale-while-revalidate=1800",
      },
    }
  );
}
import analytics from "/analytics1.jpeg";
import banner from "/old-comp1.jpeg";
import studio from "/studio.jpg";
import burden from "/js-burden.jpeg";
import box from "/boxchicken2.jpeg";
import graph4 from "/graph4.jpeg";
import js1 from "/js1.jpeg";
import blender1 from "/blender1.jpeg";
import airpods from "/airpods.jpeg";
import soundguy1 from "/soundsguy1.jpeg";
import webstorm1 from "/webstorm1.jpeg";
import dextego1 from "/dextego1.png";
import cloud from "/cloud1.jpeg"
import cask from "/cask1.jpeg";
import letters1 from "/letters1.png";
import databricks from "/databricks.png";
import dspyprompt from "/dspyprompt.png";
import huggingface1 from "/huggingface1.png";
import fish1 from "/fish1.png";
import text2speech from "/text2speech.png";
import restorationImage from "/restoration.png";
import pipe1 from "/pipeline1.png";
import NeuralNetworks from "/intro_to_Neural_Network.png";
import pytorch_elements_in_rnn from "/10_pytorch_elements_in_rnn.png";
import pytorch_elements_in_lstm from "/10_pytorch_elements_in_lstm.png";
import sqlite_to_postgres from "/sqlite_to_postgres.png";
import snapstatePersistentStateForAiAgentWorkflows from "/snapstate-persistent-state-for-ai-agent-workflows.jpg";
import continuousPentestingCiGuide from "/continuous-pentesting-ci-guide.png";
import firstPentestFreeToolsIntro from "/first-pentest-free-tools-intro.jpg";
import ibmAnderonQuantumFoundry from "/ibm-anderon-quantum-foundry.png";
import walkingBoostsCreativityStudy from "/walking-boosts-creativity-study.png";

export const meta = () => {
  return [{ property: "og:image", content: box }];
};

function AdSlot({ id }: { id: string }) {
  return (
    <div
      data-ad-slot={id}
      className="flex h-[250px] w-[300px] items-center justify-center rounded-lg border border-dashed border-gray-700 bg-gray-900 text-xs text-gray-500"
    >
      Ad · {id}
    </div>
  );
}
   {/* small little tabs with small photos to the right */}
export default function Art2({ loaderData }: { loaderData: { dailyArticle: ReturnType<typeof getLatestStaticArticle> } }) {
  const { dailyArticle } = loaderData;

  return (

    <main className="mx-4 min-h-screen bg-black pb-16 lg:mx-36 md:mx-16">

      {dailyArticle && (
        <div className="mb-6 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 p-4 text-white">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-bold uppercase tracking-widest">Daily Financial Tech Article</p>
            <Link
              to="/correlations-archive"
              className="text-xs font-bold uppercase tracking-wider underline opacity-90 hover:opacity-100"
            >
              View Archive →
            </Link>
          </div>
          <Link
            to={`/articles/${dailyArticle.slug}`}
            className="text-xl font-extrabold hover:underline lg:text-2xl"
          >
            {dailyArticle.title}
          </Link>
          <p className="mt-1 text-sm opacity-90">{dailyArticle.summary}</p>
        </div>
      )}

      <h1 className="text-left text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
        <span className="block uppercase text-blue-400 drop-shadow-md">
          Tasty Tech Bytes
        </span>
      </h1>

      <p className="text-left text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-4xl">
        {" "}
        Covering Tech in NYC and Beyond
      </p>
      
      {/* Part 1 — Hero rail: 5 cards (2 left, big middle, 2 right). See docs/agent-guides/homepage-grid.md */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
        {/* L1 */}
        <Link
          to="/how-to-invest-in-whisky"
          className="md:col-start-1 md:row-start-1"
        >
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-yellow-500 p-1 text-sm font-bold tracking-tight text-white">
              Drink World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={cask} alt="whiskey casks" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              3 Ways to Invest in Whiskey
            </h2>
          </article>
        </Link>

        {/* L2 */}
        <Link
          to="/how-to-use-the-pie-menu-in-blender"
          className="md:col-start-1 md:row-start-2"
        >
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-purple-900 p-1 text-sm font-bold tracking-tight text-white">
              3D World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={blender1} alt="Blender 3D interface" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              The Pie Menu Rocks in Blender
            </h2>
          </article>
        </Link>

        {/* Big middle */}
        <Link
          to="/dextego-10-things-ai-sales-coaching"
          className="md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-1"
        >
          <article className="mx-auto flex h-full w-4/5 flex-col transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-blue-500 p-1 text-sm font-bold tracking-tight text-white">
              AI Sales
            </div>
            <img className="m-2 h-full max-w-full flex-1 rounded-2xl object-cover" src={dextego1} alt="Dextego AI sales coaching" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
              10 Things You Need to Know About Dextego: The Future of AI Sales Coaching
            </h2>
          </article>
        </Link>

        {/* R1 */}
        <Link
          to="/continuous-pentesting-ci-guide"
          className="md:col-start-4 md:row-start-1"
        >
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-600 p-1 text-sm font-bold tracking-tight text-white">
              AI News
            </div>
            <img
              className="m-2 h-auto max-w-full rounded-2xl"
              src={continuousPentestingCiGuide}
              alt="Set Up Continuous Pentesting in Your CI"
            />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              Pensar Tutorial: A Guide to Setting Up Continuous Pentesting in 10 Minutes with Pensar's CI Integration
            </h2>
          </article>
        </Link>

        {/* R2 */}
        <Link
          to="/snapstate-persistent-state-for-ai-agent-workflows"
          className="md:col-start-4 md:row-start-2"
        >
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
              AI News
            </div>
            <img
              className="m-2 h-auto max-w-full rounded-2xl"
              src={snapstatePersistentStateForAiAgentWorkflows}
              alt="SnapState: persistent state for AI agent workflows"
            />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              SnapState: Keeping AI Agent Workflows Alive Between Sessions
            </h2>
          </article>
        </Link>
      </section>

      {/* Part 2 — Quick row: 4 uniform cards. See docs/agent-guides/homepage-grid.md */}
      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link to="/threekeys-to-getting-a-frontend-or-fullstackjob">
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
              Code World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={studio} alt="Studio by Warren Hansen" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              The 3 Keys To Getting Your Dream Frontend or Full Stack Engineer Job
            </h2>
          </article>
        </Link>

        <Link to="/vuejs-independant-javascript-framework">
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
              Code World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={burden} alt="JavaScript framework illustration" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              VueJS as the Most Indie Yet Established Javascript Framework
            </h2>
          </article>
        </Link>

        <Link to="/astro-the-most-innovative-javascript-framework">
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
              Code World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={box} alt="Astro.js" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              Astro.js as the Most Innovative and Modern Javascript Framework
            </h2>
          </article>
        </Link>

        <Link to="/the-art-of-the-clean-install">
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
              Code World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={graph4} alt="clean install graphic" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              The Art of the Clean Install
            </h2>
          </article>
        </Link>
      </section>

      {/* Part 3 — Long feed + ad rail. See docs/agent-guides/homepage-grid.md */}
      <section className="mt-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link to="/walking-boosts-creativity-study">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={walkingBoostsCreativityStudy} alt="Take a Walk Before You Brainstorm: The Study Behind the Old Advice" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Take a Walk Before You Brainstorm: The Study Behind the Old Advice
              </h2>
            </article>
          </Link>

          <Link to="/ibm-anderon-quantum-foundry">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-600 p-1 text-sm font-bold tracking-tight text-white">
                AI News
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={ibmAnderonQuantumFoundry} alt="IBM's Anderon Quantum Foundry Is a $2B Bet on 300mm Qubits" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                IBM's Anderon Quantum Foundry Is a $2B Bet on 300mm Qubits
              </h2>
            </article>
          </Link>

          <Link to="/first-pentest-free-tools-intro">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-600 p-1 text-sm font-bold tracking-tight text-white">
                AI News
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={firstPentestFreeToolsIntro} alt="Your First Pentest: A Practical Intro Using Free Tools" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Your First Pentest: A Practical Intro Using Free Tools
              </h2>
            </article>
          </Link>

          <Link to="/the-ultimate-guide-to-flyers-in-blender-with-the-node-editor">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-900 p-1 text-sm font-bold tracking-tight text-white">
                3D World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={pipe1} alt="Blender node editor pipeline" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The Ultimate Guide to Flyers in Blender with the Node Editor
              </h2>
            </article>
          </Link>

          <Link to="/what-is-rag">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={fish1} alt="RAG illustration" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                RAG 101 Tutorial: All you need to know about RAG
              </h2>
            </article>
          </Link>

          <Link to="/what-are-the-best-free-text-to-speech-tools">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={text2speech} alt="text-to-speech tools" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                What are the Best Free Text-to-Speech Tools?
              </h2>
            </article>
          </Link>

          <Link to="/dspy101">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={dspyprompt} alt="DSPy prompting" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                DSPy 101 Tutorial: Prompting Guide
              </h2>
            </article>
          </Link>

          <Link to="/databricks-dspy-jetblue-ai-chatbot">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={databricks} alt="Databricks DSPy JetBlue" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                JetBlue Optimizes Databricks LLM Pipelines with DSPy
              </h2>
            </article>
          </Link>

          <Link to="/5-ways-to-enhance-rag-efficiency-with-dspy">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={letters1} alt="RAG efficiency" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                5 ways to enhance RAG efficiency with DSPy
              </h2>
            </article>
          </Link>

          {/* Mobile ad slot 1 — shown on mobile/md, hidden on lg where the rail takes over */}
          <div className="lg:hidden md:col-span-2 flex justify-center py-2">
            <AdSlot id="mobile-1" />
          </div>

          <Link to="/weirdinternetfacts">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-400 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Random
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={banner} alt="vintage computer banner" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                4 Weird Things about the Internet
              </h2>
            </article>
          </Link>

          <Link to="/threejs-and-web3">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-800 p-1 text-sm font-bold tracking-tight text-white">
                Code Art - ThreeJS
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={cloud} alt="ThreeJS clouds" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                ThreeJS, the old Web3?
              </h2>
            </article>
          </Link>

          <Link to="/easy-domain-verification-with-google">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={analytics} alt="analytics chart" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The Easy Way to Verify Domain Ownership with Google
              </h2>
            </article>
          </Link>

          <Link to="/lies-about-javascript">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={js1} alt="JavaScript" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Sweet Little JavaScript Lies About Javascript
              </h2>
            </article>
          </Link>

          {/* Mobile ad slot 2 */}
          <div className="lg:hidden md:col-span-2 flex justify-center py-2">
            <AdSlot id="mobile-2" />
          </div>

          <Link to="/create-your-own-huggingface-space-easy">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={huggingface1} alt="Hugging Face Spaces" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The easy way to publish on Hugging Face Spaces
              </h2>
            </article>
          </Link>

          <Link to="/nab-2023-audio-video-gear">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={soundguy1} alt="NAB 2023 audio video" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Highlights from NAB 2023
              </h2>
            </article>
          </Link>

          <Link to="/using-airpods-and-audacity-hack">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={airpods} alt="AirPods and Audacity" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                AirPods Audacity: How to make AirPods (or any bluetooth audio) work with Audacity
              </h2>
            </article>
          </Link>

          <Link to="/10-essential-pytorch-elements-in-a-rnn">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl object-cover" src={pytorch_elements_in_rnn} alt="PyTorch RNN elements" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The 10 Essential PyTorch Elements in a RNN
              </h2>
            </article>
          </Link>

          <Link to="/introduction-to-neural-networks">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={NeuralNetworks} alt="neural network diagram" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Introduction to Neural Networks
              </h2>
            </article>
          </Link>

          <Link to="/10_Essential_PyTorch_Elements_in_LSTMs">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={pytorch_elements_in_lstm} alt="PyTorch LSTM elements" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                10 Essential PyTorch Elements in LSTMs
              </h2>
            </article>
          </Link>

          <Link to="/10_Ways_to_Optimize_SQLite_Before_Migrating_to_PostgreSQL">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={sqlite_to_postgres} alt="SQLite to PostgreSQL" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                10 Ways to Optimize SQLite Before Migrating to PostgreSQL
              </h2>
            </article>
          </Link>

          <Link to="/5-ways-ai-can-help-farmland-restoration">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={restorationImage} alt="farmland restoration" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                5 Ways AI Can Help Farmland Restoration
              </h2>
            </article>
          </Link>

          <Link to="/three-essential-webstorm-shortcuts">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-blue-500 p-1 text-sm font-bold tracking-tight text-white">
                Software - Webstorm
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={webstorm1} alt="WebStorm IDE" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The Three WebStorm Shortcuts to Rule Them All
              </h2>
            </article>
          </Link>
        </div>

        {/* Ad rail — visible on lg+, sticky as the feed scrolls */}
        <aside className="hidden lg:block">
          <div className="sticky top-4 space-y-4">
            <AdSlot id="rail-top" />
            <AdSlot id="rail-mid" />
          </div>
        </aside>
      </section>
</main>
     
  );
}
