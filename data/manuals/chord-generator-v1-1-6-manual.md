---
id: chord-generator-v1-1-6-manual
title: "Chord Generator v1.1.6 Manual"
source: "Chord+Generator+1.1.6+Manual.pdf"
convertedAt: 2026-04-08T07:15:25.256Z
summary: "Chord Generator is a MIDI plugin (VST3/AU/AUv3) and standalone application for Windows and macOS that generates and manipulates chords in real time. It lets you build complex harmonic sequences with customizable parameters for each chord voice, including inversions, velocity, strumming delay, and note repetition. With features like retriggering, scale/mode filtering, randomization, and a 12-pad chord palette, it's designed for dynamic chord creation workflows routed to any instrument that accepts MIDI."
---

# Overview

Chord Generator is a versatile MIDI tool designed for creating and manipulating chords in real time. It allows users to generate complex harmonic sequences with customizable parameters for each chord and voice. With features like retriggering (where each incoming note generates a new chord variation), scale and mode selection, and advanced randomization options, it ensures dynamic and creative workflows. Chord Generator is a MIDI generator — the plugin version does not produce sound, so you will need to route it to an instrument such as a sampler, synthesizer, or any other device that accepts MIDI. Available as VST3, AU, AUv3, and Standalone for Windows and macOS. Designed and Developed by Mario Nieto.

# Installation and Setup

Available for macOS and Windows, functioning as an AU/VST3 plug-in and Standalone.

## System Requirements — macOS

macOS version 10.14 or higher. Intel Core i5 processor or higher (native Apple Silicon support). 4GB of RAM.

## System Requirements — Windows

Windows 10 or higher. Intel Core i5 processor or higher. 4GB of RAM.

## Activation and Licensing

After purchase you'll receive installers for Windows (.exe) and macOS (.pkg) and your license key by email. They're also available in your account at marionietoworld.com. Run the installer and follow the prompts. Open the plugin (or the standalone) the first time and enter your email and license key. Internet is required only for this initial activation. Each license can be active on up to 3 computers. Once activated, you can use the plugin offline on that device (no periodic check-ins). Go to marionietoworld.com/my-account → Licenses to view your activated computers and free a slot. You can also deactivate the license directly from Chord Generator by clicking on the logo inside the plugin.

## DAW Access and MIDI Routing

In your DAW, find 'Mario Nieto' under MIDI instruments to use Chord Generator. Chord Generator is a MIDI generator and the plug-in version does not produce sound, so you will need to route its MIDI output to an instrument such as a sampler, synthesizer, or any other device that accepts MIDI.

# Top Bar

The top bar contains the main application controls.

## Top Bar Controls

1.1 - Logo: Click to reveal the info panel.
1.2 - Reset: Click to restore Chord Generator to its default settings.
1.3 - Bypass: When active, all incoming MIDI signals pass through unaffected, effectively bypassing its processing. Equivalent to disabling the plugin.
1.4 - Show Sounds Panel (ONLY FOR STANDALONE): The Standalone version, in addition to generating MIDI, can also generate audio. Opens a panel where you can load your own sounds in WAV, AIFF, and MP3 formats. Includes controls for volume, sound start and end points, looping, and a volume envelope.
1.5 - Save Panel: Click to show Save Preset Panel.
1.6 - Preset Selector and Random Preset: Displays the loaded preset. Clicking opens the panel with the preset list. Arrow buttons load the next or previous preset. The 'random' button selects and loads a preset at random from all available ones.
1.7 - Show Presets Panel: Click to reveal the Presets List panel.
1.8 - Undo/Redo: Revert the previous action or redo the previously undone action.
1.9 - Show Look Editor Bar: Shows the look editing bar.
1.10 - Show Expansions Panel: Click to reveal Expansions Panel.
1.11 - Settings: Click to reveal the Settings panel.

# Look Editor Bar

Chord Generator lets you customize the interface colors to match your style. You can import and export looks as files (.mnLook), either by clicking the import button or simply dragging a look file onto the app. Looks created with Harmony Bloom are fully compatible with Chord Generator.

