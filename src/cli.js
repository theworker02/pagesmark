#!/usr/bin/env node
const { init } = require("./index.js");

const [command, dir] = process.argv.slice(2);
if (command !== "init") {
  process.stderr.write("usage: pagesmark init [dir]\n");
  process.exit(1);
}
const result = init(dir || process.cwd());
process.stdout.write(`${JSON.stringify(result)}\n`);
