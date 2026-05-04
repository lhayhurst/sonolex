# CLAUDE.md — Sonolex

## Project

Sonolex is a local-first app for music studio documentation. Users upload equipment manuals (PDFs or web docs), chat with Claude grounded in those manuals, and assemble a living studio document. Optionally publishes a static read-only viewer to GitHub Pages.

The chat path uses a **QMD-only retrieval architecture** (see `docs/qmd-grounding-experiment.md`): Claude has no `Read`/`Grep`/`Glob`/`Bash`, only `mcp__qmd__query` and `mcp__qmd__get` to access the user's library. The forcing function is structural — Claude can't fall back on training-data inference because the alternative paths don't exist. Every factual claim must cite a retrieved source.

## Stack

- **Frontend**: Vite + React + TypeScript
- **Backend**: Express (Node.js, **requires Node 22+** — QMD's hard requirement)
- **Storage**: JSON canonical + markdown sidecars on disk. Manuals/cheatsheets use slug-based filenames (`chase-bliss-clean-midi-manual.json` + `.md`); slug is also the ID
- **Search**: [@tobilu/qmd](https://github.com/tobi/qmd) — local hybrid (BM25 + vector + LLM rerank) over the markdown sidecars. SQLite index lives at `data/.qmd-cache/qmd/index.sqlite`. ~2GB GGUF models download on first chat search
- **Claude integration**: Via `claude` CLI subprocess. Chat spawns the QMD MCP server as a stdio subprocess and passes it to Claude via `--mcp-config --strict-mcp-config`. Built-in tools restricted via `--disallowedTools` (the actual forcing function — `--allowedTools` in `-p` mode is auto-approve, not restriction)
- **Testing**: Vitest (use `--pool=vmForks` — QMD's native deps choke the default fork pool)

## Development Methodology

**TDD is mandatory.** All code must be written using:

- **Red-Green-Refactor**: Write a failing test first, implement the minimum to pass, then refactor.
- **Dan North's CUPID framework**:
  - **Composable**: Small, focused units that combine well
  - **Unix philosophy**: Do one thing well
  - **Predictable**: Behaves as expected, no surprises
  - **Idiomatic**: Fits the codebase's existing patterns (TypeScript strict, async/await, named exports, the existing testing style in `server/lib/`)
  - **Domain-based**: Code reflects the problem domain language
- **High test coverage**: All business logic, API routes, and data transformations must have tests.
- **Clean code**: Readable, well-named, minimal complexity.

## Commands

- `npm run dev` — Start both frontend (Vite) and backend (Express) in dev mode
- `npm test` — Run tests via Vitest (use `--pool=vmForks` for compatibility with QMD's native modules)
- `npm run build` — Build production frontend
- `npm run backfill:markdown` — Materialize markdown sidecars from existing JSON (one-shot, idempotent)
- `npm run migrate:slugs` — One-shot rename of UUID-named manuals/cheatsheets to slug-based filenames + remap studio.json references

## Conventions

- TypeScript strict mode
- Types defined in `src/types/index.ts`
- Server code lives in `server/`; frontend in `src/`
- JSON + markdown stored in `data/` (mostly gitignored — `data/manuals/*.md`, `data/cheatsheets/*.md`, `data/studio.md` are committed as a shareable library)
- Manual/cheatsheet IDs are slugs derived from titles, with collision suffixes (`scaler-3-user-guide-2`)
- The `data/.qmd-cache/` directory is gitignored — local index, models, and runtime state
- Requires `claude` CLI installed globally (`npm install -g @anthropic-ai/claude-code`)

## Background docs to read before changing the chat or grounding flow

- `docs/qmd-grounding-experiment.md` — the null hypothesis and A/B framing the QMD architecture is designed to test
- `docs/feedback-badges-plan.md` — the planned UI for surfacing live grounding signal (Q/E/D badges, confidence score, A/B toggle)
