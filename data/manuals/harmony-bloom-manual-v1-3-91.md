---
id: harmony-bloom-manual-v1-3-91
title: "Harmony Bloom Manual v1.3.91"
source: "Harmony+Bloom+Manual+1.3.91.pdf"
convertedAt: 2026-04-08T10:47:22.157Z
summary: "Harmony Bloom is a MIDI generator plugin (VST3/AU/AUv3) and standalone application for Windows, macOS, and iOS, designed by Mario Nieto. It merges polyrhythmic patterns with immersive visuals to create dynamic MIDI sequences that can be routed to any instrument or device that accepts MIDI. The plugin offers up to 82 notes per sequence, 57 musical scales, 8 trigger bars with independent MIDI channel routing, note collections for harmony, probability-based note triggering, and extensive visual customization."
---

# Installation and Setup (Desktop)

Harmony Bloom is a MIDI generator. The plug-in version does not produce sound, so you will need to route it to an instrument such as a sampler, synthesizer, or any other device that accepts MIDI. Available for macOS and Windows as an AU/VST3 plug-in and Standalone. In your DAW, find 'Mario Nieto' under MIDI instruments to use Harmony Bloom.

## System Requirements

macOS: Version 10.13 or higher, Intel Core i5 processor (Native Apple Silicon support), 4GB of RAM.

Windows: Windows 10 or higher, Intel Core i5 processor, 4GB of RAM.

An internet connection is required for license activation (not required for iPadOS version).

## Licensing and Activation

After purchase you'll receive installers for Windows (.exe) and macOS (.pkg) and your license key by email. They're also available in your account at marionietoworld.com.

1. Run the installer and follow the prompts.
2. Open the plugin (or the standalone) the first time → enter your email and license key.
3. Internet is required only for this initial activation.
4. Each license can be active on up to 3 computers.
5. Once activated, you can use the plugin offline on that device (no periodic check-ins).
6. Go to marionietoworld.com/my-account → Licenses to view your activated computers and free a slot.
7. You can also deactivate the license directly from Harmony Bloom by clicking on the logo inside the plugin.

# Top Bar

1.1 - Logo: Click to reveal the info panel.
1.2 - Reset: Click to restore Harmony Bloom to its default settings.
1.3 - Show Sounds Panel (ONLY FOR STANDALONE): The Standalone version, in addition to MIDI, can generate audio. By pressing this button, a panel will open where it is possible to choose from 5 sounds.
1.4 - Bypass: When active, all incoming MIDI signals pass through Harmony Bloom unaffected, effectively bypassing its processing. It's equivalent to disabling the plugin.
1.5 - Save Panel: Click to show Save Preset Panel.
1.6 - Preset Selector and Random Preset: The loaded preset is displayed here. Clicking on this area will open the panel with the preset list. The arrow buttons allow you to load the next or previous preset from the list. The 'random' button will select and load a preset at random from all available ones.
1.7 - Show Presets Panel: Click to reveal the Presets List panel.
1.8 - Undo/Redo: Revert the previous action or redo the previously undone action.
1.9 - Show Look Editor Bar: Shows the look editing bar.
1.10 - Show Expansions Panel: Click to reveal Expansions Panel.
1.11 - Settings: Click to reveal the Settings panel.

# Look Editor Bar

