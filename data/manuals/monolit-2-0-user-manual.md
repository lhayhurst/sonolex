---
id: monolit-2-0-user-manual
title: "MONOLIT 2.0 — User Manual"
source: "MONOLIT_2.0.0.pdf"
convertedAt: 2026-03-15T11:55:05.955Z
summary: "MONOLIT is a hardware MIDI controller and central control hub designed for studio and live performance. It features eight sliders, thirteen buttons, a built-in sequencer, LFO, motion recording, and an arpeggiator, all in a precision-machined aluminum enclosure. It connects to any DAW or MIDI hardware via USB-C, TRS MIDI Type-A, and USB Host, making it a versatile command center for complex MIDI setups."
---

# Overview

MONOLIT is a central control hub for a MIDI setup, combining programming, control, and performance in a single device. All core actions are performed directly from the hardware surface, without the need to constantly rely on menus or external devices. The device is designed so the same controls can serve different purposes depending on the task. Banks, sliders, and buttons are not locked to a single workflow and can be adapted to a specific setup, instrument, or working style. MONOLIT is built for long sessions and scalable projects. It works equally well for simple patterns and complex structures, in the studio and on stage, for precise programming as well as hands-on performance.

# Specifications

Enclosure: Precision-machined from a single piece of aluminum.
Dimensions and Weight: 230x72x15mm, 350g.
Screen: 128x64 multi-bright monochrome display with a clear pixel font.
Controls: Eight sliders and thirteen buttons for comprehensive control.
Banks: Eight banks. Each bank can operate either as a classic slider bank or as a dedicated sequencer track, with full per-bank customization.
Memory: Easily save, load, edit, and switch between presets.
Compatibility: Integrates seamlessly with any DAW or hardware that supports MIDI.
Connectivity: TRS MIDI Type A, USB-C, and USB Host (USB 2.0 Type-A) inputs.
Modes: Multiple operation modes including CC, LFO, Motion, Notes, Sequencer and Performance.

# Hardware Inputs and Outputs

MONOLIT features three connection ports: USB-C, TRS MIDI Type-A, and USB 2.0 Type-A.

## USB-C

The USB-C connection allows MONOLIT to interface with external devices sending MIDI messages directly over the USB-C cable.

## TRS MIDI Type-A

The TRS connection sends MIDI messages out from MONOLIT. This enables the device to function as a MIDI hub.

## USB 2.0 Type-A

Used for connecting USB MIDI controllers and gamepads. This provides flexible control options, allowing you to use devices that lack traditional MIDI ports. USB 2.0 ensures reliable performance, broad compatibility, and easy setup.

# User Interface

On the left side are eight slider-button pairs, the primary control surface for all parameters. On the right side, MONOLIT includes a display and five navigation buttons that handle all menu operations. The display shows parameter values, CC numbers, channels, modes, and all edit menus exactly as you adjust them. The interface is structured so that the left side is always the performance and control area, while the right side is the configuration area. Any time you edit a slider or button, its parameters appear on the display, along with available functions, ranges, and context-specific options. This separation allows you to perform with the sliders while navigating menus without interrupting the current state of the controls.

## Default State

On startup, MONOLIT assigns all eight sliders and eight buttons to CC mode (Control Change mode). In this mode, you can adjust parameters on your connected MIDI devices. The sliders can smoothly control values across the full range of MIDI values. The buttons, by default, switch between the minimum and maximum MIDI values (0 or 127). They are initially configured in momentary mode — when the button is pressed, it sends the maximum value. When it is released, MONOLIT sends the minimum value.

## Main Menu

In the main menu, navigation is handled using the buttons located below the screen. On the left are the cursor control buttons, followed by SHIFT, BANK, and ENTER.

BANK: Holding the BANK button lets you access eight banks for the selected preset. You can switch banks using the forward and backward arrows or the corresponding buttons beneath the sliders. A bank can operate in two modes: Slider and Sequencer. The mode is selected with the TYPE button that appears when holding the BANK button.

SHIFT: Holding the SHIFT button activates additional functions indicated on the screen. For example, you can copy slider settings. Holding SHIFT and pressing START activates the internal clock. Tapping TAP adjusts the BPM. Pressing PANIC while holding SHIFT stops all MIDI messages. In the Save menu, holding SHIFT allows you to delete a saved file. In the EDIT MENU, you can adjust parameter values by holding SHIFT and using the slider for the selected track.

