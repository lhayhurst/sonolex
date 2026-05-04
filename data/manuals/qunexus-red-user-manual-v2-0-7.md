---
id: qunexus-red-user-manual-v2-0-7
title: "QuNexus RED - User Manual v2.0.7"
source: "QuNexus_RED_Manual_V2-1.pdf"
convertedAt: 2026-03-15T10:43:55.514Z
summary: "The QuNexus RED is a compact 25-key MPE keyboard controller by Keith McMillen Instruments, featuring a built-in three-track arpeggiator and step sequencer. Its pressure-sensitive keys detect velocity, polyphonic aftertouch, and per-key tilt for highly expressive performances. It connects via USB, 5-pin DIN MIDI, and control voltage (CV) outputs, making it a versatile hub for controlling software instruments, hardware synths, and modular Eurorack systems."
---

# Features Overview

The QuNexus is a compact composition tool for home or mobile studios, with a highly nuanced keyboard and a powerful sequencer.

## Keyboard Expression

The QuNexus keys capture Pitch, Velocity, Pressure, and Tilt (aka slide, or Y-Axis). These dimensions of expression can be sent as MIDI messages and control voltages.

Notes: QuNexus can send Pitch and Velocity as MIDI Note-On/Off messages, as well as Gate and Control Voltages compatible with analog and modular synthesizers.

Control Data: QuNexus can send key Pressure and Tilt using Pitch Bend, Aftertouch, Poly-Aftertouch, and Control Changes. It can do this globally (averaging all active keys) or polyphonically (using Poly-Aftertouch or MPE). Global Tilt and Pressure can also be sent as Control Voltages.

## Control, Composition, and Jamming

The QuNexus arpeggiator and sequencer features three tracks that can control various MIDI and analog instruments. Each track can be routed to a combination of USB, 5-Pin DIN MIDI (using the expander port), and CV outputs. By switching between tracks, you can quickly change which instrument you are controlling with the keyboard or arpeggiator, and each track has its own 32 step sequencer that can record and play back your performance.

## MPE Compatible

The QuNexus is fully MPE compatible out of the box, with an included MPE factory preset.

MPE (MIDI Polyphonic Expression) allows a keyboard to have pitch bend, modulation, and aftertouch controls for each individual key, usually by moving your finger on the key up/down or left/right (X and Y-axis), and pressing the key harder or softer (Z-axis).

MPE works by assigning each voice its own MIDI channel, then sending Pitch Bend, Channel Aftertouch, and CC74 messages on that channel. The MPE factory preset (Preset C) defaults to Tilt as CC74, and Pressure as Channel Aftertouch.

Fun Fact: When QuNexus was first released in 2012, it had a feature called "Channel Rotation", which used conventions later adopted by the MIDI Organization as MPE in 2018.

# QuNexus Hardware

QuNexus is a class compliant USB device that does not require a driver or software to function. It provides a QuNexus Editor application (Mac and Windows) for further customization.

## Connecting QuNexus

To a computer: Use the included USB cable to connect the QuNexus USB port to a computer's USB port. QuNexus receives power from the computer.

To an iPad: Requires the iPad Camera Connection Kit (sold by Apple). It is recommended to supply power via the Camera Connection Kit power supply or a KMI USB Y-cable.

To MIDI hardware with MIDI Out Adapter Cable: Plug the cable into the MIDI Expander port, connect the 5-pin MIDI connector to your device. Power must be supplied via the QuNexus USB port.

To MIDI hardware with MIDI Expander (sold separately): Connect QuNexus Mini port to the Expander's USB "Expand" port using a USB A-to-Mini cable. Connect MIDI Out on the Expander to MIDI In on a synth. Connect power supply to the Expander's USB "Power" port.

To Eurorack/CV devices: Can be powered by computer/iPad, KMI MIDI Expander, or USB Power Supply. Use cables compatible with your CV device's ports, connecting to the stereo 1/8in CV out ports on the QuNexus.

## Input/Output Routing

QuNexus can output USB MIDI, 5-pin DIN MIDI, and Control Voltage information. Each data type can be routed to one or both of the other data types.

### USB

QuNexus is connected and powered using the USB port on the left side. It is a class compliant USB device requiring no special driver.

QuNexus communicates via 3 virtual MIDI ports:
- Port 1: Main port for sending/receiving MIDI data to/from computer or iPad
- Port 2: Used for the expander port
- Port 3: Used for CV

LEDs can be controlled by sending MIDI data into the QuNexus on Port 1.

### MIDI Expander Port

The QuNexus has a USB mini "Expander" port that breaks out to 5-pin DIN MIDI, either with the MIDI Out cable (included with QuNexus RED) or with the KMI MIDI Expander (sold separately). The QuNexus sends and receives MIDI messages through the MIDI Expander.

### CV

QuNexus can control modular synthesizers and other CV devices using Control Voltages.

#### CV Cable Connections

There are 2 CV output ports on the left side and 1 CV input port on the right side.

Outputs: Two output ports use stereo 1/8" TRS connectors providing 4 outputs: a Gate Output and three 16-bit CV Outputs. Output voltages range from 0 to 5V.

Output CV Port 1:
- Tip: CV 1
- Ring: Gate

Output CV Port 2:
- Tip: CV 3
- Ring: CV 2

