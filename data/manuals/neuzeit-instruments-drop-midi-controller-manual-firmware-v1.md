---
id: neuzeit-instruments-drop-midi-controller-manual-firmware-v1
title: "Neuzeit Instruments Drop - MIDI Controller Manual (Firmware v1.07)"
source: "Drop_Manual_v1_07.pdf"
convertedAt: 2026-03-16T21:38:18.759Z
summary: "The Neuzeit Instruments Drop is a hardware MIDI controller and performance hub designed for live electronic music. It features 8 rotary encoders, 8 faders, 8 mute buttons, and a 4x5 snapshot matrix, allowing musicians to control up to 8 MIDI devices simultaneously via 2 USB-C and 4 TRS MIDI ports plus 2 CV in/out. Its key capabilities include snapshot recall with Jump and Drop modes for creating buildups and drops, MIDI merging and routing, clock synchronization, DAW clip launching, and chain-based song arrangement."
---

# Device Overview

The Drop features the following physical controls and connections:

Rotary knobs: 8x4 endless encoders, no detents, with push function. RGB LED-rings with 13 LEDs around the knob to visualize the value. A separate RGB LED below the knob shows the push function value. The push can be configured as an independent button or in connection with the rotary knob.

Mute buttons: 8 momentary buttons with click. A white LED in the middle and two RGB LEDs on top and bottom for color coding and On/Off status.

Faders: 8 faders with 45mm travel distance. Two RGB LEDs for color coding and catch-value indication (Move fader up, Move fader down, Value is caught).

Button matrix: Function depending on mode. Fire snapshots, select bank, trigger clips in DAW using grid mode.

Dedicated buttons: START clock, STOP clock, SHIFT (secondary functions), TAP (tap tempo), CLOCK (bpm and config), JUMP (fire snapshots in jump mode), GRID (clip launcher/keyboard), DROP (schedule snapshots at end of cycle), CHAIN (arrange snapshots on timeline), SAVE (save snapshot), EDIT (edit snapshot), SINGLE/REPEAT (Drop mode execution), MENU (main menu/back), PLAY (performance views), BANK (select snapshot bank), COPY (copy snapshot), LAYER A/B (switch control element layers).

Cycle buttons: A cycle has a length of 1-32 bars. LEDs show playback position, signaling ongoing Jumps (blue) or Drops (red).

MENU encoder: Turn and push for navigation.

Connections:
- Power: 12VDC 1500mA power supply included
- USB1-2: Host or device auto-detection. USB1 can also be used as power input.
- TRS1-4: MIDI Out has a switch for TRS type A or B, Input accepts both types.
- CV1-2: Two CV inputs and outputs. Used for clock signals or variable 0-5 Volts.
- Micro SD: Holds all projects and the MIDI CC database, used for firmware updates.

# What's in the Box

- Power supply 12V 1500mA, with adaptors for EU, USA, AU, UK
- USB-C to USB-C cable, can also be used to power the device
- USB-C male to USB-A female adaptor when Drop is USB host
- MIDI adaptor TRS to DIN female
- 2x MIDI TRS cable 120cm, braided gold-black
- Micro SD-card adaptor to regular sized SD-card

# Firmware Updates

Download the latest firmware from the Neuzeit website and save it on your computer.
1. Put Drop's SD-card into your computer.
2. Copy the firmware file into the /Firmwares folder on the SD-card.
3. Turn off Drop, reinsert the SD-card.
4. While powering on Drop, press and hold the Shift button until the display shows up.
5. Use the menu encoder to select the firmware file and push to update the firmware.

# Power

Power Drop using the included power supply or via the USB1 port. The benefit of using the included 12V power supply is that you still have both USB-C ports available to connect other gear. It is also the best choice to suppress audible noise caused by ground loops.

Power specifications:
- Power input: 12V DC, 1200 mA min (when powered via external power supply)
- USB1 input: 5V DC, 1500 mA min (when powered via USB1)
- USB1 output: 5V DC, 1500 mA max (when Drop is USB host)
- USB2 output: 5V DC, 500 mA max (when Drop is USB host)

USB-C powering requirements: Must use USB1 port (flash symbol). Requires USB-C-to-C connection and USB host must supply at least 1500mA. Only USB-C to USB-C cables with a USB-C host or power supply can power Drop. USB-A cables and USB-A power supplies will NOT work for power, even if they meet electrical requirements. The USB-A socket does not allow the necessary power negotiation.

# Connectivity

Drop can control up to eight other MIDI devices with its user interface. Drop features 2x USB and 4x TRS MIDI ports, so that each device benefits from its own connection, providing full data bandwidth and its own clock signal with individual micro-delay.

Incoming MIDI (e.g. from keyboard, groovebox, DAW, sequencer, synth) can be distributed to other devices using Drop's Device Merger function. Drop's MIDI In and Out ports are not related to each other and can be used for different devices. It is still possible to connect devices in classic daisy-chain cabling using MIDI Thru. Drop's two CV inputs and outputs are mostly used for clock and timing. The outputs can also be variable 0-5V control voltages (12-bit DAC).

## USB, TRS, CV Pros and Cons

USB-MIDI: High data rate, not so precise with MIDI clock timing. Requires class-compliant MIDI gear if Drop is used as USB host.

TRS-MIDI: Low data rate, but mostly sufficient, especially when each device has its own cable carrying only the device's data. Precise clock timing.

CV: On Drop, same clock timing precision as TRS-MIDI.

## 2x USB-C