Sub-menus: EDIT, SETTINGS, LOAD, SAVE, EXTERNAL DEVICE, GRID, GAMEPAD.

## Edit Menu

Edit mode allows you to adapt MONOLIT's behaviour to your needs. It can be highly customized. Enter the edit menu from the main menu using the buttons under the display. Here, you can change how each button and slider works. Once inside the edit menu, you can select the controllers to customize. Pressing a button located under a slider allows you to pair them for editing. To edit the parameter, press the rightmost button under the display or press shift to start changing the selected slider.

## Slider and Button Editing

The Edit menu has two sections: the first is dedicated to changing the behavior of a slider, and the second to changing the behavior of a button. The button's behavior depends on the selected slider mode. Currently, editing a button's behavior is only available in the slider's CC mode; in the other three modes, the button is preconfigured.

Use Shift in the Edit menu to copy and paste sliders. The entire slot is copied, including both the slider and its button. The button and slider cannot be copied separately.

# Modes

The first parameter in the editing menu is the mode. By changing this parameter, you can set up four different modes of behaviour for a selected slider and button:

• CTRL (CC, PBEND+, PBEND-, CHNL P, POLY AT)
• NOTES
• LFO
• MOTION

## CTRL Mode

CTRL mode lets you assign a specific MIDI message type to a control for direct and flexible parameter manipulation.

• CC — Standard Control Change for hardware/software parameters.
• PBEND+ — Positive Pitch Bend offset (increase pitch/value).
• PBEND- — Negative Pitch Bend offset (decrease pitch/value).
• CHNL P — Channel Pressure (mono aftertouch for the entire MIDI channel).
• POLY AT — Polyphonic Aftertouch (per-note aftertouch).

### CTRL Mode — CC Parameters

• CHANNEL — MIDI channel for messages.
• CC NUM — Control change number (0–127). A cross is displayed if the CC is already in use.
• MIN — Minimum value for sent MIDI messages.
• MAX — Maximum value for sent MIDI messages.
• EXT CC — Select a Control Change source that drives the current slider, either from within MONOLIT or from an external MIDI controller. Settings include external CC number and MIDI channel.
• TIME — Creates a time lag for changed slider values.
• RENAME — Name or change the selected slider. Default name includes MIDI channel and message type info. Navigation between characters via buttons, editing via sliders. Shift deletes characters. USB keyboard supported.

## CC Mode — Button Editing

In CC mode, a button can be assigned to different message types: CC, NOTE, PROGRAM, or BPM.

### Button: CC Parameters

• CHANNEL — MIDI channel for messages.
• MODE — MOMENT: sends high value when held, low on release. TOGGLE: switches between high and low values on press.
• CC NUM — Control change number (0–127). Cross displayed if CC is in use.
• CC STEPS — (TOGGLE mode only) Increases the number of steps for button output values. Maximum 10 steps, allowing MIDI values between min and max.
• MIN — Minimum value for sent MIDI messages.
• MAX — Maximum value for sent MIDI messages.
• INVERT — Inverts sent button values. In MOMENT mode, the default sent value becomes low; held sends high.

### Button: NOTE Parameters

• CHANNEL — MIDI channel for messages.
• MODE — Momentary or Toggle behavior.
• NOTE — Sets the MIDI note sent from the button. Cross displayed if note is in use.
• VELOCITY — Controls the dynamics of the MIDI note.
• RENAME — Name or rename the selected slider. USB keyboard supported.

### Button: PROGRAM Parameters

• CHANNEL — MIDI channel for messages.
• PROGRAM NUM — MIDI program number the button will switch controlled devices to.
You can assign up to three Program Change messages to a single button.

### Button: BPM Parameters

In BPM mode, a button has a single function: changing the BPM of the internal clock. For MIDI clock related settings, refer to the Settings menu.

## Notes Mode

The NOTES mode enables a slider to send MIDI notes once a specific section or point on the slider is reached.

