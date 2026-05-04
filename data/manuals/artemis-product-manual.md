---
id: artemis-product-manual
title: "Artemis - Product Manual"
source: "ARTEMIS-DIGITAL-MANUAL_12_09_2025.pdf"
convertedAt: 2026-03-20T12:00:15.019Z
summary: "The Artemis is a 6-voice polyphonic analog synthesizer by Dreadbox, featuring two VCOs with continuous waveshaping, thru-zero FM, a resonant low-pass and high-pass filter, two ADSR envelopes, two polyphonic LFOs, and a built-in effects chain with distortion, modulation, delay, and reverb. It includes an arpeggiator, a 64-step polyphonic sequencer, 512 preset slots, and extensive MIDI/MPE control. It is designed for musicians seeking deep analog sound design with modern performance and sequencing capabilities."
---

# Colour Coding

The manual uses a color coding system to help match panel controls with instructions:
1. BUTTONS
2. ENCODER
3. ON SCREEN
4. KNOB
5. SLIDER
6. FEATURE V.1.1 (new features)

# Signal Path

Device signal path (post-voice processing in series):
- 12dB Stereo HP Filter → Stereo Distortions → Stereo Modulations → Stereo Delays → Stereo Reverbs → Stereo Outputs

Voice signal path (per voice):
- VCO 1 and VCO 2 plus Sub/Noise → Mixer → 12dB LP Filter → VCA

The Artemis has 6 voices (Voice 1–6).

# Rear Panel Connections

1. MIDI IN/OUT — MIDI DIN connector for receiving/transmitting MIDI messages from/to an external MIDI device.
2. USB — Transmit and receive MIDI messages, firmware updates, and preset backup/restore.
3. AUDIO OUTPUTS — Left/Right: Unbalanced, ¼ inch audio outputs. Headphones: ¼ inch stereo headphone jack (same sound as Left/Right outputs, volume controlled by Master Level knob).
4. 15VDC Power jack input — Use only the provided power supply.
5. Power ON/OFF Switch.

# Starting with Artemis

The Artemis offers a total of 512 Preset Slots split into 8 banks of 64 presets each.

## Selecting a Preset

1. When the synthesizer is turned on, it enters the Main page automatically.
2. On the Main page, rotating the Encoder cycles through the presets.
3. Pressing the Encoder once will reload the preset.
4. Pressing and holding down while rotating the Encoder cycles through the banks.

## Quick Panel Load

Via MENU and SAVE buttons simultaneously:
- The sound switches to the current position of the knobs and sliders. The current preset is ignored and the settings that appear on the panel become the active sound.
- Any modulation routings, FX section settings, and sequencer/arp settings remain unaffected.

# Panel Overview

1. VCO — 2× VCO with 3 waves via continuous waveshaping, Hard Sync, Thru-zero FM, Sub Oscillator, White Noise source.
2. VCF — Resonant Low Pass Filter (12dB or 24dB), Resonant High Pass Filter (12dB), Filter FM via VCO2 or Noise, Precision Filter tracking.
3. ENVELOPES — 2× ADSR Envelopes.
4. LFOs — 2× LFOs per voice with 8 waveforms, Sync and cross-modulation functions.
5. MASTER OUT — OTA based VCAs, Variable stereo panning.
6. ARP/SEQ BUTTONS — Arpeggiator with 6 modes and probability function, Polyphonic Sequencer with probability function.
7. EFFECTS — 4 Categories of Effects with various algorithms each.

# VCO

