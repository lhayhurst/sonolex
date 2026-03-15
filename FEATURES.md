# Sonolex Features

## Manual Management

- **PDF Upload** — Drop or select a PDF equipment manual. Text is extracted client-side via pdfjs-dist, then structured into sections by Claude.
- **AI-Powered Conversion** — Claude reads your raw manual text and produces a titled, summarized, and section-organized document. Preserves MIDI CC maps, specifications, signal routing details, and configuration instructions.
- **Device Summary** — Each manual gets a 2-3 sentence summary of what the device is and what it does.
- **Section Hierarchy** — Manuals are broken into nested sections (up to 4 levels deep) with proper headings.
- **Original PDF Access** — The original PDF is stored alongside the converted manual. Click "Open PDF" on any manual card to view it.
- **Delete & Re-upload** — Remove a manual and upload a fresh version when a new firmware or manual revision comes out.
- **Show/Hide Description** — Toggle the device summary on manual cards to keep the list compact.

## Chat

- **Conversational AI Assistant** — Ask Claude anything about your gear. Claude has context from all your uploaded manuals.
- **Manual Context Injection** — When you mention a device, Claude automatically receives that manual's full content. You don't need to tell it what you have — it knows.
- **Session Persistence** — Chat sessions persist via `claude --resume`. Multi-turn conversations maintain full context without re-sending history.
- **Markdown Rendering** — Claude's responses render with proper headings, code blocks, tables, and bullet lists.
- **Studio Update via Chat** — Say "update my studio to include the Monolit" and Claude will ask for connection details, then update your studio document.
- **Connection Detail Prompting** — Claude asks how devices are connected before making studio changes. It knows what the device *can* do from the manual, but only you know how you've wired it.
- **Clear Chat** — Reset the conversation and start fresh.

## Studio Document

- **Living Setup Document** — A comprehensive markdown document describing your complete studio: gear, connections, signal flow, MIDI routing, and configuration.
- **Import from File** — Upload an existing studio setup document (markdown) to bootstrap.
- **Paste Import** — Paste markdown directly into the editor.
- **Direct Editing** — Click Edit to modify the studio document in a full-screen markdown editor.
- **Chat-Driven Updates** — Claude updates the studio document through conversation. Changes are detected and saved automatically.
- **Rendered Markdown** — The studio document displays as beautifully rendered HTML with headings, tables, code blocks, and diagrams.

## Upload Experience

- **Two-Phase Progress Bar** — Shows real progress during conversion. First upload uses an indeterminate bar; subsequent uploads estimate duration from historical data.
- **Conversion History** — Tracks input size vs. duration for each conversion. Estimates improve over time.
- **Global Status Bar** — Upload progress lives in a footer status bar that persists across page navigation. Start an upload on the Manuals page, switch to Chat, and the conversion keeps running.
- **Usage Report** — After each conversion, shows input/output token counts, cost in USD, and duration.
- **Error Handling** — Clear error messages for common failures (Claude CLI not installed, billing issues, invalid PDFs).

## App Shell

- **Three Themes** — Clean (light, minimal), Warm (creative, earthy tones), DAW (dark, at home next to Ableton). Toggle between them in the sidebar.
- **Collapsible Sidebar** — Collapse to icon-only mode for more content space. Smooth CSS transitions.
- **Workflow-Ordered Navigation** — Manuals → Chat → Studio → About. Matches the natural order of use.
- **About Page** — Built-in usage guide rendered from a committed markdown file.

## Architecture

- **Local-First** — Runs entirely on your machine. No cloud database, no external services beyond Claude.
- **Claude Code CLI** — Uses `claude -p` subprocess instead of the API SDK. No separate API key or billing — uses your existing Claude subscription.
- **JSON File Storage** — Studio data, manuals, and chat history stored as JSON files on disk. Human-readable, git-friendly.
- **PDF Storage** — Original PDFs preserved in `data/pdfs/` for reference.
- **TDD Throughout** — Every feature built test-first using Dan North's CUPID framework and red-green-refactor. 157 tests across 23 test files.
- **Vite + React + TypeScript** — Fast dev server, type safety, modern tooling.
- **Express Backend** — Minimal Node.js server for Claude CLI integration, PDF processing, and file storage.
