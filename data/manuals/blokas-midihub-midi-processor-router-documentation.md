---
id: blokas-midihub-midi-processor-router-documentation
title: "Blokas Midihub — MIDI Processor & Router Documentation"
source: "https://blokas.io/midihub/docs/"
convertedAt: 2026-03-20T15:39:16.810Z
summary: "The Blokas Midihub is a standalone hardware MIDI processor and router with 4 DIN-5 MIDI inputs, 4 DIN-5 MIDI outputs, and a USB port providing 4 additional virtual MIDI I/O ports. It lets you build customizable MIDI processing pipelines using a visual editor, chaining together filters, remappers, generators, and modifiers to route and transform MIDI data between your gear with sub-1.5ms latency. It stores up to 8 presets and works without a computer once programmed."
---

# Quick Start

In the Box: Midihub device, USB cable (A-to-B), Information leaflet.

Installing the Midihub Editor: Download the latest version for your platform (Windows, macOS, Linux, Raspberry Pi). Launch the downloaded file and follow the on-screen setup instructions.

Connecting Midihub to Your Computer: Connect via the included USB cable. Slide the power switch away from the USB port. The device will power on, indicated by LED lights. Launch the Midihub Editor and click the 'Connect' button on the top left corner.

Resources: 'New to Midihub' tutorial series, video tutorials by CYLVESTER, presets library on Patchstorage.

# The Midihub Device

Midihub is the backbone of your MIDI hardware interconnectivity. It has MIDI DIN-5 input and output ports, 4 of each, as well as a USB port for power supply and/or communicating with the PC and its software. All MIDI data flows through customizable MIDI Processing Pipelines within the device with extremely low latency and without involving any processing on the PC.

## Input / Output

The Midihub has 4 MIDI input ports and 4 MIDI output ports and a single USB port which provides multiple virtual cables for PC communication: 4 USB MIDI inputs and 4 USB MIDI outputs, as well as an internal USB serial port for editor communication. There are also Virtual Input and Output ports, 8 of each, used to forward MIDI events to further Processing Pipelines. Ports are numbered using letters A, B, C, D, E, F, G and H and can be renamed in the Editor.

MIDI controllers with only USB output can't be connected directly to Midihub but can be used if both are connected via a USB host such as a PC or Raspberry Pi. Utilities include 'aconnect' for Linux, 'MIDI Patchbay' on Mac, 'MIDI-OX' on Windows.

## The Memory

On power-up Midihub loads the MIDI Processing Pipelines stored in Flash memory (the last stored preset). While editing via the editor, changes remain in volatile memory until 'Stored' in Flash via the Toolbar or Device->Store submenu. Changes can be discarded by 'Loading' from Flash memory via the Toolbar or Device->Load menu.

Backups of all current Midihub state (presets, microtunings, settings) may be exported and imported via 'Device -> Export Everything' and 'Device -> Import Everything' menus.

## Device Settings

Settings can be set via Device -> Settings menu and are stored in non-volatile memory on closing the Settings dialog using the 'OK' button.

## The Button

Clicking The Button between 1-8 times switches between presets 1-8. When held down for half a second, it can be configured to:
- Send reset controller message to all 16 channels of selected ports (BXh 79h 00h)
- Send system reset message to selected ports (FFh)
- Send all notes off message to all 16 channels of selected ports (BXh 7Bh 00h)
- Send custom data to selected ports (up to 32 bytes)

## External Preset Change

A particular Midihub port can listen for Program Change messages on a particular channel. PC0 - PC7 messages switch between presets 1 - 8.

## Initial Preset

Upon powering on, Midihub either loads the very first preset or the last preset that was saved to memory, depending on the Initial Preset setting.

## Technical Specifications

Input/Output Connectors: 8 x DIN-5 Female Sockets & USB-B Port
MIDI Loopback Latency: Less than 1.5ms
Activity LEDs: 4 x MIDI Input, 4 x MIDI Output & 1 x USB/Status
Current Draw: 50mA @ 5.1VDC
Storage: 8 Presets
Enclosure: Powder-Coated 1mm Steel
Power: Bus-Powered — Computer or 5V USB Power Supply
Dimensions: 75mm x 108mm x 36mm
Weight: 285g
Other Input: 1 x The Button

# The Midihub Editor