1. WAVE — Controls the waveform shape of both VCOs continuously. Positions blend from Sawtooth to Square to Triangle.
2. SUB / NOISE Mixer — Mixes levels of Sub oscillator and Noise source. Both OFF at middle position; maximum Sub level fully CCW, maximum Noise level fully CW.
3. VCO 1 / VCO 2 Crossfader — Blends levels of Oscillator 1 and Oscillator 2. Equal 50/50 level at middle position.
4. VCO 2 — Controls pitch of oscillator 2, quantized in semitones with a range of ±2 octaves.
5. DTN (Detune) — Detune control for oscillator 2 and master detune for unison. Detunes intervals between notes from slight to dramatic.
6. SYNC — Activates Hard Sync. VCO 2 wave cycle is forced to synchronize to VCO 1 phase. Best results when VCO 2 pitch is higher than VCO 1.
7. GLD (Glide) — Sets portamento amount for both oscillators. Supports polyphonic glide across all play modes.
8. PW (Pulse Width) — Sets pulse-width of both oscillators. Symmetrical square wave at zero; wave disappears at maximum (can be used to bypass oscillators).
9. FM — Sets frequency modulation amount of VCO 2 to VCO 1. Artemis offers Thru-Zero FM (Linear FM) producing deep, rich musical timbres while maintaining pitch tracking.
10. ENV — When activated, the Envelope controls the FM amount instead of the manual setting. The FM slider sets the modulation depth.

# VCF

Low Pass Filter:
1. CUT — Sets Low Pass Filter Cutoff frequency (20Hz to 20kHz).
2. RES — Sets Filter Resonance. At high settings, the filter self-oscillates and generates its own pitch set by Cutoff frequency.
3. 12DB — Switches Low Pass Filter to 12dB/oct (2-pole) instead of standard 24dB/oct (4-pole). 12dB provides smoother cutoff response.
4. TRACK — Filter key tracking with 3 amounts: Zero (LED OFF), Half (LED flashing), Full (LED ON). With Full tracking and maximum Resonance, the Filter can be played as a Sine Oscillator tracking notes.
5. ENV — Sets modulation amount from Envelope to Filter Cutoff frequency.
6. FFM — Sets FM amount of VCO 2 to Cutoff frequency. Uses the wave set by the Wave knob and SUB/NOISE.
7. NOISE — When activated, Noise replaces VCO 2 as the FM source for the Cutoff frequency.

High Pass Filter (at end of voice chain):
1. CUT — Sets High Pass Filter Cutoff frequency.
2. RES — Sets High Pass Filter Resonance.

# Envelope

2× ADSR Envelopes with the following controls:
1. A (Attack Time) — Time for envelope to rise from zero to maximum when a note is pressed.
2. D (Decay Time) — Time for envelope to fall from maximum to Sustain Level.
3. S (Sustain Level) — Level maintained while note is held. When at maximum, Decay has no effect.
4. R (Release Time) — Time for envelope to fall from Sustain Level to zero after note release.
5. VCA button (3 modes):
   - OFF: Editing the Filter/FM Envelope (modulates Filter Cutoff and VCO FM amount).
   - ON: Editing the VCA Envelope (modulates amplitude/volume).
   - Long press (flashing): One shared Envelope used for both Filter Cutoff and VCA modulation.

# LFOs

2× LFOs per voice with 8 waveforms each.

## LFO 1

1. RATE — Speed from 10 seconds (0.1Hz) up to 25Hz.
2. FADE IN — Time for LFO 1 to fade in from zero to maximum amount when a note is played.
3. VCO — Modulation amount of LFO 1 to oscillator pitch.
4. 1/2 — Controls LFO 1 modulation target: VCO 1 (LED ON), VCO 2 (LED FLASHING), or both (OFF).
5. VCF — Modulation amount of LFO 1 to Low Pass Filter Cutoff frequency.
6. WAV — Cycles through LFO 1 waveshapes: Sine, Triangle, Saw, Ramp, Square, Random, Env+, Env-.

Note: Env+ changes the LFO to a single-cycle envelope triggered on key press. Fade In controls rise/fall ratio, Rate controls cycle time. Env- is the inverted cycle.

## LFO 2

1. RATE — Sets speed of LFO 2.
2. XMOD — Modulation amount of LFO 2 to LFO 1 Rate (useful for ratcheting effects and complex cascading rhythm patterns).
3. WAVE — Modulation amount of LFO 2 to VCO waveshape (Wave knob).
4. PW — Modulation amount of LFO 2 to pulse-width of VCO 1 square wave.
5. WAV — Cycles through LFO 2 waveshapes: Sine, Triangle, Saw, Ramp, Square, Random, Env+, Env-.

Note: When Env+ or Env- are selected on LFO2, Rate controls the time of a single falling cycle.

## LFO Sync

