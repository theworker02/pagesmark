# pagesmark


---

## License & acquisition

This project is **proprietary**. Production use, redistribution, and commercial deployment require a written commercial license or completed acquisition. See [LICENSE](./LICENSE) and [ACQUISITION.md](./ACQUISITION.md). Contact [@theworker02](https://github.com/theworker02).


<img src="docs/logo.svg" alt="pagesmark mark" width="96" height="96">

**Generate and validate a compact GitHub Pages starter site with a reusable, documented API.**

[![JSR](https://jsr.io/badges/@theworker02/pagesmark)](https://jsr.io/@theworker02/pagesmark)
![version 1.2.0](https://img.shields.io/badge/version-1.2.0-C9A227?labelColor=0B1F33)
![license MIT](https://img.shields.io/badge/license-Proprietary%20(source--available)-0B1F33)
![node >=18](https://img.shields.io/badge/node-%3E%3D18-C9A227?labelColor=0B1F33)

**Package:** [`@theworker02/pagesmark`](https://jsr.io/@theworker02/pagesmark) Â· **Docs:** [GitHub Pages](https://theworker02.github.io/pagesmark/) Â· **Source:** [`theworker02/pagesmark`](https://github.com/theworker02/pagesmark)

## Highlights

- Generates `docs/index.html`, `docs/styles.css`, and `docs/logo.svg`.
- Supports custom titles and accent colors.
- Can build the full site bundle in memory with `createBundle()`.
- Exposes required file metadata and color validation.
- Fully documented JSR symbols and TypeScript declarations.
- Trusted publishing from GitHub Actions with provenance.

## Add from JSR

```bash
deno add jsr:@theworker02/pagesmark
```

```ts
import { createBundle, REQUIRED_FILES, PACKAGE } from "@theworker02/pagesmark";

const bundle = createBundle("My Project", { color: "#C9A227" });
console.log(REQUIRED_FILES, PACKAGE.version, bundle["index.html"]);
```

## Public API

### Site generation

- `createBundle(name, options)` â€” build the complete three-file site in memory.
- `init(dir, options)` â€” write the generated site to `docs/`.
- `check(dir)` â€” validate that the required starter files exist.
- `htmlFor(name)`, `stylesFor(color)`, `logoFor(color)` â€” generate individual assets.

### Metadata and validation

- `PACKAGE` â€” package identity and version metadata.
- `REQUIRED_FILES` â€” canonical PagesMark file list.
- `isValidColor(value)` â€” validate `#RRGGBB` accent colors.
- `NAVY`, `GOLD`, `LOGO`, `STYLES` â€” default design primitives.
- `requiredFiles(path)` â€” resolve required file paths.

### Types

`InitOptions`, `InitResult`, `CheckResult`, `PageBundle`, and `PackageMetadata` are all documented in JSR.

## CLI from source

```bash
git clone https://github.com/theworker02/pagesmark.git
cd pagesmark
node src/cli.js --help
```

Initialize a site:

```bash
node src/cli.js init ./website --title "My Project" --color "#C9A227"
```

## Development

```bash
node --test
```

## Publishing

The canonical package is published to JSR through GitHub Actions using OIDC trusted publishing.

## Documentation

- [JSR package and generated API docs](https://jsr.io/@theworker02/pagesmark)
- [Project site](https://theworker02.github.io/pagesmark/)
- [Source repository](https://github.com/theworker02/pagesmark)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

See [SECURITY.md](SECURITY.md).

## License

**Source-available proprietary** — evaluation under [LICENSE](./LICENSE); commercial / production use via [COMMERCIAL.md](./COMMERCIAL.md). See [LICENSE_TRANSITION_NOTICE.md](./LICENSE_TRANSITION_NOTICE.md) and [NOTICE](./NOTICE).
