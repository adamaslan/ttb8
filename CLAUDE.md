# ttb8 — TastyTechBytes

A React Router v7 SSR blog/content site deployed on Netlify with Clerk authentication and Three.js 3D components.

## Project Map

```
app/
  routes/       # ~30 article routes + _index.tsx, about.tsx, admin1.tsx
  components/   # Shared: Navbar, Cloud (Three.js), chicken
  root.tsx      # App shell with Clerk provider
  routes.ts     # Central route registry
server/         # Express SSR adapter
netlify/        # Netlify Functions adapter + build prep
public/         # Static assets
```

## Always Apply

- **Stack**: React 19 + React Router v7 + TypeScript + TailwindCSS v4 + Three.js
- **Auth**: Clerk (`@clerk/react-router`) — domain: `tastytechbytes.com`
- **Deploy**: Netlify (SSR via Netlify Functions, `publish = "build/client"`)
- **No test suite** — run `npm run typecheck` before committing
- **Adding a route**: create `app/routes/<slug>.tsx` AND register it in [app/routes.ts](app/routes.ts)
- **3D components** use `@react-three/fiber` + `@react-three/drei`; keep them in `app/components/`

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Type check | `npm run typecheck` |
| Production build | `npm run build` |
| Local preview | `npm start` (requires `netlify serve`) |

## Skills & Guides

- New article route → `.claude/skills/add-article-route.md`
- Git commit workflow → `.claude/skills/git-commit.md`
- Pull request → `.claude/skills/create-pull-request.md`
- Deploy & Netlify details → `docs/agent-guides/deployment.md`
- Clerk auth details → `docs/agent-guides/auth.md`
- Route architecture → `docs/agent-guides/routing.md`
