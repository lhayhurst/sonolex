# Sozin's Home Studio Setup - Complete Reference Guide

## Overview

This is a comprehensive reference for Sozin's home studio in Richmond, London. The studio centers around music production with Ableton Live 12, featuring a sophisticated signal routing system through an RME Fireface UCX II audio interface, Blokas Midihub MIDI processor/router, multiple MIDI controllers with polyphonic expression capabilities, analog synthesis, and motorized DAW control.

## High-Level Signal Flow

### Audio Monitoring Paths
```
Main Monitors: Fireface Outputs 5/6 → PreSonus HP4 Output 1 → OB-4 Speaker (volume via ortho remote)
Headphones: Fireface Outputs 5/6 → PreSonus HP4 → Multiple Headphones
```

### Audio Input Sources
```
Synth Inputs:
  - Artemis → TX-6 Channel 6 (+21dB) → Fireface Inputs 5/6
  - ContinuumMini → TX-6 Channel 3 (adjust gain) → Fireface Inputs 5/6
```

### MIDI Routing (Updated with Midihub + CLOCKstep)
```
Clock Path: Ableton → RME MIDI Out → CLOCKstep:MULTI → cleaned clock → Midihub DIN Input D
  → Midihub Filter (clock/transport only) → Virtual Output A (merge bus)
Note Path: Ableton (arped chords via Midihub USB A)
  → Midihub Filter (notes/CCs only, no clock) → Virtual Output A (merge bus)
Merged Output: Midihub Virtual Input A → DIN Output A → Artemis MIDI IN
Controllers → Computer USB: QuNexus, Xkey 37, ROTO-Control, Faderfox EC4, Monolit, Drop, Xjam
Standalone Instruments → TX-6: Move (audio out), OP-XY (audio out)
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
- Input A: Available (previously Fireface MIDI Out)
- Input D: CLOCKstep:MULTI output (cleaned master clock)

**MIDI Outputs:**
- Output A (rightmost): Artemis MIDI IN (direct)
- Output B: Available
- Output C: Available
- Output D: Available

#### Current Pipeline Configuration

**Pipeline 1: CLOCKstep clock → merge bus**
```
DIN Input D (CLOCKSTEP) → [Filter: pass Clock/Start/Stop/Continue only] → Virtual Output A
```
- Cleaned master clock from CLOCKstep:MULTI
- Filter blocks all non-timing messages (notes, CCs, etc.)

**Pipeline 2: Ableton arped chords → merge bus**
```
USB Input A (ABLETON) → [Filter: block Clock/Start/Stop/Continue] → Virtual Output A
```
- Arpeggiated notes from Ableton (QuNexus → Arp → External Instrument → Midihub USB)
- Filter strips clock to prevent double-clocking (CLOCKstep is sole clock authority)
- Artemis on MIDI channel 1

**Pipeline 3: Merge bus → Artemis**
```
Virtual Input A → DIN Output A (ARTEMIS)
```
- Merges clock and note streams from Pipelines 1 and 2
- Sends combined output directly to Artemis MIDI IN

**Pipeline (Future): EC4 → Artemis**
```
USB Input (EC4) → [Transform/Remap] → Virtual Output A
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
- Inputs 5/6: TX-6 main output (includes Artemis on TX-6 ch6)
- Inputs 3/4, 7/8: Available

**Analog Outputs:**
- Outputs 1/2: Available (no longer used for main monitors)
- Outputs 3/4: Available
- Outputs 5/6: PreSonus HP4 (headphones + OB-4 speaker via HP4 Output 1)

**MIDI:**
- MIDI Out: Midihub Input A (main MIDI routing now handled by Midihub); also used directly for arped notes to Artemis via Drop Merger
- **Note**: The RME MIDI port appears as **"USB MIDI Device"** in Ableton's MIDI preferences (not "Fireface" or "RME")

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
- MIDI output routing to Artemis via Midihub

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
| Standalone sequencing | 1–8 banks → Sequencer mode → internal or Ableton clock sync, output via TRS |
| LFO automation | Sliders → LFO mode → send slow CC sweeps to synth parameters without Ableton automation |
| Motion recording | Slider → Motion mode → record a sweep, loops back for hands-free automation |

#### Ableton Live Setup
1. Connect Monolit via USB-C
2. In Ableton Preferences → MIDI: enable **Track** and **Remote** for Monolit input
3. Create MIDI tracks and set MIDI From = Monolit for note/CC input
4. For hardware synth control via Monolit TRS out: create a MIDI track, MIDI To = Kenton/hardware, and use Monolit sliders as CC source
5. Clock sync: in Monolit SETTINGS → MIDI → SOURCE, select External to follow Ableton's clock; or use Internal and tap tempo on Monolit


