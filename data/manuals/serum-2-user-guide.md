---
id: serum-2-user-guide
title: "Serum 2 User Guide"
source: "Serum 2 User Guide.pdf"
convertedAt: 2026-03-19T20:05:27.958Z
summary: "Serum 2 is an advanced virtual synthesizer plug-in by Xfer Records for VST3, Audio Unit, and AAX hosts on Windows and macOS. It combines wavetable, subtractive, multi-sampled, sampled, granular, and spectral synthesis into a single instrument with dual filters, four envelopes, ten LFOs, an FX rack with 13 processors, a built-in arpeggiator, and a MIDI clip sequencer. It is designed for sound designers and musicians seeking deep creative control over every detail of their sound."
---

# Welcome

Serum 2 is an advanced virtual synthesizer that offers a unique blend of sound generation methods together with a powerful modulation system. Throughout this manual, Serum 2 is referred to simply as Serum. Serum combines wavetable, subtractive, multi-sampled, sampled, granular, and spectral synthesis into an intuitive and cohesive workflow.

## Product Information

Serum 2 plug-in for Microsoft Windows and Apple macOS. A synthesizer instrument plug-in for VST3, Audio Unit, and AAX hosts. Version 2.0.18. Manual Version: 1.0.3. April 27, 2025. Copyright © 2014-2025 Xfer Records, Inc. All rights reserved. VST Plugin technology by Steinberg. Website: WWW.XFERRECORDS.COM

## Development Team

Oli Cash, Nick Dowell, Steve Duda, Dave Gamble, Damon Hancock, Lance Thackeray. With special assistance from: Matt Aimonetti, Laurent de Soras, Andrew Simper, Yan Lhert. Manual: John Jerney. Special thanks to: Jeff Rona, Joel Zimmerman, David Alexander.

## Registering Serum

If you purchased Serum through Xfer Records, you are automatically registered for free updates. If you purchased Serum through Splice.com, registration is automatic with the email you used at the time. If you are having trouble locating your registration on xferrecords.com, use the contact form and mention your Splice username.

## Downloading Serum

To download Serum, navigate to www.xferrecords.com, sign in to your account, and choose Your Account in the user menu. All installers for your registered Xfer Records products are available on this page.

## Installing Serum

Serum is available for both Apple macOS and Microsoft Windows. Serum is designed to be used within a host audio application that supports the VST3, AU, or AAX plug-in formats. Important: You must select the VST3 version when installing the AU or AAX version of the plugin. Navigate to the folder to which you downloaded the software, double-click the file to launch the installer, follow the steps, open your DAW and rescan/refresh the plug-ins.

## Uninstalling Serum on Windows

Delete the Serum 2 folder from C:\Users\(username)\AppData\Roaming\Xfer\. Delete the Serum 2 Presets folder. If Microsoft OneDrive is enabled: C:\Users\(username)\OneDrive\Documents\Xfer\. Otherwise: C:\Users\(username)\Documents\Xfer\. Serum does not modify the Windows registry.

## Uninstalling Serum on macOS

Remove the Serum 2 files and folders from: /Library/Audio/Plug-Ins/VST3/, /Library/Audio/Plug-Ins/Components/, /Library/Audio/Presets/Xfer Records/, /Library/Application Support/Avid/Audio/Plug-Ins/, ~/Library/Preferences/Serum2Prefs.json, ~/Library/Application Support/com.xfer.serum2/Serum2.lic. Press Cmd-Shift-G to navigate to each folder quickly.

# Exploring Serum

Serum is an incredibly versatile instrument designed for sound designers and musicians who seek creative control over every detail of their sound. Equipped with multiple oscillators, including dedicated noise and sub oscillators, Serum allows you to blend and shape a broad range of waveforms, from complex wavetables to granular, spectral, and sampled sounds. Serum features dual filters, each offering a wide selection of filter types for precise tonal shaping. You can route oscillators through one or both filters. Serum includes an array of fully-configurable envelopes and LFOs that you can assign to almost any control. Serum integrates a sophisticated arpeggiator and MIDI clip system.

## Sound Generation Options

Serum provides multiple ways to create and manipulate sound through oscillators A to C (OSC A, OSC B, and OSC C):
- Wavetable — Produces an evolving soundscape by cycling through or morphing between multiple waveforms stored in a wavetable
- Multisample — Uses multiple recordings (samples) of instruments across various notes and dynamic ranges
- Sample — Uses single samples that can be played back at different pitches, layered, looped, or transformed
- Granular — Layers, stretches, rearranges, or modulates tiny sound fragments called grains to create new sound textures
- Spectral — Manipulates sound by analyzing and resynthesizing the frequency spectrum, creating new sounds with independent control over time and pitch

# Getting Started

Getting started with Serum is quick and easy. You can add Serum to an instrument (MIDI) track in your DAW. Sending MIDI notes to Serum triggers the default sawtooth sound. You can also click any of the piano keys at the bottom of the Serum UI.

## Loading a Serum Preset

Click '- Init -' to display the Serum presets menu. Navigate the menu to choose a preset. After choosing a preset, click the < > arrows to navigate through a preset subfolder. You can also click the browser button to access the presets browser. Click an entry in the list to load the corresponding preset. Most presets load immediately; presets with larger embedded samples display a small green progress bar when loading. Click the play button to preview presets.

## Creating a New Sound

The - Init - preset has a single wavetable oscillator enabled (OSC A) together with basic envelope and LFO modulators defined. This is a perfect blank slate from which to craft and evolve your sound. If you've already loaded a preset, click the main menu and choose Init Preset to initialize Serum to the default settings.

## Saving Changes

Click the disk button to save a preset. You can add metadata: double-click the ARTIST field and type the artist name, double-click the DESC field to add description. Option-click (macOS)/Alt-click (Windows) the disk button to save using the same file name without displaying the dialog.

## Embedding Content When Saving a Preset

You can embed a wavetable or sample into your preset when saving by clicking the embed button. You should only consider doing this if you intend to share your preset with someone else. The option to embed is not available for factory-supplied content.

## Dragging Audio to Your DAW

You can quickly export the last played note or chord (in WAV format) to your DAW. Hover over the left of the Serum logo and drag the wave icon to an audio track. The exported audio is captured as a WAV-format file stored in the Serum Presets > Renders folder. Option-click (macOS)/Alt-click (Windows) the wave icon to open the Renders folder. Shift-drag the wave icon to copy the current preset to Finder/Explorer.

## Exploring Basic Operations

Serum includes a set of elements and on-screen controls designed to closely replicate the experience of using a hardware synthesizer, while also providing all the benefits of a digital computer.

### Displaying Help (Tooltips)

You can display help for any control by hovering the mouse pointer over the control and pausing. The Help tooltips global preference needs to be set to SHOW for tooltips to appear. Hovering over a control that has modulation assigned displays the modulation sources.

### Using the Serum Keyboard

