---
id: tempera-granular-synthesizer-owners-manual
title: "Tempera - Granular Synthesizer Owner's Manual"
source: "tempera_manual.pdf"
convertedAt: 2026-03-20T12:36:52.318Z
summary: "Tempera is a multi-sample, 16-voice polyphonic granular synthesizer made by Beetlecrab. It features eight parallel stereo tape tracks arranged as a two-dimensional touch surface, where your fingers place 'Emitters' that generate streams of audio grains. It can function as a pad station, sampler, granular cloud generator, ambient machine, drum bed, remix tool, live grain FX processor, and recorder."
---

# Introduction

Tempera is a multi-sample, 16-voice polyphonic granular synthesizer. You can think of it as eight parallel stereo tape tracks, laid in columns next to each other, forming a kind of two-dimensional tape surface. Your fingers act as generators (known as Emitters) for one or many tape heads (referred to as Grains) riding across the audio surface. This main control interface – the touchgrid – is a fully polyphonic touch sensitive surface on which emitters are laid, which in turn produce streams of grains.

Tempera can be many things: a percussive drum bed, a pad station, sampler, granular cloud generator, an ambient machine, remix and sample-chopping instrument, recorder, an accompaniment to other instruments, a procedural composition tool, a sample wrangler, a tempo-synced live grain FX processor, an in-the-box resampler.

# Layout

Physical connections and controls:
1. 6.35 mm mono left audio or stereo headphones output (up to 13 dBu or 10 Vpp)
2. 6.35 mm mono right audio output
3. 6.35 mm stereo audio input
4. USB host
5. USB device
6. TRS MIDI in
7. TRS MIDI out
8. Power input (12V/2.5A DC center positive) – use the provided power supply
9. Power switch
10. Onboard microphone
11. Volume knob
12. Page up
13. Page down
14. Context switch (Round button)
15. Tracks
16. Emitters
17. Overlay Keyboard
18. Modulators
19. Effects
20. Settings
21. Load and save canvases
22. Macros
23. Micro SD card slot

Each of the four main knobs' function is determined by menu navigation and associated with the display below it. There are two buttons per each display, and their function changes depending on context.

The Round button serves several purposes:
1. Hold it to reveal an alternate context for buttons below the displays.
2. Hold it while turning a knob to move through the parameter faster.
3. When recording, press it to stop recording.

The column of buttons to the right of the touchgrid are navigation buttons. The Up and Down arrows navigate across menu pages. Dots on the right-most display show the current page out of a total.

Certain actions like saving/loading canvases or detecting pitch are performed in the background. When busy, the knobs will light in a moving wave. Tempera is fully usable during that time; do not turn off the power when saving canvases or samples.

Most parameter values are shown between 0.00 and 1.00. The internal resolution is much higher; only the displayed value is truncated to two decimal places.

# Getting Started

When Tempera starts for the first time, you are greeted with the Initial canvas. Before making sound, check your Output volume and set it to around 25%.

On the touchgrid, color cells are Emitters that are already pre-placed. Each placed emitter is one of the four primary colors. If a placed emitter is e.g. blue, then it behaves according to the Blue emitter settings. The two white rows at the bottom are the Overlay Keyboard – in the initial canvas, a single octave of a chromatic scale starting with C4.

To make sound: place and hold your finger on any cell in the Overlay Keyboard region. All emitters start triggering grains depending on their location and configuration. You can play multiple notes and place multiple fingers at different places for interesting blends.

To enable keyboard hold for two-handed emitter placement: go to the Overlay Keyboard menu and press Hold. To remove pre-placed emitters, go to Emitters menu, Select the emitter, and place your finger on a cell where that emitter is.

You can play notes from the internal overlay keyboard or from an external MIDI keyboard connected via MIDI TRS or USB.

## Canvas

A full patch for Tempera is called a canvas. It contains eight audio samples (tracks), all emitters' and modulators' configuration, the configuration of the Overlay Keyboard, effects and macros, as well as optionally pre-placed emitters.

