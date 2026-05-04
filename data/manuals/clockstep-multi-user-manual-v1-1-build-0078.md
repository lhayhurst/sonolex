---
id: clockstep-multi-user-manual-v1-1-build-0078
title: "CLOCKstep:MULTI - User Manual v1.1 (Build 0078)"
source: "CLOCKstepMulti_User_Manual_1_1_0078.pdf"
convertedAt: 2026-03-20T15:11:31.461Z
summary: "The CLOCKstep:MULTI (CS:M) by JMK Music Pedals is a master MIDI clock, analog sync generator, transport controller, audio metronome, and sample-accurate clock bridge in a single pedal. It can serve as the sole clock hub for MIDI and Eurorack systems, synchronizing all connected gear via MIDI DIN, MIDI USB, TRS MIDI, and up to five independent analog sync outputs. Advanced features include live drummer tempo tracking (Follow Beat), MIDI message quantization and repeating, latency compensation, configurable metronome with swing, and 40 storable presets."
---

# Introduction

CLOCKstep:MULTI is a Master MIDI Clock, Analog Sync, Transport Controller, Audio Metronome and Sample Accurate Clock bridge all in one box.

Key capabilities:
- Stand Alone Clock: CS:M's internal clock can synchronize all connected gear without any other device. It can be the sole Clock Hub in your MIDI or Eurorack system.
- Transport Controller: Transport functions and Clock can be controlled independently depending on the user's Transport Mode selection.
- Audio Metronome: Configurable with 16 sounds, subdivision volumes, time signatures and swing settings.
- Analog Sync Outs: Two analog trigger sync outs configurable for different sync rates. Up to three more analog trigger outs can be configured as sync outs for a total of five independent sync outs.
- Sample Accurate Clock Sync: CS:M can bridge protocols between a DAW and other connected MIDI Clock or Analog Sync hardware devices.
- Latency Compensator: CS:M can offset the timing of a sync when following a Sample Accurate Clock Source or another MIDI Clock source to help phase align equipment.
- MIDI Quantize/Repeat: MIDI Commands that come through CLOCKstep:MULTI can be held in memory and delivered to other MIDI devices precisely aligned to the top of a bar.
- Follow Beat: Sophisticated beat detection analysis gives CS:M the ability to follow the input of a live drummer and let the generated clock tempo groove with them.
- Presets: All features can be organized and stored into 40 Presets.
- MIDI API: An extensive MIDI API allows CS:M to be controlled from an external programmable MIDI Controller or DAW in nearly every way possible.

# Connections



## Patch Bay Connections

The front patch bay provides 3.5mm TS jacks:
- PLAY: 0/+5 Volt Gate for sending Transport Start and Stop commands. Signal is HIGH when Transport is started and LOW when stopped.
- RESET: 0/+5 Volt Trigger for sending a command to reset a sequence from the beginning. Sent with a Start command, except when resuming from Pause.
- START: 0/+5 Volt Trigger for sending a discrete Transport Start command.
- STOP: 0/+5 Volt Trigger for sending a discrete Transport Stop command.
- SYNC 1 & 2: 0/+5 Volt Triggers for sending clock signals. Clock rate is configurable independently for each sync output.
- START/STOP: 0/+5 Volt Trigger to toggle sending both Start and Stop commands.
- MIDI OUT: TRS "Type A" MIDI Output which mirrors the MIDI DIN Output.

## Rear Connections

- MIDI IN: Standard DIN Connector for receiving MIDI data.
- MIDI OUT: Standard DIN Connector for sending MIDI OUT and THRU data.
- AUDIO OUT (CLICK): TS Line Level Audio Output for sending Click audio to a mixer for tempo monitoring.
- AUDIO IN (SYNC): TS Line Level Audio Input for receiving 24 PPQN audio pulses or Drum Performance audio.
- POWER: 2.1mm Barrel Connector. Center Negative. 9v DC. 200 mA Nominal current.

## USB Connection

On the right side is a USB connection. This is a Class-Compliant MIDI Device connection that will be seen as a 1x1 MIDI connection on a host computer. It's also used for updating the firmware.

# User Interface

The UI consists of a 4x4 button grid with LEDs. Each button's primary function in the Main View is labeled beneath it.

- Press to activate function, or Hold to access secondary features.
- When accessing functions, the arrangement of lights and buttons will change to indicate a new set of choices. In many cases, the new arrangement is for the selection of a value between 1-16.
- The lower right button is consistently used as an Exit button to return to the previous view when you hold it. It will be lit blue to indicate that it is an Exit button.
- Blue can also be used in some Views to indicate both a value selection and exit with 1 press (Automatic Exit).

