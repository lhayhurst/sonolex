---
id: novagrid-v1-0-0-multi-lane-audio-modulation-sequencer-manual
title: "Novagrid v1.0.0 – Multi-Lane Audio Modulation Sequencer Manual"
source: "Novagrid+1.0.0+Manual.pdf"
convertedAt: 2026-04-08T10:53:19.082Z
summary: "Novagrid is a multi-lane audio modulation sequencer plugin (VST3/AU/Standalone) that reshapes incoming audio through four independent effect lanes: Volume, Pan, Filter (14 types), and Bitcrusher. Each lane has its own step sequencer, speed, and controls, letting you build complex rhythmic modulation patterns. The processing chain can be reordered via drag-and-drop, and powerful randomization and locking tools allow fast experimentation while preserving key settings."
---

# Concept Overview

Novagrid is built around three main concepts:

1. Lanes – Independent Modulation Engines: Four lanes, each dedicated to a specific audio effect (Volume, Pan, Filter with 14 types, Bitcrusher). Every lane contains its own step sequencer, speed, steps settings, range controls, randomization tools, locks, and editing tools. Each lane works independently, but they can also be linked to behave as a unified modulation system.

2. Sequencers – The Heart of Novagrid: Every effect is controlled by a slider-based step sequencer, which defines how the effect behaves over time. The sequencer determines things like how much the volume opens or closes, how far the sound pans left or right, how the filter cutoff moves, and how strong the bitcrushing becomes. Each sequencer is fully editable: you can draw curves, generate patterns, randomize steps, or sculpt shapes using the Editor Tools.

3. The Modulation Chain – Reorderable Processing: The four lanes are processed from left to right. You can reorder lanes via drag and drop to change the modulation chain and dramatically alter the result.

4. Randomization, Locks & Workflow: Includes local dice for quick variation, Global Random for controlled chaos, parameter locks to preserve key values, and linked lanes to randomize or edit multiple effects at once.

# Installation and Setup

Available for MacOS and Windows as AU/VST3 plug-in and Standalone.

MacOS Requirements:
- macOS 10.14 or higher
- Intel Core i5 processor / Native Apple Silicon support
- 4GB of RAM

Windows Requirements:
- Windows 10 or higher
- Intel Core i5 processor
- 4GB of RAM

Setup Steps:
1. Download – After purchase, receive installers (.exe for Windows, .pkg for macOS) and license key by email. Also available at marionietoworld.com.
2. Install – Run the installer and follow the prompts.
3. Activate – Open the plugin or standalone the first time, enter your email and license key. Internet required only for initial activation. Each license can be active on up to 3 computers.
4. Use Offline – Once activated, use the plugin offline (no periodic check-ins).
5. Manage & Deactivate – Go to marionietoworld.com/my-account → Licenses to view activated computers and free a slot. You can also deactivate directly from Novagrid by clicking the logo.

Access: In your DAW, find "Mario Nieto" under audio effects to load Novagrid. Novagrid is an audio processor and needs an audio signal to work. Insert it on any audio track, instrument track, or bus.

# Top Bar

The top bar contains the following controls:

1.1 – Novagrid Logo & About: Opens the About panel with version information, credits, and support resources.
1.2 – Reset / Initialize: Resets Novagrid. INIT ALL resets everything including parameter locks and Global Random entries. RESET restores all effect parameters except locked ones and keeps Global Random assignments.
1.3 – Bypass: When active, all incoming audio passes through unaffected, effectively bypassing processing.
1.4 – Random Preset: Loads a random preset from the preset list.
1.5 – Favorite Preset: Marks or unmarks the current preset as a favorite.
1.6 – Preset Name / Preset Browser: Displays the current preset name. Click to open the Preset Browser panel.
1.7 – Previous / Next Preset: Left arrow for previous preset, right arrow for next preset.
1.8 – Save Preset: Opens the Save Preset panel.
1.9 – Undo / Redo: Steps backward or forward through recent edits.
1.10 – Show Expansions Panel: Reveals the Expansions Panel.
1.11 – Color / Theme: Opens the Color panel for adjusting Novagrid's theme.
1.12 – Settings: Reveals the Settings panel.

