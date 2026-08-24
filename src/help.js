const HELP = `pagesmark 1.00 (1.0.0)

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
`;

const VERSION = "1.0.0";
module.exports = { HELP, VERSION };
