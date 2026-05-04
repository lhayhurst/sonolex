---
id: xjam-midi-performance-controller-user-guide
title: "Xjam MIDI Performance Controller User Guide"
source: "Xjam-English.pdf"
convertedAt: 2026-03-21T09:14:38.534Z
summary: "The Xjam is an ultra-portable, slim-line USB MIDI pad controller made by ESI Audiotechnik / Artesia Pro. It features 16 velocity-sensitive pads across 3 banks (48 total), 6 programmable encoder knobs across 3 banks (18 total), and 48 recallable scene presets. It connects via USB-C to Mac, PC, or iPad and can also output MIDI via a TRS Type A jack, making it a versatile groove performance controller for triggering drums, samples, and sending MIDI CC, Program Change, and MMC messages."
---

# Introduction

Thank you for purchasing Xjam, the ultra-portable and slim-line USB MIDI groove controller for Mac, PC and iPad.

Do not leave heavy objects resting on the trigger pads for long period of time.

Box Contents:
- Xjam
- USB-C Cable
- Xjam User Guide

Visit www.esi-audio.com (International) or www.artesia-pro.com (North America) to download the Xjam Editor App for Mac OS X, Windows, and iPadOS (available on App Store).

# Getting Ready

Connections and power:
1. Use the included USB-C cable to connect the Xjam's USB port to an available USB port on your computer (powered on). For iPad, use the Apple Camera Connection Kit (available separately) and appropriate USB cable.
2. On your computer, open your digital audio workstation (DAW).
3. Select Xjam as the controller in the Preferences, Device Setup, or Options of your DAW.

Turning off the power: Disconnect the USB-C cable. The power will turn off and the CTRL Bank and PAD Bank LEDs will go dark.

# Parts and their Functions

Front View:
1. USB Port: USB-C connection for power and MIDI data.
2. MIDI Out: TRS Type A jack for connection to external MIDI devices (sound modules, synthesizers).
3. Foot Switch: Input for Sustain Pedal.

Top View:
4. Encoders: Six 360° encoder knobs for sending continuous controller messages.
5. CTRL BANK: Selects one of three independent encoder banks (GREEN, YELLOW, RED) for up to 18 independent parameters.
6. Pads: 16 velocity- and pressure-sensitive pads. Velocity color feedback: Soft 1-63 (green), Medium 64-99 (yellow), Hard 100-127 (red).
7. PAD BANK: Selects one of three independent pad banks (GREEN, YELLOW, RED) for up to 48 different pads.
8. SCENE BANK: Press CTRL BANK + PAD BANK simultaneously to access 48 SCENES (16 per bank).
9. EDIT button: Enter EDIT mode to independently configure each pad and encoder.
10. TYPE button: In EDIT mode, selects message type. For pads/pedal: NOTE (green), MIDI CC (yellow), PROGRAM (red), MMC (unlit). For encoders: MIDI CC (green), PITCH (yellow), PROGRAM (red), AFTERTOUCH (unlit).
11. SETUP button: Access global settings and Repeat parameters.
12. Repeat button: Hold with a pad to retrigger at current tempo/division. Two modes: Temporary and Static. Can sync to internal or external MIDI clock.

# Play Mode

Overview of Xjam's pads and encoder knobs capabilities in performance.

## Pads

Each of Xjam's 16 pads can send:
- MIDI Note ON/OFF
- MIDI CC messages
- MIDI Program Change messages
- MIDI Machine Control (MMC) messages

Each pad can be programmed for message type and sending mode (temporary or toggle). Pads feature triple-color LEDs (green/yellow/red) for visual feedback. Three independent pad banks provide 48 total pads.

Below each pad: pad name, assigned chromatic note name, and Secondary Function for SETUP operations. Pad 13 (RECALL) and Pad 14 (SAVE) are related to SCENE operations.

### Sending Notes

Temporary Mode (default):
- Note ON sent when pressing pad
- Note OFF sent when releasing pad
- Color indicates velocity: green (1-63), yellow (64-99), red (100-127)
- Holding pad sends Channel After Touch or Channel Pressure (per SETUP settings)

Toggle Mode:
- Note ON sent on first press
- Releasing pad produces no message
- Note OFF sent on second press
- Pad illuminates yellow while Note ON is active
- Toggle mode applies to all pads

### Sending Control Changes

Pads can send MIDI CCs in two modes:

ABSOLUTE mode: Sends value 127 on selected CC# when pressed, value 0 when released. Supports temporary and toggle modes.