Inputs: The input port uses a TRRS connector to access both CV Inputs and 5V Power for an expression pedal. CV In is uni-polar; bi-polar signals will be half-clipped. Signals above 5V are unsupported.

Input CV Port 1:
- Tip: CV 1
- 1st Ring: 5V out for expression pedal power
- 2nd Ring: CV 2

#### CV Cable Kit

Optional accessory with all cables and adapters needed for CV connections.

CV INPUT cables:
- 1 right angle 3.5mm stereo plug to 1/4" stereo jack (for expression pedal)
- 1 3.5mm stereo plug to 1/4" mono jack (for sustain pedal)
- 1 3.5mm TRRS plug to dual 3.5mm stereo jacks

CV OUTPUT cables:
- 1 3.5mm stereo plug to dual 3.5mm mono plugs (splits Gate and CV1)
- 1 3.5mm stereo plug to dual 3.5mm mono plugs (splits CV2 and CV3)

Note: Connecting a mono (TS) cable to the Gate/CV1 port will disable the gate out. Connecting a mono (TS) cable to the CV2/CV3 port will disable CV2 out. Any standard 1/8" stereo to dual L/R mono breakout cable will work.

#### CV Data

Output: The QuNexus Gate and CV outs can output signals from USB3/Expander MIDI and the keyboard/sequencer tracks. Supported sources: Clock, Pitch Bend, Control Changes, Channel Aftertouch, Note On/Off (gate and pitch), Velocity, Tilt, and Pressure.

Default routings for factory preset A (Basic 2.0):
- Gate: Track 1 - Note Ons and Offs (Note Ons = 5V)
- CV1: Track 1 - Note Pitch
- CV2: Track 2 - Note Ons and Offs (Note Ons = 5V)
- CV3: Track 2 - Note Pitch

Input: QuNexus receives data from 2 CV inputs and converts them to MIDI messages:
- CV1: CC#112
- CV2: CC#113

This data is sent on Channel 2 to USB Port 3 and the MIDI Expander.

Warning: CV inputs can only accept signals from 0 to 5V. Signals outside this range will be clipped, and negative signals will interfere with key scanning. Establish a ground connection between your synth and QuNexus before patching CV inputs.

## QuNexus Function Buttons

The function buttons on the left side are used to select presets and change playing behavior: OCT +/-, BEND, SHIFT/PRESET, HOLD A, VELO B, PRES C, and TILT D.

### The OCT +/- Buttons

Two triangular buttons that increment/decrement the keyboard octave (Keyboard Layer only). Default range: C2 (note 48) to C4 (note 72). QuNexus treats C3 as note 60 (Middle C). Total range: 7 octaves (C0-C7).

LED behavior indicates the current octave: both LEDs solid = original octave (base note C2). LEDs flash faster as you move further from the original octave.

### The BEND Pad

Located in the bottom left corner, acts similarly to a pitch bend wheel. Press left and right to bend the pitch up and down.

### The SHIFT/PRESET Button

Used to select Presets and access the "Shift" menu. QuNexus can store 4 presets.

To load a preset: Tap SHIFT/PRESET, then press A, B, C, or D.
To save a preset: Tap SHIFT/PRESET, then hold A, B, C, or D for 3+ seconds.

Note: Loading a preset will stop sequencer playback and clear all arpeggiators and sequence patterns.

### HOLD A, VELO B, PRES C, & TILT D

Toggle functions that change playing behavior (press and hold to toggle):

- HOLD A: Turns Toggle Mode on/off for notes in Keyboard Layer, and turns Hold on/off for the arpeggiator. Uses Toggle or Legato depending on preset settings.
- VELO B: Toggles velocity response on/off. Lit = velocity on; dark = all notes velocity 127.
- PRES C: Toggles Pressure source on/off for Keyboard Layer control.
- TILT D: Toggles Tilt source on/off for Keyboard Layer control.

## Smart Sensor Keys

QuNexus keys detect three dimensions of expression:

- Velocity (Notes only): Value 0-127 representing overall pressure at the moment of Note On detection. Adjustable via QuNexus Editor.
- Pressure: Continuous values 0-127 representing applied finger pressure.
- Tilt: Continuous values 0-127 representing Y-axis tilt of the keys.

## Expression Pedal

When an expression pedal is plugged into the CV input, expression pedal data is converted to MIDI CC#112 or CC#113 on Channel 2, range 0-127. Behavior can be changed via the QuNexus Editor. Recommended pedal: Roland EV-5.

## Controlling LEDs

LEDs are controlled by sending MIDI Notes through USB Port 1. Notes 48 (C2) to 72 (C4) control the keyboard LEDs. Notes outside that range wrap around. Channel 1 is the default LED input channel (editable via QuNexus Editor).

# Tracks, Sequencer and Arpeggiator

The QuNexus functions as a 3-track sequencer and arpeggiator. Each track can control different instruments, arpeggiate, and play step patterns up to 32 steps in length. Everything flows from the keyboard through the Tracks to USB, MIDI, CV and Gate outputs.

Track 1 is the default active track. Tracks can be assigned their own MIDI channels, and Track 1 can be set to MPE with 1-13 member channels. Each track can be set to either Arpeggiate or Step Sequence, synchronized to the system transport.

## System Transport - Playback, Synchronization and Clock