Tempera comes with a suite of built-in canvases. There is also an online gallery where you can share and download canvases. When you load a canvas, try playing a note to get an idea of what it is, then modify it to your liking. Some canvases are melodic, others are percussive.

Tips:
- Save canvases directly onto an SD card to share.
- Try combining samples from different canvases.
- To start with a clean slate, load Empty.canvas inside the System folder.

# Tracks

Each column on Tempera's touchgrid represents a track, going from top to bottom. Each track contains a loaded or recorded audio sample, which can be up to 10.922 seconds long. When a longer audio sample is loaded, it is possible to select which slice to load. Tempera supports many common audio formats, stores them internally as 16-bit 48 kHz, and processes them with 32-bit floating point math.

When you play a note, all placed emitters start emitting grains which ride on the tracks and play audio from their locations. Each track needs its tuning configured via the Base frequency (Hz mode). For example, if a base frequency is 440 Hz and you play A3, Tempera plays the grain at half speed since A3 is 220 Hz. Use the pitch detector if you don't know the tuning.

For percussive samples, use BPM mode: the track playback will adjust speed to match your global BPM. Each track in BPM mode can have its Base tempo configured so percussive loops of different BPMs sync perfectly.

## Tracks Menu

In the main Tracks menu, names and volumes of tracks are shown on displays in groups of two. Turning the corresponding knob tweaks the volume of the selected track.

Context actions:
- Switch: select which of the two tracks is selected for editing and volume change
- Edit: edit the selected track

Holding the Round button reveals:
- Rec: arms a track for recording. Recording begins when input audio crosses the Threshold set in Settings or on the next quarter note when Cue rec is activated. Press Round button again to stop recording.

## Editing a Track

The Edit page shows track details and waveform with actions:
- Load: load a sample from the Sample browser
- Rename: rename the track for display and exporting
- To Hz / To BPM: toggle tuning representation between Hz mode (base frequency) and BPM mode (base tempo)
- Snap: adjust tuning to closest note (e.g. 441.3125 Hz becomes 440 Hz, 120.1 BPM becomes 120)
- Trim: cut and normalize in the Waveform preview
- Delete: discard track contents
- Play: preview/listen to the track
- Export: save audio as a new file in the Sample browser

Holding the Round button reveals:
- Detect: detect pitch of the sample (enter note/frequency manually by turning the knob)
- Copy and Paste: track to/from clipboard
- < Swap and Swap >: move track left or right

Tips:
- Press Tracks button twice to go quickly to last edited track
- Press Up and Down arrows to scroll between tracks

## Loading a Sample into Track

To load a sample:
1. Go to Tracks.
2. Choose the track and press Edit.
3. Press Load to activate the Sample browser.
4. Choose a sample from internal or external memory and press Load.
5. Adjust the < Start > and < End > points using the first and last encoders and press Load. Scroll faster by holding the Round button.

Once loaded, adjust the base frequency or base tempo.

Tips:
- Tempera can set tuning automatically if the filename includes base frequency or tempo, e.g. Bells_533Hz.wav or DrumGroove130BPM.wav
- After loading but before committing, press Up/Down to quickly load next/previous audio files in the folder

Sample recommendations:
- For harmonic sounds, keep the base sample to a lower tuning (110 Hz or 220 Hz)
- For sequenced sounds, audio neatly divisible in eight equal-length slices aligns well with touchgrid cells
- For embedded melodies, use 'safe' notes like octaves and fifths

FAQ:
- Tempera exports as .flac (lossless compression, ~50% smaller, zero quality loss)
- Saved .canvas files are fully self-contained; original audio files can be moved or deleted
- Adjust Audition Volume in Settings if preview volume is too loud

## Trimming a Sample

The Waveform preview allows editing a sample already loaded into a track:
1. Go to Tracks.
2. Choose track and press Edit.
3. Press Trim to enter waveform preview.

Trim page controls:
- Adjust < Start > and < End > points with first and last encoders
- Listen: preview sample between start and end points
- Norm: long-press to normalize the sample