# Look Editor Bar

To display the Look Editor Bar, click the brush icon at the top of the interface. Novagrid lets you customize the interface colors. You can import and export looks as .mnLook files. Looks created in Harmony Bloom and Chord Generator are fully compatible with Novagrid.

2.1 – Background Color Selector: Opens a color picker window; supports hexadecimal input. Right-click for Copy, Paste, or Reset options.
2.2 – Main Color Selector: Select the main color for foreground elements (shapes, text, icons, UI highlights). Right-click for Copy, Paste, or Reset.
2.3 – Undo / Redo Colors: Undo or redo color changes. Independent from the plugin's parameter undo/redo system.
2.4 – Random Colors: Randomizes interface colors with strong contrast between background and main colors.
2.5 – Export Look: Export current color theme as an .mnLook file (cross-compatible with Harmony Bloom and Chord Generator).
2.6 – Import Look: Import a custom .mnLook file. Supports drag and drop.
2.7 – Reset to Factory Colors: Restores original factory colors without affecting your saved default skin.
2.8 – Set as Default Skin: Saves current color configuration as default for all new instances.

# Lanes Overview

Novagrid includes four independent audio effects (Bitcrusher, Filter, Volume, Pan), each powered by its own sequencing engine. Effects are processed from left to right and can be freely reordered by dragging their tabs.

A lane will only process audio if:
- Its Power button is enabled
- The Dry/Wet control is set above 0%

If either is off, the lane remains inactive even while the sequencer runs.

## Lane Controls

3.1 – Effect Selector: Displays the lane name. Left-click to reveal parameters. Drag to reorder processing chain. Right-click for additional actions.
3.2 – Link Lane: When enabled, linked lanes share parameters. Manual changes are cloned exactly; randomization generates separate values per lane.
3.3 – Dry/Wet: Quick access to the lane's wet/dry balance without selecting the lane.
3.4 – Active Lane: Enables or disables the effect for the lane (bypass when inactive).

## Lane Context Menu

4.1 – Parameter Name: Displays the currently selected parameter.
4.2 – Reset: Resets all parameters in the lane except locked ones. Does not remove Global Random assignments.
4.3 – Init Lane: Fully initializes the lane (removes locks, clears Global Random assignments, resets all parameters).
4.4 – Copy Entire Lane All: Copies lane state to every other lane (respects locks).
4.5 – Copy Entire Lane to Filter Lane
4.6 – Copy Entire Lane to Pan Lane
4.7 – Copy Entire Lane to Bitcrusher Lane
4.8 – Move Lane Left: Moves the lane one position left in processing chain.
4.9 – Move Lane Right: Moves the lane one position right.
4.10 – Reset Lane Order: Restores factory processing order.
4.11 – Lock: Locks the entire lane, preventing external changes (presets, randomization). Manual adjustments still work.
4.13 – Learn MIDI Assignment: Enables MIDI Learn mode. Incoming MIDI CC is assigned to lane selection.

# Common Lane Controls

All lanes share these controls. Only the central effect-specific parameters differ per lane.

5.1 – Transport: Controls the sequencer's tempo and playback.
- Metronome Sync button: Syncs tempo with DAW; playback controlled by DAW transport.
- BPM display: Shows DAW tempo when synced; manual tempo when unsynced.
- Play/Pause button: Follows DAW when synced; independent when unsynced.
- Direction buttons: Forward (→), Ping-Pong (↔), Reverse (←).

5.2 – Division: Defines the duration of each step. Higher values (e.g., 1/128) create shorter steps (faster sequence); lower values (e.g., 1/16) create longer steps (slower). Dice icon for random, arrow buttons for next/previous.