The Sync button cycles through the following options for both LFOs:
- Free — Free running LFO, no sync applied. (LED OFF)
- Key — LFO cycle restarts when a new note is played. Polyphonic per voice. (LED BLINKING)
- BPM — LFO speed synced to external MIDI clock. Rate knob BPM divisions (left of center) and multiplications (right of center): 1, 1.5, 2, 3, 4, 6, 8, 12, 24. (LED ON)
- KEY BPM — LFO speed synced to MIDI clock and cycle resets on new note. (LED BLINKING 75% on)

# Master Out Section

1. MASTER — Controls the Master Level of the output signal.
2. SPREAD — Controls Stereo Spread amount. Voices are split odd/even: voices 1,3,5 to left channel; voices 2,4,6 to right channel. At zero, all voices are mixed to both channels.

# Buttons

1. PLAY — Starts/pauses the Artemis clock. Flashes at tempo rate. Controls Sequencer, Arpeggiator, and LFO Sync tempo.
2. STOP — Stops the clock. Double-press resets Sequencer to first step and sends all notes off.
3. REC — Active only when Sequencer or Arpeggiator is On. Pressing REC from any page shows the REC page.
4. SEQ — Cycles between Arpeggiator and Sequencer sections. First press: active (ON) section. Second press: inactive (OFF) section. Third press: back to main page.

# Save

Saving Workflow:
1. Press SAVE once to open the page.
2. Turn Encoder to choose a slot (bottom-left corner).
3. Press and turn Encoder to cycle through banks.
4. Press Encoder to confirm slot; highlight moves to SAVE option.
5. Press Encoder to save and exit.

Alternatively, turning the Encoder at step 4 allows freely moving between editable elements: name characters, save slot, and the SAVE button.

Renaming Presets:
1. Turn Encoder to highlight character(s), save slot, or SAVE button.
2. Press Encoder to edit a character: Rotate to switch between Uppercase, Lowercase, Numbers, Symbols, and Blank Space. Press and turn Encoder to quick-skip between character categories.
3. Press Encoder to confirm choice.
4. Repeat until full name is entered.

Quick Save (no rename): Press SAVE once, then press Encoder twice to confirm and save.

# Arpeggiator

Access via SEQ button. Pressing Encoder turns arpeggiator on/off. Rotating Encoder sets tempo (BPM). Syncs to external MIDI clock when Clock Receive is activated.

When On, holding a chord causes Artemis to play a pattern based on individual notes held. Additional notes can be added while holding. Pressing REC while holding keys activates hold function (arpeggiator continues after releasing keys).

## Arpeggiator Parameters

MODE (Slider 1):
- UP — Lowest to highest note.
- DOWN — Highest to lowest note.
- ORD — Notes in the order keys were pressed.
- INC (Inclusive) — Lowest to highest then highest to lowest, repeating high and low notes.
- EXC (Exclusive) — Lowest to highest then highest to lowest, without repeating high and low notes.
- RND — Random order.

DIV (Slider 2): Time Division relative to tempo. Quarter notes (/4), eighth notes (/8), triplet values (/2T, /4T, etc.).

PROB (Slider 3): Probability amount, 0% (no notes play) to 100% (all notes play).

SWNG (Slider 4): Swing amount, 50 (straight timing) to 75.

GATE (Slider 5): Gate length. Lower = staccato, higher = longer gate.

# Sequencer

Access via SEQ button. Pressing Encoder turns sequencer on/off. Rotating Encoder sets tempo (BPM). Syncs to external MIDI clock when Clock Receive is activated.

Press REC to enter REC page and start recording. Supports up to 6 notes per step (polyphonic). When all played notes are released, the sequencer progresses to the next step.

Encoder functions in REC mode:
- Sequencer stopped: Turn encoder to scroll through steps.
- No notes held: Press and release Encoder to set a rest and progress to next step. Press and hold while turning to set rests on multiple steps.
- Notes held (stopped): Press Encoder to set a tie and progress. Turn while holding notes to set ties on scrolled steps. Hold Encoder down while turning to set staccato instead of ties.
- Notes held (running): Press Encoder to record ties on all played steps. Hold Encoder for staccato.

