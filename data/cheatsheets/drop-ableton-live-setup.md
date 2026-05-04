---
id: drop-ableton-live-setup
title: "Drop → Ableton Live Setup"
category: midi-map
tags: [drop, neuzeit, ableton, dreadbox, artemis, serum, analog-rytm, midi-mapping, rack-macros, snapshots, jump-drop, fx, delay, reverb, compressor]
createdAt: 2026-04-23T12:00:00.000Z
updatedAt: 2026-04-24T00:00:00.000Z
---

## Drop → Ableton Live — Multi-Row Performance Controller

**Controller:** Neuzeit Drop | **Layer:** A
**Targets:** Dreadbox Artemis (TRS MIDI), Serum 2 via Ableton Rack Macros (USB1), Analog Rytm MKII FX (TRS MIDI)

### Architecture
- **Row 1 (bottom):** Artemis — direct TRS MIDI using Artemis CC database
- **Row 2:** Serum 2 — USB1 → Ableton MIDI Map → Instrument Rack Macros
- **Row 3:** Analog Rytm MKII FX — TRS MIDI CC on channel 13
- **Row 4 (top):** *(future)*

### Global Setup Notes
- Drop connected to Ableton via USB1 (DAW Init)
- Drop connected to Artemis via TRS MIDI (dedicated device with CC database)
- Drop connected to Analog Rytm MKII via TRS MIDI (same TRS1 port as clock)
- Serum 2 is wrapped in an **Instrument Rack** (Cmd+G) so Rack Macros persist across preset changes
- Drop Remote Script installed at `~/Music/Ableton/User Library/Remote Scripts/Drop`
- Drop configured as control surface in Ableton (Input/Output activated)
- MIDI mappings live in the **Ableton Live Set** — save as template after mapping
- Use **Shift + Turn/push/move** on Drop to send only the currently selected slot (useful for DAW mapping)

---

## Row 1 — Dreadbox Artemis (Bottom Knobs)

**Connection:** TRS MIDI | **Drop Device:** Artemis (CC database from `/midi-main`)

### Knob Mappings (Left to Right)

| Knob | CC | Artemis Parameter | Panel Control | What It Does |
|------|-----|-------------------|---------------|-------------|
| 1 | 75 | LPF Cutoff | CUT knob (VCF) | Low-pass filter frequency, 20 Hz–20 kHz. The big tonal shaper. |
| 2 | 71 | LPF Resonance | RES knob (VCF) | Filter resonance/emphasis. Self-oscillates at high values. |
| 3 | 70 | VCO Wave (Morph) | WAVE knob (VCO) | Continuous waveshape: Saw → Square → Triangle |
| 4 | 84 | FM Amount | FM slider (VCO) | Thru-zero FM depth, VCO2 → VCO1. Rich harmonic textures. |
| 5 | 79 | Detune | DTN knob (VCO) | VCO2 detune + unison spread. Subtle chorus to dramatic intervals. |
| 6 | 85 | Pulse Width | PW knob (VCO) | Pulse width of both VCOs. 0 = square, max = wave disappears. |
| 7 | 7 | Volume | MASTER knob | Master output level. |

### Artemis Quick CC Reference
| CC | Parameter | CC | Parameter |
|----|-----------|----|-----------|
| 7 | Volume | 75 | LPF Cutoff |
| 70 | VCO Wave | 71 | LPF Resonance |
| 79 | Detune | 84 | FM Amount |
| 85 | Pulse Width | 10 | Spread |
| 8 | VCO Mix | 76 | Sub/Noise |
| 6 | LPF Env Amount | 16 | HPF Cutoff |

---

## Row 2 — Serum 2 (via Ableton Rack Macros)

**Connection:** USB1 → Ableton MIDI Map → Instrument Rack Macros

**Why Rack Macros:** Direct MIDI mappings to Serum 2 parameters break when changing presets. Wrapping Serum 2 in an Instrument Rack (Cmd+G) and mapping Drop knobs to the Rack Macros keeps mappings stable across all Serum presets.