RELATIVE mode: Sends value 0-127 on selected CC# depending on velocity.

## Encoder Knobs / Continuous Controls

Six encoder knobs can send:
1. MIDI CC (green)
2. PITCH (yellow)
3. PROGRAM (red)
4. AFTER TOUCH (unlit)

Encoder modes:
- Absolute
- Relative 2s Compliment
- Relative Bin Offset
- Relative Signed Bit

With three CTRL BANKS, there are 18 total independently editable encoders.

## External Pedal

Xjam has an external pedal input for sustain pedals. The pedal can be programmed to send Notes, MIDI CCs, Program Changes, or MMC.

# SETUP Mode

SETUP mode provides detailed configuration of global settings and Repeat parameters.

Note: In SETUP Mode, pad #10 is used as the numeric key input for "0".

Important: When the Xjam Editor app is launched, the hardware buttons (CTRL BANK, PAD BANK, EDIT, TYPE, SETUP, REPEAT) are controlled exclusively through the software.

## Default SETUP State

After pressing SETUP, Xjam shows its current setup state for two seconds via color indication on pads 1, 2, 5, 6, and 7. Default state: all show green, indicating no changes to Octave (pad 1), Transposition (pad 2), Toggle (pad 5), or Velocity (pad 7). Green pad 6 indicates Polyphonic Aftertouch is enabled by default.

## SCENES

Xjam has 48 Scenes for different performance situations. A Scene is a total recall snapshot of the entire unit configuration (pads and encoders). On first power-up, Scene 1 loads as the initial Scene.

Scene Banks:
- SCENE BANK 1: Scenes 1-16 (GREEN)
- SCENE BANK 2: Scenes 17-32 (YELLOW)
- SCENE BANK 3: Scenes 33-48 (RED)

### SCENE RECALL

To RECALL a SCENE:
1. Press CTRL BANK + PAD BANK simultaneously. Buttons flash in current bank color.
2. Press PAD BANK to cycle through SCENE BANKS (GREEN=1-16, YELLOW=17-32, RED=33-48).
3. Press Pad 13 (RECALL). All 16 pads light in the bank color. Currently active SCENE blinks.
4. Press the desired pad (pad number = scene number within bank).
5. Selected pad flashes twice to confirm. Xjam returns to PLAY mode.

To exit without choosing: press CTRL BANK + PAD BANK simultaneously again.

### SCENE SAVE

To SAVE a SCENE:
1. Press CTRL BANK + PAD BANK simultaneously.
2. Select SCENE BANK via PAD BANK button.
3. Press Pad 14 (SAVE). All 16 pads light in the bank color. Currently active SCENE blinks.
4. Press desired pad to select SCENE number to save to.
5. Selected pad flashes twice to confirm. Xjam returns to PLAY mode.

To exit without saving: press CTRL BANK + PAD BANK simultaneously again.

### Reset to Factory

The RESET function restores all settings to original factory state.
1. Press SETUP (red LED illuminates).
2. Press RESET (Pad 15).
3. All buttons and pads light up yellow successively, then turn off. Xjam is restored to factory state.

Note: Global parameters (G.CH, OCTAVE, TRANS) remain consistent across all 48 SCENES — they cannot be set per-scene.

Important: RESET does not affect Dynamic User Curves. To reset User Curves, use the Xjam Editor App or the procedure in SETUP Pads Velocity Sensitivity (5.3.7).

## SETUP Global Parameters

Global parameters affect all pads and encoders.

### SETUP Octave Shift for Pads' Notes

Shift pads' note keys by 4 octaves up and 3 octaves down.

Procedure:
1. Press SETUP.
2. Press OCTAVE (Pad 1). Pads 1-4, 0 (Pad 10), and 16 illuminate RED; pads 13/14 shine GREEN.
3. Use GREEN up/down keys (Pad 13/14) for stepwise shifting, or input octave directly with RED pads 1-4.
4. For downward shift: press Pad 10 first to invert direction, then press pad 1-4.
5. Selected pad illuminates yellow.
6. Press Pad 16 to confirm and exit. Pad 16 flashes GREEN twice.
7. To reset: press "0" (Pad 10), then Pad 16.

SETUP state indicator on Pad 1: GREEN = no shift, RED = downshift, YELLOW = upshift.

### SETUP Note Transposition for Pads' Notes

Shift pads' note keys by 12 semitones up and 12 semitones down.