Serum features an on-screen keyboard for playing notes directly using your mouse, or monitoring the notes being played on an external MIDI or computer keyboard. Controls include: TRANSPOSE (semitones), KEY, SCALE, SWING, OSC MAPPING.

### Using Knobs and Sliders

Click and drag either up/down or left/right to adjust. Hold Shift for fine tuning. Use mouse scroll wheel to adjust values. Double-click to display a text box for precise entry. Right-click for context menu with modulation sources, Reset Control, MIDI Learn, and Lock Parameter options. MIDI CC assignments are saved with DAW sessions and with presets (if Load MIDI Map from Preset preference is enabled). Save default MIDI CC map as default.SerumMIDIMap in Serum 2 Presets/System/MIDI CC Maps folder.

### Undo and Redo

You can undo and redo just about any operation in Serum. Access the undo and redo buttons in the Serum header near the top right.

### Main Output Volume

Control the main output volume using the MAIN knob near the top right. The stereo volume appears as a meter next to the knob.

## Using Oscillators and Filters

Serum generates sound using a set of oscillators, powered by a range of techniques that use both wavetables and samples. Serum then uses filters to sculpt the sound. Each oscillator type features specific settings and parameters.

### Enabling an Oscillator or Filter

Enable an oscillator by clicking the label containing the oscillator name and enable button. When enabled, the button turns green. When off, the entire panel is dimmed. Enabling a filter requires clicking the power button directly.

### Choosing Oscillator or Filter Options

Choose an oscillator or filter option using the associated drop-down menu. Oscillator options include wavetables, samples, multisamples, and more. Click the < > arrows to navigate. Alternatively hover over the menu and use the mouse wheel.

### Pitch Controls

Alter the pitch using OCT (octave), SEM (semitone), FIN (fine tuning in cents), and CRS (coarse) controls. CRS controls pitch transpose that tunes or detunes continuous semitones, useful as a modulation destination. Use Global > Main Tuning modulation destination to have all oscillators follow a coarse pitch change.

Pitch modes (right-click OCT or SEM control):
- Semitones — Adjust pitch in semitones
- Harmonics — Change pitch by multiplying base frequency using whole number harmonics
- Ratio — Set pitch relative to base frequency using ratios (common in FM synthesis)
- Step — Adjust pitch in periods and steps as defined by active MTS-ESP tuning

### Signal Routing

Route the signal from any oscillator (OSC A, OSC B, OSC C, SUB, NOISE) or any filter (FILTER 1, FILTER 2) to:
- Filter — Route to FILTER 1, FILTER 2, or by varying degrees to both
- Main — Route to main output, passing through the effects section
- Direct — Bypass the filter and effects section, play clean with main output
- None — No output path (use oscillator as modulation source only)

By default, OSC A routes to FILTER 1 (though FILTER 1 is not enabled in new presets). Other oscillators and filters route to Main output. You can also send signal to BUS 1 and BUS 2.

### Oscillator/Filter Menu Operations

Right-click the module label for:
- Lock Module — Parameters remain unchanged when changing presets
- Init Module — Return module to initialized state
- Copy / Copy (w/mods) — Copy module configuration to clipboard
- Paste — Paste to another similar module
- Enable Pitch Tracking — Adjust pitch in response to MIDI note (enabled by default)

Option/Alt-drag module label to copy without modulations. Shift-Option/Shift-Alt-drag to copy with modulations. Drag without modifiers to swap two modules.

### Pitch Tracking

Pitch tracking instructs the oscillator to adjust its pitch in response to the MIDI note. Enabled by default. Disable for: drones/static sounds, percussive sounds, noise-based effects, experimental sounds. When pitch tracking is disabled, Multisample/Sample/Granular/Spectral play C3 (MIDI note 60), Wavetable plays C-2 (MIDI note 0) allowing use as an LFO.

### Resizing the UI

Click and drag the lower right corner, or click the Serum 2 logo and choose a resize option. Set as Default from the same menu. Default is 100%.

# Using Wavetable Oscillators

Wavetable oscillators remain at the heart of sound generation in Serum 2. Unlike many wavetable synthesizers, Serum tables are multi-cycle, offering a greater variety of sounds. Serum oscillator playback provides high-frequency representation to the limits of the human ear without audible aliasing artifacts.

## What is a Wavetable?

A wavetable is a small amount of digital audio (sample data or waveform) that is played back in a looping fashion. The frequency (pitch) is determined by the playback rate. The tone (timbre and harmonics) is determined by the waveform content. Wavetables in Serum consist of up to 256 subtables or single-cycle waves (frames). Maximum file size is 2048 samples x 256 frames x 32 bits = 2 megabytes. A good sounding wavetable can consist of just a few frames with remaining frames interpolated through crossfading or spectral morphing.

## Using Wavetables

Serum features three multi-purpose oscillator modules (OSC A, OSC B, OSC C) plus dedicated NOISE and SUB oscillators. Each oscillator displays a green waveform area with 2D and 3D viewing options. Click the waveform to toggle views. 2D shows a single-cycle frame. 3D displays all frames at-a-glance.

### Phase

Use the PHASE control to specify where the oscillator begins playing back when a note is triggered. RAND (random) control alters the PHASE value by a random amount for each new voice. Use randomization to: provide different start to each note, provide random tone when layering oscillators, reduce 'laser zap' effect with unison.

Phase Memory options (drop-down menu):
- All Voices — New notes use PHASE and RAND control settings for all voices (default)
- Contiguous — New notes continue with the phase of the previous note
- Per Voice — New notes start with the same editable phase each time

### Wavetable Position

Use the WT POS knob to set the position within the wavetable (selects the frame/subtable that is currently audible). Setting to minimum (1) selects the first frame. Right-click and choose Smooth Interpretation for smoother waveform transitions.

### Unison

Use the UNISON control to set the number of unison voices (1-16), effectively stacking oscillators. Serum maintains the volume level as you increase unison voices. The UNISON field color changes as a CPU reminder.

Unison settings:
- MODE: Linear, Super, Exp, Inv, Random
- STACK: Off, 12 (1-3x), 12+7 (1-3x), Center-12, Center-24
- WIDTH: Stereo spread of unison voices
- RANGE: Extent of detuning applied
- WT POS: Wavetable frame per unison voice
- WARP 1/2: Spread warp amount per voice
- DETUNE: Tuning offset for additional voices
- BLEND: Level offset of unison voices vs central voice (default 75%)

### Warp Modes

Warp manipulates the playback and sound of the wavetable oscillator. Default is OFF.

Categories and modes:
- Sync — Synchronize playback to internal oscillator. WARP Var fader adjusts hard sync to soft sync.
- Alt Warp: Bend +, Bend -, Bend +/-, PWM, Asym +, Asym -, Asym +/-, Flip, Mirror, Remap 1-4, Quantize, Odd/Even
- Filter: LPF, HPF
- Distortion: Tube, Soft Clip, Hard Clip, Diode 1, Diode 2, Linear Fold, Sine Fold, Zero-Square, Asym, Rectify, Sine Shaper, Stomp Box, Tape Sat., Soft Sat.
- FM: FM (from other oscillator/Noise/Sub/Filter), Thru-Zero, Exp, Linear
- PD: PD (from other oscillator/Noise/Sub/Filter/Self)
- AM: AM (from other oscillator/Noise/Sub/Filter)
- RM: RM (from other oscillator/Noise/Sub/Filter)
- Swap Warps — Swap WARP 1 and WARP 2 modes