5.3 – Smooth: Adjusts transition smoothness between steps. Lower = sharp/abrupt, higher = gentle/fluid. Visualized in the sequencer view.

5.4 – Rotate: Shifts the entire sequence by a set number of steps. Arrows rotate left or right.

5.5 – Number of Steps: Sets total steps from 1 to 128.

5.6 – Swing: Delays even-numbered steps for a groove feel.

5.7 – Gate: Shortens step duration without changing speed. Lower values = tighter, more percussive steps.

5.8 – Dry/Wet: Controls processed vs. clean signal blend. Duplicated at the top of each lane for quick access.

5.9 – Global Random: Randomizes all parameters included in the Global Random engine.

5.10 – Random Sequence: Assigns a new random value to each step.

5.11 – Random Complexity: Defines pattern density when randomizing. Lower = simpler, higher = busier.

5.12 – Shuffle Sequence: Randomly reorders the sequence in blocks.

5.13 – Shuffle Block Size: Block size in steps used for shuffling. 1 = individual steps; higher = larger chunks.

## Sequencer

5.17 – Reset: Resets the sequencer to its default state.

5.18 – Sequence: The slider-based sequencer modulates the selected effect per lane:
- Volume Lane: Min = fully attenuated, Max = 100% pass-through.
- Filter Lane: Each slider controls the Cutoff Frequency.
- Pan Lane: Top = right speaker, Bottom = left speaker.
- Bitcrusher Lane: Each slider defines bit reduction amount.

All effects can be configured with customizable min/max range. The sequencer displays a smooth curve showing step transitions. Gate value visually shortens steps. Modify steps by clicking and dragging with left or right mouse button.

5.19 – Sequence Range: Adjusts start and end points of the sequence loop. Drag edges to resize, drag center to move, double-click to reset.

5.16 – Steps Sequence Options: Opens a popup with additional options:
- Reset: Resets sequencer to default.
- Apply Value to All Lanes / Apply to Lane X: Copies sequence to other lanes (respects locks).
- Lock: Locks the sequence from modification by other lanes, randomization, or preset changes.

## Editor Tools

5.20 – Editor Tool: Tools for editing the sequence with different curves and patterns:
- Free: Free-hand drawing.
- Toggle: Switch steps between 0% and 100%.
- Square: Alternating high/low block pattern.
- Line: Straight linear ramp between two points.
- Ease: Smooth ease-in/ease-out ramp.
- Sine: Continuous sinusoidal wave.
- Triangle: Linear up/down triangle wave.
- Cosine In/Out: Smooth symmetric curve using cosine profile.
- Arch: Bell-shaped hump centered in selected range.
- Exp In: Exponential In (slow start, fast finish).
- Exp Out: Exponential Out (fast start, slow finish).
- Exp In/Out: Slow–fast–slow profile.
- Smoothstep: Gentle S-curve transition.
- Smootherstep: Extra-smooth S-curve with softer acceleration.
- Power In: Concave ramp, stronger modulation near end.
- Power Out: Convex ramp, stronger modulation near start.
- Power In/Out: Symmetric concave-to-convex curve.

5.21 – Grid: Toggles editor grid overlay. When enabled, drawing repeats the selected pattern across the sequence (except Free mode).

5.22 – Grid Steps: Defines how many steps each pattern repetition spans.

# Randomization and Locks

Global Random Engine: Each dice button can be included in or excluded from the global random engine. When the Global Random button (5.9) is pressed, only parameters whose dice have been added will be randomized. A small dot below the dice icon indicates inclusion. If lanes are linked, global random is applied to all linked lanes simultaneously.

Parameter Locks: When a parameter is locked, a small lock icon appears. Locked parameters can only be changed manually. Preset changes, randomization, and lane links will not affect locked parameters.

Adding to Global Random: Right-click a dice button and select "Add to Global Randomization." A dot appears below the dice. To remove, right-click again and select "Remove from Global Randomization."