Note: When clock is running, song position is shared across presets for smooth transitions.

## Sequencer Parameters

STEPS (Slider 1): Step length, 1–64 steps.

DIV (Slider 2): Time Division relative to tempo. Quarter notes (/4), eighth notes (/8), triplet values (/2T, /4T, etc.).

PROB (Slider 3): Probability amount, 0%–100%.

SWNG (Slider 4): Swing amount, 50 (straight) to 75.

GATE (Slider 5): Gate length. Lower = staccato, higher = longer gate.

# Effects

Artemis offers 4 categories of effects in series:
1. Distortion (DIST)
2. Modulation (MOD)
3. Delay (DELAY)
4. Reverb (REV)

Access each effect page by pressing its button. The 5 sliders set parameters for each effect. Turning the encoder cycles through algorithms.

## Distortion Effects

Multiple distortion, overdrive, wavefolding and shredding algorithms with 2× oversampling, plus bit depth and sample rate reduction.

Algorithms: Exponential, Parabolic, Sine Clip, S-Curve, Soft Clip, Hard Clip, Tri Clip, Tri Fold, Single Fold, Multi Fold, Sine Bend, Sine Fold, Sine Shred, Bin Shred, Sym Warp.

Parameters:
- BITS — Bit depth reduction amount.
- RATE — Sample rate reduction amount.
- GAIN — Distortion gain/boost level.
- LEVEL — Distortion output level.
- MIX — Dry/Wet balance.

## Modulation Effects

Algorithms: Chorus, Ensemble, Tape Chorus, BBD Chorus, Flanger, BBD Flanger, Thru-Zero Flanger, Phaser, Barber-Pole Phaser, Double Notch, Pitch Shifter.

Common Parameters (Chorus, Ensemble, Tape Chorus, BBD Chorus, Flanger, BBD Flanger, Thru-Zero Flanger, Phaser):
- DPTH — Amount of time modulation by LFO.
- SPD — LFO frequency.
- FEED — Feedback amount.
- WDTH — LFO phase offset between L/R channels (stereo spread).
- MIX — Dry/Wet balance.

Barber-Pole Phaser: SPD, FEED, WDTH, MIX (no DPTH).

Double Notch: DPTH, SPD, NTCH (notch width), WDTH, MIX.

Pitch Shifter: L (left channel semitone shift), R (right channel semitone shift), FEED, DAMP (variable LP/HP filter), MIX.

Algorithm descriptions:
- Chorus — Classic single-voice chorus.
- Ensemble — Lush chorus with three detuned voices.
- Tape Chorus — Pitch wobble inspired by tape machines.
- BBD Chorus — Dark, warm Lo-Fi chorus using variable sample rate technology.
- Flanger — Classic flanger with positive or negative feedback.
- BBD Flanger — Lo-Fi flanger using variable sample rate technology.
- Thru-Zero Flanger — Dual-delay flanger with positive or negative feedback.
- Phaser — Classic 6-stage phaser.
- Barber-Pole Phaser — Ultra-smooth phaser with seemingly endless spectrum sweeps.
- Double Notch — Dynamic filter creating two notches separated one octave apart.
- Pitch Shifter — Stereo pitch adjustment via variable-speed granular playback.

## Delay Effects

Algorithms: Stereo, Ping-Pong, BBD Delay, Random Repeater.

Delay time can be synced to internal/external tempo.

Stereo: L (left delay time), R (right delay time), FEED (tail length), DAMP (variable LP/HP filter), MIX.

Ping-Pong: TIME, PAN (switches L-R / R-L mode), FEED, DAMP, MIX.

BBD Delay: TIME, FEED, SPD (LFO frequency), DPTH (delay time modulation), MIX. Lo-Fi delay with built-in speed modulation.

Random Repeater: SIZE (average chunk size), REP (average repeat count), PROB (probability of repeats), EG (fade in/out time of repeater envelope), MIX. Records and repeats small chunks with random chunk size and repeats.

## Reverb Effects

Algorithms: Small Reverb, Large Reverb, Huge Reverb, Cloud Reverb, Shimmer Reverb.

