# sonolex

A local-first app for music studio documentation. Upload equipment manuals, chat with Claude *grounded in your actual library* (no training-data guessing), and build a living studio document.

## Quick Start

Requires **Node.js 22+** and a **Claude subscription** (Pro, Max, or Team).

```bash
npm install -g @anthropic-ai/claude-code  # Install Claude Code CLI
claude                                     # Sign in once
git clone https://github.com/lhayhurst/sonolex.git
cd sonolex
npm install
npm run dev
```

Or [download the zip](https://github.com/lhayhurst/sonolex/archive/refs/heads/main.zip) if you don't have git installed — unzip, then run the last three commands above.

Works on **macOS** and **Linux**. On Linux, you may need to install Node.js via [nvm](https://github.com/nvm-sh/nvm) if your distro ships an older version.

**First chat is slow** — the first time Claude searches your library, [QMD](https://github.com/tobi/qmd) downloads ~2GB of local search models (embedding + reranker) into `data/.qmd-cache/`. After that, search is fast and offline.

## Features

- **Grounded Answers, Not Guesses** — Claude only answers from your actual manuals via local semantic search. Every factual claim is cited; if the library has no source, Claude says so instead of inventing one. (See [docs/qmd-grounding-experiment.md](docs/qmd-grounding-experiment.md) for the design rationale.)
- **Import from PDFs or the Web** — Upload equipment PDFs or paste a docs URL. Claude crawls, extracts, and structures content into searchable sections. Handles large manuals automatically.
- **Multi-Session Chat** — Multiple named chat sessions with full context. Paste images, type ahead while Claude thinks. Tool-use chips show what Claude is searching for in real time.
- **Cheat Sheets** — Quick references for custom MIDI maps, routing, shortcuts, troubleshooting. Create them manually or ask Claude to save one from chat.
- **Living Studio Document** — Claude reads and edits your studio doc directly, with a navigable table of contents and collapsible sections.
- **Shareable Markdown Library** — Manuals and cheatsheets are stored as human-readable markdown with slug-based filenames. The library is checked into git so you can sync it across machines.
- **Local-First & Private** — Runs entirely on your machine, no cloud database, no accounts. Even the search models run locally.

## How it works

Sonolex uses two local agents:

1. **Claude Code CLI** (`claude -p`) — uses your existing Claude subscription, no separate API key.
2. **QMD** (bundled) — a local hybrid search engine (BM25 + vector + LLM rerank) over the markdown library.

When you chat, Claude has exactly one path to access your library: a `qmd_search` tool. No `Read`, no `Grep`, no `Bash`. This structural restriction is the **forcing function** that keeps answers grounded — Claude can't fall back on training-data knowledge of music gear because there's no path to express it as a verified claim.

The first chat triggers a one-time ~2GB model download. After that, search runs entirely on your machine.
