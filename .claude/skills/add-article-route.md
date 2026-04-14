---
name: add-article-route
description: Add a new article/content page route to the ttb8 blog site
---

# Add Article Route

## Steps

1. **Create the route file** at `app/routes/<slug>.tsx`
   - Use kebab-case for the filename (matches the URL slug)
   - Export a default React component
   - Use TailwindCSS for styling; no custom CSS files

2. **Register the route** in [app/routes.ts](../app/routes.ts):
   ```ts
   route("<slug>", "./routes/<slug>.tsx"),
   ```
   Add it inside the array before the `satisfies RouteConfig` line.

3. **Run typecheck** to confirm no errors:
   ```bash
   npm run typecheck
   ```

## Route File Template

```tsx
export default function ArticleName() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Article Title</h1>
      {/* content */}
    </div>
  );
}
```

## Notes

- The Navbar is rendered via `root.tsx` — no need to import it in individual routes
- If the article needs auth gating, wrap content with Clerk's `<SignedIn>` / `<SignedOut>`
- Article slugs with underscores (e.g., `10_Ways_...`) are valid but prefer hyphens for new content
