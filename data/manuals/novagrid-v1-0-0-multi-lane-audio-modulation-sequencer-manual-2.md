---
id: novagrid-v1-0-0-multi-lane-audio-modulation-sequencer-manual-2
title: "Novagrid v1.0.0 — Multi-Lane Audio Modulation Sequencer Manual"
source: "Novagrid+1.0.0+Manual.pdf"
convertedAt: 2026-04-08T13:05:43.523Z
summary: "Novagrid is a multi-lane audio modulation sequencer plugin (VST3/AU/Standalone) for Windows and macOS, designed by Mario Nieto. Rather than generating sound, it takes an incoming audio signal and reshapes it rhythmically through four independent effect lanes — Volume, Pan, Filter (14 types), and Bitcrusher — each with its own step sequencer. Users can reorder the processing chain, randomize parameters, lock values, and build complex evolving modulation patterns that react in real time to any audio source."
---

# Concept Overview

Novagrid is built around three main concepts:

1. Lanes – Independent Modulation Engines: Four lanes, each dedicated to a specific audio effect (Volume, Pan, Filter with 14 types, Bitcrusher). Every lane contains its own step sequencer, speed, steps settings, range controls, randomization tools, locks, and editing tools. Each lane works independently but can be linked to behave as a unified modulation system.

2. Sequencers – The Heart of Novagrid: Every effect is controlled by a slider-based step sequencer defining how the effect behaves over time (volume open/close, pan left/right, filter cutoff movement, bitcrushing intensity). Each sequencer is fully editable with curves, patterns, randomization, and Editor Tools.

3. The Modulation Chain – Reorderable Processing: The four lanes are processed left to right. You can reorder lanes via drag and drop to change the modulation chain and dramatically alter the result.

4. Randomization, Locks & Workflow: Local dice for quick variation, Global Random for controlled chaos, parameter locks to preserve key values, linked lanes to randomize or edit multiple effects at once.

# Installation and Setup

Available for macOS and Windows as AU/VST3 plug-in and Standalone.

## System Requirements

macOS:
- Version 10.14 or higher
- Intel Core i5 processor / Native Apple Silicon support
- 4GB of RAM

Windows:
- Windows 10 or higher
- Intel Core i5 processor
- 4GB of RAM

An initial internet connection is required for license activation.

## Activation and Licensing

After purchase you receive installers for Windows (.exe) and macOS (.pkg) and your license key by email, also available at marionietoworld.com.

- Run the installer and follow the prompts.
- Open the plugin (or standalone) the first time and enter your email and license key.
- Internet is required only for initial activation.
- Each license can be active on up to 3 computers.
- Once activated, use the plugin offline (no periodic check-ins).
- Manage licenses at marionietoworld.com/my-account → Licenses. You can also deactivate the license directly from Novagrid by clicking the logo inside the plugin.

## Loading in a DAW

In your DAW, find "Mario Nieto" under audio effects to load Novagrid. Novagrid is an audio processor, so it needs an audio signal to work. Insert it on any audio track, instrument track, or bus you want to process.

# Top Bar

1.1 – Novagrid Logo & About: Opens the About panel with version information, credits, and support resources.
1.2 – Reset / Initialize: Resets Novagrid. INIT ALL resets everything (all parameters restored to default, parameter locks removed, Global Random entries cleared). RESET restores all effect parameters except locked ones, and keeps Global Random assignments.
1.3 – Bypass: When active, all incoming audio passes through unaffected, effectively bypassing processing.
1.4 – Random Preset: Loads a random preset from the preset list.
1.5 – Favorite Preset: Marks or unmarks the current preset as a favorite.
1.6 – Preset Name / Preset Browser: Displays the currently loaded preset name. Click to open the Preset Browser panel.
1.7 – Previous / Next Preset: Left arrow for previous, right arrow for next preset.
1.8 – Save Preset: Opens the Save Preset panel (name, author, description).
1.9 – Undo / Redo: Steps backward or forward through recent edits including parameter changes, random preset loads, and other actions.
1.10 – Show Expansions Panel: Reveals Expansions Panel.
1.11 – Color / Theme: Opens the Color panel for theme customization.
1.12 – Settings: Reveals the Settings panel.