2.1 - Background Color Selector: Opens a window to select or type in hexadecimal the desired background color. Click the circular arrow to reset.
2.2 - Main Color Selector: Opens a window to select or type in hexadecimal the main color used for all non-background components (shapes, text, icons). Click the circular arrow to reset.
2.3 - Random Colors: Randomizes the colors of the interface.
2.4 - Export Look: Opens a dialog to export custom looks.
2.5 - Import Look: Opens a dialog to import custom looks (files with .mnLook extension). You can also import by drag and drop.
2.6 - Reset to Factory Colors: Loads the factory colors. This does not affect the default skin assignment.
2.7 - Set as Default Skin: Every time a new instance of Chord Generator is loaded, it will use the colors set as default.

# Main Area — Selected Chord Editor

Chord Generator is divided into 3 main areas: the Selected Chord Editor, the Chord Manager (Pad Sections), and the Global Controls.

Each chord has a type (major, minor, etc.) and is divided into voices. Each voice corresponds to a horizontal line where various aspects can be adjusted, such as octave, delay, velocity, or note repetition. There are six voices: five intervals of the chord and the bass note, which is the tonic one octave below, adding depth to the chord.

Chord Generator implements original algorithms for chord construction. Any harmonic transformations, voicings, or inversions are user-defined via custom voicing parameters, and are not based on predefined inversion selection systems.

## Chord Controls

3.0 - Global Random: Randomizes the selected chord as long as no section or voice has the lock active.
3.1 - Global Root Toggle: Enable to transpose all chords simultaneously by adjusting the root note. If you raise or lower the root, every chord shifts by the same interval.
3.2 - Root Note: Defines the root note of the chord, the tonic or 1st voice. The chord is built starting from this note. Accessible when Single Note Mode is not active.
3.3 - Gospel Mode: When activated, all voices are doubled one octave higher, resulting in a chord with twice the number of notes, creating a richer and fuller sound.
3.4 - Random Chord Type: Clicking selects a random chord type.
3.5 - Retrigger Chord Type: When active, each time the chord is triggered, a new type will be selected — each incoming note will trigger a different chord. You can limit which chords are selected via the popup by toggling items on or off. Right-click the chord selector (or press and hold on iPad) for 'ACTIVATE ALL RANDOM ITEMS' or 'DEACTIVATE ALL RANDOM ITEMS'.
3.6 - Chord Type: Select the type of chord to use. Currently 51 different types available.
3.7 - Map: The note to which the chord is mapped; the note that will trigger the chord. Accessible when Single Note Mode is not active.

## Voice Controls

4.0 - Pad Selected: Indicates which PAD is currently selected.
4.1 - Lock Voice: When active, no parameters of the voice can be manipulated, either manually or through randomization.
4.2 - Voice Active: Activate or deactivate a voice to determine whether it plays or not.

## Section Controls

5.0 - Random: Randomizes all voices in the section, as long as the voice or section is not locked.
5.1 - Retrigger: Each time Chord Generator receives a note and triggers a chord, a new variation of all voices in the section will be generated (unless locked).
5.2 - Link: Links all voice values to be identical; changes to one voice are copied to others in the section (unless locked).
5.3 - Reset: Resets all voice values in the section to their default state (unless locked).
5.4 - Lock Section: When active, the controls of the section will be locked, preventing any changes.

## Inversion (Transpose) Controls

6.0 - Transpose: Transposes the voice octave by +/- 12 semitones.
6.1 - Retrigger Bass Voice: When activated, the bass voice selects a different semitone randomly each time it is triggered.
6.2 - Bass Voice Transpose: Transposes the Bass Voice in semitones.

## Velocity Controls

7.0 - Random Range: Sets the range within which random velocity values will be generated.
7.1 - Velocity Slider: Controls the velocity of each voice.
7.2 - Link MIDI Channels: Links the MIDI output channels of all voices, so changing one affects all.
7.3 - MIDI Channel Out Selector: Assigns the MIDI channel through which the selected voice is sent.

## Strum (Delay) Controls

This section allows you to control the delay of each voice individually.