2.1 - Background Color Selector: Opens a window to select or type in hexadecimal the desired background color. Click the circular arrow to reset.
2.2 - Main Color Selector: Opens a window to select or type in hexadecimal the main color used in all non-background components such as shapes, text, icons. Click the circular arrow to reset.
2.3 - Center Notes Color Selector: Opens a window to select or type in hexadecimal the central color for notes, lines, and orbits. This is the start of the gradient up to the Outer Notes color. Click the circular arrow to reset.
2.4 - Outer Notes Color Selector: Opens a window to select or type in hexadecimal the outer color for notes, lines, and orbits. This is the outer end of the gradient from Center Notes. Click the circular arrow to reset.
2.5 - Random Colors: Randomizes the colors of the interface. Colors can be excluded/included from randomization by right-clicking on the color and selecting 'IGNORE RANDOM COLOUR ACTION' or 'ENABLE RANDOM COLOUR ACTION'.
2.6 - Export Look: Opens a dialog to export custom looks.
2.7 - Import Look: Opens a dialog to import custom looks (files with .hblook extension). You can also import by drag and drop onto Harmony Bloom.
2.8 - Reset to Factory Colors: Loads the factory colors. This does not affect the default skin assignment.
2.9 - Set as Default Skin: Sets the current colors as the default, so every new instance of Harmony Bloom will use these colors.
2.10 - Activate Spectator Mode: Hides all interface elements associated with sequence editing, leaving only the sequencer visible for distraction-free viewing.

# Main Controls

3.1 - Use Input Notes: Enable this feature to have the sequencer adaptively use incoming notes in sequence instead of the pre-defined note collection. When active, any notes input will directly influence the note sequence.
3.2 - Note Collections: Defines the Harmony Bloom sound. Collections have predefined intervals for harmony, including chords, scales, or meticulously selected intervals. Press the dice to select one at random.
3.3 - Global Random: Randomize permitted parameters. Right-click a parameter and choose 'ADD TO GLOBAL RANDOMIZATION' to allow, or 'REMOVE FROM GLOBAL RANDOMIZATION' to exclude it from randomization.
3.4 - Root Mode: Filters the notes to align them with the chosen root note. Ensures generated notes are always in the right key for musical cohesion.
3.5 - Scale Selector: Choose from up to 57 different musical scales or modes. The generated notes will adjust to fit within the selected scale.
3.6 - Show Scale Editor: Shows or hides the keyboard to edit the scales.
3.7 - Custom Scale Keyboard Selector: Adjust the scale used as you prefer. Scales are the final filter — Harmony Bloom will not let through notes that are not activated on this keyboard.

## Timing and Offset Controls

3.9 - Speed Offset: Controls the timing between notes. Values from 0.0 to 1.0 progressively speed up notes from center outward; values from 0.0 to -1.0 slow down notes from center outward.
3.10 - Quantized Offset: Set the distance between notes in a quantized, equidistant manner. For example, selecting 3 plays notes at 3 equal timepoints. Press dice to randomize.
3.11 - Free Offset: Adjust the distance between notes freely with complete control. Unlike Quantized Offset, this gives complete freedom. Press dice to randomize.
3.12 - Even Offset: Delays even notes, useful for creating swing patterns or exploring new rhythmic patterns.
3.13 - Global Offset: Allows shifting the entire sequence together.

IMPORTANT: All offsets are added together. If you want to work with just one grid subdivision, set the Q.Offset to 1/1, turn on the grid, and adjust the grid division as you wish.

## Sequence Parameters

3.14 - Number of Notes: Select the number of notes for generating new sequences; up to 82 notes. Press dice to randomize.
3.15 - Notes Duration: The duration of each note in seconds until it stops sounding. Use dice for random duration.
3.16 - Loop Length: The total duration or number of beats for the notes to complete a full loop. Press dice to randomize.
3.17 - Probability: Triggers notes according to a specified probability percentage. 0% means no chance of notes being triggered; 100% ensures notes will always trigger.
3.18 - BPM and Metronome: When the metronome is active, Harmony Bloom syncs with the DAW's tempo. The number displays the DAW's tempo when the Metronome is on and can be set manually when it's off.
3.19 - Sequencer Visualizer: View notes and their trigger points. Each note connects with a line to the next, forming intricate patterns and shapes.
3.20 - Trigger Bars: The sequencer has 8 points that can be activated or deactivated. Click on the circles surrounding the sequencer to toggle a trigger bar. When activated, a note will be triggered once it reaches the activated bar.
3.21 - Octave Transpose: Transposes all notes to the selected octave.
3.22 - Grid Active: When enabled, the F.Offset, E.Offset, and G.Offset are quantized according to the Quantize Division settings. Note: Quantization timing is linked to the sequence trigger. For optimal alignment, start the sequence within the project grid.
3.23 - Grid Division: Adjust this to define the subdivisions used for quantizing offsets. Determines rhythmic precision and spacing.
3.24 - Clear Pattern Toggle: When active, pressing pattern buttons will clear the patterns instead of loading them.
3.25 - Pattern: Clicking the pattern button stores or loads the current state for quick access. Patterns are saved with the preset. When Clear Pattern Toggle is active, clicking any pattern will delete it. Deleted patterns cannot be recovered.
3.26 - Quantize Note Duration: When active, note duration is measured relative to the loop and quantized instead of in seconds. For example, if set to 1/1, a triggered note will be held for the entire cycle.