# Look Editor Bar

Novagrid lets you customize interface colors. You can import and export looks as .mnLook files. Looks created in Harmony Bloom and Chord Generator are fully compatible with Novagrid.

2.1 – Background Color Selector: Opens color picker or type hex directly. Right-click for Copy, Paste, or Reset.
2.2 – Main Color Selector: Sets the main color for foreground elements (shapes, text, icons, UI highlights). Right-click for Copy, Paste, or Reset.
2.3 – Undo / Redo Colors: Independent from plugin parameter undo/redo; affects only interface colors.
2.4 – Random Colors: Randomizes interface colors with an algorithm that generates strong contrast between background and main colors.
2.5 – Export Look: Exports current color theme as an .mnLook file (cross-compatible with Harmony Bloom and Chord Generator).
2.6 – Import Look: Imports a custom .mnLook file. Drag and drop is also supported.
2.7 – Reset to Factory Colors: Restores original factory colors without affecting your saved default skin.
2.8 – Set as Default Skin: Saves the current color configuration as default for new instances.

# Lanes Overview

Novagrid includes four independent audio effects: Bitcrusher, Filter (14 types), Volume, and Pan, each powered by its own sequencing engine. Effects are processed from left to right and can be freely reordered by dragging their tabs.

Every effect lives inside its own lane. Selecting a lane displays all parameters including number of steps, speed, smoothing, and effect-specific controls. Lanes operate independently by default but can be linked.

A lane will only process audio if:
- Its Power button is enabled
- The Dry/Wet control is set above 0%

If either is off, the lane remains inactive even while the sequencer runs.

## Lane Controls

3.1 – Effect Selector: Displays the lane name. Left-click to reveal parameters. Drag to reorder the processing chain. Right-click for additional actions.
3.2 – Link Lane: When enabled, all linked lanes share parameters. Manual changes are cloned exactly across linked lanes. Randomization triggers separate random values for each linked lane.
3.3 – Dry/Wet: Quick access to the lane's Dry/Wet balance. Determines how much processed signal is blended with clean audio.
3.4 – Active Lane: Enables or disables the effect for the lane. When inactive, no audio processing occurs (bypass).

## Lane Context Menu

4.1 – Parameter Name: Displays the currently selected parameter name.
4.2 – Reset: Resets all parameters in the lane except locked ones and Global Random assignments.
4.3 – Init Lane: Fully initializes the lane (removes all locks, clears Global Random assignments, resets all parameters).
4.4 – Copy Entire Lane All: Copies the full lane state to every other lane. Locked parameters in destination lanes remain unchanged.
4.5 – Copy Entire Lane to Filter Lane
4.6 – Copy Entire Lane to Pan Lane
4.7 – Copy Entire Lane to Bitcrusher Lane
4.8 – Move Lane Left: Moves the lane one position left in the processing chain.
4.9 – Move Lane Right: Moves the lane one position right.
4.10 – Reset Lane Order: Restores factory processing order.
4.11 – Lock: Locks the entire lane. Locked lanes are not modified by preset changes. Parameters can still be adjusted manually.
4.13 – Learn MIDI Assignment: Enables MIDI Learn mode. The lane waits for an incoming MIDI CC message, then assigns that CC to lane selection.

# Common Lane Controls

Each lane includes shared controls that work the same across all effects. The only elements that vary are the central effect-specific parameters.

5.1 – Transport: Controls tempo and playback. Includes Metronome Sync button (syncs to DAW), BPM display, Play/Pause button, and three direction modes: Forward (left to right loop), Ping-Pong (forward then reverse), Reverse (right to left loop).

5.2 – Division: Defines the duration of each step. Higher values (e.g. 1/128) create shorter steps and faster sequences; lower values (e.g. 1/16) slow it down. Dice icon for random, arrow buttons to navigate.

5.3 – Smooth: Adjusts transition smoothness between steps. Lower values produce sharp changes, higher values create fluid transitions. Visually represented in sequencer view.

5.4 – Rotate: Shifts the entire sequence by the number of steps defined. Press right arrow to shift left, left arrow to shift right.

