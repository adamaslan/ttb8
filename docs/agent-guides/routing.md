# Routing Architecture

## Overview

ttb8 uses **React Router v7** in framework mode (SSR). Routes are file-based but require explicit registration — there is no automatic file-system routing.

## Route Registry

[app/routes.ts](../../app/routes.ts) is the single source of truth. Every route must be declared here:

```ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("<slug>", "./routes/<slug>.tsx"),
  // ...
] satisfies RouteConfig;
```

**Common mistake**: creating a file in `app/routes/` without adding the `route()` entry — the URL returns 404.

## Route File Conventions

| File | URL | Notes |
|------|-----|-------|
| `_index.tsx` | `/` | Homepage with article index |
| `about.tsx` | `/about` | Static about page |
| `admin1.tsx` | `/admin1` | Admin — not in route registry (intentionally private) |
| `ai-articles.tsx` | Not registered | Draft/unreachable |
| `<slug>.tsx` | `/<slug>` | Article pages |

## SSR Behavior

- All routes render server-side via the Express adapter in `server/app.ts`
- Netlify Functions wraps the Express server for production
- Data loaders (`export function loader()`) run on the server
- Client-side navigation uses React Router's client router after hydration

## Three.js Routes

The `Cloud` component (`app/components/Cloud.tsx`) uses `@react-three/fiber`. When used in routes:
- Wrap canvas in a fixed-height container to avoid layout shifts
- Three.js renders are client-only — use `ClientOnly` pattern or dynamic imports if SSR causes issues