Main View buttons: MUTE, SOUND, VOLUME (row 1), 2, 3, 4, TEMPO (row 2), TRIPLET, SYNC (row 3), PLAY, RESET, START, STOP, PRESET, START/STOP, MIDI OUT (row 4/patch bay).

# Transport and Clock

There are 2 buttons for controlling Start, Stop, Pause and Continue. These buttons work as determined by the user's choice of Transport Mode.

## Simple Transport Mode

This is the default mode. The Start/Pause button simultaneously begins running the Clock and sends Start commands to all connected devices. While started, this button pauses the Clock and sends Stop commands. While paused, it resumes the Clock and sends Start/Continue commands. The Clock/Stop button stops the unit if currently started or paused. Starting or Stopping the Clock cannot be performed independent of the Transport commands.

## Resync Transport Mode

Similar to Simple Transport Mode, but Pause is replaced by a Resync function. While started, the Start/Pause button resyncs the Metronome Bar and all connected devices (by sending Stop, Reset, Song Position Pointer=0 and Start in that order). If the clock is currently running, this button sends the Resync command set while simultaneously aligning the Metronome Bar to this point.

## Align Transport Mode

A hybrid of Simple and Resync modes. When Clock is not running, Start/Pause begins Clock and sends commands. While started, it pauses Clock and sends Stop. While paused, it resumes Clock and sends Start/Continue. While started, Clock/Stop sends Stop commands but does not stop CS:M's own Clock and Metronome until pressed a second time. While stopped, this button begins running CS:M's internal Clock independently of Transport commands.

## Quantize Transport Mode

Ensures Start commands are always perfectly aligned with the downbeat of the next Metronome Bar. If Clock is not running, Start/Pause only flashes indicating a pending state. If Clock is running, it places Start into a pending state until the top of the next Bar. While started, Clock/Stop sends Stop commands but does not stop CS:M's own Clock until pressed a second time. While stopped, Clock/Stop begins running internal Clock independently of Transport.

## Independent Transport Mode

No rules. Transport and Clock functions are independent from each other except in the case of Pausing. While paused, the Start/Pause button resumes the Clock and sends Start/Continue commands.

## External Transport Mode

With External Clock: Automatically Starts the Transport based on detection of the first incoming Clock Pulse. The Start/Pause button will cue Start for the top of the next Bar (like Quantize mode). If using Negative Offset Latency Compensation, there will be a 1 Bar pre-roll before automatic Start. Clock/Stop stops Transport and sends Stop commands without affecting the external Clock signal.

With Internal Clock: This mode only uses the Clock/Stop button to Start and Stop everything when External Clock is not present. If Transport is pending Start, pressing either button cancels the start action.

# Tempo

Internal Clock rates range from 10-255 BPM.

## Tap Tempo

Tap on the Tempo button to set a new tempo using a Quarter Note feel. It takes several taps for the tempo calculation to begin.

## Exact Tempo

Hold down the Tap button to enter exact BPM via a calculator 10-key layout. The operation accepts 3 numbers in sequence. Only input within the valid BPM range is accepted (first number cannot be 5 or higher). Once 3 numbers are entered, press Green to execute the new Tempo with a .0 decimal, or press Red to cancel.

## Tempo Decimal

After entering 3 digits, press the white button (decimal key) to enter a 1-point decimal value. The full 10-key layout will appear again for one more value. Then Execute or Cancel.

## Read the Tempo

Hold the Tempo key to bring up the calculator 10-key. A green light shown in the 10-key is the current value used for each digit. Press each green light to re-enter the same BPM value that is currently running.

## External Clock Tempo

When CLOCKstep:MULTI is following an External Clock, the Tempo button is deactivated. Tempo can only be set by the External Clock device.

# Metronome

The Metronome settings are organized as 3 logical groups of controls:
- Audio Adjustment (1st Row): Sound, Mute, Volume
- Subdivision Dynamics (2nd Row): Quarter, Eighth, Sixteenth volume levels, Triplet toggle
- Time Signatures (3rd Row): Number of Beats, Length of Beat

## Sound

Press the SOUND button to choose from 16 different sounds stored within CLOCKstep:MULTI. Pressing a button instantly loads that sound. The 16th sound choice is a very short square wave sample mainly used for sending an Audio Sync pulse (see Audio Sync OUT Enable in Global Settings).

## Mute

Press MUTE to turn the Sound engine ON and OFF without affecting the running Clock.

## Volume

Press VOLUME to choose 1 of 16 volume levels, with lowest volume at the Top Left and highest at the Bottom Right. The selected volume will be permanently stored until changed again.

