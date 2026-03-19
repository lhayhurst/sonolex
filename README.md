# sonolex

A local-first app for music studio documentation. Upload equipment manuals, chat with Claude to describe your gear connections, and get an interactive studio map.

## Quick Start

Requires **Node.js 18+** and a **Claude subscription** (Pro, Max, or Team).

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

## Features

- **Manual Browser** — Upload equipment PDFs, Claude extracts MIDI CCs, specs, and connection details into searchable sections
- **Context-Aware Chat** — Multiple chat sessions, mention a device and Claude automatically loads that manual
- **Living Studio Document** — Tell Claude how your gear connects, it builds and maintains your setup doc
- **Local-First & Private** — Runs entirely on your machine, no cloud database, no accounts

## How it works

Sonolex uses the Claude Code CLI (`claude -p`) to process your equipment manuals — no separate API key or billing needed. It uses your existing Claude subscription.
