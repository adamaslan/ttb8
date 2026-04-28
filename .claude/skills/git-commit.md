---
name: git-commit
description: Create a git commit for ttb8 changes
---

# Git Commit Workflow

## Pre-commit Checklist

1. Run `npm run typecheck` — must pass with zero errors
2. Verify no secrets are staged (Clerk keys, API tokens)
3. If a new route was added, confirm it's registered in `app/routes.ts`

## Commit

```bash
git add <specific files>
git commit -m "$(cat <<'EOF'
<concise description of change>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

## Commit Message Conventions

- New article: `add <slug> article route`
- Component change: `update <ComponentName>: <what changed>`
- Bug fix: `fix <brief description>`
- Auth/Clerk change: `auth: <description>`
- Route registration: typically bundled with the route file commit

## What NOT to Commit

- `node_modules/`
- `.env` or any file containing Clerk secret keys (`sk_live_...`)
- `build/` directory (Netlify builds from source)
