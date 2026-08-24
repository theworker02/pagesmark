# pagesmark

<img src="docs/logo.svg" alt="pagesmark mark" width="96" height="96">

**Write docs/index.html, docs/styles.css, and docs/logo.svg so Pages on main /docs has somewhere to start.**

![version 1.00](https://img.shields.io/badge/version-1.00-C9A227?labelColor=0B1F33)
![branch main](https://img.shields.io/badge/branch-main-0B1F33?labelColor=C9A227)
![license MIT](https://img.shields.io/badge/license-MIT-0B1F33)
![node >=18](https://img.shields.io/badge/node-%3E%3D18-C9A227?labelColor=0B1F33)
![release 1.00](https://img.shields.io/github/v/release/theworker02/pagesmark?display_name=release)

Package version **1.00** (`1.0.0`). Default branch is **`main`** — never `master`.

**Docs:** [GitHub Pages](https://theworker02.github.io/pagesmark/) · **Source:** [`theworker02/pagesmark`](https://github.com/theworker02/pagesmark) · **Release 1.00:** [`v1.0.0`](https://github.com/theworker02/pagesmark/releases/tag/v1.0.0)

## Why it exists

Empty Pages settings fail mysteriously. pagesmark drops a navy-and-gold stub that already matches this family's brand so you can enable Pages immediately.

## Who it is for

Maintainers standing up documentation sites for small Node CLIs.

## Install

Requires Node.js 18 or newer. No extra npm dependencies.

### Global install from GitHub

```bash
npm install -g git+https://github.com/theworker02/pagesmark.git
pagesmark --help
```

### Clone and link locally

```bash
git clone https://github.com/theworker02/pagesmark.git
cd pagesmark
npm install -g .
```

### Run without installing (npx / node)

```bash
npx --yes git+https://github.com/theworker02/pagesmark.git --help
node src/cli.js --help
```

## Quick start

```bash
pagesmark init ./mysite
ls mysite/docs
```

You should see index.html, styles.css, and logo.svg.

## CLI reference

```text
pagesmark 1.00 (1.0.0)

Usage:
  pagesmark init [options] [dir]
  pagesmark check [options] [dir]

Write or inspect a GitHub Pages stub:
  docs/index.html
  docs/styles.css
  docs/logo.svg

Enable Pages with: Settings → Pages → Deploy from a branch → main → /docs

Subcommands:
  init               Create the three starter files (default)
  check              Verify those files already exist

Options:
  -h, --help         Show this help and exit 0
  -V, -v, --version  Print 1.0.0 and exit 0
  --json             JSON result
  --force            Overwrite existing docs files
  --title <name>     Title used in index.html (default: directory basename)
  --color <#RRGGBB>  Accent color (default #C9A227); navy stays #0B1F33

Exit codes:
  0  init wrote files, or check found all three
  1  missing files, refused overwrite, or bad --color

Examples:
  pagesmark init
  pagesmark init --title "My CLI" --color #C9A227
  pagesmark init --force ./website
  pagesmark check --json
```

Print the same text locally:

```bash
pagesmark --help
pagesmark -h
pagesmark --version
pagesmark -V
```

Expected version output:

```text
1.0.0
```

## Configuration

Writes `docs/index.html`, `docs/styles.css`, and `docs/logo.svg`. Accent `--color` must be `#RRGGBB`.

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | init wrote files, or check found all three. |
| `1` | Missing files, refused overwrite, or bad --color. |

## Examples

### Success path

Initialize a Pages stub, then check it.

```bash
pagesmark init --title Demo
pagesmark check
```

```text
wrote index.html, styles.css, logo.svg in /abs/docs
pagesmark: OK
```

### Failure path

Existing docs refuse overwrite without --force.

```bash
pagesmark init
```

```text
docs already has index.html, styles.css, logo.svg; pass --force to overwrite
```

Exit code is 1.

## How to run tests

No extra packages. From the repository root:

```bash
npm test
# same as:
node --test
```

All tests must pass before you open a pull request against `main`.

## GitHub Pages

This repository ships a product site in `/docs`.

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Branch: **`main`**.
4. Folder: **`/docs`**.
5. Save, then wait for the Pages deployment.
6. Open [https://theworker02.github.io/pagesmark/](https://theworker02.github.io/pagesmark/).

Do not point Pages at `master`. The default branch is `main`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Open pull requests against **`main`**.

## Security

See [SECURITY.md](SECURITY.md). Please report vulnerabilities privately.

## License

[MIT](LICENSE) © 2026 theworker02

## Funding

- GitHub Sponsors: [theworker02](https://github.com/sponsors/theworker02)
- thanks.dev: [https://thanks.dev/u/gh/theworker02](https://thanks.dev/u/gh/theworker02)
