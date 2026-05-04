# QED — Quod Erat Demonstrandum

A reusable, open-source framework for building **grounded LLM applications**
over a domain-specific markdown knowledge base.

The acronym does double duty:

- **Q.E.D.** — *quod erat demonstrandum*, "thus it has been demonstrated."
  Every chat answer is demonstrated from a retrieved source, not inferred
  from training. Show your work.
- **Q–E–D** — Querying → Evaluating → Designing. The three modes a grounded
  LLM cycles through, surfaced live to the user as a hieroglyphic badge
  strip.

## What QED is, in one paragraph

A web-based chat interface that talks to a local Claude CLI subprocess,
grounded in three layers of domain markdown (source references,
user-curated cheatsheets, a derived domain document). The LLM has only
one path to library content — a local hybrid search tool. The UI
externalizes the LLM's work as live badges with a rolling confidence
score. The thesis being tested: that structurally privileging local
retrieval over training-data inference produces measurably more grounded
answers.

QED is what gets extracted when you notice that
[sonolex](https://github.com/lhayhurst/sonolex) (music studio docs) and
[dragonbane-companion](https://github.com/lhayhurst/dragonbane-companion)
(RPG sourcebooks) are the same shape with different domain skins — and
that the shape itself is portable to law, medicine, ops, research,
journalism, anywhere a knowledge worker needs an LLM that doesn't make
things up about *their* documents.

## Why this matters (the thesis we're testing)

LLMs are trained to be confident generalists. When asked about anything
that vaguely matches their training, they answer from inference. Even
when given access to local data, they often:

- Skip the lookup if they "know" the answer
- Use lookups as confirmation rather than primary source
- Blend training knowledge with retrieved data, often without
  distinguishing
- Treat retrieval as advisory rather than authoritative

QED's bet is that **tool restriction is a more reliable forcing function
than system prompt instruction**. You can tell an LLM "don't guess"; you
can't make it stop guessing as long as it has access to its own
knowledge. But you *can* arrange the surrounding system so that retrieval
is the only path to factual content, and inferred content has nowhere to
hide.

The full experimental frame, hypothesis, and metric definitions live in
[qmd-grounding-experiment.md](./qmd-grounding-experiment.md). QED is the
implementation that puts that hypothesis into production.

## The three-layer knowledge model

The architectural insight that makes QED domain-portable is that almost
every "knowledge worker assistant" looks like this:

```
┌────────────────────────────────────────────────────────────────────┐
│                    Layer 0 — Source References                     │
│                                                                    │
│  The authoritative imported documents — large, slow-changing,      │
│  domain-canonical. Ground truth from outside the user.             │
│                                                                    │
│  sonolex:    equipment manuals (Ableton, RME, Drop, ...)           │
│  dragonbane: RPG sourcebooks (Core Rules, Bestiary, ...)           │
│  bank ops:   runbooks, compliance manuals                          │
│  law firm:   case law, statutes, brief archives                    │
│  research:   the user's paper library                              │
└────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────────────┐
│                  Layer 1 — User Cheatsheets                        │
│                                                                    │
│  Small, frequently-edited notes the user writes themselves —       │
│  workflow tricks, custom mappings, "this works for me", quirks     │
│  they've discovered. Authoritative for the user's own setup.       │
│                                                                    │
│  sonolex:    "Drop → Ableton MIDI map", "Move firmware quirks"     │
│  dragonbane: house rules, custom items, NPC dossiers, session logs │
│  bank ops:   incident postmortems, on-call playbooks               │
│  law firm:   internal case-law summaries, deposition strategies    │
└────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────────────┐
│              Layer 2 — Derived Domain Document                     │
│                                                                    │
│  A single living markdown file describing the user's current       │
│  state in their domain. Synthesized from layers 0 + 1 over time    │
│  through chat. The document IS the workflow output.                │
│                                                                    │
│  sonolex:    studio.md (gear, signal flow, MIDI routing)           │
│  dragonbane: campaign.md (story, NPCs, plot threads, decisions)    │
│  bank ops:   incident.md (active incident state, decisions log)    │
│  law firm:   case.md (active matter state, theory of the case)     │
└────────────────────────────────────────────────────────────────────┘
```

Each layer has a different epistemic role:

- **Layer 0 is canonical** — what the manufacturer/publisher/regulator says.
- **Layer 1 is situated** — what the user has figured out in their context.
- **Layer 2 is current state** — what's true right now in this user's world.

When sources disagree, that's information. The retrieval layer surfaces
the disagreement; it doesn't silently pick a winner.

## What QED bundles

### 1. Claude CLI integration patterns

Hard-won lessons from sonolex + dragonbane that aren't obvious from the
CLI docs:

- **`--disallowedTools` is the actual forcing function.** In `-p` (print)
  mode, `--allowedTools` is auto-approve, NOT restriction. The workspace
  trust dialog is skipped. To genuinely keep tools out of Claude's hands
  you need an explicit deny list. ToolSearch is critical to deny — it
  loads arbitrary deferred tools and bypasses every other restriction.
- **`--strict-mcp-config` filters out the user's globally-configured MCP
  servers** so they don't leak in and dilute the forcing function.
- **CLI flag passing**: tool lists are reliable as a single
  comma-separated string; variadic `<tools...>` parsing collides with
  subsequent flags when the list is long.
- **MCP server resolution under ESM**: `import.meta.resolve` works where
  `createRequire` fails (because many packages declare only the `import`
  condition in their `exports` field).
- **Bypass shell wrappers**: invoke a package's JS entrypoint directly
  with `process.execPath` so subprocesses don't depend on the user
  having `bun` (or any other interpreter the wrapper might prefer)
  installed.
- **Streaming chat protocol**: NDJSON over a long-lived response, with
  events for `thinking` deltas, `text` deltas, `tool_use` start/result,
  and a final `done` event with usage. Allows the badge UI to render in
  real time.
- **Markdown sidecars + JSON canonical**: every domain entity is stored
  as both `.json` (canonical, app reads/writes) and `.md` (human-readable,
  git-trackable, search-indexable). Storage layer owns the invariant.
- **Slug-based filenames**: derived from titles at create time, frozen
  thereafter. Filename is also the ID. Collisions get suffixes
  (`scaler-3-user-guide-2`).
- **Migration scripts** for both backfilling sidecars and renaming
  UUIDs to slugs (one-shot, idempotent).

### 2. The web chat experience

A single React frontend + Express backend that any domain inherits:

- **Composable navigation** — sidebar shows domain-defined labels for
  each layer (e.g. "Manuals" / "Cheatsheets" / "Studio" vs
  "Sourcebooks" / "Notes" / "Campaign"). Plus chat sessions.
- **Multi-session chat** — named persistent sessions via `claude --resume`,
  type-ahead while Claude is thinking, image paste.
- **Markdown rendering** with GFM tables, code blocks, citation links.
- **TOC pane** for the derived domain doc with collapsible sections and
  active-heading tracking.
- **Domain skinning widget** — a setup screen where the user (or app
  installer) picks vocabulary, layer labels, system prompts, and themes.
  See [Domain Skinning](#domain-skinning) below.
- **Three themes** — Clean, Warm, DAW (or whatever the domain calls
  for) toggleable in the sidebar.

### 3. The badge dashboard (the live grounding signal)

A hieroglyphic strip of badges that externalizes the LLM's work in real
time. Each badge clickable for detail. The strip itself is a chronological
log of how the response was built.

| Badge | Meaning | Triggered by | Detail |
|---|---|---|---|
| **🔍 Q (Querying)** | searching the local library | `qmd_query` tool call starts | the query string + intent |
| **🧠 E (Evaluating)** | reasoning, weighing evidence | thinking-block stream begins | the thinking text |
| **✍️ D (Designing)** | generating user-facing content | text-delta stream begins | (passive — text appears in the message itself) |
| **💎 G (Grounded)** | factual claim with valid citation | parsed citation in output text | source slug + section, click to open |
| **⚠️ I (Inferred)** | factual claim **without** citation | unmatched assertion in output text | "this assertion has no retrieved source" |

A healthy response on a question the library can answer:

```
🔍 🔍 🧠 ✍️ ✍️ 💎 ✍️ 💎 ✍️ 💎    confidence: 100%
```

A bad response — Claude inferred from training:

```
🧠 ✍️ ⚠️ ✍️ ⚠️ ✍️ 💎    confidence: 33%
```

A refusal — library has no source:

```
🔍 🔍 🔍 🧠 ✍️ "no source — I can't answer this"    confidence: n/a
```

**Rolling confidence score:**

```
confidence = grounded_claims / (grounded_claims + inferred_claims) × 100
```

Updated live as the response streams. Single number, color-coded
(green ≥ 90%, amber 70–89%, red < 70%). Intentionally simple —
counting beats estimating.

**Critical requirement: thinking-stream capture must survive.**
Today's `claude -p --output-format stream-json --include-partial-messages`
gives us thinking deltas, text deltas, and tool-use events. The 🧠 badge
depends on the thinking stream continuing to flow. Any future change to
how we invoke Claude must preserve thinking-event capture — the badge
strip loses half its value without it.

The full plan including phasing and "what we're explicitly not building"
lives in [feedback-badges-plan.md](./feedback-badges-plan.md).

### 4. QMD-powered grounding

[QMD](https://github.com/tobi/qmd) — local hybrid search (BM25 + vector
+ LLM rerank) over markdown — as the *only* library access path for the
LLM:

- **Three QMD collections** matching the three knowledge layers
  (`source`, `cheatsheets`, `derived`)
- **Layered fallback search procedure**: source → cheatsheets → derived
  → "no source"
- **Conflict surfacing** when a cheatsheet disagrees with a source
- **Citation rendering** in the chat UI: `(source: <slug> § <heading>)`
  becomes a clickable link to that section
- **Reranker scores** surfaced to Claude so confidence calibrates
- **First-run model download** (~2GB) handled gracefully with progress UI
- **Index lifecycle** wired to storage save/delete events; bootstrap
  reindex on server start
- **Shared SQLite** between the embedded indexer and the MCP subprocess
  via `XDG_CACHE_HOME` alignment

### 5. The A/B toggle

A two-position switch on the chat composer:

- **A — QMD-grounded** (default): retrieval-only, citation-required,
  badges + confidence active
- **B — Baseline**: pre-injection + grep, no citations, no badges

Plus a "**re-ask in [other] mode**" button on each response → same
question, opposite mode, side-by-side comparison.

Every interaction becomes a potential A/B trial. The user is the
qualitative judge; the eval harness (see experiment brief) provides
quantitative measurement. Together they decide whether the QMD-grounded
mode actually delivers what the thesis predicts.

## Domain skinning

How a new vertical adopts QED:

```yaml
# qed.config.yml — the domain skin

name: My Domain
brand:
  short: mydomain
  hero: "Know your X"
  hero_sub: "Upload your Y. Ask Claude. Build your Z."

layers:
  source:
    label: Manuals          # what the navigation says
    plural: manuals         # for grammar in prompts
    description: Equipment manuals from manufacturers
    import_modes: [pdf, web]  # which importers to enable
  cheatsheets:
    label: Cheat Sheets
    description: Quick references the user has created
    categories: [midi-map, signal-routing, shortcuts, troubleshooting]
  derived:
    label: Studio
    filename: studio.md
    description: The user's current studio setup

prompts:
  domain_role: "music studio assistant"
  units: "MIDI CCs, signal flow, audio specs"
  conflict_example: |
    "The Clean manual says CC 14 is Dynamics, but your cheatsheet
    'Drop → Clean Setup' says CC 14 is Sensitivity. Your cheatsheet
    may be stale (different firmware?) or the manual may be wrong."

themes:
  - name: Clean
    palette: light-minimal
  - name: Warm
    palette: earthy
  - name: DAW
    palette: dark-amber
```

The QED core reads this config to:

- Render navigation labels and the hero copy
- Build the system prompt with domain-appropriate vocabulary
- Choose which importers are exposed
- Pick the right defaults for the conflict-surfacing example
- Set up themes

A new domain is largely a YAML file + maybe a custom theme + (optionally)
custom importers if the source layer needs special parsing. **No
forking required.**

## Reference implementations

These are the two existing apps that QED gets extracted from. Both
predate QED and would be retrofitted to consume it after extraction:

### sonolex

[github.com/lhayhurst/sonolex](https://github.com/lhayhurst/sonolex) —
music studio documentation. Layer 0 = equipment manuals (PDF or web
imports). Layer 1 = cheatsheets (MIDI maps, signal routing, shortcuts,
preset notes). Layer 2 = `studio.md`. The QMD grounding architecture
shipped on `feature/qmd-search` and is now on main. The badge UI is
planned but not built.

### dragonbane-companion

[github.com/lhayhurst/dragonbane-companion](https://github.com/lhayhurst/dragonbane-companion) —
RPG game-master companion. Layer 0 = sourcebooks (Core Rules, Bestiary,
adventures). Layer 1 = session notes, NPC dossiers, house rules. Layer 2
= `campaign.md`. Has table-quality and page-reference improvements in
the manual converter that sonolex already pulled back. Hasn't yet
adopted QMD — probably the first port of QED's grounding architecture.

The two together prove the abstraction holds across very different
domains (technical specs vs narrative game state). The bank/law/research
verticals are speculation until someone builds them.

## Extraction roadmap

When QED is ready to be its own repo (not yet — see "Open questions"
below), the rough plan:

### Phase 0 — Decide it's time

Triggers that justify extraction:

- The grounding null hypothesis is settled (see experiment brief) —
  proven or refuted with offline eval. We know what we're shipping.
- A third consumer materializes — work begins on a non-music, non-RPG
  vertical and the temptation to copy-paste forces extraction.
- Someone else asks for it — public demand is a signal.

Until then, sonolex is the lab. QED-the-library is the conceptual frame.

### Phase 1 — Carve extraction-ready boundaries inside sonolex

- Move QED-pattern code into `server/qed/` and `src/qed/` namespaces
- Generic types only (`Document`, `Collection`, `Citation`, not `Manual`,
  `CheatSheet`, `StudioDoc`)
- Sonolex-domain types map to QED types at the boundary in a thin shim
  layer
- No music vocabulary in `qed/*` — neutral terms throughout
- Folder rename done as a single mechanical refactor, no behavior change

This is the cheapest hedge — gives optionality without committing.

### Phase 2 — Lift to a new repo

- New repo `tobilu/qed` (or wherever)
- `npm publish @qed/core`, `@qed/web`, `@qed/cli` (split if helpful, or
  monorepo it)
- Sonolex switches to consuming `@qed/*` packages, becoming a thin domain
  skin: domain config + custom importers + custom themes
- Dragonbane does the same

### Phase 3 — Onboard a non-toy third consumer

A real adopter (you running a different vertical, or someone else)
proves the abstractions are honest. Friction discovered here drives the
next API revision.

## Open questions for the next session

These are the live design tensions an incoming Claude should be ready
to negotiate. The user has opinions but hasn't settled on all of them.

1. **Where does the badge confidence parser live?** Server-side post-hoc
   (more accurate, harder to stream) or client-side as text accumulates
   (faster, must agree with server)? Probably client-side with a
   server-side validation pass.

2. **A/B toggle session model.** Can a session switch modes mid-conversation
   (different system prompts), or does each session pick a mode at
   creation? Cleanest is per-session; lived experience may push back.

3. **Eval harness as part of QED, or separate?** It's tightly coupled to
   the grounding thesis but useful well beyond Sonolex. Probably belongs
   in QED as `@qed/eval` with the question-set format documented but the
   actual questions domain-specific.

4. **MCP server choice.** Today QMD ships an MCP server we use directly.
   Future could include alternative search backends (custom embeddings,
   a remote API, even a paid SaaS for organizations) behind the same
   MCP surface. Worth designing the boundary now even if we only have
   one implementation.

5. **First-run UX for the model download.** ~2GB is a real cost. Options:
   defer until first search (current), download eagerly with progress
   bar at install, or offer a "lex-only" mode that skips embeddings
   entirely and uses only BM25 + reranker. The eval harness will tell us
   how much quality we'd lose with lex-only.

6. **Domain config validation.** Hand-edited YAML is friction; a UI
   wizard (the "system gear widget" in the user's vocabulary) would be
   nicer. Wizard outputs YAML so the file is still authoritative and
   diffable.

7. **The Q–E–D mnemonic for end users.** Internally these letters mean
   Querying/Evaluating/Designing. Whether to surface that to non-technical
   users (as legend? tooltip? not at all?) is a UX call. The icon-only
   strip might be enough.

## What QED is NOT

To keep scope honest:

- **Not a general-purpose RAG framework.** Opinionated about three
  layers, opinionated about citation format, opinionated about tool
  restriction. If you want a flexible toolkit, use LangChain or
  LlamaIndex. QED has a thesis and the thesis shapes the API.
- **Not a Claude wrapper.** Uses the Claude CLI today; the architecture
  could swap LLMs but the goal is grounded chat, not LLM portability.
- **Not a search engine.** Wraps QMD; doesn't reinvent retrieval.
- **Not a CMS.** Doesn't manage users, permissions, multi-tenancy, or
  publishing workflows. Local-first and single-user by design (though
  domain config could be checked into git and shared across a team).
- **Not a research project.** It tests one specific hypothesis about
  LLM grounding through tool restriction. Win or lose, the answer is
  useful and the implementation is shippable. Not an academic paper.

## How to read this doc as the next Claude

If you're an LLM picking up QED extraction:

1. Read [qmd-grounding-experiment.md](./qmd-grounding-experiment.md)
   first. That's the *why*. Without that, the design choices look
   arbitrary or paranoid.
2. Read [feedback-badges-plan.md](./feedback-badges-plan.md). That's
   the UI manifestation of the *why*.
3. This document is the *what* — what the extracted thing should be.
4. The reference implementations (sonolex on main, dragonbane on its
   own repo) are the *how* — the working code patterns to lift.
5. The user's voice in the original conversation that produced this
   doc was clear about a few non-negotiables:
   - Tool restriction is the primary forcing function (not prompt
     instruction alone)
   - Citation discipline is observable evidence, not aspirational
   - Empty search is information, not failure
   - The user is the arbiter of source conflicts, not the LLM
   - "Beat the null hypothesis" is the actual product goal
   - QED isn't extracted yet — extract-ready architecture in sonolex
     first, real extraction after the thesis is settled

That last point is critical. Don't pre-extract. Don't fork. Build inside
sonolex with QED-shaped boundaries until extraction is forced by a third
consumer or a settled thesis. The naming — `qed/` — is itself a forcing
function: as soon as you label the folder, you'll feel the friction
every time you put domain-specific assumptions in it.