Small Reverb: PRE (pre-delay), SIZE, FEED (decay time), DAMP (variable LP/HP filter), MIX.

Large Reverb: Same parameters as Small Reverb.

Huge Reverb: SIZE, FEED (decay time), SPD (LFO frequency), DPTH (time modulation by LFO), MIX. Extra-large dark stereo space with chorus-style modulation.

Cloud Reverb: TUNE (speed detune between grains), SIZE (average grain size), FEED (input overdubbing amount), GRAIN (simultaneous playheads; negative values = reverse playback), MIX. Granular buffer-based reverb.

Shimmer Reverb: TUNE (semitone pitch shift amount), SIZE, FEED (decay time), DAMP (variable LP/HP filter), MIX. Ethereal stereo delay with gradual pitch-shifting tail.

# Menu Page

Access via Menu button. Rotate Encoder to scroll parameters, press to edit, rotate to change values, press to confirm, Menu button to exit.

## Menu Parameters (Per-Preset)

PLAY MODE: POLY (6-voice polyphonic) / TRI (3-voice, pairs of 2 in unison) / DUO (2-voice, pairs of 3 in unison) / UNISON (monophonic, all 6 voices stacked) / MONO (monophonic, single voice).

DRIVE: Overdrives Filter input, adds harmonics, changes resonance character. LOW / MID / HIGH / OFF.

LEGATO: ON/OFF. When on, new notes do not re-trigger envelopes while other notes are held.

GLIDE: ON/AUTO. ON = always glides. AUTO = skips glide on first note after all notes released.

PRESET LEVEL: Extra level control saved per preset, -13dB to +13dB.

INSTABILITY: 0–100. Introduces slight voice-to-voice variation for pitch, filter cutoff, pulse width, and envelope times.

DELAYS BPM SYNC: ON/OFF. Syncs delay time to tempo divisions/multiplications.

AMP VELOCITY: 0–100. Amount of velocity assigned to amplitude.

VELOCITY: ADD/CLEAR. Assign keyboard velocity to modulate any front panel knob or slider. Amount set by control position, -100 to +100. Effect sliders can also be assigned.

AFTERTOUCH: ADD/CLEAR. Assign keyboard aftertouch to modulate any front panel control. Same workflow as Velocity.

MODWHEEL: ADD (-100 to 100) / CLEAR. Assign mod wheel to modulate any front panel control.

CC74: ADD/CLEAR. Assign MIDI CC74 to any parameter (useful for MPE controllers).

KEY TRACK: ADD/CLEAR. Assign keyboard note tracking to modulate any front panel control.

INITIALIZE: CONFIRM/ABORT. Fully resets all parameters and sequencers to initial values.

## Global Settings

CHANNEL: OMNI (all channels) / CH 1–16 / MPE.

PITCH WHEEL: 0–12 semitones range. In MPE mode, affects pitch wheel on control channel.

MPE ZONE: LOWER (channels from 1) / UPPER (channel 16). Only visible when MPE is selected.

MPE CHANNELS: 1–15. Number of channels Artemis responds to in MPE mode. Only visible when MPE is selected.

MPE PITCH WHEEL: 0–48 semitones for MPE control. Only visible when MPE is selected.

CLOCK RECEIVE: ON/OFF. Receive external clock.

TRANSPORT RECEIVE: ON/OFF. External transport controls (play/stop/continue).

CC IN: ON/OFF. Activates CC control.

PC IN: ON/OFF. Activates program change control.

CONTROL MODE:
- SCALE — Relative changes from stored value. Reaching slider ends = min/max.
- JUMP — Control value jumps immediately to knob/slider position.
- CATCH — No effect until control passes through stored value.

FINE TUNE: -100 to 100, range ±1 semitone.

TUNE: START/ABORT. Auto-tuning for oscillators and filters.

EXPORT: ACTIVE (current preset) / BANK A-H / ABORT. Exports presets via USB only (not MIDI DIN). Requires SysEx Librarian (Mac) or Bome SendSX (Windows). Active preset sends 2 messages; bank export sends 65 messages. Importing a preset loads on top of current preset without saving. Importing a bank prompts for confirmation and bank selection.

