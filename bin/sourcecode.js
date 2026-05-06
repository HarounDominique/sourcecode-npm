#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");
const os = require("os");
const fs = require("fs");

const platform = os.platform();

let binaryPath;

switch (platform) {
  case "win32":
    binaryPath = path.join(
      __dirname,
      "..",
      "vendor",
      "windows",
      "sourcecode.exe"
    );
    break;

  case "darwin":
    binaryPath = path.join(
      __dirname,
      "..",
      "vendor",
      "macos",
      "sourcecode"
    );
    break;

  default:
    binaryPath = path.join(
      __dirname,
      "..",
      "vendor",
      "linux",
      "sourcecode"
    );
}

if (!fs.existsSync(binaryPath)) {
  console.error("Missing sourcecode binary:");
  console.error(binaryPath);
  process.exit(1);
}

const child = spawn(binaryPath, process.argv.slice(2), {
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});