# Bottom Area

4.0 - Link Play With Transport DAW: When active, Play/Pause will be automatically controlled by the DAW.
4.1 - Play/Pause: Play or pause the sequence. When 'Keyboard Mode' and 'Link Play With Transport DAW' are not active, you can set the sequence to play or pause by clicking this button. When either is active, this button won't be manually accessible.
4.2 - Invert Direction: Change the direction in which the notes spin.
4.3 - Keyboard Mode: Determines the sequence's root note based on incoming MIDI signals. Play and pause are controlled by incoming MIDI notes, bypassing manual button control. The sequence's root note aligns with the incoming note.
4.4 - Retrigger: When active, the sequence's position will reset upon specific triggers. If 'Keyboard Mode' is active, the sequence resets upon receiving a MIDI note on event. If 'Keyboard Mode' is not active, the sequence resets when pressing the play button.
4.5 - Minimum Note: The lowest pitch in the sequence and the starting point for note generation. When 'Keyboard Mode' is on, this value automatically adjusts to the incoming MIDI note.
4.6 - Link Range Notes: When active, the distance between the minimum and maximum notes will always remain constant.
4.7 - Maximum Note: The highest pitch in the sequence. Works with Minimum Note to determine the tonal range.
4.8 - Random Velocity: Toggle for natural velocity variation. Randomly assigns velocities between V.MIN and V.MAX for expressive performances.
4.9 - Minimum Velocity: Adjust the minimum playable velocity for notes, creating a floor for how soft notes can be.
4.10 - Maximum Velocity: Set the maximum velocity limit. When Random Velocity is not active and Keyboard Mode is active, V.MIN and V.MAX act as a limiter for velocity input. When both are inactive, V.MAX defines the trigger velocity.
4.11 - MIDI Capture: Capture and record MIDI sequences. For most versions, recording initiates only when the DAW is in play mode. In Standalone, recording starts immediately upon pressing the button.
4.12 - MIDI Export Button: Export captured MIDI sequences to a specific location on your device.
4.13 - Drag & Drop MIDI Export: Drag and drop MIDI sequences into a DAW or any desired location.
4.14 - Keyboard: Incorporated keyboard to directly trigger sequences from the UI.

# Spectator Mode

Spectator mode hides all interface elements associated with sequence editing, leaving only the sequencer visible for distraction-free immersion.

To show or hide: Open the color editing bar (click brush in top bar), then activate/deactivate Spectator mode. In Spectator mode, you can hide the editing bar by clicking the brush in the top right corner.

The following buttons are visible only if at least one note is selected or pin is on:

5.0 - Activate Selected Notes: Activates the selected notes.
5.1 - Deactivate Selected Notes: Deactivates selected notes so they will not sound when reaching a trigger bar.
5.2 - Toggle State of Selected Notes: Inactive notes become active and active notes become inactive.
5.3 - Randomize Active State of Selected Notes: Randomizes the active/inactive state of selected notes.
5.4 - Select or Deselect All Notes: Selects all notes if none are selected, or deselects all if some are selected.
5.5 - Reset All Notes: All notes become active.
5.6 - Pin Toggle: Allows the note control buttons to remain visible even when no notes are selected.

Notes can be selected by clicking and dragging across an area or by individually clicking. Hold Shift to include additional notes in the selection.