FIRMWARE: Shows current version (1.1.0). Update via Menu > FIRMWARE > UPDATE or power on while holding Encoder. Firmware update via USB only.

## Firmware Update Procedure

1. Enter Bootloader (Menu > FIRMWARE > UPDATE, or power on while holding Encoder).
2. Screen shows "WAITING FOR USB..".
3. Connect to computer; screen shows "WAITING FOR FIRMWARE..".
4. Open SysEx application (BomeSendSX or SysEx Librarian), load Artemis_1.1.0.syx file.
5. Select Artemis Bootloader as output port and send file.
6. Screen shows "RECEIVING CHUNK X" during transmission.
7. On completion: "UPDATED SUCCESSFUL" then "REBOOTING IN 3..".

Note: A power cycle may be required after update.

# MIDI CC List

All values (numerical or enumerated) are split across the full CC range of 0–127.

CC 0 — BANK SELECT — BANK A-H
CC 1 — MODWHEEL MOD SOURCE — 0–100
CC 3 — LPF FFM NOISE SOURCE — VCO 2 / NOISE
CC 4 — LPF FFM — 0–100
CC 5 — VCO GLIDE — 0–100
CC 6 — LPF CUT EG AMOUNT — 0–100
CC 7 — VOLUME — 0–100
CC 8 — VCO MIX — 0–100
CC 9 — VCA EG DECAY — 0–100
CC 10 — SPREAD — 0–100
CC 11 — VCA EG SUSTAIN — 0–100
CC 12 — EG ATTACK — 0–100
CC 13 — EG DECAY — 0–100
CC 14 — EG SUSTAIN — 0–100
CC 15 — EG RELEASE — 0–100
CC 16 — HPF CUTOFF — 0–100
CC 17 — HPF RESONANCE — 0–100
CC 18 — LFO 1 VCO TARGET — VCO 1 & 2 / VCO 1 / VCO 2
CC 19 — LFO 1 VCO AMOUNT — 0–100
CC 20 — LFO 1 VCF AMOUNT — 0–100
CC 21 — LFO 2 MORPH AMOUNT — 0–100
CC 22 — LFO 2 PW AMOUNT — 0–100
CC 23 — LFO 1 RATE — 0–100
CC 24 — LFO 1 WAVE — SINE / TRI / SAW / RAMP / SQR / RND / ENV+ / ENV-
CC 25 — LFO 1 FADE — 0–100
CC 26 — LFO 2 RATE — 0–100
CC 27 — LFO 2 WAVE — SINE / TRI / SAW / RAMP / SQR / RND / ENV+ / ENV-
CC 28 — LFO XMOD — 0–100
CC 29 — LFO SYNC MODE — FREE / KEY / BPM / BPM KEY
CC 30 — PLAY MODE — POLY / TRI / DUO / UNISON / MONO
CC 31 — SELECTOR — BASE / MODWHEEL / VELOCITY / AFTERTOUCH / CC74 / KEYTRACK
CC 33 — DISTORTIONS PARAMETER 1 — 0–100
CC 34 — DISTORTIONS PARAMETER 2 — 0–100
CC 35 — DISTORTIONS PARAMETER 3 — 0–100
CC 36 — DISTORTIONS PARAMETER 4 — 0–100
CC 37 — DISTORTIONS PARAMETER 5 — 0–100
CC 38 — DISTORTIONS TYPE — EXP / PARABOLIC / SINE CLIP / S-CURVE / SOFT-CLIP / HARD-CLIP / TRI-CLIP / TRI-FOLD / SINGLE-FOLD / MULTI-FOLD / SINE-BEND / SINE-FOLD / SINE-SHRED / BIN-SHRED / SYM-WARP
CC 39 — MODULATIONS PARAMETER 1 — 0–100
CC 40 — MODULATIONS PARAMETER 2 — 0–100
CC 41 — MODULATIONS PARAMETER 3 — 0–100
CC 42 — MODULATIONS PARAMETER 4 — 0–100
CC 43 — MODULATIONS PARAMETER 5 — 0–100
CC 44 — MODULATIONS TYPE — CHORUS / ENSEMBLE / TAPE CHORUS / BBD CHORUS / FLANGER / BBD FLANGER / TZ FLANGER / PHASER / B-POLE PHASER / DOUBLE NOTCH / PITCH SHIFTER
CC 45 — DELAYS PARAMETER 1 — 0–100
CC 46 — DELAYS PARAMETER 2 — 0–100
CC 47 — DELAYS PARAMETER 3 — 0–100
CC 48 — DELAYS PARAMETER 4 — 0–100
CC 49 — DELAYS PARAMETER 5 — 0–100
CC 50 — DELAYS TYPE — STEREO / PING-PONG / BBD / RND REPEATER
CC 51 — REVERBS PARAMETER 1 — 0–100
CC 52 — REVERBS PARAMETER 2 — 0–100
CC 53 — REVERBS PARAMETER 3 — 0–100
CC 54 — REVERBS PARAMETER 4 — 0–100
CC 55 — REVERBS PARAMETER 5 — 0–100
CC 56 — REVERBS TYPE — SMALL / LARGE / HUGE / CLOUD / SHIMMER
CC 64 — SUSTAIN — OFF / ON
CC 65 — GLIDE MODE — ON / AUTO
CC 68 — LEGATO — OFF / ON
CC 70 — VCO MORPH — 0–100
CC 71 — LPF RESONANCE — 0–100
CC 72 — VCA EG RELEASE — 0–100
CC 73 — VCA EG ATTACK — 0–100
CC 74 — CC74 MOD SOURCE — 0–100
CC 75 — LPF CUT OFF — 0–100
CC 76 — VCO SUB / NOISE — 0–100
CC 78 — VCO 2 TUNE — 0–100
CC 79 — VCO DETUNE — 0–100
CC 80 — VCO FM MODE — MANUAL / EG
CC 81 — VCO 2 SYNC — OFF / ON
CC 82 — LPF TRACK — OFF / MID / HIGH
CC 83 — LPF POLES — 24DB / 12DB
CC 84 — VCO FM — 0–100
CC 85 — VCO PULSE WIDTH — 0–100
CC 86 — SEQUENCERS PARAMETER 1 — 0–100
CC 87 — SEQUENCERS PARAMETER 2 — 0–100
CC 88 — SEQUENCERS PARAMETER 3 — 0–100
CC 89 — SEQUENCERS PARAMETER 4 — 0–100
CC 90 — SEQUENCERS PARAMETER 5 — 0–100
CC 91 — SEQUENCERS PARAMETER TYPE — OFF / SEQ / ARP
CC 92 — BPM — 30–300
CC 93 — DRIVE MODE — OFF / LOW / MID / HIGH
CC 94 — PRESET LEVEL — 0–100
CC 95 — AMP VELOCITY — 0–100
CC 96 — INSTABILITY DEPTH — 0–100
CC 120 — ALL SOUNDS OFF
CC 123 — ALL NOTES OFF

