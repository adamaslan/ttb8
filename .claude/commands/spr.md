# /spr — Scan, branch, commit, push, PR

Automates the full ship-a-branch workflow:
1. Scan staged + unstaged changes for secrets
2. Create a new branch (or use current if already on a feature branch)
3. Stage all relevant changed/new files
4. Commit with an auto-drafted message
5. Push and open a GitHub PR

---

## Steps

### 1 — Scan for secrets

Run:
```
git diff HEAD
```
and:
```
git status
```

Grep the combined diff for patterns that suggest real credentials:
- `sk-[a-zA-Z0-9]{20,}` (OpenAI/Anthropic keys)
- `ghp_[a-zA-Z0-9]+` (GitHub PATs)
- `AKIA[A-Z0-9]{16}` (AWS access key IDs)
- bare `password\s*=\s*\S+` or `secret\s*=\s*\S+` assignments (not inside comments or docs)
- `.env` files staged unintentionally

If any **real** credential is found, **stop and report it** — do not commit. Explain what was found and how to remove it.

Documentation text and code examples that contain the word "secret" or "password" are NOT secrets — use judgment.

### 2 — Determine branch

- If already on a feature branch (not `main`/`master`/`develop`), stay on it.
- If on `main`/`master`/`develop`, create a new branch. Derive the name from the dominant change in the diff: `feat/<short-slug>` or `fix/<short-slug>`. Use today's date (`$ARGUMENTS` may supply a name override; if provided, use it as the branch slug).

### 3 — Stage files

Stage all modified and untracked files that are part of this work. Use specific file paths, not `git add -A`, to avoid accidentally including `.env`, lock files changed by tools, or large binaries. When in doubt about a file, list it and ask.

### 4 — Commit

Draft a commit message by reading the diff:
- First line: `<type>(<scope>): <what changed>` — 72 chars max
- Body (if needed): brief why, not what
- Trailer: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`

Use a HEREDOC to pass the message:
```bash
git commit -m "$(cat <<'EOF'
<message here>
EOF
)"
```

### 5 — Push + PR

Push the branch:
```bash
git push -u origin <branch>
```

Then open a PR with `gh pr create`. PR body must include:
- `## Summary` — 2–4 bullet points of what changed
- `## Test plan` — checklist of how to verify
- Attribution footer: `🤖 Generated with [Claude Code](https://claude.com/claude-code)`

Return the PR URL to the user.
