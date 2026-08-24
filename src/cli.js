#!/usr/bin/env node
const { init } = require("./index.js");
const { HELP, VERSION } = require("./help.js");

const args = process.argv.slice(2);
if (args.includes("-h") || args.includes("--help")) {
  process.stdout.write(HELP);
  process.exit(0);
}
if (args.includes("-v") || args.includes("--version")) {
  process.stdout.write(`${VERSION}\n`);
  process.exit(0);
}

const [command, dir] = args;
if (command !== "init") {
  process.stderr.write("usage: pagesmark init [dir]\n");
  process.exit(1);
}
const result = init(dir || process.cwd());
process.stdout.write(`${JSON.stringify(result)}\n`);