Holding Round button reveals:
- Rev: reverse the sample
- Trim: cut contents before and after start/end points

The waveform preview shows vertical markers: top markers correspond to eight track cells' boundaries, bottom markers represent quarter notes. Use this to align track with tempo.

# Emitters

To make sound, Tempera needs an emitter placed and a voice played. An emitter can be placed on any cell on the touchgrid, from where it emits a stream of grains. All placed emitters are activated per each voice and can be one of four color-coded configurations.

Main Emitters menu: each display corresponds to one emitter. Turning knobs tweaks emitter volume.

Actions:
- Edit: edit emitter parameters
- Select: select emitter for placing on the touchgrid

Holding Round button:
- Clear: remove all placed emitters
- Pause / Unpause: toggle emitter grain generation

Emitter primary colors can be changed globally in Settings.

## Per-Emitter Parameters

Emitters have many parameters determining behavior in time and space. Some parameters can be modulated by Modulators, and some can have optional jitter (random variation per grain) by turning their encoder while holding the Jitter button. Parameters are per color-coded configuration.

When navigating parameter pages, the emitter under editing automatically changes to the next one when crossing the last page (disable with Emitter x-scroll in Settings).

Parameters:
- Grain length: how long grains are. Cell mode (0–8 grid cells) or Note mode (note duration in time signature).
- Grain density: grains generated in time per note played and emitter placed. 1.00 = one grain played shoulder to shoulder.
- Grain trigger: cross-fades between free length/density generation and time-synced triggers.
- Sync time: time signature for synced grain emission.
- Spray X / Spray Y: randomness in grain spawning horizontally (across tracks) and vertically (along a track).
- Relative X / Relative Y: manually scrub grain trigger position away from home base.
- Align: makes grains start at cell beginnings. Useful for percussion tracks. When off for Relative X, grains between tracks are a weighted blend.
- Grain shape: envelope sharpness. Low = sharp transients, high = smooth. Attack option gives first grain an instant ramp-up overriding grain shape.
- Tone: gentle low-pass/high-pass filter pair with Center frequency and band Width (variable-width band-pass filter).
- Grain pan (L/R) or Grain mid-side (M/S): stereo spread of grains.
- Tune spread: random tuning variation per grain (±1 octave range). Snap 5 and Snap 8 quantize to fifths and/or octaves.
- Octave: transpose grains ±3 octaves.
- FX send: amount sent to global Effects chain (Chorus, Delay, Reverb). Filter send: audio input to per-voice main filter.
- Placement modes: Instant (touch to place, release to remove), Toggle (touch to toggle), Latch (all emitters cleared at next placement when fingers removed).
- Lock: prevent emitter from being replaced.
- 2-lane: emitter gains exclusive access to the pair of tracks below it.
- Channel: MIDI channel the emitter listens to. Global follows Settings channel.
- Fade in / Fade out: grain fading after emitter placed or removed.
- Name: changeable from default Emitter 1–4.

Tips:
- Set Grain density below 1.00 with super short Grain length.
- Once a grain is in flight, it stops when it runs its course or when the voice is released.
- ADSR amplitude envelope is always applied regardless of FX send.
- Octave and Grain detune are not applied for tracks in BPM mode.
- Hold Round button + press Emitters to cycle to next emitter for editing.
- Set emitters to different MIDI Channels for multi-timbrality.

FAQ:
- Smooth sample scrubbing: modulate Rel X and Rel Y with a modulator or MIDI input in Modulators menu. Short grains recommended for smooth scrubbing.
- Per-emitter effects: not possible as of current firmware.
- Metallic/glitched high-density short grain sound: periodic grain emission creates audible frequency component. Add a tiny amount of unaligned Spray Y.

# Overlay Keyboard

An overlay keyboard can occupy a portion of the touchgrid, enabling stand-alone play or complementing an external MIDI controller for multi-timbral setups.