5.5 – Number of Steps: Sets total steps in the sequence, from 1 to 128.

5.6 – Swing: Delays even-numbered steps for a swung, groove-oriented feel.

5.7 – Gate: Shortens step duration without changing sequence speed. Lower Gate values make steps tighter, shorter, and more percussive.

5.8 – Dry/Wet: Controls processed/clean signal blend. Duplicated at top of each lane for quick access.

5.9 – Global Random: Randomizes all parameters included in the Global Random engine.

5.10 – Random Sequence: Assigns a new random value to each step.

5.11 – Random Complexity: Defines pattern density when randomizing. Lower values produce simpler sequences, higher values generate busier results.

5.12 – Shuffle Sequence: Randomly reorders the sequence in blocks grouped by Shuffle Block Size.

5.13 – Shuffle Block Size: Block size in steps used for shuffling. 1 = shuffle individual steps; higher values shuffle larger chunks.

## Sequencer

5.17 – Reset: Resets the sequencer to its default state.

5.18 – Sequence: The slider-based sequencer modulates the selected effect per lane:
- Volume Lane: Min = fully attenuated, Max = 100% pass-through.
- Filter Lane: Each slider controls the Cutoff Frequency.
- Pan Lane: Top = right speaker, Bottom = left speaker.
- Bitcrusher Lane: Each slider defines bit reduction amount.

All effects can be configured to work within a customizable range. The sequencer displays a smooth curve showing step transitions (depending on Smooth value). When Gate is low, steps visually shorten. Modify steps by clicking and dragging with left or right mouse button.

5.19 – Sequence Range: Adjusts start and end points of the sequence loop. Drag edges to resize, drag center to move, double-click to reset.

5.16 – Steps Sequence Options: Opens popup with additional options:
- Reset: Resets sequencer to default.
- Apply Value to All Lanes / Apply to Lane X: Copies sequence to all or specific lane (no effect if destination is locked).
- Lock: Locks the sequence so it cannot be modified by other lanes, randomization, or preset changes.

## Editor Tools

5.20 – Editor Tool: Tools for editing the sequence using different curves, patterns, or free-form drawing:
- Free – Free draw: paint values freely
- Toggle – Switch steps between 0% and 100%
- Square – Alternating high/low block pattern
- Line – Straight linear ramp between two points
- Ease – Smooth ease-in/ease-out ramp
- Sine – Continuous sinusoidal wave
- Triangle – Linear up/down triangle wave
- Cosine In/Out – Smooth symmetric curve using cosine profile
- Arch – Bell-shaped hump centered in selected range
- Exp In – Exponential In: slow start, fast finish
- Exp Out – Exponential Out: fast start, slow finish
- Exp In/Out – Exponential In/Out: slow–fast–slow profile
- Smoothstep – Gentle S-curve transition
- Smootherstep – Extra-smooth S-curve with softer acceleration
- Power In – Concave ramp, stronger modulation near end
- Power Out – Convex ramp, stronger modulation near start
- Power In/Out – Symmetric concave-to-convex curve

5.21 – Grid: Toggles editor grid overlay. When enabled, drawing repeats the selected Editor Tool pattern across the sequence (except Free mode).
5.22 – Grid Steps: Defines how many steps each repetition of the pattern spans.

# Randomization and Locks

Global Random Engine: Each dice button can be included in or excluded from the global random engine. When the Global Random button (5.9) is pressed, only parameters whose dice have been added to the engine will be randomized. Dice belonging to the engine are indicated by a small dot below the icon. If lanes are linked, global random actions apply to all linked lanes simultaneously.

To add a parameter to the global random engine: right-click its dice button and select "Add to Global Randomization." A dot appears below the dice. To remove, right-click and select "Remove from Global Randomization."

Parameter Locks: When locked, a small lock icon appears. Locked parameters can only be changed manually. Preset changes, randomization, and lane links will not affect them. To lock: click the parameter and select Lock (or Unlock). Lock is available for numeric values, sliders, and sequences. Dice buttons cannot be locked. The sequence can be locked via the Sequence Options menu.