## Subdivision Dynamics

Set the volume for each of the Audio Click subdivisions (Quarter, Eighth, Sixteenth) by pressing the relevant subdivision button and selecting 1 of 16 volume levels. As a visual clue, the intensity of the light for each button reflects its volume.

## Triplet

Press the TRIPLET button to convert Eighth Notes into Eighth Note Triplets and Sixteenth Notes into Sixteenth Note Triplets.

## Time Signatures

The 2, 3 & 4 buttons can each be turned ON or OFF. Each button that is turned ON will have their value added to the other ON buttons. The sum equals the number of Beats in the Time Signature. For example, if only 4 is selected, the Time Signature is 4/4. If 2 & 3 are selected, 2+3=5, making it 5/4. Deselect all buttons to disable Time Signature and Bar tracking.

The 4|8 button toggles between Quarter Note and Eighth Note Beats, making the Time Signature x/4 or x/8.

If the Clock is running, pressing any of these buttons will place them into a pending state (flashing) and the change will execute at the top of the next Bar.

# Metronome Swing

Allows the Metronome to swing Quarter, Eighth, and Sixteenth Notes. Hold down the button for the interval you'd like to swing. Each interval can be adjusted independently.

When no swing is applied, the value is at 50% (natural position). Applying swing delays the note. 66% creates a Triplet feel and 75% is a dotted feel.

Quarter Swing (3 choices): 50% (Quarter), 75% (Dotted), 100% (Half)

Eighth Swing (12 choices): 50%, 54%, 58%, 62%, 66% (Triplet), 71%, 75% (Dotted), 79%, 83%, 87%, 92%, 96%

Sixteenth Swing (6 choices): 50%, 58%, 66% (Triplet), 75% (Dotted), 83%, 92%

When the Triplet function is engaged, the swing settings for Eighth and Sixteenth notes will be overridden. Prior swing settings return when the Triplet function is disengaged.

# Sync Rates

The rates of the two 3.5mm Analog Trigger Sync outputs can be adjusted independently. Additional outputs can be converted into Sync Outs (see Global Settings). Each output can have its own independent rate.

Press the SYNC button, then press button 1 or 2 to set the sync rate for the related 3.5mm output.

Sync rates are expressed in PPQN (pulses per quarter note). Very slow rates are expressed as PPM (pulses per measure).

## Standard Rate Selections

14 selections corresponding to standard rhythmic subdivisions, ascending from Left to Right and Top to Bottom:

1 PPM, 1.5 PPM, 2 PPM, 3 PPM, 1 PPQN, 1.5 PPQN, 2 PPQN, 3 PPQN, 4 PPQN, 6 PPQN, 8 PPQN, 12 PPQN, 16 PPQN, 24 PPQN

Straight values are on the 1st and 3rd columns. Triplet values are on the 2nd and 4th columns. To double the rate, select the button that is 2 spaces over from the currently selected one.

## Advanced Rate Selections

With Sync Lock disabled (in Global Settings), pressing the same button multiple times increments the Sync Rate to access values in-between standard settings. The button blinks, becoming more rapid with each in-between value. 44 total rate selections are available.

All possible Sync Rate Values (standard 14 in bold):
1.00 PPM (Whole Note), 1.06 PPM, 1.10 PPM, 1.14 PPM, 1.20 PPM, 1.23 PPM, 1.33 PPM, 1.45 PPM, 1.50 PPM (Whole Triplet), 1.65 PPM, 1.71 PPM, 1.85 PPM, 2.00 PPM (Half Note), 2.28 PPM, 2.40 PPM, 2.60 PPM, 3.00 PPM (Half Triplet), 3.69 PPM, 4.00 PPM, 1.00 PPQN (Quarter Note), 1.04 PPQN, 1.09 PPQN, 1.14 PPQN, 1.20 PPQN, 1.26 PPQN, 1.33 PPQN, 1.41 PPQN, 1.50 PPQN (Quarter Triplet), 1.60 PPQN, 1.71 PPQN, 1.85 PPQN, 2.00 PPQN (Eighth Note), 2.18 PPQN, 2.40 PPQN, 2.66 PPQN, 3.00 PPQN (Eighth Triplet), 3.43 PPQN, 4.00 PPQN (Sixteenth Note), 4.80 PPQN, 6.00 PPQN (Sixteenth Triplet), 8.00 PPQN (32nd Note), 12.00 PPQN (32nd Triplet), 16.00 PPQN (64th Note), 24.00 PPQN (64th Triplet)

# Presets