### Pan and Level

PAN knob controls placement in stereo field (left to right). LEVEL knob controls output volume of the oscillator.

# Using Multisample Instruments

Serum can use any oscillator as a multisample instrument utilizing an array of samples played across a range of pitches, intensities, and articulations. Serum accurately selects the appropriate sample based on MIDI input pitch and velocity. Supports SFZ files for loading multisample instruments.

## Multisample Envelope

Click the envelope button to access the envelope pane (initially disabled). Click OVERRIDE to activate and override the SFZ file envelope. Controls: DELAY (time before envelope begins, supports BPM Sync), A (Attack), H (Hold), D (Decay), S (Sustain), R (Release). VEL TRACK adjusts velocity sensitivity. RAND randomizes initial phase.

## Multisample Parameters

TIMBRE knob adjusts the multisample timbre (inversely adjusts mapped samples to pitch for zone-mapped multisamples). Unison, Detune, Blend, Warp, Pan, and Level controls are also available, similar to wavetable oscillator.

## Switching Multisample to Sample/Wavetable

Click the Multisample menu and choose Switch to Single Sample to convert the last-played note to a single sample. From Sample mode, choose Switch to Wavetable with various import options.

# Using Sample Instruments

Serum features a versatile sampler for creatively manipulating and playing back audio samples. Includes powerful slicing tools integrated with CLIP mode. Samples can be quickly converted to wavetables. When loading, Serum assumes samples tuned to C3 by default. You can include root note in the filename (e.g., 'Morning Bass F2.flac'). Supports pitch data embedded in WAV instrument chunks.

## Sample Operations

Right-click the sample for operations:
- Show Marker Animation
- Zoom to Start and End
- Snap modes: Snap Off, Snap to Zero (zero-crossing), Snap to Beats (beat grid), Snap to Loop
- Fade Edges (1ms to 128ms or None)
- Normalize
- Reverse
- Trim
- Slicing: Off, Auto, Manual
All operations are non-destructive to the original sample file.

## Slicing Samples

Three slicing options: Slicing Off, Slice Auto (configurable threshold), Slice Manual (adjustable slices). Auto slicing shows a yellow horizontal threshold line. Drag down for more slices, up for fewer. Each slice is assigned a note.

Slicing options:
- Play Slice to End — Play from triggered slice to end
- Play Single Slice — Play one slice per note trigger
- Root Note — Set note for first slice (C-1 to C8)
- Send to Selected Clip — Send slices to CLIP module
- Auto-Sync to Clip — Automatically update clip when slices change

## Sample Loop Modes

Loop menu options:
- One-shot — Plays forward for duration of note
- Fwd Loop — Plays to loop end, loops back to loop start
- Rev Loop — Plays to loop end, reverses to loop start
- Fwd/Rwd Loop — Forward/reverse ping-pong loop
- Tailed — Plays from halfway, loops tail as amplitude decays
- Relative Loop — Loop changes dynamically based on start position
- Link Loop Length — Loop end moves relative to loop start
- Exit Loop on Release — Exits loop on key release, plays to end

## Sample Parameters

SCAN knob sets speed and direction of playback. Scan menu: Range (+/- 200%, 400%, 800%), Reverse, Lock Scan Rate (to Tempo), Sample Length to BPM. Unison settings similar to wavetable mode with additional START (random offset) and SPAN (fixed offset) per voice. Warp modes, Pan, and Level controls available.

# Using Granular Synthesis

Granular synthesis manipulates audio samples by breaking them into tiny segments called grains and recombining them. Each grain typically lasts a few milliseconds and can be individually controlled in pitch, shape, duration, and playback speed. Can be CPU intensive compared to Wavetable/Sample/Multisample modes.

## Granular Parameters

SCAN knob sets scan rate (how quickly Serum moves through the sample). Higher rate spreads grain start positions, lower rate creates stretched/drone-like sound. Negative value reverses direction, 0 stops playhead.

Scan menu: Range, Reverse, Key Track, Lock Scan Rate, Sample Length to BPM.

DENS (Density) knob: Free (Hz), BPM Sync, Grains mode. Options: Jump Start, Max Grains.

LENGTH knob: Free (seconds/ms), BPM Sync, Percent.

Grain Randomization knobs: OFFSET, DIR (direction), PITCH, RAND (length), RAND (pan), RAND (level).

## Granular Unison

Similar to other oscillator modes with additional settings: START (random offset per voice), SPAN (fixed offset per voice), SPAWN PATTERN (Together, Even, Exp, Random timing for grain voice spawning).

## Grain Window Settings

AMOUNT sets influence of window curve. SKEW sets window skew. Both support per-grain randomization.

Window shapes: Hann, Welch, Gaussian, Blackman-Harris, Sinc, Tukey, Triangle, Trapezoid, ExpDec, Exp Dec Rev.

## Granular X|Y Control

Shows a red dot in display. Y axis options: None, Level, Warp, Warp 2, Density, Grain Length, Window Amt, Window Skew, Rand Offset, Rand Dir, Rand Pitch, Rand Length, Rand Pan, Rand Gain, Rand Window, Rand Skew, Rand Warp, Rand Warp 2.

## Granular Loop Modes

Similar to Sample mode. Additional options: Loop Grains (grain playback respects loop markers), Manual mode (playhead replaced by X|Y dot, SCAN controls horizontal position, no scanning on note play).

# Using Spectral Synthesis

Spectral synthesis generates sound by analyzing and manipulating the frequency spectrum, breaking it into individual frequency components or partials. Unlike other synthesis methods, it focuses on harmonic and inharmonic content. Can be CPU intensive but provides unparalleled flexibility.

## Spectral Parameters

SCAN knob sets playback speed/direction with options: Range, Reverse, Key Track, Lock Scan Rate, Sample Length to BPM, Phase Lock (minimize audible phase change), Transients (preserve transients).

CUT knob sets spectral filter cutoff. FILTER display allows custom filter curve creation, factory filter presets, or wavetable as filter. MIX knob controls wet/dry balance. Warp modes, Pan, and Level available.

## Spectral Filter

Create custom filter curves by adding/dragging points in the spectral filter mask editor. Operations: double-click to add/remove points, drag points/curves, Option/Alt-drag to snap to grid or modify all curves simultaneously. Grid divisions adjustable. Factory filter presets available. Wavetables can be used as filters.

## Spectral High/Low Frequencies

Set sample high and low frequency points by dragging markers to the right of the spectrogram. Options: Smooth (fourth-order Butterworth filter), Post Warp (apply filtering after spectral warps). Modulation sources can be dragged to the frequency markers.

