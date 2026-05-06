Aquí lo tienes todo unificado en un único `README.md`, listo para copiar/pegar en tu repo `sourcecode-npm`:

````md
# sourcecode-npm

**Deterministic codebase context for AI coding agents.**

[![npm](https://img.shields.io/npm/v/sourcecode-npm)](https://www.npmjs.com/package/sourcecode-npm)
[![Node](https://img.shields.io/node/v/sourcecode-npm)](https://www.npmjs.com/package/sourcecode-npm)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue)](LICENSE)

Turn any repository into structured, reproducible context optimized for AI coding agents — in one command.

---

## Install

```bash
npm install -g sourcecode-npm
````

Requires Node.js >= 18.

---

## Quickstart

```bash
sourcecode .
```

### Agent mode (recommended)

```bash
sourcecode . --agent
```

### Compact mode (for LLM prompts)

```bash
sourcecode . --compact
```

### Save output

```bash
sourcecode . --agent --output context.json
```

---

## CLI usage

```bash
sourcecode <path> [options]
```

### Examples

```bash
sourcecode .
sourcecode ./my-repo --agent
sourcecode . prepare-context onboard
sourcecode . prepare-context fix-bug
```

---

## Output modes

| Mode                     | Description              |
| ------------------------ | ------------------------ |
| default                  | Full analysis            |
| `--agent`                | Structured AI-ready JSON |
| `--compact`              | Minimal token output     |
| `prepare-context <task>` | Task-specific context    |

---

## Example output

```json
{
  "project": {
    "type": "api",
    "summary": "Node/Python-compiled CLI for deterministic repository analysis.",
    "primary_stack": "python (compiled) + node CLI wrapper",
    "frameworks": ["Typer"]
  },
  "entry_points": [
    { "path": "vendor/*/sourcecode", "kind": "binary", "confidence": "high" }
  ],
  "architecture": "CLI wrapper that delegates execution to native compiled binaries per OS.",
  "confidence_summary": { "overall": "high" }
}
```

---

## How it works

`sourcecode-npm` is a cross-platform CLI wrapper:

```
Node CLI
   ↓
Detect OS
   ↓
Execute native binary
   ↓
Return deterministic JSON
```

Each platform runs a compiled backend:

* Linux → `vendor/linux/sourcecode`
* macOS → `vendor/macos/sourcecode`
* Windows → `vendor/windows/sourcecode.exe`

No network calls. No API keys. Fully local execution.

---

## Use cases

### Claude / GPT agents

```bash
sourcecode . --agent | claude -p "analyze this repository"
```

### CI pipelines

```bash
sourcecode . --agent --output context.json
```

### Onboarding

```bash
sourcecode . prepare-context onboard
```

---

## Architecture

* CLI wrapper (Node.js)
* Native execution layer (Nuitka binaries)
* Deterministic analysis engine
* Structured JSON/YAML output

---

## Supported platforms

| OS      | Binary                          |
| ------- | ------------------------------- |
| Linux   | `vendor/linux/sourcecode`       |
| macOS   | `vendor/macos/sourcecode`       |
| Windows | `vendor/windows/sourcecode.exe` |

---

## Philosophy

* Deterministic outputs (same repo = same result)
* Local-first execution (no cloud, no API keys)
* Noise suppression (only runtime-relevant context)
* Agent-ready structured data

---

## Privacy

All analysis runs locally. No telemetry or network calls by default.

---

## Roadmap

* GitHub Action builds for binaries
* Auto-download binary strategy (reduce npm size)
* VS Code / Cursor integration
* Context diffing (repo change awareness)
* MCP server for Claude Code

---

## Contributing

PRs welcome.

```bash
git clone https://github.com/sourcecode-ai/sourcecode-npm
cd sourcecode-npm
npm install
```

---

## License

Apache 2.0

```

---

<3