### Neuzeit Instruments Drop
**Connection**: USB1 → PC (USB-C)
**Role**: Primary DAW controller (currently DAW Init mode for Ableton Live)
**Manual Available**: Drop_Manual_v1.07.txt

#### Key Features
- 32 push-encoders (8×4) with RGB LED rings (13 LEDs each) + push button LED
- 8 faders (45mm travel) with RGB catch-value LEDs
- 8 mute buttons with tri-color LEDs
- 4×5 button matrix (snapshots, clip launcher, keyboard)
- OLED display with menu encoder
- Snapshot system: 400 snapshots (20 banks × 20), Jump/Drop/Chain modes
- Cycle-based timing (1-32 bars) for performance transitions
- Built-in MIDI CC & NRPN database (Pencil Research)
- Micro SD card for projects/firmware

#### I/O
- USB1-2: USB-C (host/device auto-detect)
- TRS1-4: MIDI In/Out (switch for Type A/B on outputs, inputs accept both)
- CV1-2: Inputs and outputs (0-5V, 12-bit DAC output, 16-bit ADC input)
- Power: 12V DC 1500mA or USB1 (5V 1500mA min)

#### Current Configuration
- **DAW Init mode**: USB1 to computer, all controls mapped with unique CC/Note messages
- Device configured as 'DAW' on USB1 port
- Encoders: CC messages on channel 1
- Push buttons: Note messages on channel 2
- Clip launcher: Note messages on channel 16
- MIDI feedback enabled for bidirectional control with Ableton

#### Ableton Live Setup
- Remote Script installed at: `~/Music/Ableton/User Library/Remote Scripts/Drop`
- Control Surface: Drop selected with Input/Output activated
- Input: Remote + Track + Sync enabled
- Output: Remote + Track + Sync enabled
- Grid Mode available for clip launching in Session View

#### Key Performance Features
- **Jump Mode**: Instant snapshot recall with adjustable fade time
- **Drop Mode**: Schedule snapshot execution at cycle end (for build-to-drop transitions)
- **Chain Mode**: Pre-arranged sequences of snapshots for song arrangements (20 chains, up to 64 snapshots each)
- **Manual Fade**: Potentiometer crossfade between current state and target snapshot
- **PreDrop Priority**: Timing-critical controls (e.g., kick unmute) can fire before the drop

#### MIDI Mappings — Valhalla FutureVerb (Piano)

Drop Project: "FutureVerb Piano"

**Layer A:**

| Type | Group | Position | Function | Color |
|---|---|---|---|---|
| Fader | Mix | Fader 1 | Mix | White |
| Fader | Mix | Fader 2 | Width | White |
| Fader | Echo | Fader 3 | Echo Level | Green |
| Fader | Reverb | Fader 4 | Reverb Level | Blue |
| Fader | Reverb | Fader 5 | Decay | Blue |
| Fader | Reverb | Fader 6 | Size | Blue |
| Fader | EQ | Fader 7 | HighCut | Yellow |
| Fader | EQ | Fader 8 | LowCut | Yellow |
| Knob | Echo | Row 4, Knob 1 | Delay | Green |
| Knob | Echo | Row 4, Knob 2 | Feedback | Green |
| Knob | Echo | Row 4, Knob 3 | Drive | Green |
| Knob | Echo | Row 4, Knob 4 | Spread | Green |
| Knob | Reverb | Row 4, Knob 5 | Echo>Rev | Blue |
| Knob | Reverb | Row 4, Knob 6 | Early/Late | Blue |
| Knob | Reverb | Row 4, Knob 7 | Density | Blue |
| Knob | Mod | Row 4, Knob 8 | Mod Depth | Purple |

**Layer B:**

| Type | Group | Position | Function | Color |
|---|---|---|---|---|
| Knob | Mod | Row 4, Knob 1 | Mod Rate | Purple |
| Knob | Mix | Row 4, Knob 2 | Color | White |

---

### ESI Xjam
**Connection**: USB-C to PC
**Role**: Drum pad controller for finger drumming