Other Parameter Options (right-click):
- Reset: Resets parameter to default.
- Apply Value to All Lanes / Apply to Lane X: Copies value to all or specific lane (no effect if destination is locked).
- Learn MIDI Assignment: Enables MIDI Learn mode. Assigns incoming MIDI CC to control that parameter. Remove via right-click → Remove MIDI Assignment.

# Bitcrusher Effect

Applies bit-depth reduction, making audio sound more digital, gritty, and low-fidelity. Operates within a range of 4 bits to 16 bits.

Sequencer behavior:
- Step/slider at bottom = no reduction (clean signal)
- Step/slider at top = maximum bit reduction defined by range settings

6.0 – Min Amount: Defines the minimum value a sequencer step can apply. Even at the bottom, effect will not go below this minimum.
6.1 – Max Amount: Defines the maximum value a sequencer step can reach. Even at the top, effect will not exceed this maximum.
6.3 – Reduction Indicator: Visual representation of how much bit reduction is being applied.
6.4 – Frequency Analyzer: Real-time spectrum of audio after all effects have been applied.

# Filter Effect

Shapes the tonal character of processed audio by attenuating or emphasizing specific frequency ranges. Novagrid includes 14 different filter types.

Sequencer behavior:
- Step/slider at bottom = cutoff at minimum defined by range settings
- Step/slider at top = cutoff at maximum defined by range settings

7.1 – Filter Type: Selects the filter type.
7.2 – Filter Parameters: Controls change depending on selected filter type.
7.3 – Min Range: Defines the minimum cutoff frequency the sequencer can reach.
7.4 – Max Range: Defines the maximum cutoff frequency the sequencer can reach.
7.5 – Frequency Analyzer and Curve: Real-time spectrum with active filter curve and dashed indicator line showing current step position.

## Filter Types and Characteristics

LowPass: Lets low frequencies pass while attenuating highs. Parameters: Q (resonance around cutoff), Range (sweep range).

HighPass: Lets high frequencies pass while removing lows. Parameters: Q (resonance at cutoff point), Range (how much low-end is removed).

BandPass: Isolates a band of frequencies around the cutoff. Parameters: Q (band width — higher = narrower), Range (center frequency movement).

Notch: Cuts a narrow band of frequencies while leaving lows and highs mostly intact. Parameters: Q (width of removed frequency band), Range (notch sweep range).

Peak: A bell-shaped EQ band that can boost or cut around the cutoff frequency. Parameters: Q (focus of the EQ band), Range (frequency area affected).

LowShelf: Boosts or reduces everything below the cutoff frequency. Parameters: Slope/Q (steepness of shelf transition), Shelf Gain (boost/reduce amount in dB), Range (frequency range of transition).

HighShelf: Boosts or reduces everything above the cutoff frequency. Parameters: Slope/Q (steepness of shelf transition), Shelf Gain (boost/reduce amount in dB), Range (frequency range of transition).

LadderLP12: 12 dB/oct low-pass ladder filter. Parameters: Reso (resonance), Drive (saturation before filter), Range (cutoff frequency sweep range).

LadderLP24: 24 dB/oct low-pass ladder filter. Parameters: Reso, Drive, Range.

LadderBP12: 12 dB/oct band-pass ladder response. Parameters: Reso (emphasis/width), Drive (saturation), Range (center frequency sweep range).

LadderBP24: 24 dB/oct band-pass ladder response. Parameters: Reso, Drive, Range.

LadderHP12: 12 dB/oct high-pass ladder filter. Parameters: Reso, Drive, Range.

LadderHP24: 24 dB/oct high-pass ladder filter. Parameters: Reso, Drive, Range.

Vowel: A formant filter that morphs between vowel shapes (A, E, I, O, U), creating vocal and expressive movement. Parameters: Gain (boosts vowel formant intensity), Q (sharpness/focus of formants), Range (morph range limiting vowel transition A–E–I–O–U).

# Volume Effect

Controls the amplitude of processed audio over time for rhythmic gating, dynamic movement, and volume-based modulation patterns.

Sequencer behavior:
- Step/slider at bottom = fully attenuated (silence)
- Step/slider at top = 100% volume (or maximum defined by range)