Procedure:
1. Press SETUP.
2. Press TRANS (Pad 2). Pads 1-9 and 0 illuminate RED; pads 13/14 appear GREEN.
3. Use GREEN up/down keys (Pad 13/14) for semitone adjustment, or input value directly with RED pads 1-9 and 0 (Pad 10).
4. For downward transposition: press Pad 10 first to reverse direction.
5. Selected pad illuminates yellow.
6. Press Pad 16 to confirm and exit. Pad 16 flashes GREEN twice.
7. To reset: press "0" (Pad 10), then Pad 16.

### SETUP Global Transmit MIDI Channel

To edit the global MIDI channel:
1. Press SETUP.
2. Press Pad 3 / G.CH. Pads 1-10 light up RED.
3. Compose MIDI channel number using pads 1-10 (10 = 0). Pads turn YELLOW on press.
4. Press Pad 16 / ENTER to confirm. Wrong values cause ENTER to flash red twice.

### SETUP Individual MIDI Channel

Xjam supports individual MIDI channel settings for individual pads, encoders, or External Pedal.

Procedure:
1. Press SETUP.
2. Press Pad 4 / MIDI CH. All pads light in selected PAD BANK color.
3. Select the pad to configure.
4. Pads 1-10 light up RED.
5. Compose MIDI channel number using pads 1-10 (10 = 0). Pads turn YELLOW.
6. Press Pad 16 / ENTER to confirm and exit.

### SETUP Sending Notes Mode

Two modes available: Temporary (default) and Toggle.

To enable TOGGLE MODE for all pads:
1. Press SETUP.
2. Press Pad 5 / TOGGLE.
3. Xjam exits SETUP and enables Toggle.

SETUP state indicator on Pad 5: RED = Toggle ON, GREEN = Temporary mode (Toggle OFF).

### SETUP After Touch Settings

Three aftertouch modes: OFF, Channel Pressure, Polyphonic Aftertouch.

Procedure:
1. Press SETUP.
2. Press Pad 6 / AFT.
3. Choose: Pad 1 = OFF, Pad 2 = Channel Pressure (default), Pad 3 = Polyphonic Aftertouch.
4. Press Pad 16 / ENTER to confirm.

SETUP state indicator on Pad 6: YELLOW = Aftertouch enabled, GREEN = Channel Pressure, RED = both disabled.

### SETUP Pads Velocity Sensitivity

7 velocity curves available: 4 user curves + 3 fixed velocity settings.

Procedure:
1. Press SETUP.
2. Press Pad 7 / VEL. Pads 1-7 become selectable.
3. Select curve:
   - Pad 1: User Curve 1
   - Pad 2: Slight exponential velocity
   - Pad 3: Slight logarithmic velocity
   - Pad 4: Hard, linear velocity (default)
   - Pad 5: Fixed velocity 127
   - Pad 6: Fixed velocity 100
   - Pad 7: Fixed velocity 64
4. Selected pad illuminates YELLOW.
5. Press Pad 16 / ENTER to confirm.

To reset Factory User Curves:
1. Press SETUP > Pad 7 / VEL > Pad 15 / RESET.
2. All pads light yellow and turn off. Curves reset to factory.

SETUP state on Pad 7: YELLOW = user curve active, RED = fixed velocity active.

### SETUP Repeat Clock Configuration

Set clock source for time-related features.

Procedure:
1. Press SETUP.
2. Press Pad 8 / CLOCK.
3. Pad 1 = Internal clock, Pad 2 = External clock. Selected pad turns YELLOW.
4. When Pad 1 is RED (external): uses DAW's tempo. When Pad 1 is YELLOW (internal): uses Xjam's own tempo (set via Pad 9 / TEMPO).
5. Press Pad 16 / ENTER to confirm.

Note: If external clock is selected but no MIDI clock source is connected, the repeat function will not work.

### SETUP Repeat Tempo

Set internal repeat tempo (20-240 BPM).

Procedure:
1. Press SETUP.
2. Press Pad 9 / TEMPO. Pads 1-10 light RED.
3. Compose BPM value using pads 1-10 (10 = 0). Pads turn YELLOW.
4. Press Pad 16 / ENTER to confirm.

### SETUP Repeat Time Division

Set the rate of the repeat tempo.

Procedure:
1. Press SETUP.
2. Press Pad 10 / DIVISION. Pads 1-8 light RED.
3. Select time division:
   - Pad 1: Quarter notes (1/4)
   - Pad 2: 1/4 Triplet
   - Pad 3: Eighth notes (1/8)
   - Pad 4: 1/8 Triplet
   - Pad 5: 16th notes (1/16)
   - Pad 6: 1/16 Triplet
   - Pad 7: 32nd notes (1/32)
   - Pad 8: 1/32 Triplet