#### Key Features
- 16 velocity- and pressure-sensitive pads with triple-color LEDs (green/yellow/red velocity feedback)
- 6 × 360° encoder knobs (3 banks = 18 independent encoders)
- 3 pad banks (48 total pads)
- 48 scene presets with instant recall
- Sustain pedal input (1/4" jack)
- TRS Type A MIDI Out (3.5mm)
- Repeat function with tempo/division/gate/swing control
- Polyphonic aftertouch support

#### I/O
- USB-C: Power and MIDI data
- MIDI Out: TRS Type A (3.5mm jack)
- Foot Switch: 1/4" sustain pedal input

#### Current Configuration
- Connected via USB to computer for Ableton drum input
- Default Preset 2 (GM Channel 10) recommended for standard drum mapping
- Can sync repeat function to Ableton's MIDI clock (external clock mode)

#### Key Factory Presets
- Preset 1: Chromatic notes (C-D#, 3 banks on ch 1/2/3)
- Preset 2: GM Channel 10 drum mapping (MPC layout, 48 pads)
- Presets 5-16: Major scale mappings (all 12 keys)

---

### Endorphin.es PLUS 3
**Connection**: Expression out → QuNexus CV Input 1; Sustain out → QuNexus CV Input 2
**Role**: Desktop expression fader and sustain/drone control for QuNexus
**Manual Available**: P3_Pedal_manual.txt

#### Key Features
- 50mm expression fader (10kΩ sliding potentiometer)
- Momentary sustain button (mechanical keyboard switch, replaceable)
- Drone mode toggle switch (latch/reverse)
- Fully passive (no power required)
- TRS/RTS polarity switch for expression compatibility
- Hidden internal jumper for sustain-as-expression mode
- Aluminum enclosure (110×50×40mm, 150g)

#### Connections
- **Expression Jack** (1/4" TRS): Connected to QuNexus CV Input via TRS-to-3.5mm adapter
  - QuNexus converts to MIDI CC#112 on Channel 2
  - Used for: ContinuumMini expression (mapped to CC#12 via QuNexus Editor in Preset B), Artemis filter control
- **Sustain Jack** (1/4" TS): Connected to QuNexus CV Input 2 via TS-to-3.5mm adapter
  - QuNexus converts to MIDI CC#113 on Channel 2
  - Used for: ContinuumMini sostenuto (mapped to CC#66 via QuNexus Editor in Preset B)

#### TRS/RTS Switch Setting
- Set to **TRS (upper/top position)** for QuNexus CV input compatibility

#### Included Cables
- 1m TRS-TRS cable (expression)
- 1m TS-TS cable (sustain)
- TRS to dual 3.5mm TS adapter (red = TIP/left, black = RING/right)

---

## Standalone Instruments

### Ableton Move
**Connection**: USB-C to PC; Audio Out (3.5mm stereo) → TX-6 (channel varies)
**Role**: Portable standalone instrument and Ableton Live control surface

#### Key Features
- 32 velocity-sensitive pads with polyphonic aftertouch
- 9 touch-sensitive encoders + clickable wheel
- 16 step buttons for sequencing
- 1.3" OLED display
- Built-in instruments: Drift (subtractive synth), Drum Rack, Melodic Sampler, Wavetable
- Built-in effects: Auto Filter, Channel EQ, Chorus-Ensemble, Delay, Dynamics, Phaser-Flanger, Redux, Reverb, Saturator
- 60-second phrase looper with overdub
- Built-in sampling (mic, line in, USB-C, resampling)
- Wi-Fi for Cloud sync and Move Manager
- Rechargeable battery (~4 hours)
- 64GB built-in storage, up to 32 Sets

#### I/O
- USB-C: Power, computer connection (audio interface + control surface)
- USB-A: Class-compliant MIDI devices
- Audio Out: 3.5mm stereo (line out / headphones)
- Audio In: 3.5mm stereo (line-level sampling)
- Built-in microphone and speaker

#### Modes of Operation
- **Standalone Mode**: Self-contained instrument with 4 tracks per Set
- **Control Live Mode**: Control surface for Ableton Live 12 (v12.1+) or Live 11 (v11.3.35+)
  - Session View clip launching, device parameter control, mixing
  - Note/Session mode toggle, step sequencing, transport
  - Can also function as audio interface in this mode

#### Audio Routing
```
Move Audio Out (3.5mm) → TX-6 (available channel) → Fireface Inputs 5/6
Move USB-C → Computer (audio interface mode for recording/monitoring)
```

#### Ableton Integration
- Sets sync via Ableton Cloud (up to 8 Sets)
- Move Manager web interface for file management (move.local)
- Link support for wireless tempo/transport sync with other Ableton devices
- Sets downloadable as .ablbundle files, openable in Live 12

---

### Teenage Engineering OP-XY
**Connection**: Audio Out → TX-6 (channel varies)
**Role**: Portable sequencer/synthesizer for sketching and performance

#### Current Configuration
- Audio routed through TX-6 to Fireface (TX-6 channels are moved around as needed)
- Used as standalone instrument

---

## Software Instruments & Plugins

### Scaler 3
**Role**: Composition assistant (Ableton Live plugin)
**Type**: VST/AU/AAX plugin (Scaler Music)
**Formats**: Scaler 3 (virtual instrument), Scaler Audio 3 (audio FX for detection)

#### Key Features
- Scale and chord detection from MIDI, audio, or files
- Chord progression builder with drag-and-drop to DAW
- Suggest Mode: Per Scale (diatonic) and Tonal (beyond-scale) chord suggestions
- Circle of Fifths editor for chord modification and search
- Modulation tools: Progression, Secondary Scale, Modal Interchange, Mediants, Neo-Riemannian
- Explore page: genre/mood-based chord constellations with dynamic scale
- Colors: voicing variations, extensions, substitutions for diatonic chords
- Sketch: 7 progression slots for organizing song sections
- Multi-track Arrange page with Motions (arpeggios, passages, strumming, melodies, bass, sequences)
- Built-in mixer with internal sounds + third-party plugin hosting
- Keys Lock: scale/chord-locked MIDI input (6 modes)
- Voice Grouping: automatic smooth voicing transitions (Dynamic, Open, Guitar, Drop voicings)
- Chord binding to MIDI keys for live performance
- DAW Sync for tempo, transport, and bar position alignment
- Audio and MIDI export (multi-track)

#### Ableton Live Integration
- Load as instrument plugin on MIDI track
- DAW Sync: Scaler follows Ableton's transport, tempo, and time signature
- Drag MIDI from Section C directly into Ableton clips
- Multi-channel MIDI output to route Scaler tracks to separate Ableton instruments
- Bind chords to MIDI keys from QuNexus/Xkey for live chord triggering

---

### Serum 2
**Role**: Wavetable synthesizer (Ableton Live plugin)
**Type**: VST3/AU/AAX virtual instrument (Xfer Records)
**Version**: 2.0.18

#### Key Features
- 3 oscillators (OSC A/B/C) each supporting: Wavetable, Multisample, Sample, Granular, Spectral synthesis
- Dedicated Sub oscillator (6 waveforms) and Noise oscillator (with sample loading)
- Wavetables: up to 256 frames per table, 2048 samples per frame, zero-aliasing playback
- Unison: 1-16 voices per oscillator with multiple modes (Linear, Super, Exp, Inv, Random)
- Warp modes: Sync, FM, PD, AM, RM, plus Alt Warp (Bend, PWM, Fold, etc.) and Filter/Distortion warps
- 2 filter modules with 60+ filter types (MG Ladder, Acid Ladder, SVF, Comb, Formant, etc.)
- 4 envelopes, 10 LFOs (drawable, with Path and Chaos modes), 8 macros
- 64-slot modulation matrix with auxiliary sources and curve control
- Built-in FX rack: 13 processors (Distortion, Delay, Reverb, Chorus, Compressor, Convolve, etc.) in any order
- CLIP module: 12-slot MIDI clip sequencer with piano roll editor
- Arpeggiator: 12-slot bank with custom patterns, transpose shapes, velocity curves
- Wavetable Editor: full drawing tools, FFT editing, formula parser, import from audio/images
- MPE support (enabled by default)
- MTS-ESP microtuning support
- Oversampling: Draft (1x), High (2x), Ultra (4x)

#### ROTO-Control Integration
- Use ROTO-Control Plugin Mode to learn and control Serum parameters
- Configure Serum parameters in Ableton first (unfold device, Configure), save as default
- Macros map automatically when Serum is inside an Ableton Rack

#### Key Workflow Tips
- Drag wave icon from Serum logo to export rendered audio to Ableton
- Shift-drag to export preset file
- Right-click any control for MIDI Learn (map to EC4, Drop, or Monolit CCs)
- Import audio as wavetables: try "Constant framesize (PITCH AVERAGE)" first for pitched sounds

---

## Synthesizer

### Dreadbox Artemis
**Connection**: Audio via TX-6 channel 6 → Fireface Inputs 5/6; MIDI via two paths (see below)
**Manual Available**: ARTEMIS-DIGITAL-MANUAL_12_09_2025.txt (895 lines)
**MIDI Channel**: 1 (Omni mode available)

#### MIDI Routing to Artemis

**Clock + Notes merged via Midihub:**
```
Clock: Ableton → RME MIDI Out → CLOCKstep:MULTI (clock cleaning)
  → CLOCKstep output → Midihub DIN Input D
  → Filter (Clock/Start/Stop/Continue only) → Virtual Output A

Notes: QuNexus → USB → Ableton Live (Arpeggiator MIDI effect)
  → External Instrument (MIDI To: Midihub USB A, Ch. 1)
  → Midihub USB Input A
  → Filter (block Clock/Start/Stop/Continue) → Virtual Output A

Merged: Midihub Virtual Input A → DIN Output A → Artemis MIDI IN
```
Both clock and arped notes share Ableton's output latency reference. The CLOCKstep cleans the clock signal. The Midihub merges both streams via Virtual port A, with filters preventing double-clocking. This replaced the previous Drop Merger routing.

**Ableton Arpeggiator Settings (tested working):**
- Style: Up
- Rate: 1/8
- Steps: 4
- Gate: 128%
- Repeats: ∞ (infinity)

**Ableton Artemis Track Setup:**
- External Instrument device on the Artemis track
- MIDI To: Midihub USB A (Port1), Channel 1
- Arpeggiator MIDI effect placed before the External Instrument in the device chain

**Ableton MIDI Port Configuration (Link/Tempo/MIDI):**
- Midihub USB A appears as **"Midihub MH-... (Port1)"** in Ableton
- Enable **Track** output for the Midihub port
- Leave **Sync OFF** for this port — clock goes via RME → CLOCKstep → Midihub DIN D

**Troubleshooting — Arpeggiator stops cycling:**
If the Ableton Arpeggiator only plays one note and stops cycling, try deleting the corrupt Arp instance and dropping a fresh Arpeggiator onto the track. This has fixed a corrupt instance in the past. **Warning**: deleting the Arp will clear any MIDI mappings on it (e.g., MONOLIT Bank B mappings) — you will need to remap those after replacing the device.

**Troubleshooting — Stuck notes after stopping:**
If the Artemis holds a note after stopping, the likely cause is missing Note Off messages (e.g., from reconfiguring MIDI cables while notes were active). Double-press STOP on the Artemis to send All Notes Off. To prevent: ensure the Midihub Filter on Pipeline 2 passes Note On and Note Off messages, and that Ableton's arp is sending proper Note Off pairs.

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
- Artemis MIDI In receives directly from Midihub DIN Output A
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
- Receives signal from Fireface Outputs 5/6
- Output 1 feeds OB-4 speaker (main monitors)
- Remaining outputs feed headphones
- Single monitoring path: both speaker and headphones from Fireface 5/6

---

### Teenage Engineering OB-4
**Connection**: Input from PreSonus HP4 Output 1; Volume via ortho remote (Bluetooth)
**Reference**: https://teenage.engineering/guides/ob-4

#### Key Features
- Magic radio speaker with FM/web radio
- Line input for external audio
- Bluetooth audio playback
- Disk mode for audio recording
- ortho remote for wireless volume control

#### Current Configuration
- Fed from PreSonus HP4 Output 1 (HP4 receives Fireface Outputs 5/6)
- Volume controlled wirelessly via ortho Bluetooth remote
- Provides high-quality monitoring for studio work
- Speaker and headphones now share the same Fireface output pair (5/6)

---

## MIDI Routing Details

### Kenton THRU-5
**Connection**: Not currently in signal path (available for expansion)
**Role**: MIDI splitter (1 input → 5 thru outputs)

#### Current Connections
- Not connected — Midihub DIN Output A goes directly to Artemis
- All 5 thru outputs available for future expansion

#### Important Notes
- Requires external 9V power supply
- All outputs are MIDI Thru (copies input signal)
- No MIDI merging or processing

---

## Complete Signal Flow Diagrams

### MIDI Signal Flow
```
┌──────────────────────────────────────────────────────────────┐
│                    Ableton Live 12                            │
│                                                              │
│  ┌─────────────────────┐    ┌──────────────────────────┐    │
│  │ MIDI Tracks →       │    │ Artemis Track:           │    │
│  │ Midihub USB ports   │    │ QuNexus → Arp (Up,1/8,  │    │
│  │                     │    │ 4 steps,128%,∞) →        │    │
│  │                     │    │ External Instrument      │    │
│  │                     │    │ (Midihub USB A, Ch.1)    │    │
│  └─────────┬───────────┘    └────────────┬─────────────┘    │
└────────────┼─────────────────────────────┼──────────────────┘
             │                             │
             ↓ USB (other tracks)          ↓ USB (arped notes)
      ┌──────────────────────────────────────────────┐
      │                  Midihub                      │
      │                                              │
      │  USB In A ──→ Filter (no clock) ──┐          │
      │  (arped notes from Ableton)       │          │
      │                                   ↓          │
      │                            Virtual Port A    │
      │                            (merge bus)       │
      │                                   ↑          │
      │  DIN In D ──→ Filter (clock only) ┘          │
      │  (CLOCKstep cleaned clock)                   │
      │                                              │
      │  Virtual In A ──→ DIN Output A ──────────┐   │
      └──────────────────────────────────────────┘   │
                                                     │
         ┌───────────────────────────────────────────┘
         │
         ↓ Midihub DIN Out A
  ┌──────────────────┐              ┌──────────┐
  │ RME UCX II       │              │ Artemis  │
  │ MIDI OUT         │              │ MIDI IN  │
  └──────────────────┘              └──────────┘
         │
         ↓
  ┌──────────────┐
  │ CLOCKstep    │
  │ :MULTI       │──→ Midihub DIN In D
  │ (clock clean)│
  └──────────────┘
```

### Audio Signal Flow
```
┌─────────────────────────────────────────────────┐
│          Ableton Live 12 (DAW)                   │
│                                                  │
│  Audio via Fireface ASIO                        │
└────────────────────────┬────────────────────────┘
                         │
                         ↓
    ┌────────────────────────────────────┐
    │      RME Fireface UCX II           │
    │                                    │
    │  Out 1/2: available                │
    │  Out 5/6 ───→ HP4 Out1→OB-4, +HP │
    │  In 5/6  ←─── TX-6                │
    │  In 1    ←─── CM-15 mic           │
    │  Out 3/4, In 3/4, In 7/8: avail.  │
    └──────────────────┬────────────────┘
                       │
                       ↑
                  ┌─────────┐
                  │  TX-6   │
                  │ Ch 6    │  Ch 3
                  └──┬────┬─┘
                     ↑    ↑
                ┌────────┐ ┌──────────────┐
                │Artemis │ │ContinuuMini  │
                │ Synth  │ │              │
                └────────┘ └──────────────┘
```

### USB Controller Connections
```
Computer USB Hub
      │
      ├───→ QuNexus (MIDI keyboard + MPE)
      ├───→ Xkey 37 (Extended keyboard)
      ├───→ ROTO-Control (DAW control)
      ├───→ Faderfox EC4 (Universal controller)
      ├───→ Monolit (Slider controller / sequencer)
      ├───→ Drop USB1 (DAW controller — encoders, faders, snapshots)
      ├───→ Xjam (Drum pad controller)
      ├───→ Move (Standalone instrument / control surface)
      ├───→ Fireface UCX II (Audio interface)
      └───→ Midihub (MIDI processor/router)
```

---

## Key Workflows & Notes

### TotalMix FX Routing
- The Fireface UCX II's TotalMix FX is extensively used for routing and monitoring
- Custom submixes can be created for different monitoring scenarios
- **Main Monitoring**: Outputs 5/6 feed PreSonus HP4, which drives both OB-4 speaker (Output 1) and headphones
- **Control Room**: Main Out assigned to Analog 5/6, Phones to front panel headphone jack (7/8). Outputs 1/2 now available.

### MIDI Control Strategy
- **Midihub**: Central MIDI routing and processing hub with standalone operation
- **QuNexus**: Primary expressive controller with MPE, pressure, and tilt
- **Xkey 37**: Extended range keyboard for traditional playing
- **ROTO-Control**: DAW mixing, plugin control, and automation
- **Faderfox EC4**: Universal controller for both Ableton (Setup 15) and direct hardware control (custom setups)
- **Drop**: DAW controller with snapshot system for performance transitions
- **Xjam**: Drum pad controller for finger drumming
- **PLUS 3**: Desktop expression and sustain without foot pedals

### Ableton Live Integration
- ROTO-Control provides motorized, bidirectional control
- Mix mode: Track names and colors auto-sync from Live
- Plugin mode: One-touch parameter learning with label capture
- All MIDI controllers properly configured in Live's Control Surface settings
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

### Artemis Configuration
- **Critical**: TX-6 channel 6 gain set to +21dB to compensate for Artemis's inherently light output
- **Arp routing**: QuNexus → Ableton Arpeggiator → External Instrument (Midihub USB A, Ch. 1) → Midihub Filter (no clock) → Virtual A → DIN Out A → Artemis
- **Clock routing**: Ableton → RME MIDI Out → CLOCKstep:MULTI → Midihub DIN In D → Filter (clock only) → Virtual A → merged with notes → Artemis
- Both clock and notes share Ableton's output latency reference, solving the previous timing mismatch
- Ableton Link/Tempo/MIDI: Midihub USB A has **Track ON, Sync OFF** — clock goes via RME → CLOCKstep → Midihub DIN D
- **Stuck note fix**: Double-press STOP on Artemis to send All Notes Off
- 512 presets available for recall
- Set to MIDI channel 1 for note playback
- VCF cutoff (CC 19) and resonance (CC 21) are primary real-time control targets

### Storage & Backup
- ROTO setups can be backed up via Roto-Setup App
- QuNexus has 4 preset slots accessible on hardware
- Artemis has 512 presets (8 banks of 64)
- Midihub presets can be exported/imported via Editor (Device → Export/Import Everything)
- EC4 setups can be backed up via SysEx dump (Setup Mode → Send/Receive)
- Drop projects stored on Micro SD card as .json files (human-readable)
- Move Sets sync via Ableton Cloud; downloadable as .ablbundle via Move Manager
- Xjam has 48 scene presets; editable via Xjam Editor App

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
- Ableton Live: Version 12
- Neuzeit Drop: Firmware v1.07
- Ableton Move: Check via Setup menu
- Monolit: Firmware v2.0.0

---

## Expansion Capabilities

### Available I/O
**Fireface UCX II:**
- 4 unused rear line inputs (3-4, 7-8)
- 2 unused rear line outputs (3-4)
- ADAT (8 channels optical I/O)
- AES/EBU and SPDIF digital I/O
- Word clock I/O for external sync
- DURec port (USB recording or ARC USB remote)

**Midihub:**
- 3 unused MIDI inputs (B, C, D)
- 3 unused MIDI outputs (B, C, D)
- 3 unused USB input/output pairs (B, C, D)
- 8 virtual input/output pairs for internal routing

**TX-6:**
- Additional input channels (currently Artemis on ch6, ContinuumMini on ch3, others available)

**Kenton THRU-5:**
- Not currently connected — all 5 thru outputs available for expansion (e.g., Monolit TRS MIDI out for hardware sequencing/control)

### Potential Additions
- **CLOCKstep:MULTI** (connected): Master MIDI clock cleaner. Receives raw clock from Ableton via RME MIDI Out, outputs cleaned clock to Midihub DIN Input D. Part of the merged Artemis clock+notes routing via Midihub Virtual ports.
- **OXI One mk 2** (owned, not connected): Hardware sequencer with 4 polyphonic/monophonic tracks, 128-step patterns, CV/gate outputs, MIDI DIN/USB, and Bluetooth MIDI. No manual uploaded yet.
- **Tempera** (owned, not connected): 16-voice granular synthesizer with touchgrid, 8 sample tracks, MIDI via TRS or USB
- **nanobox fireball** (owned, not connected): 8-voice wavetable mini synth with touchscreen XY control, MIDI via TRS (no USB MIDI)
- Additional synths via Midihub or Kenton MIDI outs
- External effects via Fireface line inputs
- ADAT-connected preamps or converters for 8 more channels
- Drop TRS MIDI ports available for direct hardware control (4 in, 4 out with individual clock delays)

---

## Troubleshooting Notes

### Common Issues & Solutions

**Ableton Arpeggiator stops cycling (only plays one note):**
- Delete the corrupt Arp instance and drop a fresh Arpeggiator onto the track
- Re-apply settings: Style Up, Rate 1/8, Steps 4, Gate 128%, Repeats ∞
- **Warning**: Deleting the Arp clears all MIDI mappings on it (e.g., MONOLIT Bank B mappings) — remap after replacing
- This is a known Ableton issue where an Arp instance can become corrupt

**Artemis too quiet:**
- Ensure TX-6 channel 6 gain is set to +21dB

**MIDI not reaching synths:**
- Check Midihub is powered and connected via USB
- Verify Midihub pipelines are configured and **stored** (click "Store" in Editor)
- Check Midihub MIDI Monitor to see data flow
- Verify correct output port connections (remember: A is rightmost, not leftmost)
- Confirm MIDI channels match between Ableton tracks and device settings
- For devices via Kenton THRU-5 (if connected): ensure it is powered

**Not hearing effects in headphones:**
- Check TotalMix FX: Analog 5/6 output should have "Mirror of Main Out" enabled
- Right-click on Analog 5/6 hardware output channel and select "Mirror of Main Out"
- Verify HP4 power and volume controls
- Check headphone cables

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

**Drop not communicating with Ableton:**
- Verify Remote Script is installed at `~/Music/Ableton/User Library/Remote Scripts/Drop`
- In Ableton Settings: Drop selected as control surface, Input/Output activated
- Check USB1 port is connected (port with flash symbol)
- USB hubs not supported — connect directly
- If using external power supply, USB1 is still needed for data
- Use Drop's MIDI Monitor (PLAY view) to verify data flow
- If controls not responding: check DAW Init was run (Project > DAW Init)

**Drop powered via USB but not working:**
- Must use USB-C to USB-C cable (not USB-A to USB-C)
- Computer must supply at least 1500mA on that port
- Use included 12V power supply to free both USB ports for devices

**Xjam pads not triggering sounds:**
- Verify Xjam is selected as MIDI input in Ableton track
- Check pad bank (GREEN/YELLOW/RED) — each bank has different mappings
- Check MIDI channel matches (Preset 2 uses Ch 10 for GM drums)
- If repeat not working: verify clock source (SETUP > CLOCK — internal vs external)

**Move not appearing as control surface:**
- Switch to Control Live Mode: Setup menu (Shift + Step 2) > Control Live
- Requires Live 12 v12.1+ or Live 11 v11.3.35+
- USB-C must be connected to computer
- In Standalone Mode: Move works independently, audio via 3.5mm out

**Move audio not heard:**
- Check 3.5mm cable connection to TX-6
- Verify TX-6 channel gain is set appropriately
- For USB-C audio: Setup > USB-C Audio > select "Main Out" (disables built-in speaker)

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
- `OM_2777400203_HP4_EN.txt` (404 lines) - PreSonus HP4
- `QuNexus_RED_Manual_V2-1.txt` (1331 lines) - QuNexus
- `Xkey_37-English.txt` - Xkey 37
- `P3_Pedal_manual.txt` (370 lines) - PLUS 3
- `ROTO-UserManual-V1-1-4-April2025.txt` (1030 lines) - ROTO-Control
- `EC4_Manual_V03.txt` (627 lines) - Faderfox EC4
- `Drop_Manual_v1.07.txt` - Neuzeit Drop
- `Xjam_User_Guide.txt` - ESI Xjam
- `Move_Reference_Manual.txt` - Ableton Move

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
- Desktop workflow (compact, efficient setup)
- Real-time hardware parameter control via Faderfox EC4 and Midihub
- Continuous controller performance (ContinuumMini touch surface, expression pedals)
- Portable composition (Ableton Move, OP-XY)
- Performance transitions (Drop snapshots, Jump/Drop modes)

---

*This documentation created: January 2026*
*Last updated: April 21, 2026 - Documented Artemis arp routing: QuNexus → Ableton Arpeggiator (Up, 1/8, 4 steps, 128% gate, ∞ repeats) → External Instrument (USB MIDI Device, Ch. 1) → RME UCX II MIDI OUT → Drop Merger → Artemis. RME MIDI port appears as "USB MIDI Device" in Ableton. Link/Tempo/MIDI: Track ON, Sync OFF for RME port (clock from Multistep via Drop). Added Arp corruption troubleshooting (delete and re-add fixes stuck single-note cycling; clears MIDI mappings including MONOLIT Bank B).*
*Previous update: April 06, 2026 - Changed main monitor path: OB-4 speaker now fed from PreSonus HP4 Output 1 instead of directly from Fireface Outputs 1/2. Fireface Outputs 5/6 → HP4 → OB-4 (Output 1) + headphones. Fireface Outputs 1/2 now available. Removed guitar pedal effects chain (Chase Bliss Clean, Empress ZOIA, Hologram Microcosm) and all associated routing.*
*Previous update: March 21, 2026 - Added Neuzeit Drop (DAW controller via USB1, DAW Init mode with snapshots/faders/encoders), ESI Xjam (drum pad controller via USB), Ableton Move (standalone instrument + control surface, audio via TX-6), TE OP-XY (portable sequencer/synth, audio via TX-6), Endorphin.es PLUS 3 (dedicated section — expression/sustain desktop pedal connected to QuNexus CV inputs), Scaler 3 and Serum 2 (software plugins). Updated USB controller connections, signal flow, and reference manual locations.*
*Previous update: February 18, 2026 - Added Lightreft Monolit MIDI controller hub with full hardware overview, connection diagram, slider/button modes (CC/Notes/LFO/Motion/Sequencer/Performance), suggested studio use cases, Ableton setup instructions, and troubleshooting. Monolit connects via USB-C to computer and TRS MIDI Type-A to Kenton THRU-5 (available port). Manual reference: MONOLIT_2_0_0.txt.*
*Previous update: February 08, 2026 - Added Haken Audio ContinuumMini with complete EaganMatrix documentation, QuNexus Preset B configuration for ContinuumMini control (PLUS 3 slider → CC#12, sustain button → CC#66 sostenuto), MIDI CC map, playing modes, troubleshooting, and workflow examples. ContinuumMini receives audio via TX-6 channel 3 and MIDI control via QuNexus through Haken Editor (Ext 1: QuNexus keys, Ext 2: QuNexus CV/PLUS 3).*
*Previous update: January 30, 2026 - Added complete Faderfox EC4 "CLEN" setup for Chase Bliss Clean control with full mapping table, preset configuration, and Midihub channel remapping.*
*For future Claude instances: This represents Sozin's complete studio setup with Midihub as the central MIDI router. All signal routing, gain staging, MIDI channels, and configuration details are documented as actually implemented and tested. Guitar pedals (Chase Bliss Clean, Empress ZOIA, Hologram Microcosm) were removed in April 2026 — the effects send/return loop no longer exists. Main monitoring changed: OB-4 speaker is now fed from PreSonus HP4 Output 1 (not directly from Fireface), so both speaker and headphones share Fireface Outputs 5/6. Fireface Outputs 1/2 are now available. ContinuumMini is controlled via QuNexus Preset B with PLUS 3 pedal providing expression (CC#12) and sostenuto (CC#66). The Haken Editor is limited to 2 external music data sources (Ext 1 and Ext 2). The Neuzeit Drop is the primary DAW controller (USB1, DAW Init mode). Ableton Move and OP-XY are standalone instruments with audio routed through the TX-6 (channels vary). A CLOCKstep:MULTI master clock is expected ~April 2026. Tempera (granular synth) and nanobox fireball (wavetable synth) are owned but not currently connected.*