## Spectral X|Y Control

Y axis options: None, Level, Warp, Warp 2, Spec Flt Cutoff, Spec Flt Wet/Dry, Freq Lo, Freq Hi.

# Using the Sub Oscillator

The sub oscillator generates a waveform pitched below the primary oscillators, adding depth and weight to the low end. Provides a clean, stable foundation without excessive harmonic complexity.

Controls: OCT (octave), CRS (coarse), PHASE (playback start, supports Contiguous mode), PAN, LEVEL.

Waveform options:
- Sine — Pure, smooth, only fundamental frequency. Ideal for deep, focused sub-bass
- Rounded Rect — Smoother square wave variant, balance between sine and square
- Triangle — Linear rise/fall, slight odd harmonics, subtle texture
- Saw — Sharp rise/abrupt drop, both odd and even harmonics, aggressive/gritty
- Square — Alternates sharply, rich in odd harmonics, bold/punchy
- Pulse — Asymmetrical variation of square wave

# Using the Noise Oscillator

Dedicated noise oscillator offering factory-supplied noise samples and the ability to load custom samples. Acts as a stereo sample player with high-quality playback. Can be used as modulation source. Also appears in WARP section of wavetable oscillators for FM, PD, AM, RM modulation.

Controls: One Shot/Looping toggle, START (phase start), RAND (randomize start phase), PITCH (base frequency), FINE (fine tune), PAN, LEVEL.

Noise colors (with STEREO and FILTER controls):
- White — Equal energy at all frequencies, bright constant hiss
- Pink — Equal energy per octave, warmer, 3 dB/octave rolloff
- Brown — 6 dB/octave rolloff, deep rumbling
- Geiger — Chaotic random clicks/bursts

Can load custom WAV samples and embed samples in presets. Uses high-quality real-time interpolation.

# Using the Filter Modules

Serum features an advanced filter module offering per-voice filtering of one or more oscillators. Two filter modules available (FILTER 1 and FILTER 2). Route oscillators to filters using switches: S (SUB), A (OSC A), B (OSC B), C (OSC C), N (NOISE).

## Filter Types

Categories and types with Var parameter functions:

Normal:
- MG Low 6/12/18/24 — Ladder Low-Pass (Moog-style). Var: FAT (saturation)
- Low 6/12/18/24 — State-Variable Low-Pass. Var: FAT
- High 6/12/18/24 — State-Variable High-Pass. Var: FAT
- Band/Peak/Notch 12/24 — State-Variable. Var: FAT

Multi:
- LH/LB/LP/LN/HB/HP/HN/BP/BN/PP/PN/NN — Dual SVF. Var: FREQ (second cutoff)
- LBH/LPH/LNH/BPN — Morphing SVF. Var: MORPH

Flanges:
- Cmb L/Flg L/Phs L — With low-pass feedback. Var: LP FREQ
- Cmb H/Flg H/Phs H — With high-pass feedback. Var: HP FREQ
- Cmb HL/Flg HL/Phs HL — With HP+LP feedback. Var: HL WID

Misc:
- Low/Band/High EQ 6/12 — Morphable response. Var: DB +/-
- Ring Mod/Ring Mod x2. Var: SPREAD (x2 only)
- SampHold/SampHold-
- Combs/Allpasses/Reverb. Var: DAMP
- French LP — Unique distorting LP. Var: BOEUF
- German LP — Zero-Delay Feedback LP
- Add Bass — Phase-rotated LP. Var: THRU
- Formant-I/II/III — Vowel filters. Var: FORMNT
- Bandreject. Var: WIDTH
- Dist.Comb 1/2 LP/BP. Var: COMBFRQ
- Scream LP/BP. Var: SCREAM

New:
- Wsp — Classic synth circuit model. Var: MORPH
- DJ Mixer
- Diffusor — All-pass diffusor. Var: STAGES
- MG Ladder — Clean transistor ladder. Var: SMOOTH
- Acid Ladder — Diode ladder. Var: SMOOTH
- EMS Ladder — Dr. Who sounds. Var: SMOOTH
- MG Dirty — Overdriven MG Ladder. Var: PAIN
- PZ SVF — Drawable filters. Var: SMOOTH
- Comb 2 — Var: FRQ2
- Exp MM — Multimode expander. Var: MIX
- Exp BPF — BPF expander

## Filter Parameters

CUTOFF — Primary cutoff frequency. Keytrack switch offsets cutoff using MIDI notes (tracks first oscillator with pitch tracking enabled).
RES (Resonance) — Feedback of filter circuit. Can graphically adjust cutoff and resonance by clicking/dragging in filter display.
DRIVE — Gain into filter circuit. Clean Mode pre-gains -24 dB with +24 dB post-filter boost.
FAT/Variable — Changes based on filter type.
PAN — Cutoff offset for L/R signals. Default 50% = no effect.
MIX — Wet/dry amount. Default 100% = fully wet.
LEVEL — Filter output level in dB.

Filter Display Options: Frequency Response, Frequency Response & FFT, Phase Response & FFT. Option/Alt-click to cycle through modes.

# Using the Mixer

The mixer blends and balances principal sound sources: sub oscillator, three main oscillators (OSC A, B, C), noise oscillator, FILTER 1 and 2, and two internal busses (BUS 1, BUS 2). Click the MIX tab to access.

Each oscillator channel offers routing options (Filter, Main, Direct, None), BUS send knobs, PAN and LEVEL controls. The envelope button appears for Main and Direct routing options.

Filter channels offer similar routing (to other filter, Main, Direct, None) plus PAN, MIX, and LEVEL.

Bus channels route to Main, Direct, or other bus with LEVEL controls.

MAIN and DIRECT master levels with FX bypass buttons.

Option/Alt-drag channel labels to copy oscillators without modulations. Shift-Option/Shift-Alt-drag to copy with modulations. Drag without modifiers to swap.

# Using Serum FX

Serum features an effects section with 13 different FX processors usable in any order or combination, including multiple instances of the same processor. Three types of splitter modules allow FX processing on specific signal parts. Three FX racks: MAIN, BUS 1, BUS 2. Signal flow is top to bottom through the rack.

## FX Rack Management

Expand/revert rack view with Option-F (macOS)/Alt-F (Windows). Load rack presets from the presets drop-down. Add modules by clicking the + button or right-clicking in the rack. Reorder by dragging in list or rack view. Copy modules: Option/Alt-drag (without mods), Shift-Option/Shift-Alt-drag (with mods). Bypass with the bypass button (red when bypassed). Option/Alt-click bypass to toggle all FX on bus. Remove with the X button.

Rack operations (right-click background): Add module, Cut/Copy/Paste/Clear FX Bus, Lock FX Bus (persists across preset changes), Load/Save FX Bus.

## Bode

Implementation of the Bode frequency shifter. Controls: MONO INPUT, SHIFT (pitch shift %), RANGE, DIR (direction), WIDTH, DELAY, BPM (sync), FEED (feedback), BALANCE, BLUR (chorus/wow/flutter), MIX, LEVEL.