Parameters:
• CHANNEL — MIDI channel for messages.
• TYPE — TRIG: sends a MIDI message once when the slider reaches a specific point. Adjustable trigger point and note length. GATE: holds the MIDI note while the slider remains within a range between defined points. Button sends Note Off for last played note.
• MARGIN — (TRIG only) Changes spacing between MIDI note points.
• LENGTH — (TRIG only) Changes length of triggered MIDI notes in milliseconds.
• VELOCITY — Strength/dynamics of triggered or held MIDI note.
• TIME — Creates a time lag for changed slider values. Can simulate sequencer behavior.
• STEPS — Number of MIDI note points on a slider (min 2, max 6).
• OFFSET — Creates offset for all MIDI notes in semitones.
• NOTE EDIT — Change the MIDI notes corresponding to steps. Navigate steps with leftmost button, edit with +/-. Hold shift and move slider for faster editing.
• RENAME — Name or rename the selected slider. USB keyboard supported.

Button cannot be edited in notes mode and is currently disabled. Future firmware updates will allow more flexibility.

## LFO (Low-Frequency Oscillator)

The LFO mode enables the usage of a slider as a low-frequency oscillator to modulate controlled parameters.

Parameters:
• CHANNEL — MIDI channel for messages.
• CC NUM — Control change number (0–127). Cross displayed if in use.
• MIN — Minimum value for sent MIDI messages.
• MAX — Maximum value for sent MIDI messages.
• STATE — Activates or deactivates the LFO by default. In performance mode, switch on the fly using the button under a slider.
• SYNC — Synchronize LFO speed with MONOLIT's internal or external MIDI clock.
• RATE — LFO speed in Hz. When Sync Rate is enabled, value is set in steps (musical divisions).
• DEPTH — LFO amplitude.
• WAVEFORM — Sine, Saw, Square, Random, Reversed Saw.
• POLARITY — POS: works in positive range from slider value upward. NEG: works in negative range from slider value downward. BOTH: centers modulation around slider value.
• EXT CC — Select a Control Change source from within MONOLIT or from an external MIDI controller.
• RENAME — Name or rename the selected slider. USB keyboard supported.

On the main screen, pressing the button toggles the LFO on or off. In edit mode, use Shift + Button to enable or disable the LFO.

### LFO Sync

The LFO SYNC function synchronizes LFO speed with MONOLIT's internal clock or an external MIDI clock. To activate the internal clock, press SHIFT + START on the main screen; to stop, press SHIFT + STOP. Enable synchronization via the SYNC parameter in the main LFO menu; if internal clock is selected, a menu appears to set BPM.

LFO Sync Parameters:
• RATE — Adjusts LFO speed in synchronized mode.
• BPM — Manually set BPM value when using internal synchronization.

## Motion Mode

Motion mode allows you to record the motion of a slider and play it back to create expressive automation of modulated parameters. Motion is recorded when the button is held and the slider is moved. Each slider in Motion mode has a maximum loop time of 10 seconds.

Parameters:
• CHANNEL — MIDI channel for messages.
• CC NUM — Control change number (0–127). Cross displayed if in use.
• MIN — Minimum value for sent MIDI messages.
• MAX — Maximum value for sent MIDI messages.
• PLAY MODE — ONE: plays recorded motion once. LOOP: loops the motion after recording.
• AUTOPLAY — Automatically plays back motion after recording.
• EXT CC — Select a Control Change source from within MONOLIT or from an external MIDI controller.
• RENAME — Name or rename the selected slider. USB keyboard supported.

Button activates or deactivates the recorded motion. Motion is recorded when the button is held and the slider is moved.

# Performance Mode (PERF)

Starting from version 2, each bank can operate either in Slider mode or Performance Mode. PERF MODE includes two main functions: the SEQUENCER and ASSIGN mode.

The main screen shows banks used as sequencer tracks as active squares, while banks marked with crosses are standard slider banks. If the selected bank is a sequencer track, it is shown as a bright square. Pressing the button toggles the track on and off (mute). The slider controls the track level (velocity).

Below, the track name is displayed along with the MIDI channel number. The currently selected bank is shown brighter, while non-selected banks appear dimmer.

To change a bank type, press the TYPE button when selecting a bank. An icon in the form of three pixel steps indicates the bank is a sequencer track. Banks and sequencer tracks can be copied and pasted by holding the Bank button.

SHIFT functions: START (starts clock and restarts all sequencer tracks from beginning), STOP (stops clock), TAP tempo, PANIC (all notes off). Holding Shift lets you control sliders defined in the ASSIGN menu. While holding Shift, pressing mute buttons sequentially prepares mute/unmute states for multiple tracks; releasing Shift switches all selected tracks simultaneously.

