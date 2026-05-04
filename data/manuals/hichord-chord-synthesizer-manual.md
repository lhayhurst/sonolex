---
id: hichord-chord-synthesizer-manual
title: "HiChord Chord Synthesizer Manual"
source: "https://manual.hichord.shop/"
convertedAt: 2026-03-23T10:41:42.663Z
summary: "The HiChord is a hardware chord synthesizer with 7 chord buttons that automatically play harmonically correct chords in any musical key, requiring no music theory knowledge. It features a 12-voice sound engine combining digital oscillators, FM synthesis, and sample playback, along with onboard effects (reverb, delay, chorus, flanger, vocoder) and a 6-track looper for live layering. An 8-direction joystick lets you modify chords in real time (inversions, extensions, jazz voicings), and multiple play modes include strum, arpeggio, drone, and drum mode."
---

# HiChord // Manual

HiChord is a chord synthesizer with 7 Chord Buttons that play the chords naturally occurring in any musical key. Press any chord button and the chords always work together — no music theory required. Hold a chord button and move the joystick to modify the chord (major to minor, sus4, 7ths, extended chords, etc). Change keys instantly with F1 + LEFT/RIGHT. The sound engine combines digital oscillators, FM synthesis, and sample playback across 12 voices. Onboard effects include reverb, delay, chorus, flanger, and vocoder. The 6-track looper captures your progressions for live layering, with a built-in mixer for per-track mute and volume control.

HiChord Hardware Layout: OLED display (left), 8-direction joystick, 3 function buttons (F1 gray, F2 yellow, F3 red), and 7 Chord Buttons (1-7)

Revision: Rev 2.7 BETA

# 00 // Quick Start

First Time Using HiChord?

Power on: Slide the red power button on top.
Adjust volume: Use the volume slider on top. For best sound quality, use headphones connected to the headphone jack.
Play a chord: Press any Chord Button 1-7. These represent scale degrees (I, ii, iii, IV, V, vi, vii°).
Try different sounds: Press F2 to enter Sounds menu, then LEFT/RIGHT to browse Sounds.
Add effects: Press F2, Joystick UP to enter Effects, use LEFT/RIGHT to find REVERB or DELAY, then UP to toggle ON/OFF.
Change key: Press F1, then Joystick LEFT/RIGHT to transpose.
Try modes: Hold F3, then press Chord Buttons 1-7 for quick mode select (ONESHOT, STRUM, LEAD, DRONE, ARPEGGIO, REPEAT, DRUMMODE).

Three Function Buttons:
F1 — Settings Menu (key, octave).
F2 — Effects & Sounds Menu (effects, waveforms).
F3 — Mode Selection & BPM (tempo, modes).

Advanced Tip: The Volume Knob can be combined with function buttons for precise sound shaping (Attack, Release, Filter). See the Advanced Controls section for details.

NEED HELP? Contact support team at support@hichord.shop

# 01 // Basic Operation



## Playing Chords

The 7 Chord Buttons trigger chords using the Diatonic Chord System. Each chord button represents a scale degree in the current key.

In major mode:
Chord Button 1 — Degree I — Major — Example (Key of C): C Major
Chord Button 2 — Degree ii — minor — Example: D minor
Chord Button 3 — Degree iii — minor — Example: E minor
Chord Button 4 — Degree IV — Major — Example: F Major
Chord Button 5 — Degree V — Major — Example: G Major
Chord Button 6 — Degree vi — minor — Example: A minor
Chord Button 7 — Degree vii° — dim — Example: B diminished

## Modifying Chords with Joystick

Hold any Chord Button, then move the joystick in any direction to modify the chord quality in real-time. Release the joystick to return to the default chord.

Example: Hold Chord Button 1 (I chord, C Major), push joystick UP to toggle to C minor, or push RIGHT for C Maj7, or push DOWN for C sus4.

Joystick Chord Map:
↖aug ↑Maj/min ↗dom7
←dim ●(base) →Maj7/m7
↙6/sus2 ↓sus4 ↘9

Note: Some modifications depend on base chord quality (major/minor)

### Default Mode (Basic Chord Modifications)

In DEFAULT mode, some modifications depend on the base chord type (major/minor/diminished):

Joystick UP → Major ↔ Minor
Joystick DOWN → sus4
Joystick LEFT → dim / Minor
Joystick RIGHT → Maj7 / min7
Joystick UP+LEFT → aug
Joystick UP+RIGHT → dom7
Joystick DOWN+LEFT → Maj6 / sus2
Joystick DOWN+RIGHT → Maj9 / min9

### Extended Mode (Advanced Extensions)

In EXTENDED mode, most directions produce fixed chord types regardless of base chord:

Joystick UP → Major ↔ Minor
Joystick DOWN → dom7♯9
Joystick LEFT → sus4+7
Joystick RIGHT → add11
Joystick UP+LEFT → half-dim7
Joystick UP+RIGHT → dom9
Joystick DOWN+LEFT → add9
Joystick DOWN+RIGHT → min11

### Chromatic Mode (Jazz Voicings)

CHROMATIC mode provides sophisticated jazz chords and chromatic pitch shifting:

Joystick UP → min(maj7)
Joystick DOWN → Maj13
Joystick LEFT → half-dim7
Joystick RIGHT → 6/9
Joystick UP+LEFT → Maj7♯11
Joystick UP+RIGHT → dom13
Joystick DOWN+LEFT → dom7♭9
Joystick DOWN+RIGHT → dom7alt

CHROMATIC MODE BONUS: Moving the joystick LEFT or RIGHT alone (without holding a chord button) shifts the key chromatically by ±1 semitone, allowing you to play chords outside the current scale.

### Switching Between Modes

To change joystick mode:
1. Press F2 to open Effects menu.
2. Navigate to JOYSTICK option (use Joystick LEFT/RIGHT).
3. Press Joystick DOWN to cycle: DEFAULT → EXTENDED → CHROMATIC → (back to DEFAULT).

Display shows current mode: "JOYSTICK DEFAULT", "JOYSTICK EXTEND", or "JOYSTICK CHROMATIC".

Pro Tip: DEFAULT mode covers all essential chord colors for most musical styles. EXTENDED mode adds sophisticated extensions like dom9, min11, and add9. CHROMATIC mode is designed for jazz players who need altered dominants, Lydian chords, and chromatic movement.

## Inversions

Inversions change which note is lowest in the chord voicing, creating smoother bass movement between chords.

Manual control: While holding any Chord Button, press F2 to cycle through inversions: Root Position (default) → 1st Inversion → 2nd Inversion → (repeat).

Automatic voice leading: Enable VOICE LEAD in the F2 Effects menu to have HiChord automatically select inversions for smooth voice leading between chords. This creates professional-sounding progressions with minimal melodic motion.

## Chord Lock (Make Modifications Permanent)

Purpose: Save a modified chord (like sus4 or Maj7) so the chord button always plays that variation.

To lock a chord:
1. Hold Chord Button (e.g., Chord Button 4).
2. Move joystick to desired modification (e.g., UP for sus4).
3. While still holding both, press F2.
4. Display shows "LOCKED" — Chord Button 4 now always plays IV sus4.

To unlock: Repeat the same process (hold chord button + joystick direction + F2).

Cross-Key Chord Transfer: Chord Lock saves the exact chord structure, allowing you to transfer a chord from one key to another. In your current key (e.g., C Major), build and lock a chord (e.g., Chord Button 4 with sus4 modification). Change to a different key (e.g., F Major) using the joystick + F1. The locked chord button (Button 4) now plays the same chord structure in the new key (F sus4 instead of C sus4). This allows you to create consistent chord voicings across multiple keys without reconfiguring each time.

Example Use Case: Lock a Maj7 chord on Button 1 in C Major, then switch to G Major — Button 1 automatically becomes G Maj7 with the same voicing.

## Slash Chords (Two-Button Press)

BATCH 4+ HARDWARE REQUIRED — Slash chords require the Batch 4 (Rev C) I2C button hardware, which can detect multiple simultaneous button presses.

A slash chord is a chord played over a specific bass note. For example, C/G means "C Major chord with G as the bass note." They create smoother bass lines and richer harmonic movement.

How to play slash chords:
1. Hold one Chord Button — this becomes the bass note.
2. While still holding, press a second Chord Button — this becomes the chord.
3. The display shows the slash chord notation (e.g., "E minor/C").
4. Release either button to return to a single chord.

Example: In the key of C, hold Chord Button 1 (C), then press Chord Button 3 (E minor) → plays E minor/C (E minor chord with C in the bass).

Works in: ONESHOT, STRUM, DRONE, ARPEGGIO, and REPEAT modes.

## Octave Shifting



### Per-Button Octave

Purpose: Raise or lower the pitch range of individual Chord Buttons for more voicing flexibility.

Octave DOWN: Hold Chord Button, then press F1.
Octave UP: Hold Chord Button, then press F3.
Range: -2 octaves → -1 octave → Normal → +1 octave.

Each chord button remembers its octave setting independently.

### Global Octave (All Chord Buttons)

Purpose: Shift the pitch range of all Chord Buttons simultaneously.

Operation: Press F1 to open KEY + OCTAVE menu. Use Joystick UP/DOWN to adjust global octave.
Range: -1 octave → +0 (normal) → +1 octave → +2 octaves.

Also in F1 menu: Use Joystick LEFT/RIGHT to change key (transpose all chords).
The F1 menu closes automatically after 5 seconds of inactivity, or press F1 again to close immediately.

Global vs Per-Button: Global octave shifts apply to all chord buttons at once, while per-chord-button shifts allow you to create custom voicings where different Chord Buttons play in different octave ranges.

## Changing Key

How to change key: Press F1 to open KEY + OCTAVE menu, then use Joystick LEFT/RIGHT to select a new key.

Available keys: C, C#, D, D#, E, F, F#, G, G#, A, A#, B (all 12 chromatic keys).

All Chord Buttons transpose to the new key, maintaining Diatonic Chord System relationships. The current key is always displayed on screen.

## BPM (Tempo)

How to change BPM: Press F3 → Joystick UP to enter BPM submenu → Joystick LEFT/RIGHT to adjust (60-190 BPM).

Tap Tempo: Tap F3 three times in rhythm to set BPM automatically.

What it affects: All rhythm rates, delays, arpeggios, drum loops, sequencer, and metronome sync to the current BPM.

# 02 // Sound Selection

HiChord offers multiple synthesis engines: analog waveforms, FM synthesis, sample playback, and hybrid presets. Choose sounds that fit your musical style.

## Method 1: Quick Select (Fastest)

Hold F2 first, then press a Chord Button for instant sound selection:

F2 + Button 1 → SAW (Analog)
F2 + Button 2 → SINE (Analog)
F2 + Button 3 → FM_EPIANO (FM Synthesis)
F2 + Button 4 → FM_HX7 (FM Synthesis)
F2 + Button 5 → STRINGS (Sample)
F2 + Button 6 → CLARINET (Sample)
F2 + Button 7 → FM_BELL (FM Synthesis)

## Method 2: Browse All Sounds

Press F2 to enter Sounds menu. Use Joystick LEFT/RIGHT to browse all available Sounds. Display shows Sound name and animated waveform preview. Press Joystick DOWN to exit.

## All Available Waveforms



### Analog Waveforms

SINE — Pure fundamental tone.
SAW — Bright, harmonically rich.
TRIANGLE — Soft, mellow.
SQUARE — Hollow, 8-bit character.

### FM Synthesis

FM_EPIANO — Electric piano (Rhodes-style).
FM_HX7 — DX7-style digital synthesis.
FM_BELL — Bell tones.
FM_ORGAN — Organ tones.
FM_BRASS — Brass section.

### Sample Playback

SAMPLE_STRINGS — Orchestral strings.
SAMPLE_CLARINET — Woodwind clarinet.
SAMPLE_CELLOS — Cello section.
SAMPLE_ACOUSTIC — Acoustic guitar.
SAMPLE_BRASS — Brass ensemble.
SAMPLE_PIANO_UPRIGHT — Upright piano.
SAMPLE_VIBRAPHONE — Vibraphone/marimba.
SAMPLE_VIOLINS — Violin section.
SAMPLE_VOX_AHH — Vocal "ahh" sounds.
SAMPLE_WURLI — Wurlitzer electric piano.
SAMPLE_HARP — Harp.
SAMPLE_VIOLA — Viola.
SAMPLE_HUMMING — Human humming.
SAMPLE_FLUTE — Flute.
SAMPLE_ROBBO — Synth bass.
SAMPLE_SHUTTER — Percussive shutter.
SAMPLE_USER — Custom user sample (uploaded via Companion App).
SAMPLE_MIC — Record your own sample from the microphone. (Batch 4+ only)

### Hybrid Presets

SAWSQUARE — Layered saw + square waves.
JUNO_POLY — Juno-106 style polysynth pad.
OCEAN_PAD — Ambient soundscape (noise + FM).
WOBBLE_BASS — LFO-modulated bass sound.

# 03 // Effects Menu



## Accessing Effects

Press F2 to enter Sounds menu (base menu shows waveforms). Press Joystick UP to enter Effects submenu. Use Joystick LEFT/RIGHT to cycle through Effects. Display shows Effect name with animated icon and current status in the top bar. Use Joystick UP to adjust/toggle the selected Effect. Press Joystick DOWN to return to Sounds menu, then DOWN again to exit completely.

NEW in 2.7: Effects Menu Redesign — The F2 menu structure has been redesigned. Pressing F2 now opens the Sounds menu first (showing waveforms with animated icons), then Joystick UP takes you to the Effects submenu. This two-level design separates sound selection from effect adjustment, making navigation more intuitive. Effects are now toggled with Joystick UP (not DOWN), and the display shows animated icons with status indicators.

## Reverb

To use: Press F2 → Joystick UP → Navigate to REVERB → Joystick UP toggles ON/OFF.

Stereo reverb processor with 65-75% feedback for spacious ambience. Creates room/hall simulation.

## Connecting to Hardware Synths and Mobile Devices

Connect the adapter's MIDI OUT to your synth's MIDI IN. Set your synth to receive on MIDI Channel 1. Play chords on HiChord — your hardware synth plays the notes. Note: You cannot connect HiChord directly to another synth via USB — both are USB devices and need a host (computer or USB MIDI Host adapter) in between.

Mobile Devices (iOS / Android): HiChord works with phones and tablets that support USB audio or MIDI:
- iOS (Lightning): Use Apple's Lightning-to-USB Camera Adapter, then a USB-A to USB-C cable to HiChord.
- iOS (USB-C iPad/iPhone): Connect directly with a USB-C cable.
- Android: Connect directly with USB-C (device must support USB OTG).

HiChord appears as a class-compliant device in GarageBand, AUM, Koala Sampler, BandLab, and other music apps. Set USB mode to Audio or MIDI depending on your use case.

# 05 // MODE MENU

HiChord has multiple playing modes. There are two ways to change modes.

## Method 1: Mode Menu (Full Access)

This method gives you access to all modes and allows you to adjust mode-specific settings:
- Press F3 to open Mode menu (base menu shows current mode with animated icon).
- Use Joystick LEFT/RIGHT to cycle through all available modes.
- Display shows mode name with animated preview icon.
- Mode changes take effect immediately as you navigate.
- Press Joystick UP to enter BPM submenu (shows tempo, adjustable with LEFT/RIGHT).
- Press Joystick DOWN to return to Mode menu, then F3 again to exit completely.

NEW in 2.7: Mode Menu Redesign — The F3 menu structure has been redesigned. Pressing F3 now opens the Mode Selection menu first (showing modes with animated icons), then Joystick UP takes you to the BPM submenu. This two-level design separates mode selection from tempo adjustment. Mode-specific parameters (strum speed, rhythm rates, difficulty) are now adjusted with Joystick DOWN in the base Mode menu, making them more accessible.

Note: The F3 Mode menu has two levels: base menu (Mode Selection with LEFT/RIGHT) and submenu (BPM with UP). Press DOWN to navigate back.