Options:
- Base note: adjust by semitones (encoder) or shift by octaves (buttons)
- Channel: MIDI channel the overlay keyboard plays at (useful for feeding notes to specific emitters)
- Scale: arrangement of notes on the grid with various scales available
- Overlay: which portion (horizontally or vertically) of the touchgrid the keyboard occupies

Context buttons: Clear all held notes or Hold them (sustain pedal).

The keyboard begins with configurable Base note at the bottom-left cell. Increasing layout size increases range. Each row is an octave except chromatic scale (two rows per octave).

Shortcuts:
- Round button + Overlay Keyboard: quickly show/hide keyboard from any menu
- Notes can be toggled on multiple MIDI channels at once (useful for held drone on one channel, playing on another)

# Modulators

Modulators change emitter or filter parameter values over time for more complex and dynamic sound. Each modulator can be an envelope, periodic wave, slow randomized noise, or MIDI input. A modulator can be routed to one of the available targets; multiple modulators can share a target.

There are ten modulators per voice played, plus a full ADSR amplitude envelope generator.

## ADSR Envelope

The first page of the Modulators menu is a main ADSR envelope with Attack, Delay, Sustain and Release parameters. This amplitude envelope applies to each voice played.

Apart from the main ADSR envelope, each emitter can have its distinct Grain shape (grain envelope) configured in the Emitters menu.

## Modulator Options

Individual modulator shapes:
- AR and AD: two-stage simplified ADSR variants (Attack-Release and Attack-Decay)
- Sine, Triangle, Square, Saw: periodic LFOs with controllable Speed and Phase offset. Speed has optional tempo Sync; when not synced, can be Free running. The +- button switches between bipolar and unipolar.
- Noise S&H and Slow noise: sampled and periodic randomized noise with adjustable Speed and Phase offset.
- Modwheel: routes CC 1 as modulation source
- Aftertouch: routes Channel Pressure as modulation source
- Key track: routes played note as modulation source
- Velocity: routes note velocity as modulation source

Target/Size buttons switch between adjusting modulation target and modulation size. Multiple targets available: global or per-emitter (E1 to E4). Modulation size controls how much the target is affected.

Tips:
- Modulated parameters show a small vertical line on the display per voice.
- Modulator shape shown in real time on first display.
- Grain-scrub through a track by modulating Emitter Relative Y with e.g. Modwheel (ensure enough grain density).

# Effects

Tempera has four effects: Filter, Chorus, Delay and Reverb. Chorus, Delay and Reverb are processed in listed order on the master bus, with wet signal controllable through individual Mix parameters. The main Filter is processed per voice.

Amount of signal sent to effects is controllable per emitter with FX send and Filter send in the Emitters menu.

## Filter

Six filter types with Cutoff and Emphasis parameters:
- Lowpass 12: attenuates below Cutoff at 12 dB/oct, Emphasis controls resonance
- Lowpass 24: attenuates below Cutoff at 24 dB/oct, Emphasis controls resonance
- Bandpass 12: passes signals within a band centered on Cutoff, Emphasis controls resonance
- Highpass 12: attenuates above Cutoff, Emphasis controls resonance
- Formant: emulates vowel resonance. Cutoff aligns filter with U-E-O-I-A vowels, Emphasis blends original and filtered signal
- Rake: comb filter. Cutoff controls feedback delay line length. Emphasis above 0.5 amplitude-modulates feedback with a sine wave matching the delay line period

Key tracking determines how much cutoff frequency follows played notes. When zero, cutoff is interpreted as absolute value.

FAQ:
- Filter is per-voice (per key played). Modulated cutoff applies to each voice separately. For per-emitter filtering, use the Emitter's Tone filter.
- Formant filter: increase Emphasis (crossfade between original and formant-filtered signal).
- Delay Mix above 1.00: compensates for loudness reduction from active Color filter.

## Chorus

Chorus mixes together sounds played back at different pitches, resembling a choir or orchestra section.
- Depth: amount of detuning
- Speed: modulation speed
- Flange: amount of feedback

## Delay

