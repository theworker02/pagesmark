# Buyer evaluation â€” pagesmark

## Goal

In 15â€“45 minutes, verify the Product builds or runs as documented and that proprietary notices are present.

## Steps

1. Confirm root `LICENSE` is proprietary and `ACQUISITION.md` exists.
2. Skim `README.md` install/run claims.
3. Execute:

```
```bash
deno add jsr:@theworker02/pagesmark
```
```ts
import { createBundle, REQUIRED_FILES, PACKAGE } from "@theworker02/pagesmark";

const bundle = createBundle("My Project", { color: "#C9A227" });
console.log(REQUIRED_FILES, PACKAGE.version, bundle["index.html"]);
```
```bash
git clone https://github.com/theworker02/pagesmark.git
cd pagesmark
node src/cli.js --help
```
```bash
node src/cli.js init ./website --title "My Project" --color "#C9A227"
```
```bash
node --test
```
```

4. Run tests if present (`npm test`, `pytest`, `cargo test`, `go test ./...`, etc.).
5. Record README vs observed behavior gaps in workpapers.

## Pass criteria

- [ ] Clone succeeds
- [ ] Documented happy path works **or** failure is explained
- [ ] Minimal path needs no surprise secrets
- [ ] License notices intact

*Updated: 2026-09-22*