Adjusting mode-specific parameters: Once in a mode, you can adjust its settings:
- STRUM: In STRUM mode, press F3 → use DOWN to cycle strum speeds (SLOW/MEDIUM/FAST).
- ARPEGGIO/REPEAT/DRUMLOOP/SEQUENCER: In these modes, press F3 → use DOWN to cycle rhythm rates (1/1, 1/2, 1/4, 1/8, 1/16, 1/16T, 1/32).
- EARTRAINER: In EARTRAINER mode, press F3 → use DOWN to cycle difficulty levels.

All modes accessible via Mode menu: ONESHOT, STRUM, LEAD, DRONE, ARPEGGIO, REPEAT, DRUMMODE, DRUMLOOPMODE, SEQUENCER, CHORDHIRO, EARTRAINER, TUNER, MIC SAMPLE, MIXER

Note: AUTODRUM is not a selectable mode — it automatically activates when you press a Chord Button + move joystick while in DRUMMODE. TUNER and MIC SAMPLE require Batch 4+ hardware. MIXER only appears when the looper has active tracks.

## Method 2: Quick Mode Select (7 Most Common Modes)

Fastest method for the 7 most-used modes. Hold F3, then press a Chord Button for instant mode switching:

| F3 + BUTTON | MODE |
|---|---|
| 1 | ONESHOT |
| 2 | STRUM |
| 3 | LEAD |
| 4 | DRONE |
| 5 | ARPEGGIO |
| 6 | REPEAT |
| 7 | DRUMMODE |

Note: Quick Mode Select only accesses 7 modes. To access DRUMLOOPMODE, SEQUENCER, CHORDHIRO or EARTRAINER, use Method 1 (Mode Menu with F3 → LEFT/RIGHT).

# 06 // MODE DESCRIPTIONS



## ONESHOT

Function: Standard polyphonic chord triggering with ADSR envelope.
Quick Select: F3 + Chord Button 1
Operation: Hold Chord Button → chord plays → release → envelope releases

## STRUM

Function: Guitar strumming simulation.
Quick Select: F3 + Chord Button 2
Operation: Hold Chord Button → notes trigger sequentially with timing delay
Strum Speed: Press F3 to enter Mode menu, then use Joystick DOWN to cycle through speeds:
- SLOW (200ms between notes)
- MEDIUM (80ms)
- FAST (40ms)

## LEAD

Function: Monophonic single-note mode for melodies.
Quick Select: F3 + Chord Button 3
Operation: Only plays root note of each Chord Button. New notes cut off previous notes.
Display: Shows note names (C, D, E...) instead of chord names

## DRONE

Function: Infinite sustain mode.
Quick Select: F3 + Chord Button 4
Operation: Hold Chord Button → sound continues indefinitely until another chord button is pressed

## ARPEGGIO

Function: Automatic arpeggiated patterns, tempo-synced.
Quick Select: F3 + Chord Button 5
Operation: Hold Chord Button → notes play in sequence automatically

Pattern Selection (F1 + Chord Buttons 1-5):
- Chord Button 1: UP (ascending)
- Chord Button 2: DOWN (descending)
- Chord Button 3: UP/DOWN (ascend then descend)
- Chord Button 4: RANDOM
- Chord Button 5: FINGERPICK

Chord Mode (F1 + Chord Buttons 6-7 cycles):
- ARP_ONLY — Just arpeggio
- CHORD+ARP — Sustained chord with arpeggio on top
- RHYTHM+ARP — Rhythmic chord stabs with arpeggio

Rhythm Rate: Press F3 to enter Mode menu, then use Joystick DOWN to cycle through rates (1/1 whole, 1/2 half, 1/4, 1/8, 1/16, 1/16T, 1/32)

## REPEAT

Function: Rhythmic gating/stuttering effect.
Quick Select: F3 + Chord Button 6
Operation: Chord repeats at selected rhythm rate (set via F3 + Joystick DOWN)
Rhythm Rates: 1/1 (whole note), 1/2 (half note), 1/4, 1/8, 1/16, 1/16T (triplet), 1/32 — synced to BPM

## DRUMMODE

Function: Manual drum triggering.
Quick Select: F3 + Chord Button 7
Operation: Each Chord Button triggers a different drum sound:
- Chord Button 1: Kick
- Chord Button 2: Snare
- Chord Button 3: Hi-hat
- Chord Button 4: Tom
- Chord Button 5: Bell/Ride
- Chord Button 6-7: Additional percussion

Drum Kits (F2 + Chord Buttons 1-6):
- Chord Button 1: TIGHTKIT (PCM samples, default)
- Chord Button 2: x0x BOX (deep sub bass)
- Chord Button 3: x9x BOX (punchy techno)
- Chord Button 4: LYNN KIT (warm vintage)
- Chord Button 5: KR-78 (lo-fi retro)
- Chord Button 6: TRAP BOX (modern sub)

## DRUMLOOPMODE

Function: Pre-programmed drum patterns with variations.
Access: F3 → Joystick UP → LEFT/RIGHT to select DRUMLOOPMODE
Operation:
- Chord Buttons 1-7: Select and toggle patterns (0-6) on/off.
- Hold chord button + Joystick UP/DOWN: Select variation (0-7).
- Joystick LEFT/RIGHT (no button held): Switch drum kits.

7 Patterns:
- Chord Button 1 (Pattern 0): ROCK
- Chord Button 2 (Pattern 1): DISCO
- Chord Button 3 (Pattern 2): REGGAE
- Chord Button 4 (Pattern 3): FUNK
- Chord Button 5 (Pattern 4): HIP-HOP
- Chord Button 6 (Pattern 5): ELECTRO
- Chord Button 7 (Pattern 6): JAZZ

8 Variations per pattern:
- 0: Original
- 1: Ghost notes
- 2: Busier hi-hats
- 3: Syncopated kicks
- 4: Fills every 4th bar
- 5: Half-time
- 6: Double-time
- 7: Complex/jazz variation

Drum loops persist across mode changes. You can start a drum loop, switch to ONESHOT or ARPEGGIO mode, and play chords over the drums.

## AUTODRUM

Function: Rhythm-controlled drum triggering mode (automatically activated from DRUMMODE).
How it works: In DRUMMODE, press any Chord Button (1-7) and move the joystick → automatically enters AUTODRUM. Release joystick → returns to DRUMMODE.

Rhythm Rate Control (while holding chord button + joystick):
- Joystick UP: 1/4 note
- Joystick RIGHT: 1/8 note
- Joystick DOWN: 1/16 note
- Joystick LEFT: 1/32 note
- Joystick UP-RIGHT: Swing 8th
- Joystick DOWN-RIGHT: Swing 16th
- Joystick DOWN-LEFT: 1/16 triplet
- Joystick UP-LEFT: Swing 8th

Note: AUTODRUM is not a standalone mode you select from the Mode menu. It's a temporary state that activates when you use DRUMMODE with joystick control, allowing you to set precise rhythm rates for drum triggers.

## SEQUENCER

Function: 16-step chord sequencer.
Access: F3 → Joystick UP → LEFT/RIGHT to select SEQUENCER

Recording: Enter SEQUENCER mode (in RECORD by default). Press Chord Buttons in desired order (up to 16 steps). Display shows step count.

Playback: Joystick CLICK: Start/stop playback. Syncs to BPM and current rhythm rate.

Editing: Joystick LEFT/RIGHT: Navigate steps. Press Chord Button to change chord at current step.

Sequence Length:
- Expand: Joystick DOWN jumps forward 4 steps and auto-expands the sequence (up to 16 steps).
- Shrink: Joystick UP jumps back 4 steps.
- Trim: Hold Joystick Click + UP for 1 second to trim trailing empty steps.
- Steps also auto-expand when you press a Chord Button past the current sequence length.

## CHORDHIRO

Function: Rhythm game for learning chord progressions (Guitar Hero style).
Access: F3 → Joystick UP → LEFT/RIGHT to select CHORDHIRO

Operation:
- Press F2 to select song.
- Joystick UP/DOWN browses songs.
- Click to confirm.
- Press F3 to start countdown.
- Play chords when notes reach hit zone.

Scoring: PERFECT (±50ms on EXPERT), GREAT, OK, MISS.

Difficulty Levels:
- EASY: ±200ms timing window
- MEDIUM: ±150ms
- HARD: ±100ms
- EXPERT: ±50ms

## EARTRAINER

Function: Train ear to recognize chords.
Access: F3 → Joystick UP → LEFT/RIGHT to select EARTRAINER

Operation: HiChord plays root note, then a chord. Press Chord Button (1-7) to guess. Immediate feedback (correct/incorrect).

Difficulty (Joystick UP/DOWN changes level):
- BASIC: Simple triads
- EXTENDED: Includes 7ths, sus, aug, dim
- PROGRESSION: 2-4 chord progressions
- PROG+EXTENDED: Complex progressions

Controls during training: F1: Replay root note (hint).
Note: After an incorrect guess, HiChord automatically replays the chord for learning.

## TUNER (Batch 4+ Hardware Required)

Tuner mode requires the Batch 4 (Rev C) hardware with built-in microphone input.

Function: Chromatic tuner for tuning instruments or checking pitch.
Access: F3 → Joystick LEFT/RIGHT to select TUNER