Delay adds a delayed version of the signal to the final mix.
- Feedback: amount of output signal fed into the delay
- Time: delay length
- Pong: when enabled, feedback differs for left and right channels (ping-pong)
- Dotted: optional dotted time
- Sync: optional time signature sync
- Color: cutoff frequency of optional bandpass filter on feedback line (switchable On or bypassed)

## Reverb

Reverb simulates reverberation caused by reflections in a physical environment.
- Size: persistence of signal. Setting to 1.00 freezes reflections.
- Color: cutoff frequency of smooth band-pass filter at output
- Diffuse: low-pass filter on feedback line attenuating higher frequency reflections. High diffusion = softer, less reflective sound.

# Settings

System-wide parameters. These are global (not linked to a specific canvas) and saved automatically when exiting the Settings menu.

## Recording Options

- Source: audio input type with adjustable Gain. Options: dry or wet signal from Tempera, external audio input (stereo, mono, external dynamic microphone, instrument input), or internal microphone.
- Rec threshold: input volume level that triggers recording on armed tracks.
- Rec monitor: amount of audio input sent directly to output (for monitoring while recording or audio pass-through).
- Recording modes:
  - Overdub: adds audio input to the original
  - Replace: substitutes existing audio with input
  - Mix: mixes input and original; oldest audio gradually decreases in volume after each recording
  - Live grains: live processing and granularization of input audio in real time

## MIDI and Tempo Options

- Pitchbend size: sensitivity range 0–12 semitones
- Velocity curve: Linear, Exp (exponential), Rev exp (reverse exponential), or Fixed (velocity ignored)
- Clock source: Send, Receive (24 PPQN), or Internal clock. Stop/Play to control tempo.
- BPM: current tempo. Change manually with encoder or Tap button. Auto-updates when Clock source is Receive and MIDI clock detected.
- MIDI TRS wiring: switchable between Type A and Type B
- TRS MIDI thru: direct passing of MIDI messages between TRS jacks (IN to OUT)
- MIDI channel: 1–16 or All
- Send MIDI notes: sends Overlay Keyboard notes over MIDI to play other instruments

## Miscellaneous Options

- Audition volume: volume for previewing audio samples in Tracks menu
- Max volume: amplifies/attenuates main audio output (up to 13 dBu / 10 Vpp when maxed)
- LED light: touchgrid and encoder backlight brightness
- Display light: OLED display brightness
- Micro SD card USB bridge: bridges SD card over USB as mass storage device
- Reset: restore all global settings to default
- Grid idle splash: animation when Tempera not touched for a while (can be enabled/disabled; displays blank after inactivity either way)
- Emitter x-scroll: whether cycling emitter pages scrolls to next emitter after final page

## Emitter Primary Colors

The last settings page allows adjusting primary colors of individual emitters. LED color mode (on previous page) determines if colors are set with Hue + Str (hue and strength/brightness) or Hue + Sat (hue and saturation).

# Load and Save Canvases

The Load and save menu enables access to canvases (complete patches). Organizational structure uses files and folders.

Four top-level folders:
- System: read-only, factory canvases
- User: your samples and canvases
- SD Card
- Flashdrive

Navigate with Enter, Up/Down arrows. Go up one folder at top of each folder. Always use the Eject button before unplugging external drives to prevent data loss.

To load: navigate to canvas and press Load.
To save: navigate to destination and press Save.

Text input for naming:
- Blue encoder: scroll text cursor
- Green encoder: scroll selected character
- OK: confirm and save
- Cancel: go back
- Insert: type selected character
- Delete: remove character at cursor
- Random: generate randomized name
- Shift: toggle upper/lower case
- Hold Round button + Alt: numeric and special characters

Placed emitters are saved with a canvas; played and held (latched) notes are not. When loading a canvas while notes are playing, they carry over to the new canvas.

## Sharing Your Canvas

After saving a canvas onto micro SD Card or USB flashdrive, upload to the Gallery at https://gallery.beetlecrab.audio. Download canvases others have created.

