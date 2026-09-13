# Architecture

## Current state (as of this audit)

- Next.js 16.3.5, App Router, TypeScript, Tailwind v4, ESLint. Scaffolded via
  `create-next-app`, then flattened to repo root.
- `src/app/`: `layout.tsx`, `page.tsx` (placeholder institutional homepage,
  English copy — written before the real LSSPM brief was available; needs
  rework in French with the actual logo/palette), `globals.css`.
- No backend integration of any kind: no `@supabase/supabase-js`, no API
  routes, no auth, no data layer.
- No `docs/` prior to this audit.
- Git remote: `https://github.com/Midoxax/LSSPM.git`. Push is currently
  blocked — no credentials configured in this environment (PAT or SSH key
  needed on the machine actually pushing).

## Proposed layered architecture (Phase 1+)

```
app/                     — routes (public site, /admin, /portal, /trainer, /member)
lib/
  domain/                — entities, business rules, pure functions
  services/              — one service per bounded context (admissions, finance, ...)
  data/                  — Supabase queries, typed, isolated from UI
  auth/                  — session/role/permission helpers
  integrations/          — payment provider interface, email/WhatsApp adapters
components/              — presentation only, no direct DB calls
```

Server Components + Server Actions for data access; RLS in Postgres as the
real security boundary (see `security.md`) — route/UI checks are a UX layer
only, never the enforcement point.

## Open questions before Phase 1 starts

1. Which Supabase project is LSSPM's dev environment? The only project
   currently connected to this account (`skxxvgjjdshcopybokdt`, "Midoxax's
   Project") is an unrelated, already-live application with real user data —
   see `database.md`. A dedicated LSSPM project needs to be created or
   identified before any schema work.
2. Real logo asset (`/public/branding/lsspm-logo.png`) not present in the repo.
3. No GitHub App/MCP connected in this session — pushes go through plain git
   over HTTPS, currently unauthenticated.
