# sourcecode
**Compressed AI-ready context for Java/Spring enterprise codebases.**
![Version](https://img.shields.io/badge/version-1.13.0-blue)
![Platform](https://img.shields.io/badge/platform-win%20%7C%20mac%20%7C%20linux-lightgrey)
---
## What is it?
`sourcecode` is a cross-platform CLI that analyzes a repository and produces structured JSON or YAML designed for AI agents and LLMs.
It solves the "stuff the whole repo into the prompt" problem by extracting a deterministic, high-signal context including:
- stack detection
- entry points
- dependencies
- git hotspots
- inline code annotations
- confidence metadata
  The npm package is a **lightweight runtime wrapper** that executes native binaries per platform.
---
## Installation
```bash
npm install -g sourcecode
````
Verify installation:
```bash
sourcecode version
# sourcecode 1.13.0
```
---
## How it works (important)
This package ships precompiled native binaries:
```
vendor/
├── linux/sourcecode
├── macos/sourcecode
└── windows/sourcecode.exe
```
The CLI automatically selects the correct binary based on your OS.
---
## Quickstart
### High-signal summary (recommended entry point)
```bash
sourcecode --compact
```
~600–800 tokens optimized for LLM context windows:
* stack detection
* entry points
* dependency summary
* confidence scoring
* analysis gaps
---
### Git-aware analysis
```bash
sourcecode --compact --git-context
```
Adds:
* recent commits
* change hotspots
* uncommitted files
---
### Copy to clipboard
```bash
sourcecode --compact --copy
```
---
### Full AI agent context
```bash
sourcecode --agent
```
Produces structured JSON for AI systems:
```json
{
  "project_type": "api",
  "stacks": [
    {
      "stack": "java",
      "frameworks": ["Spring Boot", "MyBatis"],
      "confidence": "high"
    }
  ],
  "entry_points": {
    "bootstrap": ["src/main/java/.../Application.java"],
    "controllers": { "count": 8 }
  },
  "key_dependencies": [],
  "confidence_summary": {
    "overall": "high"
  }
}
```
---
## CLI usage
### Core commands
```bash
sourcecode --compact
sourcecode --agent
sourcecode --git-context
sourcecode --changed-only
sourcecode --copy
```
### Analyze specific path
```bash
sourcecode /path/to/repo --compact
```
---
## Flags reference
| Flag             | Default | Description                               |
| ---------------- | ------- | ----------------------------------------- |
| `--compact`      | off     | ~600–800 token summary optimized for LLMs |
| `--agent`        | off     | Full structured JSON for AI agents        |
| `--git-context`  | off     | Adds git activity and hotspots            |
| `--changed-only` | off     | Only modified git files                   |
| `--depth`        | 4       | Directory traversal depth                 |
| `--format`       | json    | Output format (json/yaml)                 |
| `--output`       | stdout  | Write output to file                      |
| `--copy`         | off     | Copy output to clipboard                  |
| `--no-redact`    | off     | Disable secret redaction                  |
| `--version`      | —       | Show version                              |
---
## Task-based analysis (`prepare-context`)
Generate targeted AI context depending on intent.
```bash
sourcecode prepare-context TASK [PATH]
```
### Tasks
| Task             | Description                     |
| ---------------- | ------------------------------- |
| `explain`        | Architecture overview           |
| `onboard`        | Full project context            |
| `fix-bug`        | Bug-prone file ranking          |
| `refactor`       | Structural improvement analysis |
| `generate-tests` | Test gap analysis               |
| `review-pr`      | PR impact analysis              |
| `delta`          | Git-based incremental context   |
---
### Examples
```bash
sourcecode prepare-context explain
sourcecode prepare-context fix-bug
sourcecode prepare-context delta --since main
sourcecode prepare-context onboard --llm-prompt
```
---
## Output schema
All outputs include:
* `confidence_summary`
* `analysis_gaps`
* stack detection metadata
* entry point classification
---
## Platform support
| OS      | Architecture |
| ------- | ------------ |
| Linux   | x64          |
| macOS   | x64 / arm64  |
| Windows | x64          |
The correct binary is selected automatically at runtime.
---
## Telemetry
Optional anonymous telemetry (opt-in):
```bash
sourcecode telemetry status
sourcecode telemetry enable
sourcecode telemetry disable
```
Or disable via env:
```bash
export SOURCECODE_TELEMETRY=0
```
---
## Config
```bash
sourcecode config
```
Shows:
* CLI version
* binary path
* telemetry status
---
## 🧠 Cambios importantes que he aplicado
- ❌ Eliminé referencias a Python/pip/pipx (no aplica a npm)
- ❌ Eliminé nombres inconsistentes del esquema anterior
- ❌ Simplifiqué schema JSON para reflejar wrapper real
- ✔ Añadí explicación clara de binarios por OS
- ✔ Alineado completamente con tu `vendor/ linux/mac/windows`
- ✔ Mantenido "AI-first design language"
- ✔ Consistente con versión 1.13.0
- ✔ Mantiene UX de CLI profesional (tipo Prisma/Bun/Cursor CLI)

---
Si quieres el siguiente paso lógico, puedo ayudarte a:
- generar `npm publish` automatizado desde GitHub Actions
- sincronizar versión PyPI ↔ npm sin tocar archivos manualmente
- o convertir esto en landing page tipo producto (ya está en nivel comercial serio)