Locking Parameters: Click on a parameter and select Lock (or Unlock). Not all parameters can be locked — locks are for numeric values, sliders, and the sequence. Dice buttons cannot be locked.

Other Parameter Options (right-click):
- Reset: Resets to default value.
- Apply Value to All Lanes / Apply to Lane X: Copies value to other lanes (respects locks).
- Learn MIDI Assignment: Enables MIDI Learn. To remove, right-click and select Remove MIDI Assignment.

# Bitcrusher Effect

The Bitcrusher effect applies bit-depth reduction, making audio sound more digital, gritty, and low-fidelity. Operates within a range of 4 bits to 16 bits.

Sequencer behavior:
- Step/slider at the bottom: No reduction (clean signal).
- Step/slider at the top: Maximum bit reduction defined by range settings.

Controls:
6.0 – Min Amount: Defines the minimum value a sequencer step can apply.
6.1 – Max Amount: Defines the maximum value a sequencer step can reach.
6.3 – Reduction Indicator: Visual representation of current bit reduction.
6.4 – Frequency Analyzer: Real-time spectrum display after all effects.

# Filter Effect

The Filter effect shapes tonal character by attenuating or emphasizing specific frequency ranges. Novagrid includes 14 different filter types. The filter operates within a customizable frequency range.

Sequencer behavior:
- Step/slider at the bottom: Cutoff at minimum value.
- Step/slider at the top: Cutoff at maximum value.

Controls:
7.1 – Filter Type: Select from 14 filter modes.
7.2 – Filter Parameters: Vary depending on selected filter type.
7.3 – Min Range: Minimum cutoff frequency the sequencer can reach.
7.4 – Max Range: Maximum cutoff frequency the sequencer can reach.
7.5 – Frequency Analyzer and Curve: Real-time spectrum with filter curve and dashed indicator line showing current step position.

## Filter Types

LowPass: Lets low frequencies pass while attenuating highs. Parameters: Q (resonance), Range (sweep range).

HighPass: Lets high frequencies pass while removing lows. Parameters: Q (resonance), Range (low-end removal amount).

BandPass: Isolates a band of frequencies around the cutoff. Parameters: Q (band width, higher = narrower), Range (center frequency movement).

Notch: Cuts a narrow band of frequencies while leaving lows and highs mostly intact. Parameters: Q (width of removed band), Range (notch sweep range).

Peak: Bell-shaped EQ band that can boost or cut around the cutoff frequency. Parameters: Q (focus of EQ band), Range (frequency area affected).

LowShelf: Boosts or reduces everything below the cutoff. Parameters: Slope/Q (steepness of shelf transition), Shelf Gain (boost/cut in dB), Range (frequency range of transition).

HighShelf: Boosts or reduces everything above the cutoff. Parameters: Slope/Q (steepness of shelf transition), Shelf Gain (boost/cut in dB), Range (frequency range of transition).

LadderLP12: 12 dB/oct low-pass ladder filter. Parameters: Reso (resonance), Drive (saturation before filter), Range (cutoff frequency sweep range).

LadderLP24: 24 dB/oct low-pass ladder filter. Parameters: Reso, Drive, Range.

LadderBP12: 12 dB/oct band-pass ladder response. Parameters: Reso (emphasis/width), Drive (saturation), Range (center frequency sweep).

LadderBP24: 24 dB/oct band-pass ladder response. Parameters: Reso, Drive, Range.

LadderHP12: 12 dB/oct high-pass ladder filter. Parameters: Reso, Drive, Range.

LadderHP24: 24 dB/oct high-pass ladder filter. Parameters: Reso, Drive, Range.

Vowel: Formant filter that morphs between vowel shapes (A, E, I, O, U). Parameters: Gain (formant intensity), Q (sharpness/focus of formants), Range (morph range A–E–I–O–U).

# Volume Effect

Controls the amplitude of processed audio over time for rhythmic gating, dynamic movement, and volume-based modulation.

