---
id: chase-bliss-clean-midi-manual
title: "Chase Bliss Clean — MIDI Manual"
source: "Clean_Midi+Manual_Pedal_Chase+Bliss.pdf"
convertedAt: 2026-03-15T10:31:00.649Z
summary: "The Chase Bliss Clean is a guitar effects pedal with comprehensive MIDI control capabilities. It receives MIDI via TRS cable, allowing remote control of all parameters, preset saving/recall (up to 122 slots), and deep configuration through CC messages. The pedal features dynamics processing, EQ, swell, and various envelope and filter modes."
---

# Getting Started

You can use MIDI with Clean to control any of its parameters and save and recall up to 122 presets.

1. Clean receives MIDI through a standard ¼" TRS patch cable. If your controller has a 5-pin output, the Chase Bliss MIDIBox is a simple way to convert 5-pin MIDI to TRS (the MIDIBox is not included with Clean).

2. Clean is set to MIDI channel 2 by default, but it's easy to change. Simply hold down both foot switches when you power up the pedal. The pedal is now looking for the first Program Change (PC) or Continuous Control (CC) message it sees, and it will then set itself to that channel.

# Saving a Preset via MIDI

Presets are both saved and recalled using Program Change (PC) messages. To save a preset, send a Program Change message while holding down both foot switches. Sending a Program Change message of 45, for example, will save your current settings to preset 45. There are 122 total slots. Slots 1 and 2 correspond to the preset toggle on the pedal. Slot 1 is the right slot. Slot 2 is the left slot.

# Recalling a Preset via MIDI

To recall a preset, simply send Clean a Program Change message. If the target slot is empty, nothing will be recalled. There are no factory presets besides the two that come loaded in slots 1 and 2. Sending a Program Change message of 0 puts the pedal in "Live" mode, matching the pedal's current settings.

# Control Change Channels — Foot Switches

CC 102: BYPASS — off = 0, on = 1 or >
CC 103 or 105: SWELL — off = 0, on = 1 or >
CC 104: ALT MENU (hold both switches) — ALT exit = 0, ALT enter = 1 or >
CC 106: DYNAMICS MAX (hold right switch) — off = 0, on = 1 or >

# Control Change Channels — Knobs

CC 14: DYNAMICS SENSITIVITY — 0–127
CC 15: WET — 0–127
CC 16: ATTACK — 0–127
CC 17: EQ — 0–127
CC 18: DRY — 0–127
CC 19: RAMP SPEED — 0–127
CC 20: (knob) — 0–127

# Control Change Channels — Toggles

CC 21: RELEASE MODE — FAST = 0 or 1, USER = 2, SLOW = 3 or >
CC 22: PHYSICS — SHIFTY = 0 or 1, MANUAL = 2, MODULATED = 3 or >
CC 23: (toggle) — WOBBLY = 0 or 1, OFF = 2, TWITCHY = 3 or >

# Control Change Channels — Other

CC 100: EOM (Expression Over MIDI) — 0–127
CC 111: PRESET SAVE — 1–122
CC 52: RAMP/BOUNCE (ON/OFF) — off = 0, on = 1 or >
CC 56: FACTORY RESET — 0–127

# Control Change Channels — DIP Switches (Left Bank)

CC numbers are left to right as you look down over the top of the pedal. The left bank is labeled 61–68.

CC 61: DYNAMICS — off = 0, on = 1 or >
CC 62: ATTACK — off = 0, on = 1 or >
CC 63: EQ — off = 0, on = 1 or >
CC 64: DRY — off = 0, on = 1 or >
CC 65: WET — off = 0, on = 1 or >
CC 66: BOUNCE — off = 0, on = 1 or >
CC 67: SWEEP POLARITY — B = 0, T = 1 or >
CC 68: (left bank) — F = 0, R = 1 or >

# Control Change Channels — DIP Switches (Right Bank)

The right bank is labeled 71–78.

CC 71: MISO — off = 0, on = 1 or >
CC 72: SPREAD — off = 0, on = 1 or >
CC 73: LATCH — off = 0, on = 1 or >
CC 74: SIDECHAIN — off = 0, on = 1 or >
CC 75: NOISE GATE — off = 0, on = 1 or >
CC 76: MOTION — off = 0, on = 1 or >
CC 77: SWELL AUX — off = 0, on = 1 or >
CC 78: DUSTY — off = 0, on = 1 or >

# Control Change Channels — Hidden Options

CC 24: NOISE GATE RELEASE — 0–127
CC 25: NOISE GATE SENS — 0–127
CC 26: SWELL IN — 0–127
CC 27: USER RELEASE — 0–127
CC 28: BALANCE — 0–127
CC 29: FILTER — 0–127
CC 31: SWELL OUT — ANALOG = 0 or 1, HYBRID = 2, ADAPTIVE = 3 or >
CC 32: ENVELOPE MODE — ASR SHIFTY = 0 or 1, ENV SHIFTY = 3
CC 33: SHIFTY MODE / SPREAD ROUTING — EQ = 0 or 1, BOTH = 2, VOL/COMP = 3 or >

# Contact

Contact us any time: midi@chasebliss.com