The Editor lets you customize Midihub's processing logic by laying down processing pipelines using different Pipes (MIDI effects). The interface is based on intuitive Drag & Drop. Every pipeline starts from an Input or Generator pipe, from which MIDI data flows to the right, until it ends up in an Output pipe. You can use the Editor even without the device connected. Available on Windows, macOS, and Linux.

## Processing Pipelines

MIDI data flows through Midihub Processing Pipelines from left to right. All MIDI data enters through the leftmost Input or Generator pipes and exits through the rightmost Output pipes. MIDI Monitor pane shows data flow in real time.

Processing the same MIDI event multiple times is possible using Virtual Input/Output ports. Data sent to a Virtual Output port appears in matching Virtual Input ports, enabling keyboard splits or automatic chord generation.

Pipes that modify or filter MIDI data can be placed between Input and Output ports. If a pipe discards data, it won't be forwarded to the next pipe.

Pipelines from a file or Patchstorage may be imported into the current Preset. Built by dragging Pipe icons from the Pipes pane into the main canvas. Alt or Ctrl while dragging creates a copy; adding Shift copies mappings along with the Pipe.

## Comments

Inline comments can be added in the Editor's Preset area via right click -> Add Comment. Use Shift + Enter for new lines while editing.

## Pipe Parameters

Every pipe has a 'Bypass' parameter which, when enabled, passes incoming data through unmodified. If the leftmost pipe is bypassed, the entire pipeline gets disabled.

## Pipe Categories Overview

I/O Pipes: MIDI Input, MIDI Output, USB Input, USB Output, Virtual Input, Virtual Output

Generator Pipes: CC LFO, Clock, CC Table

Filter Pipes: CC Range Filter, Channel Filter, Channel Range Filter, Filter, Note Range Filter

Remap Pipes: CC Remap, Channel Remap, Micro Scale, Note Remap, Scale Remap

Modifier Pipes: Arpeggiator, Chance, Delay, Dispatcher, Equalizer, Harmonizer, Limiter, Note Length, Note Repeater, Randomizer, Rescale, Sustain, Sync Delay, Sync Delay Ms, Tempo Divider, Transform, Transpose, Velocity Amp

# Inserting Pipelines from File

Pipelines from .mhp files may be imported into the current Preset via File->Append from File... (inserts at bottom) or right click menu's Insert from File... (inserts at a particular row). A preview dialog shows the pipelines about to be inserted and allows edits before import.

# Inserting from Patchstorage

User uploaded pipelines can be browsed and imported using the Patchstorage pane (toggle via View->Patchstorage or F5). Filter results using the search bar and specify sorting. Double click or press Enter to append a patch at the bottom of the current preset. Drag and Drop inserts at the dropped location. The Insert Preview shows how pipelines will look and provides the full description from Patchstorage.

# Insert Preview

The Preview window shows what is about to get imported. At this stage you can: change all input or output ports (bulk via right click menu), edit pipe parameters and/or delete unnecessary pipes, remap MIDI mapped parameters or clear them via Edit->Clear All Mappings, and merge names. Virtual input/output pipes that use the same port letter in the main preset are indicated by a purple rectangle in their corners.

# MIDI Monitor

Shows MIDI events being processed by the currently selected pipe in real time. Events can be displayed in raw hex or decoded readable form. A BPM field provides BPM estimate based on recent Clock messages.

Event fields:
- Timestamp: Recorded when event is processed, millisecond accuracy based on internal clock
- Type: Event (regular MIDI), Timed (time-based output), Mapping (mapped parameter change), Param Chg (pipe parameter change), Overflow (monitor data dropped)
- Incoming: The incoming event data
- Outgoing: The processed data (empty if discarded; multiple events may be produced from a single incoming message)

# MIDI Mappings

Almost every Pipe parameter can be MIDI mapped to MIDI controllers. While Midihub is connected, Map buttons next to parameter values are enabled. Clicking Map causes Midihub to map the next external CC or Note message to the parameter.

The Add button allows manual setting of parameter mappings for both physical inputs and virtual outputs, and works when Midihub is disconnected.

