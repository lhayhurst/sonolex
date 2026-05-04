# QMD Grounding Experiment — Null Hypothesis Brief

## What we're testing

Whether **forcing an LLM to retrieve from local sources** (instead of letting
it pull from training inference) measurably reduces hallucination on
domain-specific factual questions about a user's music studio gear.

The broader claim, if validated: **tool restriction is a more reliable forcing
function than system prompt instruction**. You can tell an LLM "don't guess";
you can't make it stop guessing as long as it has access to its own
knowledge. But you *can* arrange the surrounding system so that retrieval is
the only path to factual content, and inferred content has nowhere to hide.

## The hypotheses

**H₀ (null):** A QMD-only retrieval system with strict citation does **not**
measurably improve grounding (as measured by the manual/total ratio defined
below) compared to the current mixed-strategy approach (pre-injection +
optional grep).

**H₁ (alternative):** A QMD-only retrieval system with strict citation
produces a **higher manual/total ratio** than the current mixed-strategy
approach. Specifically, the ratio approaches 1.0 in the QMD-only condition
and sits meaningfully below 1.0 in the baseline.

We aim to reject H₀.

## The two arms

### A — Treatment: QMD-only

- Sole retrieval tool exposed to the model: `qmd_search`. No `Read`, no
  `Grep`, no `Glob`. Edit/Write retained only for the studio doc update flow
  (separate concern, scoped path).
- System prompt names what manuals and cheatsheets exist (catalog: titles +
  one-line summaries) but **injects no content**.
- Required citation format on every factual claim
  (`(source: <slug> § <heading>)`).
- Layered fallback: manuals → cheatsheets → studio doc → explicit
  `"no source"`.
- Conflict surfacing: when a cheatsheet disagrees with a manual, the model
  reports the conflict to the user with both sources cited rather than
  silently picking a winner.

### B — Baseline: current state (pre-QMD)

- Pre-injection of "relevant" manuals into the prompt via substring match
  (`findRelevantManuals`).
- `GROUNDING` block in the system prompt instructing Claude to grep before
  answering.
- `Read`, `Grep`, `Glob`, `Edit`, `Write` all available.
- No citation requirement.

## The metric: manual/total ratio

For each response, count two things:

- **`total`** = total **factual claims** in the response. A factual claim is
  any statement asserting something specific about the user's gear, manual,
  or setup that is verifiable against the source library. ("CC 14 controls
  Dynamics on the Clean" is a factual claim. "MIDI is a useful protocol" is
  not — it's general background.)
- **`manual`** = subset of those factual claims that are **100% supported by
  retrieved QMD context** — verifiable against a specific manual,
  cheatsheet, or studio passage that the model actually retrieved during
  this turn.

The metric:

```
grounding_ratio = manual / total
```

- **1.0** = every factual claim is sourced from the user's library.
- **0.0** = every factual claim came from training inference.
- The complement, `(total − manual) / total`, is **the inference
  contamination rate** — the population we are trying to drive toward
  zero.

H₁ predicts arm A drives the ratio toward 1.0 while arm B sits at some
value meaningfully below 1.0.

## Question set

A standardized eval set of roughly 30–50 questions, with deliberate
representation across:

- **Easy lookup** — single-manual answer ("What CC controls dynamics on the
  Clean?")
- **Cross-collection** — requires consulting multiple manuals
- **User-specific** — only answerable from cheatsheets or the studio doc
- **Trick questions** — about gear with no manual in the library; correct
  answer is to refuse, not invent
- **Conflict cases** — where a cheatsheet disagrees with the corresponding
  manual; correct answer surfaces the conflict

Each question has a known ground truth (citation or "no source") authored
when the eval set is built.

## Scoring

Both arms run against the same question set with the same model, same
session settings, same temperature. Each response is scored against the
ground truth using a fixed rubric. To minimize scorer bias:

- Use a separate LLM pass for scoring (different prompt, ideally different
  model)
- Spot-check a sample by hand
- Score blind to which arm produced the response

For each response, record:

- `total` (count of factual claims)
- `manual` (count of factual claims with valid retrieved citations)
- `refused` (boolean — did the model refuse to answer)
- `correct_refusal` (only meaningful for trick questions)

## What success looks like

- Arm A's mean grounding_ratio is significantly higher than arm B's
  (paired test, *p* < 0.05)
- Arm A's correct-refusal rate on trick questions approaches 100%
- Arm A does not regress on **response usefulness** — same actionable
  answers when the library contains the answer, just grounded

## What failure would look like

- A's grounding_ratio matches B's → tool restriction alone is insufficient;
  the model still finds ways to mix in training knowledge
- A refuses on questions the library *can* answer → forcing function too
  aggressive; retrieval recall too low; or the catalog summary in the
  system prompt isn't surfacing what's actually available
- A's answers are noticeably worse than B's → QMD search quality is the
  bottleneck, not the architecture

Each failure mode points to a different next experiment, so the diagnostic
value is high either way.

## Threats to validity

- **Scorer bias.** If a single LLM grades both arms, its scoring may
  systematically favor one mode (e.g. preferring cited responses
  regardless of correctness). Mitigation: cross-LLM scoring of a subset,
  human spot-check.
- **Question selection bias.** The eval must include both "library has
  the answer" and "library doesn't" cases. Skew either way invalidates
  the conclusion. Pre-register the question distribution before scoring.
- **Latent training overlap.** Many of these manuals were probably in
  Claude's pretraining. Its prose may sound grounded even when it didn't
  retrieve. We measure citations and explicit retrievals, not surface
  fluency, to control for this.
- **Retrieval ceiling effect.** If QMD doesn't return the right chunks,
  A fails for retrieval reasons rather than architectural ones. The
  scoring rubric must distinguish "claim isn't in library" from "claim
  is in library but QMD missed it" — both look like uncited claims but
  point at very different fixes.

## Why this matters beyond Sonolex

If H₀ is rejected with a meaningful effect size, we have empirical support
for three claims that generalize beyond music gear documentation:

1. **Tool restriction is a primary forcing function.** Removing the
   alternatives matters more than asking the model to choose well.
2. **Retrieval-first is a structural pattern, not a hint.** Systems that
   merely *expose* retrieval and hope the model uses it will see Claude
   default to the path of least resistance.
3. **Citation discipline is observable evidence of grounding.** Not just
   claimed grounding — verifiable, auditable, and a precondition for
   trust in agentic systems operating on real user data.

The Sonolex experiment is small. The principle, if it holds, is portable.
