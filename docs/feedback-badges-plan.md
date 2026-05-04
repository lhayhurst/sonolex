# Feedback Badges & Live Confidence — Plan

## The idea

LLM UIs today give users almost nothing to chew on while the model works.
"Thinking..." with rotating words. Maybe a thought-stream behind a
disclosure widget if you're lucky.

Sonolex already proves badges work as a feedback channel. Let's extend that
into a **live, hieroglyphic strip** of badges that externalizes what the
agent is doing in real time. Each badge is a category of work, with
click-through detail. The strip itself becomes a chronological log of how
the response was built.

Combined with a **rolling confidence score** — derived from how much of the
output is grounded in retrieved sources vs inferred from training — the
user gets a continuously updated answer to the most important question:
*"can I trust this?"*

And combined with an **A/B toggle** on the chat bar, the user becomes the
qualitative side of the experiment — same question, two paths, immediate
comparison. The QMD null hypothesis becomes testable in production, every
day, by every user.

## The badge taxonomy

Four base badges, each with hover/click detail:

| Badge | Meaning | Triggered by | Detail panel shows |
|---|---|---|---|
| **🔍 Q (Querying)** | searching the local library | `qmd_search` tool call starts | the query string + intent |
| **🧠 E (Evaluating)** | reasoning, weighing evidence | thinking-block stream begins | the thinking text |
| **✍️ D (Designing)** | generating user-facing content | text-delta stream begins | (passive — the text appears in the message itself) |
| **💎 G (Grounded)** | factual claim with valid citation | parsed citation in output text | the source slug + section, with click-through to the manual |
| **⚠️ I (Inferred)** | factual claim **without** citation | unmatched assertion in output text | a candidate explanation: "this assertion has no retrieved source" |

The strip reads left-to-right as a literal sequence of operations. A
healthy response on a question the library can answer might look like:

```
🔍 🔍 🧠 ✍️ ✍️ 💎 ✍️ 💎 ✍️ 💎    confidence: 100%
```

A bad response — Claude inferred from training instead of retrieving:

```
🧠 ✍️ ⚠️ ✍️ ⚠️ ✍️ 💎    confidence: 33%
```

A refusal — the library has no source:

```
🔍 🔍 🔍 🧠 ✍️ "no source — I can't answer this"    confidence: n/a
```

The shape of the strip alone tells the user a lot before they read a word.

## The confidence score

```
confidence = grounded_claims / (grounded_claims + inferred_claims) × 100
```

Updated live as the response streams. Computed by counting `💎` and `⚠️`
badges in real time. Rendered prominently — single number, color-coded
(green ≥ 90%, amber 70–89%, red < 70%).

This is intentionally simple. We're not doing fancy probabilistic scoring.
We're counting structurally-distinguishable claims: ones with citations vs
ones without. The simplicity is what makes the metric trustworthy — it's
verifiable by anyone who reads the response.

## The A/B toggle

A two-position toggle in the chat composer:

- **A — QMD-grounded** (default): system prompt forces qmd_search,
  retrieval-only, citation-required, badges + confidence active
- **B — Baseline**: current pre-injection + grep behavior, no citation
  requirement, no badges

Toggling switches the system prompt and tool allowlist for the next
message. To make comparison meaningful:

- Show the active mode in the message bubble (small label or tinted edge)
- Add a "**re-ask in [other] mode**" button on each response — same
  question, opposite mode, side-by-side rendering
- Persist a per-session preference

This turns every user interaction into a potential A/B trial. The offline
eval (per the experiment brief) gives us controlled measurement; this
gives us the lived experience that decides whether anyone *wants* the
QMD-grounded mode.

## What we need from Claude's output

The existing stream gives us:
- Tool-use events (we already capture for chips) → drives 🔍 Q
- Thinking deltas → drives 🧠 E
- Text deltas → drives ✍️ D

For 💎 and ⚠️, we need to identify claims and citations *as text streams
in*. Two paths:

**Path 1 — heuristic citation parsing (start here):**
Standardize the citation format in the system prompt:
`(source: <slug> § <heading>)`. Parse text for sentences ending in this
pattern → 💎 grounded. Sentences asserting verifiable facts without it
→ ⚠️ inferred. Imperfect but ships fast.

**Path 2 — explicit claim markup (graduate to):**
Push the system prompt to wrap factual claims in markers:
`[fact source="chase-bliss-clean § MIDI CC Map"]CC 14 controls Dynamics[/fact]`
or `[fact source="none"]...[/fact]` for inferred. The frontend parses,
strips markers from display, and emits badges. Cleaner; relies on Claude
following format consistently.

Path 1 first — it gets badges shipping with the QMD branch. Path 2 if Path
1 produces too many false positives/negatives.

## Implementation phases

### Phase 1 — Foundation badges from existing stream events
- 🔍 Q badge from `tool_use` events (already streaming today)
- 🧠 E badge from `thinking` deltas
- ✍️ D badge from `text` deltas
- Render as a strip below/above the assistant message
- Click → detail panel (slide-in or inline disclosure)

No backend work needed here — just frontend rendering of events the
backend already emits. Could land on the QMD branch or on its own.

### Phase 2 — Citation parsing for 💎 and ⚠️
- System prompt: enforce citation format
- Frontend streaming parser: scan accumulated text for citation patterns
  on each text-delta arrival
- Emit 💎 for matched, ⚠️ for unmatched factual sentences
- Detail panel for ⚠️ explains *what's missing*

### Phase 3 — Live confidence score
- Counter component watches 💎 / ⚠️ events, computes live ratio
- Renders prominently near the response
- Color-codes by threshold

### Phase 4 — A/B toggle
- Toggle UI in chat composer
- Backend route accepts `mode: 'qmd' | 'baseline'` and routes through
  different system prompts / tool sets
- Mode label on each message bubble
- "Re-ask in other mode" button → side-by-side comparison view

### Phase 5 — Strip refinements (optional polish)
- Aggregate consecutive same-type badges (✍️ ×8 instead of eight ✍️s)
- Animations: 🔍 spins while searching, 💎 pulses on append
- Persist badge data on saved messages so the strip survives reload

## What this gives us

A UI that says — without any explanation needed — *here's exactly what
the agent did to produce this answer.* Search, think, generate, ground,
infer. The user can audit any step.

If our null hypothesis (in [qmd-grounding-experiment.md](qmd-grounding-experiment.md))
holds, the badge strip + confidence score will *show* it: QMD-mode
responses will be visibly chestier, baseline-mode will be visibly more
warning-laden. The UI becomes the proof.

If the null hypothesis fails — if QMD doesn't help — the badges will
also show that, which is just as valuable. We don't ship a feature that
hides our failures.

## What we are explicitly not doing

- **Probabilistic confidence** — we're not estimating probabilities, we're
  counting cited vs uncited claims. Honest and auditable beats
  sophisticated and opaque.
- **Hiding the warning badges** — if Claude inferred, the user sees it.
  No marketing-friendly suppression.
- **Auto-blocking inferred output** — we surface, we don't gatekeep.
  The user decides what's acceptable.