The first 16 Presets can be saved and loaded from the User Interface. You can store and recall up to 40 Presets. All 40 Presets can be loaded using MIDI Program Change commands. Saving to any location can be done through a MIDI Continuous Control command.

Load a Preset: Press PRESET to display the 16 preset locations. The currently active preset is displayed with a blue light. Press and Release the preset you wish to load. The grid instantly reverts to the Main display with the new preset loaded.

Save a Preset: Press PRESET to display the 16 preset locations. Press and Hold the preset for 2 seconds where you wish to save the current configuration. The grid reverts to the Main display with the newly saved preset loaded.

# Global Settings

Access the Global Settings by holding down the Preset button for 2 seconds while in the main UI.

Available settings: MIDI DIN IN Enable, MIDI DIN THRU Enable, MIDI USB IN Enable, MIDI USB THRU Enable, MIDI RX Channel, Audio IN Threshold, Transport Mode, LED Brightness, Audio Sync OUT Enable, Trigger Time, Clock Mode, Additional Sync OUT, Sync Lock, Fast Nav, Follow Beat.

## MIDI DIN IN Enable

When enabled, receives remote MIDI commands on the MIDI DIN In port. Green = ON, Red = OFF.

## MIDI USB IN Enable

When enabled, receives remote MIDI commands on the MIDI USB In port. Green = ON, Red = OFF.

## MIDI DIN THRU Enable

When enabled, MIDI data arriving at any MIDI In port will be passed to the MIDI DIN Out port. Green = ON, Red = OFF.

## MIDI USB THRU Enable

When enabled, MIDI data arriving at any MIDI In port will be passed to the MIDI USB Out port. Green = ON, Red = OFF.

## MIDI RX Channel

The MIDI Channel that CLOCKstep:MULTI responds to when receiving remote MIDI Commands. Value = 1-16.

## Audio IN Threshold

Useful for calibrating the Sample Accurate Clock Sync feature and the Follow Beat (Audio) feature to match the level of the audio signal being received. Press button to choose a threshold setting (yellow light) between 1-16. The Red light represents the noise floor, the Green light represents the peak of the incoming audio clock pulses. Auto-calibration will make a recommendation for this setting.

## Transport Mode

Select from 6 modes: Simple, Resync, Align, Quantize, Independent, External. See Transport and Clock chapter for details.

## LED Brightness

Choose the brightness of the display lights. 16 selections are available.

## Audio Sync OUT Enable

Turns the Audio Output into a 24 PPQN audio clock source. Useful for striping Analog Tape or sending the signal into another CS:M's Audio Input to sync them together. When using this feature, all Metronome functions within CS:M will be disabled and the Audio Output becomes dedicated to this task. Green = ON, Red = OFF.

## Clock Mode

Options:
- Auto: External, Audio and Internal clock will be auto detected.
- Audio: Only external Audio Clock can be used.
- External: Only external Clock can be used, either incoming MIDI Clock or Audio Clock.
- Internal: Only Internal Clock can be used.
- Follow Beat (MIDI): Tempo will constantly change based on the push and pull of a live performance by analyzing the MIDI Input.
- Follow Beat (Audio): Tempo will constantly change based on the push and pull of a live performance by analyzing the Audio Input.

## Trigger Time

The CV signals from the 3.5mm TRS Patch Bay stay HIGH for a specified number of milliseconds. Adjustable between 1-16 milliseconds (default = 8ms). Some devices may require a different length of pulse.

## Additional Sync OUT

Convert any of the Analog Trigger Outputs into additional Sync Outs. Up to 3 outputs can be converted, giving CS:M up to 5 independent Analog Sync Outs. The layout of the buttons reflects the physical layout of the 3.5mm outputs. SYNC 1 and SYNC 2 are always enabled and cannot be changed. When enabled, the output's Sync Rate defaults to 2 PPQN (changeable and stored independently).

## Sync Lock

When Enabled, constrains Sync Rate selection to the standard 14 rhythmic values. When Disabled, Sync Rate selections increase to 44.

## Fast Nav

Version 1.1 introduced a new UI Navigation relying on an Exit button for nearly every menu. Fast Nav speeds up operation: making a menu choice instantly jumps back to the prior screen without requiring the Exit button. Where there is still an Exit button, it can simply be pressed and no longer needs to be held. Green = ON, Red = OFF.

## Follow Beat

Access all settings for the Follow Beat feature from Global Settings.

# External Clock Sync

Two methods for following an external clock source. External clock is detected automatically. As long as the internal clock is not already running, external clock will automatically take precedence once detected. When running under external clock, the Clock/Stop button is lit solid white, and the Tempo button has no function.