Note: The clock may start automatically when certain sliders are activated (e.g., LFOs synced to clock), which also starts the sequencer.

## Sequencer

The main sequencer screen displays the current state of the selected bank and provides full control over playback and track parameters.

Top line shows the note mode (e.g., NOTE C Chromatic = chromatic scale starting from C). Central area displays sequencer steps as horizontal markers — vertical position = pitch, presence/absence = active/inactive step. Dim dots below form a visual time grid. Indicator beneath notes shows current position.

Left side shows MIDI channel of selected bank. Bottom shows transport controls: PLAY, START, and navigation to VELOCITY, LENGTH, and TRACK SETTINGS screens. Right side shows DIV (step time division), BPM (global tempo), and page indicators (pages 1–4).

Notes can be edited using sliders, or by holding the button to adjust step by step with on-screen +/- controls. Notes can be copied and pasted via hold action. Entire pages can be copied by holding the page button.

The VELOCITY screen controls the dynamic level of each step using sliders. Higher positions = stronger velocity, lower = softer. Used for groove, accents, and feel.

The LENGTH screen defines note duration per step. Short values = tight, percussive notes. Longer values = overlap or sustain. Used for articulation and phrasing.

### Track Settings

The TRACK SETTINGS screen configures core parameters of the selected track.

• PAGE NUM — Number of pages for the track, determining total sequence length.
• CHANNEL — MIDI channel on which the track sends notes.
• SCALE — Musical scale used by the sequencer. Notes are constrained to the selected scale. Chromatic = no constraints.
• ROOT NOTE — Root note of the selected scale. Changing this transposes the sequence without altering step structure.
• DIVISION — Rhythmic resolution (1/4 to 1/32). Defines step density.
• TEMPO — Playback speed in BPM (global, affects all tracks on internal clock). External MIDI clock overrides this.
• TRANSPOSE — Shifts all notes up or down by semitones.
• SWING — Timing offset between steps for groove. Lower = straight, higher = shuffled/swung. Affects only timing.
• PROBABILITY — Chance that a step will be played. Lower = more skipped steps (generative variation), higher = more consistent.
• RANDOMIZER — Generates new note values without affecting step positions, velocity, or length. Works within selected scale and root note.
• RENAME — Change track name for organization.
• CLEAR NOTES — Removes all note values, preserving timing, velocity, and length.

### Sequencer Randomizer

RANDOMIZER adds pitch variation to an existing sequence without affecting rhythmic structure or performance dynamics.

Parameters:
• STATE — Enables or disables the randomizer.
• DISTANCE — How far randomized notes can move from original pitch.
• RANGE — Overall pitch range available for randomization.
• CHANCE — Probability that a note will be randomized.

## Assign

SLOT ASSIGN keeps access to sliders from different banks while working in the sequencer. Each slot can be assigned to a specific slider from any bank. These slots correspond to sliders shown on the PERF screen. While holding SHIFT, you can access and control assigned slots directly without switching banks. This allows tweaking multiple parameters across different banks in real time while the sequencer runs.

# Global Settings

The settings menu allows you to set up and reset MONOLIT.

• INIT PRESET — Resets MONOLIT to its default preset. Saved presets can be reloaded later. Useful for starting from scratch.

## System

• MERGE MODE — Smooths transitions between banks. When switching banks with different slider values, the parameter gradually adjusts to match the physical slider position, preventing abrupt jumps.
• SCREENSAVER — Activates after a set period of inactivity to extend display lifespan.
• STARTUP ANIMATION — Enables or disables startup animation. Disabling speeds up startup.
• UPDATE FIRMWARE — Activates UPDATE MODE, allowing MONOLIT to appear as an external drive for firmware updates.
• FORMAT MEMORY — Completely deletes all presets and resets device to factory settings. Make a backup beforehand to avoid data loss.

## MIDI Settings

• USB TO TRS — Enables MIDI messages to be sent and received via TRS connection. MIDI signals can be sent from a DAW to an external device through TRS MIDI output.

Clock settings:
• SOURCE — Selects clock source (internal or external).
• TEMPO — Adjusts BPM, available only when internal clock is active.
• SIGNATURE — Defines sequencer time signature (2/4 to 4/4). Affects clock restart and rhythmic cycle structure.
• BARS — Sets sequence length from 1 to 8 bars. Determines after how many bars the clock restarts and sequence loops.

## Update Firmware