## Chorus

Four-voice chorus effect with two left and two right chorus taps. Controls: RATE, BPM, DELAY 1, DELAY 2, DEPTH, FEEDBACK, LPF/HPF (toggle), MIX, LEVEL.

## Compressor

Reduces volume of loud sounds or amplifies quiet sounds. Modes: SINGLE (entire spectrum) or MULTIBAND (independent frequency bands). Controls: THRESH (threshold), RATIO (2:1 to 4:1, max = Limit mode with true peak limiter), ATTACK, RELEASE, GAIN (makeup, up to 30dB/36dB). Multiband adds: X-LOW, BELOW, X-HIGH, H/M/L band gains. MIX, LEVEL.

## Convolve

Applies impulse response for convolution reverb or unique sound blending. Controls: IMPULSE (IR selection, supports Load IR and Embed in Preset), SIZE, TONE, ϕ MIN (minimum phase), PRE-DLY, BPM, ATTACK, DECAY, DAMP, IR GAIN, MIX, LEVEL.

## Delay

Records and plays back signal after a period of time. Modes: NORMAL, PING-PONG, TAP-> DELAY. Controls: Delay Times (L/R with scalar offset, Trip/Dot shortcuts at 133%/150%), BPM/MS toggle, LINK (L/R), FEEDBACK, FREQ (filter cutoff), Q (filter bandwidth), MIX, LEVEL. High Quality option available.

## Distortion

13 types of distortion including two dual-waveshaper modes. Controls: MODE (distortion type), OFF/PRE/POST (filter position), TYPE (LP/BP/HP morph), FREQ (filter cutoff, supports Key Track), Q (filter resonance), DRIVE, MIX, LEVEL.

X-Shaper: Dual crossfading waveshaper with Edit A/B buttons. X axis = input level, Y axis = output level. DRIVE controls blend between two waveshaping graphs. X-Shaper is symmetric, X-Shaper (Asym) is asymmetric (brings out even-order harmonics).

## Equalizer

Two-band parametric EQ. Each band offers shelf, peak, or HP/LP filtering. Controls: FREQ (L), Q (L), GAIN (L), FILTER TYPE switches, FREQ (R), Q (R), GAIN (R), LEVEL.

## Filter (FX)

Identical to per-voice synth filter but runs as master effect. Controls: TYPE, CUTOFF (supports Key Track), RES, DRIVE (supports Clean Mode), Variable knob (depends on filter type), PAN, MIX, LEVEL. Same display options as synth filter.

## Flanger

Cyclically varies phase shift between two identical signal copies. Controls: RATE, BPM, DEPTH, FEEDBACK, PHASE (stereo offset, 50% = 180°), MIX, LEVEL.

## Hyper/Dimension

Micro-delay chorus with 1-7 voices. HYPER controls: RATE, UNISON (0 for Dimension only), DETUNE, RETRIG (laser-like zap on note-on), MIX, LEVEL. DIMENSION is pseudo-stereo effect with four delay lines. Controls: SIZE, MIX, LEVEL. Consider as CPU-efficient alternative to high unison settings.

## Phaser

Filters signal by creating peaks and troughs in frequency spectrum. Controls: RATE, BPM, POLES, DEPTH, DEPTH 2 (offset between stages), FREQ (base frequency), FEEDBACK, PHASE (stereo offset), MIX, LEVEL.

## Reverb

Plate and hall reverb using modified Tal Reverb algorithm.

Types and controls:
- PLATE: LO CUT, HI CUT, SIZE, PRE-DLY, DAMP, WIDTH
- HALL: LO CUT, HI CUT, SIZE, PRE-DLY, DECAY, SPIN RATE, SPIN DEPTH
- VINTAGE: LO CUT, HI CUT, SIZE, PRE-DLY, ER SIZE, DECAY, DAMP, DIFF A, DIFF B, CHORUS (speed/depth)
- NITROUS: LO CUT, HI CUT, SIZE, PRE-DLY, FEEDBACK, DIFFUSION, MODE (Space/Marble/Rectangle/Hexagon/Box), CHORUS
- BASIN: LO CUT, HI CUT, SIZE, PRE-DLY, FEEDBACK, CHORUS

All types share MIX and LEVEL controls.

## Splitter L/H

Divides audio into low and high frequency bands with independent FX racks. Controls: LOWS rack, SPLIT FREQ (crossover), HIGHS rack, LEVEL. Each band has a bypass button.

## Splitter L/M/H

Divides audio into low, mid, and high frequency bands with independent FX racks. Controls: LOWS rack, SPLIT FREQ (low/mid), MIDS rack, SPLIT FREQ (mid/high), HIGHS rack, LEVEL.

## Splitter M/S

Divides audio into mid and side bands with independent FX racks. Controls: MID rack, SIDE rack, LEVEL. Each band has a bypass button.

## Utility

Utility functions: POLARITY INV (L/R), LPF, HPF, MONO BASS/FREQ (force frequencies below threshold to mono), WIDTH (stereo), PAN (balance), MIX, LEVEL.

# Exploring Sound Modulation

Serum offers advanced options for sound modulation through three principal areas: Envelopes, LFOs, and Modulation Matrix.

## Using Envelopes

Four envelopes (ENV 1-4). ENV 1 is special — controls output volume of each voice (always active). Parameters: ATK (Attack), HOLD, DEC (Decay), SUS (Sustain), REL (Release). Curves can be modified directly on the graph. Lock button auto-normalizes zoom when locked.

Assign an envelope to a control by clicking and dragging the ENV tab to a knob. Right-click envelope tab to bypass/remove destinations. Supports MS or BPM time values. Grid can show Time or Beats. Legato Inverted option forces envelope to always trigger at note on even when legato is enabled.

## Using LFOs

Ten LFOs (LFO 1-10, with LFO 7-10 visible after LFO 6 is used). Each has independent controls.

LFO Types: Normal, Path, Chaos: Lorenz, Chaos: Rossler, S&H.

Modes: FREE (follows host clock), RETRIG (restarts with new note), ENVELOPE (single cycle then stops, with optional loopback point).

Controls: MONO (monophonic/polyphonic), SHAPE (preset menu), DIRECTION (Forward/Reverse/Ping Pong), GRID, HOST (sync to song position), BPM/HZ, RATE (playback speed, supports Swing and 10x), TRIP/DOT, RISE, DELAY, SMOOTH, PHASE (supports Snap to Grid).

Drawing tools: Point, Flat, Ramp Up, Ramp Down. LFO Editor available for larger canvas.

Assign LFO to control by drag and drop. Blue halo shows modulation depth. Small halo or Option/Alt-click-drag main knob to change depth. Negative depth shown as lighter blue. Gray halo indicates modulator assigned but not currently selected.

Shift-Option/Shift-Alt-click modulated control to change unidirectional/bidirectional.

Copy wavetable shape to LFO via Default menu. Copy LFO shape to wavetable by Option/Alt-dragging LFO tab to wavetable display.

