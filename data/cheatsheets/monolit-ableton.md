---
id: monolit-ableton
title: "MONOLIT → Ableton"
category: midi-map
tags: [monolit, ableton, drum-buss, arpeggiator, serum, analog-rytm, overbridge, midi-mapping, template, roar, feedback, return-track, sends, mixer, transit-2, baby-audio]
createdAt: 2026-04-19T15:00:59.204Z
updatedAt: 2026-04-19T15:02:50.564Z
---

## MONOLIT → Ableton Live — Analog Rytm Processing Preset

**Controller:** Lightreft MONOLIT | **Target:** Ableton Live | **Connection:** USB-C
**Preset:** Analog Rytm Master | **Ableton Placement:** Drum Buss on Group Track, Arp on instrument track, Roar on Return A, Transit 2 on Return B

### Global Setup Notes
- All controls on the same MIDI channel
- **Exit EDIT mode** on MONOLIT before MIDI mapping in Ableton (Cmd+M)
- MONOLIT sliders: Mode=CC, MIN=0, MAX=127 (unless noted)
- MONOLIT buttons: Mode=CC, Behavior=TOGGLE, MIN=0, MAX=127 (unless noted)
- MIDI mappings live in the **Live Set only** — save as template after mapping
- Save device presets to User Library **without** MIDI mappings to avoid clobbering

---

### Bank A — Drum Buss (on Overbridge Group Track)

#### Sliders

| # | CC | MONOLIT Label | Drum Buss Parameter | Ableton Min/Max | Best For |
|---|-----|---------------|----------------------|-----------------|----------|
| 1 | 40 | DB DRIVE | Drive | 0 / 127 | **Kicks** (warmth/punch), **snares** (grit/body) — adds saturation across the kit |
| 2 | 41 | DB CRNCH | Crunch | 0 / 127 | **Snares/claps** (edge, presence), **hats** (sizzle/bite) — mid-high distortion |
| 3 | 42 | DB TRANS | Transients | 0 / 127 | **Kicks** (+val = punch), **snares** (+val = crack/snap), **hats** (-val = tighter, less rattle) |
| 4 | 43 | DB BOOM | Boom | 0 / 127 | **Kicks** (sub-bass weight/thump) — resonant low-end boost; less useful for hats |
| 5 | 44 | DB FREQ | Boom Freq | 0 / 127 | **Kicks** — tune the sub resonance to match your kick's fundamental pitch |
| 6 | 45 | DB DAMP | Damp | 0 / 127 | **Hats/cymbals** (tame harsh highs), **snares** (reduce sizzle) — low-pass on output |
| 7 | 46 | DB DECAY | Decay | 0 / 127 | **Kicks** (shape low-end tail length) — controls how long the Boom resonance rings |
| 8 | 47 | DB DW | Dry/Wet | 0 / 127 | All drums — blend processed vs. clean signal |

#### Buttons

| # | CC | MONOLIT Label | Mode | DB Parameter | Min/Max | Notes |
|---|-----|---------------|--------|--------------|----------|----------|
| 1 | 48 | DB ON | TOGGLE | Device On/Off | 0 / 127 | Bypass the whole Drum Buss |
| 2 | 49 | DB COMP | TOGGLE | Comp | 0 / 127 | Tightens the kit — fast attack, medium release |
| 3 | 50 | DB TYPE | TOGGLE | Distortion Type | 0 / 2 | CC STEPS=3. Soft=dub/warmth, Medium=limiting, Hard=clip+bass boost |
| 4 | 51 | DB AUDIT | TOGGLE | Boom Audition | 0 / 127 | Solo the Boom signal to tune it to the kick |

---

### Bank B — Arpeggiator (on instrument/MIDI track)

#### Sliders

| # | CC | MONOLIT Label | Arp Parameter | Ableton Min/Max | Notes |
|---|-----|---------------|----------------|-----------------|----------|
| 1 | 30 | ARP STYLE | Style | 0 / 17 | Selects the arp pattern: Up, Down, UpDown, DownUp, Up & Down, Down & Up, Converge, Diverge, Con & Diverge, Pinky Up, Pinky UpDown, Thumb Up, Thumb UpDown, Play Order, Random, Random Other, Random Once, Chord Trigger |
| 2 | 31 | ARP RATE | Rate | 0 / 15 | Clock division for arp speed: 1/1 to 1/32 including dotted and triplet variants. Lower = slower arpeggiation, higher = faster |
| 3 | 32 | ARP GATE | Gate | 0 / 127 | Note length as % of step duration. Low = short staccato plucks, high = long legato overlaps. Sweet spot ~50-80% for most patches |
| 4 | 33 | ARP DIST | Distance | -24 / 24 | Semitone offset applied to each successive step. +12 = each step one octave higher. Negative = descending. 0 = same octave. Creates octave-spread arpeggios |
| 5 | 34 | ARP STEPS | Steps | 0 / 8 | Number of extra transposed repeats per note. Combined with Distance: Steps=2, Dist=12 plays each note then +1oct then +2oct before moving to next |
| 6 | 35 | ARP OFFST | Pattern Offset | defaults | Shifts the start point within the pattern. Rotates the sequence so it begins on a different beat/note of the pattern |
| 7 | 36 | ARP GROOVE | Groove | 0 / 127 | Swing/shuffle amount. 0 = straight timing, higher = more swing. Pushes even-numbered steps later for a looser, groovy feel |
| 8 | 37 | ARP INTV | Retrigger Interval | 0 / 127 | How often the arp restarts its pattern while keys are held. Low = frequent retriggering (rhythmic stutter), high = less frequent, 0 = off |