Tips:
- Pick a short, descriptive and evocative name
- Write a short commentary or tips on how to use your canvas
- Share how you made it and what inspired you
- Give it a nice cover image

# Macros

Macros allow binding most parameters to quick-access slots for performance convenience. For example: Filter cutoff, a Modulator speed, an Emitter grain length, and a different Emitter grain density.

To assign a parameter to a macro slot:
1. Find the parameter in its menu (e.g. Filter cutoff in Effects)
2. Hold the Macros button
3. Turn the parameter's knob slightly
4. Release the Macros button
5. Select which macro slot to assign to

Macro assignments are saved with the canvas.

## Shortcuts

Button combos for common workflows:

While holding the Round button:
- Load and save button: quicksave current canvas to User/Quicksave (overwrites previous)
- Emitters button (while editing an emitter): cycle through emitters on same page
- Overlay Keyboard button: toggle Overlay Keyboard
- Turning any knob: increment value faster

Without Round button:
- Double press Emitters: toggle between emitter overview and last edited emitter's settings
- Double press Tracks: toggle between track overview and last edited track's settings
- Press Load and save while in file browser: go to top-level folder

Info screen: hold Settings button to display available storage, loaded canvas name, and firmware version.

# Recording

Tempera records audio into a track from several sources, including on-device resampling (dry or wet output).

Procedure:
1. Set audio input Source in Settings
2. Verify meter is moving; adjust Gain
3. Set Record mode to Replace
4. Adjust recording Threshold
5. In Tracks menu, hold Round button and press Rec to arm a track
6. Release Round button (track waits for audio input)
7. Play audio into Tempera. After triggering threshold, displays go blank during recording to eliminate interference.
8. Press Round button to stop recording, or wait until track reaches end.

After recording, press Edit and Trim the track.

Tips:
- Enable Cue rec for instantaneous recording start on next quarter note
- Record while other tracks play; record dry/wet output and re-granularize
- Try recording with the internal microphone for interesting granular processing
- Share interesting/unusual samples with others

# Live Grains

Besides static track recording, Tempera can do live processing on incoming audio for subtle granularization or precisely synced rhythm chopping and re-sequencing in real time.

A live track is armed and incoming audio streams through it. New audio emerges at the bottom cell and travels to the top where it disappears. Along the eight cells, emitters can be placed to play grains of incoming audio directly.

## Synced Live Grains

For synced live grains:
1. Set Tempera's BPM in Settings to match incoming audio BPM
2. In Settings, set Record mode to Live grains and enable Cue rec
3. In Tracks menu, hold Round button and press Rec to arm a track. The track should be trimmed with regards to BPM (align top markers/cell spans with bottom markers/quarter notes)
4. Have a note playing and place an emitter on the pulsating track

To stop live grains: disarm track (Round button + Rec) or turn off Cue rec. The track becomes static again. Re-arming a different track retains the former track's contents.

Tips:
- Ensure clock is working correctly and track trim is set up for sync
- Top and bottom markers don't need 1:1 alignment; try 6:4 or other ratios for rhythm variations

FAQ: Live grains track orientation appears reversed because in both static and live tracks, the most recent audio is at the bottom cell while the oldest is at the top.

# External Storage

Tempera has 8 GB total internal memory (some used for firmware, built-in samples, canvases). Internal FLAC conversion doubles effective sample storage.

External storage: micro SD card (front) or USB flashdrive (back). Create two folders on external media: "samples" and "programs" for samples and canvases.

Tips:
- Organize canvases and samples into folders (unlimited nesting)
- Hold Settings button to reveal memory usage and firmware version
- Latest firmware at beetlecrab.audio/tempera/support

## Firmware Upgrade

1. Download firmware file and place onto USB flashdrive or micro SD card (FAT32 or exFAT)
2. With Tempera off, insert the drive
3. Turn Tempera on while holding the Round button
4. Follow on-screen instructions
5. Do not turn off power before update is finished

## Micro SD Card USB Bridge

