# Sonolex Features

## Grounded Retrieval (the headline)

- **QMD-Only Library Access** — Claude can only consult your manuals, cheatsheets, and studio doc through a local semantic search tool (`mcp__qmd__query`). No `Read`, `Grep`, `Glob`, or `Bash` — by design. Removes the easy paths Claude would otherwise use to short-circuit the library and answer from training-data inference.
- **Required Citations** — Every factual claim in a chat response must cite a retrieved source (`source: <slug> § <heading>`). Uncited assertions stand out visually as ungrounded.
- **Layered Fallback** — Claude searches manuals → cheatsheets → studio doc, in that order. Empty search results are treated as information ("you don't have a source for this"), not failure to invent something.
- **Conflict Surfacing** — When a cheatsheet disagrees with a manual (e.g. firmware-specific note vs. factory spec), Claude reports the conflict to the user with both sources cited rather than silently picking a winner.
- **Local Hybrid Search** — Powered by [QMD](https://github.com/tobi/qmd): BM25 full-text + vector similarity + LLM reranking, all running locally. ~2GB of GGUF models download on first use; everything offline thereafter.

## Manual Management

- **PDF Upload** — Drop or select a PDF equipment manual. Text is extracted client-side via pdfjs-dist, then structured into sections by Claude.
- **Web Import** — Paste a docs URL. Claude crawls the site (within the URL prefix), extracts content, and structures it.
- **AI-Powered Conversion** — Claude reads your raw manual text and produces a titled, summarized, section-organized document. Preserves MIDI CC maps, specifications, signal routing details, and configuration instructions.
- **Markdown Sidecars** — Every manual is stored as both `<slug>.json` (canonical) and `<slug>.md` (human-readable, git-trackable). The `.md` form is what QMD indexes and what you read on GitHub.
- **Slug-Based Identity** — Manual IDs are slugs derived from titles (`chase-bliss-clean-midi-manual`), not UUIDs. Filenames are meaningful in `git diff` and in directory listings. Collisions get suffixes (`scaler-3-user-guide-2`).
- **Device Summary** — Each manual gets a 2-3 sentence summary of what the device is and what it does. Surfaces in the chat catalog so Claude knows what to search for.
- **Section Hierarchy** — Manuals are broken into nested sections (up to 4 levels deep) with proper headings, preserved in the markdown sidecar.
- **Original PDF Access** — The original PDF is stored alongside the converted manual. Click "Open PDF" on any manual card to view it.
- **Delete & Re-upload** — Remove a manual and upload a fresh version when a new firmware or manual revision comes out.
- **Show/Hide Description** — Toggle the device summary on manual cards to keep the list compact.

## Chat

- **QMD-Grounded Conversation** — Ask Claude anything about your gear. Claude searches your library before answering, cites every claim, and refuses to invent. See *Grounded Retrieval* above.
- **Multiple Sessions** — Named chat sessions persist via `claude --resume`. Multi-turn conversations maintain full context. Switch between sessions in the sidebar.
- **Tool-Use Chips** — Real-time pills appear as Claude works: `🔍 mcp__qmd__query` when searching, `🔍 mcp__qmd__get` when fetching a specific document. The strip shows what was consulted to produce each answer.
- **Image Paste** — Paste images directly into chat. Claude can see and reason about them.
- **Type-Ahead** — Compose your next message while Claude is still working on the current one.
- **Studio Update via Chat** — Say "update my studio to include the Monolit" and Claude fetches the studio doc via QMD, asks for connection details, then writes the update directly.
- **Connection Detail Prompting** — Claude asks how devices are connected before making studio changes. The manual tells Claude what the device *can* do; only you know how you've actually wired it.
- **Markdown Rendering** — Claude's responses render with proper headings, code blocks, tables, and bullet lists.
- **Clear Chat** — Reset the conversation and start fresh.

## Cheat Sheets

- **Quick References** — Save custom MIDI maps, routing scenarios, shortcuts, troubleshooting recipes. Each cheat sheet has a category, tags, and free-form markdown.
- **Created from Chat** — Ask Claude "save a cheat sheet for the Drop → Ableton mapping" and it returns a JSON block that the system extracts and saves.
- **Filterable** — Browse by category and tag. Cards link to the full content.
- **Same Sidecar Pattern as Manuals** — Stored as `<slug>.json` + `<slug>.md`, indexed by QMD, queryable by Claude.

## Studio Document

- **Living Setup Document** — A comprehensive markdown document describing your complete studio: gear, connections, signal flow, MIDI routing, configuration.
- **Import from File** — Upload an existing studio setup document (markdown) to bootstrap.
- **Paste Import** — Paste markdown directly into the editor.
- **Direct Editing** — Click Edit to modify the studio document in a full-screen markdown editor.
- **Chat-Driven Updates** — Claude updates the studio document through conversation. Changes are detected and saved automatically.
- **Rendered Markdown** — The studio document displays as beautifully rendered HTML with headings, tables, code blocks, and diagrams.
- **Indexed by QMD** — The studio doc is its own search collection. Claude can query it like any manual.

## Upload Experience

- **Two-Phase Progress Bar** — Shows real progress during conversion. First upload uses an indeterminate bar; subsequent uploads estimate duration from historical data.
- **Conversion History** — Tracks input size vs. duration for each conversion. Estimates improve over time.
- **Global Status Bar** — Upload progress lives in a footer status bar that persists across page navigation. Start an upload on the Manuals page, switch to Chat, and the conversion keeps running.
- **Usage Report** — After each conversion, shows input/output token counts, cost in USD, and duration.
- **Error Handling** — Clear error messages for common failures (Claude CLI not installed, billing issues, invalid PDFs).
- **Auto-Reindex on Save** — Every save (manual, cheatsheet, studio doc) triggers a background QMD reindex so new content is immediately searchable. No manual rebuild step.

## App Shell

- **Three Themes** — Clean (light, minimal), Warm (creative, earthy tones), DAW (dark, at home next to Ableton). Toggle between them in the sidebar.
- **Collapsible Sidebar** — Collapse to icon-only mode for more content space. Smooth CSS transitions.
- **Workflow-Ordered Navigation** — Manuals → Chat → Studio → About. Matches the natural order of use.
- **About Page** — Built-in usage guide rendered from a committed markdown file.
- **Wrong-Backend Detection** — If you're running multiple Sonolex forks (e.g. Sonolex + Dragonbane Companion) and the Vite proxy lands on the wrong backend, the frontend detects the mismatch on boot and shows a blocking warning instead of silently corrupting data.

## Architecture

- **Local-First** — Runs entirely on your machine. No cloud database, no external services beyond Claude (which uses your existing subscription).
- **Two Local Agents** — (1) `claude -p` subprocess for chat. (2) QMD MCP server (subprocess of `claude`) for library search. Both inherit `XDG_CACHE_HOME=<dataDir>/.qmd-cache` so they share one SQLite index.
- **Forcing Function via `--disallowedTools`** — In Claude CLI's `-p` mode, `--allowedTools` is auto-approve, NOT restriction. Real restriction needs an explicit deny list. The chat route bans Bash, Read, Grep, Glob, ToolSearch, and ~20 other built-in tools so QMD search is the only library path Claude can reach.
- **Markdown + JSON Storage** — Studio data, manuals, and cheatsheets stored as both JSON (canonical) and markdown sidecars. Markdown is human-readable, git-trackable, and indexable by QMD. The shipping library (34 manuals + 6 cheatsheets + studio doc) is committed for cross-machine sharing.
- **PDF Storage** — Original PDFs preserved in `data/pdfs/<slug>.pdf` for reference.
- **TDD Throughout** — Every feature built test-first using Dan North's CUPID framework and red-green-refactor.
- **Vite + React + TypeScript** — Fast dev server, type safety, modern tooling.
- **Express Backend** — Minimal Node.js server (Node 22+ for QMD compatibility) for Claude CLI integration, PDF processing, file storage, and QMD index lifecycle.