## Modulating LFO Points

LFO point modulation works through LFO busses. Right-click a point and choose Modulate X or Modulate Y. Select an LFO bus and modulation source. Or drag a source (e.g., ENV 2) over an LFO point and drop on X or Y button. Shaded bar shows modulation range. Multiple points can be selected and configured in a single assignment.

## Velocity and Note Settings

VELO tab: Define MIDI velocity graph to modulate parameters. Draw graph with points and curves. Assign by dragging VELO tab to any control. Supports Legato (Portamento Time).

NOTE tab: Define MIDI note graph to modulate parameters. Same drawing and assignment process. Supports Legato (Portamento Time). Init Graph option resets to diagonal line.

## Using Macros

Eight macros for simultaneous control of multiple parameters. Can serve as both modulation source and destination. Assign by dragging macro selector to a control. Macros can be assigned to multiple controls. Drag one macro over another to swap assignments. Number next to macro name shows destination count. Hover to see tooltip of destinations.

## Using Oscillators and Filters as Modulation Sources

Drag the module label to a control to use the output of any oscillator or filter as a modulation source.

# Using the Modulation Matrix

Shows all configured modulations as a list. 64 modulation matrix slots per patch, 49 different modulation sources. Integrated with drag-and-drop routing.

Columns: SOURCE, CRV (Curve — non-linear scaling), AMOUNT (bi-directional slider), POL (Polarity — uni/bi-directional), DESTINATION, OUT (output shape graph), AUX SOURCE, INV (invert aux), CRV (aux curve), OUTPUT (scale final output), Bypass button, Remove button.

Special mod sources (matrix-only): Active Voices, Note-On Alt 1/2, Note-On Rand (Discrete), Note-On Rand 1/2, Oscillators, Release Velocity, Voice Index, Voice Mod 1/2, Expression/MPE X/Y/Z, Filters, Mod Wheel, Aftertouch, Poly Aftertouch, Pitch Bend, Fixed.

Expand/revert with Option-F/Alt-F. Drag modulation handle to reorder rows.

Matrix operations: Sort by Source/Destination, Lock Matrix (keep assignments on preset change), Create Vibrato, Create Velo->Amp Assignment, Apply and Delete Macros.

# Setting Voicing and Portamento

VOICING section:
- MONO — Enable monophonic mode (one active note)
- LEGATO — When MONO enabled, determines if envelopes/LFOs retrigger. When enabled with MONO off, Serum behaves paraphonically.
- POLY — Number of simultaneous notes (disabled when MONO enabled). Voice count shows active/total voices including unison and granular grains.
- Limit Same Note Poly to 1 — Prevents stacking same note
- Voice Steal Priority: Newest, Oldest, Highest, Lowest, Velocity

PORTAMENTO section:
- PORTA — Rate of glide between notes
- CURVE — Contour of glide (convex or concave)
- ALWAYS — Portamento occurs on new note even if no note currently playing
- SCALED — Portamento rate adjusted based on pitch distance (less noticeable on short intervals)

# Using Clips

Versatile CLIP module for creating, fine-tuning, and playing MIDI clips directly within Serum. 12 clips per clip bank. Each clip specifies note pitch, length, position, and velocity.

## Clip Global Parameters

BANK field loads/saves clip bank presets (Init to start fresh). TRIGGER MODE: MONO (single clip at a time) or POLY (multiple simultaneous). EDIT ALL: Apply parameter edits to all clips. Option/Alt-edit to apply to all clips.

## Piano Roll

Standard piano roll for creating MIDI clips. Double-click to add notes. Click-drag to select notes (Shift for additional). Arrow keys to move notes. Shift-arrows for octave/length changes.

Operations: Cut (Cmd/Ctrl-X), Copy (Cmd/Ctrl-C), Paste (Cmd/Ctrl-V), Duplicate (Cmd/Ctrl-D), Delete (Backspace), Chop (Cmd/Ctrl-U), Conform to Scale (Cmd/Ctrl-K), Legato (Cmd/Ctrl-L), Mute (0), Quantize (Cmd/Ctrl-Q), Reverse (Cmd/Ctrl-R), Scale Time 50%(/), Scale Time 200%(*), Double Entire Clip (Cmd/Ctrl-E), Select All (Cmd/Ctrl-A).

Grid size adjustable. Fold button hides unused notes. Cmd/Ctrl-click fold to show scale notes too. Headphones toggle for note sound on selection.

## Clip Settings

LENGTH (bars/beats/16ths), KB SPAN (Mono/Poly, Offset, Off), TRANS (transpose), MODE (Normal through random variants, Static), RATE (playback speed), LAUNCH QUANT, RETRIG, VELO TRIG, NOTE GATE.

Clip management: Rename, Copy, Paste, Erase, Set as Preview Clip (for preset browser). Trigger via play buttons, CLIP keyboard, or MIDI.

Recording: OVERDUB (loops continuously) or EXTEND (extends timeline). Metronome toggle. Commit button saves performance. Undo button removes uncommitted notes.

## Clip MIDI Out

Right-click MIDI OUT field: Off (default), Clip Player (CLIP module only, no key/scale quantizing), On (CLIP through ARP with key/scale quantizing). Can route MIDI to another instrument in DAW.

## Clip Macros

Click the macros button to assign macros to clip controls. Drag macro selector to valid destination. Macro automation can be recorded to clips.

# Using the Arpeggiator

Full-featured arpeggiator for sequencing chord notes into rhythmic patterns. 12 arpeggiators per arp bank. Click the ARP button to access.

## Arp Global Parameters

BANK field loads/saves arp banks. LAUNCH QUANT sets sync interval. EDIT ALL applies edits to all arp slots. Option/Alt-edit for all arps.

## Arp Pattern

SHAPE field selects pattern (Up, Down, Converge, Diverge, random variants, Pattern for custom). RATE (BPM or HZ). TRIP/DOT buttons.

Custom Pattern Editor: LENGTH (bars/beats/16ths), MODE (Normal/Reverse/Pendulum/Random variants/One Shot/Static), TIME (for random modes), STEP MODE (Normal/New Only/Chord variants), WRAP, PITCH (wrap transpose 0-24 semitones), RANGE.

Graph Editor: Similar to piano roll with step area, accent lane, strum lane, automation lanes.

## Arp Transpose

SHIFT knob sets transposition amount per repetition. RANGE knob sets number of repetitions.

Transpose range shapes: Up, Down, Up/Down, Down/Up, Up+Down, Down+Up, Thumb Up, Thumb UD, Pinky Up, Pinky UD, Converge, Diverge, Con+Diverge, Chord, Random, Rnd.NoDup, Rnd.Drift, Rnd.Once.

## Arp Playback Settings

LATCH — Continue playing without holding keys. THRU — Pass incoming notes to output. OFFSET — Offset arpeggiator note order. REPEATS — Pattern/transpose repetitions. GATE — Note length relative to RATE. CHANCE — Probability of note being played (Pre option applies before SHAPE advance). When arp enabled, MIDI CC64 sustain controls latch.