8.0 - Random Selector: Voice delays can be randomized in two ways. When active, randomization is based on the Strum Knob, creating a gradual progression between voices. When deactivated, randomization occurs independently for each voice.
8.1 - Strum Knob: Adjusts the delay of voices progressively. Positive values delay each voice slightly more than the previous one, starting from the bass note. Negative values (counterclockwise) create the opposite effect, delaying voices progressively from the fifth voice down to the bass note.
8.2 - Grid: Activating the grid adjusts delays to subdivisions based on your project's tempo.
8.3 - Random Range: Sets the range within which random delay values will be generated.
8.4 - Delay Slider: Controls the delay of each voice individually.

## Repeater Controls

This section controls note repetitions per voice. While a voice is being played, it will repeat at the speed you have selected.

9.0 - Global Repeater Active: Activates or deactivates the repeater for all voices.
9.1 - Repeater Voice Active: Activates or deactivates the repeater for a specific voice (Global Repeater must be enabled).
9.2 - Repeater Grid: Choose between quantized repetition (grid active, aligning to project grid) or freeform (adjustable speed in Hz).
9.3 - Random Voice Repeater: Randomizes the repetition value for the voice.
9.4 - Repetition Speed Control: Adjusts the repetition speed. If Grid is active, uses a dropdown menu. If grid is inactive, uses a slider control. Right-click to adjust randomization range.
9.5 - Cycle Indicator: Shows the current position within the repetition cycle.

You can limit the options included in randomization by enabling the arrows within the popup. When the Grid Repeater is not active, you can limit the randomization range by left-clicking on the control and adjusting the range.

# Pads Section

This section allows you to create your chord palette and assign it to the desired keys. Each pad corresponds to a different chord. When a pad is selected (indicated by a thicker outer line), it will be displayed in the Selected Chord Editor.

Multiple pads can be manipulated at once by right-clicking on an empty area of the UI, dragging to select the desired pads, and releasing. Pads can be clicked and dragged to export the chord directly as a MIDI file to your DAW or any other location. Pads can be copied to other pads by clicking and dragging them to the desired pad.

If a pad is empty (no chord assigned), clicking on it will assign the configuration from the Selected Chord Editor to the pad. Pads can be triggered either by incoming MIDI notes or by clicking on a pad with the mouse.

## Playback Modes

10.0 - Single Mode: There are two playback modes.

When Single Mode is off: Each PAD is triggered by the note it is mapped to and transposed to the root note. This allows up to 12 different chords to be triggered by different notes.

When Single Mode is active: Only the selected chord (or PAD) can be triggered. All keyboard notes will play the selected chord, transposing it based on the incoming note. The MAP and ROOT controls are not accessible in this mode.

10.1 - PAD Number: Each pad's assigned number.
10.2 - Root Note (shown with Single Mode active): The starting note from which the chord is generated.
10.3 - Map Note (shown with Single Mode active): The note that will trigger the chord.
10.4 - Chord Type: The chord type selected for the pad.

## Pad Management Controls

11.0 - Auto Generate Chords: Generates a new collection of chords, creating a new configuration for each pad. Does not modify the Map or Root Note; locked sections remain unaffected.
11.1 - Remove Pad: Deletes the selected pads. You can also drag pads onto this area to delete them.
11.2 - Play Pad When Selected: Plays the chord when a pad is selected. Turn off to select chords without triggering them.
11.3 - Select Pad From MIDI: Automatically selects a pad when it is triggered by a MIDI note.

# Global Controls

At the bottom of the interface, there are several global controls shared across all pads.

## Octave and Scale Controls

12.0 - Octave Transpose: Transposes all notes to the selected octave.
12.1 - Root Mode: Ensures all generated notes align with the chosen root note, maintaining musical cohesion and staying in key. Includes a Random button to select a random scale and a Retrigger option to generate a new scale variation with each triggered chord.
12.2 - Scale Selector: Select from up to 57 different musical scales or modes. Generated notes will adjust to fit within the selected scale. Includes a Random button and a Retrigger button (each triggered chord selects a new scale variation).
12.3 - Show Scale Editor: Shows or hides the keyboard to edit scales.
12.4 - Custom Scale Keyboard Selector: Adjust the scale as you prefer. Scales are the final filter — whatever Chord Generator generates, the scale will not let through notes that are not activated.

Keep on Preset Switch (available only in Scale Root and Scale Mode): When active, maintains the current parameter value when switching presets instead of adopting the value from the new preset. Right-clicking opens this popup.

## MIDI Capture and Export