# Extra Features - Parameter Context Menu

Right-click (or hold-down on iOS) on a parameter to access:

- Reset Value: Resets the parameter to its default or initial value.
- Learn MIDI Assignment: Map the parameter to a MIDI controller (CC). Select this and move a control on your MIDI keyboard or control surface to link that physical control to the software parameter.
- Add to Global Randomization: Adds the parameter to the set that will be randomized when global randomization is activated.
- Keep on Preset Switch (No Active/Active): Maintains the current value of the parameter when switching to another preset, rather than adopting the new preset's value.

# Settings

7.0 - MIDI Out Active (STANDALONE ONLY): Activate the MIDI output.
7.1 - MIDI Output (STANDALONE ONLY): Select the device through which MIDI will be output.
7.2 - Trigger Bar MIDI Channel Mapping: Trigger Bars can be mapped to different independent MIDI channels. Additionally, it is possible to select the octave for each trigger bar independently. IMPORTANT: Not all DAWs can handle internal multi-channel MIDI routing. Ableton cannot do this on Desktop. The same applies to some DAWs for iPadOS.
7.3 - Audio Device (STANDALONE ONLY): Select the audio device that will output generated sound.
7.4 - MIDI Input Device (STANDALONE ONLY): Select the inputs through which Harmony Bloom will receive MIDI.
7.5 - Show Notes: Display note sequences in the sequencer for visual tracking.
7.6 - Show Lines: Show or hide lines connecting notes in the sequencer.
7.7 - Show Orbits: Show or hide orbits.
7.8 - Show Tooltips: Show or hide tooltips when hovering over parameters.
7.9 - Presets Location: Click to select a new location for presets. Existing presets must be manually moved to appear in the new location.
7.10 - Check for Updates: Manually check if a newer version is available.
7.11 - Update Alerts Enable/Disabled: When active, automatically checks for newer versions.
7.12 - Trigger Bars Active: When activated, a note will be triggered once it reaches the activated bar.
7.13 - Trigger Bar MIDI Channel: Select the channel through which MIDI will be sent by each trigger bar.
7.14 - Trigger Bar Octave Transpose: Transpose the octave of the note triggered by each trigger bar by the selected number of semitones. Each option has an icon that when activated includes it in random selection.
7.15 - Toggle Random Octave Mode: When active, each note triggered by a bar will be played in a randomly selected octave.

# Saving Presets

12.0 - Save Panel: Click to open the Save Preset Panel.
12.1 - Preset Name: Use this field to name the preset.
12.2 - Author: Use this field to add the author's name.
12.3 - Description: Use this field to add a description.
12.4 - Cancel: Cancels the preset saving process.
12.5 - Save: Saves the current state with the specified name, author, and description. Presets are saved as external files that can be exported and loaded into other instances of Harmony Bloom.

## Preset Library

Once presets are saved, you can access them from the Library Panel. Presets can also be loaded by dragging saved Harmony Bloom files and dropping them onto the UI.

13.0/13.1 - Show Presets Panel: Click to reveal the Presets List panel.
13.2 - Show Favorite Presets: When active, only presets marked as favorites are displayed.
13.3 - Search Preset: Enter a preset name to filter the list.
13.4 - Import Presets: Opens a dialog to select and import presets. You can also drag and drop a folder or individual presets onto Harmony Bloom.
13.5 - Author List: Select an artist to filter presets by creator, or choose ALL to display all presets.
13.6 - Preset List: Displays preset name and author. Delete with trash icon, favorite with heart icon. Single-click for details, double-click to load.
13.7 - Preset Details: Displays selected preset name, author, and description.
13.8 - Right-Click on Preset: Opens a popup with options including importing, duplicating, renaming, and more.

# Expansion Panel

From this panel, you can download the latest preset packs. The list updates automatically — whenever a new pack becomes available, it will appear here. An internet connection is required to download packs. To download a pack, click Download and the presets will automatically be downloaded and copied to your presets folder. After that, access them from the library panel.