## Arp Retrigger and Velocity

Retrigger: LAUNCH (retrigger on slot launch), RATE (interval-based retrigger), NOTE (retrigger on incoming note), FIRST (only on first incoming note).

Velocity: Enable velocity settings, RETRIG (reset decay on retrigger), DECAY (speed of velocity change), TARGET (destination velocity).

## Arp MIDI Out

Same MIDI OUT options as CLIP module: Off, Clip Player, On.

# Using the Keyboard

On-screen keyboard for playing notes and setting parameters.

TRANSPOSE: -24 to +24 semitones. Drag or click arrows. Mouse wheel for 12-semitone increments.

KEY and SCALE: Applied to MIDI input and CLIP/ARP output. Comprehensive scale selection. Piano roll highlights root note and scale notes.

SWING: OFF by default. Sets swing division. Serum matches swing value to host DAW convention.

OSC MAPPING: Edit note and velocity ranges. KEY mapping sets note ranges per oscillator/arpeggiator. VEL mapping sets velocity ranges. FOLD checkbox folds out-of-range notes into selected range. WARP checkbox maintains warp on notes outside range.

# Using the Wavetable Editor

Advanced editor for creating and editing wavetables. Access by clicking the pencil button in OSC A/B/C pane.

## Wavetable Editor Thumbnails

Thumbnails along the bottom provide easy view, select, and reorder of subtables. Click to view/edit frame. Click-drag to move frame. Shift-click to select range for bulk operations.

## Drawing Tools

Toolbar with grid-relative tools: Flat Line, Sine, Slope Up, Slope Down, Curve Up, Curve Down, Half Sine (peak/valley), Interpolate Linear, Interpolate Curved, Nudge, Noise, Mirror. Grid size set in lower-right corner.

## FFT Area

Top section shows frequency bins (harmonics). Bottom section shows phase offsets. Context menu operations: Clear All, Clear HF/LF, Generate Saw, Randomize variants, Progressive Fade, Shift Octave Up/Down, Repeat Bin Group, Draw Even/Odd Only, Snap Vertical, Scale Freq Values by Bin Index.

## Managing Frames

COPY/PASTE buttons for frame operations. REMOVE menu: Init All, Insert, Remove (current/multiselection/beginning->selected/selected->end/all except selected), Reduce to. SORT menu: by spectrum (Peak/Average/Peak Amount/Num/Highest/Fundamental), Randomize, Reverse Entire Table.

## Wavetable Editor Menus

IMPORT button: Various import options plus drag-and-drop from Finder/Explorer.

EXPORT button: 8-bit (.256), 16-bit (.wav), 32-bit (.wav), Single-Cycle Waves, Export Selection.

SINGLE menu: Normalize, Remove DC Offset, Flip Vertical/Horizontal, Shift to Zero Crossing, Init (Silence), Fade/X-Fade Edges, Filter, Sample Redux, Send to Noise Oscillator.

ALL menu: Same operations applied to all frames plus additional operations: Remove Fundamental, Remove Low Spectra/Phases, Resize Tables, Create PWM, Nudge Phases, Set Spectra/Phases from this frame or other osc, Subtract Spectra, Blur operations.

MORPH menu: Morph - Crossfade, Morph - Spectral, Morph - Spectral (Zero Fund. Phase), Morph - Spectral (Zero All Phases), Remove Morph Tables.

## Saving Wavetables

Modified wavetables show tinted background. Right-click and choose Save Table. Save in User folder, avoid overwriting factory wavetables. Serum always saves wavetable data inside a preset unless it is a factory wavetable (8k to 4MB depending on frames).

# Importing Audio as Wavetables

Import methods for multi-cycle waveforms:
- DYNAMIC PITCH - ZERO SNAP — Builds pitch map, locates zero-crossings. Best for simple sounds with non-fixed pitch.
- DYNAMIC PITCH - FOLLOW — Builds pitch map without zero-crossing snap. Better for complex sounds.
- FREQUENCY ESTIMATION — Analyzes dominant frequencies and harmonics. Best for well-defined pitched sounds.
- Constant framesize (PITCH AVERAGE) — Best default choice for fixed-frequency sounds. Try this first if in doubt.
- FFT 256/512/1024/2048 — Spectral import analyzing frequency content. Good for drums, speech, abstract material. Larger sizes = higher frequency resolution.
- Switch OSC type — Import as regular sample (Sample/Granular/Spectral mode).

For stereo files, left channel goes to OSC A/C, right channel to OSC B.

