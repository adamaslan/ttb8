# Authentication (Clerk)

## Setup

Auth uses `@clerk/react-router` v2. The Clerk provider is mounted in [app/root.tsx](../../app/root.tsx).

Custom domain: `clerk.tastytechbytes.com` (not the default `clerk.accounts.dev`)

## Key Patterns

### Protecting a Route (Client-Side)

```tsx
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/react-router";

export default function ProtectedPage() {
  return (
    <>
      <SignedIn>
        {/* protected content */}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
```

### Protecting a Route (Loader / Server-Side)

```ts
import { getAuth } from "@clerk/react-router/ssr.server";
import { redirect } from "react-router";

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await getAuth(args);
  if (!userId) throw redirect("/sign-in");
  // ...
}
```

## Environment Variables

| Variable | Where set | Purpose |
|----------|-----------|---------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Netlify env | Frontend (exposed via Vite) |
| `CLERK_SECRET_KEY` | Netlify env | Server-side API calls |

**Never commit these values.** They appear in `.claude/settings.local.json` — that file is gitignored.

## CSP

Clerk requires specific CSP entries. They are already configured in [netlify.toml](../../netlify.toml). Do not remove them.