In Settings, activate SD card USB bridge. Tempera acts as a class-compliant USB mass storage device via the USB Device port. The SD card appears as if inserted directly into the computer for file transfer.

During bridge mode, Tempera will not make sound or allow menu navigation until deactivated.

# MIDI Input

Tempera responds to standard MIDI messages with many internal parameters exposed.

MIDI Implementation Overview:
- Channel: Transmitted 1–16, Recognized 1–16 (configurable in Settings)
- Note Number: Transmitted 1–127, Recognized 1–127 (transmitted from Overlay Keyboard; available as Modulator source)
- Note Velocity: Transmitted 1–127, Recognized 1–127
- Pitch Bend: Recognized only (configurable in Settings)
- Channel Pressure (Aftertouch): Recognized only (available as Modulator source)
- Control Change (CC): Recognized 0–119
- Program Change: Recognized 0–127
- Timing Clock: Transmitted and Recognized (configurable in Settings)
- Timing Start: Transmitted and Recognized
- Timing Stop: Transmitted and Recognized

## MIDI CC Parameters

CC 0: (reserved)
CC 1: Modwheel (can be used as a modulator)
CC 2–9: (reserved)
CC 10: Active Emitter
CC 11: Place emitter
CC 12: Remove emitter
CC 13: ADSR Attack
CC 14: ADSR Decay
CC 15: ADSR Sustain
CC 16: ADSR Release
CC 17: Reverb Size
CC 18: Reverb Color
CC 19: Reverb Mix
CC 20: Delay Feedback
CC 21: Delay Time
CC 22: Delay Color
CC 23: Delay Mix
CC 24: Filter Cutoff
CC 25: Filter Resonance
CC 26: Chorus Depth
CC 27: Chorus Speed
CC 28: Chorus Flange
CC 29: Chorus Mix
CC 30: Track 1 Volume
CC 31: Track 2 Volume
CC 32: (reserved)
CC 33: Track 3 Volume
CC 34: Track 4 Volume
CC 35: Track 5 Volume
CC 36: Track 6 Volume
CC 37: Track 7 Volume
CC 38: (reserved)
CC 39: Track 8 Volume
CC 40: Emitter 1 Volume
CC 41: Emitter 1 Grain length Cell
CC 42: Emitter 1 Grain length Note
CC 43: Emitter 1 Grain density
CC 44: Emitter 1 Grain shape
CC 45: Emitter 1 Grain shape Attack
CC 46: Emitter 1 Grain pan
CC 47: Emitter 1 Grain tune spread
CC 48: Emitter 1 Octave
CC 49: Emitter 1 Relative X
CC 50: Emitter 1 Relative Y
CC 51: Emitter 1 Spray X
CC 52: Emitter 1 Spray Y
CC 53: Emitter 1 Tone filter Width
CC 54: Emitter 1 Tone filter Center
CC 55: Emitter 1 Effects send
CC 56: Emitter 2 Volume
CC 57: Emitter 2 Grain length Cell
CC 58: Emitter 2 Grain length Note
CC 59: Emitter 2 Grain density
CC 60: Emitter 2 Grain shape
CC 61: Emitter 2 Grain shape Attack
CC 62: Emitter 2 Grain pan
CC 63: Emitter 2 Grain tune spread
CC 64: Damper pedal
CC 65: Emitter 2 Octave
CC 66: (reserved)
CC 67: Emitter 2 Relative X
CC 68: Emitter 2 Relative Y
CC 69: Emitter 2 Spray X
CC 70: Emitter 2 Spray Y
CC 71: (reserved)
CC 72: Emitter 2 Tone filter Width
CC 73: Emitter 2 Tone filter Center
CC 74: (reserved)
CC 75: Emitter 2 Effects send
CC 76: Emitter 3 Volume
CC 77: Emitter 3 Grain length Cell
CC 78: Emitter 3 Grain length Note
CC 79: Emitter 3 Grain density
CC 80: Emitter 3 Grain shape
CC 81: Emitter 3 Grain shape Attack
CC 82: Emitter 3 Grain pan
CC 83: Emitter 3 Grain tune spread
CC 84: Emitter 3 Octave
CC 85: Emitter 3 Relative X
CC 86: Emitter 3 Relative Y
CC 87: Emitter 3 Spray X
CC 88: Emitter 3 Spray Y
CC 89: Emitter 3 Tone filter Width
CC 90: Emitter 3 Tone filter Center
CC 91: Emitter 3 Effects send
CC 92: Emitter 4 Volume
CC 93: Emitter 4 Grain length Cell
CC 94: Emitter 4 Grain length Note
CC 95: Emitter 4 Grain density
CC 96: Emitter 4 Grain shape
CC 97: Emitter 4 Grain shape Attack
CC 98: Emitter 4 Grain pan
CC 99: Emitter 4 Grain tune spread
CC 100–101: (reserved)
CC 102: Emitter 4 Octave
CC 103: Emitter 4 Relative X
CC 104: Emitter 4 Relative Y
CC 105: Emitter 4 Spray X
CC 106: Emitter 4 Spray Y
CC 107: Emitter 4 Tone filter Width
CC 108: Emitter 4 Tone filter Center
CC 109: Emitter 4 Effects send
CC 110: Modulator 1 Size
CC 111: Modulator 2 Size
CC 112: Modulator 3 Size
CC 113: Modulator 4 Size
CC 114: Modulator 5 Size
CC 115: Modulator 6 Size
CC 116: Modulator 7 Size
CC 117: Modulator 8 Size
CC 118: Modulator 9 Size
CC 119: Modulator 10 Size