8.1 – Volume Min: Defines minimum volume level. Raising prevents full attenuation.
8.2 – Volume Max: Defines maximum volume level. Lowering limits maximum output.
8.3 – Volume Indicator: Visual representation of current volume level.
8.5 – Frequency Analyzer: Real-time spectrum after all effects applied.

# Pan Effect

Controls the stereo position of processed audio over time for rhythmic stereo movement and spatial modulation.

Sequencer behavior:
- Step/slider in center = audio centered in stereo field
- Step/slider moved up = pans toward right speaker
- Step/slider moved down = pans toward left speaker

9.1 – Pan Min: Defines maximum panning toward left speaker.
9.2 – Pan Max: Defines maximum panning toward right speaker.
9.3 – Pan Indicator: Visual representation of current stereo position.
9.5 – Frequency Analyzer: Real-time spectrum after all effects applied.

# Presets and Library

Each preset is stored as a unique file with the .mnwnv extension. When you save or import a preset, it is automatically stored in the preset folder defined in the Settings panel.

10.1 – Presets Location: The folder where presets are stored as .mnwnv files. Change at any time by clicking the path or folder icon.

## Save Preset

11.1 – Open Save Panel
11.2 – Close Save Panel
11.3 – Preset Name: Enter the name of the preset (mandatory to save).
11.4 – Author: Add the author's name.
11.5 – Description: Add a short description.
11.6 – Cancel: Cancels saving and closes the panel.
11.7 – Save: A preset name is required. If a preset with the same name exists, a popup asks whether to overwrite. Saved as .mnwnv file in the preset folder.

## Preset Browser

12.1 – Show Presets Panel: Reveals the Presets Browser.
12.2 – Random Preset: Loads a random preset.
12.3 – Favorite Preset: Marks/unmarks current preset as favorite.
12.4 – Previous / Next Preset: Navigate through preset list.
12.5 – Search Preset: Type to filter matching presets.
12.6 – Show Favorite Presets: When enabled, only favorites are displayed.
12.7 – Import Presets: Opens import dialog. Drag and drop individual presets or folders is also supported.
12.8 – Author List: Filter presets by author, or choose ALL.
12.9 – Preset List: Displays all presets with name and author. Trash icon to delete, heart icon for favorite, single-click for details, double-click to load.
12.10 – Preset Details: Shows name, author, and description of selected preset.
12.11 – Preset Right-Click Menu: Additional options (import, duplicate, rename, etc.).

# Expansion Panel

Download the latest preset packs from this panel. The list updates automatically when new packs become available. Internet connection required. Click Download to automatically download and copy presets to your presets folder, then access them from the library panel.

# Settings Panel

Provides access to Novagrid's global configuration options. The Standalone version includes additional controls for audio and MIDI I/O. The Plugin version relies on the host DAW for audio and MIDI routing.

13.1 – Presets Location: Defines the folder where presets are stored.
13.2 – Show Tooltips: When enabled, hovering over controls displays brief tooltip explanations. Can be disabled for a cleaner interface.

## Settings Panel (Standalone)

13.3 – Audio Device Type: Selects the audio driver (e.g., Windows Audio, ASIO, Core Audio).
13.4 – Output: Selects audio output device.
13.5 – Test Output: Plays a test signal to verify audio is working.
13.6 – Input: Selects audio input device.
13.7 – Active Output Channels: Enable or disable individual output channels.
13.8 – Sample Rate: Sets audio sample rate (higher = better quality, more CPU).
13.9 – Audio Buffer Size: Sets buffer size (smaller = lower latency, more CPU; larger = more stability, higher latency).
13.10 – Active MIDI Inputs: Select which MIDI input devices Novagrid listens to.
13.11 – MIDI Output: Selects MIDI output device.

# Support and Contact

For questions, issues, feedback, or feature requests: mario@marionietoworld.com / www.marionietoworld.com

Designed and developed by Mario Nieto.
Testers: Moobar, Frio Ventus, Chris Lentro, TheHuggMonster, Jumpercollins, Designerism, Simple3SimOn, Marcel Jacques, TheHubbinator.