Controlled by Play, Stop, and Record keys via shift menus. System clock is based on 24 pulse per quarter note (ppqn) metronome. Internal clock range: 5 to 255 bpm.

A track's clock division determines arpeggiator/sequencer speed. Track Arp/Seq can be 1 to 32 steps, all quantized to the clock division.

## Shift Menu

All QuNexus 2.0 functions are in the "shift" menu, accessed by holding down the preset/shift button and pressing function keys. Available functions are lit up at half or full brightness; enabled options are at full brightness. Release the shift key to exit and return to keyboard playing.

## Number Keys and Parameter Values

Many functions allow numeric value adjustment displayed on the 1234567890 numeric keys: ones digit is solid, tens digit blinks slowly, hundreds digit blinks fast. Values can be incremented/decremented using left/right arrows (Octave +/- buttons) or selected using numeric keys.

## Understanding Tracks

Three tracks that can arpeggiate keyboard input or record/playback step sequence patterns. Each track can have its own MIDI channel, be routed to USB and/or Expander MIDI outputs, and have independent lengths and time divisions.

Divisions range from whole notes to 32nd notes, with dotted or triplet options (except 32nd notes cannot be dotted). You can program a 32 whole note bass pattern on one track while a second plays 32nd notes and you perform live on a third track.

### Selecting and Muting Tracks

Hold shift and press/release "Track". Select track 1-3 using numeric keys (fully lit = active, dim = unselected). Mute/unmute by holding the corresponding numeric key for 3+ seconds (muted LEDs blink, unmuted remain solid).

### Assigning MIDI Channels to Tracks

Hold shift and press "MPE/CH". Current channel displayed on numeric keys, adjustable with left/right arrows.

### Assigning Program Changes to Tracks

Program changes can be assigned to each track using the QuNexus Editor. These are sent to each track MIDI channel when a preset is recalled.

### Track Transposition

Each track has its own Transpose value. Range: -48 to 48 semitones.

### Enabling MPE on Track 1

QuNexus can be used as a single zone MPE controller with channel 1 as manager channel and default 13 member channels. Global pitch bend is sent on the manager channel; polyphonic messages on member channels with key tilt as CC74 (Y) and key pressure as channel aftertouch (Z).

To enable: Hold shift, press MPE/CH, press MPE/CH again until it blinks. Numeric keys display member channel count, adjustable with left/right arrows. Press MPE/CH again to disable MPE.

Only Track 1 can use MPE. When enabled, it occupies MIDI channel 1 plus the number of member channels. Example: Preset C has MPE with 13 member channels (channels 1-14), track 2 on channel 15, track 3 on channel 16. Tracks 2 and 3 automatically change to channels 15 and 16 if they overlap the MPE zone.

### USB and Expander MIDI Routing

To assign the current track's MIDI output to USB and/or Expander ports: Hold shift and press "Track", then while still holding shift, press MPE/CH. Numeric keys 1 (USB) and 2 (Expander) will blink (enabled) or be half brightness (disabled), press to toggle.

### CV and Gate Output Routing

Route the current track's MIDI messages to CV and Gate outputs. Hold shift and press/release "CV".

GATE: While holding shift, press "Gate" to enable/disable (blinks when enabled).

CV: While holding shift, select a CV output using number keys. When blinking, select a source:
- Hold/A = Note Pitch
- Velo/B = Note Velocity
- Pres/C = Key Pressure
- Tilt/D = Key Tilt
- Bend = Global Pitch Bend
- Gate = Note Gate On/Off
- Tempo = Clock (24ppqn)

## Arpeggiator

To enable a track's arpeggiator: Hold shift and press/release "Arp". The arpeggiator only plays when the system transport is playing (hold shift and press/release play).

### Arpeggiator Hold Modes

Three hold modes:

1. Standard (default): Play several notes simultaneously, let go, and they continue playing. Playing different notes clears previously held notes. While holding one initial note, you can add/subtract other notes.

2. Toggle: Notes can be toggled on/off without holding any keys. Held notes are not cleared by pressing new notes.

3. Modulation Edit: Modify Velocity, Pressure, and Tilt values of held notes. Play a held note again at new velocity to change it. Hold a note to change pressure/tilt, then press "HOLD" to lock values.

To enable hold: Long-press "Hold" until it lights up. To cycle between modes: Enable hold, then while holding shift, tap ARP (solid = Standard, slow blink = Toggle, fast blink = Modulation Edit).

Clearing: Press/release HOLD button. Switching from Arp to Sequencer clears current pattern. Loading a preset clears all held notes.

### Arpeggiator Playback Patterns

Hold shift, press/release "Pattern", then select using numeric keys 1-10:

1. UP
2. DOWN
3. UP/DOWN (exclusive)
4. UP/DOWN (inclusive)
5. PLAY ORDER (forward)
6. PLAY ORDER (reverse)
7. PLAY ORDER (pendulum, exclusive)
8. PLAY ORDER (pendulum, inclusive)
9. RANDOM
10. BROWNIAN MOTION (drunk)

### Arp/Sequencer Octave Range

Range: 1-4 octaves. Increase/decrease by pressing shift then using octave -/+ keys. The + key LED: solid = 1 octave, slow blink = 2, fast blink = 3, very fast blink = 4. Also works in Step Sequencer mode.

