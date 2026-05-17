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

- **Import from PDFs or the Web** — Upload equipment PDFs or paste a docs URL. Claude crawls, extracts, and structures content into searchable sections. Handles large manuals automatically.
- **Multi-Session Chat** — Multiple named chat sessions with full context. Paste images, type ahead while Claude thinks. Mention a device and Claude loads that manual.
- **Cheat Sheets** — Quick references for custom MIDI maps, routing, shortcuts, troubleshooting. Create them manually or ask Claude to save one from chat.
- **Living Studio Document** — Claude reads and edits your studio doc directly, with a navigable table of contents and collapsible sections.
- **Local-First & Private** — Runs entirely on your machine, no cloud database, no accounts.

## How it works

Sonolex uses the Claude Code CLI (`claude -p`) to process your equipment manuals — no separate API key or billing needed. It uses your existing Claude subscription.
