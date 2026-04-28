# Deployment Guide

## Platform: Netlify

ttb8 deploys to Netlify with SSR via Netlify Functions.

### Build Pipeline

```
npm run build
  └─ react-router build     → build/client/ (static) + build/server/ (SSR)
  └─ node netlify/prepare.js → wires server bundle into Netlify Functions
```

Netlify config ([netlify.toml](../../netlify.toml)):
- **Publish dir**: `build/client`
- **Build command**: `npm run build`
- Static assets under `/assets/*` are cached immutably (fingerprinted filenames)

### CSP Headers

Content-Security-Policy in `netlify.toml` allows:
- Clerk domains: `clerk.tastytechbytes.com`, `accounts.tastytechbytes.com`
- Cloudflare challenges (Clerk bot protection)
- Google AdSense (`pagead2.googlesyndication.com`)

**When adding new third-party scripts**: update the CSP header in `netlify.toml`.

### Local Preview

```bash
npm run build && npm start   # uses netlify serve
```

### Environment Variables

Set via Netlify dashboard or CLI:
```bash
npx netlify env:set KEY value
```

Required variables:
- `CLERK_SECRET_KEY` — Clerk backend secret
- `VITE_CLERK_PUBLISHABLE_KEY` — Clerk frontend key (prefixed with `VITE_` for Vite exposure)

### Deployment Triggers

- Push to `main` → auto-deploy on Netlify
- PRs → deploy preview at a unique Netlify URL

## Domain

Production: `https://tastytechbytes.com`
Clerk custom domain: `clerk.tastytechbytes.com`