Operation:
- Enter TUNER mode from the Mode menu.
- Play or sing a note near the built-in microphone.
- The display shows the detected note name (C, C#, D, etc.) in large text.
- A tuning bar at the bottom shows how sharp (#) or flat (b) the note is.
- A sliding triangle marker moves left (flat) or right (sharp) along the bar.
- When the note is in tune (within ±5 cents), the note name displays inverted (white on black) as confirmation.

Use case: Tune a guitar, ukulele, or any instrument to play along with HiChord in the same key.

## MIC SAMPLE (Batch 4+ Hardware Required)

Mic Sample mode requires the Batch 4 (Rev C) hardware with built-in microphone input.

Function: Record a custom sample from the microphone and use it as a waveform.
Access: F3 → Joystick LEFT/RIGHT to select MIC

Recording:
- Enter MIC SAMPLE mode — display shows "MIC SAMPLE" with instructions.
- Hold Chord Button 1 to start recording.
- Recording lasts as long as you hold the button (up to ~3 seconds).
- Sing, speak, or make a sound into the microphone while holding the button.
- Release Chord Button 1 to stop recording.
- HiChord automatically analyzes the pitch, tunes it to C, and loads it as a playable waveform.

Display during recording: RECORDING text with elapsed time (e.g., "1.2 sec"). Progress bar showing recording duration (max 3 seconds). Level meter showing audio input volume.

After recording: HiChord shows "Saving..." then "Tuning..." as it processes the sample. The sample is auto-pitched to C so it plays in tune across all chord buttons. Switch to any playing mode (ONESHOT, ARPEGGIO, etc.) and your recorded sample is now the active waveform. Play chords — your voice or sound is pitched across the chord notes.

Adjusting mic gain: Use the Volume Knob while in MIC SAMPLE mode to adjust the microphone input level before recording.

Important: Mic samples are stored in volatile memory and will be lost when HiChord is powered off. This is by design to keep things simple — record, play, experiment. If you want to keep a sample permanently, use the Companion App to upload samples to flash storage.

## MIXER

Function: Control the 6-track looper — mute, unmute, solo, and adjust volume for each track.
Access: F3 → Joystick LEFT/RIGHT to select MIXER (only appears when the looper has active tracks)

Display: Shows all 6 tracks plus a metronome column. Each track displays a number (1-6) with a volume bar below it. Muted tracks show corner dots instead of a volume bar. The title bar shows "MIXER" (or "STOPPED" when paused).

Controls:
- Press a Chord Button (1-6): Toggle mute/unmute for that track.
- Hold a Chord Button + move Volume Knob: Adjust volume for that track. The volume bar updates in real-time.
- Chord Button 7: Toggle the metronome on/off.
- Hold a Chord Button + press F2: Solo that track (mutes all others). Press again to un-solo.
- Joystick Click: Pause/resume all loop playback. When resumed, all tracks restart in sync.
- Press 2+ Chord Buttons simultaneously: Toggle mute on all pressed tracks at once (Batch 4+ only).

Auto-exit: If all looper tracks are cleared, MIXER mode automatically exits back to ONESHOT mode.

# 07 // LOOPER

IMPORTANT: The looper is controlled entirely by the JOYSTICK. No function buttons are needed!
Capacity: 6 independent tracks (~20 seconds each).

# Looper

The looper provides 6 tracks organized in 3 pages of 2 tracks each, shown as different shapes on screen: circles (tracks 1-2), squares (tracks 3-4), and triangles (tracks 5-6).

## Getting Started with the Looper

The looper is always available and ready to use. To start recording: Press Joystick CLICK to activate the looper → enters WAITING state. In WAITING state, optionally adjust bar count (0-8) using Joystick LEFT/RIGHT. Press Joystick CLICK again to start recording. The looper cycles through states: OFF → WAITING → RECORD → LOOP → OFF.

## Mode Compatibility

Looper works in all modes EXCEPT SEQUENCER:
ONESHOT, STRUM, LEAD, DRONE, ARPEGGIO, REPEAT — Record chords and melodies.
DRUMMODE, DRUMLOOPMODE, AUTODRUM — Record drum performances.
CHORDHIRO, EARTRAINER — Record practice sessions.
Note: SEQUENCER mode has built-in recording, so the looper is disabled. However, when you leave SEQUENCER mode while a sequence is playing, it automatically bounces to an available looper track.

## Track Selection

Non-drum modes: Joystick LEFT/RIGHT to cycle through tracks (1 → 2 → 3 → 4 → 5 → 6)
Drum modes: Joystick UP/DOWN to cycle through tracks
The display shows which track page you're on using shapes: circles for tracks 1-2, squares for 3-4, triangles for 5-6. The selected track is highlighted with a filled shape, and tracks with active recordings show as filled shapes.

## Recording Track 1 (First Track)

Start: Press Joystick CLICK → cycles OFF → WAITING.
Adjust bars (optional): In WAITING state, Joystick LEFT/RIGHT sets bar count
0 = Free mode (no bar limit).
1-8 = Fixed bars (recording stops automatically).
Begin recording: Press Joystick CLICK again
Free mode: Recording starts immediately.
Bar mode: Pre-roll metronome counts in 4 beats first.
Record: Play chords or drums.
Stop: Press Joystick CLICK (or auto-stops at bar count).
Playback: Loop plays automatically.

## Recording Additional Tracks (Tracks 2-6 / Overdubbing)

Prerequisite: Track 1 must be looping first.
Switch tracks: Joystick LEFT/RIGHT (or UP/DOWN in drum modes) to select any empty track.
Start: Press Joystick CLICK → cycles OFF → WAITING.
Begin recording: Press Joystick CLICK again
Recording syncs automatically to Track 1's loop start.
The display shows a beat countdown.
Length matches Track 1 (bar count not adjustable for secondary tracks).
Record: Play additional chords, melodies, or drums.
Stop/Loop: Press Joystick CLICK to cycle RECORD → LOOP → OFF.
Repeat: Switch to the next empty track and record another layer. Build up to 6 layers.
Tip: Use the MIXER mode to control your layers after recording — mute/unmute tracks, adjust individual volumes, solo a track, or pause everything.

## Stopping and Clearing

Clear a track: Press Joystick CLICK repeatedly until reaching OFF state.
Clear all: When Track 1 goes OFF, all other tracks are automatically cleared too.
Pause all playback: Press Joystick DOWN in any mode, or use Joystick CLICK in MIXER mode, to pause/resume all looper tracks simultaneously.

## Metronome

Metronome is enabled by default during looper recording. Provides audible click track during recording (tempo from BPM setting).

## Automatic Sequencer Bouncing

Special feature: When you leave SEQUENCER mode while a sequence is playing, HiChord automatically bounces it to the looper!
How it works:
In SEQUENCER mode, record your chord progression.
Press Joystick CLICK to start playback.
While playing, press F3 and switch to another mode (ONESHOT, ARPEGGIO, etc.).
HiChord automatically captures the full sequence pattern to an available looper track.
Sequence now plays from the looper, freeing you to play live chords or melodies over it.
Requirements: At least one looper track must be empty (OFF state). Sequence must be playing when you change modes. Bounce captures the entire sequence length.

## Automatic Drum Loop Bouncing

Special feature: When you leave DRUMLOOPMODE while a drum loop is playing, HiChord automatically bounces it to the looper!
How it works:
Start a drum loop in DRUMLOOPMODE (Joystick UP/DOWN and LEFT/RIGHT to select pattern).
Press F3 to enter Mode menu.
Switch to any other mode (ONESHOT, STRUM, ARPEGGIO, etc.).
HiChord automatically captures the full 16-step drum pattern to an available looper track.
Drum loop now plays from the looper, freeing you to play chords over it.
You can record additional tracks for overdubbing (up to 6 total layers).
Why this is useful: This lets you quickly build layered productions - start with drums in DRUMLOOPMODE, switch modes to capture them, then layer chords and melodies on top using the looper's second track!
Requirements: At least one looper track must be empty (OFF state). Drum loop must be playing when you change modes. Bounce happens automatically at the loop boundary (step 0).

# User Presets

Save your own custom sound configurations to 4 user preset slots. These are separate from the built-in hybrid presets (JUNO_POLY, OCEAN_PAD, etc.) and allow you to store your exact settings.
Capacity: 4 user preset slots (P1, P2, P3, P4)

## Saving Preset

Configure desired sound (waveform, effects, ADSR, etc.).
Press F2 + F3 simultaneously.
Display shows Preset menu with P1-P4 slots.
Joystick LEFT/RIGHT: Select slot (P1, P2, P3, or P4).
Joystick UP to save to selected slot.
Display shows "SAVED PRESET 1" (or 2, 3, 4) confirmation.

## Loading Preset

Press F2 + F3
Joystick LEFT/RIGHT: Select slot (P1, P2, P3, or P4).
Joystick DOWN to load selected slot.
Display shows "LOADED PRESET 1" (or 2, 3, 4) confirmation.
All settings restored instantly.
Menu Navigation: LEFT/RIGHT selects which preset slot (P1-P4), UP saves to that slot, DOWN loads from that slot. Slots marked with * have saved presets.

## What Gets Saved

Current waveform.
All effect states (on/off).
Effect parameters.
ADSR preset.
Arpeggio pattern and mode.
Key shift.
Glide setting.
Inversions per chord button.
Octave shifts per chord button.
Mode state.
Custom ADSR times (if set).
Random waveform configuration (if using RANDOM).
Chorus, flanger, and FM synthesis parameters.
Bass mode and detune amount.
Drum loop selection and variation.
Arpeggio pattern type.
Sequencer chord sequence (up to 16 steps).
Filter settings (lowpass and highpass).
User samples: Custom samples uploaded via USB are saved to flash memory with your preset.

# Advanced Controls



## Custom Envelope Shaping

Attack Time: Hold F1 + turn Volume Knob
Range: 1-2000ms.
Only works when no chord is playing.
Overrides ADSR preset.
Display shows current attack value.

Release Time: Hold F2 + turn Volume Knob
Range: 1-5000ms.
Only works when no chord is playing.
Overrides ADSR preset.
Display shows current release value.

## Custom Filter Cutoff

Fine Control: Hold F3 + turn Volume Knob
Range: 20Hz-20kHz (full audio spectrum).
Precise frequency adjustment.
Display shows current cutoff frequency.

## Battery Status

Hold F1 + F2: Display shows battery voltage and percentage

## Factory Reset

Hold F1 + F3: Clear and reset all settings to factory defaults
WARNING: This will reset all custom settings including:
Key and octave settings.
Current waveform/sound selection.
All effect settings (reverb, delay, filter, etc.).
BPM and tempo settings.
Current mode selection.
Note: User presets and looper recordings are NOT affected by factory reset.

## Companion App

Connect HiChord to your computer via USB to access the web-based Companion App. This powerful tool allows you to:
Manage Presets: Save, load, and organize your custom presets.
Design Sounds: Deep dive into the synthesis engine with visual controls for all 12 oscillators.
Configure FM/Analog/Sample: Select engines and waveforms for each voice.
Upload Custom Samples: Transfer your own audio samples to HiChord via USB.
Design Arpeggio Patterns: Create custom arpeggio patterns and send them to the device.
Vocoder Controls: Fine-tune all vocoder parameters (formant shift, band Q, attack/release, noise, gate).
Full State Sync: Every parameter change on the device is reflected in the app and vice versa.
Update Firmware: Easily flash the latest features to your device.
Access the app at: app.hichord.shop

## HiChord Tabs

Learn any song on HiChord with our Song Tab Generator. Enter a song name and get:
Button Numbers: Which chord buttons (1-7) to press for each chord.
Joystick Directions: When to modify chords with the joystick.
Key Setup: What key to set your HiChord to.
Chord Progressions: Roman numeral analysis and pattern recognition.
Similar Songs: Discover other songs with the same progression.
Access the app at: tabs.hichord.shop

# Music Theory Reference

This section explains the music theory behind HiChord's chord system. Beginners can skip this and return later!

## Understanding the Diatonic Chord System

HiChord uses the Diatonic Chord System (also known as the Nashville Number System), a method of transcribing music by denoting chords according to the scale degree of their root note, rather than by chord name. This system allows musicians to transpose songs instantly to any key.

How It Works:
In any major key, there are 7 notes in the scale. Each note becomes the root of a chord, numbered 1 through 7. The system uses Roman numerals to indicate the scale degree and chord quality:

Button 1 - Scale Degree I (Tonic) - Major - Home chord, stable, resolves tension - Example in C Major: C Major (C-E-G)
Button 2 - Scale Degree ii (Supertonic) - minor - Pre-dominant, leads to V or IV - Example in C Major: D minor (D-F-A)
Button 3 - Scale Degree iii (Mediant) - minor - Tonic substitute, adds color - Example in C Major: E minor (E-G-B)
Button 4 - Scale Degree IV (Subdominant) - Major - Pre-dominant, creates movement - Example in C Major: F Major (F-A-C)
Button 5 - Scale Degree V (Dominant) - Major - Creates tension, wants to resolve to I - Example in C Major: G Major (G-B-D)
Button 6 - Scale Degree vi (Submediant) - minor - Tonic substitute, deceptive resolution - Example in C Major: A minor (A-C-E)
Button 7 - Scale Degree vii° (Leading Tone) - diminished - Creates strong pull to I, rarely used in pop - Example in C Major: B diminished (B-D-F)

Why This Matters: When you press F1 and transpose to a different key, the chord button numbers stay the same, but the actual chord notes change. Chord Button 1 always plays the I chord, Chord Button 5 always plays V, etc. This means you can learn a progression in one key and instantly play it in any other key.

## Common Progressions

The Diatonic Chord System makes famous chord progressions easy to recognize and play:
I-V-vi-IV (Chord Buttons 1-5-6-4): "Axis of Awesome" progression — used in thousands of pop songs.
I-vi-IV-V (Chord Buttons 1-6-4-5): Classic '50s progression — "Stand By Me", doo-wop ballads.
ii-V-I (Chord Buttons 2-5-1): Jazz turnaround — fundamental to jazz harmony.
I-IV-V (Chord Buttons 1-4-5): Blues and rock foundation — 12-bar blues, rock 'n' roll.
vi-IV-I-V (Chord Buttons 6-4-1-5): Sensitive progression — emotional indie/alternative songs.

## Chord Type Reference

HiChord gives you instant access to 16+ chord types via joystick modifications. Here's what each chord type means and how it sounds:

### Basic Triads

MAJOR
Formula: Root + Major 3rd + Perfect 5th (Intervals: 4 semitones + 3 semitones)
Character: Bright, happy, stable. The "default" chord sound in Western music.
Example: C Major = C-E-G
Access: Default (no joystick modification)

MINOR
Formula: Root + Minor 3rd + Perfect 5th (Intervals: 3 semitones + 4 semitones)
Character: Dark, sad, emotional. One semitone difference from major changes everything.
Example: C minor = C-Eb-G
Access: Default for Chord Buttons 2, 3, 6 (ii, iii, vi) in major mode

DIMINISHED
Formula: Root + Minor 3rd + Diminished 5th (Intervals: 3 semitones + 3 semitones)
Character: Tense, unstable, dissonant. Creates strong pull to resolve.
Example: C diminished = C-Eb-Gb
Access: Joystick LEFT, or default on Chord Button 7 (vii°)

AUGMENTED
Formula: Root + Major 3rd + Augmented 5th (Intervals: 4 semitones + 4 semitones)
Character: Dreamy, floating, symmetrical. Every note is 4 semitones apart.
Example: C augmented = C-E-G#
Access: Joystick UP+LEFT (DEFAULT mode)

### Suspended Chords

SUS4
Formula: Root + Perfect 4th + Perfect 5th (replaces the 3rd with a 4th)
Character: Open, unresolved, neither major nor minor. Creates tension that wants to resolve.

### SUS4

Formula: Root + Perfect 4th + Perfect 5th (replaces the 3rd with a 4th)
Character: Open, unresolved, creates anticipation.
Example: Csus4 = C-F-G
Access: Joystick DOWN (DEFAULT mode)
Usage: Often resolves to major or minor. Common in rock and folk.

### SUS2

Formula: Root + Major 2nd + Perfect 5th (replaces the 3rd with a 2nd)
Character: Airy, modern, ambiguous. More stable than sus4.
Example: Csus2 = C-D-G
Access: Joystick DOWN+LEFT on minor chords (DEFAULT mode)
Usage: Popular in modern pop, ambient, and shoegaze.

## Seventh Chords



### MAJOR 7

Formula: Major triad + Major 7th (11 semitones from root)
Character: Lush, jazzy, sophisticated. Soft dissonance.
Example: Cmaj7 = C-E-G-B
Access: Joystick RIGHT on major chords (DEFAULT mode)
Usage: Jazz, R&B, neo-soul. The "pretty" 7th chord.

### DOMINANT 7

Formula: Major triad + Minor 7th (10 semitones from root)
Character: Bluesy, gritty, creates tension. Wants to resolve.
Example: C7 = C-E-G-Bb
Access: Joystick UP+RIGHT (DEFAULT mode)
Usage: Blues, rock, jazz. The V chord in "V7 → I" resolution.

### MINOR 7

Formula: Minor triad + Minor 7th
Character: Smooth, mellow, sophisticated minor. Less sad than plain minor.
Example: Cm7 = C-Eb-G-Bb
Access: Joystick RIGHT on minor chords (DEFAULT mode)
Usage: Jazz, R&B, neo-soul. The ii7 chord in ii-V-I progressions.

### HALF-DIMINISHED 7 (m7♭5)

Formula: Diminished triad + Minor 7th
Character: Dark, jazzy, mysterious. Less harsh than fully diminished.
Example: Cm7♭5 = C-Eb-Gb-Bb
Access: Joystick UP+LEFT (EXTENDED mode)
Usage: Jazz, film scores. Common as viiø7 or ii7 in minor keys.

## Sixth and Extended Chords



### MAJOR 6

Formula: Major triad + Major 6th (9 semitones from root)
Character: Bright, vintage, jazzy. Softer than major 7.
Example: C6 = C-E-G-A
Access: Joystick DOWN+LEFT on major chords (DEFAULT mode)
Usage: Jazz standards, bossa nova, vintage pop.

### MAJOR 9

Formula: Major 7 + Major 9th (major 7th + 2nd octave up)
Character: Lush, modern, complex. Very sophisticated sound.
Example: Cmaj9 = C-E-G-B-D
Access: Joystick UP (EXTENDED mode)
Usage: Modern jazz, neo-soul, fusion.

### MINOR 9

Formula: Minor 7 + Major 9th
Character: Dark but rich, emotional depth.
Example: Cm9 = C-Eb-G-Bb-D
Access: Joystick DOWN (EXTENDED mode)
Usage: Modern R&B, neo-soul, jazz.

### MINOR 11

Formula: Minor 9 + Perfect 11th
Character: Very open, modal, modern. Complex harmony.
Example: Cm11 = C-Eb-G-Bb-D-F
Access: Joystick RIGHT (EXTENDED mode)
Usage: Jazz, ambient, modal music.

Pro Tip: Use the Chord Lock feature (hold Chord Button + joystick direction + F2) to save your favorite chord modifications permanently to specific chord buttons. This is especially useful for complex progressions that use the same modifications repeatedly.

# 11 // SYNTHESIS ENGINE

This section explains HiChord's audio synthesis architecture. Understanding this helps you create custom sounds and understand how presets work.

## Voice Architecture: 12-Oscillator System

HiChord uses a 12-oscillator polyphonic architecture organized as 6 stereo pairs:

Oscillators 0-5: Main voices (one per chord note in 6-note polyphony).
Oscillators 6-11: Detuned/layered voices (paired with oscillators 0-5 for stereo width).

Example: When you play a 4-note chord, HiChord assigns:
Oscillators 0, 1, 2, 3 → play the 4 notes.
Oscillators 6, 7, 8, 9 → play the same 4 notes, but slightly detuned and panned opposite.
Result: Wide stereo image with rich chorusing effect.

### Stereo Panning System

Each oscillator has independent pan control (-1.0 to +1.0):
Main oscillators (0-5): Typically panned across the stereo field (L to R).
Layered oscillators (6-11): Panned opposite to their pairs for width.
Detune: Layered voices are detuned by ±5-15 cents for natural chorusing.
When STEREO effect is OFF, all voices sum to mono center.

## Four Synthesis Engines

Each of the 12 oscillators can use any of these synthesis methods:

### 1. ANALOG SYNTHESIS

Method: Wavetable oscillators with anti-aliased waveforms
Waveforms:
- SINE — Pure fundamental (only 1st harmonic).
- SAW — All harmonics, descending amplitude (bright, aggressive).
- SQUARE — Odd harmonics only (hollow, woody, "8-bit").
- TRIANGLE — Odd harmonics, rapidly descending (soft, mellow).
- POLYBLEP_SAW/SQUARE — Band-limited versions (reduces aliasing at high frequencies).
Use Cases: Classic subtractive synthesis, pads, leads, basses

### 2. FM SYNTHESIS

Method: Frequency Modulation with 2-operator algorithms
Algorithms:
- SIMPLE — Basic FM (sine → sine).
- EPIANO — Electric piano (Rhodes/Wurlitzer style).
- HX7 — DX7-style digital synthesis (metallic, bell-like).
- BELL — Bell tones with high modulation index.
- ORGAN — Organ algorithm (multiple harmonics).
- BRASS — Brass algorithm (rich overtones).
- WOBBLE — Wobble bass with LFO-modulated FM index.
Parameters:
- modRatio: Modulator frequency ratio (0.5 to 8.0) — determines harmonic content.
- modIndex: Modulation depth (0.0 to 10.0) — controls brightness/complexity.
Use Cases: Electric pianos, bells, metallic sounds, digital textures

### 3. SAMPLE PLAYBACK

Method: High-quality sample playback with pitch-shifting
Sample Storage: QSPI flash memory (non-volatile)
Available Samples:
- Orchestral: STRINGS, CELLOS, VIOLINS, BRASS.
- Acoustic: ACOUSTIC (guitar), PIANO_UPRIGHT, VIBRAPHONE.
- Keys: WURLI (Wurlitzer electric piano).
- Woodwinds: CLARINET.
- Vocal: VOX_AHH (choir "ahh").
- User: USER_SAMPLE — upload your own via USB!
- Mic: MIC_CUSTOM — record from the built-in microphone (Batch 4+ only)
Pitch-Shifting: Real-time pitch-shifting (-24 to +24 semitones) allows samples to play across full keyboard range
Loop Mode: Sustaining samples loop seamlessly for held chords
Use Cases: Realistic instruments, textural layers, custom sounds via microphone

### 4. NOISE SYNTHESIS

Method: Filtered noise generation for textural elements
Noise Types:
- WHITE — Full spectrum (equal energy per frequency).
- PINK — Filtered white (equal energy per octave, more natural).
- FILTERED_RESONANT — Noise through resonant bandpass filter.
- METALLIC — Noise with metallic ring modulation.
Parameters:
- filterFreq: Filter cutoff for tonal shaping.
- filterRes: Filter resonance for emphasis at cutoff frequency.
Use Cases: Hi-hats, wind sounds, ambient textures, breath noise in hybrid presets

## Voice Architecture

HiChord uses a fixed 6-voice polyphonic architecture where each note in a chord is assigned to a dedicated voice:

Voice 1: Root note (or first chord note).
Voice 2: Third (or second chord note).
Voice 3: Fifth (or third chord note).
Voice 4: Bass note (root 2 octaves down, or slash chord note).
Voice 5: Extended chord note (6th/7th when applicable).
Voice 6: Extended chord note (9th/11th when applicable).

All voices play together simultaneously using the voice pairing system (voices 1-6 are main oscillators, voices 7-12 are detuned/layered pairs). Each voice can use different synthesis engines (analog oscillators, FM synthesis, sample playback, or filtered noise) for rich hybrid textures.

Voice Leading: When VOICE LEAD is enabled, HiChord automatically optimizes chord inversions to minimize voice movement between chord changes, creating smooth progressions.

### Example Hybrid Preset — "OCEAN_PAD"

Oscillators 0-5: ANALOG sine waves (fundamental tone).
Oscillators 6-11: NOISE (pink, filtered) + FM (low modIndex bell algorithm).
Result: Warm pad with oceanic texture and subtle digital sparkle.

## Signal Flow

Understanding the complete audio signal path:

INPUT → Press Chord Button + Joystick Modification.
CHORD LOGIC → Diatonic Chord System calculates actual notes based on key.
VOICE ALLOCATION → Assigns notes to available oscillators (0-11).
OSCILLATORS → Each oscillator generates audio using its assigned engine (Analog/FM/Sample/Noise).
ENVELOPE (ADSR) → Applied to each oscillator (Attack, Decay, Sustain, Release).
VOICE MIXING → 12 oscillators mixed with pan and amplitude settings.
BASS OSCILLATOR → Optional sub-bass added (ROOT or SLASH mode).
FILTER → State-variable lowpass filter (cutoff 20Hz-20kHz).
MODULATION EFFECTS → Chorus → Flanger.
TIME EFFECTS → Delay (tempo-synced) → Reverb.
LOOPER → Optional record/playback (6 tracks, ~20 seconds each) with per-track mixer.
OUTPUT → Stereo audio (analog out + USB audio) + MIDI out (optional).

## Technical Specifications

| PARAMETER | VALUE |
|---|---|
| Sample Rate | 48 kHz (48,000 samples per second) |
| Bit Depth | 16-bit output, 32-bit float internal processing |
| Polyphony | 6 notes (12 oscillators as 6 stereo pairs) |
| Latency | <3ms (hardware + audio processing) |
| Processor | STM32H750 @ 400 MHz (ARM Cortex-M7 with FPU) |
| RAM | SDRAM for looper buffers, mic sample recording, and sample cache |
| Storage | QSPI Flash (samples, presets, user recordings) |
| Dynamic Range | ~90 dB (limited by hardware DAC) |

Sound Design Tip: The RANDOM waveform feature (F2 + Chord Button 7, or F2 menu + Joystick CLICK) generates hybrid presets by randomly assigning engines, waveforms, detuning, and panning to all 12 oscillators. This can create unique sounds you'd never program manually — try it for happy accidents!

# 12 // COMPLETE BUTTON REFERENCE



## F1 (FUNCTION 1) — MENU & SETTINGS

| ACTION | RESULT |
|---|---|
| F1 (single press) | Enter F1 menu (Key, Octave) |
| In F1 Menu: Joystick UP/DOWN | Change global octave shift |
| In F1 Menu: Joystick LEFT/RIGHT | Change key / transpose |
| Joystick Click (in F1 menu) | Generate random all (waveform, effects, arpeggio) |
| F1 + Chord Buttons 1-5 (ARPEGGIO mode) | Select arpeggio pattern |
| F1 + Chord (chord held first) | Octave DOWN per chord button |
| F1 + Chord (F1 first) | ARPEGGIO: select pattern/mode |
| F1 + Volume Knob | Adjust attack time (custom envelope) |
| F1 + F2 (hold both) | Display battery status |
| F1 + F3 (hold both) | Clear/reset all settings to factory defaults |
| F1 + F2 + F3 (all together) | Enter Firmware Update Mode (DFU) |

## F2 (FUNCTION 2) — EFFECTS & SOUNDS

| ACTION | RESULT |
|---|---|
| F2 (single press) | Enter Sounds menu |
| In F2 Sounds Menu: Joystick LEFT/RIGHT | Browse waveforms |
| In F2 Sounds Menu: Joystick UP | Enter Effects submenu |
| In F2 Effects Submenu: Joystick LEFT/RIGHT | Browse effects |
| In F2 Effects Submenu: Joystick UP | Toggle/adjust selected effect |
| In F2 Effects Submenu: Joystick DOWN | Return to Sounds menu |
| In F2 Sounds Menu: Joystick DOWN | Exit menu completely |
| F2 + Chord (F2 held first) | Quick select waveform (1-7 shortcuts) |
| F2 + Chord (chord held first) | Cycle inversions (Root/1st/2nd) |
| F2 + Chord + Joystick | Lock/unlock modified chord type |
| F2 + Volume Knob | Adjust release time (custom envelope) |
| F2 + F3 (hold both) | Open Preset menu / Bounce to looper |

## F3 (FUNCTION 3) — MODE SELECTION & FILTER

| ACTION | RESULT |
|---|---|
| F3 (single press) | Open Mode menu (LEFT/RIGHT cycles modes, UP enters BPM submenu) |
| F3 × 3 (rapid taps) | Tap tempo - set BPM by tapping rhythm |
| In F3 Mode Menu: Joystick LEFT/RIGHT | Cycle through modes |
| In F3 Mode Menu: Joystick DOWN | Adjust mode-specific parameters (strum speed, rhythm rate, difficulty) |
| In F3 Mode Menu: Joystick UP | Enter BPM submenu |
| In F3 BPM Submenu: Joystick LEFT/RIGHT | Adjust tempo |
| In F3 BPM Submenu: Joystick DOWN | Return to Mode menu |
| Joystick Click (in F3 menu) | Generate random arpeggio pattern |
| F3 + Chord (F3 held first) | Quick mode select (Chord Buttons 1-7) |
| F3 + Chord (chord held first) | Octave UP per chord button |
| F3 + Volume Knob | Engage filter mode, adjust cutoff (20Hz-20kHz) |

## LOOPER CONTROLS (NO FUNCTION BUTTONS)

| ACTION | RESULT |
|---|---|
| Joystick Click | Cycle looper states (OFF → WAITING → RECORD → LOOP → OFF) |
| Joystick LEFT/RIGHT (non-drum modes) | Switch between tracks (1-6) |
| Joystick UP/DOWN (drum modes) | Switch between tracks (1-6) |
| Joystick LEFT/RIGHT (WAITING state) | Adjust bar count (0-8 bars) |
| Joystick DOWN | Pause/resume all looper playback |

## MIXER CONTROLS (IN MIXER MODE)

| ACTION | RESULT |
|---|---|
| Chord Button 1-6 (tap) | Toggle mute/unmute for that track |
| Chord Button 1-6 (hold) + Volume Knob | Adjust volume for that track |
| Chord Button 7 (tap) | Toggle metronome on/off |
| Chord Button (hold) + F2 | Solo/un-solo that track |
| Joystick Click | Pause/resume all loop playback (tracks restart in sync) |
| 2+ Chord Buttons simultaneously | Toggle mute on all pressed tracks (Batch 4+) |

## SLASH CHORDS (BATCH 4+)

| ACTION | RESULT |
|---|---|
| Hold Chord Button + press another | Slash chord: second button's chord over first button's bass note |

# 13 // TECHNICAL SPECIFICATIONS

| PARAMETER | VALUE |
|---|---|
| Processor | STM32H750, 400MHz ARM Cortex-M7 |
| Sample Rate | 48kHz |
| Bit Depth | 16-bit internal / 32-bit float processing |
| Polyphony | Up to 12 voices (6×2 stereo) |
| Display | 64×32 OLED |
| Storage | QSPI Flash (samples, presets, settings) |
| RAM | SDRAM for looper buffers |
| Looper Capacity | ~20 seconds × 6 tracks |
| MIDI | USB MIDI class compliant |
| Power | USB or battery (rechargeable) |

# 14 // TROUBLESHOOTING



## No Sound

Check volume knob (turn clockwise).
Verify battery charge: Hold F1 + F2 to check battery status.
Ensure not in DRUM mode (press F3 to change modes).
Check audio output connection.

## Buttons Not Responding

Check battery level: Hold F1 + F2 together to display battery voltage and percentage.
Ensure no function button is stuck/held.

## Looper Issues

Verify correct track selected (Joystick LEFT/RIGHT to switch between 6 tracks).
Check bar count setting (Joystick LEFT/RIGHT in WAITING state).
If looper seems silent, check if tracks are muted — enter MIXER mode to see mute states.
If playback is paused, press Joystick CLICK in MIXER mode or Joystick DOWN to resume.

## Display Frozen

Check battery level: Hold F1 + F2 to display battery status.
Power cycle unit.
Device may be in sleep mode (press any button).

STILL NEED HELP?
If you're experiencing issues not covered in this troubleshooting guide, or if the solutions above don't resolve your problem, our support team is here to help.
Contact Support: support@hichord.shop

# 15 // UPDATE FIRMWARE

HiChord firmware can be updated via USB-C using our web-based firmware updater. Updates add new features, sounds, and improvements.

Manual Update Mode: If the automatic updater doesn't work, you can manually enter Firmware Update (DFU) mode by holding F1 + F2 + F3 together for 5 seconds while the device is on. The screen will display "Entering DFU Mode".

IMPORTANT: If your HiChord is from Batch 1 (Kickstarter Launch Edition), make sure your HiChord is fully charged before updating firmware.

## BATCH 4+ FEATURES

Some features require the Batch 4 (Rev C) hardware revision with I2C buttons and built-in microphone:

- Vocoder (MIC mode) — uses built-in mic as modulation source.
- Tuner mode — chromatic tuner using mic input.
- Mic Sample recording — record custom samples from the mic.
- Slash chords — press two chord buttons simultaneously for slash chord voicings.
- Multi-button Mixer control — press 2+ buttons simultaneously to toggle mutes.

These features are marked with "Batch 4+" throughout this manual. If you're unsure which batch you have, contact support@hichord.shop.

DOCUMENT END
HiChord // OPERATION MANUAL REV 2.7 BETA
Support: support@hichord.shop

# HiChord // Manual

HiChord is a chord synthesizer with 7 Chord Buttons that play the chords naturally occurring in any musical key. Press any chord button and the chords always work together — no music theory required. Hold a chord button and move the joystick to modify the chord (major to minor, sus4, 7ths, extended chords, etc). Change keys instantly with F1 + LEFT/RIGHT. The sound engine combines digital oscillators, FM synthesis, and sample playback across 12 voices. Onboard effects include reverb, delay, chorus, flanger, and vocoder. The 6-track looper captures your progressions for live layering, with a built-in mixer for per-track mute and volume control.

HiChord Hardware Layout: OLED display (left), 8-direction joystick, 3 function buttons (F1 gray, F2 yellow, F3 red), and 7 Chord Buttons (1-7)

## NAVIGATION

QUICK NAVIGATION
00 // Quick Start
01 // Basic Operation → Inversions → Chord Lock → Octave Shifting → Changing Key → BPM (Tempo)
02 // Sound Selection
03 // Effects Menu → Reverb → Delay → Chorus → Flanger → Filter → Vocoder → Voice Lead
04 // Audio Output → MIDI Over USB → Connection Guide
05 // Mode Menu
06 // Mode Descriptions → ONESHOT → STRUM → LEAD → ARPEGGIO → DRONE → DRUMMODE → TUNER → MIC SAMPLE → MIXER
07 // Looper
08 // User Presets
09 // Advanced Controls
10 // Music Theory → Diatonic Chord System → Chord Types
11 // Synthesis Engine → Voice Architecture → Digital/FM/Sample → Signal Flow
12 // Button Reference
13 // Specifications
14 // Troubleshooting
15 // Update Firmware

HiChord // Manual Rev 2.7 BETA

# 00 // QUICK START

First Time Using HiChord?

1. Power on: Slide the red power button on top.
2. Adjust volume: Use the volume slider on top. For best sound quality, use headphones connected to the headphone jack.
3. Play a chord: Press any Chord Button 1-7. These represent scale degrees (I, ii, iii, IV, V, vi, vii°).
4. Try different sounds: Press F2 to enter Sounds menu, then LEFT/RIGHT to browse Sounds.
5. Add effects: Press F2, Joystick UP to enter Effects, use LEFT/RIGHT to find REVERB or DELAY, then UP to toggle ON/OFF.
6. Change key: Press F1, then Joystick LEFT/RIGHT to transpose.
7. Try modes: Hold F3, then press Chord Buttons 1-7 for quick mode select (ONESHOT, STRUM, LEAD, DRONE, ARPEGGIO, REPEAT, DRUMMODE).

Three Function Buttons:
F1 — Settings Menu (key, octave).
F2 — Effects & Sounds Menu (effects, waveforms).
F3 — Mode Selection & BPM (tempo, modes).

Advanced Tip: The Volume Knob can be combined with function buttons for precise sound shaping (Attack, Release, Filter). See the Advanced Controls section for details.

NEED HELP? Having trouble or have questions? Contact our support team at support@hichord.shop

# 01 // BASIC OPERATION



## Playing Chords

The 7 Chord Buttons trigger chords using the Diatonic Chord System. Each chord button represents a scale degree in the current key.

In major mode:
| CHORD BUTTON | DEGREE | DEFAULT CHORD TYPE | EXAMPLE (KEY OF C) |
|---|---|---|---|
| 1 | I | Major | C Major |
| 2 | ii | minor | D minor |
| 3 | iii | minor | E minor |
| 4 | IV | Major | F Major |
| 5 | V | Major | G Major |
| 6 | vi | minor | A minor |
| 7 | vii° | dim | B diminished |

## Modifying Chords with Joystick

How it works: Hold any Chord Button, then move the joystick in any direction to modify the chord quality in real-time. Release the joystick to return to the default chord.

Example: Hold Chord Button 1 (I chord, C Major), push joystick UP to toggle to C minor, or push RIGHT for C Maj7, or push DOWN for C sus4.

↖aug ↑Maj/min ↗dom7
←dim ●(base) →Maj7/m7
↙6/sus2 ↓sus4 ↘9

Note: Some modifications depend on base chord quality (major/minor)

### DEFAULT MODE (Basic Chord Modifications)

In DEFAULT mode, some modifications depend on the base chord type (major/minor/diminished):

| JOYSTICK | RESULT CHORD |
|---|---|
| UP | Major ↔ Minor |
| DOWN | → sus4 |
| LEFT | → dim / Minor |
| RIGHT | → Maj7 / min7 |
| UP+LEFT | → aug |
| UP+RIGHT | → dom7 |
| DOWN+LEFT | → Maj6 / sus2 |
| DOWN+RIGHT | → Maj9 / min9 |

### EXTENDED MODE (Advanced Extensions)

In EXTENDED mode, most directions produce fixed chord types regardless of base chord:

| JOYSTICK | RESULT CHORD |
|---|---|
| UP | Major ↔ Minor |
| DOWN | dom7♯9 |
| LEFT | sus4+7 |
| RIGHT | add11 |
| UP+LEFT | half-dim7 |
| UP+RIGHT | dom9 |
| DOWN+LEFT | add9 |
| DOWN+RIGHT | min11 |

### CHROMATIC MODE (Jazz Voicings)

CHROMATIC mode provides sophisticated jazz chords and chromatic pitch shifting:

| JOYSTICK | RESULT CHORD |
|---|---|
| UP | min(maj7) |
| DOWN | Maj13 |
| LEFT | half-dim7 |
| RIGHT | 6/9 |
| UP+LEFT | Maj7♯11 |
| UP+RIGHT | dom13 |
| DOWN+LEFT | dom7♭9 |
| DOWN+RIGHT | dom7alt |

CHROMATIC MODE BONUS: In addition to the jazz chords above, moving the joystick LEFT or RIGHT alone (without holding a chord button) shifts the key chromatically by ±1 semitone, allowing you to play chords outside the current scale.

### Switching Between Modes

To change joystick mode:
1. Press F2 to open Effects menu.
2. Navigate to JOYSTICK option (use Joystick LEFT/RIGHT).
3. Press Joystick DOWN to cycle: DEFAULT → EXTENDED → CHROMATIC → (back to DEFAULT).
4. Display shows current mode: "JOYSTICK DEFAULT", "JOYSTICK EXTEND", or "JOYSTICK CHROMATIC".

Pro Tip: DEFAULT mode covers all essential chord colors for most musical styles. EXTENDED mode adds sophisticated extensions like dom9, min11, and add9. CHROMATIC mode is designed for jazz players who need altered dominants, Lydian chords, and chromatic movement.

## Inversions

What are inversions? Inversions change which note is lowest in the chord voicing, creating smoother bass movement between chords.

Manual control: While holding any Chord Button, press F2 to cycle through inversions: Root Position (default) → 1st Inversion → 2nd Inversion → (repeat).

Automatic voice leading: Enable VOICE LEAD in the F2 Effects menu to have HiChord automatically select inversions for smooth voice leading between chords. This creates professional-sounding progressions with minimal melodic motion.

## Chord Lock (Make Modifications Permanent)

Purpose: Save a modified chord (like sus4 or Maj7) so the chord button always plays that variation.

To lock a chord:
1. Hold Chord Button (e.g., Chord Button 4).
2. Move joystick to desired modification (e.g., UP for sus4).
3. While still holding both, press F2
4. Display shows "LOCKED" — Chord Button 4 now always plays IV sus4.

To unlock: Repeat the same process (hold chord button + joystick direction + F2)

Cross-Key Chord Transfer: Chord Lock saves the exact chord structure, allowing you to transfer a chord from one key to another:
1. In your current key (e.g., C Major), build and lock a chord (e.g., Chord Button 4 with sus4 modification).
2. Change to a different key (e.g., F Major) using the joystick + F1.
3. The locked chord button (Button 4) now plays the same chord structure in the new key (F sus4 instead of C sus4).

This allows you to create consistent chord voicings across multiple keys without reconfiguring each time.

Example Use Case: Lock a Maj7 chord on Button 1 in C Major, then switch to G Major — Button 1 automatically becomes G Maj7 with the same voicing.

## Slash Chords (Two-Button Press)

BATCH 4+ HARDWARE REQUIRED
Slash chords require the Batch 4 (Rev C) I2C button hardware, which can detect multiple simultaneous button presses.

What are slash chords? A slash chord is a chord played over a specific bass note. For example, C/G means "C Major chord with G as the bass note." They create smoother bass lines and richer harmonic movement.

How to play slash chords:
1. Hold one Chord Button — this becomes the bass note.
2. While still holding, press a second Chord Button — this becomes the chord.
3. The display shows the slash chord notation (e.g., "E minor/C").
4. Release either button to return to a single chord.

Example: In the key of C, hold Chord Button 1 (C), then press Chord Button 3 (E minor) → plays E minor/C (E minor chord with C in the bass).

Works in: ONESHOT, STRUM, DRONE, ARPEGGIO, and REPEAT modes.

## Octave Shifting



### Per-Button Octave

Purpose: Raise or lower the pitch range of individual Chord Buttons for more voicing flexibility.
Octave DOWN: Hold Chord Button, then press F1
Octave UP: Hold Chord Button, then press F3
Range: -2 octaves → -1 octave → Normal → +1 octave.
Each chord button remembers its octave setting independently.

### Global Octave (All Chord Buttons)

Purpose: Shift the pitch range of all Chord Buttons simultaneously.
Operation: Press F1 to open KEY + OCTAVE menu. Use Joystick UP/DOWN to adjust global octave.
Range: -1 octave → +0 (normal) → +1 octave → +2 octaves.
Also in F1 menu: Use Joystick LEFT/RIGHT to change key (transpose all chords)
The F1 menu closes automatically after 5 seconds of inactivity, or press F1 again to close immediately.

Global vs Per-Button: Global octave shifts apply to all chord buttons at once, while per-chord-button shifts allow you to create custom voicings where different Chord Buttons play in different octave ranges.

## Changing Key

How to change key: Press F1 to open KEY + OCTAVE menu, then use Joystick LEFT/RIGHT to select a new key.
Available keys: C, C#, D, D#, E, F, F#, G, G#, A, A#, B (all 12 chromatic keys)
All Chord Buttons transpose to the new key, maintaining Diatonic Chord System relationships.
The current key is always displayed on screen.

## BPM (Tempo)

How to change BPM: Press F3 → Joystick UP to enter BPM submenu → Joystick LEFT/RIGHT to adjust (60-190 BPM)
Tap Tempo: Tap F3 three times in rhythm to set BPM automatically.
What it affects: All rhythm rates, delays, arpeggios, drum loops, sequencer, and metronome sync to the current BPM.

# 02 // SOUND SELECTION

HiChord offers multiple synthesis engines: analog waveforms, FM synthesis, sample playback, and hybrid presets. Choose sounds that fit your musical style.

## Method 1: Quick Select (Fastest)

Hold F2 first, then press a Chord Button for instant sound selection:

| F2 + BUTTON | WAVEFORM | TYPE |
|---|---|---|
| 1 | SAW | Analog |
| 2 | SINE | Analog |
| 3 | FM_EPIANO | FM Synthesis |
| 4 | FM_HX7 | FM Synthesis |
| 5 | STRINGS | Sample |
| 6 | CLARINET | Sample |
| 7 | FM_BELL | FM Synthesis |

## Method 2: Browse All Sounds

Press F2 to enter Sounds menu.
Use Joystick LEFT/RIGHT to browse all available Sounds.
Display shows Sound name and animated waveform preview.
Press Joystick DOWN to exit.

## All Available Waveforms



### Analog Waveforms

SINE — Pure fundamental tone.
SAW — Bright, harmonically rich.
TRIANGLE — Soft, mellow.
SQUARE — Hollow, 8-bit character.

### FM Synthesis

FM_EPIANO — Electric piano (Rhodes-style).
FM_HX7 — DX7-style digital synthesis.
FM_BELL — Bell tones.
FM_ORGAN — Organ tones.
FM_BRASS — Brass section.

### Sample Playback

SAMPLE_STRINGS — Orchestral strings.
SAMPLE_CLARINET — Woodwind clarinet.
SAMPLE_CELLOS — Cello section.
SAMPLE_ACOUSTIC — Acoustic guitar.
SAMPLE_BRASS — Brass ensemble.
SAMPLE_PIANO_UPRIGHT — Upright piano.
SAMPLE_VIBRAPHONE — Vibraphone/marimba.
SAMPLE_VIOLINS — Violin section.
SAMPLE_VOX_AHH — Vocal "ahh" sounds.
SAMPLE_WURLI — Wurlitzer electric piano.
SAMPLE_HARP — Harp.
SAMPLE_VIOLA — Viola.
SAMPLE_HUMMING — Human humming.
SAMPLE_FLUTE — Flute.
SAMPLE_ROBBO — Synth bass.
SAMPLE_SHUTTER — Percussive shutter.
SAMPLE_USER — Custom user sample (uploaded via Companion App).
SAMPLE_MIC — Record your own sample from the microphone. (Batch 4+ only)

### Hybrid Presets

SAWSQUARE — Layered saw + square waves.
JUNO_POLY — Juno-106 style polysynth pad.
OCEAN_PAD — Ambient soundscape (noise + FM).
WOBBLE_BASS — LFO-modulated bass sound.

# 03 // EFFECTS MENU



## Accessing Effects

Press F2 to enter Sounds menu (base menu shows waveforms).
Press Joystick UP to enter Effects submenu.
Use Joystick LEFT/RIGHT to cycle through Effects.
Display shows Effect name with animated icon and current status in the top bar.
Use Joystick UP to adjust/toggle the selected Effect.
Press Joystick DOWN to return to Sounds menu, then DOWN again to exit completely.

NEW in 2.7: Effects Menu Redesign
The F2 menu structure has been redesigned. Pressing F2 now opens the Sounds menu first (showing waveforms with animated icons), then Joystick UP takes you to the Effects submenu. This two-level design separates sound selection from effect adjustment, making navigation more intuitive. Effects are now toggled with Joystick UP (not DOWN), and the display shows animated icons with status indicators.

## REVERB

To use: Press F2 → Joystick UP → Navigate to REVERB → Joystick UP toggles ON/OFF.
Stereo reverb processor with 65-75% feedback for spacious ambience. Creates room/hall simulation with independent left/right processing.

## GLIDE

To use: Press F2 → Joystick UP → Navigate to GLIDE → Joystick UP toggles ON/OFF.
Portamento effect — smooth pitch glide between notes. When enabled, oscillator frequencies slide from previous note to new note instead of jumping instantly.

## DELAY

To use: Press F2 → Joystick UP → Navigate to DELAY → Joystick UP cycles through rates.
Stereo delay line (max ~1 second) with tempo synchronization. Automatically adjusts delay time to match BPM setting.
Available rates: OFF, 1/4 (quarter note), 1/8 (eighth note), 1/16 (sixteenth note), 1/16T (triplets), 1/32 (thirty-second note).

## TREMOLO

To use: Press F2 → Joystick UP → Navigate to TREMOLO → Joystick UP cycles through rates.
Amplitude modulation. Depth is preset. Rates are the same divisions as DELAY (OFF, 1/4, 1/8, 1/16, 1/16T, 1/32).

## STEREO

To use: Press F2 → Joystick UP → Navigate to STEREO → Joystick UP toggles ON (wide) / OFF (mono).
Stereo width control. When ON, oscillators are panned across stereo field with layered voices detuned and panned opposite for width. When OFF, all voices sum to mono center.

## VOICE

To use: Press F2 → Joystick UP → Navigate to VOICE → Joystick UP cycles through voice counts.
Voice count/polyphony control. Available options: VOICE1 (mono), VOICE2 (2 voices), VOICE4 (4 voices), VOICE8 (8 voices - full polyphony).

## ADSR

To use: Press F2 → Joystick UP → Navigate to ADSR → Joystick UP cycles through presets.
Envelope shape presets. Available presets: LONG — Slow attack/release, SHORT — Fast attack/release, SWELL — Slow attack, sustained, PLUCK — Percussive, short decay, TOUCH — Medium attack, expressive, SUSTAIN — Full sustain, long release.

## BASS

To use: Press F2 → Joystick UP → Navigate to BASS → Joystick UP cycles through modes.
Sub-bass oscillator control. Available modes: OFF — No bass, ROOT — Bass plays root note, SLASH — Custom bass note (slash chord).

## FILTER

To use: Press F2 → Joystick UP → Navigate to FILTER → Joystick UP toggles ON/OFF.
To adjust cutoff: Hold F3 and move Volume Knob (filter mode engages automatically, then Joystick UP/DOWN also adjusts cutoff).
State variable lowpass filter with adjustable cutoff frequency (20Hz-20kHz). Smoothly attenuates frequencies above cutoff point.

## FLANGER

To use: Press F2 → Joystick UP → Navigate to FLANGER → Joystick UP toggles ON/OFF.
LFO-modulated delay line creating classic jet-plane sweeping effect. Uses stereo processing with configurable feedback, depth, and modulation rate.

## VOCODER

To use: Press F2 → Joystick UP → Navigate to VOCODER → Joystick UP cycles through modes.
Real-time vocoder effect that uses your voice (or a looper track) to shape the synth sound. Works in any playing mode — play chords while singing into the mic and hear your voice mapped across the chord harmonics.

BATCH 4+ HARDWARE REQUIRED — Vocoder MIC mode requires the Batch 4 (Rev C) hardware with built-in microphone. LOOP mode works on all hardware versions.

Available modes (cycle with Joystick UP):
- OFF — Vocoder disabled.
- MIC — Live microphone input modulates your synth sound. Speak, sing, or make sounds into the built-in mic while holding chords. The vocoder maps your voice's frequency content across the chord notes. (Batch 4+ only)
- LOOP — Track 1's looper audio modulates your synth sound. Record a vocal or audio loop first, then play chords over it with vocoder processing. Works on all hardware.

How it works:
1. Navigate to VOCODER in the Effects menu and set to MIC or LOOP.
2. Play a chord — the synth sound is now modulated by the input source.
3. For MIC mode: speak or sing into the mic while holding chords. The internal speaker turns off automatically to prevent feedback — use headphones or an external speaker.
4. For LOOP mode: record audio to Track 1 first, then play chords with vocoder applied.

Advanced parameters (adjustable via Companion App): Wet/dry mix, input gain, output gain, Formant shift (-12 to +12 semitones), Band Q (wide to narrow), Attack/release timing, Noise level, Gate.

## MIDI

To use: Press F2 → Joystick UP → Navigate to MIDI → Joystick UP toggles ON/OFF.
MIDI output toggle. Enables/disables MIDI note output via USB-C. See MIDI Over USB-C section for full technical details.

## CHORUS

To use: Press F2 → Joystick UP → Navigate to CHORUS → Joystick UP toggles ON/OFF.
Stereo chorus with 0.5Hz LFO modulation, creating rich detuned doubling effect. Left/right channels use slightly different LFO frequencies (0.5Hz vs 0.52Hz) for natural stereo width. Famous Juno-style chorus sound.

## SCALE

To use: Press F2 → Joystick UP → Navigate to SCALE → Joystick UP cycles through scales.
Scale selector. Each scale changes the chord qualities for all 7 chord buttons to match that scale's harmonic structure.

Available Scales:
- MAJOR — Standard major scale (I, ii, iii, IV, V, vi, vii°).
- NATURAL MINOR — Natural minor scale (i, ii°, III, iv, v, VI, VII).
- HARMONIC MINOR — Minor with raised 7th (i, ii°, III+, iv, V, VI, vii°).
- MELODIC MINOR — Ascending melodic minor (i, ii, III+, IV, V, vi°, vii°).
- MAJOR PENTATONIC — 5-note major scale with sus chords.
- MINOR PENTATONIC — 5-note minor scale with sus chords.
- BLUES — Blues scale with characteristic ♭3, ♭5, ♭7.
- DORIAN — Minor with major 6th (jazz/modal sound).
- MIXOLYDIAN — Major with ♭7 (rock/blues sound).
- LYDIAN — Major with #4 (bright, dreamy sound).

Pro Tip: Harmonic Minor and Melodic Minor are essential for classical and jazz. Dorian, Mixolydian, and Lydian are modes commonly used in jazz, rock, and film scoring. Blues scale is perfect for blues and rock progressions.

## VOICE LEAD

To use: Press F2 → Joystick UP → Navigate to VOICE LEAD → Joystick UP toggles ON/OFF.
Voice leading mode. When ON, HiChord automatically selects inversions to minimize melodic motion between chord changes. The system intelligently chooses root position, 1st inversion, or 2nd inversion for each chord to create smooth voice leading.

## JOYSTICK

To use: Press F2 → Joystick UP → Navigate to JOYSTICK → Joystick UP cycles through modes.
Displays current joystick chord modification mode (DEFAULT, EXTENDED, or CHROMATIC). See Basic Operation section for full chord modification table.

## USB_MODE

To use: Press F2 → Joystick UP → Navigate to USB_MODE → Joystick UP toggles between AUDIO and MIDI modes.
USB-C mode selector. Displays current USB configuration:
- AUDIO — USB-C sends audio to computer (class-compliant, no drivers needed).
- MIDI — USB-C sends MIDI note data.
Device will briefly disconnect and reconnect to your computer when switching modes.

## Randomize Functions

HiChord includes three randomization features for creative sound design, all triggered via Joystick CLICK:

Random Sound (Waveform Only):
Press F2 to enter Effects menu. Press Joystick CLICK (center press). Displays "Random Sound" with dice animation. Generates a random waveform from all available sounds (analog, FM, samples, hybrids). Keeps all current effects and settings intact. Perfect for exploring new timbres.

Random All (Complete Preset):
Press F1 to enter Settings menu. Press Joystick CLICK (center press). Displays "Random All" with dice animation. Generates completely random preset: waveform, effects, arpeggio pattern, rhythm rate, key, BPM, inversions. Great for happy accidents and inspiration.

Random Pattern (Arpeggio/Sequencer Only):
Press F3 to enter Mode menu. Press Joystick CLICK (center press). Displays "Random Pattern" with dice animation. Generates new random arpeggio pattern AND sequencer pattern. Keeps current waveform and effects. Automatically sets arpeggio to RANDOM pattern mode.

# 04 // AUDIO OUTPUT OPTIONS

HiChord supports multiple audio output methods. You can use any or all of these simultaneously:

HiChord Hardware Layout: Top Panel — Power button (left), Volume/Control slider (center), Headphone/Line Out jack (right). Side Panel — USB-C port for audio, MIDI, and power.

## Built-in Speaker

Internal mono speaker for portable use. Automatically mutes when headphones are plugged in.

## Headphone Jack (3.5mm)

Stereo headphone output. Plugging in headphones automatically disables the internal speaker.

## Line Out / Aux Cable

Use the headphone jack to connect to any external speaker, mixer, or audio interface using a standard 3.5mm aux cable. Output level is controlled by the Volume Knob.

## USB-C Audio

High-quality digital audio over USB-C (class-compliant, no drivers needed):
Connect HiChord to your computer via USB-C. HiChord appears as an audio interface. Record directly into your DAW (Ableton, Logic, etc.). Zero-latency digital quality. Stereo output.

## MIDI Over USB-C

Send MIDI note data to your computer:
1. Enable MIDI in F2 menu (navigate to MIDI in Effects submenu, press Joystick UP to toggle ON).
2. Connect to computer via USB-C.
3. HiChord sends MIDI notes for all chord buttons and modifications.
4. Use with software synths, samplers, or for recording MIDI.

MIDI Technical Specifications:
- MIDI Channel: Channel 1 (all note and CC messages)
- Note Output Velocity: Fixed at 100 (out of 127)
- Note On: MIDI message 0x9
- Note Off: MIDI message 0x8
- Tracks up to 12 simultaneous notes

## Connecting to External Synths & DAWs

HiChord can send audio or MIDI to external gear and software via USB-C. The USB port operates in one mode at a time — either Audio or MIDI — switchable from the Effects menu.

### USB Audio to DAW (Record HiChord's Sound)

Use this when you want to record HiChord's built-in sounds directly into your computer.
1. Connect HiChord to your computer via USB-C.
2. Ensure USB mode is set to AUDIO (check in F2 → Effects → USB_MODE). This is the default mode.
3. In your DAW (Ableton, Logic, GarageBand, FL Studio, etc.), go to Audio Preferences and select HiChord as an input device.
4. Create a new audio track and set its input to HiChord.
5. Arm the track for recording — you should see the level meter respond when you play chords.
6. Hit record and play.

HiChord's stereo audio streams directly into your DAW at 48kHz. No drivers needed: HiChord is a class-compliant USB audio device. It works out of the box on macOS, Windows, iOS, and Android.

### USB MIDI to DAW / Software Synths (Control Other Sounds)

Use this when you want HiChord's chord buttons to control software synths in your DAW.
1. Connect HiChord to your computer via USB-C.
2. Switch USB mode to MIDI (in F2 → Effects → USB_MODE → Joystick UP to toggle). HiChord will briefly disconnect and reconnect.
3. Enable MIDI output on HiChord (in F2 → Effects → MIDI → Joystick UP to toggle ON).
4. In your DAW, HiChord appears as a MIDI input device.
5. Create a new MIDI/instrument track and set its input to HiChord.
6. Load any software synth (Serum, Vital, Diva, etc.) on that track.
7. Play chords on HiChord — the MIDI notes trigger your software synth.

Note: HiChord sends Note On/Off messages on Channel 1. All chord notes, inversions, and joystick modifications are sent as real MIDI notes, so you get full harmonic control over external synths.

IMPORTANT: USB Audio and USB MIDI cannot run at the same time. When in MIDI mode, HiChord does not send USB audio (use the 3.5mm headphone jack for audio monitoring instead). When in Audio mode, MIDI output is not available over USB.

### Analog Audio to External Speakers, Mixers, or Amps

The 3.5mm headphone jack doubles as a line output. Use this for live performance, connecting to external speakers, or recording into an audio interface.
1. Use a standard 3.5mm aux cable (or 3.5mm-to-1/4" adapter for mixers and amps).
2. Connect to any powered speaker, guitar amp (clean channel), mixer, or audio interface line input.
3. Adjust the Volume Knob on HiChord to set the output level.

Tip: For best recording quality, use USB Audio mode instead of the analog output. For live performance or when USB MIDI mode is active, the analog output is your audio path.

### Connecting to Hardware Synths & Drum Machines

HiChord is a USB device (like a keyboard), not a USB host (like a computer). To connect HiChord's MIDI output to hardware synths, you need a USB MIDI Host adapter — a small box that converts USB MIDI to traditional 5-pin DIN MIDI or 3.5mm TRS MIDI.

What you need: A USB MIDI Host adapter (e.g., Kenton USB MIDI Host, Retrokits RK-006, or similar). A standard MIDI cable (5-pin DIN or 3.5mm TRS depending on your synth).

Setup:
1. Set HiChord to MIDI USB mode and enable MIDI output.
2. Connect HiChord's USB-C to the USB MIDI Host adapter.
3. Connect the adapter's MIDI OUT to your synth's MIDI IN.
4. Set your synth to receive on MIDI Channel 1.
5. Play chords on HiChord — your hardware synth plays the notes.

Note: You cannot connect HiChord directly to another synth via USB — both are USB devices and need a host (computer or USB MIDI Host adapter) in between.

### Mobile Devices (iOS / Android)

HiChord works with phones and tablets that support USB audio or MIDI:
- iOS (Lightning): Use Apple's Lightning-to-USB Camera Adapter, then a USB-A to USB-C cable to HiChord.
- iOS (USB-C iPad/iPhone): Connect directly with a USB-C cable.
- Android: Connect directly with USB-C (device must support USB OTG).

HiChord appears as a class-compliant device in GarageBand, AUM, Koala Sampler, BandLab, and other music apps. Set USB mode to Audio or MIDI depending on your use case.

# 05 // MODE MENU

HiChord has multiple playing modes. There are two ways to change modes:

## Method 1: Mode Menu (Full Access)

This method gives you access to all modes and allows you to adjust mode-specific settings:
1. Press F3 to open Mode menu (base menu shows current mode with animated icon).
2. Use Joystick LEFT/RIGHT to cycle through all available modes.
3. Display shows mode name with animated preview icon.
4. Mode changes take effect immediately as you navigate.
5. Press Joystick UP to enter BPM submenu (shows tempo, adjustable with LEFT/RIGHT).
6. Press Joystick DOWN to return to Mode menu, then F3 again to exit completely.

NEW in 2.7: Mode Menu Redesign — The F3 menu structure has been redesigned. Pressing F3 now opens the Mode Selection menu first (showing modes with animated icons), then Joystick UP takes you to the BPM submenu. This two-level design separates mode selection from tempo adjustment. Mode-specific parameters (strum speed, rhythm rates, difficulty) are now adjusted with Joystick DOWN in the base Mode menu, making them more accessible.

Note: The F3 Mode menu has two levels: base menu (Mode Selection with LEFT/RIGHT) and submenu (BPM with UP). Press DOWN to navigate back.

Adjusting mode-specific parameters:
- STRUM: In STRUM mode, press F3 → use DOWN to cycle strum speeds (SLOW/MEDIUM/FAST).
- ARPEGGIO/REPEAT/DRUMLOOP/SEQUENCER: In these modes, press F3 → use DOWN to cycle rhythm rates (1/1, 1/2, 1/4, 1/8, 1/16, 1/16T, 1/32).
- EARTRAINER: In EARTRAINER mode, press F3 → use DOWN to cycle difficulty levels.

All modes accessible via Mode menu: ONESHOT, STRUM, LEAD, DRONE, ARPEGGIO, REPEAT, DRUMMODE, DRUMLOOPMODE, SEQUENCER, CHORDHIRO, EARTRAINER, TUNER, MIC SAMPLE, MIXER

Note: AUTODRUM is not a selectable mode — it automatically activates when you press a Chord Button + move joystick while in DRUMMODE. TUNER and MIC SAMPLE require Batch 4+ hardware. MIXER only appears when the looper has active tracks.

## Method 2: Quick Mode Select (7 Most Common Modes)

Fastest method for the 7 most-used modes:
Hold F3, then press a Chord Button for instant mode switching:

| F3 + BUTTON | MODE |
|---|---|
| 1 | ONESHOT |
| 2 | STRUM |
| 3 | LEAD |
| 4 | DRONE |
| 5 | ARPEGGIO |
| 6 | REPEAT |
| 7 | DRUMMODE |

Note: Quick Mode Select only accesses 7 modes. To access DRUMLOOPMODE, SEQUENCER, CHORDHIRO or EARTRAINER, use Method 1 (Mode Menu with F3 → LEFT/RIGHT).

# 06 // MODE DESCRIPTIONS



## ONESHOT

Function: Standard polyphonic chord triggering with ADSR envelope.
Quick Select: F3 + Chord Button 1
Operation: Hold Chord Button → chord plays → release → envelope releases

## STRUM

Function: Guitar strumming simulation.
Quick Select: F3 + Chord Button 2
Operation: Hold Chord Button → notes trigger sequentially with timing delay
Strum Speed: Press F3 to enter Mode menu, then use Joystick DOWN to cycle through speeds
- SLOW (200ms between notes)
- MEDIUM (80ms)
- FAST (40ms)

## LEAD

Function: Monophonic single-note mode for melodies.
Quick Select: F3 + Chord Button 3
Operation: Only plays root note of each Chord Button. New notes cut off previous notes.
Display: Shows note names (C, D, E...) instead of chord names

## DRONE

Function: Infinite sustain mode.
Quick Select: F3 + Chord Button 4
Operation: Hold Chord Button → sound continues indefinitely until another chord button is pressed

## ARPEGGIO

Function: Automatic arpeggiated patterns, tempo-synced.
Quick Select: F3 + Chord Button 5
Operation: Hold Chord Button → notes play in sequence automatically

Pattern Selection (F1 + Chord Buttons 1-5):
- Chord Button 1: UP (ascending)
- Chord Button 2: DOWN (descending)
- Chord Button 3: UP/DOWN (ascend then descend)
- Chord Button 4: RANDOM
- Chord Button 5: FINGERPICK

Chord Mode (F1 + Chord Buttons 6-7 cycles):
- ARP_ONLY — Just arpeggio
- CHORD+ARP — Sustained chord with arpeggio on top
- RHYTHM+ARP — Rhythmic chord stabs with arpeggio

Rhythm Rate: Press F3 to enter Mode menu, then use Joystick DOWN to cycle through rates (1/1 whole, 1/2 half, 1/4, 1/8, 1/16, 1/16T, 1/32)

## REPEAT

Function: Rhythmic gating/stuttering effect.
Quick Select: F3 + Chord Button 6
Operation: Chord repeats at selected rhythm rate (set via F3 + Joystick DOWN)
Rhythm Rates: 1/1 (whole note), 1/2 (half note), 1/4, 1/8, 1/16, 1/16T (triplet), 1/32 — synced to BPM

## DRUMMODE

Function: Manual drum triggering.
Quick Select: F3 + Chord Button 7
Operation: Each Chord Button triggers a different drum sound:
- Chord Button 1: Kick
- Chord Button 2: Snare
- Chord Button 3: Hi-hat
- Chord Button 4: Tom
- Chord Button 5: Bell/Ride
- Chord Button 6-7: Additional percussion

Drum Kits (F2 + Chord Buttons 1-6):
- Chord Button 1: TIGHTKIT (PCM samples, default)
- Chord Button 2: x0x BOX (deep sub bass)
- Chord Button 3: x9x BOX (punchy techno)
- Chord Button 4: LYNN KIT (warm vintage)
- Chord Button 5: KR-78 (lo-fi retro)
- Chord Button 6: TRAP BOX (modern sub)

## DRUMLOOPMODE

Function: Pre-programmed drum patterns with variations.
Access: F3 → Joystick UP → LEFT/RIGHT to select DRUMLOOPMODE
Operation: Chord Buttons 1-7 select and toggle patterns (0-6) on/off. Hold chord button + Joystick UP/DOWN to select variation (0-7). Joystick LEFT/RIGHT (no button held) to switch drum kits.

7 Patterns:
- Chord Button 1 (Pattern 0): ROCK
- Chord Button 2 (Pattern 1): DISCO
- Chord Button 3 (Pattern 2): REGGAE
- Chord Button 4 (Pattern 3): FUNK
- Chord Button 5 (Pattern 4): HIP-HOP
- Chord Button 6 (Pattern 5): ELECTRO
- Chord Button 7 (Pattern 6): JAZZ

8 Variations per pattern:
0: Original, 1: Ghost notes, 2: Busier hi-hats, 3: Syncopated kicks, 4: Fills every 4th bar, 5: Half-time, 6: Double-time, 7: Complex/jazz variation.

Drum loops persist across mode changes. You can start a drum loop, switch to ONESHOT or ARPEGGIO mode, and play chords over the drums.

## AUTODRUM

Function: Rhythm-controlled drum triggering mode (automatically activated from DRUMMODE).

How it works: In DRUMMODE, press any Chord Button (1-7) and move the joystick → automatically enters AUTODRUM. Release joystick → returns to DRUMMODE.

Rhythm Rate Control (while holding chord button + joystick):
- Joystick UP: 1/4 note
- Joystick RIGHT: 1/8 note
- Joystick DOWN: 1/16 note
- Joystick LEFT: 1/32 note
- Joystick UP-RIGHT: Swing 8th
- Joystick DOWN-RIGHT: Swing 16th
- Joystick DOWN-LEFT: 1/16 triplet
- Joystick UP-LEFT: Swing 8th

Note: AUTODRUM is not a standalone mode you select from the Mode menu. It's a temporary state that activates when you use DRUMMODE with joystick control, allowing you to set precise rhythm rates for drum triggers.

## SEQUENCER

Function: 16-step chord sequencer.
Access: F3 → Joystick UP → LEFT/RIGHT to select SEQUENCER

Recording:
1. Enter SEQUENCER mode (in RECORD by default).
2. Press Chord Buttons in desired order (up to 16 steps).
3. Display shows step count.

Playback: Joystick CLICK to start/stop playback. Syncs to BPM and current rhythm rate.

Editing: Joystick LEFT/RIGHT to navigate steps. Press Chord Button to change chord at current step.

Sequence Length:
- Expand: Joystick DOWN jumps forward 4 steps and auto-expands the sequence (up to 16 steps).
- Shrink: Joystick UP jumps back 4 steps.
- Trim: Hold Joystick Click + UP for 1 second to trim trailing empty steps.
- Steps also auto-expand when you press a Chord Button past the current sequence length.

## CHORDHIRO

Function: Rhythm game for learning chord progressions (Guitar Hero style).
Access: F3 → Joystick UP → LEFT/RIGHT to select CHORDHIRO

Operation:
1. Press F2 to select song.
2. Joystick UP/DOWN browses songs.
3. Click to confirm.
4. Press F3 to start countdown.
5. Play chords when notes reach hit zone.

Scoring: PERFECT (±50ms on EXPERT), GREAT, OK, MISS.

Difficulty Levels:
- EASY: ±200ms timing window
- MEDIUM: ±150ms
- HARD: ±100ms
- EXPERT: ±50ms

## EARTRAINER

Function: Train ear to recognize chords.
Access: F3 → Joystick UP → LEFT/RIGHT to select EARTRAINER

Operation: HiChord plays root note, then a chord. Press Chord Button (1-7) to guess. Immediate feedback (correct/incorrect).

Difficulty (Joystick UP/DOWN changes level):
- BASIC: Simple triads
- EXTENDED: Includes 7ths, sus, aug, dim
- PROGRESSION: 2-4 chord progressions
- PROG+EXTENDED: Complex progressions

Controls during training: F1 replays root note (hint).
Note: After an incorrect guess, HiChord automatically replays the chord for learning.

## TUNER

BATCH 4+ HARDWARE REQUIRED — Tuner mode requires the Batch 4 (Rev C) hardware with built-in microphone input.

Function: Chromatic tuner for tuning instruments or checking pitch.
Access: F3 → Joystick LEFT/RIGHT to select TUNER

Operation:
1. Enter TUNER mode from the Mode menu.
2. Play or sing a note near the built-in microphone.
3. The display shows the detected note name (C, C#, D, etc.) in large text.
4. A tuning bar at the bottom shows how sharp (#) or flat (b) the note is.
5. A sliding triangle marker moves left (flat) or right (sharp) along the bar.
6. When the note is in tune (within ±5 cents), the note name displays inverted (white on black) as confirmation.

Use case: Tune a guitar, ukulele, or any instrument to play along with HiChord in the same key.

## MIC SAMPLE

BATCH 4+ HARDWARE REQUIRED — Mic Sample mode requires the Batch 4 (Rev C) hardware with built-in microphone input.

Function: Record a custom sample from the microphone and use it as a waveform.
Access: F3 → Joystick LEFT/RIGHT to select MIC

Recording:
1. Enter MIC SAMPLE mode — display shows "MIC SAMPLE" with instructions.
2. Hold Chord Button 1 to start recording.
3. Recording lasts as long as you hold the button (up to ~3 seconds).
4. Sing, speak, or make a sound into the microphone while holding the button.
5. Release Chord Button 1 to stop recording.
6. HiChord automatically analyzes the pitch, tunes it to C, and loads it as a playable waveform.

## MIC SAMPLE Recording Process

Recording: RECORDING text with elapsed time (e.g., "1.2 sec"). Progress bar showing recording duration (max 3 seconds). Level meter showing audio input volume. After recording: HiChord shows "Saving..." then "Tuning..." as it processes the sample. The sample is auto-pitched to C so it plays in tune across all chord buttons. Switch to any playing mode (ONESHOT, ARPEGGIO, etc.) and your recorded sample is now the active waveform. Play chords — your voice or sound is pitched across the chord notes. Adjusting mic gain: Use the Volume Knob while in MIC SAMPLE mode to adjust the microphone input level before recording. Important: Mic samples are stored in volatile memory and will be lost when HiChord is powered off. This is by design to keep things simple — record, play, experiment. If you want to keep a sample permanently, use the Companion App to upload samples to flash storage.

## MIXER Function

Control the 6-track looper — mute, unmute, solo, and adjust volume for each track. Access: F3 → Joystick LEFT/RIGHT to select MIXER (only appears when the looper has active tracks). Display: Shows all 6 tracks plus a metronome column. Each track displays a number (1-6) with a volume bar below it. Muted tracks show corner dots instead of a volume bar. The title bar shows "MIXER" (or "STOPPED" when paused).

### MIXER Controls

Press a Chord Button (1-6): Toggle mute/unmute for that track. Hold a Chord Button + move Volume Knob: Adjust volume for that track. The volume bar updates in real-time. Chord Button 7: Toggle the metronome on/off. Hold a Chord Button + press F2: Solo that track (mutes all others). Press again to un-solo. Joystick Click: Pause/resume all loop playback. When resumed, all tracks restart in sync. Press 2+ Chord Buttons simultaneously: Toggle mute on all pressed tracks at once. (Batch 4+ only) Auto-exit: If all looper tracks are cleared, MIXER mode automatically exits back to ONESHOT mode.

# LOOPER

IMPORTANT: The looper is controlled entirely by the JOYSTICK. No function buttons are needed! Capacity: 6 independent tracks (~20 seconds each). Tracks are organized in 3 pages of 2 tracks each, shown as different shapes on screen: circles (tracks 1-2), squares (tracks 3-4), and triangles (tracks 5-6).

## Getting Started with the Looper

The looper is always available and ready to use. To start recording: Press Joystick CLICK to activate the looper → enters WAITING state. In WAITING state, optionally adjust bar count (0-8) using Joystick LEFT/RIGHT. Press Joystick CLICK again to start recording. The looper cycles through states: OFF → WAITING → RECORD → LOOP → OFF.

## Mode Compatibility

Looper works in all modes EXCEPT SEQUENCER: ONESHOT, STRUM, LEAD, DRONE, ARPEGGIO, REPEAT — Record chords and melodies. DRUMMODE, DRUMLOOPMODE, AUTODRUM — Record drum performances. CHORDHIRO, EARTRAINER — Record practice sessions. Note: SEQUENCER mode has built-in recording, so the looper is disabled. However, when you leave SEQUENCER mode while a sequence is playing, it automatically bounces to an available looper track.

## Track Selection

Non-drum modes: Joystick LEFT/RIGHT to cycle through tracks (1 → 2 → 3 → 4 → 5 → 6). Drum modes: Joystick UP/DOWN to cycle through tracks. The display shows which track page you're on using shapes: circles for tracks 1-2, squares for 3-4, triangles for 5-6. The selected track is highlighted with a filled shape, and tracks with active recordings show as filled shapes.

## Recording Track 1 (First Track)

Start: Press Joystick CLICK → cycles OFF → WAITING. Adjust bars (optional): In WAITING state, Joystick LEFT/RIGHT sets bar count. 0 = Free mode (no bar limit). 1-8 = Fixed bars (recording stops automatically). Begin recording: Press Joystick CLICK again. Free mode: Recording starts immediately. Bar mode: Pre-roll metronome counts in 4 beats first. Record: Play chords or drums. Stop: Press Joystick CLICK (or auto-stops at bar count). Playback: Loop plays automatically.

## Recording Additional Tracks (Tracks 2-6 / Overdubbing)

Prerequisite: Track 1 must be looping first. Switch tracks: Joystick LEFT/RIGHT (or UP/DOWN in drum modes) to select any empty track. Start: Press Joystick CLICK → cycles OFF → WAITING. Begin recording: Press Joystick CLICK again. Recording syncs automatically to Track 1's loop start. The display shows a beat countdown. Length matches Track 1 (bar count not adjustable for secondary tracks). Record: Play additional chords, melodies, or drums. Stop/Loop: Press Joystick CLICK to cycle RECORD → LOOP → OFF. Repeat: Switch to the next empty track and record another layer. Build up to 6 layers. Tip: Use the MIXER mode to control your layers after recording — mute/unmute tracks, adjust individual volumes, solo a track, or pause everything.

## Stopping and Clearing

Clear a track: Press Joystick CLICK repeatedly until reaching OFF state. Clear all: When Track 1 goes OFF, all other tracks are automatically cleared too. Pause all playback: Press Joystick DOWN in any mode, or use Joystick CLICK in MIXER mode, to pause/resume all looper tracks simultaneously.

## Metronome

Metronome is enabled by default during looper recording. Provides audible click track during recording (tempo from BPM setting).

## Automatic Sequencer Bouncing

Special feature: When you leave SEQUENCER mode while a sequence is playing, HiChord automatically bounces it to the looper! How it works: In SEQUENCER mode, record your chord progression. Press Joystick CLICK to start playback. While playing, press F3 and switch to another mode (ONESHOT, ARPEGGIO, etc.). HiChord automatically captures the full sequence pattern to an available looper track. Sequence now plays from the looper, freeing you to play live chords or melodies over it. Requirements: At least one looper track must be empty (OFF state). Sequence must be playing when you change modes. Bounce captures the entire sequence length.

## Automatic Drum Loop Bouncing

Special feature: When you leave DRUMLOOPMODE while a drum loop is playing, HiChord automatically bounces it to the looper! How it works: Start a drum loop in DRUMLOOPMODE (Joystick UP/DOWN and LEFT/RIGHT to select pattern). Press F3 to enter Mode menu. Switch to any other mode (ONESHOT, STRUM, ARPEGGIO, etc.). HiChord automatically captures the full 16-step drum pattern to an available looper track. Drum loop now plays from the looper, freeing you to play chords over it. You can record additional tracks for overdubbing (up to 6 total layers). Why this is useful: This lets you quickly build layered productions - start with drums in DRUMLOOPMODE, switch modes to capture them, then layer chords and melodies on top using the looper's second track! Requirements: At least one looper track must be empty (OFF state). Drum loop must be playing when you change modes. Bounce happens automatically at the loop boundary (step 0).

# USER PRESETS

Save your own custom sound configurations to 4 user preset slots. These are separate from the built-in hybrid presets (JUNO_POLY, OCEAN_PAD, etc.) and allow you to store your exact settings. Capacity: 4 user preset slots (P1, P2, P3, P4).

## Saving Preset

Configure desired sound (waveform, effects, ADSR, etc.). Press F2 + F3 simultaneously. Display shows Preset menu with P1-P4 slots. Joystick LEFT/RIGHT: Select slot (P1, P2, P3, or P4). Joystick UP to save to selected slot. Display shows "SAVED PRESET 1" (or 2, 3, 4) confirmation.

## Loading Preset

Press F2 + F3. Joystick LEFT/RIGHT: Select slot (P1, P2, P3, or P4). Joystick DOWN to load selected slot. Display shows "LOADED PRESET 1" (or 2, 3, 4) confirmation. All settings restored instantly. Menu Navigation: LEFT/RIGHT selects which preset slot (P1-P4), UP saves to that slot, DOWN loads from that slot. Slots marked with * have saved presets.

## What Gets Saved

Current waveform. All effect states (on/off). Effect parameters. ADSR preset. Arpeggio pattern and mode. Key shift. Glide setting. Inversions per chord button. Octave shifts per chord button. Mode state. Custom ADSR times (if set). Random waveform configuration (if using RANDOM). Chorus, flanger, and FM synthesis parameters. Bass mode and detune amount. Drum loop selection and variation. Arpeggio pattern type. Sequencer chord sequence (up to 16 steps). Filter settings (lowpass and highpass). User samples: Custom samples uploaded via USB are saved to flash memory with your preset.

# ADVANCED CONTROLS



## Custom Envelope Shaping

Attack Time: Hold F1 + turn Volume Knob. Range: 1-2000ms. Only works when no chord is playing. Overrides ADSR preset. Display shows current attack value. Release Time: Hold F2 + turn Volume Knob. Range: 1-5000ms. Only works when no chord is playing. Overrides ADSR preset. Display shows current release value.

## Custom Filter Cutoff

Fine Control: Hold F3 + turn Volume Knob. Range: 20Hz-20kHz (full audio spectrum). Precise frequency adjustment. Display shows current cutoff frequency.

## Battery Status

Hold F1 + F2: Display shows battery voltage and percentage.

## Factory Reset

Hold F1 + F3: Clear and reset all settings to factory defaults. WARNING: This will reset all custom settings including: Key and octave settings. Current waveform/sound selection. All effect settings (reverb, delay, filter, etc.). BPM and tempo settings. Current mode selection. Note: User presets and looper recordings are NOT affected by factory reset.

## Companion App

Connect HiChord to your computer via USB to access the web-based Companion App. This powerful tool allows you to: Manage Presets: Save, load, and organize your custom presets. Design Sounds: Deep dive into the synthesis engine with visual controls for all 12 oscillators. Configure FM/Analog/Sample: Select engines and waveforms for each voice. Upload Custom Samples: Transfer your own audio samples to HiChord via USB. Design Arpeggio Patterns: Create custom arpeggio patterns and send them to the device. Vocoder Controls: Fine-tune all vocoder parameters (formant shift, band Q, attack/release, noise, gate). Full State Sync: Every parameter change on the device is reflected in the app and vice versa. Update Firmware: Easily flash the latest features to your device. Access the app at: app.hichord.shop

## HiChord Tabs

Learn any song on HiChord with our Song Tab Generator. Enter a song name and get: Button Numbers: Which chord buttons (1-7) to press for each chord. Joystick Directions: When to modify chords with the joystick. Key Setup: What key to set your HiChord to. Chord Progressions: Roman numeral analysis and pattern recognition. Similar Songs: Discover other songs with the same progression. Access the app at: tabs.hichord.shop

# MUSIC THEORY REFERENCE

This section explains the music theory behind HiChord's chord system. Beginners can skip this and return later!

## Understanding the Diatonic Chord System

HiChord uses the Diatonic Chord System (also known as the Nashville Number System), a method of transcribing music by denoting chords according to the scale degree of their root note, rather than by chord name. This system allows musicians to transpose songs instantly to any key. How It Works: In any major key, there are 7 notes in the scale. Each note becomes the root of a chord, numbered 1 through 7. The system uses Roman numerals to indicate the scale degree and chord quality:

Button 1 — Scale Degree I (Tonic) — Major — Home chord, stable, resolves tension — Example in C Major: C Major (C-E-G)
Button 2 — Scale Degree ii (Supertonic) — minor — Pre-dominant, leads to V or IV — Example: D minor (D-F-A)
Button 3 — Scale Degree iii (Mediant) — minor — Tonic substitute, adds color — Example: E minor (E-G-B)
Button 4 — Scale Degree IV (Subdominant) — Major — Pre-dominant, creates movement — Example: F Major (F-A-C)
Button 5 — Scale Degree V (Dominant) — Major — Creates tension, wants to resolve to I — Example: G Major (G-B-D)
Button 6 — Scale Degree vi (Submediant) — minor — Tonic substitute, deceptive resolution — Example: A minor (A-C-E)
Button 7 — Scale Degree vii° (Leading Tone) — diminished — Creates strong pull to I, rarely used in pop — Example: B diminished (B-D-F)

Why This Matters: When you press F1 and transpose to a different key, the chord button numbers stay the same, but the actual chord notes change. Chord Button 1 always plays the I chord, Chord Button 5 always plays V, etc. This means you can learn a progression in one key and instantly play it in any other key.

## Common Progressions

I-V-vi-IV (Chord Buttons 1-5-6-4): "Axis of Awesome" progression — used in thousands of pop songs.
I-vi-IV-V (Chord Buttons 1-6-4-5): Classic '50s progression — "Stand By Me", doo-wop ballads.
ii-V-I (Chord Buttons 2-5-1): Jazz turnaround — fundamental to jazz harmony.
I-IV-V (Chord Buttons 1-4-5): Blues and rock foundation — 12-bar blues, rock 'n' roll.
vi-IV-I-V (Chord Buttons 6-4-1-5): Sensitive progression — emotional indie/alternative songs.

## Chord Type Reference

HiChord gives you instant access to 16+ chord types via joystick modifications. Here's what each chord type means and how it sounds:

### Basic Triads

MAJOR — Formula: Root + Major 3rd + Perfect 5th (Intervals: 4 semitones + 3 semitones). Character: Bright, happy, stable. The "default" chord sound in Western music. Example: C Major = C-E-G. Access: Default (no joystick modification).

MINOR — Formula: Root + Minor 3rd + Perfect 5th (Intervals: 3 semitones + 4 semitones). Character: Dark, sad, emotional. One semitone difference from major changes everything. Example: C minor = C-Eb-G. Access: Default for Chord Buttons 2, 3, 6 (ii, iii, vi) in major mode.

DIMINISHED — Formula: Root + Minor 3rd + Diminished 5th (Intervals: 3 semitones + 3 semitones). Character: Tense, unstable, dissonant. Creates strong pull to resolve. Example: C diminished = C-Eb-Gb. Access: Joystick LEFT, or default on Chord Button 7 (vii°).

AUGMENTED — Formula: Root + Major 3rd + Augmented 5th (Intervals: 4 semitones + 4 semitones). Character: Dreamy, floating, symmetrical. Every note is 4 semitones apart. Example: C augmented = C-E-G#. Access: Joystick UP+LEFT (DEFAULT mode).

### Suspended Chords

SUS4 — Formula: Root + Perfect 4th + Perfect 5th (replaces the 3rd with a 4th). Character: Open, unresolved, neither major nor minor. Creates anticipation. Example: Csus4 = C-F-G. Access: Joystick DOWN (DEFAULT mode). Usage: Often resolves to major or minor. Common in rock and folk.

SUS2 — Formula: Root + Major 2nd + Perfect 5th (replaces the 3rd with a 2nd). Character: Airy, modern, ambiguous. More stable than sus4. Example: Csus2 = C-D-G. Access: Joystick DOWN+LEFT on minor chords (DEFAULT mode). Usage: Popular in modern pop, ambient, and shoegaze.

### Seventh Chords

MAJOR 7 — Formula: Major triad + Major 7th (11 semitones from root). Character: Lush, jazzy, sophisticated. Soft dissonance. Example: Cmaj7 = C-E-G-B. Access: Joystick RIGHT on major chords (DEFAULT mode). Usage: Jazz, R&B, neo-soul. The "pretty" 7th chord.

DOMINANT 7 — Formula: Major triad + Minor 7th (10 semitones from root). Character: Bluesy, gritty, creates tension. Wants to resolve. Example: C7 = C-E-G-Bb. Access: Joystick UP+RIGHT (DEFAULT mode). Usage: Blues, rock, jazz. The V chord in "V7 → I" resolution.

MINOR 7 — Formula: Minor triad + Minor 7th. Character: Smooth, mellow, sophisticated minor. Less sad than plain minor. Example: Cm7 = C-Eb-G-Bb. Access: Joystick RIGHT on minor chords (DEFAULT mode). Usage: Jazz, R&B, neo-soul. The ii7 chord in ii-V-I progressions.

HALF-DIMINISHED 7 (m7♭5) — Formula: Diminished triad + Minor 7th. Character: Dark, jazzy, mysterious. Less harsh than fully diminished. Example: Cm7♭5 = C-Eb-Gb-Bb. Access: Joystick UP+LEFT (EXTENDED mode). Usage: Jazz, film scores. Common as viiø7 or ii7 in minor keys.

### Sixth and Extended Chords

MAJOR 6 — Formula: Major triad + Major 6th (9 semitones from root). Character: Bright, vintage, jazzy. Softer than major 7. Example: C6 = C-E-G-A. Access: Joystick DOWN+LEFT on major chords (DEFAULT mode). Usage: Jazz standards, bossa nova, vintage pop.

MAJOR 9 — Formula: Major 7 + Major 9th (major 7th + 2nd octave up). Character: Lush, modern, complex. Very sophisticated sound. Example: Cmaj9 = C-E-G-B-D. Access: Joystick UP (EXTENDED mode). Usage: Modern jazz, neo-soul, fusion.

MINOR 9 — Formula: Minor 7 + Major 9th. Character: Dark but rich, emotional depth. Example: Cm9 = C-Eb-G-Bb-D. Access: Joystick DOWN (EXTENDED mode). Usage: Modern R&B, neo-soul, jazz.

MINOR 11 — Formula: Minor 9 + Perfect 11th. Character: Very open, modal, modern. Complex harmony. Example: Cm11 = C-Eb-G-Bb-D-F. Access: Joystick RIGHT (EXTENDED mode). Usage: Jazz, ambient, modal music.

Pro Tip: Use the Chord Lock feature (hold Chord Button + joystick direction + F2) to save your favorite chord modifications permanently to specific chord buttons. This is especially useful for complex progressions that use the same modifications repeatedly.

# SYNTHESIS ENGINE

This section explains HiChord's audio synthesis architecture. Understanding this helps you create custom sounds and understand how presets work.

## Voice Architecture: 12-Oscillator System

HiChord uses a 12-oscillator polyphonic architecture organized as 6 stereo pairs:

Oscillators 0-5: Main voices (one per chord note in 6-note polyphony).
Oscillators 6-11: Detuned/layered voices (paired with oscillators 0-5 for stereo width).

Example: When you play a 4-note chord, HiChord assigns: Oscillators 0, 1, 2, 3 → play the 4 notes. Oscillators 6, 7, 8, 9 → play the same 4 notes, but slightly detuned and panned opposite. Result: Wide stereo image with rich chorusing effect.

Stereo Panning System: Each oscillator has independent pan control (-1.0 to +1.0). Main oscillators (0-5): Typically panned across the stereo field (L to R). Layered oscillators (6-11): Panned opposite to their pairs for width. Detune: Layered voices are detuned by ±5-15 cents for natural chorusing. When STEREO effect is OFF, all voices sum to mono center.

## Four Synthesis Engines

Each of the 12 oscillators can use any of these synthesis methods:

### ANALOG SYNTHESIS

Method: Wavetable oscillators with anti-aliased waveforms. Waveforms: SINE — Pure fundamental (only 1st harmonic). SAW — All harmonics, descending amplitude (bright, aggressive). SQUARE — Odd harmonics only (hollow, woody, "8-bit"). TRIANGLE — Odd harmonics, rapidly descending (soft, mellow). POLYBLEP_SAW/SQUARE — Band-limited versions (reduces aliasing at high frequencies). Use Cases: Classic subtractive synthesis, pads, leads, basses.

### FM SYNTHESIS

Method: Frequency Modulation with 2-operator algorithms. Algorithms: SIMPLE — Basic FM (sine → sine). EPIANO — Electric piano (Rhodes/Wurlitzer style). HX7 — DX7-style digital synthesis (metallic, bell-like). BELL — Bell tones with high modulation index. ORGAN — Organ algorithm (multiple harmonics). BRASS — Brass algorithm (rich overtones). WOBBLE — Wobble bass with LFO-modulated FM index. Parameters: modRatio: Modulator frequency ratio (0.5 to 8.0) — determines harmonic content. modIndex: Modulation depth (0.0 to 10.0) — controls brightness/complexity. Use Cases: Electric pianos, bells, metallic sounds, digital textures.

### SAMPLE PLAYBACK

Method: High-quality sample playback with pitch-shifting. Sample Storage: QSPI flash memory (non-volatile). Available Samples: Orchestral: STRINGS, CELLOS, VIOLINS, BRASS. Acoustic: ACOUSTIC (guitar), PIANO_UPRIGHT, VIBRAPHONE. Keys: WURLI (Wurlitzer electric piano). Woodwinds: CLARINET. Vocal: VOX_AHH (choir "ahh"). User: USER_SAMPLE — upload your own via USB! Mic: MIC_CUSTOM — record from the built-in microphone (Batch 4+ only). Pitch-Shifting: Real-time pitch-shifting (-24 to +24 semitones) allows samples to play across full keyboard range. Loop Mode: Sustaining samples loop seamlessly for held chords. Use Cases: Realistic instruments, textural layers, custom sounds via microphone.

### NOISE SYNTHESIS

Method: Filtered noise generation for textural elements. Noise Types: WHITE — Full spectrum (equal energy per frequency). PINK — Filtered white (equal energy per octave, more natural). FILTERED_RESONANT — Noise through resonant bandpass filter. METALLIC — Noise with metallic ring modulation. Parameters: filterFreq: Filter cutoff for tonal shaping. filterRes: Filter resonance for emphasis at cutoff frequency. Use Cases: Hi-hats, wind sounds, ambient textures, breath noise in hybrid presets.

## Voice Architecture

HiChord uses a fixed 6-voice polyphonic architecture where each note in a chord is assigned to a dedicated voice:

Voice 1: Root note (or first chord note).
Voice 2: Third (or second chord note).
Voice 3: Fifth (or third chord note).
Voice 4: Bass note (root 2 octaves down, or slash chord note).
Voice 5: Extended chord note (6th/7th when applicable).
Voice 6: Extended chord note (9th/11th when applicable).

All voices play together simultaneously using the voice pairing system (voices 1-6 are main oscillators, voices 7-12 are detuned/layered pairs). Each voice can use different synthesis engines (analog oscillators, FM synthesis, sample playback, or filtered noise) for rich hybrid textures.

Voice Leading: When VOICE LEAD is enabled, HiChord automatically optimizes chord inversions to minimize voice movement between chord changes, creating smooth progressions.

## Example Hybrid Preset — OCEAN_PAD

Oscillators 0-5: ANALOG sine waves (fundamental tone). Oscillators 6-11: NOISE (pink, filtered) + FM (low modIndex bell algorithm). Result: Warm pad with oceanic texture and subtle digital sparkle.

## Signal Flow

Understanding the complete audio signal path:

INPUT → Press Chord Button + Joystick Modification.
CHORD LOGIC → Diatonic Chord System calculates actual notes based on key.
VOICE ALLOCATION → Assigns notes to available oscillators (0-11).
OSCILLATORS → Each oscillator generates audio using its assigned engine (Analog/FM/Sample/Noise).
ENVELOPE (ADSR) → Applied to each oscillator (Attack, Decay, Sustain, Release).
VOICE MIXING → 12 oscillators mixed with pan and amplitude settings.
BASS OSCILLATOR → Optional sub-bass added (ROOT or SLASH mode).
FILTER → State-variable lowpass filter (cutoff 20Hz-20kHz).
MODULATION EFFECTS → Chorus → Flanger.
TIME EFFECTS → Delay (tempo-synced) → Reverb.
LOOPER → Optional record/playback (6 tracks, ~20 seconds each) with per-track mixer.
OUTPUT → Stereo audio (analog out + USB audio) + MIDI out (optional).

## Technical Specifications (Synthesis)

Sample Rate: 48 kHz (48,000 samples per second). Bit Depth: 16-bit output, 32-bit float internal processing. Polyphony: 6 notes (12 oscillators as 6 stereo pairs). Latency: <3ms (hardware + audio processing). Processor: STM32H750 @ 400 MHz (ARM Cortex-M7 with FPU). RAM: SDRAM for looper buffers, mic sample recording, and sample cache. Storage: QSPI Flash (samples, presets, user recordings). Dynamic Range: ~90 dB (limited by hardware DAC).

Sound Design Tip: The RANDOM waveform feature (F2 + Chord Button 7, or F2 menu + Joystick CLICK) generates hybrid presets by randomly assigning engines, waveforms, detuning, and panning to all 12 oscillators. This can create unique sounds you'd never program manually — try it for happy accidents!

# COMPLETE BUTTON REFERENCE



## F1 (FUNCTION 1) — MENU & SETTINGS

F1 (single press): Enter F1 menu (Key, Octave).
In F1 Menu: Joystick UP/DOWN: Change global octave shift.
In F1 Menu: Joystick LEFT/RIGHT: Change key / transpose.
Joystick Click (in F1 menu): Generate random all (waveform, effects, arpeggio).
F1 + Chord Buttons 1-5 (ARPEGGIO mode): Select arpeggio pattern.
F1 + Chord (chord held first): Octave DOWN per chord button.
F1 + Chord (F1 first): ARPEGGIO: select pattern/mode.
F1 + Volume Knob: Adjust attack time (custom envelope).
F1 + F2 (hold both): Display battery status.
F1 + F3 (hold both): Clear/reset all settings to factory defaults.
F1 + F2 + F3 (all together): Enter Firmware Update Mode (DFU).

## F2 (FUNCTION 2) — EFFECTS & SOUNDS

F2 (single press): Enter Sounds menu.
In F2 Sounds Menu: Joystick LEFT/RIGHT: Browse waveforms.
In F2 Sounds Menu: Joystick UP: Enter Effects submenu.
In F2 Effects Submenu: Joystick LEFT/RIGHT: Browse effects.
In F2 Effects Submenu: Joystick UP: Toggle/adjust selected effect.
In F2 Effects Submenu: Joystick DOWN: Return to Sounds menu.
In F2 Sounds Menu: Joystick DOWN: Exit menu completely.
F2 + Chord (F2 held first): Quick select waveform (1-7 shortcuts).
F2 + Chord (chord held first): Cycle inversions (Root/1st/2nd).
F2 + Chord + Joystick: Lock/unlock modified chord type.
F2 + Volume Knob: Adjust release time (custom envelope).
F2 + F3 (hold both): Open Preset menu / Bounce to looper.

## F3 (FUNCTION 3) — MODE SELECTION & FILTER

F3 (single press): Open Mode menu (LEFT/RIGHT cycles modes, UP enters BPM submenu).
F3 × 3 (rapid taps): Tap tempo - set BPM by tapping rhythm.
In F3 Mode Menu: Joystick LEFT/RIGHT: Cycle through modes.
In F3 Mode Menu: Joystick DOWN: Adjust mode-specific parameters (strum speed, rhythm rate, difficulty).
In F3 Mode Menu: Joystick UP: Enter BPM submenu.
In F3 BPM Submenu: Joystick LEFT/RIGHT: Adjust tempo.
In F3 BPM Submenu: Joystick DOWN: Return to Mode menu.
Joystick Click (in F3 menu): Generate random arpeggio pattern.
F3 + Chord (F3 held first): Quick mode select (Chord Buttons 1-7).
F3 + Chord (chord held first): Octave UP per chord button.
F3 + Volume Knob: Engage filter mode, adjust cutoff (20Hz-20kHz).

## LOOPER CONTROLS (NO FUNCTION BUTTONS)

Joystick Click: Cycle looper states (OFF → WAITING → RECORD → LOOP → OFF).
Joystick LEFT/RIGHT (non-drum modes): Switch between tracks (1-6).
Joystick UP/DOWN (drum modes): Switch between tracks (1-6).
Joystick LEFT/RIGHT (WAITING state): Adjust bar count (0-8 bars).
Joystick DOWN: Pause/resume all looper playback.

## MIXER CONTROLS (IN MIXER MODE)

Chord Button 1-6 (tap): Toggle mute/unmute for that track.
Chord Button 1-6 (hold) + Volume Knob: Adjust volume for that track.
Chord Button 7 (tap): Toggle metronome on/off.
Chord Button (hold) + F2: Solo/un-solo that track.
Joystick Click: Pause/resume all loop playback (tracks restart in sync).
2+ Chord Buttons simultaneously: Toggle mute on all pressed tracks (Batch 4+).

## SLASH CHORDS (BATCH 4+)

Hold Chord Button + press another: Slash chord: second button's chord over first button's bass note.

# TECHNICAL SPECIFICATIONS

Processor: STM32H750, 400MHz ARM Cortex-M7.
Sample Rate: 48kHz.
Bit Depth: 16-bit internal / 32-bit float processing.
Polyphony: Up to 12 voices (6×2 stereo).
Display: 64×32 OLED.
Storage: QSPI Flash (samples, presets, settings).
RAM: SDRAM for looper buffers.
Looper Capacity: ~20 seconds × 6 tracks.
MIDI: USB MIDI class compliant.
Power: USB or battery (rechargeable).

# TROUBLESHOOTING



## No Sound

Check volume knob (turn clockwise). Verify battery charge: Hold F1 + F2 to check battery status. Ensure not in DRUM mode (press F3 to change modes). Check audio output connection.

## Buttons Not Responding

Check battery level: Hold F1 + F2 together to display battery voltage and percentage. Ensure no function button is stuck/held.

## Looper Issues

Verify correct track selected (Joystick LEFT/RIGHT to switch between 6 tracks). Check bar count setting (Joystick LEFT/RIGHT in WAITING state). If looper seems silent, check if tracks are muted — enter MIXER mode to see mute states. If playback is paused, press Joystick CLICK in MIXER mode or Joystick DOWN to resume.

## Display Frozen

Check battery level: Hold F1 + F2 to display battery status. Power cycle unit. Device may be in sleep mode (press any button).

## Support Contact

If you're experiencing issues not covered in this troubleshooting guide, or if the solutions above don't resolve your problem, our support team is here to help. Contact Support: support@hichord.shop

# UPDATE FIRMWARE

HiChord firmware can be updated via USB-C using our web-based firmware updater. Updates add new features, sounds, and improvements. Manual Update Mode: If the automatic updater doesn't work, you can manually enter Firmware Update (DFU) mode by holding F1 + F2 + F3 together for 5 seconds while the device is on. The screen will display "Entering DFU Mode". IMPORTANT: If your HiChord is from Batch 1 (Kickstarter Launch Edition), make sure your HiChord is fully charged before updating firmware.

## BATCH 4+ FEATURES

Some features require the Batch 4 (Rev C) hardware revision with I2C buttons and built-in microphone: Vocoder (MIC mode) — uses built-in mic as modulation source. Tuner mode — chromatic tuner using mic input. Mic Sample recording — record custom samples from the mic. Slash chords — press two chord buttons simultaneously for slash chord voicings. Multi-button Mixer control — press 2+ buttons simultaneously to toggle mutes. These features are marked with "Batch 4+" throughout this manual. If you're unsure which batch you have, contact support@hichord.shop.

# Document Information

HiChord // OPERATION MANUAL REV 2.7 BETA. Support: support@hichord.shop. Firmware Updater: HiChord.Shop