### Rack Macro Setup
1. Select Serum 2 in the device chain, press **Cmd+G** to group into Instrument Rack
2. Click **Map** on the Rack, click each Serum parameter, assign to a Rack Macro knob
3. Name each Rack Macro for clarity
4. **Cmd+M** → click the Rack Macro → turn the Drop Row 2 knob → **Cmd+M** to exit

### Knob Mappings (Left to Right)

Mirrors the MONOLIT Bank C layout for consistency across controllers.

| Knob | Rack Macro | Serum 2 Parameter | Notes |
|------|------------|-------------------|-------|
| 1 | Macro 1 → S2 Macro 1 | Macro 1 | Preset-designed — controls whatever the patch designer mapped |
| 2 | Macro 2 → S2 Macro 2 | Macro 2 | Often mapped to FX depth, movement, texture |
| 3 | Macro 3 → S2 Macro 3 | Macro 3 | Preset-specific multi-param control |
| 4 | Macro 4 → S2 Macro 4 | Macro 4 | Preset-specific multi-param control |
| 5 | Macro 5 → OSC A WT Pos | OSC A Wavetable Position | Serum's signature timbral sweep |
| 6 | Macro 6 → Filter 1 Cutoff | Filter 1 Cutoff | Essential subtractive shaping |
| 7 | Macro 7 → Filter 1 Res | Filter 1 Resonance | Pairs with cutoff for filter sweeps |
| 8 | Macro 8 → Filter 1 Drive | Filter 1 Drive | Grit/saturation into the filter circuit |

### Button Mappings (Row 2 Push Buttons)

| Button | Rack Macro | Serum 2 Parameter | Notes |
|--------|------------|-------------------|-------|
| 1 | Macro 9 → Device On/Off | Device On/Off | Bypass the plugin |
| 2 | Macro 10 → Filter 1 On/Off | Filter 1 On/Off | Toggle filtering |
| 3 | Macro 11 → OSC B On/Off | OSC B On/Off | Layer/unlayer second oscillator |

### Tips
- Rack Macros 1–8 map to knobs, 9–16 map to buttons (accessible across 2 pages)
- Serum's internal Macros 1–4 are preset-specific — they change function per patch by design
- OSC A WT Pos is universally useful — nearly every Serum patch responds to wavetable position
- Filter Cutoff + Resonance together create classic filter sweep buildups via Drop snapshots
- Same Serum 2 parameter set as MONOLIT Bank C — both controllers can work the same track

---

## Row 3 — Analog Rytm MKII FX Channel

**Connection:** TRS MIDI (TRS1 — same port/cable as clock) | **Drop Device:** Rytm (NOT DAW)
**MIDI Channel:** 13 (Rytm FX track channel) | **Message Type:** CC (not NRPN)

**Important:** Each slot's Device field must be set to **Rytm** (TRS1), not DAW (USB1). Clock routing is separate from per-slot Device assignment — clock can work while CC goes nowhere if the Device is wrong.

### Knob Mappings (Left to Right)

| Knob | CC | Rytm FX Parameter | FX Section | What It Does |
|------|-----|-------------------|------------|-------------|
| 1 | 16 | Delay Time | Delay | Sets the rhythmic spacing of repeats. |
| 2 | 19 | Delay Feedback | Delay | Number of repeats. Higher = longer tail, self-oscillates near max. |
| 3 | 23 | Delay Mix Volume | Delay | Delay wet level in the main mix. 0 = silent (must be > 0 to hear delay). |
| 4 | 25 | Reverb Decay Time | Reverb | Reverb tail length. Short for rooms, long for halls/infinite. |
| 5 | 31 | Reverb Mix Volume | Reverb | Reverb wet level in the main mix. |
| 6 | 70 | Distortion Amount | Distortion | Distortion intensity on the FX bus. |
| 7 | 78 | Compressor Threshold | Compressor | Where compression kicks in. Lower = more compression. |
| 8 | 84 | Compressor Dry/Wet | Compressor | Parallel compression blend. 0 = dry, 127 = full compression. |