CC 31 (SELECTOR) controls whether subsequent CC messages adjust a parameter's base value or its modulation amount. When set to a modulation source, the 7-bit CC range (0–127) is remapped: 0 → -100, 64 → 0, 127 → +100.

# Specifications

Manufacturer: Dreadbox
Website: dreadbox-fx.com
Manual Version: 1.0.0
Firmware Version: 1.1.0
Voices: 6 polyphonic
Oscillators: 2× VCO per voice with continuous waveshaping (Saw/Square/Triangle)
Sub Oscillator: Yes
Noise: White noise source
Filters: 12dB/24dB resonant Low Pass Filter, 12dB resonant High Pass Filter
Envelopes: 2× ADSR
LFOs: 2× per voice, 8 waveforms each
Effects: Distortion (15 algorithms), Modulation (11 algorithms), Delay (4 algorithms), Reverb (5 algorithms)
Sequencer: Up to 64 steps, 6-note polyphonic
Arpeggiator: 6 modes with probability
Presets: 512 (8 banks × 64)
Connections: MIDI DIN In/Out, USB, Left/Right ¼" unbalanced audio outputs, ¼" stereo headphone output
Power: 15VDC (external supply included)
MIDI: Full CC control, MPE support, SysEx preset export/import
© 2025 Dreadbox. All rights reserved.
