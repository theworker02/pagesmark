#!/usr/bin/env node
const { init, check } = require("./index.js");
const { HELP, VERSION } = require("./help.js");

function parseArgv(argv) {
  const flags = {};
  const positional = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "-h" || arg === "--help") flags.help = true;
    else if (arg === "-V" || arg === "-v" || arg === "--version") flags.version = true;
    else if (arg === "--json") flags.json = true;
    else if (arg === "--force") flags.force = true;
    else if (arg === "--title") {
      const next = argv[i + 1];
      if (!next || next.startsWith("-")) throw new Error("option --title requires a value");
      flags.title = next;
      i += 1;
    } else if (arg.startsWith("--title=")) flags.title = arg.slice("--title=".length);
    else if (arg === "--color") {
      const next = argv[i + 1];
      if (!next || next.startsWith("-")) throw new Error("option --color requires a value");
      flags.color = next;
      i += 1;
    } else if (arg.startsWith("--color=")) flags.color = arg.slice("--color=".length);
    else if (arg.startsWith("-")) throw new Error(`unknown option: ${arg}`);
    else positional.push(arg);
  }
  return { flags, positional };
}

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

try {
  const { flags, positional } = parseArgv(process.argv.slice(2));
  if (flags.help) {
    process.stdout.write(HELP);
    process.exit(0);
  }
  if (flags.version) {
    process.stdout.write(`${VERSION}\n`);
    process.exit(0);
  }

  const rest = [...positional];
  let command = "init";
  if (rest[0] === "init" || rest[0] === "check") command = rest.shift();
  const dir = rest[0] || process.cwd();

  if (command === "check") {
    const result = check(dir);
    if (flags.json) process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    else {
      process.stdout.write(`pagesmark: ${result.ok ? "OK" : "FAIL"}  ${result.dir}\n`);
      for (const name of result.present) process.stdout.write(`  present  ${name}\n`);
      for (const name of result.missing) process.stdout.write(`  missing  ${name}\n`);
    }
    process.exit(result.ok ? 0 : 1);
  }

  const result = init(dir, { force: flags.force, title: flags.title, color: flags.color });
  if (flags.json) process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  else process.stdout.write(`wrote ${result.files.join(", ")} in ${result.dir}\n`);
  process.exit(0);
} catch (err) {
  fail(err.message);
}
