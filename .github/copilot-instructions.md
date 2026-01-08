# Copilot / AI Agent Instructions for StartupVision

This file gives focused, actionable guidance to AI coding agents working on this repository.

1. Big picture

- Framework: Next.js (app router) + React 19 + TypeScript. Entry points live under `app/` (server components by default).
- UI: Tailwind CSS + many Radix-based primitives wrapped in `components/ui/`. Visual components live in `components/` and are imported using the `@/*` path alias.
- Hosting / analytics: `@vercel/analytics` is used; project appears optimized for Vercel but has no CI config in repo.

2. Developer workflows (use these exact commands)

- Install: prefer `pnpm install` (a `pnpm-lock.yaml` exists). `npm`/`yarn` also work but use pnpm when possible.
- Dev server: `pnpm dev` (runs `next dev`).
- Build: `pnpm build` (runs `next build`).
- Start (production): `pnpm start` (runs `next start`).
- Lint: `pnpm lint` (runs `eslint .`).

3. Project-specific conventions and patterns

- App router: Add pages under `app/`. Components in `app/` are server components by default — add `"use client"` at top of a file when client behavior (hooks, state, browser APIs) is required (see `components/header.tsx`).
- Component structure: Reusable primitives live in `components/ui/`. Feature-level components live in `components/` (e.g., `hero-section.tsx`, `header.tsx`). Follow existing export style (named exports like `export function Header(){}`) and keep components small and focused.
- Import alias: Use `@/` to import from repo root (configured in `tsconfig.json` paths).
- Styling: Tailwind utility classes are the default. Prefer adding small class-based changes; introduce new utility classes in `globals.css` only when necessary.
- TypeScript: `tsconfig.json` has `strict: true`. Be explicit with types for exported components/props. Note `next.config.mjs` currently has `typescript.ignoreBuildErrors: true` — do not rely on this to bypass type correctness in PRs.

4. Integration points & notable dependencies

- `next-themes` for theme management (check `components/theme-provider.tsx`).
- `@vercel/analytics` is initialized in `app/layout.tsx`.
- Many `@radix-ui/*` packages are used for accessible primitives inside `components/ui/`.
- Icons use `lucide-react` and carousel/graphs use `embla-carousel-react`, `recharts`.

5. Code change guidance for AI

- Default to server components (app router) unless you need client features — prefer adding `"use client"` only at top of a component that requires it.
- Keep PRs small and focused: change one component, one route, or one utility per PR.
- Follow existing export style (named exports) and file placement (feature components at `components/`, primitives at `components/ui/`).
- Use the `@/*` alias in imports. Update `tsconfig.json` if you introduce new path aliases.
- Respect accessibility patterns already present (Radix primitives and aria attributes). Copy patterns from `components/ui/*` when introducing new primitives.

6. Where to look for examples

- Root scripts and dependencies: `package.json`.
- Router + global layout: `app/layout.tsx`, `app/page.tsx`.
- Client component example: `components/header.tsx` (shows `use client`, useEffect, state, responsive nav).
- UI primitives: `components/ui/*` (copy patterns for Radix wrappers and consistent props).
- Type alias / import mapping: `tsconfig.json` (path `@/*`).

7. Missing / unknowns you should ask the human about

- Deployment/CI: no GitHub Actions / Vercel config found — ask where to run builds or tests in CI.
- API keys or secret-backed integrations: not present in repo; ask before adding or mocking secrets.
- Testing: no test framework present; ask if they expect Jest/Playwright and where to place tests.

8. Merge policy / PR tips

- Keep changes limited to the minimal set of files.
- Run `pnpm dev` locally to sanity-check layout and style changes.
- Preserve TypeScript types and prefer adding types over disabling checks.

If anything here is unclear or you want the file to be more prescriptive (example PR templates, test runner, or CI), tell me what to add and I'll update this file.
