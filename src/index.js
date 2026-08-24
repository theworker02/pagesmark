const fs = require("node:fs");
const path = require("node:path");

const LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Tool mark">
  <rect width="128" height="128" rx="18" fill="#0B1F33"/>
  <polygon points="64,20 108,98 20,98" fill="none" stroke="#C9A227" stroke-width="6" stroke-linejoin="round"/>
  <circle cx="64" cy="68" r="16" fill="#C9A227"/>
</svg>
`;

const STYLES = `:root { --navy: #0B1F33; --gold: #C9A227; --paper: #f6f3ea; }
body { margin: 0; font-family: "Segoe UI", Arial, sans-serif; background: var(--paper); color: #122433; }
header { background: var(--navy); color: #fff; padding: 2rem; border-bottom: 6px solid var(--gold); }
main { max-width: 760px; margin: 1.5rem auto; padding: 0 1rem 2rem; }
`;

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

function init(dir = process.cwd()) {
  const docs = path.resolve(dir, "docs");
  fs.mkdirSync(docs, { recursive: true });
  const name = path.basename(path.resolve(dir));
  const files = {
    "index.html": htmlFor(name),
    "styles.css": STYLES,
    "logo.svg": LOGO,
  };
  for (const [file, body] of Object.entries(files)) {
    fs.writeFileSync(path.join(docs, file), body);
  }
  return { dir: docs, files: Object.keys(files) };
}

module.exports = { init, htmlFor, LOGO, STYLES };