## Sequencer

The step sequencer allows recording and playback of step patterns up to 32 steps in length.

### Entering Steps

To turn on step sequencer: Hold shift, press "Sequence". While still holding shift, press "Rec" then release shift. You are now in Step Input record mode. Each note played is entered sequentially into the step pattern.

### Entering Rests, Ties, Slurs, and Deleting Steps

Rest: Hold Shift, press/release "9/Rest" key.
Undo last note: Hold Shift, press "9/Reset" key for 3+ seconds.
Tie: Hold Shift, press/release "10/Tie" key (duplicates last note and ties them).
Tie/Slur (Legato): Hold Shift, press "10/Tie" for 3+ seconds (flags last note as tied to next note without duplicating, sets gate time to 100%, similar to classic 303 style step sequencing).

### Playing, Stopping and Clearing Sequences

Play: Hold Shift, press/release "Play". Repeating during playback synchronizes all tracks at start positions on next downbeat.
Stop: Hold Shift, press "Stop/Clear".
Clear: Hold Shift, press "Stop/Clear" for 3+ seconds.

### Step Sequencer Overdub Input

While a track is playing, overdub record by holding Shift and pressing "Rec". If track was empty, length is set to 16 and synchronized. Notes held longer than the step division period are automatically tied. Erase notes during overdub by holding shift and pressing/holding "9/Rest".

### Adjusting Sequence Pattern Length

Hold Shift and press/release "Length". The A/B/C/D buttons represent 8 steps each of the 32-step pattern as "links" in the chain. They light up to show sequence length and blink to show which link is playing. Select a link with A/B/C/D keys, change length with numeric keys 1-8.

Holding A/B/C/D or numeric keys 1-8 for 3+ seconds copies the current pattern to fill new space.

Examples:
- 16 steps: Press/release B, then press/release 8
- 12 steps: Press/release B, then press/release 4
- 2 steps: Press/release A, then press/release 2

### Playback Patterns (Sequencer)

By default, step sequencer plays patterns in entered order. The same playback patterns available in the Arpeggiator can be selected using the same method (see Arpeggiator Playback Patterns).

### Loading and Saving Patterns

After recording, save/recall patterns using "Pattern Load/Save" menu: Hold Shift, then hold "Pattern" for 3+ seconds. Numeric keys 1-8 light up (dim), most recently selected pattern at full brightness.

Load: Press/release numeric 1-8 key. Updates pattern length.
Save: Hold numeric 1-8 key for 3+ seconds.

Note: During playback, you can only save to slots 1-4, and only once until playback stops (hardware memory limitation). Saving/loading also saves/recalls length.

### Adjusting Tempo

Hold Shift, press "Tempo". Current tempo displayed on numeric keys, adjustable between 5-255 BPM using left/right arrows. Tap tempo available using the "Tempo" key (requires four consistent taps within +/- 10% accuracy).

### Setting Clock Sources

Hold Shift, press Tempo once, then press Tempo again for 3+ seconds to enter Clock Sources menu. Use octave left/right to switch between Clock Sources (left) and Clock Destinations (right).

Sources:
- Auto: Press the Tempo key
- Internal Clock: Press the Seq key
- CV 1&2: Press the CV key
- USB1: Press MPE/CH then numeric 1
- Expander: Press MPE/CH then numeric 2

### Setting Clock Destinations

From the Clock Sources menu, press right octave (+) key to select Clock Destinations.

Destinations:
- USB1: Press MPE/CH then number 1
- Expander: Press MPE/CH then number 2
- Gate: Press the GATE key
- Gate PPQN Adjust Menu: Press and hold GATE for 3+ seconds

Default gate output: 1 PPQN. Gate PPQN options: 1, 2, 3, and 24 PPQN.

By default, Start/Stop and MIDI Clock is sent out to USB and Expander MIDI ports at 24 PPQN during playback.

### Setting Track Clock Division

Hold Shift, press/release "Div/Split", then select note division:

1. Whole Notes (four quarter notes)
2. Half Notes (two quarter notes)
3. Quarter Notes
4. Eighth Notes
5. Sixteenth Notes
6. 32nd Notes
7. Dot - current division + 50%
8. Triplet - three notes in the space of two

Changes happen on the next clock pulse. Synchronize all three Track Clock pulses during playback by holding Shift and press/releasing "Play".

### Gate Off Percentage

The length of time a note plays before turning off, expressed as a percentage (e.g., 100% = full duration, 50% = half duration). To adjust: Hold Shift, press/release "Gate", select percentage using numeric keypads.

### Transposition

Global: Hold Shift, press "XPOSE". Current transposition displayed on keyboard LEDs. Press the desired key to transpose.

Per-track: Hold Shift, press/release "TRACK", then press/release "XPOSE".

Range: -48 to +48 semitones. Octave +/- keys increase/decrease by 12 semitones at a time. LED indicators: solid = none, slow blink = 1 octave, fast blink = 2 octaves, very fast blink = 3 octaves.

### Enabling and Disabling LEDs

Disable: Hold Shift, long press left octave (-) key for 3+ seconds.
Enable: Hold Shift, long press right octave (+) key for 3+ seconds.

# QuNexus Editor Software

The QuNexus Editor allows you to create customized Presets and load them onto QuNexus.

## System Requirements