## External MIDI Clock

If MIDI Clock messages are detected on either the MIDI DIN or MIDI USB connections while CLOCKstep:MULTI is stopped, the behavior will be as if the user pressed the Clock/Stop button. The Metronome Click Audio will begin, the Analog Sync outputs will activate and any MIDI Devices connected after CS:M will begin receiving MIDI Clock.

Special Note: MIDI Clock over the MIDI DIN Connection is preferable to MIDI Clock over USB, though the difference may be very slight.

## Sample Accurate Audio Clock

The Audio Input can receive audio pulses that serve as the clock signal. The rate of the pulses should be 24 PPQN (64th Note Triplets) at the desired tempo. This is the tightest possible way to send a clock signal to CS:M from a DAW and to sync external gear.

The Sample Accurate Clock method is more solid than having a DAW send MIDI Clock. DAWs are resource intensive applications that often do not place a high enough priority on sending MIDI Clock. With audio clock, the DAW's ability to prioritize mixing and sending of audio guarantees that the clock will not drift.

Two CS:Ms can also be synced together using this method.

## Setting up the DAW to send Audio Clock

Requires a dedicated audio output from your DAW and computer. No other signals can be present. Two methods:

1. Load an audio file containing only 1 short square wave pulse into a new audio track. Use the DAW's snap to grid feature for 64th Note Triplets and Paste 23 more copies to make 1 Quarter Note of length. Loop or copy/paste to grow the track. A suitable audio file is downloadable from jmkmusicpedals.com Support section.

2. Install an instrument plugin (VSTi) that uses the DAW's Tempo to send out a 24 PPQN audio signal.

If CLOCKstep:MULTI does not respond correctly, use the Audio IN Threshold function in Global Settings to calibrate, or adjust the level from the DAW. Tip: Try a lower volume as well as higher. Too high will cause just as much of a problem as too low.

Combining Audio Clock with MIDI Control makes a very powerful system for synchronizing with a DAW.

## Striping a Tape

CLOCKstep:MULTI's Audio Output can be re-purposed to send 24 PPQN audio clock (see Audio Sync OUT Enable in Global Settings). Record this output onto a dedicated track of a multi-track machine at the desired BPM. When finished, reverse the physical audio connections so the recording machine sends the recorded clock back into CLOCKstep:MULTI's Audio In. You can then begin recording new instrument tracks onto tape while monitoring the Click Audio from CS:M and synchronize external gear.

## Synchronizing Two CLOCKstep:MULTIs

The Audio Sync Out Enable feature can synchronize 2 CLOCKstep:MULTIs without using MIDI Clock. Set one unit to send the 24 PPQN signal from its Audio Output and the other unit receives that signal on its Audio Input. CLOCKstep:MULTI will coordinate with any device capable of either sending or receiving 24 PPQN audio clock; there is nothing proprietary about the signal.

# Latency Compensation

When CS:M is following an external clock it can perform a positive or negative offset in increments of 1 millisecond. Devices following CS:M's adjusted clock can then be time-aligned with other sources of audio, particularly audio coming from within a DAW.

Setting an Offset: Press the SYNC button. Press Green for Positive Offset in 1ms increments. Press Red for Negative Offset in 1ms increments. Hold either button to change values faster, or press them together to quickly reset to Zero. A blinking Green or Red light indicates a value is currently set.

## Positive Offset

Every clock pulse coming into CS:M will be delayed by the value of the Positive Offset before being sent out to connected gear. The Audio Metronome Click will also be adjusted.

## Negative Offset

Instead of clock pulses being delayed, they are sent early. CS:M accomplishes this by expecting a pre-roll of at least 1 Bar of the external clock before starting other devices. The 1 Bar pre-roll provides time for CS:M to turn a Positive Offset into a Negative Offset and realign the Bars and beats accordingly.

Process:
1. Add at least 1 Bar of pre-roll (count-in) to your DAW project. Clock data must be sent during the pre-roll.
2. Start the DAW Project. Within 1 Bar, CS:M's Negative Offset will become aligned.
3. Start the CS:M Transport or external sequencers at the top of any bar after the first.
4. Adjust the Negative Offset until the Quarter Note beats in the source material and the Quarter Notes of the delayed clock are matched.

Note: The External Transport Mode is a good choice for automatically managing Transport Start when using External Sample Accurate Clock.

# Follow Beat

One of CLOCKstep:MULTI's most advanced features — the ability to analyze, in real-time, a drummer's live performance and adapt the tempo accordingly.

