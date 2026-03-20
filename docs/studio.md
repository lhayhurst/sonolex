# Sozin's Home Studio Setup - Complete Reference Guide

## Overview

This is a comprehensive reference for Sozin's home studio in Richmond, London. The studio centers around music production with Ableton Live 12, featuring a sophisticated signal routing system through an RME Fireface UCX II audio interface, Blokas Midihub MIDI processor/router, multiple MIDI controllers with polyphonic expression capabilities, analog synthesis, modular effects processing, and motorized DAW control.

## High-Level Signal Flow

### Audio Monitoring Paths
```
Main Monitors: Fireface Outputs 1/2 → OB-4 Speaker (volume via ortho remote)
Headphones: Fireface Outputs 5/6 → PreSonus HP4 → Multiple Headphones
```

### Audio Processing Chain
```
Effects Loop: Fireface Outputs 3/4 → Chase Bliss Clean → Empress ZOIA → Hologram Microcosm → Fireface Inputs 7/8
Synth Inputs: 
  - Artemis → TX-6 Channel 6 (+21dB) → Fireface Inputs 5/6
  - ContinuumMini → TX-6 Channel 3 (adjust gain) → Fireface Inputs 5/6
```

### MIDI Routing (Updated with Midihub)
```
Computer → Fireface MIDI Out → Midihub MIDI Input A
Midihub Output A (rightmost) → Kenton THRU-5 → [Thru 2: ZOIA, Thru 3: Artemis]
Midihub Output B (2nd from right) → Chase Bliss Clean
Controllers → Computer USB: QuNexus, Xkey 37, ROTO-Control, Faderfox EC4
Expression/Sustain: PLUS 3 → QuNexus CV 1-2 → converted to MIDI
```

**CRITICAL: Midihub Port Layout**
Looking at the back of the Midihub, ports are labeled **RIGHT TO LEFT**:
- **Inputs (top row)**: A, B, C, D (right to left)
- **Outputs (bottom row)**: A, B, C, D (right to left)
- Output A = rightmost port
- Output D = leftmost port

---

## MIDI Router & Processor

### Blokas Midihub
**Role**: MIDI processing, routing, and transformation hub
**Connection**: USB to PC
**Firmware**: Version 1.15+ recommended
**Documentation**: https://blokas.io/midihub/docs/

#### Key Specifications
- 4 MIDI DIN inputs, 4 MIDI DIN outputs (5-pin)
- 4 USB MIDI inputs, 4 USB MIDI outputs
- 8 Virtual inputs, 8 Virtual outputs (internal routing)
- Standalone operation after configuration
- 8 preset slots accessible via button or MIDI Program Change
- Customizable processing pipelines using visual "pipes"

#### Current Physical Connections
**MIDI Inputs:**
- Input A: Fireface MIDI Out (main MIDI from Ableton)

**MIDI Outputs:**
- Output A (rightmost): Kenton THRU-5 input → ZOIA (Thru 2) + Artemis (Thru 3)
- Output B (2nd from right): Chase Bliss Clean (requires Type A TRS adapter)
- Output C: Available
- Output D: Available

#### Current Pipeline Configuration

**Pipeline 1: Ableton → Artemis/ZOIA (via Kenton)**
```
USB Input A → MIDI Output A
```
- Routes MIDI from Ableton to Artemis and ZOIA via Kenton splitter
- Artemis on MIDI channel 1
- ZOIA receives MIDI for preset changes and parameter control

**Pipeline 2: Ableton → Chase Bliss Clean**
```
USB Input B → MIDI Output B
```
- Routes MIDI CC control to Clean compressor
- Clean on MIDI channel 2 (default)
- Used for automated or manual parameter control

**Pipeline 3: EC4 → Artemis (Future)**
```
USB Input (EC4) → [Transform/Remap] → MIDI Output A
```
- Direct EC4 encoder control of Artemis parameters
- Configurable CC mapping and scaling

#### Midihub Capabilities
**Processing Pipes Available:**
- **Transform**: Convert between MIDI message types (CC, Note, Program Change, etc.)
- **CC Remap**: Scale and adjust CC value ranges
- **CC LFO**: Generate automated CC modulation
- **Randomizer**: Add controlled randomness to parameters
- **Dispatcher**: Complex routing logic with conditions
- **Channel Filter/Remap**: MIDI channel manipulation
- **Arpeggiator, Harmonizer, Delay**: Creative MIDI effects
- **Note/CC Range Filters**: Selective message passing

#### Important Notes
- Settings stored in flash memory after clicking "Store" in Editor
- Can operate standalone without computer once configured
- Button on device switches between 8 presets (1-8 clicks)
- External Program Change messages can also switch presets
- Extremely low latency (<1.5ms MIDI loopback)

---

## Audio Interface (Hub of the System)

### RME Fireface UCX II
**Role**: Central audio hub
**Connection**: USB 2.0 to PC (USB 3.0 compatible)
**Manual Available**: fface_ucx2_e.txt (6082 lines)

#### Key Specifications
- 40x20 matrix router via TotalMix FX
- 8 analog inputs:
  - 4 rear balanced TRS line inputs (Ins 1-4, 5-8)
  - 2 front Neutrik combo XLR/TRS mic/line with 48V phantom (Ins 1-2)
  - 2 front TRS instrument/line inputs (Ins 3-4)
- 8 analog outputs:
  - 6 rear balanced TRS (Outs 1-6)
  - 2 headphone output (Outs 7-8, low impedance)
- Digital I/O: ADAT (8ch), AES/EBU, SPDIF (coax/optical)
- MIDI I/O (1 in, 1 out via 5-pin DIN)
- Word clock I/O
- SteadyClock FS for jitter-immune clocking
- DURec port for USB recording or ARC USB remote
- Sample rates up to 192kHz/24-bit
- Standalone operation capable

#### Current I/O Configuration
**Analog Inputs:**
- Input 1: Teenage Engineering CM-15 condenser microphone (front Mic/Line XLR input with 48V phantom)
- Inputs 7/8: Effects return (Clean → ZOIA → Microcosm chain)
- Inputs 5/6: TX-6 main output (includes Artemis on TX-6 ch6)

**Analog Outputs:**
- Outputs 1/2: OB-4 speaker (main monitors)
- Outputs 3/4: Effects send (to Clean input)
- Outputs 5/6: HP4 headphone distribution

**MIDI:**
- MIDI Out: Midihub Input A (main MIDI routing now handled by Midihub)

#### TotalMix FX Features
- 800-channel mixer with 46-bit internal resolution
- Per-channel 3-band EQ, low cut, reverb, echo, compressor, expander, auto level
- Room EQ: 9-band PEQ with delay and volume calibration
- Latency-free submixes
- Perfect ASIO Direct Monitoring
- Real-time DSP: Hardware level meter with peak and RMS calculation

#### Important Notes
- External power: DC 12V 24W (lockable connector)
- Class compliant mode available (no drivers needed)
- Settings stored at unit level for standalone operation
- Front panel encoder and display for complete control without computer

---

## Digital Audio Workstation

### Ableton Live 12
**Role**: Primary DAW and creative hub
**Integration**: Full bidirectional control via ROTO-Control

#### Key Integrations
- ROTO-Control: Control surface with motorized feedback
- Faderfox EC4: Universal MIDI controller (custom setups for direct hardware control)
- Fireface UCX II: Audio interface (ASIO)
- QuNexus: MIDI input controller
- Xkey 37: MIDI input controller
- Midihub: MIDI routing to hardware via USB
- MIDI output routing to Artemis, ZOIA, and Clean via Midihub

---

## MIDI Controllers

### Keith McMillen QuNexus (RED)
**Connection**: USB to PC
**Manual Available**: QuNexus_RED_Manual_V2-1.txt (1331 lines)

#### Key Features
- 25-key smart sensor keyboard with polyphonic aftertouch
- Per-key sensors: Velocity, Pressure (Z-axis), Tilt (Y-axis)
- MPE compatible (up to 13 member channels on Track 1)
- 3 independent tracks for routing/sequencing/arpeggiation
- Built-in arpeggiator: 10 patterns, 3 hold modes (Standard, Toggle, Modulation Edit)
- Built-in step sequencer: up to 32 steps per track, 8 pattern storage slots
- Internal clock or external sync (Auto, Internal, CV, USB, MIDI Expander)

