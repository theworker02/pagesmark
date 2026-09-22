# Asset inventory â€” pagesmark

## Repository surfaces

| Asset | Location / notes |
|-------|------------------|
| Source tree | Repository root / language packages |
| Tests | `test/`, `tests/`, CI workflows if present |
| Docs | `README.md`, `docs/` |
| Diligence room | `docs/acquisition/` |
| License / notices | `LICENSE`, transition notices if present |
| Funding | `.github/FUNDING.yml` |
| CI | `.github/workflows/` if present |
| Branding | logos/assets folders if present |

## Capability highlights

- Generates `docs/index.html`, `docs/styles.css`, and `docs/logo.svg`.
- Supports custom titles and accent colors.
- Can build the full site bundle in memory with `createBundle()`.
- Exposes required file metadata and color validation.
- Fully documented JSR symbols and TypeScript declarations.
- Trusted publishing from GitHub Actions with provenance.
- `createBundle(name, options)` Ã¢â‚¬â€ build the complete three-file site in memory.
- `init(dir, options)` Ã¢â‚¬â€ write the generated site to `docs/`.
- `check(dir)` Ã¢â‚¬â€ validate that the required starter files exist.
- `htmlFor(name)`, `stylesFor(color)`, `logoFor(color)` Ã¢â‚¬â€ generate individual assets.
- `PACKAGE` Ã¢â‚¬â€ package identity and version metadata.
- `REQUIRED_FILES` Ã¢â‚¬â€ canonical PagesMark file list.

## Usually excluded

Seller personal accounts, unrelated repos, and unreissued registry tokens â€” unless listed in the definitive agreement.

*Updated: 2026-09-22*