Sequencer behavior:
- Step/slider at the bottom: Fully attenuated (silence).
- Step/slider at the top: 100% volume (or maximum defined by range).

Controls:
8.1 – Volume Min: Minimum volume level. Raising prevents full attenuation.
8.2 – Volume Max: Maximum volume level. Lowering limits maximum output.
8.3 – Volume Indicator: Visual representation of current modulated volume.
8.5 – Frequency Analyzer: Real-time spectrum after all effects.

# Pan Effect

Controls the stereo position of processed audio over time for rhythmic stereo movement and spatial modulation.

Sequencer behavior:
- Step/slider in center: Audio remains centered.
- Step/slider moved up: Sound pans right.
- Step/slider moved down: Sound pans left.

Controls:
9.1 – Pan Min: Maximum panning toward left speaker.
9.2 – Pan Max: Maximum panning toward right speaker.
9.3 – Pan Indicator: Visual representation of current stereo position.
9.5 – Frequency Analyzer: Real-time spectrum after all effects.

# Presets and Library

Each preset is stored as a .mnwnv file. When saved or imported, presets are stored in the folder defined in Settings.

10.1 – Presets Location: Folder where .mnwnv preset files are stored. Change by clicking the path or folder icon.

## Save Preset

11.1 – Open Save Panel
11.2 – Close Save Panel
11.3 – Preset Name: Enter the preset name (mandatory to save).
11.4 – Author: Add the author's name.
11.5 – Description: Add a short description.
11.6 – Cancel: Cancels saving.
11.7 – Save: Saves the preset. If a preset with the same name exists, a popup asks whether to overwrite.

## Preset Browser

Provides organized access to all factory and user presets.

12.1 – Show Presets Panel
12.2 – Random Preset: Loads a random preset.
12.3 – Favorite Preset: Marks/unmarks current preset as favorite.
12.4 – Previous / Next Preset
12.5 – Search Preset: Filter by name.
12.6 – Show Favorite Presets: Display only favorites.
12.7 – Import Presets: Import via dialog or drag and drop (individual presets or folders).
12.8 – Author List: Filter presets by author.
12.9 – Preset List: Shows all presets with name and author. Trash icon to delete, heart icon to favorite, single-click for details, double-click to load.
12.10 – Preset Details: Shows name, author, and description of selected preset.
12.11 – Preset Right-Click Menu: Import, duplicate, rename, and more.

# Expansion Panel

Download the latest preset packs from this panel. The list updates automatically when new packs are available. Requires internet connection. Click Download to automatically download and copy presets to your presets folder.

# Settings Panel

Provides access to global configuration options. The Standalone version includes additional audio and MIDI I/O controls. The Plugin version delegates audio and MIDI routing to the host DAW.

Shared Settings:
13.1 – Presets Location: Defines the folder where presets are stored.
13.2 – Show Tooltips: When enabled, hovering over controls displays brief tooltips.

Standalone-Only Settings:
13.3 – Audio Device Type: Selects audio driver (e.g., Windows Audio, ASIO, Core Audio).
13.4 – Output: Selects audio output device.
13.5 – Test Output: Plays a test signal to verify audio.
13.6 – Input: Selects audio input device.
13.7 – Active Output Channels: Enable/disable individual output channels.
13.8 – Sample Rate: Sets audio sample rate. Higher values increase quality but require more CPU.
13.9 – Audio Buffer Size: Sets buffer size. Smaller = lower latency but more CPU; larger = more stability but higher latency.
13.10 – Active MIDI Inputs: Select which MIDI input devices Novagrid listens to.
13.11 – MIDI Output: Selects MIDI output device.

# Support and Contact

For questions, issues, feedback, or feature requests, contact:
Email: mario@marionietoworld.com
Website: www.marionietoworld.com

Designed and Developed by Mario Nieto.
Testers: Moobar, Frio Ventus, Chris Lentro, TheHuggMonster, Jumpercollins, Designerism, Simple3SimOn, Marcel Jacques, TheHubbinator.
