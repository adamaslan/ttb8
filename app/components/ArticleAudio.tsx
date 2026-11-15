import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { mountArticleListener } from "./article-listener.js";
const articlePaths = new Set(["how-to-invest-in-whisky", "how-to-use-the-pie-menu-in-blender", "dextego-10-things-ai-sales-coaching", "weirdinternetfacts", "nab-2023-audio-video-gear", "threekeys-to-getting-a-frontend-or-fullstackjob", "vuejs-independant-javascript-framework", "astro-the-most-innovative-javascript-framework", "the-art-of-the-clean-install", "what-is-rag", "what-are-the-best-free-text-to-speech-tools", "10-essential-pytorch-elements-in-a-rnn", "10_Essential_PyTorch_Elements_in_LSTMs", "10_Ways_to_Optimize_SQLite_Before_Migrating_to_PostgreSQL", "introduction-to-neural-networks", "dspy101", "create-your-own-huggingface-space-easy", "the-ultimate-guide-to-flyers-in-blender-with-the-node-editor", "using-airpods-and-audacity-hack", "threejs-and-web3", "databricks-dspy-jetblue-ai-chatbot", "5-ways-ai-can-help-farmland-restoration", "5-ways-to-enhance-rag-efficiency-with-dspy", "snapstate-persistent-state-for-ai-agent-workflows", "guides/continuous-pentesting-ci", "continuous-pentesting-ci-guide", "pensar-continuous-pentesting-ci", "first-pentest-free-tools-intro", "easy-domain-verification-with-google", "lies-about-javascript", "ibm-anderon-quantum-foundry", "walking-boosts-creativity-study", "ipi-signal-report", "sndk-signal-report", "cloudflare-flagship-simplifies-feature-flags", "cloudflare-flagship-feature-flags-made-easy", "lastfm-goes-independent-what-developers-need-to-know", "robinhood-agentic-trading", "robinhood-agentic-trading-ai-agents-get-market-access", "robinhood-agentic-trading-ai-agents-market-access", "robinhood-ai-agent-trading-mcp-developers", "vscode-bug-github-dev-token-stealing-one-click", "vscode-github-dev-oauth-token-stealing-one-click", "vscode-github-dev-oauth-token-stealing-one-click-v2", "snapstate-persistent-state-for-ai-agents", "snapstate-persistent-state-ai-agents-workflow-memory", "how-solo-dev-built-1990s-fps-cat-game-without-ai", "handcrafted-magic-behind-catlantean-3d-no-ai", "how-one-dev-built-catlantean-3d-by-hand", "how-solo-dev-built-1990s-fps-cat-game-entirely-by-hand", "lore-open-source-version-control-scalability", "guides/three-webstorm-shortcuts", "three-essential-webstorm-shortcuts", "jev-typed-decisions-for-software", "smartbidder-diageo", "structured-outputs-json-schema-llms"]);
export default function ArticleAudio({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/^\/|\/$/g, "");
    if (!(articlePaths.has(path) || /^articles\/[^/]+$/.test(path)) || !container.current) return;
    const root = container.current;
    let dispose: (() => void) | undefined;
    let mountedSource: HTMLElement | null = null;
    let panel: Element | null = null;
    const reconcile = () => {
      const source = root.querySelector<HTMLElement>('main') || root;
      if (mountedSource === source && panel?.isConnected && source.contains(panel)) return;
      dispose?.();
      dispose = undefined;
      mountedSource = null;
      panel = null;
      // Do not attach to an empty streaming/loading shell. Observe until prose arrives.
      if (!source.querySelector('p,h1,h2,li,blockquote,table')) return;
      dispose = mountArticleListener(source, true);
      mountedSource = source;
      panel = source.querySelector('[data-article-listener]');
    };
    // Same-path data/streaming replacement can detach the old main or its player.
    const observer = new MutationObserver(reconcile);
    observer.observe(root, { childList: true, subtree: true });
    reconcile();
    return () => { observer.disconnect(); dispose?.(); };
  }, [pathname]);
  return <div ref={container}>{children}</div>;
}