#### Button

| # | CC | MONOLIT Label | Mode | Arp Parameter | Min/Max |
|---|-----|---------------|--------|---------------|----------|
| 1 | 38 | ARP ON | TOGGLE | Device On/Off | 0 / 127 |

---

### Bank C — Serum 2 (on synth/instrument track)

#### Sliders

| # | CC | MONOLIT Label | Serum 2 Parameter | Ableton Min/Max | Notes |
|---|-----|---------------|-------------------|-----------------|----------|
| 1 | 52 | S2 MAC1 | Macro 1 | 0 / 127 | Preset-designed — controls whatever the patch designer mapped |
| 2 | 53 | S2 MAC2 | Macro 2 | 0 / 127 | Often mapped to FX depth, movement, texture |
| 3 | 54 | S2 MAC3 | Macro 3 | 0 / 127 | Preset-specific multi-param control |
| 4 | 55 | S2 MAC4 | Macro 4 | 0 / 127 | Preset-specific multi-param control |
| 5 | 56 | S2 WTPA | OSC A WT Pos | 0 / 127 | Wavetable morphing — Serum's signature timbral sweep |
| 6 | 57 | S2 CUT | Filter 1 Cutoff | 0 / 127 | Essential subtractive shaping |
| 7 | 58 | S2 RES | Filter 1 Resonance | 0 / 127 | Pairs with cutoff for filter sweeps |
| 8 | 59 | S2 DRV | Filter 1 Drive | 0 / 127 | Adds grit/saturation into the filter circuit |

#### Buttons

| # | CC | MONOLIT Label | Mode | Serum 2 Parameter | Min/Max | Notes |
|---|-----|---------------|--------|-------------------|----------|----------|
| 1 | 60 | S2 ON | TOGGLE | Device On/Off | 0 / 127 | Bypass the plugin |
| 2 | 61 | S2 FLT | TOGGLE | Filter 1 On/Off | 0 / 127 | Toggle filtering |
| 3 | 62 | S2 OSCB | TOGGLE | OSC B On/Off | 0 / 127 | Layer/unlayer second oscillator |

---

### Bank D — Roar (on Return Track, Feedback routing mode)

**Routing:** Feedback | **Placement:** Return track — send any track to Roar via Send knob
**Why Feedback:** Self-oscillating feedback loop creates evolving textures, drones, and wild harmonic content — ideal for live performance where you want Roar to \"come alive\" and respond dynamically.

#### Sliders

| # | CC | MONOLIT Label | Roar Parameter | Ableton Min/Max | Notes |
|---|-----|---------------|----------------|-----------------|----------|
| 1 | 64 | R DRVE | Drive | 0 / 127 | Main saturation intensity — push for more aggression |
| 2 | 65 | R TONE | Tone Amount | 0 / 127 | Post-distortion tonal shaping |
| 3 | 66 | R SHPR | Shaper Amount (Stage 1) | 0 / 127 | Waveshaping depth — adds harmonic complexity |
| 4 | 67 | R FILT | Filter Frequency (Stage 1) | 0 / 127 | Pre-feedback filtering — shapes what enters the loop |
| 5 | 68 | R FB | Feedback Amount | 0 / 127 | **The magic knob** — controls self-oscillation intensity. Careful past 75%! |
| 6 | 69 | R FBFQ | Feedback Filter Freq | 0 / 127 | Tunes the feedback resonance — sweep for alien textures |
| 7 | 70 | R COMP | Compression Amount | 0 / 127 | Tames dynamics after feedback processing |
| 8 | 71 | R OUT | Output Gain | 0 / 127 | Level control — essential on return track to avoid blowouts |

#### Buttons

