# chore: bump packages to latest + roll back eslint v10 to keep plugins happy + postcss security override

## Description

Refreshes every Node package to its latest stable version via `npm-check-updates`, adds the missing explicit devDependencies required by the flat ESLint config, syncs README badges, fixes two moderate npm-audit advisories via a `postcss` override, and rolls the initial `eslint@^10.5.0` bump back to `^9.39.4` so that the bundled `eslint-plugin-import` / `eslint-plugin-jsx-a11y` / `eslint-plugin-react` peers (still capped at `^9` inside `eslint-config-next@16.2.9`) stop triggering `ERESOLVE` warnings on every install.

## Changes

### Package version bumps

| Package                | Before  | After   |
| ---------------------- | ------- | ------- |
| next                   | 16.2.7  | 16.2.9  |
| prettier               | 3.8.3   | 3.8.4   |
| tailwindcss            | 4.3.0   | 4.3.1   |
| @tailwindcss/postcss   | 4.3.0   | 4.3.1   |
| @types/node            | 25.9.1  | 25.9.3  |
| @types/react           | 19.2.16 | 19.2.17 |
| @radix-ui/react-avatar | 1.1.11  | 1.2.0   |
| @radix-ui/react-dialog | 1.1.15  | 1.1.17  |
| @radix-ui/react-slot   | 1.2.4   | 1.3.0   |
| lucide-react           | 1.17.0  | 1.20.0  |
| better-sqlite3         | 12.10.0 | 12.11.1 |
| @libsql/client         | 0.17.3  | 0.17.4  |
| @prisma/dev            | 0.24.9  | 0.24.14 |
| eslint-config-next     | 16.2.7  | 16.2.9  |

The `overrides.@prisma.dev` entry was kept in sync (`^0.24.9 → ^0.24.14`).

### ESLint: rolled back to `^9.39.4`

The original `ncu -u` bumped `eslint ^9.39.4 → ^10.5.0`. That triggered persistent `ERESOLVE overriding peer dependency` warnings because three plugins transitively pulled in by `eslint-config-next@16.2.9` still cap their ESLint peer at `^9`:

| Plugin                          | ESLint peer cap |
| ------------------------------- | --------------- |
| `eslint-plugin-import@2.32.0`   | `^2..^9`        |
| `eslint-plugin-jsx-a11y@6.10.2` | `^3..^9`        |
| `eslint-plugin-react@7.37.5`    | `^3..^9.7`      |

None of these three plugins is referenced in our flat `eslint.config.mjs`, but `eslint-config-next` ships them as transitive deps for its legacy `.eslintrc` flow. Resolution: roll `eslint` (and `@eslint/js`, which tracks the ESLint major) back to `^9.39.4`. Traded ESLint v10 features; gained a clean `npm i`. *(Alternative considered: `legacy-peer-deps=true` in a project-root `.npmrc` would suppress these warnings while keeping `eslint@^10.5.0`. We prefer the explicit downgrade so the install stays default and the deferred decisions are visible to the next maintainer. Note: `legacy-peer-deps` also masks any *future* peer-dep conflict — the explicit downgrade was therefore preferred primarily to keep `ERESOLVE` warnings readable as a forward-looking signal of upstream plugin-peer progress.)*

### Security fix: `postcss` override (clears `GHSA-qx2v-qp2m-jg93`)

Adds `"postcss": "^8.5.15"` to `package.json#overrides`. This forces the root `postcss@8.5.15` over the transitive `postcss@8.4.31` that next@16.2.9 pulls in, clearing two moderate npm-audit advisories (XSS via unescaped `</style>` in CSS stringify). `npm audit` now reports 0 vulnerabilities. Cold `next build` (after `rm -rf .next`) confirms the override doesn't regress the CSS pipeline. `^8.5.15` is chosen specifically to match the root devDep range — the actual advisory floor is `8.5.10`, but an override wider than the root devDep range (such as `^8.5.10`) trips npm 11's stricter `EOVERRIDE` check on `npm install`.

### New devDependencies (flat ESLint config)

- `@eslint/js ^9.39.4`
- `@typescript-eslint/eslint-plugin ^8.61.1`
- `@typescript-eslint/parser ^8.61.1`
- `globals ^17.6.0`

All four are imported at the top of `eslint.config.mjs` (lines 1-4) and were previously undeclared, which is what made the very first lint step silently broken on a clean install.

`lucide-react` itself is used by `Navbar`, `Card`, `ErrorBoundary`, `ui/sheet`, and `ui/dialog` — required, not vestigial.

### Docs

- `README.md`: badges and stack mentions refreshed (`Next.js 16.2.9`, `Tailwind CSS 4.3.1`, `TypeScript 6`).

## Why

- Pull in upstream patches and compatibility fixes since the last refresh.
- Keep `npm i` clean — no `ERESOLVE` warnings, no `EOVERRIDE` install failures.
- Make the flat ESLint config reproducible by declaring every package it imports.
- Close all currently-open `npm audit` findings.

## Testing

- [x] `npx tsc --noEmit` — clean
- [x] `npm run lint` — clean
- [x] `npm run build` (cold, after `rm -rf .next`) — clean
- [x] `npm audit` — 0 vulnerabilities
- [x] `npm i` — no `ERESOLVE` warnings

## Known notes

- **ESLint is on v9.39.4** for plugin-peer compatibility (see above). Move back to v10 once `eslint-config-next@16.2.9`'s bundled plugin set releases a peer range covering v10.
- **`postcss` override range is intentionally matched to the direct devDep range** (`^8.5.15`). npm 11's stricter `overrides` validator throws `EOVERRIDE` for any wider override such as `^8.5.10`. Drop the `postcss` key in `overrides` the first time `next` ships with bundled `postcss ≥ 8.5.10` (signal: `npm ls postcss` shows no `8.4.x` under the `next` tree).
- ESLint v9 requires Node ≥ 18.18.0. CI workflows (`ci.yml`, `pr.yml`) already pin `node-version: '20'`, comfortably above this.

## Checklist

- [x] Code follows project style guidelines
- [x] Documentation updated (README.md refreshed)
- [x] No linting errors (`npm run lint`)
- [x] No type errors (`npx tsc --noEmit`)
- [x] `npm run build` clean
- [x] No advisory findings (`npm audit`)
- [x] Clean install (`npm i` with no `ERESOLVE` warnings)
- [x] Ready for review
