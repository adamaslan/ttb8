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
- **Images — Ask First**: NEVER auto-generate images. Always ask the user first if they already have an image or want to specify an existing path.
- **3D components** use `@react-three/fiber` + `@react-three/drei`; keep them in `app/components/`

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Type check | `npm run typecheck` |
| Production build | `npm run build` |
| Local preview | `npm start` (requires `netlify serve`) |

## Skills & Guides

- **Site-wide style guide** → `docs/agent-guides/style-guide.md` ← start here for any UI or content work
- New article route → `.claude/skills/add-article-route.md`
- Homepage grid layout → `docs/agent-guides/homepage-grid.md`
- Instagram pipeline → `docs/agent-guides/article-to-instagram-pipeline.md`
- Git commit workflow → `.claude/skills/git-commit.md`
- Pull request → `.claude/skills/create-pull-request.md`
- Deploy & Netlify details → `docs/agent-guides/deployment.md`
- Clerk auth details → `docs/agent-guides/auth.md`
- Route architecture → `docs/agent-guides/routing.md`
