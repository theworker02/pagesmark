const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { init } = require("../src/index.js");

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
});