Mapping Options:
- Port: The port for the mapping (including Virtual ports for internal mappings)
- Type: CC, Note On (value range 1-127, triggers on key down), Note On & Off (triggers on both)
- Channel: The channel to listen to
- Id: The CC or Note Id to look for
- Mode: Scale (linearly rescale 0-127 to [Low;High]), Toggle (toggles between Low and High), Clip (value clipped to [Low;High]), Slice (value used only if inside [Low;High])
- Low: Low value of range (if Low > High, control is inverted)
- High: High value of range (if High < Low, control is inverted)
- Drop: Whether to drop the mapped parameter from processing by pipes

More flexible preprocessing can be achieved by sending events through MIDI pipes into a Virtual Output and creating parameter mappings for the matching Virtual bus.

# Port Naming

Port names can be changed via Preset -> Edit Port Names and Device -> Edit Default Port Names menus. Each Midihub can have device-default port names (non-virtual ports only) shared across all presets, and each preset has its own set of port names (including virtual ports). Preset names override device-default names for the same port.

Recommendation: Rename physical ports in device defaults and virtual ports in preset memory for easier reuse.

Naming resolution example:
- Default <unset>, Preset <unset> → FROM A
- Default <unset>, Preset SYNTH → SYNTH
- Default DRUM MACHINE, Preset <unset> → DRUM MACHINE
- Default SYNTH, Preset DRUM MACHINE → DRUM MACHINE

Names can be imported through Preset -> Import Port Names, Device -> Import Default Port Names, and Insert Preview's Merge Names button.

## MIDI Input Pipe

The entry point of MIDI data. Data received through the MIDI IN connector with the matching letter is forwarded as-is to the pipe on the right.

Parameters:
- Bypass: Whether processing is enabled
- Source: The source of MIDI data
- Name: The name of the port

## MIDI Output Pipe

The exit point of MIDI data. Data that reaches this pipe is sent through the MIDI OUT connector with the matching letter.

Parameters:
- Bypass: Whether processing is enabled (prefer bypassing Input pipes)
- Destination: The destination of MIDI data
- Name: The name of the port

## USB Input Pipe

The entry point of USB MIDI data. Data received from PC via USB cable from matching USB MIDI device is forwarded as-is. The 4 USB MIDI ports on the computer map to A, B, C, D letters.

Parameters:
- Bypass: Whether processing is enabled
- Source: The source of MIDI data
- Name: The name of the port

## USB Output Pipe

The exit point of USB MIDI data. The 4 USB MIDI ports on the computer map to A, B, C, D letters.

Parameters:
- Bypass: Whether processing is enabled (prefer bypassing Input pipes)
- Destination: The destination of MIDI data
- Name: The name of the port

## Virtual Input Pipe

The entry point of Virtual MIDI data. Data that reached the matching letter Virtual Output appears here and is forwarded as-is to the pipe on the right.

Parameters:
- Bypass: Whether processing is enabled
- Source: The source of MIDI data
- Name: The name of the port

## Virtual Output Pipe

The forwarding point of Virtual MIDI data. Data that reaches this pipe appears immediately in matching letter Virtual Input pipes.

Parameters:
- Bypass: Whether processing is enabled (prefer bypassing Input pipes)
- Destination: The destination of MIDI data
- Name: The name of the port

## CC LFO

A Generator or Modifier pipe that produces an LFO waveform on the selected CC value, Channel 1. Place a Channel Remap pipe to the right to change the channel. As a Modifier, it can sync to the beat and apply modulation to previous CC LFO pipes and/or incoming CC values.

