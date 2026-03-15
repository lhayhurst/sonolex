# sonolex

A local-first app for music studio documentation. Upload equipment manuals, chat with Claude to describe your gear connections, and get an interactive studio map.

## Quick Start

```bash
npm install -g @anthropic-ai/claude-code  # Install Claude Code CLI
claude                                     # Sign in once
npm install
make run
```

## Features

- **Studio Visualization** — Interactive SVG graph of your gear and signal flow
- **Manual Browser** — Full-text search across all your equipment manuals
- **AI-Powered Setup** — Chat with Claude to build your studio map from manuals
- **Publish** — Export a static read-only site to share your studio setup

## How it works

Sonolex uses the Claude Code CLI (`claude -p`) to process your equipment manuals — no separate API key or billing needed. It uses your existing Claude subscription.