4. Press Pad 16 / ENTER to confirm.

### SETUP Repeat Gate

Gate value represents the proportion of time (in percent) for note-on vs note-off during repeat. Higher = longer pronunciation, shorter closing.

Procedure:
1. Press SETUP.
2. Press Pad 11 / GATE. Pads 1-10 light RED.
3. Compose gate value (1%-99%) using pads 1-10 (10 = 0). Pads turn YELLOW.
4. Press Pad 16 / ENTER to confirm.

### SETUP Repeat Swing

Swing represents the delay proportion for two adjacent notes in repeat operation.

Procedure:
1. Press SETUP.
2. Press Pad 12 / SWING. Pads 1-6 light RED.
3. Select swing factor:
   - Pad 1: Off
   - Pad 2: 10%
   - Pad 3: 20%
   - Pad 4: 30%
   - Pad 5: 40%
   - Pad 6: 49%
4. Press Pad 16 / ENTER to confirm.

# EDIT Mode

Each of the 16 pads and external pedal can send: MIDI Note ON/OFF, MIDI CC, MIDI Program Change, or MMC.
Each of the 6 encoders can send: MIDI CC, Pitch, Program Change, or Aftertouch.
Encoder modes: Absolute, Relative 2s Compliment, Relative Bin Offset, Relative Signed Bit.

## Assign Notes to Pads or External Pedal

Procedure:
1. Press EDIT. EDIT button (RED) and pads (GREEN) flicker.
2. Select PAD BANK (GREEN/YELLOW/RED).
3. Press the pad to edit.
4. Press TYPE until GREEN (Note assignment).
5. Pads 1-12 illuminate RED, pads 13/14 GREEN.
6. Use GREEN up/down (Pad 13/14) for semitone adjustment, OR select note by pressing pads 1-12 (representing notes C to B).
7. After note selection, select octave: Pad 1-8 for up to 8 octaves up, Pad 10-12 for up to 3 octaves down.
8. Press Pad 16 to confirm. Flashes GREEN twice.

## Assign CC Messages to Pads or External Pedal

Procedure:
1. Press EDIT. Select PAD BANK.
2. Press the pad to edit.
3. Press TYPE until YELLOW (CC assignment).
4. Pads 1-10, 15, 16 illuminate RED.
5. Two-step operation:
   a. Select transmission mode: Pad 1 = ABSOLUTE, Pad 2 = RELATIVE. Selected turns YELLOW.
   b. Press Pad 15 to confirm mode.
6. Compose CC number using pads 1-10 (10 = 0). Pads turn YELLOW.
7. Press Pad 16 to confirm. Flashes GREEN twice.

## Assign MIDI Program Changes to Pads or External Pedal

Procedure:
1. Press EDIT. Select PAD BANK.
2. Press the pad to edit.
3. Press TYPE until RED (Program Change assignment).
4. Pads 1-10, 13-16 illuminate RED.
5. Select sending mode:
   - Pad 1: Direct Program Change without bank selection
   - Pad 2: Direct Program Change with bank selection
   - Pad 3: Increment program number
   - Pad 4: Decrement program number
6. Press Pad 13 to confirm mode.
7. Compose Bank LSB (0-127) using pads 1-10. Press Pad 14 to confirm.
8. Compose Bank MSB (0-127) using pads 1-10. Press Pad 15 to confirm.
9. Enter program number (0-127) using pads 1-10.
10. Press Pad 16 to confirm and exit.

## Assign MMC Messages to Pads or External Pedal

Procedure:
1. Press EDIT. Select PAD BANK.
2. Press the pad to edit.
3. Press TYPE until unlit (MMC assignment).
4. Pads 1-10 and 16 illuminate RED.
5. Compose MMC message number using pads 1-10 (10 = 0).

MMC Message Numbers:
- 1: Stop
- 2: Play
- 3: Deferred Play
- 4: Fast Forward
- 5: Rewind
- 6: Record Strobe
- 7: Record Exit
- 8: Record Ready
- 9: Pause
- 10: Eject
- 11: Chase
- 15: MMC Reset

6. Press Pad 16 to confirm and exit.

## Encoder Mode Selection for CC Messages

Four encoder operation modes:
- Pad 1: Absolute
- Pad 2: Relative 2s Compliment
- Pad 3: Relative Bin Offset
- Pad 4: Relative Signed Bit

Mode selection is part of the CC assignment two-step operation.