MAC:
- Intel or M1 Processor 2.3GHz or greater
- Mac OS 10.13 or later
- 50MB free hard disk space

WINDOWS:
- Windows 10 or greater
- Intel Core 2 processor or greater

## Installing the Software

Download from: http://www.keithmcmillen.com/QuNexus/downloads/

Mac: Double-click .dmg, drag QuNexus directory into Applications.
Windows: Extract .zip, place folder at desired location. Do not move items out of the directory.

## Updating the Firmware

The Editor checks firmware compatibility on launch and prompts for updates if needed. Blue Shift button flashing and on-screen progress bar indicate update in progress. Force update via Hardware menu > "Update Firmware".

## Syncing the QuNexus and Editor

When connected, a Sync Method window appears:

- Editor to QuNexus: Sends current editor preset to the QuNexus.
- QuNexus to Editor: Loads QuNexus hardware settings, overwriting current editor settings.
- QuNexus to Editor (new): Loads QuNexus hardware settings as a new editor preset.

Note: If transport is playing, sending a full preset will stop playback.

## Main Window Overview

Create and save custom controller mappings using Keyboard, Controller, and CV Layers. Bottom of window: Keyboard Sensitivity Settings (On Threshold, Off Threshold, Global, Tilt, Pressure). Tabs: Keyboard Layer, Sequencer/Arpeggiator, Controller Layer, CV Layer, Settings. Preset management tools on the right side.

## Preset Management

Select Presets by double clicking in the Library (highlighted RED). Unsaved changes shown with orange name and asterisk. Revert or Save buttons to discard/keep changes.

Delete and Save As buttons to add/remove presets. Copy a preset by double-clicking then clicking Save As.

Send presets to QuNexus using the four "Send Preset to..." buttons (A, B, C, D slots). Unsaved changes must be saved before sending.

Import/Export presets via File Menu for backup or sharing.

## Menu Bar

Contains File, Edit, Hardware, and Help menus.

### File Menu

Duplicates New, Save, Delete, and Revert Preset functions with keyboard shortcuts. Import/Export Presets and Import Factory Presets available.

### Edit Menu

Copy/Paste functions including:
- Copy/Paste Controller Sensor (individual keys in Controller Layer)
- Copy/Paste Layer submenu (copy entire Controller, Keyboard, or CV Layers between Presets)

### Hardware Menu

Contains items affecting firmware, LEDs, and sensor adjustment.

#### Update Firmware

Forces a firmware reload. If already up to date, reloads the same firmware.

#### Load Preset

Loads a preset (Slot A, B, C, or D) on your QuNexus.

#### LED Refresh Mode

Three modes:
- Normal: LEDs behave normally, responding to Remote LED messages.
- Control Only: Only Side Button LEDs light up. Keyboard LEDs don't respond to touch or Remote LED Control.
- All Off: No LEDs light. Keyboard LEDs don't respond to Remote LED Control.

LEDs still function normally in Preset Select and Live Edit Modes. Settings save with current preset. Factory presets use Normal mode.

#### Per Key Sensitivity

Adjust sensitivity of each key individually via Hardware > Per Key Sensitivities. Sliders adjust sensor gain per key. Adjustments are added to Keyboard Layer sensitivity settings (neither overrides the other). "Reset All Keys" returns all to center. Settings are global (not per-preset) and sent to QuNexus in real time.

Note: Adjusting per-key sensitivities will stop playback if transport is playing.

#### CV Trims

Adjust pitch of CV outs to compensate for out-of-tune synthesizers. Allows tuning adjustment for each pitch scaling mode. Increasing Trim/offset raises pitch; decreasing lowers it. Settings are global (not per-preset) and sent in real time.

Note: Adjusting CV Trims will stop playback if transport is playing.

#### Tables

View and create tables for sensor response curves. Options: Linear, Logarithmic, Sine, Cosine, Exponential, Invert, and two user-defined tables (Custom 1 and Custom 2). Custom tables are editable (curve turns green when editable).

## Keyboard Layer

Program the type of MIDI information QuNexus outputs. Each message type is assigned to a sensor source, mathematically modified (Gain, Offset, Table, Min/Max), and sent to the active Track's output destination.

### Message Types

- Note: MIDI Note messages when keys pressed (default On). "Velocity" is only available source.
- Pitch Bend: Keys send Pitch Bend from sensor sources (e.g., Tilt or Expression Pedal). Range set via "Bend Range" box. 7-bit.
- Aftertouch: Dynamically affects Aftertouch after key press. "Pressure" is only source. Averages pressure across all keys.
- Poly Aftertouch: Same as Aftertouch but each key sends pressure individually.
- CCs: Up to 3 different CC messages with selectable CC# numbers. Can be mapped to Pressure, Tilt, or Expression Pedal.

### Sensor Sources

- Key Velocity (Notes only): Value 0-127, striking velocity at Note On detection.
- Pressure: Continuous value 0-127, applied pressure.
- Tilt: Continuous value 0-127, Y-axis tilt. Returns to center (63) when released. Requires intentional pressure shift/tilt to engage by default. Adjust activation speed with Tilt Speed.
- Expression Pedal: CV input converted to MIDI, range 0-127.

### Mathematical Modifiers