The Goal: Give drummers and other musicians room to breathe while keeping connected gear and the metronome click in sync. The drummer should not feel as though they need to alter how they would naturally play.

The Implementation: Instead of simply jerking tempo around, imagine two musicians playing together. They listen, adjust and influence each other in a continuous human feedback loop. Multiple layers of proprietary analysis run constantly. Some layers respond immediately to micro-fluctuations, following the drummer's natural groove. Others observe longer rhythmic patterns, providing stability and prediction.

The drummer has the sole agency to intentionally change the tempo, but should not play deaf to the click. The best results come from the drummer listening to the click generated by CLOCKstep:MULTI.

## Follow Beat - Setup

MIDI or Audio input options:

MIDI Setup: If you use an electronic drumset or have triggers on an acoustic kit, MIDI is the easiest choice. Connect the MIDI OUT of your Trigger Interface to CLOCKstep:MULTI's MIDI IN.

Audio Setup: From your mixing board, route the Kick and Snare mic channels into an available Aux channel. Connect the Aux Output to CLOCKstep:MULTI's Audio IN using a 1/4" TS or TRS cable. Calibrate the audio level using the Audio IN Threshold options in Global Settings.

Pro Tips:
- Apply a tight Gate effect to the Aux Channel to ensure only desired hits reach CS:M while cutting mic bleed.
- The most common mistake is sending a signal that is too loud, which over-saturates and distorts the input.
- Adding drums beyond Kick and Snare depends on receiving clean, tight signals from those mics.

Make the selection for Follow Beat (MIDI) or Follow Beat (Audio) in Clock Mode under Global Settings.

## Follow Beat - MIDI Configuration

Go to Global Settings, press the Follow Beat button to access MIDI Configuration.

MIDI Channel: Press MIDI Channel, select Channel 1-16 (default is 10).

Learn MIDI Notes: 8 MIDI Note assignment slots available. CS:M is in constant Learn MIDI Note state on this screen. Play a Note from your MIDI Controller on the selected MIDI Channel. MIDI Note 1 will light to indicate a new MIDI Note has been learned. Continue playing additional notes until all desired hits are learned. Recommendation: Kick and Snare are the best candidates. Include Side Stick or Rim Shot articulations if used. To clear all MIDI Notes, hold any MIDI Note button for 2 seconds.

MIDI Velocity Threshold: Sets minimum velocity that MIDI Notes must exceed for tempo detection. Select a setting 1-16 (higher = higher velocity required). Eliminates soft hits and ghost notes. While adjusting, buttons light temporarily to indicate the velocity range of the last note played.

MIDI Tap Note: Assigns a MIDI Note from the drum's MIDI Channel to act as Tap Tempo. Press MIDI Tap Note, the button blinks yellow (Learn Mode). Play a Note to assign (cannot be one already assigned above). The button becomes solid Yellow when assigned. Can be cleared along with the rest of the MIDI Notes.

## Follow Beat - General Settings

These settings can be used with either MIDI or Audio.

Elasticity: Controls how Follow Beat reacts to timing fluctuations. 8 options available. Lower settings = stiffer response (smaller, less frequent note-to-note tempo changes). Higher settings = more elasticity (micro-fluctuations and larger tempo changes followed more closely). Default is 4.

Auto Mute Click: When Enabled, the Metronome's audio click will mute automatically when the first detected hit is received. It will unmute when no hits are detected for 1 Bar. Red = Disabled (Default), Green = Enabled.

BPM Output: BPM values can be output as MIDI CC data on the Follow Beat MIDI Channel. Shows every tempo change that Follow Beat performs. Can be used for constructing a precise Tempo Map of a recorded performance. Red = Disabled (Default), Green = Enabled.
- CC# 118: Sent with value of 127 at the top of each bar (marks bar lines).
- CC# 119: Sent twice with every tempo change. First instance: value 0-99 (second and third digit of BPM, e.g., tempo 124 = value 24). Second instance: value 0-9 (tenth decimal place).

## Follow Beat - Tips for Practical Use

There's an adjustment period. Musicians are not accustomed to hearing a click that breathes with them. As you get more comfortable, the feature will fade from conscious thought.

Making Large Intentional Tempo Changes (more than 10 BPM): Focus less on the click and more on how you are gradually speeding up or slowing down. The click may lag slightly within a bar but will often meet you right at the downbeat of the next bar — that's CLOCKstep:MULTI's predictive beat analysis at work. Be aware that if hits land on triplet boundaries at the current tempo, CS:M may not distinguish between an intentional tempo change and intentional triplet playing.

Playing with Triplet Feel: Enable CLOCKstep:MULTI's Triplet Function (see Metronome chapter). This biases hit tracking and tempo changes toward triplet timing.

