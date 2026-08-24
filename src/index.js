const fs = require("node:fs");
const path = require("node:path");

const NAVY = "#0B1F33";
const GOLD = "#C9A227";

const LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="pagesmark mark">
  <rect width="128" height="128" rx="18" fill="#0B1F33"/>
  <rect x="28" y="30" width="72" height="68" rx="6" fill="none" stroke="#C9A227" stroke-width="5"/>
  <path d="M28 46h72" stroke="#C9A227" stroke-width="5"/>
  <circle cx="40" cy="38" r="3.5" fill="#C9A227"/>
  <circle cx="52" cy="38" r="3.5" fill="#C9A227"/>
  <path d="M76 30l24 24H76z" fill="#C9A227"/>
  <path d="M40 62h36M40 74h28" stroke="#C9A227" stroke-width="4" stroke-linecap="round"/>
</svg>
`;

function stylesFor(color = GOLD) {
  return `:root { --navy: ${NAVY}; --gold: ${color}; --paper: #f6f3ea; }
body { margin: 0; font-family: "Segoe UI", Arial, sans-serif; background: var(--paper); color: #122433; }
header { background: var(--navy); color: #fff; padding: 2rem; border-bottom: 6px solid var(--gold); }
main { max-width: 760px; margin: 1.5rem auto; padding: 0 1rem 2rem; }
`;
}

const STYLES = stylesFor(GOLD);

function htmlFor(name) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${name}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <img src="logo.svg" alt="${name} mark" width="64" height="64">
    <h1>${name}</h1>
  </header>
  <main>
    <p>GitHub Pages stub. Source branch <code>main</code>, folder <code>/docs</code>.</p>
  </main>
</body>
</html>
`;
}

function logoFor(color = GOLD) {
  return LOGO.replaceAll(GOLD, color);
}

function requiredFiles(docsDir) {
  return ["index.html", "styles.css", "logo.svg"].map((name) => path.join(docsDir, name));
}

function init(dir = process.cwd(), options = {}) {
  const docs = path.resolve(dir, "docs");
  const force = Boolean(options.force);
  const title = options.title || path.basename(path.resolve(dir));
  const color = options.color || GOLD;
  if (!/^#[0-9A-Fa-f]{6}$/.test(color)) {
    throw new Error(`--color must be a #RRGGBB hex value, got ${color}`);
  }

  const planned = {
    "index.html": htmlFor(title),
    "styles.css": stylesFor(color),
    "logo.svg": logoFor(color),
  };

  const existing = Object.keys(planned).filter((name) => fs.existsSync(path.join(docs, name)));
  if (existing.length && !force) {
    throw new Error(`docs already has ${existing.join(", ")}; pass --force to overwrite`);
  }

  fs.mkdirSync(docs, { recursive: true });
  for (const [file, body] of Object.entries(planned)) {
    fs.writeFileSync(path.join(docs, file), body);
  }
  return { dir: docs, files: Object.keys(planned), title, color, overwritten: existing };
}

function check(dir = process.cwd()) {
  const docs = path.resolve(dir, "docs");
  const files = ["index.html", "styles.css", "logo.svg"];
  const present = [];
  const missing = [];
  for (const name of files) {
    if (fs.existsSync(path.join(docs, name))) present.push(name);
    else missing.push(name);
  }
  return {
    ok: missing.length === 0,
    dir: docs,
    present,
    missing,
  };
}

module.exports = {
  init,
  check,
  htmlFor,
  LOGO,
  STYLES,
  stylesFor,
  logoFor,
  requiredFiles,
  NAVY,
  GOLD,
};