## Assign CC Messages to Encoder Knobs

Procedure:
1. Press EDIT. Select CTRL BANK.
2. Rotate the encoder to edit.
3. Press TYPE until GREEN (CC assignment).
4. Pads 1-10 and 16 illuminate RED.
5. Select encoder mode: Absolute (Pad 1), Relative 2s Compliment (Pad 2), Relative Bin Offset (Pad 3), Relative Signed Bit (Pad 4).
6. Press Pad 15 to confirm mode.
7. Compose CC number using pads 1-10 (10 = 0). Pads turn YELLOW.
8. Press Pad 16 to confirm and exit.

## Assign Pitch Messages to Encoder Knobs

Procedure:
1. Press EDIT. Select CTRL BANK.
2. Rotate the encoder to edit.
3. Press TYPE until YELLOW (Pitch assignment).
4. Press Pad 16 to confirm. Flashes GREEN twice.

## Assign MIDI Program Change Messages to Encoders

Procedure:
1. Press EDIT. Select CTRL BANK.
2. Rotate the encoder to edit.
3. Press TYPE until RED (Program Change assignment).
4. Press Pad 16 to confirm. Encoder now changes program numbers by rotation. Flashes GREEN twice.

## Assign Channel Pressure Messages to Encoders

Procedure:
1. Press EDIT. Select CTRL BANK.
2. Rotate the encoder to edit.
3. Press TYPE until unlit/dark (Channel Aftertouch assignment).
4. Press Pad 16 to confirm. Flashes GREEN twice.

# Default Presets

Xjam loads Preset 1 at startup. Factory presets:

Preset 1 — Chromatic Note: 16 pads mapped chromatically C to D#. Bank A: Ch 1, Note 0x24-0x33. Bank B: Ch 2, Note 0x24-0x33. Bank C: Ch 3, Note 0x24-0x33.

Preset 2 — GM Channel 10 Note: 48 pads mapped to conventional MPC pad mapping: 0x24-0x53.

Preset 3 — Program (Ch 1): 48 pads mapped to programs 1-48.

Preset 4 — Program (Ch 1): 48 pads mapped to programs 49-96.

Preset 5 — C Major Scale (Ch 1): 16 pads mapped C to D, three banks ascending.

Preset 6 — C# Major Scale (Ch 1): 16 pads mapped C# to D#.

Preset 7 — D Major Scale (Ch 1): 16 pads mapped D to E.

Preset 8 — D# Major Scale (Ch 1): 16 pads mapped D# to E#.

Preset 9 — E Major Scale (Ch 1): 16 pads mapped E to F#.

Preset 10 — F Major Scale (Ch 1): 16 pads mapped F to G.

Preset 11 — F# Major Scale (Ch 1): 16 pads mapped F# to G#.

Preset 12 — G Major Scale (Ch 1): 16 pads mapped G to A.

Preset 13 — G# Major Scale (Ch 1): 16 pads mapped G# to A#.

Preset 14 — A Major Scale (Ch 1): 16 pads mapped A to B.

Preset 15 — A# Major Scale (Ch 1): 16 pads mapped A# to B#.

Preset 16 — B Major Scale (Ch 1): 16 pads mapped B to C#.

# Specifications

- MIDI Pad controller
- 16 velocity-sensitive pads
- 3-color pad indicators for velocity and edit/setup operation
- 6 MIDI encoder knobs, all programmable
- Sustain pedal input
- 48 user-programmable scene presets with instant recall
- Sends and receives MIDI data
- Bus powered (no batteries or AC adapter needed)
- Size: 200mm (7.87 in) x 135mm (5.3 in) x 23mm (0.59 in)
- Weight: 371g (0.8 lb)
- 3.5mm TRS Type A jack to female 5-pin DIN MIDI cable available separately
- USB-C connection

# Troubleshooting

Q: Connected to iOS device but not recognized and no audio apps work.
A: Always connect the Apple Lightning cable to the Xjam before connecting it to the iPad.

Q: No sound.
A: A Core MIDI-compatible app must first be launched on your iOS device or Mac for Xjam to function.

# Support and More Info

International: www.esi-audio.com/support
North America: www.artesia-pro.com/contact-us

ESI Audiotechnik GmbH
Mollenbachstr. 14
71229 Leonberg, Germany
Phone: +49 (0)71252 398880
Email: info@esi-audio.com

Artesia Pro Inc
PO Box 2908
La Mesa, CA 91943, USA
Phone: +1 619 244-0006
Email: info@artesia-pro.com