USB MIDI: Connect laptops or class-compliant MIDI devices to Drop. Drop automatically detects host/device role. In MENU > Settings, you can switch from Host + Device auto-detection to Device Only. As a MIDI host, Drop can supply 5V on each port (USB1 up to 1500mA, USB2 up to 500mA).

USB-hubs are not supported, only one USB device per port.

To connect MIDI devices via USB, the device must be class-compliant (no driver needed). Some manufacturers (e.g. Roland) still require drivers for their USB-MIDI gear; use classic MIDI TRS/DIN connection instead. Drop shows a popup if connected USB gear is not class-compliant.

USB keyboard: Connect a USB computer keyboard for navigation and naming. In Menu > Settings, select the appropriate layout (QWERTY, QWERTZ, AZERTY).
Navigation: Arrow keys, Escape, Enter, Backspace
Change slot: Shift + Arrow keys
CTRL+9 = MENU button
CTRL+0 = PLAY button
CTRL+1-8 = Buttons around the display, clockwise

## 4x MIDI TRS In, 4x MIDI TRS Out

Four ports enable star-topology instead of daisy chaining, providing high data throughput and individual MIDI clock delays per device. Use the small switches on the back to select TRS type A or B for Drop's MIDI output. If you pick the wrong mode, your device may not receive MIDI data from Drop.

## 2x CV Out

Drop's CV inputs and outputs support a voltage range between 0.0 and 5.0 Volts. The outputs can be used independently to send different kinds of clock signals, triggers and gates to sync analogue gear. They can also be used as simple continuous voltage outputs assignable to any of Drop's controls. Resolution is 12 bits (4096 steps).

## 2x CV In

Use CV inputs 1 and 2 to connect Drop to an external analogue clock source. CV1 expects the clock signal (16th or 8th notes) and CV2 can be configured to receive a dedicated start and stop trigger or gate signal.

Another mode lets you use CV1 and CV2 inputs to fire snapshots from external modular gear, where CV In 1 receives triggers and CV In 2 receives a control voltage to select a snapshot. Enable this in the CV Config menu.

For controlling a modular rack with Drop, use a dedicated MIDI-to-CV-out converter module.

# Step-by-Step Workflow

1. Decide which gear to use: Plan your setup and what gear to connect to Drop. Ideally, have your grooveboxes or synths play a loop first.

2. Init your project: Select Project > Clean Init for an empty project (hardware gear setup). For DAW-only setup, use Project > DAW Init for one-click initialization with default CC mapping over USB1. Skip steps 3 and 4 for DAW-only.

3. Create and configure devices: Go to the Devices menu and add devices (up to 8 max). Even if a device uses multiple MIDI channels, list it as one device. Configure clocks in this step.

4. Mapping on Drop: Each control can send up to 8 different MIDI messages with different curves (8 Slots per control). Use the Mapping menu to configure controls via manual entry, MIDI Learn, or the included MIDI CC and NRPN database.

5. Snapshots: Create snapshots as safety nets, peak moments, subsets for combining, fixed chains for song arrangements, or spontaneous save-and-recall points.

# PLAY View

The PLAY view provides performance controls and monitoring.

## Beatjump

Controls and shows the playback position inside the current cycle. Use the eight buttons around the display to jump to another playback position while playing. Performing a beatjump also sends a Song Position message to all devices that have the corresponding check mark set in the clock menu.

Display elements:
- Current playback position (e.g., bar 7 quarter note 3)
- Current Jump fade time (changes length depending on fade time potentiometer)
- Blinking cycle button shows playback position regardless of current menu
- 12 o'clock position marks cycle start/end and Drop execution time

MIDI traffic monitor indicators:
- TRS 1-4 output/input, USB 1-2 output/input
- Dark green = only clock and system data
- Green = data
- Light grey = no traffic
- Red = data overflow, lost packets
- Dark grey = nothing connected
- Blue = USB keyboard connected
- Flash symbol = USB port serves as host, delivers 5V power

## Cycle Length

Cycle length can be set from 1 to 32 bars. Drop is not a sequencer itself but keeps a global time measure. Internally, Drop uses 16 sixteenth notes per bar (relevant for clock signals).

Quick select values: 1, 2, 4, 8, 16, 32 bars
Selectable lengths: 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32 bars

## Quantization

JUMP snapshot quantization: Use the six buttons to select quantization for firing a snapshot in Jump mode.

Beatjump quantization: Select between 1 bar and 1/4th note quantization when pushing cycle buttons to change playback position.

## Monitor

The MIDI monitor helps see and debug communication between Drop and connected MIDI devices.
- Verify that Drop sends the data your device expects
- Verify that the connected device sends data back
- Check if a device sends unnecessary data that can be filtered out in the MIDI merge filter

Controls: Toggle between input and output monitoring, recording on/off, select MIDI in/out port, scroll through message history with menu encoder.

# MENU View

The MENU view provides configuration and setup options.

## Devices

Setting up devices is the first step when creating a new live set. Up to 8 MIDI devices can be configured.

Device settings:
- ON: Activate or deactivate the device and linked control elements.
- Name: Enter the device name for convenience during mapping.
- Default Channel: MIDI channel 1-16. Controls can send to default channel or a specific channel. If changing channels later, only need to change it in device menu instead of each control. Even multi-channel devices should be set up as one device; individual channel selection is available per control element.
- Output: Physical port USB1-2 or TRS1-4 for MIDI out.
- Input: Physical port USB1-2 or TRS1-4 for MIDI in.
- Sub-Port: Only relevant for USB connections. Some USB devices offer multiple internal Sub-Ports (cable number CN in USB MIDI protocol, also called virtual cables). Sub-Port 1 works for most USB gear. Range is 1-16.