Advanced: Type exact sample count or MIDI note name in Formula field. Text file overrides (.txt or FolderInfo.txt) for specifying samples-per-cycle and interpolation. Serum internally uses 2048 samples per frame (ideal for import at 46.875 Hz / F#0 +24 cents at 96000 Hz).

Single-cycle import: Drag audio file to frame thumbnail in Wavetable Editor. Multiple files can be dragged together.

Image import: Drag PNG file (8-bit) to wavetable oscillator. Pixel luminance maps to amplitude. Width determines frame count (max 256).

## Embedding Wavetables in Presets

By default, Serum saves file path but not audio data. Missing files dialog appears if audio moved. Click the embed button on oscillator display or choose Embed in Preset from menu before saving to include wavetable in preset file.

# Using the Formula Parser

Generate wavetables from mathematical formulas. Enter formulas in the Formula text box in the Wavetable Editor.

Basic functions: sin, cos, tan, asin, acos, atan, sinh, cosh, tanh, asinh, acosh, atanh, log2, log10, log, ln, exp, sqrt, sign, rint, abs, min, max, sum, avg.

Binary operators: && (logical and), || (logical or), <=, >=, !=, ==, >, <, +, -, *, /, ^ (power).

Constants/Variables:
- pi (3.14159...), e (2.71828...)
- w: current time-value 0.0 to 1.0
- x: current time-value -1.0 to 1.0
- y: current table number 0.0 to 1.0
- z: current table number -1.0 to 1.0
- q: FFT bin number 1-512 (plots to FFT area instead of waveform)
- in: current old waveform value of plotting table
- sel: current waveform value of selected table only
- rand: random number -1.0 to 1.0

Formula presets menu: Singles, Multis, User Singles, User Multis. Save custom formulas. Formula files stored in Serum 2 Presets/System/ as FormulaUserMultis.txt and FormulaUserSingles.txt.

Examples: q<17 (first 16 harmonics), q<z*256 (256 frames with progressive harmonics), (1/q)^0.25 (modified sawtooth), ((q%2)==1)?in:0 (remove even harmonics / squarify).

# Exploring Global Settings

Click the GLOBAL tab to access. Divided into Preferences, Voice Control, Quality, and Tuning panes.

## Preferences

User Interface: Help Tooltips (SHOW/HIDE), Param value tooltips, Double-click params (reset vs text entry), Mouse wheel param control, Keyboard shortcuts, Default waveform view (2D/3D).

MPE: MPE enabled by default, MPE Pitch Bend maps to Expr X, MPE Expr Y acts bi-directional.

General: Limit Mod depth on drop, Mod Wheel -> WT Pos (when editor open), Silence note + FX tails when transport stops, Load MIDI Map from Presets, Use Ultra quality when rendering, Automatically check for updates.

## Voice Control

Define behavior of each voice across oscillators. Select which oscillators apply. Load/save/init voice control presets. Set sequence length (1-8). SEQ controls for per-voice settings.

Randomization: PAN (stereo position %), DETUNE (tuning offset cents), CUTOFF (filter cutoff %), ENVS (envelope offset %).

Scaling: All envelopes and LFO scaling (useful when changing BPM).

## Quality

Oversampling: Draft (1x), High (2x), Ultra (4x). Lock button preserves settings across preset loads. S1 Compatibility Mode (auto-enabled for Serum 1 presets). Disable Smoothing (for sample-accurate automation, applies to mouse actions too).

## Tuning

Concert pitch: Default A4 at 440 Hz. Adjustable.

Tuning file: Load .tun files per Serum instance. Clear Tuning option.

MTS-ESP: Microtuning system by ODDSOUND. Uses free MTS-ESP MINI plugin for central tuning control. Enabled by default. Options: Enable MTS-ESP, MTS-ESP Note-On Only. .tun file always takes precedence. Steps pitch mode available with active MTS-ESP.

Lock button preserves tuning configuration across preset loads.

# Appendix A: Main Menu

Main menu options:

General: About, Read the manual, Check for updates.
Initialization: Init Preset, Init LFOs + LFO Mods, Init Modulations.
Presets: Load Preset, Revert to Saved, Save as Default Preset.
Import: Import Preset Pack.
Rendering: Render OSC Warp, Resample to.
Folders: Open Serum 2 Presets Folder, Rescan Folders on Disk.
MIDI/Tuning: Load/Save MIDI Map, Load Tuning (.tun).
MPE: MPE Enabled, MPE: XYZ -> Macro 1,2,3, MPE: YZ -> Macro 1,2, MPE: Y -> Mod Wheel, MPE Bend Range: 48 (configurable 1-96 semitones).

# Appendix B: Presets Browser

Click the browser button to access. Folders pane shows hierarchical structure. Presets pane shows folder contents. Click to load, play button to preview.

Search by: Name (type in search field, Cmd/Ctrl-F to focus), Categories/Tags (select tabs and filter), Ratings (1-5 stars, exact match).

Manage presets: Display/edit metadata (artist, category, description, comments, date, tags), specify category (including custom), manage tags, rate presets.

Operations: Show in Finder/Folder, Load Random Preset (type 7), Hybridize (type 8), Hybridize Favoring Selected (type 9), Delete (Shift-Backspace, recoverable from Trash/Recycle Bin), Rename/Move, Auto-Play Previews, Preview Fallback Clip, Rescan/Erase and Rebuild Database.

Create and Export Pack: Right-click folder, specify pack name/author/URL/description/artwork. Exports as .SerumPack file.

# Appendix C: Editing the Serum Preferences File

Serum2Prefs.json location: macOS ~/Library/Preferences/, Windows %APPDATA%\Xfer\Serum 2\. Delete file to reset to factory defaults.

Changing Default Artist Name: Edit "Default Author": "name" line.

Preset Changes via MIDI Controller: Set "Enable CCForRockers": 1 (CC) or 2 (notes). Set "CCForRocker Preset +/-" to MIDI CC numbers. Value 64+ triggers action. -1 = unassigned.

Oscillator Preset Changes via MIDI: Set "CCForRocker OSC A/B/C/N +/-" to MIDI CC values.

# Appendix D: Serum File Structure

Serum Presets folder locations: macOS /Library/Audio/Presets/Xfer Records/, Windows /Documents/Xfer/.

Key folders:
- Arp Banks — Factory and user ARP banks
- Clip Banks — Factory and user CLIP banks
- Multisamples — Factory and user multisample instruments
- LFO Shapes — .XferShape files (compatible with LFOTool)
- Presets — Factory and user presets
- Samples — Tonal, non-tonal, and user samples
- System — Formula files, MIDI CC Maps, User.dat registration
- Tables — Factory and user wavetables (WAV files, no sub-subfolders scanned)

# Appendix E: Creating Wavetables

Good wavetable characteristics: Many correlated frames (fluid progression) or few well-chosen frames (variety without disconnect).

Table Ordering: Progress from dull to bright or vice-versa. Drag thumbnails to rearrange.

Interpolation: Use MORPH > Morph - Crossfade for smooth transitions between frames.

Creation methods: Drawing with grid tools, drawing in FFT bins, moving drawings to FFT bins and adding new tables.

# Appendix F: Optimizing Serum

CPU Optimization:
- Keep unison counts low (3-7 per oscillator usually sufficient). Higher counts increase CPU and may introduce phasing issues.
- Use chorus FX instead of unison for thick chorused sounds — more CPU friendly and flexible.

# Appendix G: Keyboard Shortcuts

Presets: Cmd/Ctrl-F (search), ↑↓ (navigate), →← (play/stop preview), Shift-click (select multiple), Shift-Backspace (delete), Option/Alt-click save (save same name).

Controls: Shift-drag (fine tune), Cmd/Ctrl-click (reset).

Modules: Option/Alt-drag label (copy without mods), Shift-Option/Alt-drag (copy with mods), Option/Alt-click filter display (cycle modes).

Sample/Granular/Spectral: Option/Alt-click (add/remove slice), Option/Alt-drag window button (quick adjust).

Audio: Option/Alt-click wave icon (open Renders), Shift-drag wave icon (copy preset to Finder/Explorer).

FX: Option/Alt-drag (copy without mods), Shift-Option/Alt-drag (copy with mods), Option/Alt-click bypass (bypass all), Option/Alt-F (expand/revert).

Matrix: Option/Alt-F (expand/revert).

LFOs: Option/Alt-drag tab (copy settings), Double-click (add/remove point), Shift-click (draw steps), Option/Alt-drag (snap to grid/move all curves), Cmd/Ctrl-drag (relative movement), Shift-Cmd/Ctrl-click (set loopback).

Modulation: Shift-Option/Alt-click (change uni/bi-directional).

Clips: Option/Alt-edit (apply to all), Cmd/Ctrl-Option/Alt-drag (scroll), Shift-Option/Alt-drag (zoom), Shift-Cmd/Ctrl-drag (zoom to marquee). Arrow keys for note movement, Shift-arrows for octave/length. Standard cut/copy/paste/duplicate/delete shortcuts. Cmd/Ctrl-U (chop), K (conform), L (legato), Q (quantize), R (reverse), E (double clip), A (select all). 0 = mute, / = scale 50%, * = scale 200%.

Wavetable Editor: Click-drag (move frame), Shift-click (select range), Shift-Cmd/Ctrl-click (nudge phase offset).
