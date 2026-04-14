---
name: create-pull-request
description: Open a GitHub pull request for ttb8 changes
---

# Create Pull Request

## Pre-PR Checklist

1. `npm run typecheck` passes
2. Branch is pushed to origin
3. PR targets `main` branch

## Create PR

```bash
gh pr create --title "<title under 70 chars>" --body "$(cat <<'EOF'
## Summary
- <bullet 1>
- <bullet 2>

## Test plan
- [ ] `npm run typecheck` passes
- [ ] Dev server starts (`npm run dev`) and route renders correctly
- [ ] No console errors in browser

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

## Review Criteria

- New routes must appear in `app/routes.ts`
- No hardcoded Clerk keys or secrets
- TailwindCSS classes only (no inline styles unless Three.js canvas positioning)
- TypeScript strict mode — no `any` casts without justification