#### I/O
- USB (MIDI class compliant, 2 ports)
- MIDI Expander port (5-pin DIN)
- CV outputs (4x 3.5mm): assignable per track to Note Pitch, Velocity, Pressure, Tilt, Bend, Gate, or Clock
- Gate output (3.5mm)
- Expression pedal input: CV 1-2 (converts to MIDI CC#112/113 on Channel 2)

#### Controls
- OCT +/- buttons (octave transpose, hold both during USB plug-in for factory reset)
- BEND pad (polyphonic pitch bend)
- SHIFT/PRESET button (4 preset slots accessible)
- HOLD A, VELO B, PRES C, TILT D (toggle buttons)

#### Current Configuration
- **PLUS 3 Expression/Sustain** connected to CV inputs 1-2
- Configured via QuNexus Editor software (firmware updates, curves, settings)

---

### ESI Xkey 37
**Connection**: USB-C to PC
**Manual Available**: Xkey_37-English.txt

#### Key Features
- 37 full-sized velocity-sensitive keys with polyphonic aftertouch
- Ultra-thin, portable design
- MIDI class compliant (plug-and-play)
- Compatible with Mac, PC, Linux, iOS, Android

#### Controls
- OCTAVE +/- buttons (transpose, press both to reset)
- MODULATION button (pressure-sensitive)
- PITCH BEND +/- buttons (pressure-sensitive)
- SUSTAIN button (toggle on/off)

#### Xcable Adapter (left side)
- MIDI Out (5-pin DIN)
- SUSTAIN pedal input (1/4")
- EXPRESSION pedal input (1/4")

#### Software
- Configurable via Xkey Plus editor (velocity/aftertouch curves, firmware updates)

---

### Melbourne Instruments ROTO-Control
**Connection**: USB-C to PC
**Manual Available**: ROTO-UserManual-V1-1-4-April2025.txt (1030 lines)

#### Key Features
- 8 motorized touch-sensitive knobs (patent-pending brushless motor design)
- 8 backlit RGB LED buttons
- High-resolution IPS LCD displays with parameter labels
- Bidirectional communication with Ableton Live
- Internal memory: 64 devices/plugins, 128 controls each

#### Hardware
- Control panel buttons: MODE, LEARN, FUNC, SEL, LOCK, Transport, Navigation arrows
- Menu window display
- 8 individual control LCD displays
- 5-pin MIDI In, Out, Thru
- Service button

#### Three Main Modes

**MIX Mode (Ableton Live mixing)**
- Plug & play audio mixing
- Auto-syncs track names and colors from Live
- Up to 64 tracks (8 pages)
- Knobs: Volume/Pan/Sends (A-L)
- Buttons: Track On/Off, Solo, or Arm Rec
- FUNC: Track focus (all controls for selected track)
- Return and Master track access
- Lock prevents track switching

**PLUGIN Mode (Ableton Live devices/plugins)**
- One-touch learning of plugin parameters
- Automatically captures parameter labels from Live
- Works with Ableton devices, native effects, third-party plugins
- Automatic macro mapping for racks (up to 16 macros)
- Assignments stored on ROTO for instant recall
- Up to 8 pages per device (64 knobs + 64 buttons)

**MIDI Mode with Motion Recorder**
- Control any MIDI hardware/software
- Up to 64 MIDI setups (64 parameters each)
- Motion Recorder: automates first 8 knobs
- 16/32/48/64 step recording (1 step = 1/4 note)
- Internal clock (20-240 BPM) or external MIDI clock sync
- Standalone operation (no computer needed)

#### Software
- **Roto-Setup App**: Firmware updates, customize haptics/labels/colors, import/export setups

---

### Faderfox EC4
**Connection**: USB to PC
**Firmware**: Version 2.00
**Manual Available**: EC4_Manual_V03.txt (627 lines)

#### Key Features
- 16 gridless push-encoders (72 pulses per revolution)
- 7 function buttons (SETUP, GROUP, FUNC, SHIFT, NAME, BAR, NUM)
- Large OLED display (4x20 characters)
- 16 groups per setup × 16 encoders = 256 controls per setup
- 16 setups total = 4096 programmable controls
- MIDI commands: CC (absolute/relative), Program Change, Pitch Bend, Aftertouch, NRPN, Notes
- 14-bit high resolution mode for sensitive parameters
- Programmable value ranges, acceleration, display scales
- Link function for multi-parameter control
- 15 preset slots for control value snapshots
- Backup/restore via SysEx

#### Button Layout
```
[SETUP] [GROUP]  [FUNC]
[SHIFT] [NAME] [BAR] [NUM]
```

#### Mode Access
- **Controller Mode**: Default mode for playing/controlling
- **Edit Mode**: Hold FUNC + press Encoder 8 (2nd row) - configure individual encoders
- **Setup Mode**: Hold FUNC + press Encoder 4 - general settings, copy/paste, backup
- **Monitor Mode**: Hold SHIFT + press FUNC - view MIDI data flow

#### Current Configurations

**Setup 15: Ableton Live Integration (Factory)**
- Uses "Faderfox Universal 2" control surface script
- 12 groups for comprehensive Ableton control:
  - Vol: 16 track volumes
  - Pan: 16 track pans
  - SndA/B/C/D: Send amounts
  - Dev: 16 device parameters (auto-mapped)
  - T1-T4, T5-T8, T9-T12, T13-T16: Per-track multi-parameter control

**Setup "CLEN": Chase Bliss Clean Control (Active)**
Complete real-time control of Chase Bliss Clean compressor via MIDI. Layout mirrors the physical Clean pedal for intuitive operation.

**Physical Requirements:**
- MIDI Cable: Type B TRS (Chase Bliss "Ring Active") - 5-pin DIN to 1/4" TRS  
- Midihub Routing: USB Input (EC4) → Channel Remap (Ch1→Ch2) → MIDI Output B
- Clean Dip Switch 77 (SWELL AUX): Set to ON for manual swell mode

**Complete Mapping:**

| Encoder/Button | Function | Type | CC | Ch | Values | Notes |
|---------------|----------|------|----|----|--------|-------|
| **EC1** | Dynamics | CCAb | 14 | 2 | 0-127 | Compression amount |
| **EC2** | Sensitivity | CCAb | 15 | 2 | 0-127 | Dynamic threshold |
| **EC3** | Wet | CCAb | 16 | 2 | 0-127 | Processed signal level |
| **PB1** | Release: Fast | CC | 21 | 2 | 0 | 50ms |
| **PB2** | Release: User | CC | 21 | 2 | 2 | Adjustable |
| **PB3** | Release: Slow | CC | 21 | 2 | 127 | 1.5s |
| **PB4** | Dusty Mode | CC | 78 | 2 | 0/127 | Limiter→overdrive |
| **EC5** | Attack | CCAb | 17 | 2 | 0-127 | 0.5ms-300ms |
| **EC6** | EQ | CCAb | 18 | 2 | 0-127 | Noon=neutral |
| **EC7** | Dry | CCAb | 19 | 2 | 0-127 | Unprocessed signal |
| **PB5** | Mode: Shifty | CC | 22 | 2 | 0 | Dynamic EQ |
| **PB6** | Mode: Manual | CC | 22 | 2 | 2 | Fixed EQ |
| **PB7** | Mode: Modulated | CC | 22 | 2 | 127 | Modulating EQ |
| **PB8** | Spread | CC | 72 | 2 | 0/127 | Stereo width |
| **PB9** | Physics: Wobbly | CC | 23 | 2 | 0 | Subtle wobble |
| **PB10** | Physics: Normal | CC | 23 | 2 | 2 | Stable |
| **PB11** | Physics: Twitchy | CC | 23 | 2 | 127 | Unstable |
| **PB12** | Motion Mode | CC | 76 | 2 | 0/127 | Modulated compression |
| **EC13** | Swell In Speed | CCAb | 26 | 2 | 0-127 | Swell attack time |
| **EC14** | Swell Out Speed | CCAb | 29 | 2 | 0-127 | Swell release time |
| **PB15** | Swell Trigger | CC | 103 | 2 | 0/127 | Momentary swell |
| **PB16** | Bypass | CC | 102 | 2 | 0/127 | Toggle on/off |

**Saved Presets:**

*Preset 1: Safe Space* - Stored in EC4 Preset Slot 1
- Dynamics: Noon (moderate compression)
- Sensitivity: Adjusted for comfortable LED movement
- Wet: ~2 o'clock, Dry: ~Noon
- Attack: Fast (counter-clockwise)
- EQ: Noon (neutral)
- Release: User mode (PB2)
- Mode: Manual (PB6)
- Physics: Normal (PB10)

**Recall Preset:** NUM + Enc1, then NUM + Enc16 (sends snapshot)

**Setup Name Change:** Renamed from "SE01" to "CLEN" for easy identification

**Setup 1, Group 1: Hologram Microcosm Control (Active)**
Complete hands-on control of Hologram Microcosm granular effects processor via MIDI. Layout mirrors the physical Microcosm pedal with rows 1-2 matching the main controls, row 3 for secondary parameters, and row 4 for modulation/utility controls.

**Physical Requirements:**
- MIDI Connection: EC4 USB → Computer → Fireface MIDI Out → Midihub → [Future direct routing]
- Microcosm MIDI Channel: 1 (default)
- All encoders use CCAb (absolute CC) mode with Acc3 acceleration

**Complete Mapping:**

*Row 1 - Main Controls (Microcosm Top Row):*

| Encoder | Function | Display | Type | CC | Ch | Range | Notes |
|---------|----------|---------|------|----|----|-------|-------|
| **EC1** | Activity | ACTV | CCAb | 6 | 1 | 0-127 | Effect density/complexity |
| **EC2** | Shape | SHAP | CCAb | 7 | 1 | 0-127 | Envelope contour |
| **EC3** | Filter | FILT | CCAb | 8 | 1 | 0-127 | Low-pass filter cutoff |
| **EC4** | Mix | MIX. | CCAb | 9 | 1 | 0-127 | Dry/wet balance |

*Row 2 - Main Controls (Microcosm Bottom Row):*

| Encoder | Function | Display | Type | CC | Ch | Range | Notes |
|---------|----------|---------|------|----|----|-------|-------|
| **EC5** | Time | TIME | CCAb | 10 | 1 | 0-127 | Manual tempo control |
| **EC6** | Repeats | REPT | CCAb | 11 | 1 | 0-127 | Effect duration/frequency |
| **EC7** | Space | SPAC | CCAb | 12 | 1 | 0-127 | Reverb/delay mix |
| **EC8** | Loop Level | LOOP | CCAb | 13 | 1 | 0-127 | Phrase looper volume |

*Row 3 - Secondary Controls:*

| Encoder | Function | Display | Type | CC | Ch | Range | Notes |
|---------|----------|---------|------|----|----|-------|-------|
| **EC9** | Subdiv | SUBD | CCAb | 5 | 1 | 0-127 | Time subdivision |
| **EC10** | Mod Depth | MDPT | CCAb | 19 | 1 | 0-127 | Pitch modulation depth |
| **EC11** | Reverb Time | REVB | CCAb | 20 | 1 | 0-127 | Reverb decay length |
| **EC12** | Looper Speed | LSPD | CCAb | 17 | 1 | 0-127 | Phrase looper playback speed |

*Row 4 - Modulation & Utility:*

| Encoder | Function | Display | Type | CC | Ch | Range | Notes |
|---------|----------|---------|------|----|----|-------|-------|
| **EC13** | Mod Freq | MFRQ | CCAb | 14 | 1 | 0-127 | Pitch modulation rate |
| **EC14** | Filter Res | RESN | CCAb | 15 | 1 | 0-127 | Filter resonance |
| **EC15** | Effect Volume | EVOL | CCAb | 16 | 1 | 0-127 | Master effect volume |
| **EC16** | Preset Select | PSET | PrgC | 0-60 | 1 | 0-60 | Program change for presets |

*Push Buttons (Bottom Row):*

| Button | Function | Display | Type | CC/Note | Ch | Mode | Lower | Upper | Notes |
|--------|----------|---------|------|---------|----|------|-------|-------|-------|
| **PB14** | Tap Tempo | TAP. | @@CC | 93 | 1 | Key | 0 | 127 | Momentary tap |
| **PB15** | Bypass | BYPS | @@CC | 102 | 1 | Togl | 0 | 127 | Toggle effect on/off |
| **PB16** | Hold Sampler | HOLD | @@CC | 48 | 1 | Key | 0 | 127 | Momentary hold |

**Microcosm Preset Reference (Program Change):**
- PC 1-4: ARP (A-D)
- PC 5-8: INTERRUPT (A-D)
- PC 9-12: BLOCKS (A-D)
- PC 13-16: GLIDE (A-D)
- PC 17-20: SEQ (A-D)
- PC 21-24: MOSAIC (A-D)
- PC 25-28: HAZE (A-D)
- PC 29-32: TUNNEL (A-D)
- PC 33-36: STRUM (A-D)
- PC 37-40: PATTERN (A-D)
- PC 41-44: WARP (A-D)
- PC 45-60: USER BANKS 1-4 (A-D each)

**Suggested Test Settings:**
- Mix: 80-100 (clear effect audibility)
- Activity: 60-80 (moderate complexity)
- Repeats: 70-90 (evolving texture)
- Space: 50-70 (ambient tail)
- Try TUNNEL C (PC 30) or HAZE B (PC 26) for responsive starting points

**Custom Setup: Artemis VCF Control (Planned)**
- Direct CC control of Artemis filter cutoff and resonance
- Bottom row encoders 13-15: VCF Cutoff (CC 75), Volume (CC 7), Spread (CC 10)
- Routed via Midihub for processing and transformation

---

### Lightreft Monolit
**Connection**: USB-C to PC
**Manual Available**: MONOLIT_2_0_0.txt
**Firmware**: v2.0.0

#### Key Features
- Central MIDI control hub: 8 sliders + 8 buttons (paired per bank), 8 banks total
- Each bank is independently configurable as a classic slider/button bank or a sequencer track
- 128x64 monochrome OLED display; left side = performance, right side = navigation/config
- Multiple operation modes per slider/button: CC, LFO, Motion (automation recording), Notes, Sequencer, Performance
- Internal clock with tap tempo, or sync to external MIDI clock
- Preset memory: save/load named presets; presets switchable on the fly
- Web Configurator available for browser-based editing
- Physical dimensions: 230×72×15mm, 350g (machined aluminum enclosure)

#### Hardware I/O
- **USB-C**: Device connection to computer — carries USB MIDI and power
- **TRS MIDI Type-A**: Hardware MIDI output (sends MIDI out to external devices)
- **USB 2.0 Type-A (Host)**: Accepts USB MIDI controllers or gamepads (e.g., Monome Grid)

#### Connection in Studio
```
Monolit USB-C → Computer USB → Ableton Live (USB MIDI device)
Monolit TRS MIDI Out → Kenton THRU-5 (available thru ports 1, 4, or 5) → synths/effects
```
- Monolit appears as a standard USB MIDI device in Ableton's MIDI preferences
- Enable Track + Remote in Ableton MIDI preferences for full control
- TRS output can route hardware MIDI independently of the USB connection (requires TRS Type-A MIDI cable)

#### Slider/Button Modes

**CTRL Mode** (default): Standard CC, Pitch Bend (±), Channel Pressure, or Poly Aftertouch
- Per-slider: Channel, CC number, Min/Max range, Time lag, External CC source (EXT CC), Rename
- Per-button (in CC sub-mode): CC, Note, Program Change, or BPM; Moment/Toggle behaviour; CC Steps (up to 10 steps in toggle)

**Notes Mode**: Sliders trigger MIDI notes; configurable note, velocity, and channel

**LFO Mode**: Slider becomes an LFO generator; configurable rate, waveform, depth, and MIDI clock sync (LFO Sync); sends CC automatically

**Motion Mode**: Record and loop slider movements as automation; syncs to internal or external clock

**Sequencer Mode (per bank)**: Each bank can be a 1–32 step sequencer track
- Per-track settings: MIDI channel, note length, velocity, steps, scale/root note, tempo, swing, probability, transpose, randomizer
- Sequencer Randomizer: pitch variation with Distance, Range, Chance, and Sign parameters
- SLOT ASSIGN: pin sliders from any bank to the PERF screen for live cross-bank control

**Performance Mode (PERF)**: Combines assigned controls from multiple banks for live manipulation while sequencer runs

#### Key Operating Notes
- Hold **BANK** in main menu to switch between 8 banks; banks can be Slider or Sequencer type
- Hold **SHIFT** + START to start/stop internal clock; tap for BPM; SHIFT + PANIC to send All Notes Off
- In Edit menu: SHIFT + slider = fast value sweep; ENTER + ±buttons = precise adjustment
- Copy/paste entire slider+button slot: use SHIFT in Edit menu
- MERGE MODE (Settings → System): smooths slider value jumps when switching banks

#### Suggested Usage in Studio

| Use Case | Configuration |
|----------|--------------|
| Artemis parameter control | 8 sliders → CC mode → Ch 1, map to Artemis CCs (e.g., CC19 cutoff, CC21 resonance) |
| Microcosm live performance | 8 sliders → CC mode → Ch 1, mirror Microcosm key parameters alongside EC4 |
| ZOIA modulation | Sliders → CC mode → ZOIA MIDI channel, map to ZOIA macro CCs |
| Standalone sequencing | 1–8 banks → Sequencer mode → internal or Ableton clock sync, output via TRS |
| LFO automation | Sliders → LFO mode → send slow CC sweeps to synth parameters without Ableton automation |
| Motion recording | Slider → Motion mode → record a sweep, loops back for hands-free automation |

#### Ableton Live Setup
1. Connect Monolit via USB-C
2. In Ableton Preferences → MIDI: enable **Track** and **Remote** for Monolit input
3. Create MIDI tracks and set MIDI From = Monolit for note/CC input
4. For hardware synth control via Monolit TRS out: create a MIDI track, MIDI To = Kenton/hardware, and use Monolit sliders as CC source
5. Clock sync: in Monolit SETTINGS → MIDI → SOURCE, select External to follow Ableton's clock; or use Internal and tap tempo on Monolit


## Synthesizer

### Dreadbox Artemis
**Connection**: Audio via TX-6 channel 6 → Fireface Inputs 5/6; MIDI via Midihub Output A → Kenton Thru 3
**Manual Available**: ARTEMIS-DIGITAL-MANUAL_12_09_2025.txt (895 lines)
**MIDI Channel**: 1 (Omni mode available)

#### Key Features
- True analog mono synthesizer with digital control
- 2 oscillators (VCO1: saw/pulse, VCO2: saw/tri/pulse/sub)
- Resonant low-pass filter (24dB/oct ladder, self-oscillating)
- 3 envelopes (VCF, VCA, Modulation)
- 2 LFOs with multiple waveforms
- White noise generator
- Sample & Hold
- 512 presets (8 banks of 64)
- Arpeggiator with multiple patterns
- MIDI controlled via 5-pin DIN

#### Audio Signal Path
```
Artemis Audio Out → TX-6 Input Channel 6 (+21dB gain) → Fireface Inputs 5/6
```

#### Critical Configuration
- **TX-6 channel 6 gain MUST be set to +21dB** to compensate for Artemis's light output
- Artemis MIDI In receives from Kenton THRU-5 Thru 3 output
- Set to MIDI channel 1 for note control from Ableton

#### MIDI CC Map (Partial - Key Parameters)
- **CC 19**: VCF Cutoff (Filter Frequency)
- **CC 21**: VCF Resonance
- **CC 23**: VCF Envelope Amount
- **CC 24**: VCF Attack
- **CC 25**: VCF Decay
- **CC 26**: VCF Sustain
- **CC 27**: VCF Release
- Additional CCs available for oscillators, LFOs, envelopes, etc.

---
### Haken Audio ContinuumMini
**Connection**: Audio via TX-6 channel 3 → Fireface Inputs 5/6; MIDI control via QuNexus → USB → Haken Editor
**Manual Available**: ContinuumUserGuideOpt.txt (4439 lines)
**Serial Number**: SN002025

#### Key Features
- MPE (MIDI Polyphonic Expression) touch-sensitive playing surface
- 28-note range (MIDI notes 52-79, expandable ±2 octaves via buttons)
- Duo-tactic operation: 2 simultaneous notes on playing surface
- Internal EaganMatrix DSP synthesis engine (8-voice polyphony maximum)
- 3-axis continuous control: X (pitch), Y (timbre/forward-back), Z (pressure/volume)
- 1500+ system presets organized in 15 categories
- 16 user preset slots (stored on device)
- USB powered and USB MIDI class compliant
- Stereo analog audio output (TRS 3.5mm jack)
- Built-in recirculator (reverb/delay effects)

#### Playing Surface
- Continuous pressure-sensitive surface (not discrete keys)
- Left-to-right: Pitch control with vibrato capability
- Front-to-back (Y): Timbre/filter control (most responsive in middle 2/3 of surface)
- Pressure (Z): Volume/dynamics
- Duo-tactic: Can play 2 notes simultaneously (monophonic to duo-phonic depending on preset)
- Internal polyphony: up to 8 voices via sustain/sostenuto layering

#### Audio Signal Path
```
ContinuumMini Analog Out → TX-6 Input Channel 3 (adjust gain) → Fireface Inputs 5/6
```

#### MIDI Control Path
```
QuNexus USB → Computer → Haken Editor:
  - Ext 1 Music Data: QuNexus Control Surface (keyboard notes)
  - Ext 2 Music Data: QuNexus CV (PLUS 3 pedal converted to CCs)
  → ContinuumMini USB → EaganMatrix DSP
```

#### Critical Configuration
- **TX-6 channel 3 gain**: Adjust to taste (ContinuumMini output level varies by preset)
- **QuNexus Preset B**: Must be active for ContinuumMini control
  - CV1 (PLUS 3 slider) → CC#12 (i parameter)
  - CV2 (PLUS 3 sustain button) → CC#66 (Sostenuto)
- **Haken Editor MIDI Settings**:
  - Sources → Ext 1 Music Data: QuNexus Control Surface
  - Sources → Ext 2 Music Data: QuNexus CV
  - **Limited to 2 external music data sources maximum**
- **Recirculator**: Set to "Enabled" in MIDI and Global Settings (Cogwheel menu)

#### Performance CC Map (Channel 1 - Absolute Control)

**Sound Parameters (vary by preset):**
- **CC#12** - i (primary sound parameter - often filter cutoff/timbre)
- **CC#13** - ii (secondary parameter - often resonance/modulation depth)
- **CC#14** - iii (tertiary parameter)
- **CC#15** - iv (quaternary parameter)
- **CC#16** - Gen1 (general control 1, also release time in some presets)
- **CC#17** - Gen2 (general control 2)

**Recirculator (Reverb) Controls:**
- **CC#20** - R1 (recirculator parameter 1)
- **CC#21** - R2 (recirculator parameter 2)
- **CC#22** - R3 (recirculator parameter 3)
- **CC#23** - R4 (recirculator parameter 4)
- **CC#24** - Recirculator Mix (0=100% dry, 127=100% recirculator)

**Level/Gain:**
- **CC#18** - Gain (output level of internal sound)
- **CC#19** - AES Input Level

**Pitch/Tuning:**
- **CC#10** - Fine Tune (64=normal, 63=one cent flat, 65=one cent sharp)
- **CC#25** - Round Rate (pitch rounding speed)
- **CC#28** - Round Initial (round to nearest half-step on note start)
- **CC#65** - Equal (0=ignore rounding, 64=use preset rounding, 127=force equal temperament)

**Sustain/Sostenuto:**
- **CC#64** - Sustain (holds all notes)
- **CC#66** - Sostenuto 1 (holds only notes playing when engaged)
- **CC#69** - Sostenuto 2 (second independent sostenuto)

**Other:**
- **CC#8** - Octave Shift (48=down, 60=none, 72=up)
- **CC#9** - Mono Switch (enables single-note lines when polyphony >1)
- **CC#31** - Advance (next preset - 127=full advance, 64=half advance)

#### QuNexus Preset B Configuration

**Purpose**: Control ContinuumMini via QuNexus keys and PLUS 3 pedal

**To Switch to Preset B:**
1. Tap QuNexus SHIFT/PRESET button
2. Press "B" button (VELO B - second button from left)
3. LEDs swipe to confirm

**To Save Settings to Preset B:**
1. Configure settings in QuNexus Editor
2. Tap SHIFT/PRESET button
3. Hold "B" button for 3+ seconds
4. LEDs swipe to confirm

**CV Mapping (QuNexus Editor):**
- **CV Input 1** (PLUS 3 expression slider) → **MIDI CC#12** (i parameter)
  - Real-time control of primary sound parameter (varies per preset)
  - Often controls filter cutoff, timbre, or other expressive parameter
- **CV Input 2** (PLUS 3 sustain button) → **MIDI CC#66** (Sostenuto)
  - Momentary or latched (toggle switch on PLUS 3)
  - Holds only notes that are playing when button is pressed
  - Allows layering sustained notes with new notes on top

**Important**: QuNexus CV outputs (CC#112/113 by default) are converted to these CCs in the QuNexus Editor settings

#### Haken Editor (EaganMatrix) Configuration

**MIDI and Global Settings (Cogwheel menu):**

**Sources (Input Port):**
- Instrument: ContinuumMini SN002025 (the device itself)
- Ext 1 Music Data: QuNexus Control Surface
- Ext 2 Music Data: QuNexus CV
- Kyma: (specialized, usually unconnected)

**Destinations (Output Port):**
- Instrument: ContinuumMini SN002025
- Ext 1 Music Data: (usually unconnected)
- Ext 2 Music Data: (usually unconnected)

**Global Settings:**
- Midi and CVC: Replace (default) or Preserve
- Pedals: Replace (default) or Preserve
- Surface Processing: Replace (default) or Preserve
- Recirculator: **Enabled** (required for reverb to work)
- Fine Tune: 64 (centered, no pitch offset)
- Quantizer: 64 (centered)
- AES: In: None, Out: 96 kHz
- Menus: Normal
- Editor Theme: Dark (or Light)

**Important Settings:**
- **Recirculator must be "Enabled"** for reverb/recirculator to function
- **Fine Tune** should be centered (64) unless intentional detuning desired
- **MIDI Encoding**: Can be set to "Preserve" to maintain pitch bend/Y/Z settings across presets
- **Surface Processing**: Can be set to "Preserve" to maintain rounding settings across presets

#### Preset Categories (System Presets)

The ContinuumMini includes 1500+ presets organized in 15 categories:
- **001-099**: User Presets (16 slots, user-programmable)
- **101-199**: Multis (layered sounds)
- **201-299**: Synth Leads
- **301-399**: Synth Pads
- **401-499**: Synth Keys
- **501-599**: Acoustic
- **601-699**: Organs
- **701-799**: Strings
- **801-899**: Brass
- **901-999**: Winds
- **1001-1099**: Vocals
- **1101-1199**: Percussion
- **1201-1299**: MIDI/CVC Control (no internal sound - for controlling external gear)
- **1301-1399**: Specialty Sounds
- **1401-1499**: Drums
- **1501-1599**: Utilities (empty templates, calibration, etc.)

**Preset Selection:**
- Via Haken Editor: Category dropdown + System Preset dropdown
- Via hardware: Oct +/- buttons (press both together to enter menu mode)
- Via MIDI: Program Change (PC) on Channel 16

**Storing User Presets:**
- Slots 001-016 are user-programmable
- Load a system preset, modify, then save to user slot via Haken Editor or hardware
- Hardware: Press Oct + and Preset + simultaneously, scroll to desired slot

#### Playing Modes

**1. Direct Touch Surface Playing:**
- Most expressive and immediate
- Full MPE control: pitch, timbre, pressure
- Duo-tactic: 2 simultaneous notes maximum on surface
- Glissando and vibrato via left-right finger motion
- Timbre changes via front-back motion (most effective in middle 2/3 of surface)

**2. QuNexus Keyboard Control (via Haken Editor):**
- Standard MIDI keyboard playing
- MPE-capable via QuNexus's pressure/tilt sensors
- Can send up to 8 voices (based on EaganMatrix polyphony setting)
- Combines with PLUS 3 expression (CC#12) and sostenuto (CC#66)

**3. Hybrid Mode:**
- Both ContinuumMini surface AND QuNexus can play simultaneously
- ContinuumMini surface takes priority for tactile/expressive playing
- QuNexus provides additional note triggers and PLUS 3 expression control
- Useful for layering sustained drones (via sostenuto) with melodic lines

#### EaganMatrix DSP Engine

**Polyphony:**
- Base Polyphony: 1, 2, 4, or 8 voices
- Expanded Polyphony: Adds sustain layering (Base 1+, 2+, 4+)
- **Duo-tactic surface** limits to 2 simultaneous playing notes
- **Sostenuto/sustain** can layer up to 8 total voices internally

**MPE Configuration:**
- Y/Z can be set to MPE, MPE+, or specific CCs
- MPE mode: Y=Timbre (CC74), Z=Channel Pressure
- MPE+ mode: Y=Timbre (CC74), Z=Polyphonic Pressure
- Pitch Bend range: 12, 24, 36, 48, or 96 semitones (96 recommended for wide expressive range)

**Note Priority (for external MIDI control):**
- Oldest: Cycles through MIDI channels (avoid for duo-phonic playing)
- **Lowest**: Recommended for duo-phonic - uses lowest 2 channels (most predictable)
- Highest: Uses highest 2 channels
- Recent: Last 2 notes played

**Note Process:**
- Static: All MIDI note velocities set to 127 (ignores velocity, uses Z for dynamics)
- Dynamic: Respects MIDI velocity (useful for DAW recording/playback)

#### Common Workflows

**Sostenuto Layering (Drone + Melody):**
1. Switch QuNexus to Preset B
2. Load ContinuumMini preset with Base Polyphony 2+ or higher
3. Play and hold a note on ContinuumMini surface or QuNexus
4. Press PLUS 3 sustain button (CC#66) - note freezes
5. Release your finger - note continues
6. Play new notes on top - they don't sustain
7. Press sustain button again to release frozen note
8. Toggle switch on PLUS 3: changes between momentary and latched mode

**Expression Control While Playing:**
1. Switch QuNexus to Preset B
2. Play notes on ContinuumMini surface or QuNexus
3. Move PLUS 3 slider - controls CC#12 (i parameter)
4. Effect varies by preset:
   - Filter presets: controls cutoff
   - Effect presets: controls effect amount
   - Timbre presets: controls timbral character

**Recording MIDI in Ableton:**
1. ContinuumMini outputs MPE MIDI on channels 2-9 (MPE mode) or 1-8 (CC mode)
2. Create MIDI track in Ableton
3. Set input to "ContinuumMini SN002025"
4. Record - captures pitch bend, pressure, timbre CCs
5. Playback through ContinuumMini or other MPE synth

**Mixing ContinuumMini and QuNexus Performance:**
1. ContinuumMini surface: Expressive solos, glissandi, vibrato
2. QuNexus keys: Rhythmic patterns, chord progressions, bass lines
3. PLUS 3 sostenuto: Build up layers and drones
4. PLUS 3 expression: Real-time filter sweeps and timbral changes
5. Both can play simultaneously for complex layered performances

#### Power & Connectivity
- **Power**: USB bus-powered (5V via USB connection)
- **Audio Output**: 3.5mm TRS stereo jack (unbalanced)
  - **CRITICAL**: Never use mono TS cable - can damage analog circuitry
  - Always use TRS (stereo) cable
- **MIDI**: USB MIDI class compliant (no drivers needed)
- **Headphone Output**: None (use TX-6 or external headphone amp)

#### Front Panel Controls
- **Oct +/-**: Transpose up/down by octaves (press both together for menu mode)
- **Preset +/-**: Navigate through presets
- **Seven-Segment Display**: Shows preset number, menu options, error codes
- **Octave Indicators**: Dots show current octave transposition

#### Troubleshooting

**No sound from ContinuumMini:**
- Check TX-6 channel 3 connection and gain
- Verify preset is not MIDI/CVC control type (1201-1299 range)
- Check audio output cable is TRS (stereo), not TS (mono)
- Verify "Dim" setting in menu (Menu option 2) - set to 0 for full volume
- Check Recirculator is "Enabled" in Global Settings if preset uses reverb

**Expression slider (PLUS 3) not working:**
- Verify QuNexus is on Preset B (tap SHIFT/PRESET, press B)
- Check PLUS 3 → QuNexus CV 1-2 connection
- Verify CC#12 is actually mapped in current EaganMatrix preset
- Try different preset - some presets have limited CC#12 response

**Sostenuto not working:**
- Switch to QuNexus Preset B
- Verify CV2 → CC#66 mapping in QuNexus Editor
- Check Haken Editor: Ext 2 Music Data = QuNexus CV
- Ensure polyphony is Base 2+ or higher (Base 1 won't sustain)
- Play and hold note before pressing sustain button

**QuNexus keys not playing ContinuumMini:**
- Check Haken Editor MIDI and Global Settings
- Verify Ext 1 Music Data = QuNexus Control Surface
- Check blue triangle indicators are blinking (MIDI active)
- Verify Y/Z set to MPE or MPE+ (or specific CCs)
- Check USB connection to both QuNexus and ContinuumMini

**Duo-phonic playing issues:**
- Some presets sound different with 2 fingers vs 1 (pressure dynamics)
- Reduce polyphony to Base 1 for pure monophonic (no overlap)
- Avoid overlapping fingers when articulating notes
- Best duo-phonic use: drone in one hand, melody in other

**ContinuumMini seems out of tune:**
- Check Fine Tune in MIDI and Global Settings (should be 64)
- Verify Rounding settings (some presets use pitch tables)
- Try CC#65 = 0 to disable rounding temporarily
- Surface tracking shown in Haken Editor Surface Display

**Haken Editor won't connect:**
- Exit DAW if it's accessing ContinuumMini USB MIDI
- Close any other running instances of Haken Editor
- Verify USB connection
- Check Sources/Destinations show "ContinuumMini SN002025"
- Restart Haken Editor

**Cannot add Faderfox EC4 control:**
- ContinuumMini limited to 2 external music data sources (Ext 1 & 2)
- Currently using QuNexus Control Surface (Ext 1) and QuNexus CV (Ext 2)
- No additional external MIDI sources can be added via Haken Editor
- Alternative: Route EC4 through Ableton MIDI effects to ContinuumMini USB output

#### Firmware & Software
- **ContinuumMini Firmware**: Version 9.0+ (check via Haken Editor)
- **Haken Editor**: Latest version from HakenAudio.com
- **Firmware Updates**: Via Haken Editor (Load Firmware function)

#### Online Resources
- User Manual: ContinuumUserGuideOpt.txt (included, 4439 lines)
- HakenAudio.com: Official site, firmware, editor downloads
- Section 16 of User Manual: Specific to ContinuumMini (vs full-size Continuum)

---


## Effects Processors

### Chase Bliss Audio Clean
**Connection**: Audio via Fireface Outputs 3/4 → Clean In; Clean Out → ZOIA In; MIDI via Midihub Output B
**Manual Available**: Clean_Manual_Pedal_Chase_Bliss.txt (726 lines), Clean_Midi_Manual_Pedal_Chase_Bliss.txt
**MIDI Channel**: 2 (default, configurable)

#### Key Features
- True analog VCA-based compressor
- Two-stage compression (compressor + limiter)
- Dynamic EQ with 3 modes (Shifty, Manual, Modulated)
- Adaptive envelope follower
- Physical modeling (wobble/sag effects)
- Emphasis filtering (cassette-style noise reduction)
- Swell effects (dynamic and manual modes)
- "Dusty" mode (limiter as overdrive/distortion)
- True stereo throughout
- 2 onboard presets + 122 MIDI presets

#### Controls
**Main Knobs:**
- Sensitivity: Dynamic threshold (becomes Ramp Speed when ramping engaged)
- Dynamics: Compression amount (compression → limiting → sag)
- Attack: 0.5ms to 300ms
- Release: Fast (50ms), User (adjustable), Slow (1.5s)
- Physics: Wobble amount (left=subtle, middle=normal, right=twitchy)
- EQ: One-knob EQ (3 modes via toggle)
- Mode: EQ mode select (Shifty/Manual/Modulated)
- Wet: Processed signal level
- Dry: Unprocessed signal level

**Footswitches:**
- Bypass: Tap on/off, Hold for max sag (LED turns green)
- Presets: Left/Middle/Right (left=preset 2, middle=live, right=preset 1)
- AUX: Swell engage (momentary by default, latchable via dip switch)

#### Dip Switches (Top Panel)
**Left Bank (Ramping/Expression):**
- 61: Dynamics ramping
- 62: Attack ramping
- 63: EQ ramping
- 64: Dry ramping
- 65: Wet ramping
- 66: Bounce on/off
- 67: Sweep direction (B=bottom to top, T=top to bottom)
- 68: Polarity (F=forward, R=reverse)

**Right Bank (Features):**
- 71: MISO (Mono In Stereo Out)
- 72: Spread (stereo processing)
- 73: Latch (footswitch latching)
- 74: Sidechain (external trigger)
- 75: Noise Gate
- 76: Motion (modulated compression depth)
- 77: Swell AUX (manual swell mode)
- 78: Dusty (limiter overdrive mode)

#### MIDI Implementation
**Setting MIDI Channel:**
- Hold both footswitches during power-up
- Send any MIDI message (PC or CC) on desired channel
- Clean sets itself to that channel

**MIDI CC Map (Key Parameters):**
- **CC 14**: Dynamics
- **CC 15**: Sensitivity
- **CC 16**: Wet
- **CC 17**: Attack
- **CC 18**: EQ
- **CC 19**: Dry
- **CC 20**: Ramp Speed
- **CC 21**: Release (0-1=Fast, 2=User, 3+=Slow)
- **CC 22**: Mode (0-1=Shifty, 2=Manual, 3+=Modulated)
- **CC 23**: Physics (0-1=Wobbly, 2=Off, 3+=Twitchy)
- **CC 61-68**: Left bank dip switches (0=off, 1+=on)
- **CC 71-78**: Right bank dip switches (0=off, 1+=on)
- **CC 102**: Bypass footswitch (0=off, 1+=on)
- **CC 103/105**: Swell footswitch
- **CC 106**: Dynamics max hold

**MIDI Presets:**
- **PC 0**: Live mode (current knob positions)
- **PC 1**: Preset slot 1 (right footswitch position)
- **PC 2**: Preset slot 2 (left footswitch position)
- **PC 3-122**: Additional MIDI-only presets
- Save preset: Send PC while holding both footswitches

#### Power Requirements
- 9V DC center negative
- ~300mA minimum
- Standard Boss-style power supply

---

### Empress Effects ZOIA
**Connection**: Audio via Clean Out → ZOIA In; ZOIA Out → Microcosm In; MIDI via Midihub Output A → Kenton Thru 2
**Manual Available**: ZOIA_Manual1_13.txt (857 lines)

#### Key Features
- Modular multi-effects processor (Eurorack in a pedal)
- 64+ module types (oscillators, filters, effects, utilities, sequencers)
- Visual patch creation on grid interface
- 64 patch slots (more via SD card)
- True stereo processing
- CV input for modulation
- MIDI controllable via 5-pin DIN

#### Current Role
- Second in effects chain after Clean
- Flexible digital processing of compressed signal
- Preset changes via MIDI from Ableton
- Can create complex modulation and effects chains

#### Power Requirements
- 9V DC center negative
- 500mA required

---

### Hologram Electronics Microcosm
**Connection**: Audio via ZOIA Out → Microcosm In; Microcosm Out → Fireface Inputs 7/8; MIDI via Faderfox EC4 (Setup 1, Group 1)
**Manual Available**: Microcosm_manual_web_080723.txt (802 lines)
**MIDI Channel**: 1 (default)

#### Key Features
- Granular sampling and looping effects processor
- 44 effect algorithms across 11 categories
- Real-time audio manipulation and time-stretching
- Built-in reverb
- 16 user preset slots
- True stereo throughout
- MIDI controllable for presets and parameters

#### Current Role
- Final stage in effects chain
- Adds granular texture, delays, and ambient processing
- Built-in reverb provides final spatial character
- Return to Fireface completes the send/return loop
- **MIDI Control**: Full parameter control via Faderfox EC4 (Setup 1, Group 1) - see EC4 section for complete mapping

#### Power Requirements
- 9V DC center negative
- 400mA minimum (isolated power recommended)

---

## Audio Mixer & Utilities

### Teenage Engineering TX-6
**Connection**: Main Out → Fireface Inputs 5/6; Artemis on Channel 6
**Manual Available**: TX_6-guide-teenage-engineering.txt (137 lines)

#### Key Features
- 6-channel portable mixer
- Built-in synthesizer
- Digital effects per channel
- USB audio interface (backup option)
- Battery powered (rechargeable)
- Bluetooth audio input
- Independent channel gain control

#### Current Configuration
- **Channel 6**: Artemis input with +21dB gain compensation
- Main output feeds Fireface Inputs 5/6
- Other channels available for additional gear

---

### PreSonus HP4
**Connection**: Input from Fireface Outputs 5/6; Multiple headphone outputs
**Manual Available**: OM_2777400203_HP4_EN.txt (404 lines)

#### Key Features
- 4-channel headphone distribution amplifier
- Independent volume control per channel
- Stereo input
- High-power amplification for multiple headphones
- Passive design (no power required for TRS input mode)

#### Current Configuration
- Receives "Mirror of Main Out" signal from Fireface Outputs 5/6
- Provides identical monitoring to main speakers for headphones
- Configured in TotalMix FX for consistent monitoring experience

---

### Teenage Engineering OB-4
**Connection**: Input from Fireface Outputs 1/2; Volume via ortho remote (Bluetooth)
**Reference**: https://teenage.engineering/guides/ob-4

#### Key Features
- Magic radio speaker with FM/web radio
- Line input for external audio
- Bluetooth audio playback
- Disk mode for audio recording
- ortho remote for wireless volume control

#### Current Configuration
- Main monitor output from Fireface
- Volume controlled wirelessly via ortho Bluetooth remote
- Provides high-quality monitoring for studio work

---

## MIDI Routing Details

### Kenton THRU-5
**Connection**: Input from Midihub Output A (rightmost); Thru 2 to ZOIA, Thru 3 to Artemis
**Role**: MIDI splitter (1 input → 5 thru outputs)

#### Current Connections
- Input: Midihub MIDI Output A
- Thru 2: ZOIA MIDI In
- Thru 3: Artemis MIDI In
- Thru 1, 4, 5: Available for expansion

#### Important Notes
- Requires external 9V power supply
- All outputs are MIDI Thru (copies input signal)
- No MIDI merging or processing

---

## Complete Signal Flow Diagrams

### MIDI Signal Flow
```
┌─────────────────────────────────────────────────┐
│              Ableton Live 12                     │
│  ┌──────────────────────────────────────────┐   │
│  │ MIDI Tracks sending to Midihub USB ports │   │
│  └──────────────────────────────────────────┘   │
└───────────────┬────────────┬────────────────────┘
                │            │
                ↓ USB        ↓ USB
         ┌──────────┐   ┌─────────────┐
         │ Midihub  │   │  Faderfox   │
         │          │   │     EC4     │
         │ USB A,B  │   │             │
         │    ↓     │   └──────┬──────┘
         │ Process  │          │
         │    ↓     │          │ USB (future direct control)
         │ DIN Out  │          ↓
         └──┬───┬───┘   ┌──────────┐
            │   │       │ Midihub  │
            │   │       │ (process)│
            │   │       └────┬─────┘
  Output A  │   │ Output B   │
  (right)   │   │ (2nd right)│
            ↓   ↓            ↓
      ┌──────┐ ┌────────────┐
      │Kenton│ │Chase Bliss │
      │THRU-5│ │   Clean    │
      └┬───┬─┘ └────────────┘
       │   │
  Thru2│   │Thru3
       │   │
       ↓   ↓
    ┌────┐ ┌─────────┐
    │ZOIA│ │ Artemis │
    └────┘ └─────────┘
```

### Audio Signal Flow
```
┌─────────────────────────────────────────────────┐
│          Ableton Live 12 (DAW)                   │
│                                                  │
│  External Instrument Track "Pedals":            │
│  Audio To: Fireface 3/4 (Effects Send)         │
│  Audio From: Fireface 7/8 (Effects Return)     │
└────────────┬───────────────────┬────────────────┘
             │                   │
             ↓                   ↑
    ┌────────────────────────────────────┐
    │      RME Fireface UCX II           │
    │                                    │
    │  Out 3/4 ───→  In 7/8 ←───        │
    │      │            ↑                │
    │  Out 1/2 ───→ OB-4 (monitors)     │
    │  Out 5/6 ───→ HP4 (headphones)    │
    │  In 5/6  ←─── TX-6                │
    └──────┬───────────┬────────────────┘
           │           │
           ↓           ↑
      ┌────────┐  ┌─────────┐
      │ Clean  │  │  TX-6   │
      │Compress│  │ Channel │
      └───┬────┘  │    6    │
          │       └────┬────┘
          ↓            ↑
      ┌────────┐  ┌─────────┐
      │  ZOIA  │  │ Artemis │
      │ Effects│  │  Synth  │
      └───┬────┘  └─────────┘
          │
          ↓
    ┌───────────┐
    │ Microcosm │
    │ Granular  │
    └─────┬─────┘
          │
          ↑
    (back to Fireface In 7/8)
```

### USB Controller Connections
```
Computer USB Hub
      │
      ├───→ QuNexus (MIDI keyboard + MPE)
      ├───→ Xkey 37 (Extended keyboard)
      ├───→ ROTO-Control (DAW control)
      ├───→ Faderfox EC4 (Universal controller)
      ├───→ Fireface UCX II (Audio interface)
      └───→ Midihub (MIDI processor/router)
```

---

## Key Workflows & Notes

### TotalMix FX Routing
- The Fireface UCX II's TotalMix FX is extensively used for routing and monitoring
- Custom submixes can be created for different monitoring scenarios
- Effects chain (Clean → ZOIA → Microcosm) is pre-configured as a send/return on outputs 3/4 and inputs 7/8
- **Headphone Monitoring**: Outputs 5/6 are configured as "Mirror of Main Out" for identical monitoring to main speakers
- **Control Room**: Main Out assigned to Analog 1/2, Phones to front panel headphone jack (7/8)
- **Ableton Routing**: External Instrument device on "Pedals" track handles effects send/return (Out 3/4, In 7/8)

### MIDI Control Strategy
- **Midihub**: Central MIDI routing and processing hub with standalone operation
- **QuNexus**: Primary expressive controller with MPE, pressure, and tilt
- **Xkey 37**: Extended range keyboard for traditional playing
- **ROTO-Control**: DAW mixing, plugin control, and automation
- **Faderfox EC4**: Universal controller for both Ableton (Setup 15) and direct hardware control (custom setups)
- **PLUS 3**: Desktop expression and sustain without foot pedals

### Ableton Live Integration
- ROTO-Control provides motorized, bidirectional control
- Mix mode: Track names and colors auto-sync from Live
- Plugin mode: One-touch parameter learning with label capture
- All MIDI controllers properly configured in Live's Control Surface settings
- **Effects Routing**: External Instrument device used for hardware effects integration
- **Faderfox EC4**: Can use "Faderfox Universal 2" script (Setup 15) for comprehensive Ableton control, or custom setups for direct hardware control
- **Midihub USB MIDI**: Multiple USB ports (A, B, C, D) available for routing to different hardware

### Midihub Usage Patterns
**Real-time Control:**
- EC4 → Midihub → Hardware (direct, low-latency control)
- Transform/Remap pipes for CC scaling and mapping

**Ableton Automation:**
- Ableton → Midihub → Hardware (automated parameter changes)
- Multiple USB ports allow separate routing for different devices

**Advanced Processing:**
- CC LFO: Automated modulation of hardware parameters
- Randomizer: Controlled randomness for generative music
- Dispatcher: Conditional routing based on MIDI data

### Effects Chain Philosophy
- **Clean** (first): Analog compression and dynamics control sets consistent signal levels for downstream processing. Compression tames peaks before they hit granular processors. Can use "Dusty" mode for analog character/saturation.
- **ZOIA** (second): Modular digital effects processing. Receives dynamically-controlled signal from Clean for predictable behavior. Flexible patching for any effect type.
- **Microcosm** (third): Granular sampling, delays, and ambient processing. Works best as final "vibe" layer. Built-in reverb provides final spatial character without being re-processed.
- All three pedals are true stereo throughout
- Chain order chosen for: optimal gain staging, noise minimization (analog first), and creative flexibility
- Individual pedals can be bypassed to isolate effects

### Artemis Configuration
- **Critical**: TX-6 channel 6 gain set to +21dB to compensate for Artemis's inherently light output
- MIDI controlled from Ableton via Midihub → Kenton splitter
- 512 presets available for recall
- Set to MIDI channel 1 for note playback
- VCF cutoff (CC 19) and resonance (CC 21) are primary real-time control targets

### Chase Bliss Clean Configuration
- **MIDI Channel**: 2 (default)
- **MIDI Connection**: Requires Type A TRS MIDI adapter (5-pin DIN to 1/4" TRS)
- **Primary CC Controls**: Dynamics (14), Attack (17), Release (21), EQ (18), Wet (16), Dry (19)
- **Presets**: 2 footswitch presets + 122 MIDI presets
- **Hidden Options**: Accessible via hidden knob functions (hold both footswitches)

### Storage & Backup
- ROTO setups can be backed up via Roto-Setup App
- QuNexus has 4 preset slots accessible on hardware
- Artemis has 512 presets (8 banks of 64)
- ZOIA patches can be backed up and shared via patchstorage.com
- Microcosm has 16 user preset slots for saving settings and loops
- Midihub presets can be exported/imported via Editor (Device → Export/Import Everything)
- EC4 setups can be backed up via SysEx dump (Setup Mode → Send/Receive)

---

## Firmware & Software Versions

**Current Setup as of Documentation:**
- Fireface UCX II: Latest firmware via TotalMix FX
- Midihub: Firmware 1.15+ recommended
- QuNexus: Check via QuNexus Editor
- ROTO-Control: v1.1.4 (update via Roto-Setup App)
- Faderfox EC4: Firmware 2.00 (latest)
- Artemis: Check via USB connection
- ContinuumMini: Firmware 9.0+ (check/update via Haken Editor)
- ZOIA: v1.13 (update via website)
- Microcosm: Check via MIDI firmware update procedure
- Ableton Live: Version 12

---

## Expansion Capabilities

### Available I/O
**Fireface UCX II:**
- 2 unused rear line inputs (3-4)
- ADAT (8 channels optical I/O)
- AES/EBU and SPDIF digital I/O
- Word clock I/O for external sync
- DURec port (USB recording or ARC USB remote)

**Midihub:**
- 2 unused MIDI inputs (B, C, D)
- 2 unused MIDI outputs (C, D)
- 3 unused USB input/output pairs (B, C, D)
- 8 virtual input/output pairs for internal routing

**TX-6:**
- Additional input channels (currently Artemis on ch6, ContinuumMini on ch3, others available)

**Kenton THRU-5:**
- 3 unused MIDI thru outputs (1, 4, 5) — one can be used for Monolit TRS MIDI out for hardware sequencing/control

### Potential Additions
- Additional synths via Midihub or Kenton MIDI outs
- External effects via Fireface line inputs
- ADAT-connected preamps or converters for 8 more channels
- ARC USB remote for Fireface control
- More MIDI controllers via Midihub processing

---

## Troubleshooting Notes

### Common Issues & Solutions

**Artemis too quiet:**
- Ensure TX-6 channel 6 gain is set to +21dB

**MIDI not reaching synths:**
- Check Midihub is powered and connected via USB
- Verify Midihub pipelines are configured and **stored** (click "Store" in Editor)
- Check Midihub MIDI Monitor to see data flow
- Verify correct output port connections (remember: A is rightmost, not leftmost)
- Confirm MIDI channels match between Ableton tracks and device settings
- For devices via Kenton: ensure Kenton THRU-5 is powered

**Effects loop not working:**
- Verify TotalMix FX routing for outputs 3/4 and inputs 7/8
- Check cables and pedal power supplies (all three pedals require 9V DC center negative)
- Confirm Clean, ZOIA, and Microcosm are all set to true stereo operation
- In Ableton, check External Instrument device on Pedals track: Audio To = 3/4, Audio From = 7/8
- Verify signal flow: Fireface 3/4 → Clean input → Clean output → ZOIA input → ZOIA output → Microcosm input → Microcosm output → Fireface 7/8

**Not hearing effects in headphones:**
- Check TotalMix FX: Analog 5/6 output should have "Mirror of Main Out" enabled
- Right-click on Analog 5/6 hardware output channel and select "Mirror of Main Out"
- Verify HP4 power and volume controls
- Check headphone cables

**Clean pedal not responding:**
- Tap left footswitch to engage (red LED should light up)
- Adjust SENSITIVITY knob while playing to see LED brightness change
- Hold left footswitch briefly to activate max sag mode (LED turns green)
- Check 9V power supply (300mA minimum)
- For MIDI control: Verify MIDI channel is set correctly (default is 2)
- Check Midihub Output B is connected to Clean MIDI In
- Ensure Type A TRS MIDI adapter is being used

**Microcosm effects not heard:**
- Tap middle footswitch to engage/bypass (amber indicator lights show active preset)
- Turn MIX knob clockwise (2-3 o'clock for mostly wet signal)
- Increase ACTIVITY and REPEATS knobs (noon or higher)
- Select obvious effect like TUNNEL or HAZE using Preset Selector
- Check 9V power supply (400mA minimum, isolated recommended)

**ROTO not controlling Ableton:**
- Ensure "ROTO CONTROL" is selected as Control Surface in Live preferences
- Check Track Sync and Remote boxes are ticked for Input and Output
- Verify USB connection

**QuNexus expression not responding:**
- Confirm PLUS 3 is properly connected to CV inputs 1-2
- Check QuNexus settings for expression pedal input configuration
- For Artemis control: Verify QuNexus Preset A is active
- For ContinuumMini control: Verify QuNexus Preset B is active

**ContinuumMini no sound:**
- Check TX-6 channel 3 connection and gain level
- Verify preset is not MIDI/CVC control type (presets 1201-1299)
- Ensure audio cable is TRS (stereo), not TS (mono)
- Check "Dim" setting (Menu option 2) - set to 0 for full volume
- Verify Recirculator is "Enabled" in MIDI and Global Settings

**ContinuumMini expression (PLUS 3 slider) not working:**
- Switch QuNexus to Preset B (tap SHIFT/PRESET, press "B")
- Verify PLUS 3 → QuNexus CV 1-2 connection
- Check QuNexus Editor: CV1 → CC#12
- Try different EaganMatrix preset - CC#12 mapping varies per preset

**Sostenuto not working on ContinuumMini:**
- Switch QuNexus to Preset B
- Verify QuNexus Editor: CV2 → CC#66
- Check Haken Editor: Ext 2 Music Data = QuNexus CV
- Ensure preset polyphony is Base 2+ or higher (not Base 1)
- Hold note before pressing sustain button

**QuNexus not playing ContinuumMini:**
- Check Haken Editor MIDI and Global Settings
- Verify Ext 1 Music Data = QuNexus Control Surface
- Check blue triangle indicators are blinking (MIDI active)
- Verify Y/Z set to MPE or MPE+
- Check USB connections to both devices

**Cannot switch QuNexus presets:**
- Tap SHIFT/PRESET button (don't hold)
- Then press A, B, C, or D (not hold - unless saving)
- LEDs will swipe to confirm
- To save: Hold A/B/C/D for 3+ seconds

**CM-15 microphone not working:**
- Verify 48V phantom power is enabled on Fireface input 1
- Check mini XLR to XLR cable connection
- Ensure microphone battery is charged if using standalone
- Never connect 3.5mm output to phantom power source
- Check Fireface input gain settings in TotalMix FX

**OB-4 volume not responding to ortho remote:**
- Verify Bluetooth pairing between ortho remote and OB-4
- Check OB-4 is in correct input mode
- Ensure orthoplay app is configured if needed

**Midihub not routing MIDI:**
- Verify USB connection to computer
- Check pipelines are configured in Midihub Editor
- **Critical**: Click "Store" button in Editor to save pipelines to flash memory
- Changes in Editor are RAM-only until stored
- Use MIDI Monitor in Editor to verify data flow
- Check which USB Input port Ableton is sending to (A, B, C, or D)
- Verify physical port connections (Output A = rightmost, not leftmost)

**EC4 not controlling hardware:**
- Verify encoder is configured with correct CC number and MIDI channel
- In Edit Mode, check Ctrl, Ch, Numb, and Type settings
- Ensure MIDI routing: EC4 → Ableton → Midihub → Hardware (or direct if configured)
- Create MIDI track in Ableton to route EC4 to Midihub USB port
- Check Midihub MIDI Monitor to see if CCs are reaching the device
- Exit Edit Mode properly (FUNC + Encoder 8) to save settings

**Monolit not appearing in Ableton:**
- Verify USB-C cable is data-capable (not charge-only)
- In Ableton Preferences → MIDI: confirm Monolit appears and Track/Remote are enabled
- Check Monolit display is on (device powered)
- Try a different USB port if undetected

**Monolit sliders not sending MIDI:**
- Enter Edit menu → select slider → confirm Mode = CTRL (CC) and CC NUM/Channel are set correctly
- Check Min/Max values are not equal (would send a fixed value)
- Ensure correct bank is selected (hold BANK to verify)
- Check that Monolit is not in Sequencer bank mode when expecting slider CC output

**Monolit TRS output not reaching hardware:**
- Verify TRS cable is Type-A (Monolit uses TRS MIDI Type-A standard)
- Confirm SETTINGS → MIDI → USB TO TRS is enabled
- Check Kenton THRU-5 port connection and power
- Monolit TRS output is for outgoing MIDI only; it cannot receive via TRS

---

## Reference Manual Locations

All equipment manuals are available as text files:
- `MONOLIT_2_0_0.txt` - Lightreft Monolit (v2.0.0)
- `fface_ucx2_e.txt` (6082 lines) - Fireface UCX II
- `TX_6-guide-teenage-engineering.txt` (137 lines) - TX-6
- `ARTEMIS-DIGITAL-MANUAL_12_09_2025.txt` (895 lines) - Artemis
- `ContinuumUserGuideOpt.txt` (4439 lines) - Haken Audio ContinuumMini
- `Clean_Manual_Pedal_Chase_Bliss.txt` (726 lines) - Chase Bliss Clean
- `Clean_Midi_Manual_Pedal_Chase_Bliss.txt` - Chase Bliss Clean MIDI
- `ZOIA_Manual1_13.txt` (857 lines) - Empress ZOIA
- `Microcosm_manual_web_080723.txt` (802 lines) - Hologram Microcosm
- `OM_2777400203_HP4_EN.txt` (404 lines) - PreSonus HP4
- `QuNexus_RED_Manual_V2-1.txt` (1331 lines) - QuNexus
- `Xkey_37-English.txt` - Xkey 37
- `P3_Pedal_manual.txt` (370 lines) - PLUS 3
- `ROTO-UserManual-V1-1-4-April2025.txt` (1030 lines) - ROTO-Control
- `EC4_Manual_V03.txt` (627 lines) - Faderfox EC4

Web-based resources:
- OB-4: https://teenage.engineering/guides/ob-4
- CM-15: https://teenage.engineering/guides/cm-15
- Haken Audio: https://www.hakenaudio.com (ContinuumMini resources, firmware, Haken Editor)
- Midihub Documentation: https://blokas.io/midihub/docs/
- Midihub Editor Download: https://blokas.io/midihub/ (Windows, macOS, Linux)
- Faderfox EC4 Firmware: http://www.faderfox.de/ec4.html
- EC4 Web Editor: https://www.privatepublic.de/faderfox-editor/ec4-v2/ (Firmware 2.x)

---

## Studio Context

**Location**: Richmond, London, UK
**Primary Use**: Music production, synthesis, live performance preparation
**DAW**: Ableton Live 12
**User**: Sozin (CTO at Quadrature Capital)

**Musical Focus**: 
- Electronic music production
- Hardware synthesis exploration
- Expressive MIDI control (MPE via QuNexus and ContinuumMini, polyphonic aftertouch)
- Modular/semi-modular effects processing with granular synthesis
- Desktop workflow (compact, efficient setup)
- Real-time hardware parameter control via Faderfox EC4 and Midihub
- Continuous controller performance (ContinuumMini touch surface, expression pedals)

---

*This documentation created: January 2026*
*Last updated: February 18, 2026 - Added Lightreft Monolit MIDI controller hub with full hardware overview, connection diagram, slider/button modes (CC/Notes/LFO/Motion/Sequencer/Performance), suggested studio use cases, Ableton setup instructions, and troubleshooting. Monolit connects via USB-C to computer and TRS MIDI Type-A to Kenton THRU-5 (available port). Manual reference: MONOLIT_2_0_0.txt.*
*Previous update: February 08, 2026 - Added Haken Audio ContinuumMini with complete EaganMatrix documentation, QuNexus Preset B configuration for ContinuumMini control (PLUS 3 slider → CC#12, sustain button → CC#66 sostenuto), MIDI CC map, playing modes, troubleshooting, and workflow examples. ContinuumMini receives audio via TX-6 channel 3 and MIDI control via QuNexus through Haken Editor (Ext 1: QuNexus keys, Ext 2: QuNexus CV/PLUS 3).*
*Previous update: January 30, 2026 - Added complete Faderfox EC4 "CLEN" setup for Chase Bliss Clean control with full mapping table, preset configuration, and Midihub channel remapping.*
*For future Claude instances: This represents Sozin's complete studio setup with Midihub as the central MIDI router. All signal routing, gain staging, MIDI channels, and configuration details are documented as actually implemented and tested. ContinuumMini is controlled via QuNexus Preset B with PLUS 3 pedal providing expression (CC#12) and sostenuto (CC#66). The Haken Editor is limited to 2 external music data sources (Ext 1 and Ext 2). The Lightreft Monolit is the newest addition — a versatile 8-slider MIDI controller/sequencer hub connecting via USB-C.*