Parameters:
- Bypass: Whether processing is enabled
- Started: Whether the LFO clock is started
- CC: The CC value id to use
- Resolution: Use as low resolution as possible for desired rate
- Rate: Rate in Hz, or time units if synced to beat
- Phase: Phase offset
- Depth: Depth of the LFO (64 for full 0-127 range)
- Waveform: LFO waveform type
- Duty Cycle: Duty cycle of PWM wave (not applicable to other waveforms)
- Output Enabled: Whether output is actually enabled (LFO clock keeps ticking)
- Mode: Free running, Active Mod. (offsets incoming CC generating new values), Passive Mod. (offsets incoming CC only on receiving actual CC value)
- Retrigger: Retrigger on individual notes or chords
- Sync to BPM: (Modifier only) Sync to incoming BPM clock
- Retrigger on SysCommon: (Modifier only) Retrigger on start, continue, song position pointer
- Start on SysCommon: (Modifier only) Start LFO clock on system common messages
- Manual Retrigger: Button to manually retrigger (mappable for low latency)
- One Shot: Produce only one cycle, must be retriggered
- 14-Bit: Produce 14-bit values, MSB on CC id, LSB on +32 id (e.g., CC #1 MSB and CC #33 LSB for 14-bit Modulation Wheel)

Sample & Hold Waveform: Uses PWM rising/falling edges to sample CC values. As Generator, uses Noise as sampling input. As Modifier, uses last received CC value. In Active/Passive Mod Mode, Depth represents amplification of displacement from 64.

## Clock

A Generator or Modifier pipe that produces MIDI clock messages at the defined BPM. Tap Tempo adjusts BPM in real time or counts in if stopped. As Modifier, incoming Start, Stop, Continue and Song Position Pointer messages can adjust sync.

Parameters:
- Bypass: Whether processing is enabled
- BPM: Beats per minute to generate
- Started: Whether the clock is started
- Start: Start clock, producing MIDI Start message
- Continue: Start clock, producing MIDI Continue message
- Stop: Stop clock, producing MIDI Stop message
- Measure Duration: Duration of measure in Beat units (upper part of Time Signature)
- Beat Duration: Duration of single beat, always power of 2 (lower part of Time Signature, can be used for BPM multiplication)
- Tap Tempo: Adjusts BPM via rolling average of up to 32 taps
- Nudge Up: Produces BPM rate 10% higher while held
- Nudge Down: Produces BPM rate 10% lower while held

Tap Tempo behavior: While stopped, waits for Measure Duration taps and auto-starts on next beat. While running, adjusts BPM on second tap, averages up to 32 taps. Clears after 3 seconds.

MIDI Mappings: Start, Continue, Stop, Tap Tempo map to CC (value 127 triggers) or MIDI Note. Nudge Up/Down expect CC > 63 to enable.

## Note Length

A modifier pipe that fixes note lengths to a given length.

Parameters:
- Bypass: Whether processing is enabled
- Length: The fixed note length
- Gate: Percentage to expand or shrink note length (0% shortest, 100% unchanged, 200% double)
- Trigger: Whether to trigger on Note On or Note Off (Note Off inverts the note pattern)
- Sync: Whether to sync length to tempo (requires MIDI Clock input)
- Decay: When Trigger is Note Off, affects velocity of produced Note On by decaying original velocity over specified time

## Note Repeater

A modifier pipe that repeats every held note at the given rate, using velocity of last held note or aftertouch. Requires MIDI Clock messages. Notes are quantized to tempo grid.

Parameters:
- Bypass: Whether processing is enabled
- Time Division: The quantization time
- Note Length: Length of notes, synced to grid or in milliseconds
- Quantize Note Ends: Whether to snap note ends to beat grid
- Swing: Amount of swing on odd notes
- Accent: Amount to accent every 2nd note

## Arpeggiator

A modifier pipe that produces arpeggios from held notes at the given rate. Requires MIDI Clock messages. Notes are quantized to tempo grid. Sequences repeat on next octave per Octave Range parameter.

Sequence Types:
- Up, Down, Up and Down, Down and Up
- Up and Down Incl. (repeats high note), Down and Up Incl. (repeats low note)
- Low Up, Low Up and Down (4+ notes needed)
- High Up, High Up and Down (4+ notes needed)
- Chords (all notes at once, for use with Octave parameter)
- Random
- Entirely Up then Down (full Octave Range before reversing)
- Entirely Down then Up

Parameters:
- Bypass: Whether processing is enabled
- Time Division: The quantization time
- Note Length: Synced to grid or in milliseconds
- Quantize Note Ends: Snap note ends to beat grid
- Swing: Amount on odd notes
- Accent: Amount on every 2nd note
- Type: The sequence type
- Octave Range: Range of octaves to traverse
- Repetitions: Times to repeat same step
- Retrigger Octave: Whether to reset octave to 0 when all notes off

## Delay

A modifier pipe that produces delayed notes. Can be used as a looper with Feedback at 100%, Infinite enabled, and convenient Delay Time (e.g., 1 Bar). Each pipe remembers up to 32 notes including velocity and length. Oldest slot reused when full. All notes off on Stop message or Bypass/Sync changes.

Parameters:
- Bypass: Whether processing is enabled
- Delay Time: Synced to tempo or in milliseconds (0 produces events immediately, Infinite ignored)
- Note Length: Fixed length for every note if Fixed Length enabled
- Repetitions: Number of repeats (overridden by Infinite)
- Feedback: Velocity feedback amount for delayed notes
- Dry/Wet: Velocity ratio (0% = full original/0 delayed, 50% = full both, 100% = 0 original/full delayed)
- Infinite: Repeat infinite times unless velocity reaches 0
- Sync: Switch between synced and freerunning
- Fixed Length: Use variable or fixed note lengths
- Overdub: Whether new notes get recorded into delay loop

## Transpose

A modifier pipe that adds semitones to all MIDI Note On and Note Off events. Other MIDI data passes through.

Parameters:
- Bypass: Whether processing is enabled
- Semitones: Amount to add to MIDI note number

## Harmonizer

A modifier pipe that generates up to 8 additional harmonized notes on receiving a note on message. Interval +0 (root note) plays if 'Play Root Note?' is enabled. Duplicate intervals produce only one note. Chords can be inverted via Inversion parameter; adjusting beyond the number of harmonized notes creates octave inversions.

Parameters:
- Bypass: Whether processing is enabled
- 1st through 8th interval: Semitones offset to root note
- Play Root Note?: Whether to play the +0 root note
- Inversion: The chord inversion number

## Dispatcher

A modifier pipe that dispatches incoming note messages to different channels, rotating and tracking empty slots. Should be combined with Virtual Pipes and Channel Remap.

Algorithms:
- Round Robin: Searches for next free slot above current channel, wraps at end
- Random: Picks random free slot
- Ping Pong: Like Round Robin but reverses direction instead of wrapping
- Chord: Like Round Robin, resets to lowest channel when all notes released; surplus after Grace Period goes to Surplus Ch
- Chord Asc.: Waits for Grace Period, plays chord sorted lowest to highest
- Chord Desc.: Same but highest to lowest

Parameters:
- Bypass: Whether processing is enabled
- Use Ch 1 through Use Ch 16: Enable/disable each channel for dispatching
- Algorithm: The dispatching algorithm
- Surplus Ch: Channel for when all slots are used or chord is complete
- Chord Grace Period: Duration to wait for next chord note

## Filter

A modifier pipe that selectively discards MIDI events by type.

Filterable message types: Note On, Note Off, Channel Pressure, Control Change, Program Change, Pitch Bend, Poly Aftertouch, Sysex, MIDI Timecode, Song Position Pointer, Song Select, Tune Request, Clock, Start, Continue, Stop, Active Sensing, Reset.

Parameters:
- Bypass: Whether processing is enabled
- One toggle per message type: Whether to discard that type

## Channel Filter

A modifier pipe that selectively discards MIDI events in undesired channels.

Parameters:
- Bypass: Whether processing is enabled
- Channel 1 through Channel 16: Whether to drop channel messages for each channel

## Channel Range Filter

A modifier pipe that discards or keeps MIDI Channel events in desired ranges (inclusive). Example: '1-4, 6, 9-16' filters out first 4 channels, channel 6, and last 8 channels.

Parameters:
- Bypass: Whether processing is enabled
- Drop in range: Whether to drop within ranges (disabled inverts to keep within ranges)
- Ranges: List of interval ranges and single values

## Note Range Filter

A modifier pipe that discards or keeps MIDI Note On/Off events in desired ranges (inclusive). Supports MIDI note numbers and letter notation (C4 = Note 60 Middle C). Up to 9 argument values per pipe; chain multiple pipes for more ranges.

Example: '0-47, 60-83, 97' or 'C-1-B2, C4-B5, C#7'

Parameters:
- Bypass: Whether processing is enabled
- Drop in range: Whether to drop within ranges
- Ranges: List of interval ranges and single values

## CC Range Filter

A modifier pipe that discards or keeps MIDI CC events in desired ranges (inclusive). Up to 9 argument values per pipe. Example: '1, 33, 120-127' filters Mod Wheel MSB/LSB and Channel Mode messages.

Parameters:
- Bypass: Whether processing is enabled
- Drop in range: Whether to drop within ranges
- Ranges: List of interval ranges and single values

## Note Remap

A modifier pipe that remaps Note On/Off values from input range to output range. Notes outside input range are discarded. Useful for keyboard splits with virtual I/O, transposing, scaling, or flipping ranges.

Accepted value formats: 0-127 (MIDI note number) or C-1 through G9 (alphabetic notation, C4 = Middle C = Note 60).

Parameters:
- Bypass: Whether processing is enabled
- In Low / In High: Input range
- Out Low / Out High: Output range

## Channel Remap

A modifier pipe that remaps the Channel number of MIDI messages from input range to output range. Messages outside input range are discarded.

Parameters:
- Bypass: Whether processing is enabled
- In Low / In High: Input range
- Out Low / Out High: Output range

## CC Remap

A modifier pipe that remaps CC id numbers from input range to output range. CC messages outside input range are discarded.

Parameters:
- Bypass: Whether processing is enabled
- In Low / In High: Input range
- Out Low / Out High: Output range

## CC Table

A Generator or Modifier pipe that injects CC events into the pipeline through MIDI mappings or directly from the Editor. Does not modify events passing through it. Features Takeover mode to avoid sudden jumps when using multiple knobs mapped to the same CC Value.

Parameters:
- Bypass: Whether processing is enabled
- Channel: MIDI channel of produced events
- Mode: Immediate (CC produced when mapped control moved) or Takeover (control must overpass level set by last control)
- 1st through 7th CC Id: CC Id numbers for each table slot
- CC 0 through CC 7 Value: CC Values to produce (recommended to map to external controllers)

## Scale Remap

A modifier pipe that remaps MIDI notes according to a scale map, working on 12 notes per octave.

Parameters:
- Bypass: Whether processing is enabled
- Base: Base note of the scale
- Transpose C to Base: If enabled, transposes C scale according to Base before mapping
- Preset: Built-in scale preset (not mappable)
- I through VII (including sharps): Remap each scale degree to specified degree

## Micro Scale

A modifier pipe that adjusts MIDI note numbers and generates pitch bend messages according to micro tuning defined in Scala language. Dispatches each note to a new channel for correct polyphony (similar to Dispatcher). Midihub holds up to 8 micro tunings shared between all presets, each up to 127 tuning values. Managed via Device->Micro tunings.

Parameters:
- Bypass: Whether processing is enabled
- Scale: The micro scale to apply
- Pitch Bend Depth: Depth in semitones (must match target synthesizer setting)
- Base Note: Reference MIDI note for start of scale
- Base Frequency: Frequency of base note
- Auto Frequency: Initialize Base Frequency from Base Note's frequency in 440Hz standard
- Always Send Pitch Bend: Force sending (enable only if receiving device plays wrong notes)
- Use Ch 1 through Use Ch 16: Enable/disable channels for notes and pitch bends

## Velocity Amplifier

A modifier pipe that amplifies the Velocity parameter of MIDI Note On messages.

Parameters:
- Bypass: Whether processing is enabled
- Amplification: The gain to apply to incoming velocity

## Equalizer

A modifier pipe that applies a 3-band EQ curve on message values.

Band positions (MIDI note numbers): Low = 24, Medium = 60, High = 96.

Parameters:
- Bypass: Whether processing is enabled
- Low / Medium / High: Gain at each band
- Kind: MIDI message kind to process (Velocity by Note #, or other kinds apply curve on value based on itself)
- Any Id / Channel?: Whether to affect all Ids or Channels depending on Kind
- Id / Channel: Particular Id or Channel to affect (allows chaining multiple Equalizer pipes)

## Sustain

A modifier pipe that drops Note Off messages according to Mode and Pedal On parameters, producing necessary note offs when Pedal is off.

Modes:
- All: Sustain all notes
- Chord: Sustain while at least one note held; once all keys up and new note pressed, old notes off and new ones sustained
- Sostenuto: Only notes playing when Pedal pushed are held; new notes play normally

Parameters:
- Bypass: Whether processing is enabled
- Pedal On: Whether pedal is currently on (should be mapped)
- Mode: All, Chord, or Sostenuto

## Limiter

A modifier pipe that clips values of MIDI messages to fit in [Minimum;Maximum] range.

Parameters:
- Bypass: Whether processing is enabled
- Kind: MIDI message kind to process
- Minimum: Lowest value
- Maximum: Highest value
- Any Id?: Whether to work with all Ids
- Id: Specific Note/Control/Channel Id if Any Id is deactivated

## Rescale

A modifier pipe that rescales MIDI message values. Input values are first clipped at In range, then linearly rescaled to Out range.

Parameters:
- Bypass: Whether processing is enabled
- Kind: MIDI message kind to process
- In Low / In High: Input range
- Out Low / Out High: Output range
- Any Id?: Whether to work with all Ids
- Id: Specific Note/Control/Channel Id if Any Id is deactivated

## Transform

A modifier pipe that transforms one kind of MIDI message into another. Can convert between: Note On & Off, Note On, Note Off, Reset, Control Change, Program Change, Poly Aftertouch, Channel Pressure, Pitch Bend, Start, Continue, Stop, Song Position Pointer, Song Select, Tune Request, Clock, Active Sense.

Parameters:
- Bypass: Whether processing is enabled
- Mode: Insert before original, after original, replace original, or drop original
- What: Source MIDI message kind
- Into: Target MIDI message kind
- Set Channel to: Value selector for resulting Channel
- [Value for Byte 1]: Value selector for first data byte
- [Value for Byte 2]: Value selector for second data byte
- Argument 1 / Argument 2: Values (0-127) used when selected by selectors
- Channel Argument: Value (1-16) used when selected
- Prioritize Real-Time: Whether produced Real Time messages are prioritized
- Work with Channel / Any Channel: Which channel(s) to process
- Range parameters for both data bytes: Low, High, Inside/Outside range

Value Selectors: Arg1, Arg2, Ch. Arg, Data Byte 1, Data Byte 2, Incoming Ch. Values are automatically rescaled between channel range (1-16) and data range (0-127) when ranges differ.

## Chance

A modifier pipe that randomly drops MIDI notes. Timed Chance rolls every Period; if it fails, all notes dropped for that Period. If it wins, Chance rolls per note or chord.

Parameters:
- Bypass: Whether processing is enabled
- Granularity: Per note or per chord
- Chance: Percentage chance to play
- Timed Chance: Percentage chance for period duration
- Period: Timed period length
- Sync: Whether Period syncs to BPM
- Use Velocity: Use note velocity instead of Chance parameter (127 = 100%)

## Randomizer

A modifier pipe that randomly modulates selected parameter of incoming MIDI notes or CC values.

Parameters:
- Bypass: Whether processing is enabled
- Parameter: The parameter to randomize
- Positive: Max positive offset depth
- Negative: Max negative offset depth
- CC: CC id to work with if CC Value parameter selected

## Tempo Divider

A modifier pipe that divides tempo by dropping multiples of Real-Time Clock MIDI messages.

Parameters:
- Bypass: Whether processing is enabled
- Divide by: The divider

## Sync Delay

A modifier pipe that drops or produces Clock messages to shift timing. Shift happens every time MIDI Start message is processed. Resolves MIDI hardware sync incompatibilities.

Parameters:
- Bypass: Whether processing is enabled
- Delay by: Number of clocks to delay (negative shifts forward, up to one quarter note of instant Clock messages)

## Sync Delay Ms

A modifier pipe that delays realtime MIDI events by a set number of milliseconds (0.32ms to 1 second). Resolves MIDI hardware sync incompatibilities.

Parameters:
- Bypass: Whether processing is enabled
- Delay by: Milliseconds to delay

# USB MIDI Port Mapping

USB port letter to OS device name mapping:

Windows:
- USB A: Midihub MH-... (Input and Output)
- USB B: MIDIIN2/MIDIOUT2 (Midihub MH-...)
- USB C: MIDIIN3/MIDIOUT3 (Midihub MH-...)
- USB D: MIDIIN4/MIDIOUT4 (Midihub MH-...)

macOS:
- USB A: Midihub MH-... (Port1)
- USB B: Midihub MH-... (Port2)
- USB C: Midihub MH-... (Port3)
- USB D: Midihub MH-... (Port4)

Linux:
- USB A: hw:n,0,0
- USB B: hw:n,0,1
- USB C: hw:n,0,2
- USB D: hw:n,0,3

Renaming via Device -> Settings... overrides the name of all 4 input and 4 output USB ports as shown by the OS. Requires device reconnect. On macOS, may need to remove device from MIDI Setup while disconnected (back up MIDI Patchbay configurations first).
