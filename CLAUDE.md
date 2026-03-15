# CLAUDE.md — Sonolex

## Project

Sonolex is a local-first app for music studio documentation. Users upload equipment manuals (PDFs), chat with Claude to describe their gear connections, and Claude assembles a studio map. The app provides visualization, manual browsing, and search. Optionally publishes a static read-only viewer to GitHub Pages.

## Stack

- **Frontend**: Vite + React + TypeScript
- **Backend**: Express (Node.js) for Claude API
- **Storage**: JSON files on disk
- **Claude API**: `@anthropic-ai/sdk` (server-side only)
- **Testing**: Vitest

## Development Methodology

**TDD is mandatory.** All code must be written using:

- **Red-Green-Refactor**: Write a failing test first, implement the minimum to pass, then refactor.
- **Dan North's CUPID framework**:
  - **Composable**: Small, focused units that combine well
  - **Unix philosophy**: Do one thing well
  - **Predictable**: Behaves as expected, no surprises
  - **Idempotent**: Safe to call multiple times
  - **Domain-based**: Code reflects the problem domain language
- **High test coverage**: All business logic, API routes, and data transformations must have tests.
- **Clean code**: Readable, well-named, minimal complexity.

## Commands

- `npm run dev` — Start both frontend (Vite) and backend (Express) in dev mode
- `npm test` — Run tests via Vitest
- `npm run build` — Build production frontend

## Conventions

- TypeScript strict mode
- Types defined in `src/types/index.ts`
- Server code lives in `server/`
- Frontend code lives in `src/`
- JSON data stored in `data/` directory
- API key in `.env` (never committed)