Device type guidelines:
- Synths/grooveboxes: Enable MIDI Output, enable MIDI Input only if needed (for MIDI Learn, sequencer, or keyboard forwarding).
- Keyboards: Usually only MIDI Input needed. Use target device's MERGER function for forwarding.
- DAWs/workstations: Enable both MIDI Input and Output. Use MENU > Project > DAW Init for quick default initialization.

Program Change Pre-Delay: For grooveboxes that need program change messages before their pattern ends. Select from fixed milliseconds or tempo-dependent values (e.g., 3/16th notes). Should be as small as possible and as large as necessary.

Database: Drop ships with the open-source MIDI CC & NRPN database from Pencil Research (https://github.com/pencilresearch/midi). Navigate through to check if your device is supported. Database folder must be named /midi-main on the SD-card root.

## Devices Merger

Drop's MIDI merger allows forwarding MIDI input data to a MIDI output, with optional modification (e.g., transposing MIDI notes).

Use case: Control a synth with Drop's controls while also receiving notes from a MIDI keyboard, when the synth only has one MIDI-In port. Drop merges its control data with keyboard data.

Setup: Create two devices (synth with MIDI Output, keyboard with MIDI Input). In Devices menu, select the receiving device and configure Merger 1-4.

Each device has 4 Merger instances, allowing up to 4 different MIDI input streams per device.

Merger settings:
- Merge: Activate the merger instance
- Input: Source device (must have MIDI Input enabled)
- Listen to Channels: Select MIDI channels carrying relevant data

Message filters:
- Notes: Filter On/Off for MIDI note events
- Bank, CC: Filter On/Off for CC messages (includes 14-bit CC, NRPN, Bank Select)
- Pitchbend: On/Off filter
- Aftertouch: On/Off filter (channel pressure and polyphonic key pressure)
- Prog Chg: On/Off filter for program change messages

Target Channel options:
- No Change: Leave MIDI channel as received
- By Device: Modify to device's Default Channel
- Channel 1-16: Modify to specific channel

Note Gate: Enables mute/unmute for incoming MIDI notes.
- Off: Disabled
- On: Max value = notes pass, min = blocked
- On, inverted: Max = notes blocked, min = pass
- Link: Assign a control element to Note Gate function

Note Transposition (Semitone/Octave):
- Shift/Min: Lower boundary of shifting range
- Max: Upper boundary of shifting range
- Link: Assign a control element to shift function

Note: Incoming SysEx messages are not forwarded. When a MIDI cable is pulled while notes are on, use note panic (Shift + MENU) or stop playback to silence stuck notes.

# Mapping

Two main categories of MIDI receiving devices:

1. Devices with fixed mapping table (synths, grooveboxes): The device expects specific MIDI messages per parameter. Start with an empty project and populate controls. Mapping methods:
   - Look up the MIDI mapping table and manually enter parameters
   - Use MIDI Learn on Drop (device must send MIDI output for parameter changes)
   - Use the Pencil Research MIDI database if your device is listed

2. Devices with MIDI learn (DAW, workstations): Too many parameters for a fixed table. Use Project > DAW Init to apply default mapping so each control sends a unique MIDI CC or Note message. Then map in the DAW.

## Control Element Configuration

Navigate to MENU > Mapping and turn, push, or move the control element to configure.

General settings:
- Active: Turn control on/off (remembers settings when re-activated)
- Color: 9 distinguishable colors available
- Name: Name the control element for reference

Behavior settings by control type:

Rotary knob turn:
- Precision: Slow turning for precise adjustments
- Dynamic Pot: Emulates potentiometer, physical position corresponds to LED ring
- Dynamic Fast: Sensitive to movement, precise when turning slowly

Rotary knob push:
- Toggle: Alternately sends min/max value
- Temporary: Sends max when pressed, min when released (use with DAW MIDI feedback)
- Quick Turn: 4x faster turning speed while pressed
- Reset Left/Center/Right: Resets rotary position when pressed

Mute button:
- Toggle: Alternately sends min/max value
- Temporary: Max when pressed, min when released

Fader:
- Layer AB dual: Separate faders for Layer A and B
- Layer A only: Layer A fader in permanent operation even on Layer B (requires manual catch)

LED style (rotary knob turn):
- Line from left: For 0-100% unidirectional values
- Line from center: For ±100% bidirectional values
- Dot: Minimalist single LED dot
- 1-25 Steps: Discrete step visualization using individual LEDs
- Blank: Value not shown (useful with Relative MIDI output curve)

Drop Prio:
- Normal: MIDI output sent right after Drop (default)
- PreDrop: MIDI output sent right before AND right after the Drop (ensures timing-critical messages like kick unmute hit the downbeat)

CV Out link: Shows if control element is mapped to CV OUT 1 or 2. Configured in MENU > CV Config.

Merge link: Shows if control element is linked to any Device Merger parameter.

Feedback by MIDI-In: Control elements can be remotely controlled by receiving MIDI. Requirements:
- The linked MIDI device slot must have a MIDI-Input port set
- Slot curve should be set to Linear
- NRPN messages are not supported for feedback
DAWs offer good support for MIDI feedback. Hardware gear usually does not send feedback when switching programs.

## MIDI Output Slots

Each control element offers eight slots for different MIDI Output messages to different devices.

Slot settings:
- Slot: Activate the slot
- Device: Select one of the eight configured devices
- Channel: MIDI channel 1-16, or 'by device' for default channel

Message Types:
- Note On (Buttons + snapshots only): For on/off parameters
- CC (All controls + snapshots): Most commonly used control change, value range 0-127
- CC 14 / CC 14 LSB first (All controls + snapshots): Two consecutive CC messages for 14-bit resolution. LSB or MSB first (default)
- NRPN (All controls + snapshots): 14-bit resolution with more parameter numbers than CC, value range 0-16383. CC preferred for fast response times
- Pitchbend (All controls + snapshots): 14-bit resolution, range -8192 to +8191
- Aftertouch (All controls + snapshots): Channel pressure message
- ProgChg (Snapshots only): Program change, value range 0-127
- Prog + Bank (Snapshots only): Bank select followed by program change

Output range and curve:
- Max: Upper limit of output curve
- Min: Lower limit of output curve
- Invert: Switches Min and Max, inverting the curve on Y-axis
- Duplicate: Copy current slot to next free one
- Curve (faders and rotary knobs only): Linear, Exponential, left/right half only, On-Off with different thresholds, 1-25 steps, relative encoder messages

Hold Shift + Turn menu encoder for coarse/fine adjustments.
Hold Shift + Turn/push/move control to send only the currently selected slot (useful for DAW mapping).

MIDI Learn button available for convenient parameter learning. MIDI Database button available when device has assigned database file.

## MIDI Learn

Drop can listen to incoming MIDI messages and apply their parameters to a control element as outgoing MIDI message.

Setup:
1. Ensure the connected device sends MIDI output for parameter changes (often must be enabled in device settings)
2. Connect device's MIDI output to one of Drop's MIDI inputs (or use USB)
3. Enable and select corresponding MIDI input in Drop's Device settings
4. Use PLAY > Monitor to verify incoming/outgoing messages

Process:
1. In MENU > Mapping, enter the slot to map
2. Push the Learn button (top right)
3. Drop shows live recording of incoming MIDI messages
4. On the device, move the parameter to map
5. Use lower buttons to select another MIDI input port if needed
6. Press upper right button to stop live recording
7. Scroll through history and select the message by pushing menu encoder

Messages that cannot be assigned to the control element type are shown in red (e.g., Note messages cannot be assigned to rotary encoders and faders).

## MIDI CC & NRPN Database

Drop ships with the open-source MIDI database from Pencil Research (https://github.com/pencilresearch/midi) containing mapping tables of many popular devices.

Setup:
1. Go to MENU > Devices > Database and check if your device is listed
2. Select the file to assign it to the device
3. Enter MENU > Mapping, select the control element
4. On the Slot page, select the device with assigned database file
5. Push the green Database button to select parameters from a list

Options when applying:
- Name: Set control element name according to selected parameter (cropped to short name, editable)
- MIDI-feedb: Set control element's MIDI feedback selection to newly assigned slot
- LED style: Set LED ring to Line from left or Line from center based on database entry
- Apply: Fill MIDI parameters with database data
- Back: Select another parameter

## Copy and Move a Control Element

Control elements can be copied and moved within their own category (fader to fader, rotary to rotary, etc.).

- Move: Moves the whole control element with mapping, also to another layer. Links to CV Out and Mergers also move.
- Copy: Copies the whole control element with mapping, also to another layer. Links to CV Out and Mergers stay at the original control.

Process: Push Copy or Move, then turn/push/move the target control element.

# Snapshots

Snapshots save and recall the state of rotary positions, button on-off status, and fader positions. A project contains 20 banks with 20 snapshots each (400 total).

Capabilities:
- Can contain all of Drop's control elements or only a subset
- Can hold up to 8 MIDI messages sent as one-shots (including program change and bank select)
- Can be recalled in Jump mode, Drop mode, or both simultaneously

Jump mode: Executed with adjustable fade time (can be zero for immediate). Drop mode: Scheduled to execute at end of current cycle (1-32 bar pattern end), no fade time, automatically ends ongoing Jumps.

The combination of Jumps and Drops enables buildup-to-drop transitions across up to eight hardware devices.

Chain mode: Prepare sequences of Jumps and Drops in advance. 20 chains with up to 64 snapshots each.

Use cases:
- Safety net when improvising
- Saving spontaneous ideas for later
- One-button reset for effects across devices
- One-button preset/pattern switching on multiple devices
- Automating sub-tasks during performance
- Song arrangement stepping (manual or automated)

## Save Snapshots

Push the SAVE button to enter save view. Control elements turn red (deselected) or green (selected).

Selection controls:
- Rotary knob: Turn right = select (green), turn left = deselect (red)
- Rotary push and round buttons: Push = toggle selection
- Fader: Move up = select (green), move down = deselect (red)

Features:
- GROUP: 8 selection groups for fast switching between common selections
- Values mode: Change control values instead of selecting/deselecting
- Color: Set snapshot color by turning menu encoder
- Select mode: Default save view mode

To save: Push the snapshot button where you want to store the current state.

## Edit Snapshots

Edit existing snapshots. Can enter MIDI messages sent as one-shots when executed.

Features:
- Move: Move snapshot to another button (overwrites existing)
- Values mode: Change control values
- Color: Change snapshot color
- Select mode: Default edit view
- MIDI message slots: Up to 8 slots for MIDI messages including Program Change and Bank Select. Fixed message value sent every time. Note On messages are immediately followed by Note Off.
- Name: Set a name for the snapshot

Copy snapshots: Press Shift + copy to select source, then press target. Options:
- Also copy MIDI slots
- Create Auto name (otherwise copies source name)

## Jump Mode

In Jump mode, snapshots execute as soon as the snapshot button is pressed.

- Blue = Currently executed in Jump mode
- Multiple snapshots can be active in parallel (if enabled in MENU > Settings). Last pushed snapshot has priority for overlapping controls.
- Fade time potentiometer: Fully left = instant jump, fully right = maximum fade time (one full cycle by default, configurable in MENU > Settings)
- Remaining time shown as blue circle line
- Fade time can be altered while Jump is in progress
- Buttons blink blue regardless of current view
- Quantization can be set in PLAY menu (also applies to remote MIDI triggers)
- Latest snapshot setting: Last pressed snapshot keeps blinking softly (stopped by stopping playback or pressing JUMP/DROP again)

## Drop Mode

In Drop mode, snapshots are scheduled to execute at the end of the cycle.

- Red = Currently scheduled snapshot
- Multiple snapshots can be scheduled simultaneously (if enabled in MENU > Settings)
- No fade time - changes happen instantly
- SINGLE: Drop occurs once
- REPEAT: After execution, automatically re-scheduled for next cycle

Drop and Jump can operate simultaneously: A snapshot fading via Jump while another is scheduled for Drop. The Drop will end the Jump automatically, creating a buildup-to-drop transition.

## Manual Fade Mode

Use the potentiometer to manually fade from current state to another snapshot.

Process:
1. Hold Jump button while pressing the snapshot (can select multiple if enabled)
2. Move potentiometer all to the left to start
3. Turn right to fade toward selected snapshots (rightmost = 100%)

Button presses and MIDI data from the snapshot are sent when potentiometer leaves 0%. Returning to 0% changes button values but does not re-send snapshot MIDI messages.

Exit methods:
- Push bottom circle buttons to exit (leave as-is or reset to original state)
- Push Jump button again (leaves state as-is)
- Schedule a Drop (also leaves manual fade)

## Chain

The chain function allows preparing and playing back a series of snapshots in a specific order for song arrangements.

- 20 chains available, just as 20 snapshot banks
- Snapshots always fired exclusively in chain mode (one at a time)
- Manual snapshot triggering still works during chain playback
- Each chain can be up to 64 snapshots long, from any of the 20 banks

Controls:
- Enter: Shift + chain
- Stop playback: Shift + SINGLE or Shift + REPEAT
- Select: Switch chains 1-20 (stops current chain)
- Name: Name each chain (e.g., song name)
- Add +: Add snapshot to chain at selected position. Select Pause to insert a line without firing.
- Del -: Delete currently selected entry

Per-snapshot settings:
- Jump or Drop mode
- Fade time
- Cycle length after execution:
  - "Stop": Do not continue chain playback
  - "-": Leave cycle length as-is
  - "1-32 Bars": Set to specified length

Start chain playback from any position using upper left circle button.

## Link Chains and Banks

In MENU > Settings:
- Chain to Bank: Selecting another chain automatically selects corresponding snapshot bank
- Bank to Chain: Switching banks automatically selects corresponding chain

Switching chains always stops playback of the current chain. Bank-Chain linkage is useful for song-based performances with one chain and one bank per song.

# Clock

Drop can send MIDI and CV clock signals and sync its own tempo to incoming MIDI or CV clock. Access via Shift + clock.

## Clock Settings

BPM: Set tempo in beats per minute.

Source options:
- Internal: Drop is master clock. Incoming MIDI and CV clock ignored.
- Ext MIDI: Drop syncs to incoming MIDI clock signal. Start/Stop determines if Drop listens to Start/Stop messages. Song Pos checkbox for song position pointer messages (causes remote beat jump). Note: Do not activate Song Position when linking another Drop in MENU > Remote Receive.
- CV clock: Drop syncs to incoming CV clock. CV1 is always clock signal, CV2 configurable in MENU > CV In/Out.

MIDI clock device: Select the MIDI clock source device.

Nudge BPM: Upper blue buttons temporarily speed tempo up or down (internal clock only).

ReSync: Sends Stop + Start message to all MIDI clock outputs at beginning of next bar. Usually inaudible, sets everything back in sync.

## Clock Delays

Counteract different audio processing latencies of connected gear.

- Left value: Clock delay in milliseconds (independent of tempo, counteracts audio processing time)
- Right value: Clock delay in MIDI clocks (for DAWs/sequencers that don't count first MIDI clock packet correctly)

Setup process:
1. Start with all delays at 0
2. Ensure every device receives MIDI clock from Drop
3. Start playback and identify devices playing ahead or behind by ear
4. Choose a reference device (expected largest latency), let it play and unmute others one by one

Typical latencies: Hardware gear 1-3 ms, DAWs can have significant and varying delay times.

Positive delay times are preferred. Negative delay values cause clock to speed up after start until target pre-delay is reached, so playback is only in sync after a short time.

## Clock Send Enable

Send MIDI clock while stopped: Should be enabled unless it disturbs a connected device. Constantly updates tempo on receiving device for better timing precision.

Per-port clock output enable:
- Left checkbox: MIDI Clock (tempo information)
- Middle checkbox: MIDI Transport (start/stop messages)
- Right checkbox: Song position pointer (playback position within cycle, sent on beatjump)

Default setting: Two left checkmarks enabled (clock + transport) - correct for most grooveboxes, synths, and DAWs.

Note: If linking another Drop in MENU > Remote > Send, do not activate Song Position messages.

Clock to Sub-Ports of USB1/2: Select which sub-ports (1-16) receive clock, transport, and song position messages.

# CV Config

Two CV inputs and outputs, all designed for 0-5V. Outputs: 12-bit resolution (4096 steps). Inputs: 16-bit resolution (65536 steps).

## CV OUT 1+2

Signal options:
- Linked Control: Assign any control element directly to CV output. Turning knob or moving fader linearly changes CV output between Min and Max voltage. Use Set Link to assign, clear to remove.
- 24/12/8/4/2 PPQN Clock: Clock signal with specified pulses per quarter note, 5ms pulse length
- 16th/8th/4th/1Bar Clock 50%: Clock signal with specified frequency, 50% duty cycle
- Start Trig: One-shot trigger when playback starts
- Is Running Gate: Max voltage while playing, Min when stopped
- Cycle Start Trig: Trigger at start of each cycle
- Cycle/Bar Pos CV: Linearly rising voltage corresponding to cycle/bar progress
- Jump Prog. Rise/Fall: Linearly rising/falling voltage corresponding to Jump progress

Min/Max: Set minimum and maximum output voltage range (0.0-5.0V). Clock signals are rising edge by default; invert Min and Max for falling edge. Hold Shift for faster parameter changes.

## CV IN 1+2

CV inputs can be used for clock signals or snapshot triggering.

CV IN1 clock speeds:
- 4PPQN (16th notes)
- 2PPQN (8th notes)

CV IN2 modes:
- Without function: CV IN2 ignored. Playback starts with first rising edge at CV IN1, stops when clock signal stops.
- Start Trigger: Starts clock on trigger at CV IN2
- Start/Stop Gate: Playback runs while CV IN2 signal is high, stops when low

CV IN1+2 combined mode:
- Jump Snapshot Trig / Jump Snapshot Select: Connect sequencer CV and gate outputs. CV IN2 selects snapshot (0-5V mapped to 20 snapshots of current bank). Rising edge at CV IN1 fires snapshot in Jump mode. Potentiometer determines fade time.

# Remote

Drop can be remotely controlled via MIDI. Link two or more Drops, or use another MIDI device to control Drop's functions.

## Jump by MIDI Notes

Fire snapshots from an external MIDI source. Affects only the 4x5 snapshots of the current bank. Fired in Jump mode with fade potentiometer determining time. PLAY > Quantization used for timing.

Modes:
- Off: Ignore notes
- By Pitch: Note number (pitch) selects snapshot. Base Note and 19 notes above mapped to one snapshot each. Out-of-range notes are cropped. Base note = lower left snapshot, highest note = upper right. Use with programmable MIDI sequencer.
- Velo 1-20: Only base note triggers. Velocity values 1-20 select snapshot (cropped if >20). Velocity 0 = lower left, >=20 = upper right. Use with programmable MIDI sequencer.
- Velo 1-127: Only base note triggers. Full velocity range 1-127 spread evenly across snapshots. Use with MIDI trigger pad played by hand.

## Receive and Send

Drop's functions can be remotely accessed via MIDI CC messages with three depth levels.

Setup for linking two Drops: Add a Device for the other Drop with MIDI out and input ports. Enable Receive and Send independently in MENU > Settings. For bidirectional control, enable both on both Drops with matching MIDI channels. MIDI clock must be set up separately.

Modes:
- Jam Mode: For playing a live set with a partner. Ensures Drop moment and cycle playback position are in sync. Each player's setup is otherwise independent.
- Dual Mode: Use second Drop as extension for more control elements and hardware ports. Bank selection, snapshot settings (quantization, exclusiveness, fade time) are synchronized.
- Full Mode: Goes beyond Dual mode - scheduling or firing a Snapshot on sender also fires the same snapshot on the receiver Drop.

## Remote MIDI CC Table

CC#11-30: Fire snapshot in Jump mode. CC number selects snapshot (1=bottom left, 20=top right).
  Value 0: Do nothing
  Value 1-20: Emulate button push, value selects bank 1-20
  Value 21-40: Start manual fade, value selects bank 1-20
  Value 41-60: Force fire snapshot in Jump, value selects bank
  Value 61: Same as 1-20 on currently active bank
  Value 62: Same as 21-40 on currently active bank
  Value 63: Same as 41-60 on currently active bank
  Value 64: Do nothing
  Value 65-84: Same as 1-20, exclusively
  Value 85-104: Same as 21-40, exclusively
  Value 105-124: Same as 41-60, exclusively
  Value 125: Same as 1-20, exclusively, active bank
  Value 126: Same as 41-60, exclusively, active bank
  Value 127: Same as 61-80, exclusively, active bank
  Available in: Full mode only

CC#31: Stop all ongoing Jumps.
  Value 0: Do nothing
  Value 1: Stop all Jumps. Manual fade: Exit & Reset
  Value 2-127: Stop all Jumps. Manual fade: Exit
  Available in: Full mode only

CC#41-60: Schedule snapshot in Drop mode. CC number selects snapshot (1=bottom left, 20=top right).
  Value 0: Do nothing
  Value 1-20: Emulate button push, value selects bank 1-20
  Value 21-40: Remove snapshot from ongoing Drop, value selects bank 1-20
  Value 41-60: Force schedule snapshot, value selects bank 1-20
  Value 61: Same as 1-20 on currently active bank
  Value 62: Same as 21-40 on currently active bank
  Value 63: Same as 41-60 on currently active bank
  Value 64: Do nothing
  Value 65-84: Same as 1-20, exclusively
  Value 85-104: Same as 21-40, exclusively
  Value 105-124: Same as 41-60, exclusively
  Value 125: Same as 1-20, exclusively, active bank
  Value 126: Same as 41-60, exclusively, active bank
  Value 127: Same as 61-80, exclusively, active bank
  Available in: Full mode only

CC#61: Stop all ongoing Drops.
  Value 0: Do nothing
  Value 1-127: Un-schedule Drop
  Available in: Full mode only

CC#1: Multiple Jumps (MENU > Settings).
  Value 0: Allowed
  Value 1-127: Not allowed
  Available in: Dual, Full

CC#2: Multiple Drops (MENU > Settings).
  Value 0: Allowed
  Value 1-127: Not allowed
  Available in: Dual, Full

CC#3: Set fade time (overrides potentiometer, LED blinks until caught).
  Value 0-127: Fade time 0-100%
  Available in: Dual, Full

CC#4: Jump time (MENU > Settings, maximum fade time).
  Value 0: One full cycle
  Value 1-6: 10/20/30/40/50/60 seconds
  Available in: Dual, Full

CC#5: Cycle length (PLAY > Length, bars per cycle).
  Value 0: Do nothing
  Value 1-32: Number of bars (rounds down to nearest allowed value)
  Available in: Jam, Dual, Full

CC#33: Jump quantization (PLAY > Quantization).
  Value 0: No quantization
  Value 1: 1/16th
  Value 2: 1/8th
  Value 3: 1/4th
  Value 4: 1/2th
  Value 5-127: 1 bar
  Available in: Dual, Full

CC#34: Beatjump quantization.
  Value 0: 1 bar
  Value 1-127: 1/4th note
  Available in: Jam, Dual, Full

CC#35: Drop mode.
  Value 0: Single
  Value 1-127: Repeat
  Available in: Dual, Full

CC#36: Snapshot BANK select.
  Value 0: Do nothing
  Value 1-20: Bank number
  Available in: Dual, Full

CC#37: Chain start and stop.
  Value 0: Do nothing
  Value 1-20: Chain number (re-)start
  Value 21: Stop current chain
  Available in: Dual, Full

CC#39: Beatjump Button ID.
  Value 0: Do nothing
  Value 1-8: Circle button ID
  Available in: Jam, Dual, Full

CC#40: Layer select.
  Value 0: Activate Layer A
  Value 1-127: Activate Layer B
  Available in: Full only

# Grid Mode

In Grid mode, Drop's button matrix can be used as a mini keyboard (Notes Mode) or a clip launcher (DAW Grid Mode).

## Notes Mode

Use the buttons as a small keyboard to send MIDI notes to a connected synth.

Settings:
- Device: Select MIDI device for note output
- Channel: Set MIDI channel
- Scale: Select note scale in semitones (exclude non-matching notes)
- Velo: Velocity value of Note-On messages

Use four blue buttons to change root note (bottom left button) in octaves or semitones. Root note buttons light up white.

## DAW Grid Mode

Use the buttons to launch clips and scenes within Bitwig or Ableton Live.

Controls:
- Device: Select the DAW device
- Grid move: Blue buttons to move the grid box
- Clip buttons: Upper 4x4 buttons to launch clips (show clip color, play/record/triggered status)
- Track stop buttons: Lower 4x1 white buttons to stop track clips
- Hold Shift: Access secondary layer with stop-all-clips button and scene launch buttons

Default MIDI channel assignments:
- Channel 1: Rotary encoder and fader, CC messages
- Channel 2: Rotary and Track button push, Note messages
- Channel 16: Clip launcher buttons and LED feedback, Note messages

## Bitwig Setup

Bitwig natively supports Drop from version 6 onward. For earlier versions, download Drop.bwextension from Neuzeit website and move to Bitwig's extension folder.

In Bitwig settings: Add Controller > Neuzeit Instruments > Drop. Optionally enable Drop as clock source and ensure Drop sends clock and transport messages.

The extension works with default PROJECT > DAW-Init settings and ensures correct LED feedback. Set keyboard MIDI channel in the Keyboard Channel field (extension must be toggled off/on after changing).

## Ableton Live Setup

Download remote script files from Neuzeit website and copy to:
- Windows: \Users\[username]\Documents\Ableton\User Library\Remote Scripts\Drop
- Mac: Macintosh HD/Users/[username]/Music/Ableton/User Library/Remote Scripts/Drop

Create Remote Scripts and Drop folders if needed. Restart Ableton Live.

Control Surface setup:
- Select Drop as control surface, activate Input and Output
- In: Activate Remote (map controls), Track (forward MIDI notes from Merger), Sync (Drop as master clock)
- Out: Activate Remote (receive MIDI feedback), Track (receive notes from clips), Sync (Ableton as master clock)
- Set Song or Pattern as MIDI clock type (Song for timeline beatjump sync)

## Settings

Options:
- Brightness: Overall LED and display brightness (stored globally)
- Default Color: Default LED color for new control elements
- Keyboard layout: QWERTY/QWERTZ/AZERTY (stored globally)
- Moving shows: Display name and/or value when moving a control element
- Latest Snapshot: Last executed snapshot button keeps blinking softly
- MENU but returns to root: MENU button goes to root vs. one step back
- Multiple Drops: Allow multiple snapshots scheduled simultaneously as Drop
- Multiple Jumps: Allow multiple snapshots combined in a Jump
- Jump time: Maximum Jump time at full potentiometer position (1 cycle, or 10-60 seconds fixed)
- Send all after load: Send all control element values and Remote TX messages when loading a project. Press Shift + Play to force-send anytime.
- Chain to Bank: Selecting a chain also changes snapshot bank
- Bank to Chain: Selecting a bank also selects corresponding chain
- USB1/2 port mode: Host + Device (auto-detect) or Device Only (no power supply to connected device)

## Test Mode

Push the Test button to verify Drop's hardware. Turn encoder to switch pages. Test all LEDs, push buttons, encoders, faders, CV and TRS inputs/outputs.

Note: In test mode, CV and MIDI will not work. Test signals (0-5V ramp) and test messages are sent over all CV and TRS outputs (not valid MIDI data).

## Project Management

In MENU > Project: save, recall, create, rename, and delete projects.

Projects stored on Micro SD card in /Projects folder as .json (human-readable, open for future web editing). Can navigate subfolders inside /Projects.

Functions:
- Save Project: Store current project. NEW+ to create new or select existing to overwrite/rename.
- Load Project: Select and load. NEW+ for empty project (same as Clean Init).
- Rename Project: Give existing project a different name.
- Delete Project: Delete from SD card permanently (with safety confirmation).

Purge Project (cleans up without changing functionality):
- Reset unused devices: Reset parameters of devices not turned ON
- Re-sort device order: Close gaps between active devices (e.g., 1,3,4,7 → 1,2,3,4)
- Remove inactive controls: Turn off control elements with no MIDI mapping or internal links. Also checks snapshots.
- Reset unused slots: Reset MIDI slots that are unused or mapped to inactive devices
- Re-sort slots: Close gaps between active slots

## DAW Initialization

Use Project > DAW Init to initialize Drop for DAW use. Each control element is activated with a MIDI message. Do all mapping in the DAW.

What DAW Init does:
- Clears the whole project (mappings, devices, snapshots, groups)
- Activates one Device named 'DAW' set to USB1 port
- Activates all control elements with unique MIDI CC or Note messages on channels 1 and 2 (Slot 1)
- Activates Feedback by MIDI-In assigned to Slot 1

Options:
- Device: Device slot ID for DAW device
- Port: Physical port (if TRS, connect both Input and Output)
- Color Start: Color of first line/row/all controls
- Color Mode: Per Line, Per Column, or Same Color
- Quickturn: Active = rotary push is Quickturn (no MIDI out); Inactive = rotary push is MIDI button

## Hardware Initialization

Use Project > Clean Init as starting point for hardware device setups. All control elements and devices deactivated and reset (dark control surface).

Best for devices with MIDI mapping tables (most synths and grooveboxes). Activate only needed controls and set up the specific MIDI messages.

For devices with internal MIDI learn: Start with empty project, activate needed controls with default unique messages, then use receiver's learn function.

## Default Mapping

Default MIDI mapping applied to control elements when using Purge Project, Create New, DAW Init, or Clean Init:

- Pink: MIDI CC message, channel 1
- Blue: MIDI Note message, channel 2
- Green: MIDI Note message (slots deactivated by default, note numbers 0-119 pre-set, repeating after bank 7)

Skipped CC numbers (used for NRPN and Bank Change): CC#0, #6, #32, #38, #97, #98. This prevents mapping intersection.

# Troubleshooting

Common issues and solutions:

MIDI Monitor: Use PLAY view's MIDI Monitor to see messages going in/out at each port. Keeps history, can stop recording and scroll.

MIDI TRS type A or B: Two historical standards with tip and ring switched. Use switch on each MIDI Output TRS port. Wrong type = no MIDI data. Drop receives both types on input; switch only affects output.

MIDI USB class-compliant: Communication only works with class-compliant devices (no driver needed). Some Roland and Boss devices are not class-compliant. Use TRS MIDI instead. Drop shows error and offers Log file.

USB sub-port: USB MIDI uses sub-ports (cable ID, virtual cable, range 1-16). Most devices use one, some offer multiple. Set in MENU > Devices or try to find correct one.

MIDI channel: Ensure Drop's send channel matches receiving device. Drop uses 1-16 numbering per MIDI spec; some devices use 0-15.

USB hubs: Not supported, one direct USB connection per port only.

MIDI port selection: Input/Output ports in MENU > Devices are physical connection ports, not routing. Use Merger function for routing between devices.

When to enable MIDI Input port:
- Device is a keyboard or sequencer
- Device sends MIDI feedback when turning knobs (for use in Drop or MIDI Learn)

Warnings: Do not ignore '!' warning signs in mapping and setup menus. Usually indicates messages not being sent/received.

MIDI Feedback: Enable only if needed. When using multiple slots, incoming feedback triggers all slots. Can create feedback loops.

MIDI feedback loop example: Rotary mapped to Synth-A filter (Slot 1) and Synth-B volume (Slot 2) with feedback on Slot 1. Turning Synth-A's filter updates Drop's rotary, which sends to Slot 2 (Synth-B) but not back to Slot 1 (loop prevention).

Remote TX/RX: Only enable Remote functions if needed. Incoming MIDI may change settings unnoticed; Drop may send unintended messages.

MIDI feedback loops: Caused when devices respond to received messages creating infinite back-and-forth. Can occur across three or more devices. Use MIDI Monitor to diagnose.

Performance optimization:
- Use Merger's message filters, enable only what's needed
- Send MIDI clock only to ports/devices that use it
- Check if receiving devices need Start/Stop and Song Position
- Disable unused control elements to prevent unnecessary MIDI in snapshots

# Miscellaneous

Warranty: 24-month warranty from date of purchase covering material and manufacturing defects during normal use. Excluded: improper handling, accidents, modifications, normal wear, non-approved accessories/power supplies. Contact dealer or customer service with purchase receipt.

Safety Warnings: Use only supplied or manufacturer-approved power supply. Do not expose to moisture, rain, or extreme temperatures. Ensure ventilation, avoid heat sources. Disconnect power when not in use for long periods. Do not open or repair device (electric shock risk, voids warranty). Use as described in manual and per local electrical regulations. Keep out of reach of children.

Regulatory: Subject to WEEE Directive. Do not dispose in household waste. Use local electronic waste collection points.

Contact:
- ModWiggler forum for discussion
- Email: contact@neuzeit-instruments.com
- Website: https://www.neuzeit-instruments.com/drop (latest firmware and manual)