Set MONOLIT to update mode and it will appear as an external drive on your computer. You can enter UPDATE MODE with MONOLIT turned off by holding the left black button while connecting the cable.

Firmware Update Steps:
1. Connect MONOLIT to computer via USB cable.
2. Navigate to SETTINGS > UPDATE FIRMWARE, or hold left black button while plugging in USB cable.
3. MONOLIT appears as an external drive.
4. In the root folder, delete the old .bin file, then upload the new firmware file.
5. MONOLIT automatically reboots to complete the update.

IMPORTANT: Delete the old firmware file before uploading the new one; failing to do so may cause system malfunction. If an error occurs and MONOLIT does not boot, enter update mode by holding the left black button while connecting the cable, then repeat all steps.

# Preset Manager

MONOLIT can store presets for saving and recalling complex configurations quickly. Each preset contains 8 banks, labeled alphabetically (A through H), which act as separate states within the selected preset.

## Naming Presets

Use interface buttons to navigate between characters and sliders to modify them. An external USB keyboard can be connected for faster input.

## Load

The LOAD function recalls a previously saved preset. Select the desired preset from the list to restore its settings.

## Save

The SAVE function stores the current state of MONOLIT as a preset, including all slider positions, button settings, and other configured parameters.

# Web Configurator

The web configurator is a tool for creating, editing, and managing MONOLIT configurations from a computer. All changes are applied in real time. Available via Google Chrome browser at https://monolit.jp/. Compatibility with other browsers is not guaranteed.

Features:
• Complete overview of all banks, sliders, and buttons in a structured layout.
• Each control can be configured in detail: operating mode, MIDI message type, channel, CC number, value ranges, behavior, and advanced functions (motion, LFO, external CC).
• Sliders and banks displayed side by side for easy comparison.
• C and P buttons for copy and paste.
• Chain icon (LINK) allows grouping multiple sliders within a bank for simultaneous editing.
• Parameters can be entered from keyboard or adjusted with mouse (click and drag).
• Configurations can be saved, renamed, and loaded.
• Export and import presets outside of MONOLIT for backups and sharing.
• Completed configurations are sent directly to MONOLIT for full synchronization.

Note: Not all MONOLIT functions can currently be edited through the web configurator. Capabilities continue to expand with updates.

# External MIDI Device

When an external MIDI device is connected to the USB 2.0 Type-A port, a small square pulses in the upper-left corner of the display indicating connection.

Parameters:
• CHANNEL — MIDI channel for messages. 'Don't change' passes through the incoming channel unchanged.
• TRANSPOSE — Shifts all MIDI notes by semitones.
• MODE — Selects the algorithm for interpreting incoming MIDI messages.

## MIDI Device Modes

• NONE — Passes through external MIDI messages without changes.
• SPLIT — Divides incoming MIDI notes into lower and upper layers, each assignable to different MIDI channels.
• KEY FOLLOW — Converts MIDI notes into CC messages. If MUTE NOTE is off, played notes also pass through.
• ARPEGGIATOR — Generates rhythmic patterns by cycling through held MIDI notes with scale selection and randomization options.

### Split Mode

SPLIT mode divides incoming MIDI notes into two layers: lower and upper. Each layer is assigned a range of MIDI notes routable to different MIDI channels, allowing control of two separate instruments simultaneously.

• SPLIT POINT — The note separating lower and upper ranges.

Lower layer:
• CHANNEL — MIDI channel for lower range.
• TRANSPOSE — Shifts lower range notes by semitones.

Upper layer:
• CHANNEL — MIDI channel for upper range.
• TRANSPOSE — Shifts upper range notes by semitones.

### Key Follow Mode

KEY FOLLOW transforms MIDI notes into Control Change (CC) messages for dynamic parameter control based on played notes. If MUTE NOTE is disabled, original MIDI notes pass through alongside generated CC messages.

Parameters:
• CC NUM — Control Change number (0–127). Cross displayed if in use.
• NOTE MIN — Minimum MIDI note in range to transform.
• NOTE MAX — Maximum MIDI note in range to transform.
• CC MIN — Minimum CC value for outgoing message.
• CC MAX — Maximum CC value for outgoing message.
• MUTE NOTE — Prevents MIDI notes from passing through.

### Arpeggiator

The ARPEGGIATOR generates rhythmic patterns by cycling through held MIDI notes in a defined order and tempo.