- Gain: Raw sensor data multiplied by Gain value (e.g., 2 = double, 0.5 = half).
- Offset: Value added to Source after Gain multiplication.
- Curve: Data sent through a lookup Table after Gain/Offset. Predefined and user-defined table options available.
- Min and Max: Constrain output data range. Values outside are truncated. Note Off messages still send with 0 velocity even if Min > 0.

### Keyboard Sensitivity Settings

Global controls in Keyboard Layer (can be set differently per preset):

- Sensitivity: Controls how easy it is to reach higher value ranges for pressure and velocity.
- On Thresh: Pressure value at which Note On registers (e.g., set to 10 = pressure must reach 10).
- Off Thresh: Pressure value at which Note Off registers (cannot be set higher than On Threshold).
- Tilt: Controls how easily Tilt source activates. Higher value = easier activation.
- Pressure: Sensitivity multiplier for per-key Pressure (range 0.5-2.0, default 1.0).
- Bend Sensitivity: Controls pitch bend pad reactivity (not implemented in 2.0.1).

### Key Priority

Assigns which pressed keys control Tilt, Poly Aftertouch, and other Keyboard Layer sources:
- Latest: Last note played has control
- Earliest: First note played has control
- Highest: Highest note played has control
- Lowest: Lowest note played has control

### Toggle

Toggle keys on/off via dropdown menu:
- Off (default): Press = Note On, release = Note Off.
- On: Press = Note On, press again = Note Off. Multiple keys can be toggled. Tap HOLD A to clear all notes.
- Legato: Press = Note On; pressing new key turns off previous note. Tap HOLD A to clear without playing new note.

Hold the HOLD A button ~1 second to toggle the mode on/off. Toggle in Keyboard Layer is separate from Controller Layer Toggle.

## Sequencer Tab

Configure the three-track arpeggiator and step sequencer settings.

### Sequencer Settings

Global sequencer parameters:
- Tempo: 5-255 bpm
- Clock Source: Auto (defaults to internal, auto-syncs to USB/Expander MIDI clock), Internal, USB Port 1, Expander
- CV In 1&2: Disables internal clock; CV in 1 clocks Track 1, CV in 2 clocks Track 2. Track 3 controlled by AND, OR, or XOR of the two CV inputs.
- Clock Dest: Sends MIDI clock to USB1 and/or Expander ports. Can also send clock via Gate or CV outputs.
- CV PPQN: Pulses per quarter note for Gate/CV clock output.

### Transpose

Number of semitones to transpose keyboard, up or down by 12 semitones.

### Track Settings

Three parallel tracks with individual settings:
- Mode: Sequencer or Arpeggiator
- Mono: All sequencer/arpeggiator functions are monophonic
- Division: Clock division (whole to 32nd notes, with triplet/dotted options)
- Gate Off: Note hold length as percentage before release
- Play Pattern: Playback pattern for sequence/arpeggiator
- Sequence: Stored Step Sequencer pattern (1-8) or empty (default)
- Length: Pattern length, 1-32 steps
- PChg: Program Change (0-127) sent on preset load
- Destination: USB and/or Expander ports, Track MIDI Channel (MPE only for Track 1)

## CV Layer

Configure how QuNexus keys send and receive CV. 4 possible CV outputs and 2 possible CV inputs.

### Pitch Scaling

Set Pitch Scaling for CV Out 1: 1 Volt per Octave, 1.2 Volts per Octave, or Hertz per Volt.

### Gate Legato and S Trig

- Gate Legato: Keeps gate open as long as any key is held, allowing pitch changes without retriggering.
- Gate S Trig: Inverts gate so gate on = 0V and gate off = 5V.

### CV Output

Route keyboard and MIDI signals to Gate and CV outputs:
- Input Source: Keyboard/sequencer tracks, USB MIDI Port 3, MIDI expander, clock, or combinations
- Channel: Must match source MIDI channel assignment
- MIDI Type: Message type to route (Note: "Tilt CV" accepts tilt from keyboard/sequencer track; "Pressure CV" accepts pressure from keyboard/sequencer track and/or Channel Pressure from USB/Expander MIDI)
- Gain/Offset/Curve/Min/Max: Mathematical modifiers applied before routing to outputs

### CV Input

Translate CV voltages to MIDI messages:
- Channel: MIDI channel for output messages
- CC#: MIDI control change number
- Gain/Offset/Curve/Min/Max: Applied to voltage data before routing
- MIDI Device Out: USB3, MIDI Expander, or both

## Controller Layer

Makes QuNexus a customizable control surface. Each key gets its own Note, Toggle CC#, Pressure CC#, and Tilt CC#. Each key can be selected to "Participate" in Keyboard Layer, Controller Layer, or both.

Note: Controller layer is only active on Track 1 and is not affected by the Sequencer.

### Sensor Settings

Each key can be programmed with its own MIDI Note and Velocity, Pressure CC, and Tilt CC. Choose Channel number and Output Device for Controller Layer data.

#### Participate

Two checkboxes for each key:

- Participate in Keyboard Layer: If disabled, key won't play regular notes or contribute to Channel Pressure, Poly After Touch, etc. Local LED behavior turns off. Octave buttons won't affect the key.

- Participate in Controller Layer: If disabled, Controller Layer assignments have no effect.