### Rytm FX Channel Setup
1. **Rytm side:** SETTINGS → MIDI CONFIG → CHANNELS → FX track = channel 13
2. **Rytm side:** SETTINGS → MIDI CONFIG → PORT CONFIG → INPUT FROM = MIDI+USB, RECEIVE CC/NRPN = ON
3. **Rytm side:** SETTINGS → AUDIO ROUTING → SEND TO FX = 12/12 (enables all tracks to feed FX)
4. **Rytm side:** FX track → ensure Delay VOL and Reverb VOL are > 0 (otherwise FX are inaudible)
5. **Drop side:** Row 3 slots → Device = **Rytm** (TRS1), Channel = 13, Type = CC
6. **Overbridge note:** Individual track outputs are pre-FX. FX are only audible on the Main L/R bus. Ensure Main L/R output channel is active and routed in Ableton.

### Rytm FX Quick CC Reference (Channel 13)
| CC | Parameter | CC | Parameter |
|----|-----------|----|-----------|
| 16 | Delay Time | 17 | Delay Pingpong |
| 18 | Delay Stereo Width | 19 | Delay Feedback |
| 20 | Delay HP Filter | 21 | Delay LP Filter |
| 22 | Delay Reverb Send | 23 | Delay Mix Volume |
| 24 | Reverb Predelay | 25 | Reverb Decay Time |
| 26 | Reverb Shelf Freq | 27 | Reverb Shelf Gain |
| 28 | Reverb HP Filter | 29 | Reverb LP Filter |
| 31 | Reverb Mix Volume | 70 | Dist Amount |
| 71 | Dist Symmetry | 72 | Delay Overdrive |
| 78 | Comp Threshold | 79 | Comp Attack |
| 80 | Comp Release | 81 | Comp Makeup Gain |
| 82 | Comp Ratio | 83 | Comp Sidechain EQ |
| 84 | Comp Dry/Wet | 85 | Comp Volume |

---

## Row 4 — *(Reserved for future)*

---

## Snapshot Ideas (Cross-Row)

Snapshots can combine parameters from **all rows** into a single button press.

| Snapshot | Vibe | Artemis (Row 1) | Serum 2 (Row 2) | Rytm FX (Row 3) |
|----------|------|-----------------|------------------|------------------|
| Chill | Mellow pad | Cutoff ~60%, Res ~20%, FM 0% | Macros neutral, WT Pos low, Filter open | Delay Time long, Feedback ~30%, Reverb high |
| Peak | Bright/intense | Cutoff ~90%, Res ~60%, FM ~50% | Macros cranked, WT Pos high, Filter resonant | Delay Feedback ~70%, Dist Amount up, Comp squashed |
| Drop | Impact reset | Cutoff snap to ~40%, Vol full | All neutral, Filter closed then open | Delay/Reverb Vol to 0, Comp Dry/Wet to 0 |

### Jump/Drop Performance
1. Start on **Chill** snapshot
2. **JUMP → Peak** with fade pot at 75% for slow buildup across all three targets
3. While fading, **DROP → Chill** (scheduled for cycle end)
4. At cycle end: all params across Artemis, Serum, AND Rytm FX snap back — unified buildup-to-drop

### General Tips
- **PreDrop priority** on timing-critical params (filter cutoffs, mutes)
- Volume params in snapshots enable level drops/boosts as part of transitions
- Use **Values mode** in SAVE view to see exact 0–127 values before saving snapshots
- Cross-row snapshots are the Drop's superpower — one button controls Artemis, Serum, AND Rytm FX simultaneously
- Row 3 Delay Mix Volume at 0 = no delay heard. Always check this first when debugging.
