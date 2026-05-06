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
    break;
}

if (!fs.existsSync(binaryPath)) {
  console.error("\n❌ Missing sourcecode binary:");
  console.error(binaryPath);
  console.error("\nMake sure you have copied the compiled Nuitka binary.\n");
  process.exit(1);
}

const child = spawn(binaryPath, process.argv.slice(2), {
  stdio: "inherit",
  env: process.env,
  windowsHide: true,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});

child.on("error", (err) => {
  console.error("Failed to start binary:", err);
  process.exit(1);
});