12.5 - MIDI Capture: Capture and record MIDI sequences. For most versions, recording initiates only when the DAW is in play mode. In the Standalone version, recording starts immediately upon pressing the button.
12.6 - MIDI Export Button: Export captured MIDI sequences to a specific location on your device.
12.7 - DragDrop MIDI Export: Drag and drop MIDI sequences into a DAW or any desired location.
12.8 - Key Mapping Guide: Numbered squares on the keyboard displayed only when Single Mode is inactive. Each square corresponds to a pad and the key it is mapped to, providing a visual guide to see which keys trigger which pads.

## Preset Management

Save Panel:
12.0 - Save Panel: Click to open.
12.1 - Preset Name: Name the preset to save.
12.2 - Author: Add the author's name.
12.3 - Description: Add a description.
12.4 - Cancel: Cancels saving.
12.5 - Save: Saves the current state with the specified name, author, and description. Presets are saved as external files that can be exported and loaded into other instances.

Presets Library Panel:
13.0/13.1 - Show Presets Panel: Click to reveal the Presets List panel.
13.2 - Show Favorite Presets: When active, only presets marked as favorites are displayed.
13.3 - Search Preset: Filter presets by name.
13.4 - Import Presets: Opens a dialog to select and import presets. Supports drag and drop of folders or individual presets.
13.5 - Author List: Select an artist to filter presets, or choose ALL to display all.
13.6 - Preset List: Displays preset name and author. Delete with trash icon, favorite with heart icon. Single-click for details, double-click to load.
13.7 - Preset Details: Shows name, author, and description of the selected preset.
13.8 - Right-Click on Preset: Opens popup with options including importing, duplicating, renaming, and more.

Presets can also be loaded by dragging saved Chord Generator files and dropping them onto the UI.

# Expansion Panel

From this panel, you can download the latest preset packs. The list updates automatically — whenever a new pack becomes available, it will appear here. Internet connection required to download packs. Click Download and the presets will automatically be downloaded and copied to your presets folder, then accessible from the library panel.

# Sound Panel (Standalone Only)

The Standalone version includes a small sampler to load and play audio samples or use the built-in factory sound. Supports WAV, AIFF, and MP3 formats.

14.0 - Show Sounds Panel: Show or hide the sound panel.
14.1 - Activate/Deactivate Sounds Panel: Enables or disables the sampler.
14.2 - Start Sound/Loop: Adjusts the starting point of the sound and the beginning of the loop.
14.3 - End Sound/Loop: Adjusts the endpoint of the sound and the moment it loops back to the start.
14.4 - Waveform: Displays the waveform of the loaded sample. Drop a WAV, AIFF, or MP3 file onto this area to load it.
14.5 - Load Factory Sound: Loads the built-in factory sound.
14.6 - Load Sample Dialog: Opens a window to select and load a sample from your computer.
14.7 - Loop: Enables or disables looping (sound repeats while the chord is being generated).
14.8 - Amplitude Envelope: Adjusts attack, decay, sustain, and release of the sound.
14.9 - Volume: Controls the output volume.

# MIDI Mappings

Almost all parameters in Chord Generator can be mapped via MIDI CC. Right-click on a parameter, and a popup will appear with the option 'LEARN MIDI ASSIGNMENT.' Once clicked, the parameter will wait to receive a CC message. Press, move, or send a CC message from your MIDI controller, and the controller will be associated with the mapped parameter, allowing external control without the mouse.

## Settings

15.0 - Settings: Click to reveal the Settings panel.
15.1 - Audio Device (Standalone only): Selects the audio device to output the generated sound.
15.2 - MIDI Input Device (Standalone only): Selects the input devices through which Chord Generator will receive MIDI.
15.3 - MIDI Output (Standalone only): Specifies the device through which MIDI will be sent.
15.4 - Presets Location: Click on the folder or text to select a new location for presets. If you want existing presets to still appear, manually move them to the new location.
15.5 - Show Tooltips: When active, hovering over any control displays a description of the parameter.
15.6 - Check for Updates: Makes Chord Generator check for newer versions. Displays a panel to download or ignore if an update is available.
15.7 - Update Alerts Enabled/Disabled: When enabled, automatically checks for updates and displays a panel if a new version is available. When disabled, manual check required.