- Both enabled: Key sends all Controller Layer and Keyboard Layer assignments. Controller Layer assignments don't respond to Oct +/- buttons or Channel Rotation.

#### Controller Layer Sources

Four per-key sources (enable "Participate in Controller Layer" first):
- Notes: Note Number assignment
- Toggles: Toggle CC# assignment
- Pressure: Pressure CC# assignment
- Tilt: Tilt CC# assignment

Set number boxes to "-1" to disable individual sources.

Pressure CC Return and Tilt CC Return set the values sources return to when released. Set to "-1" for latch behavior (stays at last value).

Note Velocity: Set to "-1" ("var") for variable velocity based on pressure.

#### Controller Layer Toggle

Dedicated CC# for toggling (separate from Keyboard Layer Toggle). Requires disabling "Participate in Keyboard Layer".

Settings:
- Toggle On/Off: Enable/disable toggle
- Toggle CC: CC number to toggle
- Toggle CC Value: CC value when toggle state is ON
- Toggle CC Return: CC value when toggle state is OFF

Notes assigned on the same key with Toggle enabled will toggle with the CC. LEDs indicate toggle state.

## Settings Tab

Adjust LED brightness/behavior and toggle MIDI Thru.

### LED Control and Brightness

LED Mode checkbox enables/disables Local LED Control. Number box selects MIDI Channel for Remote LED Control on USB Port 1. Remote LED Control is always enabled; Local LED Control takes priority when both are active.

LED Brightness: Value 0-20 for "Bright" and "Dim" key display brightness.

### QuNexus MIDI Thru

Routes incoming QuNexus MIDI messages to another MIDI device connected to the computer. Useful for auditioning changes without a DAW. For Windows users, routes to a virtual MIDI port, bypassing the Windows limitation where multiple applications cannot share class compliant MIDI USB devices.

# Factory Presets

QuNexus 2.0 ships with four factory presets.

## Preset A (Basic 2.0)

Traditional keyboard and 3-track sequencer for any MIDI-enabled software or Eurorack hardware.

- Track 1: MIDI Channel 1, routed to USB and MIDI Expander Port. Assigned to Gate and CV1 (pitch) outputs.
- Track 2: MIDI Channel 2, routed to USB and MIDI Expander Ports. Assigned to CV2 (gate) and CV3 (pitch) outputs.
- Track 3: MIDI Channel 3, routed to USB and MIDI Expander Ports.
- Velocity: On
- Local LED Control: On
- Controller Layer: Disabled

## Preset B (Aftertouch and Mod)