Listening to the Click: The feedback loop of drummer listening to click and click listening to drummer is what keeps everything flowing musically. Listening also creates the tightest possible feedback loop where latency has less opportunity to influence timing. Without the click (using Auto Mute Click), results will vary depending on the rhythmic content of synced gear and any added latency.

# MIDI Quantize

Quantize incoming MIDI Messages so they execute at the top of the next Bar. No UI — all achieved through MIDI Commands.

Quantize Messages: Send CC# 70 to CS:M with the value of a MIDI Channel (1-16) to instruct CS:M to capture the next MIDI message received on that channel. The captured message is removed from the data stream and placed into memory. Up to 32 MIDI Messages can be held at once. At the top of the next Bar, all captured messages are sent, aligned perfectly with the Bar downbeat. Memory is cleared at the top of every Bar.

Quantize Real-time Messages: Send CC# 71 with value: 1=Start, 2=Stop, 3=Continue. CS:M generates the desired Real-time message at the top of the next Bar. No need to send both CC#71 and the Real-time message.

Cancel Quantize Messages: CC# 74 — value 1 cancels all currently held messages, value 2 cancels just the last message held.

Conditions: Quantizing only works when CS:M's Clock is running and a Time Signature is being used.

NOTE: MIDI Messages will only be considered a match if they come in on the same physical port that CC# 70 came in on (DIN captures on DIN, USB captures on USB).

# MIDI Repeat

Capture up to 4 MIDI Messages and repeatedly send them at the top of Bars. No UI — all achieved through MIDI Commands.

Capture Messages: Send CC# 80, 81, 82 or 83 to CS:M with the value of a MIDI Channel (1-16) to capture the next MIDI message received on that channel. The 4 CC#s correspond to 4 memory slots. Captured messages are removed from the data stream.

Set Repeat Interval: Send CC# 84, 85, 86 or 87 with a value equal to the number of Bar intervals between each auto-execution for the 4 corresponding slots. Value of 0 disables auto-execution. When assigned, auto-execution begins at the top of the next Bar.

Pre-staging: You can capture messages before starting the Clock to pre-stage memory.

Clear Memory: CC# 88 sent with any value clears all 4 memory slots at once. CC#s 84-87 with value 0 disable individual slots. Memory slots are also cleared when loading a new Preset.

Behaviors: Execution occurs when Clock is running and Time Signature is set. Stopping Transport alone (without stopping Clock) does not stop execution. When Clock is stopped, repeated messages stop and counters reset. When Clock is restarted, all repeating messages execute immediately and resume countdowns. Exception: Continuing from Paused state resumes using the same countdown as before Pause.

NOTE: MIDI Messages will only be considered a match if they come in on the same physical port that CC# 80-83 came in on.

# MIDI IN Specification



## Program Change

Select one of the 40 Presets stored in CLOCKstep:MULTI by sending a MIDI Program Change command (0-39).

## Control Change