## Placing and Removing Emitters with MIDI

Emitters can be placed or removed via MIDI:
- Set Active emitter: CC 10, value 0–3 (0 = first/blue emitter)
- Place emitter: CC 11, value 0–63 (grid cells numbered top-left, column by column)
- Remove emitter: CC 12, value 0–63

Grid cell numbering: Track 1 = cells 0–7, Track 2 = cells 8–15, Track 3 = cells 16–23, and so on.

Example – place blue emitter on first cell of first track:
1. Send CC 10, value 0 (set active emitter to 1/blue)
2. Send CC 11, value 0 (place on first cell)

Example – remove red emitter from second cell of second track:
1. Send CC 10, value 1 (set active emitter to 2/red)
2. Send CC 12, value 9 (remove from second cell of second track)

## Changing Canvases with MIDI

Send a Program Change message with value 0–127. Tempera loads a canvas from the folder the current canvas is loaded from, with the program number corresponding to the canvas name sorted alphabetically.

To change the folder, load a different canvas from it in the Load and save menu.

# Specifications

- Processor: ARM Cortex-A72 quad core with NEON DSP instructions
- Internal processing: 32-bit floating point
- Polyphony: 16 voices with per-voice filters
- Global grain pool: 4096 stereo grains (distributable across all 16 voices or concentrated into a single voice)
- Audio output: Dual 6.35 mm jacks, up to 10 Vpp / 13 dBu (headphone or separate L/R)
- Audio input: 6.35 mm stereo jack, up to 5.9 Vpp / 8.6 dBu (line in or instrument switchable)
- Headphone amplifier: built-in
- Internal microphone: yes
- MIDI: TRS input and output (Type A/B switchable), USB MIDI host and device (both input and output capable)
- Storage: Micro SD card slot, USB flash drive support
- Sample format: stored internally as 16-bit 48 kHz
- Maximum sample length per track: 10.922 seconds
- Power: 12V/2.5A DC (5.5/2.1 mm center-positive)
- Mounting: VESA-compatible rear panel holes (100×100 mm spacing, M4 screws, max 5 mm thread depth)
- Firmware: upgradable via USB flash drive or micro SD card

# Health and Safety

- Use only the supplied power supply (PSU-02)
- Do not expose to liquids or excessive humidity
- Do not use screws longer than 5 mm for rear panel mounting holes

Support: makers@beetlecrab.audio or Discord server
