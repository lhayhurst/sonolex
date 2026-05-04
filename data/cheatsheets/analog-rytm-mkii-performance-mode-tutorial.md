---
id: analog-rytm-mkii-performance-mode-tutorial
title: "Analog Rytm MKII — Performance Mode Tutorial"
category: quick-reference
tags: [analog-rytm, mkii, elektron, performance-mode, macros, live-performance]
createdAt: 2026-04-17T12:00:00.000Z
updatedAt: 2026-04-17T12:00:00.000Z
---

## What Is Performance Mode?

Performance Mode turns each of the 12 pads into a **performance macro** — a pressure-sensitive controller that modulates multiple parameters at once across any combination of drum tracks and the FX track. Unlike Scene Mode (which applies fixed ON/OFF parameter values), Performance Mode applies **relative modulation** proportional to the pressure you apply to the pad.

Performance Mode settings are stored as part of a **kit**. Save your kit regularly with **[YES] + [PLAY MODE]**.

> Performance macros and scenes **cannot be parameter-locked** on the sequencer — they are strictly live performance tools.

---

## Getting Started (Quick Start)

1. Start a pattern playing.
2. Press **[PERF]** to enter Performance Mode.
3. Press any dim green **[PAD]** — green pads indicate they contain a performance macro.
4. Vary the pressure on the pad and listen to how the sound changes.

---

## How Performance Macros Work

- Each macro assigns **modulation depth** values to parameters (not fixed values like scenes).
- The modulation is **relative to the current parameter setting**.
- Pressure controls how much of the modulation depth is applied:
  - **No pressure** = no change (offset of 0)
  - **Medium pressure** = half the modulation depth
  - **Maximum pressure** = full modulation depth

### Example

If the BD track's **TUN** parameter is set to **30**, and you lock it in a macro with a depth of **+24**:

| Pressure | Offset Applied | Resulting TUN Value |
|----------|---------------|--------------------|
| None | 0 | 30 |
| Medium | +12 | 42 |
| Maximum | +24 | 54 |

A depth of **-24** would work in the opposite direction (30 → 18 → 6).

---

## Editing Performance Macros

### Enter Performance Edit

1. Press **[PERF]** to enter Performance Mode.
2. **Press and hold [PERF]** for a short moment to enter Performance Edit mode.

### Select a Macro to Edit

- Press any **[PAD]** to select which of the 12 macros to edit.
- Use **[ARROW UP/DOWN]** to switch between macros.

### Bottom Status Bar

While in edit mode, the bottom of the screen shows (navigate with **[ARROW LEFT/RIGHT]**):

| Field | Description |
|-------|-------------|
| **PERF** | Which macro number you are editing |
| **LOCKS** | Number of parameter locks assigned to this macro |
| **\<CLEAR\>** | Press [YES] to clear this macro's locks |
| **\<CLEAR ALL\>** | Press [YES] to clear ALL 12 macros |

### Assigning Parameter Locks

1. **Hold the pad** for the macro you want to edit.
2. Select a track: press **[TRK] + [PAD]** for a drum track, or press **[FX]** for the FX track.
3. **Turn the DATA ENTRY knobs** to set modulation depth for the parameters on the current PARAMETER page.
4. Switch PARAMETER pages (using the **[PARAMETER]** keys) to access more parameters.
5. Repeat for as many tracks and parameters as desired.

### Visual Feedback While Editing

- **Half-bright red + flickering pads**: Drum tracks that have parameter locks in the current macro.
- **Full-bright green pad**: The currently active track (where you're setting locks).
- **Flickering [FX] key**: The macro contains FX track parameter locks.
- When pressing a pad with a macro, locked parameters show **inverted graphics** with their modulation depth values.

### Parameter Lock Limits

- **48 total parameter locks** across all 12 macros per kit.
- These can be distributed in any combination (e.g., all 48 on one macro, or spread across several).

### Copy / Paste / Clear a Macro

| Action | Shortcut |
|--------|----------|
| Copy macro | **[FUNC] + [RECORD]** |
| Paste macro | **[FUNC] + [STOP]** |
| Clear macro | **[FUNC] + [PLAY]** |

### Exit Edit Mode

Press **[PERF]** again to exit edit mode and return to Performance Mode. Your macros are now live — press the green pads with varying pressure to use them.

---

## Muting Performance Mode

You can temporarily mute all performance macro effects without leaving Performance Mode:

- Press **[FUNC] + [QPER]** to mute.
- Press **[FUNC] + [QPER]** again to unmute.
- The **[QPER] key** is green when Performance Mode is active, and turns off when muted.

---

## Quick Performance (QPER)

Quick Performance lets you control selected performance macros with the **QUICK PERF AMOUNT knob** — even when you're NOT in Performance Mode. This is useful for hands-on control while in other modes (Play, Mute, etc.).

### Setup

1. **Press and hold [QPER]**, then press one or more **[PADS]** or **[TRIG 1-12]** keys to select which macros to control.
2. **Release [QPER]**.

> Each time you perform this procedure, it **replaces** any earlier Quick Performance assignments.

### Usage

Turn the **QUICK PERF AMOUNT** knob to control how much the selected macros affect the tracks. The knob is an absolute encoder spanning ~320 degrees.

---

## Control In Mod (Bonus)

The **CONTROL IN 1 MOD** and **CONTROL IN 2 MOD** features work like performance macros but are controlled via **CV or expression pedal** connected to the back panel (EXP/CV IN 1 and 2). They are configured the same way as performance macros, with up to 4 track parameters per modulation macro, using DATA ENTRY knobs A-D to select tracks/parameters and E-H to set depth.

---

## Key Behavior Notes

- The **[PERF]** key has on/off and radio button behavior — only one pad mode can be active at a time (Play, Mute, Chromatic, Scene, or Performance).
- Performance Mode is designed for **one-handed operation** — mode keys, track keys, and pads are positioned for single-hand deployment while the other hand tweaks knobs.
- Remember: **save your kit** with **[YES] + [PLAY MODE]** to preserve your performance macro settings. If you switch kits without saving, only the most recently active kit's changes are preserved on power-off.