Parameter | CC# | Range | Notes
Save Preset | 14 | 0-39 | Save the current configuration into the selected Preset location.
Clock/Stop Button | 15 | Any | Same as pressing the Clock/Stop button.
Play/Pause Button | 16 | Any | Same as pressing the Play/Pause button.
Clock Start/Stop | 17 | 0, 64, 127 | 0=Stop, 64=Toggle, 127=Start
Transport Start/Stop | 18 | 0, 64, 127 | 0=Stop, 64=Toggle, 127=Start
Transport Pause/Continue | 19 | 0, 64, 127 | 0=Pause, 64=Toggle, 127=Continue
Transport Mode | 20 | 1-6 | 1=Simple, 2=Resync, 3=Align, 4=Quantize, 5=Independent, 6=External
Click Sound | 30 | 0-15 | Changes the Click Sound.
Mute Sound | 31 | 0, 64, 127 | 0=Unmute, 64=Toggle, 127=Mute
Quarter Subdivision Level | 35 | 0-15 | 0=Silence, 1-15=Increasing Volume Level
Eighth Subdivision Level | 36 | 0-15 | 0=Silence, 1-15=Increasing Volume Level
Sixteenth Subdivision Level | 37 | 0-15 | 0=Silence, 1-15=Increasing Volume Level
Triplet Mode | 38 | 0, 64, 127 | 0=Straight, 64=Toggle, 127=Triplet
Time Signature | 40 | 0, 1-16, 21-36 | 0=No Time Signature, 1-16=Quarter Note bar (1=1/4), 21-36=Eighth Note bar (21=1/8)
Tap Tempo | 45 | Any |
BPM (Whole) | 46 | 0-127 | Send 10-127 first for BPM rate, or Send 1 first to add 100, or Send 2 first to add 200, then 0-127 to add value
BPM (Fraction) | 47 | 0-9 | Add a decimal point to the current Whole BPM value
BPM INC/DEC | 48 | 0-63, 65-127 | 0-63=Decrement Current BPM, 65-127=Increment Current BPM. Assigned to programmable Rotary Encoders.
BPM Expression Pedal | 49 | 0-127 | Changes the current BPM by a relative amount. More useful for treadle-based expression controllers.
Sync 1 Rate | 50 | 0-13 | 0=1 PPM, 1=1.5 PPM, 2=2 PPM, 3=3 PPM, 4=1 PPQN, 5=1.5 PPQN, 6=2 PPQN, 7=3 PPQN, 8=4 PPQN, 9=6 PPQN, 10=8 PPQN, 11=12 PPQN, 12=16 PPQN, 13=24 PPQN
Sync 2 Rate | 51 | 0-13 | See Sync 1 Rate
Trigger Time | 52 | 1-16 | Length of CV signals in milliseconds (default 8)
MIDI DIN Thru Enabled | 60 | 0, 64, 127 | 0=No, 64=Toggle, 127=Yes
MIDI USB Thru Enabled | 61 | 0, 64, 127 | 0=No, 64=Toggle, 127=Yes
Auto Mute Click | 64 | 0, 64, 127 | 0=Disable, 64=Toggle, 127=Enable
Elasticity | 65 | 0-7 | Setting from Lowest to Highest.
Velocity Threshold | 66 | 0-15 | Setting from Lowest to Highest.
Quantize MIDI Message | 70 | 1-16 | The MIDI Channel number to capture the next incoming message on.
Quantize Real-Time Message | 71 | 1-3 | 1=Start, 2=Stop, 3=Continue
Cancel Quantize Messages | 74 | 1-2 | 1=Cancel All Messages, 2=Cancel Last Message
Repeat MIDI Message | 80-83 | 1-16 | The MIDI Channel number to capture the next incoming message on. Repeatable MIDI Slots 1-4.
Repeat MIDI Message Bars | 84-87 | 0-127 | The interval number of Bars for repeat. Repeatable MIDI Slots 1-4.
Reset All Repeat MIDI | 88 | Any | Resets all 4 repeatable Message Slots immediately.
Quarter Swing | 100 | 0-2 | 0=Quarter, 1=Dotted Quarter, 2=Half
Eighth Swing | 101 | 0-11 | 0=Eighth (50%), 1=54%, 2=58%, 3=62%, 4=Triplet (66%), 5=71%, 6=Dotted (75%), 7=79%, 8=83%, 9=87%, 10=92%, 11=96%
Sixteenth Swing | 102 | 0-5 | 0=Sixteenth (50%), 1=58%, 2=Triplet (66%), 3=Dotted (75%), 4=83%, 5=92%

## System Real-time Messages

Start: CLOCKstep:MULTI responds by starting the Transport (alternate: CC#18).
Continue: CLOCKstep:MULTI responds by starting the Transport and resuming count at the same place where it was previously stopped (alternate: CC#19).
Stop: CLOCKstep:MULTI responds by stopping the Transport (alternate: CC#18).
Song Position Pointer: Only responds to value Zero (0). Immediately resets the count of the Click Audio back to the beginning.
Clock: Automatically detected. If clock is not already running, CLOCKstep:MULTI begins following the external MIDI Clock.

# Checking Build Version

With the unit powered off, hold down the Quarter Note Interval button and turn the unit on. A 10-key layout will be shown with 1 of the lights appearing green. Press each green lit button on the 10-key until all 4 digits are read. The result is the 4 digit build version of the software currently installed.

# Product Specifications

Power Requirements: 9 volts DC max, 200 mA nominal
Power Connection: 2.1 mm barrel, center negative
I/O: Line Audio In/Out, MIDI IN/OUT DIN, MIDI IN/OUT USB, MIDI OUT TRS, 3.5mm TS (x7)
Dimensions: 4.7" x 3.65" x 1.72"
Assembled in the USA

# Limited Warranty

CLOCKstep:MULTI comes with a 1-year limited warranty on parts and workmanship when purchased new from JMK Music Pedals or an authorized dealer. During the warranty period, JMK Music Pedals will either repair or replace your CLOCKstep:MULTI free of charge at their sole discretion. Warranty does not include damage through misuse, mistreatment or modification. Contact support@jmkmusicpedals.com for warranty claims.
