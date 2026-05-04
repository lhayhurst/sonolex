---
id: monolit-ableton-arpeggiator
title: "MONOLIT → Ableton Arpeggiator"
category: midi-map
tags: [monolit, arpeggiator, ableton, midi-mapping, artemis]
createdAt: 2026-04-11T11:42:13.995Z
updatedAt: 2026-04-11T11:42:13.995Z
---

## MONOLIT → Ableton Arpeggiator Bank

**Controller:** Lightreft MONOLIT | **Target:** Ableton Live — Arpeggiator MIDI Effect | **Connection:** USB-C

### Setup Notes
- All controls on the same MIDI channel
- **Exit EDIT mode** on MONOLIT before MIDI mapping in Ableton
- Cmd+M to enter/exit MIDI Map Mode in Ableton
- Sync/Free toggle is **NOT** exposed for MIDI mapping in Ableton
- MONOLIT sliders: Mode=CC, MIN=0, MAX=127
- MONOLIT button: Mode=CC, Behavior=TOGGLE, MIN=0, MAX=127

### Sliders

| # | CC | MONOLIT Label | Arp Parameter | Ableton Min/Max | Notes |
|---|-----|---------------|----------------|-----------------|---------|
| 1 | 30 | ARP STYLE | Style | 0 / 17 | 18 styles indexed 0–17 |
| 2 | 31 | ARP RATE | Rate | 0 / 15 | 16 synced rate divisions |
| 3 | 32 | ARP GATE | Gate | 0 / 127 | Continuous, full range |
| 4 | 33 | ARP DIST | Distance | -24 / 24 | Semitones, bipolar |
| 5 | 34 | ARP STEPS | Steps | 0 / 8 | Number of arp steps |
| 6 | 35 | ARP OFFST | Pattern Offset | defaults | Use Ableton defaults |
| 7 | 36 | ARP GROOVE | Groove | 0 / 127 | Continuous, full range |
| 8 | 37 | ARP INTV | Retrigger Interval | 0 / 127 | Continuous, full range |

### Button

| # | CC | MONOLIT Label | Mode | Arp Parameter | Min/Max |
|---|-----|---------------|--------|---------------|----------|
| 1 | 38 | ARP ON | TOGGLE | Device On/Off | 0 / 127 |

### Ableton Mapping Browser Notes
- Mappings show path as track name (e.g., "3-Artemis Instru...") — this is normal; the Arp lives on the same track
- Check the **Name** column to confirm correct parameter targets
- For indexed parameters (Style, Rate, Steps): set exact Min/Max in Mapping Browser
- For continuous parameters (Gate, Groove, Interval): use 0/127
- Retrigger Interval is continuous (not indexed) — use full 0/127 range

### Troubleshooting
- **Slider only sweeps partial range:** Check Ableton Mapping Browser Min/Max values
- **Button maps but doesn't work:** Ensure MONOLIT button Mode=CC (not NOTE), and exit EDIT mode
- **Parameter not mappable:** Some Ableton parameters (like Sync/Free) aren't exposed for MIDI mapping