| # | CC | MONOLIT Label | Mode | Roar Parameter | Min/Max | Notes |
|---|-----|---------------|--------|----------------|----------|----------|
| 1 | 72 | R ON | TOGGLE | Device On/Off | 0 / 127 | Title bar — bypass Roar entirely |
| 2 | 73 | R TONE | TOGGLE | Tone Type | 0 / 127 | **Direct tab.** On/off toggle. MONOLIT: MIN=0, MAX=127. Ableton: Min=0, Max=1 |
| 3 | 74 | R GATE | TOGGLE | Feedback Gate | 0 / 127 | **Feedback tab.** Gates the loop — prevents runaway when input stops |
| 4–8 | 75–79 | — | — | *(unused)* | — | Dropdown params (Shaper/Filter/FB Mode) need >10 steps — beyond MONOLIT CC STEPS limit |

#### Live Performance Notes
- **Send control:** Use a MONOLIT slider on another bank (or PERF mode ASSIGN slot) to control the Send amount to this return track
- **Safety:** Keep R OUT (slider 8) ready — feedback can get loud fast
- **Sweet spot:** R FB around 40-60% gives evolving texture; above 75% enters self-oscillation territory
- **Dry/Wet stays at 100%** on the return track — the Send knob IS your effective dry/wet

---

### Bank H — Send Controls (Mixer Level)

**Purpose:** Hands-free control of return track send amounts — the knobs that determine how much of each track feeds Roar (and future returns)

#### How to Map (per slider)
1. **Cmd+M** to enter MIDI Map Mode
2. Click the **Send A knob** on the target track's mixer (View > Mixer Controls > Sends if hidden)
3. Move the corresponding MONOLIT slider on Bank H
4. Check Mapping Browser — set Min=0, Max=127
5. **Cmd+M** to exit

#### Sliders

| # | CC | MONOLIT Label | Ableton Parameter | Notes |
|---|-----|---------------|-------------------|----------|
| 1 | 104 | ART>SA | Artemis → Send A (Roar) | Arp/synth into Roar |
| 2 | 105 | ART>SB | Artemis → Send B | Transit 2 (multi-FX transitions) |
| 3 | 106 | RY>SA | Rytm Group → Send A (Roar) | Drums into Roar |
| 4 | 107 | RY>SB | Rytm Group → Send B | Future return |
| 5 | 108 | S2>SA | Serum 2 → Send A (Roar) | Synth into Roar |
| 6 | 109 | S2>SB | Serum 2 → Send B | Future return |
| 7 | 110 | T2 MAC | Transit 2 → Macro (Transition) | **The one knob** — sweeps all linked FX modules simultaneously. Buildups, risers, washouts. |
| 8 | 111 | — | *(unused)* | |

#### Buttons

| # | CC | MONOLIT Label | Mode | Parameter | Min/Max | Notes |
|---|-----|---------------|--------|-----------|----------|----------|
| 1 | 112 | ROA ON | TOGGLE | Return A (Roar) Track On/Off | 0 / 127 | Kill the entire Roar return |
| 2 | 113 | T2 ON | TOGGLE | Return B (Transit 2) Track On/Off | 0 / 127 | Kill Transit 2 return |

#### Notes
- Send knobs default to **pre-fader off** — if you want sends independent of track volume, right-click the Send knob and enable Pre
- Slider 7 controls Transit 2's Macro knob — the single sweep that drives all linked FX modules. Slider 8 is free for a future third return.
- You can also use **PERF mode ASSIGN** to pull any of these sliders onto other banks for cross-bank access

---

### CC Range Summary

| Bank | CC Range | Effect |
|------|----------|--------|
| A | 40–51 | Drum Buss |
| B | 30–38 | Arpeggiator |
| C | 52–62 | Serum 2 |
| D | 64–79 | Roar (Feedback) |
| E–G | 80–103 | *(future banks)* |
| H | 104–113 | Send Controls |

### Ableton Mapping Tips
- For **indexed** parameters (Style, Rate, Steps, Distortion Type): set exact Min/Max in Mapping Browser
- For **continuous** parameters (Drive, Gate, Dry/Wet): use 0/127
- Distortion Type needs **CC STEPS=3** on MONOLIT and **Min=0, Max=2** in Ableton
- Sync/Free toggle on Arp is **NOT** exposed for MIDI mapping

### Troubleshooting
- **Slider only sweeps partial range:** Check Ableton Mapping Browser Min/Max values
- **Button maps but doesn't work:** Ensure MONOLIT button Mode=CC (not NOTE), and exit EDIT mode
- **Mappings disappeared after loading preset:** MIDI mappings are per-Set, not per-device — always map in the template Set
- **New device clobbers old mappings:** Save device presets WITHOUT MIDI mappings; do all mapping in the Live Set
