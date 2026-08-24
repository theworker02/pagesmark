const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { init, check } = require("../src/index.js");

const cli = path.join(__dirname, "..", "src", "cli.js");

describe("pagesmark", () => {
  it("writes docs index, styles, and logo", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "pagesmark-"));
    const result = init(dir);
    assert.equal(fs.existsSync(path.join(dir, "docs", "index.html")), true);
    assert.equal(fs.existsSync(path.join(dir, "docs", "styles.css")), true);
    assert.match(fs.readFileSync(path.join(dir, "docs", "logo.svg"), "utf8"), /#0B1F33/);
    assert.deepEqual(result.files, ["index.html", "styles.css", "logo.svg"]);
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("refuses overwrite without --force and honors --title --color", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "pagesmark-"));
    init(dir);
    assert.throws(() => init(dir), /--force/);
    const again = init(dir, { force: true, title: "Pulse", color: "#112233" });
    assert.equal(again.title, "Pulse");
    assert.match(fs.readFileSync(path.join(dir, "docs", "index.html"), "utf8"), /<h1>Pulse<\/h1>/);
    assert.match(fs.readFileSync(path.join(dir, "docs", "styles.css"), "utf8"), /#112233/);
    assert.equal(check(dir).ok, true);
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it("CLI check fails when docs are missing", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "pagesmark-"));
    const result = spawnSync(process.execPath, [cli, "check", "--json", dir], { encoding: "utf8" });
    assert.equal(result.status, 1);
    assert.deepEqual(JSON.parse(result.stdout).missing, ["index.html", "styles.css", "logo.svg"]);
    fs.rmSync(dir, { recursive: true, force: true });
  });
});
