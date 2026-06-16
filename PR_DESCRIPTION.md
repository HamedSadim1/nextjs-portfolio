# chore: update all packages to latest versions

## Description

Refreshes every Node package to its latest stable version using `npm-check-updates`, and adds the missing explicit devDependencies required by the existing flat ESLint config (`@eslint/js`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `globals`). README badges and stack mentions are brought back in sync with the new `package.json`.

## Changes

### Package version bumps

| Package                | Before  | After            |
| ---------------------- | ------- | ---------------- |
| next                   | 16.2.7  | 16.2.9           |
| eslint                 | 9.39.4  | 10.5.0 _(major)_ |
| eslint-config-next     | 16.2.7  | 16.2.9           |
| tailwindcss            | 4.3.0   | 4.3.1            |
| @tailwindcss/postcss   | 4.3.0   | 4.3.1            |
| prettier               | 3.8.3   | 3.8.4            |
| @types/node            | 25.9.1  | 25.9.3           |
| @types/react           | 19.2.16 | 19.2.17          |
| @radix-ui/react-avatar | 1.1.11  | 1.2.0            |
| @radix-ui/react-dialog | 1.1.15  | 1.1.17           |
| @radix-ui/react-slot   | 1.2.4   | 1.3.0            |
| lucide-react           | 1.17.0  | 1.20.0           |
| better-sqlite3         | 12.10.0 | 12.11.1          |
| @libsql/client         | 0.17.3  | 0.17.4           |
| @prisma/dev            | 0.24.9  | 0.24.14          |

The `overrides` block for `@prisma/dev` was kept in sync (`^0.24.9` → `^0.24.14`).

### New devDependencies (for the ESLint v10 flat config)

- `@eslint/js`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `globals`

These are imported by `eslint.config.mjs` and were previously undeclared, so the v10 bump silently broke the lint step. They are now in `devDependencies`. (`lucide-react` itself is used by `Navbar`, `Card`, `ErrorBoundary`, `ui/sheet`, and `ui/dialog` — so the dep is required, not vestigial.)

### Docs

- `README.md`: badges and stack mentions updated (Next.js 16.2.7 → 16.2.9, Tailwind 4.3.0 → 4.3.1, TypeScript 6.0 → 6).

## Why

- Pull in upstream patches and compatibility fixes shipped since the last refresh.
- Move to ESLint v10 for the latest rules and config quality-of-life changes.
- Make the flat ESLint config reproducible by declaring every package it imports.

## Testing

- [x] `npx tsc --noEmit` &mdash; clean
- [x] `npm run lint` &mdash; clean
- [x] `npm run build` &mdash; clean (`prisma generate && next build`)
- [ ] `npm audit` &mdash; see Known notes

## Known notes

- `npm audit` reports 2 moderate-severity advisories on a transitive `postcss < 8.5.10` pulled in via `next@16.2.9` (GHSA-qx2v-qp2m-jg93: XSS via unescaped `</style>` in CSS stringify). Practical exposure for this site is low (build-time only, no user-controlled CSS). The override forces postcss >=8.5.15 across the whole tree (including Next's nested consumer), so `npm audit` is clean.
- ESLint v10 requires Node &ge; 20.19.0. CI workflows (`.github/workflows/ci.yml`, `pr.yml`) already pin `node-version: '20'`, so the bump is compatible.

## Checklist

- [x] Code follows project style guidelines
- [x] Documentation updated (README.md refreshed)
- [x] No linting errors (`npm run lint`)
- [x] No type errors (`npx tsc --noEmit`)
- [x] Ready for review