Designed for synths, apps, and plugins with aftertouch and modulation. Maps average key pressure to channel aftertouch and average key tilt to modulation wheel (CC#1). Compatible with iOS apps like Animoog, Sunrizer, and Magellan.

- Track 1: MIDI Channel 1, routed to USB and MIDI Expander Ports. Assigned to Gate, CV1 (pitch), CV2 (pressure), and CV3 (tilt) outputs.
- Track 2: MIDI Channel 2, routed to USB and MIDI Expander Ports.
- Track 3: MIDI Channel 3, routed to USB and MIDI Expander Ports.
- Velocity: On
- Local LED Control: On
- Controller Layer: Disabled

## Preset C (MPE and Sequencer)

MPE preset mapping Pressure to Channel Aftertouch and Tilt to CC74 ("Slide"/"Y-Axis"/"Polyphonic Mod Wheel"). Tracks 2 and 3 available for additional MIDI/Eurorack synths.

- Track 1: MPE enabled. Pressure mapped to channel pressure, tilt to CC74. MPE Single Zone, Manager channel 1, Member channels 2-14.
- Track 2: MIDI Channel 15, routed to USB and MIDI Expander Ports. Assigned to Gate and CV1 (pitch) outputs.
- Track 3: MIDI Channel 16, routed to USB and MIDI Expander Ports. Assigned to CV2 (gate) and CV3 (pitch) outputs.
- Velocity: On
- Local LED Control: On
- Controller Layer: Disabled

## Preset D (Drums & Clips 2.0)

Designed for drum sounds/samples and clip launching in Ableton Live. Works with KMI Ableton Live MIDI Remote script or any synth/drum machine.

- Track 1: Controller Layer MIDI Channel 9, routed to USB Port. Assigned to CV1 (gate) out.
- Track 2: MIDI Channel 10, routed to USB and MIDI Expander Ports. Assigned to CV2 (gate) out.
- Track 3: MIDI Channel 10, routed to USB and MIDI Expander Ports. Assigned to CV3 (gate) out.
- Velocity: On for Keyboard Layer notes, Off for Controller Layer notes.
- Local LED Control: Off. Remote LED messages received on Channel 9.
- Gate Output sends 24ppqn clock for Eurorack synchronization.
- MIDI clock sent via USB and Expander ports.

# Key Sensitivity Adjustments

Detailed sensitivity configuration options for the QuNexus keys.

## Global Sensitivity Adjustment

Located in Keyboard Layer > Keyboard Sensitivities section. Global for entire keyboard, can differ per preset.

- Sensitivity: Controls ease of reaching higher value ranges for pressure/velocity.
- On Thresh: Pressure value for Note On registration.
- Off Thresh: Pressure value for Note Off registration (cannot exceed On Threshold).
- Tilt: Controls Tilt activation ease. Lower = requires intentional tilt.
- Pressure: Sensitivity multiplier for per-key Pressure (0.5-2.0, default 1.0).

## Per-Key Sensitivity Adjustment

Hardware menu > Per Key Sensitivities. Individual sliders per key for sensor gain. Adjustments added to Keyboard Layer sensitivity settings. "Reset All Keys" returns to center. Settings are global (all presets), sent in real time.

Note: Adjusting per-key sensitivities stops playback.

# Troubleshooting

Common solutions for QuNexus issues.

## USB Connection Issues

- Try a new USB cable (use the cable that shipped with QuNexus)
- Try a different USB port
- Do not use unpowered USB hubs (they may not provide enough power)
- Try with or without a USB hub
- Try connecting to a different computer
- Reset device to defaults using the Editor

## Operating System Issues

Be aware of issues native to your OS, such as Mac OS CoreMIDI issues or Windows class-compliant device limitations.

## Noise with CV and USB Audio

Ground loop issues may occur when simultaneously using USB MIDI, CV outs, and a USB audio interface. Solution: Disconnect QuNexus from computer and power it with a USB power supply/charger, then use the MIDI Expander port and 3rd party USB MIDI interface for software control.

# Safety Precautions

- Medical Devices: May emit electromagnetic fields that interfere with pacemakers. Maintain at least 6 inches (15cm) separation.
- Medical Conditions: Consult physician if you have conditions that could be affected (seizures, blackouts, eyestrain, headaches).
- Explosive Atmospheres: Do not use in areas with potentially explosive atmospheres.
- Repetitive Motion: Stop use and consult physician if you experience discomfort.
- High-Consequence Activities: Not intended for use where failure could lead to death, injury, or environmental damage.
- Choking Hazard: Keep accessories away from small children.

# Firmware Changelog

Version history for QuNexus Editor and firmware updates.

## Version 2.0.7 (2021-01-18)

New Features:
- Added arpeggiator octaves (range 1-4). Also works with step sequencer.
- Global and Track transpose range increased to +/- 48 semitones with octave +/- keys.
- Removed all notes off (CC123) messages when transport stops.
- Loading presets now stops playback and clears all track patterns.
- Editor can modify MPE member channels (limited to 13).
- Tracks 2/3 auto-reassign to channels 15/16 if overlapping MPE zone.
- MIDI Thru port remembers last device and auto-connects.
- Windows 11 supported.

Bug Fixes:
- Buffer overflow checks for MPE playback.
- Improved Editor<->QuNexus synchronization.
- Patterns properly load/save to all slots including length.
- Fixed program change bug (only sent if Track 1 had PC enabled).
- Arp/Seq mode switching properly clears patterns and toggled notes.
- Hold mode improvements for step sequencing.
- Fixed out of range errors and false crash alerts on MacOS.
- Windows firmware update process improved.

## Version 2.0.6 (2021-11-23)

New Features:
- Keyboard->MIDI latency reduced by 10ms (now ~2.5ms).
- Improved arpeggiator "Flow" for natural chord capture.
- Improved stability during playback when connected to editor.
- Reduced sysex message size (17 bytes for single parameter).
- Loading presets stops playback rather than breaking sync.
- Pattern saving during playback limited to slots 1-4 (one save per slot).
- Editor presets preserved during updates.
- Pressure/tilt enable defaults to channel aftertouch and mod wheel.
- Pressure/Tilt values properly latch on key release.

Bug Fixes:
- UI improvements, single-click number box selection.
- Firmware update detection improvements.
- Cancel button fix.
- Arp->Seq clears notes/pattern.
- Fixed CC123 sent to incorrect channels.
- No stuck notes when changing channels during playback.
- Pitch bend works in MPE arpeggiator mode.
- Fixed random pitch bend at low tilt sensitivity.
- Fixed 5th octave C key not reaching 5V on CV.
- 5x USB send efficiency increase.
- Message prioritization for Clock and Note on/off.
- Fixed tempo rounding bug above 250.
- Fixed extreme pitch bend pressure causing bad values.

## Version 2.0.4 (2021-10-18)

New Features:
- Editor now checks for updates.

Bug Fixes:
- Renamed USB MIDI ports to "Control Surface", "Expander", and "CV" (fixes non-English OS issues).
- Fixed CV input clipping at 120.
- Fixed control layer note un-toggle.
- Fixed rests sending Note C#-2 instead of resting.
- Fixed pressure/tilt sending initial values when disabled.

## Version 2.0.3 (2021-10-08)

Bug Fixes:
- CV Trims reset to default after firmware update (fixes junk values from 1.0->2.0).

## Version 2.0.2 (2021-10-03)

Editor released to public.

New Features:
- Tilt/pressure values captured and played back by arpeggiator/step sequencer.
- External MIDI clock sync.
- CV clock input sync.
- CV Gate clock out divisions (1/2/3/24 PPQN).
- Bend Pad and Pressure sensitivity adjustment.
- LED disable/enable via octave buttons in shift menu.
- MPE Control Message (MCM) implemented.

Bug Fixes:
- CV pitch trims apply to all three CV outputs.
- Fixed blinking buttons persisting after shift release.
- Fixed downward patterns hanging during step sequencing.

## Version 2.0.1 (2021-08-30)

Initial firmware sent to factory for programming/shipment.
