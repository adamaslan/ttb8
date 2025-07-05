import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/_index.tsx"),

  route("how-to-invest-in-whisky", "./routes/how-to-invest-in-whisky.tsx"),
  route("how-to-use-the-pie-menu-in-blender", "./routes/how-to-use-the-pie-menu-in-blender.tsx"),
  route("three-essential-webstorm-shortcuts", "./routes/three-essential-webstorm-shortcuts.tsx"),
  route("weirdinternetfacts", "./routes/weirdinternetfacts.tsx"),
  route("nab-2023-audio-video-gear", "./routes/nab-2023-audio-video-gear.tsx"),
  route("threekeys-to-getting-a-frontend-or-fullstackjob", "./routes/threekeys-to-getting-a-frontend-or-fullstackjob.tsx"),
  route("vuejs-independant-javascript-framework", "./routes/vuejs-independant-javascript-framework.tsx"),
  route("astro-the-most-innovative-javascript-framework", "./routes/astro-the-most-innovative-javascript-framework.tsx"),
  route("the-art-of-the-clean-install", "./routes/the-art-of-the-clean-install.tsx"),
  route("what-is-rag", "./routes/what-is-rag.tsx"),
  route("what-are-the-best-free-text-to-speech-tools", "./routes/what-are-the-best-free-text-to-speech-tools.tsx"),
  route("dspy101", "./routes/dspy101.tsx"),
  route("databricks-dspy-jetblue-ai-chatbot", "./routes/databricks-dspy-jetblue-ai-chatbot.tsx"),
  route("5-ways-to-enhance-rag-efficiency-with-dspy", "./routes/5-ways-to-enhance-rag-efficiency-with-dspy.tsx"),
  ] satisfies RouteConfig;