Parameters:
• STATE — Turns arpeggiator on/off.
• STYLE — Arpeggiation style:
  1. UP — Ascending melody
  2. DOWN — Descending melody
  3. UP DOWN — Ascend and descend without repeating highest/lowest notes
  4. UP AND DOWN — Ascend and descend with repetition of highest/lowest notes
  5. PINKY UP — Alternates between low notes and highest note, bottom to top
  6. PINKY UP DOWN — Same as Pinky Up but also returns top to bottom
  7. THUMB UP — Alternates between lowest note and higher notes, bottom to top
  8. THUMB UP DOWN — Same as Thumb Up but also returns top to bottom
  9. PLAY ORDER — Follows the play order of held MIDI notes
  10. CHORD — Repeating chords from held MIDI notes
  11. RANDOM — Randomly picked held MIDI notes
  12. RANDOM ONCE — Random order created once, then repeated

• SCALE — Scale quantization for arpeggios (with root note parameter for applicable scales):
  Major, Minor, Dorian, Mixolydian, Lydian, Phrygian, Locrian, Whole Tone, Half-Whole Diminished, Whole-Half Diminished, Minor Blues, Minor Pentatonic, Major Pentatonic, Harmonic Minor, Harmonic Major, Dorian #4, Phrygian Dominant, Melodic Minor, Lydian Augmented, Lydian Dominant, Super Locrian, 8-Tone Spanish, Bhairav, Hungarian Minor, Hirajoshi, In-Sen, Iwato, Kumoi, Pelog Selisir, Pelog Tembung

• ROOT — Root note for selected scale (when applicable).
• BPM — Tempo for arpeggiator.
• CLOCK MULTIPLIER — Multiple of arpeggiator relative to BPM in duplet/triplet note divisions.
• STEPS — Number of additional steps generated with chosen distance.
• DISTANCE — Shift value in semitones for additional steps relative to held MIDI notes.

#### Arpeggiator Randomizer

The RANDOMIZER introduces variation into generated arpeggiator melodies with random shifts quantized to the selected scale.

Parameters:
• STATE — Turns randomizer on/off.
• DISTANCE — Random shift amount in semitones.
• RANGE — Deviation in semitones of randomly shifted MIDI notes.
• CHANCE — Probability of randomization applied to a MIDI note.
• SIGN — Direction of randomizer shifts:
  1. ADD — Adds semitones to MIDI notes
  2. SUB — Subtracts semitones from MIDI notes
  3. BI — Shifts in both directions

# Gamepad

MONOLIT can automatically convert standard gamepad controls into MIDI messages. Connect a gamepad via USB to the USB 2.0 Type-A input. Most industry-standard gamepads are compatible. When connected and interacted with, a small G letter appears in the upper-left corner of the display.

Gamepad controls are divided into buttons and axes.

Button Parameters:
• STATE — Enables or disables a button.
• TYPE — NOTE or CC messages.
• CHANNEL — MIDI channel for messages.
• NOTE (NOTE type only) — MIDI note number.
• VELOCITY (NOTE type only) — Velocity of triggered MIDI note.
• MODE (CC type only) — MOMENT (high while held, low on release) or TOGGLE (toggles on each press).
• CC NUM — Control Change number (0–127).
• INVERT — Reverses button behavior.

Axis Parameters:
• STATE — Enables or disables an axis.
• CC NUM — Control Change number (0–127).
• CHANNEL — MIDI channel for messages.
• MIN — Minimum MIDI value.
• MAX — Maximum MIDI value.

# Grid Connection (Monome)

MONOLIT supports connecting the MONOME GRID via the USB 2.0 Type-A port. Currently functions as a MIDI keyboard with scale selection, similar to Ableton Push or LinnStrument key layout. This feature is experimental with plans for active development.

Parameters:
• CHANNEL — MIDI channel for messages.
• SCALE — Selects the scale for the GRID.
• KEY — Sets the root note of the selected scale.
• VELOCITY — Adjusts velocity of played notes.
• OFFSET — Shifts the selected scale or key up or down by semitones.

# Conclusion

MONOLIT is built to adapt to you, not the other way around. It integrates naturally into your setup and supports a fluid, focused creative process where control and experimentation coexist without friction. MONOLIT is a living instrument that continues to evolve over time. New functions and refinements may appear ahead of manual updates. For support, visit https://www.lightreft.jp
