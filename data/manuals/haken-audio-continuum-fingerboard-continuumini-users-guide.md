---
id: haken-audio-continuum-fingerboard-continuumini-users-guide
title: "Haken Audio Continuum Fingerboard & ContinuuMini User's Guide"
source: "ContinuumUserGuideOpt.pdf"
convertedAt: 2026-03-22T16:01:13.677Z
summary: "The Continuum Fingerboard is an expressive electronic musical instrument featuring a continuous touch-sensitive playing surface that allows seamless pitch slides, vibrato, and dynamic control in three dimensions (X, Y, and pressure). It includes the built-in EaganMatrix sound engine for internal sound design. The ContinuuMini is a smaller, more portable version of the same instrument, and both connect via MIDI, USB, and analog/digital audio outputs."
---

# Continuum and ContinuuMini User's Guide

November 10, 2019
Firmware Version 9.0
Edmund Eagan, Lippold Haken, and Richard Kram

## About this document

This User Guide includes information for the Full-size Continuum Fingerboard, the Half-size Continuum Fingerboard (also referred to as "Continuum"), and the ContinuuMini (also referred to as "Mini").

The current version of this document can be found online in the Resources section of www.HakenAudio.com.

We suggest new Continuum Fingerboard owners read this guide at least up to Section 10. New ContinuuMini owners should consult section 16. The knowledge you gain will save you time in the future and significantly enhance your experience with your Continuum Fingerboard or ContinuuMini. After you finish reading this guide, please keep it available as a reference.

Continuum Fingerboard, Continuum, ContinuuMini, Haken Continuum, Haken ContinuuMini, Haken, and EaganMatrix are trademarks (TM) of Haken Audio. Eagan Instruments, Eagan Sounds, and Eagan are trademarks (TM) of Edmund Eagan. All other trademarks are property of their respective owners.

IMPORTANT! The analog audio output of the Continuum and ContinuuMini is a TRS stereo (unbalanced) connection. DO NOT use a mono TS audio cable to connect to this output. Damage to the analog circuitry can be caused by doing this for an extended time period. Refer to the hook up diagrams in Section 12 for proper Continuum Fingerboard connections.

## Table of Contents

1. Overview of the Continuum Fingerboard 7
  1.1. The Playing Surface 7
  1.2. The EaganMatrix 8
  1.3. What Sets the Continuum Fingerboard Apart 8
2. Haken Audio Hardware 11
  2.1. The Continuum Fingerboard 11
  2.2. The Continuum EaganMatrix Expander (CEE) 12
  2.3. The ContinuuMini 13
  2.4. The Continuum Voltage Converter (CVC) 15
3. Historical Context 15
  3.1. Touche 16
  3.2. Fast Continuous-Pitch Playing 17
4. Midi Encoding 19
  4.1. Encoding Principles of the Continuum Fingerboard 19
  4.2. Connecting an External Midi Synthesizer 20
  4.3. Specialized Kyma Encoding 23
5. Specifications 24
  5.1. Left and Right Panels of the Full-size and Half-size Continuum Fingerboard 24
  5.2. Hardware Specifications for the Full-size, Half-size, and ContinuuMini 26
6. Operating the Continuum Fingerboard 27
  6.1. Turning On the Continuum Fingerboard 27
  6.2. Playing the Continuum Fingerboard 28
  6.3. Mono (Multiple Fingers Combined Create a Single Note) 30
  6.4. Rounding, Pitch Tables, and the Pitch Table Editor 33
  6.5. Pedal Jacks 36
  6.6. Kenton Mini Controller and Kenton USB Midi Host 37
  6.7. Arturia BeatStep 40
  6.8. Ankorage Continuum Remote Continuum Kiosk 42
7. Calibration of the Continuum Fingerboard 43
8. Introduction to the Haken Editor 45
  8.1. Setting up the Haken Editor 46
  8.2. Using the Haken Editor 48
  8.3. Haken Editor Shortcuts 50
  8.4. Current Preset and Selecting System Presets 51
  8.5. Open and Save User Presets in the Editor 52
  8.6. User Preset Slots and Preset Groups 52
  8.7. Open a Preset Group File 54
  8.8. Save a Preset Group File 54
  8.9. CEE Combination Presets 56
  8.10. Designing Sounds for the Continuum Fingerboard and ContinuuMini 57
9. Introduction to the Overlay Strip 60
10. Configuration Options (via Haken Editor and Overlay Strip) 61
  10.1. Gain 62
  10.2. Internal Sound (Load System Preset) 62
  10.3. Midi Program, Midi Routing 63
  10.4. CVC 65
  10.5. Polyphony 65
  10.6. Channel (Note) Priority 66
  10.7. X Bend 67
  10.8. Y Control 68
  10.9. Z Control 68
  10.10. Midi Note Processing 69
  10.11. Middle C 70
  10.12. Split Point and Split Mode 71
  10.13. Mono Function and Mono Interval 73
  10.14. Round Initial, Normal Rounding, Release Rounding, Rounding via Y 74
  10.15. Round Rate 75
  10.16. Tuning (Select Pitch Table) 76
  10.17. Pedal 1 and Pedal 2 77
  10.18. Pedals Min and Max 77
  10.19. Options 79
  10.20. Send 80
  10.21. Load and Store (User Preset Slots) 80
  10.22. Cogwheel Menu: Global Settings, Kenton Settings, Pitch Table Editor, User Guides, Editor Shortcuts, Barrel Styles, List of System Presets, About 81
  10.23. Surface Display 82
  10.24. Pitch Trim 83
11. Loading New Firmware into the Continuum Fingerboard or ContinuuMini 85
12. Connecting to External Hardware and the Editor 86
  12.1. Analog Audio Only 86
  12.2. Digital Audio 87
  12.3. Analog Audio and CVC 88
  12.4. Digital Audio and CVC 89
  12.5. Analog Audio and CEE 90
  12.6. Digital Audio and CEE 91
  12.7. Analog Audio, CVC and CEE 92
  12.8. Digital Audio, CVC and CEE 93
  12.9. Connecting a Softsynth 94
  12.10. Connecting to Kyma (Mac) 95
  12.11. Connecting to Kyma (PC) 96
  12.12. Connecting Midi Keyboard, Continuum and Kyma (Mac) 97
  12.13. Connecting Midi Keyboard, Continuum and Kyma (PC) 98
  12.14. Connecting to External Midi Synthesizer 99
  12.15. Connecting a Kenton Controller with Computer 101
  12.16. Connecting a Kenton Controller Standalone (No Computer) 102
  12.17. Connecting a BeatStep with Computer 103
  12.18. Connecting a BeatStep Standalone (No Computer) 103
13. Hardware Maintenance for the Continuum Fingerboard 105
  13.1. Cleaning 105
  13.2. Surface Alignment 105
  13.3. Continuum Fingerboard Hardware Problems 106
  13.4. Sensor Stuck On, or Sensor Intermittently Turn On 107
  13.5. Sensor Stuck Off – Marking a Flawed Sensor 107
  13.6. Clearing the Flawed Sensor List 108
  13.7. Factory Calibration of the Continuum Fingerboard 108
  13.8. Do-It-Yourself Repairs and Adjustments 108
14. Performance Controller Assignments 109
  14.1. Sending Midi Performance Values to the Continuum Fingerboard 109
  14.2. Receiving Midi Performance values from the Continuum Fingerboard 109
  14.3. Assignments 109
15. Configuration Controller Assignments 111
  15.1. Load, Store, and List Presets 111
  15.2. Midi Device Compatibility 113
  15.3. X, Y, and Z Coding 113
  15.4. Rounding and Pitch Tables 114
  15.5. Polyphony, Routing, and Split 115
  15.6. Pedals (see also Section 14) 116
  15.7. Mono Function 116
  15.8. Firmware Version and CVC Serial Number 117
  15.9. Other Configuration Controller Assignments 117
16. Using the ContinuuMini 119
  16.1. Connecting Up 120
  16.2. The ContinuuMini Seven Segment Display 122
  16.3. Preset Display 123
  16.4. Connecting to the EaganMatrix (Haken Editor) 124
  16.5. Playing the ContinuuMini 125
  16.6. Octave Buttons and ContinuuMini Range 127
  16.6. Menu Mode Options and Preset Selection 128
  16.7. CVC Connection and Setup (Used with "I2C" setting = 1) 133
  16.8. Pitch Reference 136
  16.9. Continuum vs. ContinuuMini Presets and Usage 137
  16.10. Use of Pedals and System Presets on the ContinuuMini 138
  16.11. Error Codes 139
  16.12. Using the ContinuuMini in Parallel with a Half or Full Size Continuum 140
  16.13. Playing the ContinuuMini from an External MIDI Controller Through EaganMatrix 140
  16.14. Monophonic vs. Duophonic vs. Polyphonic MPE ContinuuMini Operation 142
  16.15. Playing the ContinuuMini from the Continuum 146
  16.16. Playing the Continuum from the ContinuuMini 147
  16.17. Playing the ContinuuMini from Other MPE and non-MPE MIDI Instruments/Controllers through the EaganMatrix - Use Cases 147
  16.17. Playing the ContinuuMini Directly from Another Source 149
  16.18. Connecting the Anckorage Spring Sound App to the ContinuuMini 150
  16.19. Recording the ContinuuMini with a DAW for processing and playback 152
  16.19. ContinuuMini Troubleshooting Use Cases 154

# Overview of the Continuum Fingerboard



## The Playing Surface

The Haken Audio Continuum Fingerboard tracks the position and pressure of fingers on its playing surface. Unlike a Midi keyboard, which only starts and stops notes, the Continuum Fingerboard lets the performer intimately interact with the sound throughout every note, breathing life and expression into the musical performance.

The Continuum Fingerboard is neither an easy-to-use gadget nor a device for replacing electronic or acoustic instruments; instead, it is a new instrument in its own right, with immediate appeal as well as lifelong challenges for the serious musician.

The Continuum Fingerboard has a built-in synthesizer specifically designed for Continuum playing. The internal synthesizer has predefined sounds as well as the ability to create user-defined sounds. Stereo output from the internal synthesizer can be heard through the high quality analog output (stereo line level and headphone level) as well as the AES digital audio outputs.

The Full-size and Half-size Continuum Fingerboards share the same sensing technology and differ only in playing surface size. The ContinuuMini is a much smaller device, sharing the same synthesis technology but simplified finger sensing. The ContinuuMini can track the pitch of only one or two fingers.

The Haken Editor application (for Mac and Windows), connects to the Continuum Fingerboard via Midi. The Continuum Fingerboard performance data can control external synthesizers via Midi, or analog modular synths via the Continuum Voltage Converter.

## The EaganMatrix

The EaganMatrix is the modular digital synthesizer built into the Continuum Fingerboard and ContinuuMini.

For the Performer: Many new sound algorithms have been finely crafted with the EaganMatrix. These EaganMatrix Presets exploit the unprecedented control possible with the Continuum Fingerboard. They provide the performer with an ever-increasing set of sophisticated sound environments to shape and explore using novel finger techniques.

For the Sound Designer: Not only does the EaganMatrix provide a large number of new presets for the performer, it is also a fantastic tool for the sound designer. The Haken Editor provides the EaganMatrix user interface. Since the EaganMatrix requires no external synthesizer, sound designs can easily be shared with other Continuum Fingerboard players. The radically new design of the EaganMatrix requires the sound designer to think in a mathematical way that is different from traditional hardware and software synthesizers. As the sound designer masters the EaganMatrix, its new capabilities will allow creation of musically satisfying relationships between fingers on the playing surface and the sounds produced, relationships that rival the warmth and complexity of acoustic instruments.

For more information, please see the EaganMatrix User's Guide available in the Resources area at www.HakenAudio.com.

## What Sets the Continuum Fingerboard Apart

The Continuum Fingerboard has been under development since the 1980s, culminating in the Continuum Fingerboard with Light Action. In recent years, the idea of "Expressive Controllers" and "Expressive Midi" have been popularized, and many devices based on inexpensive sensing technologies have hit the market. As a result, there is much confusion of the capabilities of the Continuum Fingerboard compared to other "Expressive Controllers".

These are five key features of a Continuum Fingerboard with Light Action that set it apart from other "Expressive Controllers":

1. The Continuum Fingerboard has unparalleled temporal resolution. This means it has quick response to user actions. The Continuum Fingerboard hardware does a complete scan of all of its sensors several times per millisecond, and this is evident in the resulting sound when a skilled player performs well-designed presets.

2. The Continuum Fingerboard has unparalleled pressure resolution. The pressure resolution is up to 15 bits in long sustained notes, allowing tiny pressure-related timbre changes, and detailed pitch trajectories in pressure-weighted portamentos, not possible on any other electronic instrument.

3. The most important part of a note (from a psychoacoustic perspective) is the attack. On the Continuum Fingerboard, the detailed pressure trajectory of the finger is tracked and reported, and the details of the attack shape allow an experienced player to intricately control the sound in that all-important part of each note. Other "Expressive Controllers" encode the attack as a single 7-bit number, called the "strike value." This 7-bit "strike value" is used to trigger envelopes; the fine structure of the real attack is lost, and attack details are automated just as they are with Midi keyboards. In contrast to this single value, the Continuum evaluates a high speed stream of surface data which can effectively encode the complex trajectory of an attack.

4. On the Continuum Fingerboard, you can roll your finger slightly to create beats in intervals, or make the beats melt away. Precise pitch requires accuracies of position (center of finger) of about 30 microns, or put another way, accuracies to 1/500th of a semitone. The Continuum Fingerboard alone makes it possible to play each note with this micro-tuned pitch accuracy from beginning to end. The Continuum Fingerboard alone allows for perfect fifths, perfect fourths, exact major thirds, etc. (standard performance technique in acoustic string instruments and vocal choral ensembles) — exact finger placement allows a skilled performer to play all intervals in a piece with perfect frequency ratios or slide in and out of perfect ratio during notes. We have become accustomed to the strictly quantized 12-pitches-per-octave music in the synth world, but any good singer, string player, woodwind player, etc. adjusts each note's pitch to fit what is going on.

5. The EaganMatrix synthesizer developed for the Continuum Fingerboard is far beyond any other synthesizer in how it uses finger information to affect the sound. Other "Expressive Controllers" use standard synth designs with simple parameter mappings (both in their own device and in controlling other third party synths) but those cannot give the depth of interaction between the finger motion and the sonic result that is possible with the EaganMatrix. In acoustic instruments, performer's motions have a complicated effect on the timbre, and this is much of what makes an acoustic instrument interesting to listen to for many hours. Nobody would listen to a single synth patch for very long if there is no interesting fine-structure control, it gets boring quickly, and synths make up for this shortcoming by playing lots of different timbres. Other "Expressive Controllers" do not solve this problem as well as the Continuum Fingerboard does.

Conventional wisdom assumes fast live performance is not possible on a continuous pitch instrument like the Continuum Fingerboard, because it is too difficult to place fingers accurately quickly enough. This is incorrect; please see Section 3. Playing fast passages as well as playing slow passages expressively on a Continuum Fingerboard will require much practice. An acoustic instrument requires extensive skills and musicianship to create an expressive performance; it should be expected that the same is true for an electronic instrument. The Continuum Fingerboard should not be seen as a way to replace other instruments or to "make it easy" (thereby deskilling the musical performance process); the Continuum Fingerboard has been designed to give the skilled performer the depths of expression and capabilities found in a fine acoustic instrument.

# Haken Audio Hardware



## The Continuum Fingerboard

The Continuum Fingerboard has been under continual development since the 1980's. Early versions used many different sensing technologies. By the 1990's experience showed that an electromechanical system involving magnetic technologies provided the most accurate way to track tiny movements of multiple fingers. By the early 2000's, the nylon-manufactured-into-neoprene over the electromechanical sensing system was found to give the best surface feel and consistent tactile feedback. Five years later, Continuum Fingerboards incorporated a custom-designed DSP board to scan the sensors, synthesize internal sounds, and do I/O.

In more recent years all Continuum Fingerboards incorporate a "Light Action" playing surface, made possible by a combination of state-of-the-art sensor technologies (super-sensitive Hall-effect sensors), as well as state-of-the-art precision-machined mechanical components, underneath the layer of neoprene. Continuum Fingerboards with "Classic Action" were already the most sensitive electronic instrument in existence. The "Light Action" playing surface has extended the Continuum Fingerboard's pressure sensitivity, pitch accuracy, and temporal resolution even further.

Since the middle of 2016, new Continuum Fingerboards are shipping as "L2x" (Light Action with a double-processing-power DSP), or as "L6x" (Light Action with CEE for a total of three double-processing-power DSPs). As of late 2018, ContinuuMinis are shipping as "M2x". Other configurations are possible, such as the "C1x" (Classic Action with single-speed processor, no longer manufactured).

What is in a particular Continuum Fingerboard can be identified by running the Haken Editor and noting the System Identifier. This System Identifier, L5x, can be decoded as: L: Light Action, and 5x: Total processing power. The 5x processing power reflects an addition of a Continuum EaganMatrix Expander (CEE) with two 2x DSPs to a Continuum Fingerboard with an internal 1x DSP. Although not necessary for the enjoyment of working with the Continuum Fingerboard, its DSP power can be enhanced as outlined in Section 2.2.

## The Continuum EaganMatrix Expander (CEE)

The Continuum Fingerboard contains a single Digital Signal Processor (DSP), which computes the internal sounds. Haken Audio's Continuum EaganMatrix Expander (CEE) provides two more DSPs for sound computations, thereby significantly increasing the polyphony of EaganMatrix presets. This increased polyphony is especially useful for EaganMatrix presets that require polyphony greater than the number of fingers simultaneously touching the surface, such as percussive sounds with releases that continue long after the finger is lifted from the playing surface.

The CEE is available for Full-size and Half-size Continuum Fingerboards, but not for the ContinuuMini.

Six different DSP system configurations are possible for a Continuum Fingerboard. The Continuum Fingerboard's main DSP can be a 1x processor or a 2x processor. An EaganMatrix Expander adds two more processors; these processors may also be 1x processors or 2x processors.

Polyphony Chart for EaganMatrix Presets (Total Polyphony as a Function of Base Polyphony):

L1x: 1x Continuum, No CEE — Base Polyphony 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8
L2x/M2x: 2x Continuum, No CEE — Base Polyphony 1:2, 2:4, 3:6, 4:8, 5:8, 6:8, 7:8, 8:8
L3x: 1x Continuum, 1x+1x CEE — Base Polyphony 1:3, 2:6, 3:9, 4:12, 5:15, 6:18, 7:21, 8:24
L4x: 2x Continuum, 1x+1x CEE — Base Polyphony 1:4, 2:8, 3:12, 4:16, 5:18, 6:20, 7:22, 8:24
L5x: 1x Continuum, 2x+2x CEE — Base Polyphony 1:5, 2:10, 3:15, 4:20, 5:21, 6:22, 7:23, 8:24
L6x: 2x Continuum, 2x+2x CEE — Base Polyphony 1:6, 2:12, 3:18, 4:24, 5:24, 6:24, 7:24, 8:24

For example, an L5x system would have a polyphony of 15 with a sound that had a Base Polyphony of 3.

Split, Sequential, and Layered Presets: In addition to polyphony expansion for a single preset, the CEE also provides the ability to have two or three different presets loaded simultaneously. The presets may be played with Split, or with Sequential advance to another preset (using a foot pedal) when notes from the previous preset are still held, or with Layering (Sections 8.9 and 10.12). While these multi-preset capabilities may seem important, the primary use of the CEE is to expand computation power for single preset; split and layering is much less important for most Continuum players than for Midi keyboard players, because the primary way to affect timbre on the Continuum is by changing playing style and not by changing presets.

iCEE and xCEE: The iCEE is an EaganMatrix Expander which is internal to the Continuum Fingerboard. Previous to the iCEE, the xCEE was available as an external rack-mountable unit, requiring additional cabling to hook up to a Continuum Fingerboard. From a sound-making standpoint, the iCEE and xCEE are identical, and are referred to as CEE in this User Guide.

## The ContinuuMini

The ContinuuMini has been designed to be a portable and more affordable version of Haken Audio's larger Continuum Fingerboards. The ContinuuMini is fun to play, has the same sound engine as the larger Continuums, and delivers its own unique and rewarding musical performance experience.

The ContinuuMini has exactly the same sound engine as the full-sized Continuum Fingerboard, delivering the same level of sound quality that Continuum owners have come to enjoy.

The playing surface of the ContinuuMini has been designed to translate finger movement from one or two fingers at a time into beautiful musical expression. While based on similar design philosophies as the Continuum Fingerboard, the ContinuuMini has its own unique playing experience. The Mini's playing surface can respond to incredibly light touch, which leverages an underused aspect of human control, the ability of the hand to deliver delicate light touch finger input. Lighter than playing a piano, or strumming a guitar, or even lighter than the action of modern Midi keyboard controllers.

Every nuance of finger movement is captured and translated into sound through interaction with this highly-optimized playing surface. And complete control of the fully programmable EaganMatrix sound engine opens up a world of sonic possibilities.

Due to its robust bidirectional implementation of MPE and MPE+, the ContinuuMini can control external synths or be played by external Midi controllers. The pedal input can be used as a continuous sustain pedal input, for dynamic sustain or a variety of other uses within the EaganMatrix. The pedal input can also function as a bidirectional serial port. Currently this communicates with control voltage convertors, like Haken Audio's CVC or Evaton Technologies microCVC, useful for interfacing with analog modular systems.

Specifics on using the ContinuuMini can be found in Chapter 16.

## The Continuum Voltage Converter (CVC)

Haken Audio's Continuum Voltage Converter is designed for use with analog control-voltage synthesizers. The CVC converts the polyphonic X (pitch), Y (front-back), and Z (pressure) outputs of the Continuum Fingerboard into control voltages and gates. Alternatively, user-defined preprocessed control voltages can be defined with the EaganMatrix. A total of 16 unique continuous voltage streams are available from a CVC.

The CVC may be used as a desktop device, or mounted in a standard 19 inch rack with optional rack ears.

For more information, please see the CVC User's Guide available in the Resources area at www.HakenAudio.com.

# Historical Context

Electronic music history can teach us about greater possibilities that are different from what current Midi instruments offer. Rather than discount historical instruments as "old", Haken Audio endeavors to revive lost skills and ideas, and build on them.

The two historical electronic music instruments most like the Continuum Fingerboard are the Ondes Martenot and the Trautonium. Like the Continuum, both the Martenot and the Trautonium have continuous pitch capabilities, and both have pitches arranged horizontally with constant cents-per-inch spacing.

The Martenot can only play one pitch at a time when it is played in continuous-pitch mode. The Continuum extends this to polyphonic continuous-pitch playing. Unlike the Martenot, where the right hand controls pitch and the left controls articulation, on the Continuum each finger controls both pitch and articulation of a note.

The Trautonium has two monophonic continuous-pitch manuals, and the right and left hands can play simultaneously on each manual. The Continuum extends the Trautonium's dual polyphony to higher polyphony; on the Continuum each finger can play its own note on the super-sensitive multi-touch surface. The ContinuuMini is more limited than the Continuum, and closer to Trautonium in implementation.

## Touche

A Martenot player controlling amplitude with the left hand and continuous pitch with the right. The left hand is pressing the Martenot's Touche; the right hand is in front of the keyboard, moving the Martenot's ring for continuous pitch changes.

In certain performance situations, the Martenot's separation of right hand (pitch) and left hand (articulation) is advantageous. For such situations, the Continuum supplies "Touche" capabilities. The Touche on the Continuum is a small user-definable area on the surface set aside for left hand articulation control; the rest of the surface is for playing notes. The articulation for each note may be totally controlled by the Touche, or articulation may be controlled by a combination of the Touche and the fingers of the right hand.

Since playing Continuum with Touche is very different from playing without Touche, sounds are specially designed for use with the Touche. A performer can use the Touche when playing polyphonically — the left hand affecting articulation for all the notes played with the right hand.

The Continuum's Touche is more sophisticated than the Touche on the Ondes Martenot; the Continuum's Touche responds more quickly, is more accurate, and can control sound parameters in more complex ways. The Continuum Touche area can be placed anywhere on the Continuum surface, allowing for easy left or right handed control.

The Touche area is typically 5 semitones and is typically placed at the lowest end of a half-sized pitch area.

## Fast Continuous-Pitch Playing

The Trautonium pioneered fast duo-phonic playing in a continuous-pitch electronic environment. This is a challenge, because continuous-pitch instruments require accurate finger placement, and it is hard to place fingers accurately while playing fast passages that cover several octaves. Oskar Sala overcame this problem, as you can hear in his magnificent Trautonium performance of Genzmer's Rondo in 1940.

The same techniques Oskar Sala used to play fast passages can be used on the Continuum Fingerboard, by a performer willing to practice extensively and attain advanced playing skills. Oskar Sala's technique is built on three ideas:

(1) Fingers are positioned for a major scale; the left-hand pinky is on the tonic of the scale. This could be any major scale; all major scales have this same spacing between fingers. To change major scales, the hands only need to be moved left or right to a different tonic. Since 7 fingers are required for the 7 notes in an octave, this technique requires both hands to cover an octave (5 fingers will not suffice).

(2) The performer 'parks' fingers in position for the micro-tuned pitches of one octave and can play any note in that octave without moving the hands. The hands stay in one position for the duration of the fast passage; only vertical finger movement is required to play each note in the passage. Octaves are switched with a Tri-Value pedal. The Tri-Value pedal has three positions: at rest, up one octave, and down one octave. The Continuum Fingerboard's Tri-Value pedal is a custom-wired Linemaster 476-S (please contact Haken Audio if you are interested!). The Continuum improves on the Trautonium by requiring much less vertical finger motion to play a note, much finer and faster articulation control, and higher polyphony — at the same time inheriting the Trautonium's capability of playing super-fast continuous-pitch passages.

(3) For uniform dynamics within the super-fast passage, use the "Legato TZ" mono mode (see Section 6.3).

# Midi Encoding



## Encoding Principles of the Continuum Fingerboard

The Continuum Fingerboard assigns each finger on the playing surface its own Midi channel. By default it tracks 8 fingers, using Midi channels 1-8. It may be configured to track between 1 and up to 16 fingers by using all 16 available Midi channels, 1-16. The ContinuuMini tracks the pitch of at most two fingers and is encoded in a similar way to the Continuum.

The Continuum Fingerboard tracks pitch (X), front-back position (Y), and pressure (Z) for each finger. The exact pitch of each finger is encoded as the nearest Midi note number to the initial position of the finger, plus the Pitch Bend on the finger's Midi channel. Note numbers range from 15 to 109 on a full-size Continuum Fingerboard, and from 39 to 85 on a half-size Continuum Fingerboard. Note number range can be changed by transposing or scaling the range of the Continuum Fingerboard. This is accomplished by selecting a new Middle C location (Section 10.11) or a custom Pitch Table (Sections 6.4 and 10.16).

The default Pitch Bend range is eight octaves. The default encoding for finger pressure uses Midi Channel Pressure, and the default encoding for front-to-back uses Midi controller 74 (Brightness).

The Continuum Fingerboard's Midi encoding can follow the "Multidimensional Polyphonic Expression" (MPE) standard. As per the MPE standard, the Continuum uses controller 127 on channel 1 to specify polyphony, RPN 0 on channel 2 to specify bend range, and channels 2 through P+1 for notes (P is the polyphony). MPE is very similar, but not exactly the same as, the Continuum Fingerboard's encoding that dates from 2001.

You can customize the Continuum Fingerboard's Midi encoding if you are controlling a synth that does not support MPE. For example, you might configure Z as Midi controller 11 (Expression) rather than Channel Pressure. Also, you can configure the Continuum to use 14-bit MPE encoding (Section 10.9).

Continuum Fingerboard configuration changes may be made three ways: using the Haken Editor computer application (Section 8), using the Continuum Fingerboard's playing surface (Section 9), or by sending Midi configuration messages to the Continuum Fingerboard (Section 15).

## Connecting an External Midi Synthesizer

In addition to playing internal sounds, you may want to connect your Continuum Fingerboard to an external Midi synthesizer. If your Midi synthesizer can do the "MPE" standard, simply load one of the MPE or MPE+ System Presets (in the "Midi" category of System Presets) in the Continuum, and set your Synthesizer to use MPE, and it should work.

In practice, many synthesizers do not support MPE. To play polyphonically, the externally connected synthesizer should be capable of creating channelized voices, that is, Midi voices that are on discrete Midi channels. On some synthesizers this is called Multi-Timbral Mode. A requirement for the Continuum Fingerboard is that this multi-timbral aspect extends to any continuous controller that the Continuum is sending out to the synthesizer. Each continuous controller must affect only its own Midi channel and cannot affect other Midi channels.

Each Continuum Fingerboard note contains channelized information in the X, Y, and Z directions, and that includes Midi Note information and continuous controller (Midi cc) information. Example output for a 4-voice polyphony configuration:

Voice 1: X = Midi Note and Pitch Bend on Channel 1, Y = Midi cc74 on Channel 1, Z = Midi cc11 on Channel 1
Voice 2: X = Midi Note and Pitch Bend on Channel 2, Y = Midi cc74 on Channel 2, Z = Midi cc11 on Channel 2
Voice 3: X = Midi Note and Pitch Bend on Channel 3, Y = Midi cc74 on Channel 3, Z = Midi cc11 on Channel 3
Voice 4: X = Midi Note and Pitch Bend on Channel 4, Y = Midi cc74 on Channel 4, Z = Midi cc11 on Channel 4

If the Y/Z setting for the preset is set to MPE or MPE+, the Continuum or ContinuuMini will output on Midi channels 2 to max polyphony set+1, as MPE normally reserves channel 1 for configuration information. Also note that if you press monophonically, repeatedly articulating separate notes, each note will cycle through the available channel polyphony based on the Note Priority set.

If the connected external synthesizer is not capable of this kind of discrete channel operation, then it may not work well with the Continuum in a polyphonic sense. However, it is possible that it could be used very well monophonically; see Section 6.3.

Note that a special Channel 1 processing mode is now implemented if the preset is set to MPE+ or MPE mode for Y/Z. In this mode, the Continuum/ContinuuMini will still output on channels 2 to Max Polyphony +1, but it will accept external input on channel 1. This is particularly useful when connecting an external non-MPE MIDI keyboard to the ContinuuMini which can only output duo-phonically from the playing surface. When connected, the external MIDI keyboard (or sequencer/controller) can play up to eight voice polyphony on the Mini on channel 1.

When you connect your Continuum Fingerboard to your synthesizer, you will need to configure both the Continuum Fingerboard and the synthesizer. The easiest way to properly configure an external synthesizer is to follow these two steps:

(1) Connect your synthesizer through the Haken Editor, so you can use the Editor and your synthesizer at the same time (see Sections 12.9 and 12.14). Make it work predictably and reliably with a polyphony setting of 1 both on the Continuum Fingerboard and the external synthesizer.

(2) Change polyphony on the synthesizer and the Continuum Fingerboard to match the multi-timbral capabilities of your external synthesizer.

For step one, configure your external synthesizer to respond to Midi channel 1. Set the maximum pitch bend range allowed with an equal value for positive and negative value pitch bends (some synthesizers allow different values for the two directions). Set a matching pitch bend range on your Continuum Fingerboard (Section 10.7). Set the Continuum Fingerboard to send a Midi cc value for Z (Section 10.9) to something that will control an amplitude change in the external synthesizer, usually Midi cc11 or Midi cc07. Set Y (Section 10.8) to a Midi cc value that typically controls a timbral shift in the synthesizer.

To confirm that pitch bend has been set up correctly, you can do the following test: Play an octave glissando on your Continuum Fingerboard. Then lift your finger and put it down again at the location where the glissando ended. The pitch you hear should match the ending pitch of the glissando. If it does not, pitch bend ranges are not configured correctly.

Polyphony on an external synthesizer usually means number of simultaneous notes on a single Midi channel. Polyphony for a Continuum Fingerboard means number of Midi channels, each channel with a single Midi note, pitch bend and control values for Y and Z. This is a very important concept to understand. The external synthesizer needs a multi-channel functionality to work correctly.

For wiring information and diagrams, refer to Sections 12.9 and 12.14 of this User Guide.

## Specialized Kyma Encoding

If you use Symbolic Sound Corporation's Kyma with your Continuum Fingerboard, each finger's position and pressure is available in standard Kyma Midi-event values of !KeyPitch (left-to-right position), !KeyTimbre (front-to-back position), and !KeyVelocity (finger pressure). These values continually change as the fingers move. Note that !KeyPitch is Midi note numbers, with a fractional value to indicate exact finger position.

The start of each finger's placement on the Continuum Fingerboard surface is interpreted as a !KeyDown. Kyma will send Midi information back to the Continuum which will automatically configure the polyphony of the Continuum Fingerboard surface to match the currently playing Kyma sound.

Kyma uses the default Continuum Fingerboard cc values for Y and Z and will automatically configure the Continuum accordingly.

It may be useful to smooth !KeyVelocity (finger pressure) when you use it in Kyma. Undesirable audible effects can be caused by the Continuum Fingerboard's scan rate, or the parameter updates at Midi transmission rate. Continuous event smoothing is available globally within the Kyma system preferences.

To get the quickest real-time response from Kyma, choose the shortest Overall System Delay that works for your Sound (also in the Kyma preferences).

See Section 10.10 for required Kyma-specific configuration, and Sections 12.10 through 12.13 for connection diagrams.

# Specifications

ContinuuMini players may wish to skip to Section 5.2, as section 5.1 is specific to the Full-size and Half-size Continuum Fingerboard.

## Left and Right Panels of the Full-size and Half-size Continuum Fingerboard

Connections are made to the Continuum Fingerboard on both the left end and the right end of the instrument.

Left End of Continuum Fingerboard:
1. LED. Normally dim blue. Changes colour depending on configuration state, via interaction through the Haken Editor or the Red Button (9).
2. Pedal 1 input. Connect a standard passive switch, damper pedal, or passive continuous pedal; see Section 6.5 for pedal details.
3. Pedal 2 input. Connect a standard passive switch, damper pedal, or passive continuous pedal; see Section 6.5 for pedal details.
4. Digital audio input (AES3 format), and a high-speed link from the Continuum EaganMatrix Expander (xCEE).
5. Digital audio output (AES3 format), and a high-speed link to the Continuum EaganMatrix Expander (xCEE).
6. Midi input.
7. Midi output and Continuum Voltage Converter (CVC) control output.
8. Analog audio out, headphone level. TRS Stereo jack.
9. The Red Button, used for configuration procedures when the Haken Editor is not available.

Right End of Continuum Fingerboard:
10. Power plug (110/220v, 50-60hz)
11. Fuse (4 amp)
12. On/Off switch

For detailed connection diagrams showing how to interface the Continuum with the outside world visit Section 12 of this User Guide.

## Hardware Specifications for the Full-size, Half-size, and ContinuuMini

(See hardware specifications table in the original document.)

# Operating the Continuum Fingerboard

ContinuuMini players may wish to skip to Section 6.4, as the next few sections are specific to the Full-size and Half-size Continuum Fingerboard.

## Turning On the Continuum Fingerboard

The Continuum Fingerboard should be placed on a solid stand or table. The stand or table should not move appreciably when vibrato or other finger motions occur on the playing surface. Many performers prefer the Continuum Fingerboard at a slight angle; for ideas please see the description of Edmund Eagan's Continuum Stand in the Accessories area of www.HakenAudio.com.

When you plug in the Continuum Fingerboard and turn it on, the LED should light within a few seconds. If it doesn't, please turn it off and check the power connection and then the fuse. If you repeatedly blow fuses, please contact technical support; this indicates a serious problem.

The Continuum Fingerboard will be slightly warm to the touch if it has been turned on for a while. This is normal and does not indicate a problem.

When you first receive your Continuum Fingerboard, connect the supplied USB-Midi cable between your Continuum and your Mac or PC, and run the Haken Editor (see Section 8 for setup details). Once the Editor is running, refine the surface calibration (see Section 7).

You will want to use high efficiency headphones with your Continuum's headphone jack. Take care when you first put on your headphones; verify that the Gain setting is appropriate. Refer to Sections 8 and 10.1 to learn how to set the Gain. The Continuum Fingerboard's headphone jack is capable of a wide output voltage range and can optionally be used for professional-level audio stereo line level output. (Never plug a mono cable directly into the headphone jack; that would short one channel to ground and potentially damage the headphone circuit.)

We suggest you play with the Continuum Fingerboard's built-in sounds before connecting external synthesizers and get used to the feel and operation of the playing surface.

## Playing the Continuum Fingerboard

Performing on the Continuum Fingerboard is challenging. Like a fretless instrument, you must rely on audio feedback, finger memory and manual dexterity for accurate intonation and expression. You will find that the Continuum Fingerboard requires its own technique, different from any other instrument.

When you play a traditional music keyboard, it is normal to feel the key hit a hard stop as you play a note, even if you are playing quietly. Also, traditional keyboards are usually velocity sensitive. On an instrument like a piano, a single velocity value is associated with the speed of the key movement. In contrast, the Continuum Fingerboard is both velocity sensitive and, more importantly, pressure sensitive. It continually outputs a stream of pressure values. (A continuous stream of velocity values can be derived from the pressure values, since velocity is pressure-change-over-time.) The pressure values continue whenever pressure changes until the note is terminated.

It is unusual to hit the hard stop (or "bottom out") except for the very loudest notes. This distance from zero pressure to maximum pressure is relatively small yet offers an extremely wide range of dynamic possibilities. The lighter the touch you master on the Continuum Fingerboard, the greater the expressive possibilities it will offer you.

Even if you have a refined keyboard technique on a piano or synthesizer you will still need to develop new playing skills to master the Continuum Fingerboard. Don't assume that the Continuum Fingerboard will respond like a pressure sensitive drum pad. The Continuum Fingerboard playing surface has been designed for a finger technique. The human hand is an extremely sensitive input/output device. Thanks to the Continuum Fingerboard's design the performer is free from the greater mechanical forces that are required to actuate a note on an acoustic keyboard instrument like a piano or harpsichord. As such, the mechanical feedback devices inside the Continuum Fingerboard are designed to take advantage of the lighter pressures that a human hand can easily and quickly generate.

A lighter touch will also minimize heat buildup on the fingertips that can be caused by overly aggressive contact with the surface.

As a suggestion, start playing the Continuum Fingerboard with just one note at a time; leave the chords until later. Practice vibrato and dynamic variations. Try to imitate the expressive playing of other performers on other instruments.

A finger's initial contact with the surface is especially important. As with acoustic instruments, your Continuum Fingerboard allows you to shape the first milliseconds of a sound — much more detailed and varied control than provided by other electronic instruments. Much of the skill of an advanced Continuum Fingerboard player involves shaping the fine structure of attacks of sounds.

Chords containing half-step intervals present a particular challenge. When you place fingers closely together (less than 150 cents apart) on the playing surface, the Continuum Fingerboard can have trouble resolving the two fingers. This may result in a smaller pitch interval than you expect, or it may result in a single finger (not two fingers) being detected.

If playing chords with smaller than 100 cent intervals is of interest to you, and if you learn how to program the EaganMatrix or have an external flexible synthesis system, one approach is to have the front-back position enable an octave shift in your synthesis system. This will allow you to play tiny intervals and unisons by placing fingers an octave apart at the front and back of the playing surface. Another approach is to use a Sustain Pedal to build up a tone cluster from several closely spaced pitches that you touch one at a time. A third approach is to use custom Pitch Tables to stretch half steps or repeat surface pitches (Section 6.4).

## Mono (Multiple Fingers Combined Create a Single Note)

The Continuum Fingerboard tracks up to 16 fingers on its playing surface. When multiple fingers are touching the surface, each finger can trigger its own note, or the combination of fingers can correspond to a single note. This latter can be done a variety of ways on the Continuum Fingerboard — using the Touche (Section 3.1), using Lowest Channel Number (abbreviated LCN, Section 10.6) with a custom-programmed EaganMatrix, or, most commonly, using "Mono." Mono is a powerful performance feature unique to the Continuum Fingerboard. It can be used for playing single-note lines with articulation reminiscent of wind instruments, for oscillating back and forth accurately between two pitch centres, for whammy-bar effects, for piano-style glissandi (when used with Round Rate 127, Section 10.15), or for special trills, turns, and other ornamental effects.

These mono functions are beyond the sensing capabilities of the ContinuuMini.

### Mono Functions

The Continuum Fingerboard supplies nine Mono Functions that allow you to process the combination of multiple fingers different ways. For the description below, we will assume Mono is being used to perform single-note lines with a variety of transitions between notes. If one finger is down, and another is pressed, Mono can convert this into two consecutive single notes with one of the following transitions between the notes:

Portamento: The second note has no attack or decay of its own; instead, it continues with the sustain portion of the first note, but smoothly glides to the new pitch, based on the relative pressure of the two fingers. MIDI Encoding: A highly optimized series of Pitch Bend messages will be used to glide the pitch to the new note.

Legato Z: The second note sounds when the pressure of the second finger exceeds the pressure of the first finger. The second note has no attack or decay of its own; instead, it continues with the sustain portion of the first note, but jumps to the new pitch. MIDI Encoding: When the second finger reaches a pressure greater than the first, a Pitch Bend will be used to jump to the new pitch; no Note Off or Note On will be transmitted.

Retrigger Z: The second note sounds when the pressure of the second finger exceeds the pressure of the first finger. The second note has an attack and decay; it sounds much like it would if the first note had not been played. MIDI Encoding: When the second finger reaches a pressure greater than the first, a Note Off will be transmitted for the first finger, and a Note On for the second finger.

Legato T: The second note sounds as soon as the second finger touches the surface. The second note has no attack or decay of its own; instead, it continues with the sustain portion of the first note, but jumps to the new pitch. MIDI Encoding: As soon as the second finger touches the surface, a Pitch Bend will be used to jump to the new pitch; no Note Off or Note On will be transmitted.

Retrig T: The second note sounds as soon as the second finger touches the surface. The second note has an attack and decay; it sounds much like it would if the first note had not been played. If the second finger is lifted before the first, the pitch jumps back to the first finger's pitch. MIDI Encoding: As soon as the second finger touches the surface, a Note Off will be transmitted for the first finger, and a Note On for the second finger. Then, if the second finger is lifted before the first, a Pitch Bend will be used to jump back to the first finger's pitch.

Retrig TL: The second note sounds as soon as the second finger touches the surface. The second note has an attack and decay; it sounds much like it would if the first note had not been played. If the second finger is lifted before the first, the first note re-attacks. MIDI Encoding: As soon as the second finger touches the surface, a Note Off will be transmitted for the first finger, and a Note On for the second finger. If the second finger is lifted before the first, a Note Off will be transmitted for the second finger, and a new Note On will be transmitted for the first finger.

Legato TZ: The second note sounds as soon as the second finger touches the surface. The second note has no attack or decay of its own; instead, it continues with the sustain portion of the first note, but jumps to the new pitch, and uses the max pressure of the two fingers. MIDI Encoding: As soon as the second finger touches the surface, a Pitch Bend will be used to jump to the new pitch; no Note Off or Note On will be transmitted. The dynamics will be controlled by the highest pressure finger.

Retrig TZ: The second note sounds as soon as the second finger touches the surface. The second note has an attack and decay; it sounds much like it would if the first note had not been played. If the second finger is lifted before the first, the pitch jumps back to the first finger's pitch, and uses the max pressure of the two fingers. MIDI Encoding: As soon as the second finger touches the surface, a Note Off will be transmitted for the first finger, and a Note On for the second finger. Then, if the second finger is lifted before the first, a Pitch Bend will be used to jump back to the first finger's pitch. The dynamics will be based on the highest pressure finger.

Retrig TLZ: The second note sounds as soon as the second finger touches the surface. The second note has an attack and decay; it sounds much like it would if the first note had not been played. If the second finger is lifted before the first, the first note re-attacks, and uses the max pressure of the two fingers. MIDI Encoding: As soon as the second finger touches the surface, a Note Off will be transmitted for the first finger, and a Note On for the second finger. If the second finger is lifted before the first, a Note Off will be transmitted for the second finger, and a new Note On will be transmitted for the first finger. The dynamics will be based on the highest pressure finger.

### Fingers Pressure and Mono Transitions

Mono transitions can be controlled by finger pressure or by time. If one finger is pressed down, and then a second is pressed down in addition to the first, the transition is as follows:

Portamento: The transition begins when the second finger touches the surface (the pitch glide begins), and ends when the first finger is lifted (the pitch glide is completed). The pressure of each finger, as well as the pitch of each finger, determines the pitch played during the transition. Long and short transitions may be performed under control of finger pressure, without changing any externally configured parameters. The pitch glide rate may vary within a single transition, depending on how the performer adjusts the relative finger pressures. If many fingers are down, the pitches and the pressures of each finger are combined to compute the total pitch. The variable nature of this pitch glide allows the performer to create complex glide curves that would be difficult if not impossible to program into a conventional synthesizer.

Legato Z and Retrigger Z: The transition occurs when the second finger reaches a higher pressure than the first. If many fingers are down, the finger with the highest pressure is played; if fingers are changing pressure, transitions occur whenever a new finger becomes the finger with highest pressure.

Legato T, Retrig T, Retrig TL: The transition occurs as soon as the second finger touches the surface. If many fingers are down, the last finger to touch the surface is played.

Legato TZ, Retrig TZ, Retrig TLZ: The transition occurs as soon as the second finger touches the surface. If many fingers are down, the last finger to touch the surface is played. The dynamics are based on the highest pressure finger. This mode is especially useful for fast playing with the Tri-Value Pedal (Section 6.5).

### Activating Mono Functionality

Mono is active in the following three situations:

(1) The Continuum Fingerboard has polyphony 1. Multiple fingers are tracked, but only one note at a time is played on the synthesizer. Only single-note lines can be played, with Mono transitions between the notes.

(2) The Continuum Fingerboard has polyphony greater than 1, but the surface is split so that only one voice is assigned to a range of pitches. Within that pitch range, Mono is used, and only single-note lines can be played in that range.

(3) Polyphony is greater than 1, and the Mono Interval (the pitch interval within which single-note transitions will occur) has been configured. If the second finger is within the Mono Interval of the first finger, a single-note line will be played. If the second finger is outside the Mono Interval of the first finger, multiple notes will sound at once. This feature can be selectively enabled and disabled during a performance using the Mono Switch pedal, allowing a performer to play (for example) both mono mordents and polyphonic mordents.

## Rounding, Pitch Tables, and the Pitch Table Editor



### Rounding

The Continuum Fingerboard and ContinuuMini include a sophisticated mechanism to quantize finger positions to predetermined scale grids ("Pitch Tables"), such as Equally Tempered or Just tunings. It allows you to place fingers with positional errors, and still hear a note (or a chord, if you are playing polyphonically) that corresponds to perfectly placed fingers. You may then slide your fingers (glissando) to new positions; the notes will glide in pitch to the new finger positions, and then they will be corrected. When finger positions are corrected, we refer to this as "rounding the finger position". Finger position may be corrected when the finger first touches the surface (Round Initial), and after the finger slides on the surface (Round Rate).

The Round Rate mechanism works in such a way as to not diminish the expressive possibilities of subtle pitch changes like vibrato (periodic variation in pitch), grace notes (small glissandi) or large pitch sweeps. For instance, if a note is played with vibrato, small adjustments will be made so that the averaged finger position (and the perceived pitch) is precisely correct.

The Round Rate mechanism allows you to control the rate at which finger position correction drifts toward the currently active Pitch Table, anywhere from instantaneous to glacial (minutes long). A Round Rate of 0 means no rounding; small Round Rates cause a slow drift to grid positions; larger rates round more quickly. The maximum Round Rate of 127 causes immediate rounding; with this rate you will get a fretted guitar style half-step glissando when you slide a finger over adjacent grid positions.

The Round Rate mechanism not only corrects finger position while the finger is in contact with the surface, it continues to correct even after the finger is lifted from the surface (during the release portion of the note).

The Round Rate can be modified at any time during a performance. You can configure the Round Rate (Section 10.15) using the Haken Editor or the Configuration Strip. You can also change the Round Rate using pedals or Midi In (see Section 14).

### Pitch Table

The Continuum Fingerboard allows you to choose Pitch Tables for Just tuning, equal tuning, N Division tuning, and user-defined custom Pitch Tables for correcting finger positions via Rounding.

In the Just tuning, any of the major triads (I, IV, V) will have perfect 4:5:6 frequency ratios in the rounded finger position, and the ii and vi minor triads will have perfect 10:12:15 frequency ratios. You can change the tonic key for the tuning at any time, even while fingers are pressing on the Continuum Fingerboard's playing surface; the Round Rate mechanism will correct the positions of those fingers to the new tuning. As in equal temperament tuning the time the tuning rounding takes is dependent on setting of Round Rate.

N Division tuning rounds the surface to a number of divisions of each octave on the playing surface, based on all the C pitches. For instance, an N Division setting of 1 will round every finger position to the closest C note. An N Division setting of 2 will round each finger to the closest C or F#, whichever is closest. An N Division setting of 24 will round each finger to the closest quarter step.

### Disadvantages of Rounding

Ideally, the Continuum Fingerboard is played without the idea of a predetermined scale. A skilled violinist is not constrained to pitches from a particular scale during a performance; instead, the violinist micro-adjusts the pitch of each note for optimal harmonic musical results. Similarly, a skilled Continuum player is constantly listening and adjusting finger position to obtain the desired results and does not rely on the Round Rate mechanism to make up for inability to place fingers properly.

For beginners, the Continuum's Rounding feature seems to be helpful, but the short-term convenience will eventually have long-term consequences. Important finger placement, muscle memory, and listening skills will be compromised. A Continuum player that requires Round Rate is a bit like a singer that requires auto-tune to sing in tune. The exception would be in playing a preset that has a pitch centre that is indeterminate, like an ensemble of strings or voices.

### Release Rounding

Release Rounding is different from the Continuum's other Rounding mechanisms. Release Rounding limits the effect of Round Rate so that it only adjusts pitch once a performer's finger is lifted but has no effect while the finger is touching the surface. Once the finger is lifted from the Continuum's surface and the note is still sounding through a release envelope, a performer can no longer correct an "out of pitch" note. Release Rounding is valuable for timbres which are plucked and have a long release after the finger is lifted, such as the Continuum's internal sound "Metal Bar." Release Rounding may be of interest to Continuum players who otherwise avoid the Round Rate mechanisms.

### Rounding via Y Position

Rounding via Y Position allows a variable amount of finger position correction, depending on the front-to-back placement of a finger on the surface. If the loaded preset does not use Y for timbral control, Rounding via Y Position can be a convenient way to use finger position correction as-needed for certain notes in a performance. During practice sessions, Rounding via Y Position provides a convenient way to rely less and less on rounding: as a player's proficiency at placing fingers accurately improves, the player can gradually change Y position to reduce automatic finger position correction. See Section 10.14 for details.

### Pitch Table Editor: Simple and Radical Uses

A graphical Pitch Table Editor (PTE) and its User Guide are available in the Cogwheel menu (Section 10.22). The PTE is for creating custom downloadable Pitch Tables and was written by Continuum Fingerboard player Pablo De La Loza. The PTE can be used for creating Pitch Tables for use with Rounding, or for radically pitch-warping the playing surface. For example, the PTE allows you to define Pitch Tables that stretch or shrink the size of octaves or repeat or reverse the same pitches at different points on the surface.

## Pedal Jacks

Continuum Fingerboards have two quarter inch pedal jack inputs, located on the left end next to the digital interface. ContinuuMinis have a single eighth inch pedal jack that requires a Hosa MHE-100.5 (or equivalent) adapter. The pedal jacks have been tested with Yamaha FC3, FC4, FC5, and FC7 pedals. Many of the parameters to control with pedals are continuous parameters, so the FC3 and FC7 are recommended as they have continuous output values. Using a pedal jack is equivalent to sending the corresponding Midi controller value to the Continuum Fingerboard's Midi In (see Section 14), except the pedal jack has higher precision.

Yamaha FC7: Continuous data values from 0 to 127. This pedal's "dual zone" feature requires additional pressure to reach the highest output values; this feature can be disabled with the pedal's adjustment screw. The pedal's range can be reduced and/or reversed, using the Haken Editor's Pedal Min/Max settings (Section 10.18). The EaganMatrix and CVC read this pedal with high accuracy; Midi accuracy is limited to 7 bits. Use: A sweepable pedal from 0 to 127, with the ability to stay at a non-zero point when the foot is removed (used by many of the EaganMatrix system presets as Pedal 2).

Yamaha FC3: Continuous data values from 0 to 127. This range can be reduced and/or reversed, using the Haken Editor's Pedal Min/Max settings. The EaganMatrix and CVC read this pedal with high accuracy; Midi accuracy is limited to 7 bits. Use: As a traditional sustain type pedal action, with the added benefit of a sweepable range from minimum to maximum. Returns to zero when the foot is removed (used by many of the EaganMatrix system presets as Pedal 1).

Yamaha FC4: Switch with two values, 0 (off) and 127 (on). Other values for off and on can be selected using the Haken Editor's Pedal Min/Max settings. (When this pedal is detected by the Haken Editor, a picture of the FC5 will appear; the FC4 and FC5 are equivalent.) Use: As a traditional sustain type pedal action limited to switch values. Returns to zero when the foot is removed.

Yamaha FC5: Switch with two values, 0 (off) and 127 (on). Other values for off and on can be selected using the Haken Editor's Pedal Min/Max settings. Use: A compact alternative to the FC4.

Linemaster 476S: Tri-Value pedal, a switch pedal custom-wired by Haken Audio, with three positions: at rest, heel, and toe. The corresponding values generated for each pedal position depend on the pedal's assigned function. Use: Ideal as an Octave pedal (Section 3) or as Advance pedal (Full Advance and Half Advance functions, Sections 8.9 and 14.3).

On the Continuum Fingerboard, Sustain and Sostenuto are continuous controls, allowing for fade and swell of sustained notes. Section 10.17 describes changing the pedal assignments for the jacks; a complete list of pedal assignment options is in Section 14.

## Kenton Mini Controller and Kenton USB Midi Host



### Kenton Mini USB Controller

The Kenton Mini Controller seamlessly integrates with the Continuum Fingerboard. http://www.kentonuk.com/products/items/midicontrol/kmix-mini.shtml

The Kenton Mini Controller provides physical buttons for loading presets from the Continuum Fingerboard's Internal User Preset Slots, and the buttons are lit to indicate which preset is loaded. It also provides physical rotaries for configuration parameters and pedal values, allowing precise setting of parameters. Each rotary has a ring of LEDs that indicates its current value.

When the Kenton Mini Controller is used in conjunction with the Haken Editor, changes made via the Kenton will also be updated on the Haken Editor's screen, and changes in the Haken Editor are reflected by the Kenton's LEDs. The Kenton Settings option in the Editor's Cogwheel Menu (Section 10.22) allows you to customize Kenton functionality. The shortcut for the Kenton Settings window is Command+K (Control+K Windows).

Whenever the Kenton Mini Controller (or any controller for that matter) is used in conjunction with the Haken Editor, its USB cable must be plugged into the computer before launching the Editor.

Mac users: When the Kenton is connected, do not rename the device called "Kenton Killamix Mini" in the AudioMidi setup program. The Editor uses that name to auto-connect to the Kenton controller. Changing the name will cause a failure in the connection routine.

The Kenton functions are: Buttons 1..8 load from Internal User Preset Slots 1..8 (if Button 9 is unlit) or Internal User Preset Slot 9..16 (if Button 9 is lit). Button lights 1..8, together with Button light 9, always indicate which Internal User Preset Slot was most recently loaded.

Kenton default rotary assignments:
1 - Gain level of the internal synthesizer
2 - Tweak mouseover Editor parameter
3 - Internal Sound's recirculator R4 control ("time" control)
4 - Internal Sound's recirculator mix control
5 - Internal Sound Barrel i
6 - Internal Sound Barrel ii
7 - Internal Sound Barrel iii
8 - Internal Sound Barrel iv
9 - Audio In level of the AES3 digital input

Special operations are initiated by pressing the rotaries on the Kenton. Pressing rotary 1 or 2 toggles rotary 1 or 2 respectively to values between 0 and 127. Pressing rotaries 3 or 4 changes which System Preset is selected. Pressing rotary 9 before a button press will store to an Internal User Preset Slot, rather than load.

In some live performance situations, it is inconvenient to have a computer running the Haken Editor. The Kenton Mini Controller together with a Kenton USB Midi Host can be used with a Continuum Fingerboard, without the need of a computer. For a live performance situation, the Kenton Mini Controller provides lights that indicate the most recently loaded Internal User Preset Slot, and physical switches for loading presets; this may be preferable over loading presets using the Continuum's Configuration Strip.

See Sections 12.15 and 12.16 for connection diagrams for the Continuum Fingerboard and the Kenton Mini Controller, with and without the Editor.

## Arturia BeatStep

The Arturia BeatStep (https://www.arturia.com/beatstep/overview) seamlessly integrates with the Continuum Fingerboard. The BeatStep provides physical buttons for loading presets from the Continuum Fingerboard's Internal User Preset Slots, and it also provides physical knobs for configuration parameters and pedal values, allowing precise setting of parameters. Each of its endless rotary knob controls values in a relative mode – twisting to the right increases the parameter value, and twisting to the left decreases the parameter value.

When the BeatStep is used in conjunction with the Haken Editor, changes made via the BeatStep will also be updated on the Haken Editor's screen. Haken Audio provides a configuration file for the BeatStep (in the Third Party folder). When this configuration file is loaded into the BeatStep, each knob has a standard function for use with the Continuum Fingerboard. Haken Audio can provide a plastic overlay for the BeatStep that indicates the function of each BeatStep knob for the Continuum Fingerboard.

The BeatStep and the Kenton have some similar functionality, but unlike the Kenton, the BeatStep does not have two-way communication with the Continuum Fingerboard. On the other hand, the Arturia BeatStep has the advantage that it is much less expensive, and it is simpler to hook up in a standalone situation – the BeatStep comes with a TRS Mini to Midi Din cable to connect between it and the Continuum Fingerboard's Midi In.

See Sections 12.17 and 12.18 for connection diagrams for the Continuum Fingerboard and the Arturia BeatStep, with and without the Editor. Note that BeatStep Pro templates are also available for similar control for both the Continuum and ContinuuMini.

## Ankorage Continuum Remote / Continuum Kiosk

The Continuum Remote is an iPad and iPhone interface for loading presets from the Continuum Fingerboard's Internal User Preset Slots and loading system-defined internal sounds. The Continuum Remote includes graphic readout and touch-based control for sound parameters and pedal values. Unlike the Haken Editor, the Continuum Remote does not provide EaganMatrix editing capabilities. The Continuum Remote is intended for use in situations where an iPad or iPhone is more convenient than a laptop, and sound editing capabilities are not required.

The Continuum Remote is part of Anckorage's SpringSound App, a spring-based physical modeling synthesizer, available for iPad and iPhone through Apple's App Store. The app is designed and programmed by Christophe Duquesne.

The Continuum Kiosk is designed for public Continuum Fingerboard demonstrations. Visitors can use the Kiosk to select from 16 demo timbres and try them out on the Continuum Fingerboard. The Kiosk does not allow any configuration changes, so visitors using the Kiosk require minimal oversight. The Continuum Kiosk is also part of Anckorage's SpringSound app. (The same selection of demo sounds is available in the Haken Editor's Group menu.)

# Calibration of the Continuum Fingerboard

ContinuuMini players may wish to skip this section, as it is specific to the Full-size and Half-size Continuum Fingerboard (the ContinuuMini auto-calibrates on startup).

Before playing the Continuum Fingerboard for the first time, and each time it is transported to a new location, it is important to refine its calibration. A refined calibration avoids "stuck notes". Calibration results are stored in the Continuum Fingerboard's permanent memory, so it is not necessary to refine calibration every time you turn it on. Refine calibration using the Haken Editor (see Section 8) or the Overlay Strip (see Section 9). This Calibration is for the Half-size and Full-size Continuum Fingerboard only, not for the ContinuuMini.

## Refining Calibration using the Haken Editor

Make certain nothing is pressing on the Continuum Fingerboard (no fingers or other objects on the playing surface or frame), then click on the Calibrate Surface menu and choose Refine.

## Refining Calibration using the Overlay Strip

Make certain nothing is pressing on the Continuum Fingerboard (no fingers or other objects on the playing surface or frame). Press and release the Red Button (on the left side next to the headphone jack), then touch the surface at the spot labeled "Calibrate" on the Overlay Strip. Release that spot then touch the Surface at the spot labeled "1". Release that spot; your calibration has been refined.

## Discarding Calibration

This discards all previous calibration data. Discarding the calibration can make the playing surface too responsive, resulting in stuck notes. You can expect stuck notes to occur during the first hour of playing after discarding calibration; it will be necessary to refine calibration (see above) whenever you get stuck notes.

Using the Haken Editor: Click on the Calibrate Surface menu then choose Discard.

Using the Overlay Strip: Press and release the Red Button, then touch at "Calibrate", then touch at "0".

## Light Action

Continuum Fingerboards built after 2012 are capable of Light Action (the default setting), responding to lighter finger pressure than the Medium or Classic Action. Light Action may be selected in the Haken Editor's "Midi and Global Settings" (in the Cogwheel menu, or shortcut Command+G, Control+G Windows).

## Help is Available

If you cannot get a good calibration, please contact Haken Audio for help. A good calibration is vital to a good Continuum Fingerboard playing experience.

# Introduction to the Haken Editor

The Haken Editor is used with the Half-size and Full Size Continuum Fingerboard, as well as with the ContinuuMini. The Haken Editor is an application by Edmund Eagan and Lippold Haken, available for both Mac and PC from the Haken Audio website. Most interaction with the Haken Editor comes from one expandable interface window. In addition to replicating the functionality of the Continuum Fingerboard's Overlay Strip (Section 9), the Editor can also be used to save presets in your computer's file system, and open them later (Section 8.5), and to load new firmware into the Continuum Fingerboard or ContinuuMini (Section 11).

IMPORTANT: Keep the Editor application in the "Haken Editor" folder as supplied by Haken Audio. The Editor refers to other folders in this Haken Editor folder and will not function correctly when moved outside the Haken Editor folder.

Simple Midi cabling for the Haken Editor: This bidirectional communication allows the Continuum Fingerboard to interact with the Editor through a standard USB-Midi cable. The Editor requires a bidirectional Midi communication. For the ContinuuMini, use the USB cable supplied with your ContinuuMini. For the Continuum Fingerboard, use a USB-Midi cable to connect between your Mac or PC and your Continuum Fingerboard. Connect the USB-Midi cable's Out connector to the Continuum's Midi In; connect the USB-Midi cable's In connector to the Continuum's Midi Out. The Haken Editor automatically detects the Roland UM-ONE USB-Midi cable, but other USB-Midi cables will also work, once you configure them in the Haken Editor (see Section 8.1). For other connection examples, please see Section 12.

If you have trouble with your USB-Midi cable:
(1) Try resetting the USB-Midi cable by unplugging and replugging its USB connector.
(2) If you continue to have problems, try connecting your USB-Midi cable through a powered USB hub.

## Setting up the Haken Editor

When you run the Haken Editor for the first time, make sure that you have the before-mentioned bidirectional Midi connection set up. The Haken Editor will not function at all if this is not set up properly. Make sure your Continuum or ContinuuMini is on, then launch the Haken Editor, and wait for the Editor to appear on the screen (takes about 15 seconds). At first launch, the Midi routing in the Editor might be unconnected. To establish this connection, go to Midi and Global Settings in the cogwheel menu.

The Midi Connections area has three pairs of popup menus for routing Midi data:

The "Continuum" connections: Connections from/to the Continuum Fingerboard. If you are using a ContinuuMini or a Roland UM-ONE USB-Midi cable, your Continuum connections will be automatically detected. Otherwise, click on the popup menus to select your connections. Once the input and output connections for the Continuum Fingerboard are correctly made, the LED at the top-left of the main Editor window will change from "off" to "blue".

If the LED does not change from "off" to "blue":
(1) Double-check your cable connections. For a Continuum Fingerboard, the USB-Midi cable's "Out" should be plugged into the Continuum Fingerboard's Midi In, and the USB-Midi cable's "In" should be plugged into the Continuum's Midi Out.
(2) Double-check your popup selections in the Haken Editor's "Midi and Global Settings".
(3) Try resetting the USB-Midi cable by unplugging and replugging its USB connector.
(4) If you continue to have problems, try connecting your USB-Midi cable through a powered USB hub.

The "Kyma" connections: Connection between the Continuum Fingerboard and Symbolic Sound's Paca(rana) hardware via the Editor. If you are running Symbolic Sound Paca(rana) hardware, you can connect to it via Midi or (even better) connect to it using Delora's KymaConnect software. A bidirectional connection between the Paca(rana) and the Continuum is necessary in order for Kyma to communicate information about its currently playing sound to the Continuum Fingerboard. Set to "unconnected" if no Kyma Paca(rana) system is present. (Also see Section 10.10 for a required Kyma-specific configuration option.)

The "ExtDevice" connections: Connections between the Continuum Fingerboard and an External Midi Device via the Editor. The "ExtDevice" connections create a bidirectional communication with a hardware or software synthesizer and the Continuum Fingerboard through the Haken Editor. If you do not have an external synthesizer, set the "ExtDevice" to "unconnected."

Remembering the Midi Setup connection in the Haken Editor: When the Editor is closed, the Midi connections are automatically remembered. When the Editor is reopened it will try to establish connections with the same named Midi ports. Midi devices should be turned on and connected before starting the Editor.

Please see Section 12 for examples showing connections to external hardware.

## Using the Haken Editor

The control types in the Haken Editor are popup menus, dials, toggles, barrels, and sliders.

Barrel (i, ii, iii, iv): Barrels i, ii, iii, and iv are parameters for the currently loaded preset. Click and drag mouse vertically to desired value. Numerical value above each barrel will update as well.

Popup Numerical: Click once to activate popup, click on the desired value to make a selection.

Slider: Click and drag indicator to desired value.

Dial: Click and drag mouse vertically to desired value.

Toggle: Click to toggle value. Red around the toggle means "on", no red ring means "off".

Popup Menu: Click once to activate popup, click on the desired value to make a selection.

Led with Red Halo: Click to change. Shines blue for "on", dark for "off". (Here "Led" refers to small status indicators in the Editor.)

The Haken Editor gets the current configuration from the ContinuuMini or Continuum Fingerboard's internal memory. When the Haken Editor is running, changes made any of these ways will also be updated on the Haken Editor's screen:
- the ContinuuMini's 4-button interface, or
- the Continuum Overlay Strip, or
- the Kenton Mini Controller, Arturia BeatStep, or another external Midi controller.

## Haken Editor Shortcuts

This list of keyboard shortcuts can be found inside the Cogwheel menu of the Haken Editor.

## Current Preset and Selecting System Presets

The "Current Preset" is the preset that sounds when you play on the surface. The Current Preset can be also be edited, saved to disk (Section 8.5), or stored to a User Preset Slot (Section 8.6).

System Presets in the Haken Editor are organized into a number of categories, like Wind, Midi, Synth Pad, etc. To load one of the System Presets into the Current Preset, first select a Category, then select a System Preset within the Category:
1) Click on the red category name (under the word Category) to see a popup list of categories.
2) Select a category in the list; a new popup listing System Presets in the category will appear.
3) Choose a System Preset in the list; it will load into the Current Preset.

## Open and Save User Presets in the Editor

Open from Disk: To open a Preset file on your Mac or PC, choose "Open from Disk" in the Current Preset popup menu, or press Command+O (Mac) or Control+O (Windows), or drag a file from the Finder (Mac) or Explorer (Windows) and drop it onto the Editor's Current Preset popup area. A Preset file holds a complete configuration of the Continuum Fingerboard (except for a few settings that are Global and are common for all presets). You can find Preset files in the Archives folder within the Haken Editor's folder, or anywhere else on your computer where you have previously saved Preset files.

Save to Disk: To save a Preset file on your Mac or PC, choose Save in the Current Preset popup menu, or press Command+S (Mac) or Control+S (Windows). The name you choose for the file will be the preset name and will be reflected in the Haken Editor.

## User Preset Slots and Preset Groups

In addition to opening and saving Preset files on your computer, you can also load and store presets into the 16 Internal User Preset Slots inside your Continuum Fingerboard. It is usually preferable to save Preset files in your Computer's file system (Section 8.5), but when you do not have your computer connected to your Continuum Fingerboard and need access to custom user designed sounds, the Internal User Preset Slots give you access to 16 presets stored internally in your Continuum Fingerboard.

To recall a User Preset from a slot, simply click on the desired User Preset Slot.

To store the Current Preset into a User Preset Slot, shift-click on the target User Preset Slot.

It is also possible to drag and drop a preset (.mid) file directly into any of the 16 User Preset slots. Note that only .mid files created with the Eagan Matrix can be used as this is not a general MIDI file.

## Open a Preset Group File

A "Preset Group" provides a convenient way to load a group of user presets into the User Preset Slots from your computer's file system. A Preset Group can have anywhere from 1 to 16 members. The members of a Preset Group load back into the same User Preset Slots they were saved from. All Preset Groups number from User Preset Slot 1. For instance, a Preset Group consisting of two presets will occupy User Preset Slot 1 and User Preset Slot 2, a Preset Group consisting of 5 presets will occupy User Preset Slots 1 through 5.

To open a Preset Group file on your Mac or PC, choose Open in the Group popup menu, or drag a Preset Group .txt file from the Finder (Mac) or Explorer (Windows) and drop it onto the Editor's Group popup area. A Preset Group file contains a list of User Preset files for the Internal User Preset Slots. When you open a Preset Group file, the Internal User Preset Slots will be updated to contain the presets listed in the Preset Group file. Normally, each Preset Group is in its own folder which contains the Preset Group .txt file as well as all the group member presets (.mid files).

The folder containing the Preset Group can have any name. It does not need to match any of the names of the files inside the folder.

## Save a Preset Group File

To save a Preset Group file onto your Mac or PC, select the last Internal User Preset Slot you want included in the Preset Group file, then choose Save in the Group popup menu. This Save Group option will create the Preset Group file as well as individual Preset files. For example, if you click on the Internal User Preset Slot 5 and then choose Save in the Group popup menu, you will get a Preset Group file that contains the list of Internal User Preset Slots 1..5, as well as 5 Preset files (one for each listed preset). It is best to save each Preset Group in its own folder; that folder will contain the Preset Group .txt file as well as all the group member presets (.mid files).

To avoid accidentally overwriting your Preset Groups with a possible future firmware update it is best not to store the Preset Group folders in the Haken Editor folder.

## CEE Combination Presets

Combination Presets can only be used by Continuum Fingerboards expanded to three DSPs (see Section 2.2). Combination Presets cannot be used by the ContinuuMini.

A Combination Preset consists of two or three presets. When the Combination Preset is loaded, one of the presets in the Combination Preset is assigned to each of three DSPs, referred to as DSP 1, DSP 2, and DSP 3. A Combination Preset can be in one of several flavours, depending on the selection in the Split menu (Section 10.12):

Triple Layer: Three presets are sonically layered (doubled); pressing a single finger plays all three presets at the same time.

Dual Layer: Two presets are sonically layered (doubled); pressing a single finger plays both presets at the same time.

Split between Two Presets: The Continuum surface is split so that one part of the split uses the first preset, and the other part of the split uses the second preset.

Post-processing: The first preset is post-processed by the second preset. The "Processors" system presets category contains presets used for post-processing.

Sequential: Using a Half Advance pedal (Advance pedal with data 64, see Section 14.3), three presets can be sequentially switched so that the current playing preset can seamlessly change to a new preset without a sonic break. Notes held or sustained from the previous preset continue to sound, and new notes will sound using the new preset. In the Split menu, the last option activates this mode. These Presets individually can still be used in a normal, single DSP Continuum, but cannot be seamlessly switched between as on a Continuum Fingerboard with CEE.

To create a Combination Preset, store two or three presets into three consecutive User Preset Slots. Then click on the first of the presets and choose one of the Combination options in the Split menu. The selected preset's name will appear in italics, and whenever it is selected it will have a red border. The following User Preset Slot is indicated by a blue border. If it is a triple-preset combination, the third User Preset Slot is also indicated by a blue border.

When the first preset in a Combination Preset is selected, edits you make in the EaganMatrix only affect that preset, but you will also hear the other presets in the Combination Preset when you play on the surface. After you make edits to the first preset, you must shift-click on the User Preset Slot to save edits. (You will lose edits unless you remember to do this!) If you want to edit the other presets in the Combination, first save any edits you made to the first preset by shift-clicking on its User Preset Slot. Then click on the second (or third) User Preset Slot. When you complete your edits, shift-click in the preset's User Preset Slot to save your edits.

Use the Open Group (Section 8.7) and Save Group (Section 8.8) to open and save Combination Presets. Several example Combination Presets are available in the Group menu.

Important: A Combination Preset will get most of its performance parameters from the first preset in the Combination Preset. This includes settings such as transposition, mono interval, round rate, etc., ignoring the performance parameters that are stored in the second or third preset in the Combination Preset.

Important: To change a Combination Preset back to individual presets, save the parts of the Combination to disk first. Then load the individual preset files.

## Designing Sounds for the Continuum Fingerboard and ContinuuMini

The Continuum Fingerboard and ContinuuMini can be used to control a wide variety of sound synthesis algorithms. The System Presets, and User Preset files prepared by other Continuum players, provide many possibilities. You may also design your own custom sounds in the EaganMatrix or using an external synthesizer. Presets are usually customized specially for Continuum Fingerboard or for ContinuuMini, since the ContinuuMini has a different playing surface and different feel from the Continuum Fingerboard. Please consider the following suggestions when selecting or designing sounds to be used with the Continuum Fingerboard and ContinuuMini.

### The X Direction

The X direction of the Continuum Fingerboard is generally mapped to pitch. The left to right (X) direction is extremely accurate and can be used for accurate continuous pitch creation and pitch effects like vibrato and glissandi. Unless otherwise desired as a specialized effect, avoid synthesis algorithms with built-in vibrato. A performer's finger movements can create far more expressive pitch and amplitude modulations that produce a much more realistic vibrato than what is programmed into the typical sound synthesis patch.

### The Y Direction

The Y direction of the Continuum Fingerboard is generally mapped to a timbre shift. Make good use of the front-back (Y) position available from the Continuum Fingerboard. When deciding what parameters to control by front-back position, keep in mind that the Continuum Fingerboard measures front-back position less accurately than pitch or pressure. The front-back position can provide an important expressive tool for the performer when it is used to control appropriate timbre parameters. All the System Presets in the Continuum Fingerboard utilize Y to some extent. The Eagan Pluck String is a good example of Y usage, as Y is mapped to multiple sound destinations with formulas employing different Y transfer functions.

### The Z Direction

The Z direction of the Continuum Fingerboard is generally mapped to a loudness shift. Use synthesis algorithms that have timbre changes associated with loudness changes. Some sampling synthesizers change only the volume as the performer's finger pressure changes during a note. This limits the apparent dynamic range and expressive possibilities available to the performer.

## Sound Design Principles for the Continuum Fingerboard

Acoustic instruments' timbre changes as the volume changes. Keep this in mind as you design your Continuum Fingerboard sounds. Generally you should use synthesis algorithms that have dynamics controlled by a continuous controller (like expression, volume, or breath). Avoid using Note On key velocity to control dynamics. While the Continuum Fingerboard can be configured to transmit Note On key velocity, it is rarely recommended. Key velocity (sometimes also called Strike in other "Expressive Controllers") is a single discrete value that is determined on the note's attack and discards the fine structure of the attack. For musically interesting and expressive performance, a finger's initial contact with the surface is especially important. Much of the skill of an advanced Continuum Fingerboard player involves shaping the fine structure of attacks of sounds.

For this reason the Continuum Fingerboard (like Midi breath controllers) defaults to transmitting a constant 127 for key velocity and does all dynamic control (for attack and other parts of the sound) in a continuous fashion. Finally, avoid synthesis algorithms that trigger amplitude envelopes on Note On. An apparent 'double trigger' or 'stutter' effect can result: first you hear the amplitude envelope that is triggered when the finger comes in contact with the playing surface, then you hear a second amplitude increase as the performer's finger pressure increases on the playing surface. In most cases only the performer's finger pressure variations should be controlling the amplitude, not a built-in envelope. However, if you find that the sound uses an amplitude envelope that you like and don't want to discard, consider mapping pressure into another controller that does not affect amplitude.

# Introduction to the Overlay Strip

ContinuuMini players may wish to skip this section, as it is specific to the Full-size and Half-size Continuum Fingerboard.

The Continuum Fingerboard's Overlay Strip specifies where to press for each configuration option available from the playing surface.

The Overlay Strip area is divided so that each option and numeric area matches one semitone of Continuum Fingerboard surface. The configuration categories are along the top of the Overlay Strip. Along the bottom are numeric entry values. The numeric values to the left have a "+" after the number. That denotes they are used in conjunction with the numeric values to the right to create composite value. For instance "30+" and "2" makes the number "32".

The Continuum Fingerboard's configuration is changed by using this Overlay Strip and following these general directions:

Start: The colour of the LED is dim blue during normal operation.

Red Button: Press and release the Red Button next to the Headphone output on the side of the Continuum Fingerboard. The LED will turn from dim blue to bright red.

Configuration Category: Touch the far edge of the Continuum Fingerboard surface at a configuration category. The LED will shine a brighter green while your finger is touching the surface, and return to a dim green after the touch.

Numeric Entry: Touch the far edge (back) of the Continuum Fingerboard playing surface at a numeric value. Touching a numeric with a plus after the numeral means the Continuum Fingerboard is waiting for a second numeric touch. For instance, touching "80+" then "4" is equivalent to a numeric value of 84. The LED will shine a brighter green while your finger is touching the surface. The LED will return to a dim green when it is waiting for the second half of a dual numeric touch.

Configuration Changed: After the single numeric touch or the dual numeric touch the LED will go back to dim blue. The configuration has been changed.

# Configuration Options (via Haken Editor and Overlay Strip)

Sections 10.1 to 10.24 describe configuration options available for the Continuum Fingerboard and ContinuuMini. The descriptions apply to configuration from the Haken Editor, as well as from a Continuum Fingerboard's playing surface using the Overlay Strip. Each configuration option uses a table with a Category Name (as it appears on the Overlay Strip) as the first surface touch, followed by Numeric Value(s) on the Overlay Strip as the second and possibly the third surface touch. Functionality specific to the Haken Editor is marked with ◉. Almost all the functionality of the Overlay Strip is replicated in the Editor.

## Gain

Gain controls the output level of the Continuum Fingerboard.

0: Gain level off. Silence.
1 to 127: Level of the output from soft to loud. Excessively high gain may clip at high polyphony.

The Gain is the last step in the signal chain, just before the Continuum Fingerboard's audio signal is converted from floating point to integer and sent to the Digital to Analog converters. Tip: Use low Gain values, together with high SL and SR values in the matrix, to introduce a soft saturation in the EaganMatrix.

## Internal Sound (Load System Preset)

The Continuum Fingerboard's built-in synthesizer has hundreds of System Presets available.

To select a System Preset in the Editor: Choose a Category (click on the red category name, below the grey word "Category," to see the popup of categories). Then choose a System Preset within the Category (click on the red System Preset name, below the grey words "System Preset," to see the popup). For details see Section 8.4.

To select a System preset using the Overlay Strip: Use numeric touches that add up to the system preset number. For example, to select System Preset #171, press and release the Red Button, touch "Internal sound," touch 100+, touch 70+, touch 1. (Any combination of numeric touches adding up to 171 can be used.) The preset number of each System Preset is shown in the Editor's System Preset menu, and a complete listing of all system presets (with preset numbers) is available in the Editor's cogwheel menu.

System Presets can be modified by setting configuration values for i, ii, iii, iv, and Gen 1 in the Haken Editor, or via the Overlay Strip, or by pedal, or using an Arturia BeatStep, or using the Kenton Mini Controller, or a custom programmed Midi controller. They can be further modified using the EaganMatrix (see the EaganMatrix User Guide). See Sections 8.4 through 8.8 for more information on loading and storing Presets, Preset Groups, and saving presets to your Mac or PC disk.

## Midi Program, Midi Routing

Midi Program: This will cause the Continuum Fingerboard to send a Midi Program Change message on all active Midi channels through its Midi output. The Program Change is sent immediately when you configure it, and each time the preset is loaded.

Midi Program values:
1 to 20: Sends the numeric Midi Program message on all active Midi channels.
0: The Continuum Fingerboard external Midi Program feature is disabled.

Midi Routing: By default, the Continuum Fingerboard merges Midi messages from the Midi In jack to all of the following: Midi Out jack, CVC (Continuum Voltage Converter), and the built-in synthesizer. The Midi In messages are merged with the Midi messages that track fingers on the playing surface. Caution: If you supply Midi notes to the Midi In jack, you will want to avoid having notes from both the playing surface and the Midi In using the same Midi channel; the merged Midi messages will interfere with each other.

Routing values:
0: Disable merging data from the Midi In jack.
1: Midi In data is merged with playing surface data and goes to Midi Out.
2: Disconnects the playing surface from the Internal Sound.
3: Disconnects the playing surface from the CVC.

More options are available in the Haken Editor program, which uses a routing matrix. The Routing matrix of the Haken Editor uses LED icons: Led On (Blue) means data passes from the source to the destination; Led Off means data is blocked.

A common routing option that applies to both Continuum and ContinuuMini is disabling the fingerboard from sending data to the DSP for those who want to use the device as a MIDI controller, perhaps sending data directly to a DAW. You can disable output to the DSP while keeping the blue light on in the DSP column for input, which will allow the DAW to still play the EaganMatrix DSP synth.

This will apply for the current preset. If you want this to apply for all presets, go to Midi and Global Settings through the cogwheel and set MIDI encoding from the default "Replace" to "Preserve" to retain the settings for all presets.

## CVC

Select standard CV definitions for the Continuum Voltage Converter (CVC), as described in the CVC User Guide (available in the Resources area of www.HakenAudio.com). This option has no effect if there is no CVC connected, or if an EaganMatrix preset is active and the matrix's CVC section specifies control voltages.

## Polyphony

1 to 16: Select base polyphony. Controls the maximum number of simultaneous output notes. The actual polyphony can be greater or smaller than the base polyphony you choose, due to split, mono interval, and other influences. When base polyphony is set to 16, certain Specialty Sounds can play at DSP polyphony 24. The CVC polyphony is limited by the number of CV outputs.

Allow Expanded Polyphony: Allows using increased polyphony on Continuums that have extra processing power. This affects Continuums with double-processing-power DSPs (2x processing power), Continuum EaganMatrix Expanders (3x to 6x processing power, see System Identifier in Section 2.1.), and ContinuuMinis (2x processing power). Indicated in Editor by "+" after Base Polyphony value.

Allow Increased Computation Rate: Doubles sample computation rate on Continuums that contain only 2x DSPs. This affects L2x and L6x Continuums, and M2x ContinuuMini. This should be used sparingly, since doubling the sample computation rate will reduce the number of voices that can be computed, and most EaganMatrix sounds do not benefit from a higher sample computation rate. Indicated in Editor by "^" after Base Polyphony value.

The Editor displays the actual polyphony for DSP, CVC, and Midi Out in blue under the Midi Routing matrix. Click on Polyphony to change the base polyphony.

## Channel (Note) Priority

Fingers on the playing surface will generate output for Midi channels depending on the Polyphony and Split configuration. The order in which new notes from the playing surface are assigned to Midi channels can be Oldest, Same, or Lowest. The default is Oldest. The High 1 through High 4 settings are useful in directing which Midi channels are being currently used by the Continuum in overdub Midi performances.

Channel Priority values:
0: Oldest - Assign to channel that was least recently used.
1: Same - Assign to channel that was playing same pitch.
2: Lowest - Assign to lowest channel number (LCN) that is not already playing a note.
3: High 1 - Only highest channel of current polyphony is used.
4: High 2 - Only highest two channels of current polyphony are used.
5: High 3 - Only highest three channels of current polyphony are used.
6: High 4 - Only highest four channels of current polyphony are used.

High 1 through High 4: To do a Midi overdub recording with the High 1-4 settings, decide on the number of voices for each overdub pass. For instance, if the sound used for playing has a polyphony of 8 and it is desired to have two voices available for each overdub pass, then:
1. For the first pass set Channel priority to High 2 and Polyphony to 2. The first pass (the initial recording) is recorded onto Midi channels 1 and 2.
2. For the second pass leave Channel priority at High 2 and set Polyphony to 4. The second pass is recorded onto Midi channels 3 and 4, while the first pass can be heard on Midi channels 1 and 2.
3. For the third pass leave Channel priority at High 2 and set Polyphony to 6. The third pass is recorded onto Midi channels 5 and 6, and the first two passes are heard on channels 1 through 4.
4. For the final pass leave Channel priority at High 2 and set Polyphony to 8. The fourth pass is recorded onto Midi channels 7 and 8, and the other three passes are heard on channels 1 through 6.

An Important Caveat: Midi-based multitrack recording like this may or may not compromise the Midi bandwidth. The Continuum Fingerboard's Midi bandwidth is highly optimized in relation to the current polyphony of a Continuum performance. Recording and overdubbing Midi in this fashion may overflow the Continuum's Midi stream, since the Continuum doesn't "know" the overall polyphony from the combination of surface and Midi In activity but can only make data streaming adjustments according to polyphony from the playing surface.

## X Bend

X Bend is the Midi pitch bend range that the Continuum Fingerboard uses to encode its Midi output. Set X Bend to match the Midi pitch bend range you set on your external synthesizer. You should select the largest bend available on your synthesizer, so that you can play the longest possible glissandi. The pitch bend range of 96 allows you to glissando over the complete pitch range of the full-size Continuum Fingerboard. Since Pitch Bend is encoded in 14 bits, it provides 1.2 cent encoding accuracy at a 96 half-step range, and 0.15 cent accuracy at a 12 half-step range. MPE+ always uses 96 half-step range; MPE+ pitch bend encoded with 21 bits has .009 cent accuracy.

X Bend values:
1 to 96: Midi Pitch Bend range as expressed in half steps (default is 96).
MPE+ 96:2, 96:5, 96:7, 96:12: The Midi Pitch Bend range is 96 half steps for MPE+ encoding on Midi channels 2 and above. The Bend Range for Channel 1 input to the Continuum (from sequencers or keyboards) is 1, 2, 5, 7, or 12 half steps. Encoding of MPE+ X value with 21 bits of accuracy: The 7 LSBs are encoded with cc87 (LSBs are 0 if no cc87 is present). When cc87 is followed by Pitch Bend, the cc87 bits are appended as LSBs to the Bend data bits, for a synchronous 21-bit update.

The Haken Editor has a reduced selection set comprised of the most useful values.

When using an external synthesizer, it is important to verify proper Pitch Bend Range configuration: Play a glissando; when you lift your finger at the end of the glissando, play a new note at the spot where you lifted your finger. The pitch at the end of the glissando should match the new note's pitch; if not, the Pitch Bend Range configured on your Continuum Fingerboard does not correctly match your synthesizer.

## Y Control

The continuous controller number that Y (front to back position) sends through the Midi output. The most common choices are: 1 for "modulation", 2 for "breath", or 74 for "brightness" (the default).

Y Control values:
0: Off (no controller information sent).
1-4, 7, 11, 74: Continuous controller number generated by the Y position (default is 74).
127: Transmit Y value using controller 74, without shelving values at both ends of the y range.
MPE+: Encoding of MPE+ Y value with 14 bits of accuracy: The 7 LSBs are encoded with cc87 (LSBs are 0 if no cc87 is present). When cc87 is followed by cc74, the cc87 bits are appended as LSBs to the cc74 data bits, for a synchronous 14-bit update.

## Z Control

The continuous controller number that Z (finger pressure) sends through the Midi output. The most common choices are: 127 for MPE encoding (channel pressure), or controller 7 for "channel volume" or controller 11 for "expression". In some synthesis situations 7-bit accuracy is not adequate for finger pressure; for these situations the Continuum Fingerboard can use 14-bit MPE Encoding.

Z Control values:
0: Off (no controller information sent).
1-4, 7, 11: Continuous controller number generated by the Z position (11 is default).
70 (MPE+): Use MPE+ Encoding: This is Haken Audio's enhancement to MPE Encoding. Encoding of MPE+ Z value with 14 bits of accuracy: The 7 LSBs are encoded with cc87 (LSBs are 0 if no cc87 is present). When cc87 is followed by Channel Pressure, the cc87 bits are appended as LSBs to the Channel Pressure data bits, for a synchronous 14-bit update.
127 (MPE): Use MPE encoding. This will encode Z position as Channel Pressure. In addition, Controller 127 on channel 1 specifies polyphony, RPN 0 on channel 2 specifies pitch bend range. NB: As per MPE standard, the Continuum will encode notes starting on channel 2, up to channel P+1 (where P is polyphony).

## Midi Note Processing

Midi key velocity can either be static (always at 127) or dynamic (a value generated by calculating finger velocity when the surface is touched). The static setting is usually preferable and is the default.

Midi Note Processing values:
0: Static: Midi key velocity is always 127.
1: Dynamic: Midi key velocity depends on initial finger velocity.
2: Formula: Midi key velocity is computed by EaganMatrix formula V. Use this only with an EaganMatrix preset that has formula V specially designed for velocity values.
3: No Note Output: The Continuum does not output Midi Note and Pitch Bend information.
4: External Note Mode: For EaganMatrix sounds designed for use with Midi keyboards or sequencers. Such EaganMatrix sounds process notes coming in on Midi Channel 1, and add continuous control using the Continuum's Touche. A Formula Blend control (see the EaganMatrix User Guide) allows specialized processing for notes coming from Midi channel 1 vs. notes from the Continuum's playing surface, to adjust for the coarse aftertouch and limited pitch abilities of Midi keyboards and sequencers.
5: Ethervox Mode: Always uses 60 for the Midi key number, and all bends are referenced from Middle C. This is the type of encoding used by the Moog Ethervox Theremin.
6: Kyma Mode: Special Midi handling for Symbolic Sound Corporation's Kyma. This transmits a Midi message once per second to let Kyma know a Continuum Fingerboard is present. Kyma will automatically update the Continuum Fingerboard when sounds are loaded and changed inside Kyma. Kyma-controlled Continuum Fingerboard parameters include: Polyphony, X Bend, Y Controller, Z Controller, and Splits. All affected Kyma parameters will have blue text in the Haken Editor. Technical details: The Continuum Fingerboard will use controller 74 to encode Y, controller 11 for Z, and 96 for the pitch bend range. Splits in Kyma override the Continuum Fingerboard's split. In this special Kyma mode, Continuum notes are transmitted on high-numbered Midi channels starting with channel 16. To connect both a Midi Keyboard and Continuum Fingerboard to Kyma at the same time: The Haken Editor must be running, it must have the Midi keyboard as its ExtDevice input, the Keyboard must transmit on Midi channel 1, and the Midi Routing in the Continuum must pass Midi In to Midi Out. Technical detail: The Editor routes the ExtDevice to the Continuum, and the Continuum moves channel 1 KeyOn/KeyOff messages to high-numbered Midi channels, one note per channel.

## Middle C

You may select a transposition of the playing surface in half-step increments by specifying a midi note number for the Middle C position.

Middle C values:
0 to 127: The specified Midi note number is the new pitch for the "Middle C" position. For instance, a value 60 is no transposition, value 48 transposes down one octave, and a value of 72 transposes up one octave.

In the Editor, drag the red triangle to adjust Middle C.

## Split Point and Split Mode

ContinuuMini players may wish to skip this section, as it is specific to the Full-size and Half-size Continuum Fingerboard.

You may select a playing surface split point. For the split point to have effect, you must also select a split mode. The split mode together with your polyphony configuration determines how many simultaneous notes you can play above and below the split point. The split mode can also be used for CEE Combination Presets, to split notes between the three DSPs in a Continuum Fingerboard with CEE.

Split Point: Division point for the split. For instance, touching the surface at Middle C will create a split point at Middle C.

Split Mode values:
0: Split is deactivated/disabled.
1: Split into two polyphonic ranges. All pitches below the split point will be encoded on the first half of your Midi channels, and pitches above the split point will be encoded with the remaining Midi channels.
2: Split into a monophonic low range and polyphonic high range. All pitches below the split point will be encoded on Midi channel 1, and the pitches above the split point will be encoded with the remaining Midi channels.
3: Split into a monophonic high range and polyphonic low range. All pitches above the split point will be encoded on Midi channel 1, and the pitches below the split point will be encoded with the remaining Midi channels.
4: Split into internal synthesizer low range and external synthesizer (and CVC if connected) high range. All pitches below the split point will be played by the internal synthesizer and not sent to Midi Out, and the pitches above the split point will be sent to Midi Out and CVC but not played internally. The full polyphony will be used for the external synthesizer and/or CVC, and the full polyphony will be used for the internal synthesizer. For example: With a polyphony of 4, 8 total notes are possible: 4 from Midi or CVC, and 4 from the internal synth.
5: Split the playing surface into internal synthesizer high range and external synthesizer (and CVC if connected) low range. All pitches above the split point will be played by the internal synthesizer and not sent to Midi Out, and the pitches below the split point will be sent to Midi Out and CVC but not played internally.
6: Combination of Two Presets: First preset plays notes below the split point, second plays notes above the split. Exclusively for use with CEE Combination Presets; see details in Section 8.9.
7: Combination of Two Presets: First preset is post-processed by second preset. (No split point is used.)
8: Combination of Two Presets: All notes are played by first and second preset; first preset doubled by second preset.
9: Combination of Three Presets: All notes are played by all three presets; all three presets double each other.
10: Combination of Three Presets: The three presets are sequentially selected with Half Advance Pedal (see Section 14.3). If notes are held from the previous preset, they will continue to sound, but new notes will be on the new preset.

Notes: If you want a monophonic CVC range and a polyphonic Midi range on different side of the split, use mode 2 or 3. Then use the first 4 outputs on the CVC and ignore the other outputs. For Midi, use channels 2, 3, 4, 5, 6, etc. but ignore channel 1. A multi-split mechanism is available for use by third-party software, but it is neither saved in presets nor is it displayed in the Editor. Technical details: Controllers 88 and 89 on Midi channels 1-16 override the split normally used in the Continuum Fingerboard; cc 88 specifies the lowest note number allowed on the Midi channel; cc 89 specifies the highest note number allowed on the Midi channel.

## Mono Function and Mono Interval

ContinuuMini players may wish to skip this section, as it is specific to the Full-size and Half-size Continuum Fingerboard.

Single-note lines can be performed with legato, retrigger, or portamento transitions between notes; transitions can be pressure-based or time-based (see Section 6.3 for details). The Mono Function (MonSW) lets you select what kind of transitions to use.

Mono Function values:
0: Portamento - smooth pitch transitions, based on the relative Z values of fingers
1: Legato Z - smooth amplitude transitions, max Z finger is played
2: Retrigger Z - retrigger at transitions, max Z finger is played
3: Legato T - legato to new touch, no retriggering during transition
4: Retrig T - retrigger at new touch
5: Retrig TL - retrigger at new touch and at finger lift
6: Legato TZ - legato to new touch, no retriggering during transition, use max Z of all fingers
7: Retrig TZ - retrigger at new touch, use max Z of all fingers
8: Retrig TLZ - retrigger at new touch and at finger lift, use max Z of all fingers

The Mono Interval allows you to play single-note lines when the Continuum Fingerboard is configured with polyphony greater than 1. If you play two notes within the Mono Interval, a legato, retrigger, or portamento transition will be used, as selected by the Mono Function. You can set any number of half steps for the Mono Interval by touching "Mono Interval" and then a value corresponding to the number of half steps. If you select value 0 or if the Mono Switch is off, the Mono Interval function will be disabled.

Mono Interval values:
0: Disabled.
1 to 127: Sets the range in half steps of the mono interval.

The Haken Editor has a reduced selection set comprised of the most useful values. Also, the Mono Function can be enabled and disabled via the switch in 10.13 in the Editor Legend. If you configure a nonzero Mono Interval you can activate and deactivate that interval using the Mono Switch, as described in Section 14.3, or via the Editor.

## Round Initial, Normal Rounding, Release Rounding, Rounding via Y

The Continuum Fingerboard's "Finger Position Rounding" features help a performer sound in tune, when the performer cannot place fingers for proper intonation. Please thoughtfully consider the pros and cons of rounding finger position in Section 6.4 before using the "Finger Position Rounding" feature.

Round Initial: When Round Initial is selected, the Continuum Fingerboard and ContinuuMini correct the finger position each time a finger first touches the surface. This aids a player in creating equal temperament pitches and intervals, or pitches and intervals in alternate tunings (see Sections 6.4 and 10.16). Subsequent vibrato and glissando finger moves are interpreted at full micro-pitch resolution until a new note is sounded.

Normal Rounding: The Round Rate pitch correction (Section 10.15) will automatically round finger positions to the nearest half step any time during a note and after the finger is lifted.

Release Rounding: The Round Rate pitch correction (Section 10.15) occurs when a note is still sounding after the finger is lifted from the surface, but not during sustained notes. With Release Rounding, the Round Rate takes effect only after a finger is lifted.

Rounding via Y Position: When the finger position is at Y=0, the pitch is the nearest half step. A vibrato effect can be achieved by rocking the finger right and left. (Technically, this vibrato-like pitch variation is based on the finger's X derivative.) When the finger position is at Y=1, the "Normal Rounding" occurs. Thus, if the Round Rate is zero (Section 10.15), no rounding occurs at Y=1. If the Round Rate is a medium value (for example, 70), mild rounding occurs at Y=1. When the finger position is between Y=0 and 1, then a combination of the Y=0 and Y=1 pitch correction methods is used.

Rounding via Y-Reversed: This is the same as "Rounding via Y Position", for the reverse of Y.

Overlay Strip values:
0: Normal Rounding enabled (using Round Rate value), Round Initial disabled.
1: Normal Rounding enabled, Round Initial enabled.
2: Release Rounding enabled, Round Initial disabled.
3: Release Rounding and Round Initial enabled.
4: Rounding via Y enabled, Round Initial disabled.
5: Rounding via Y and Round Initial enabled.
6: Rounding via Y-Reversed enabled, Round Initial disabled.
7: Rounding via Y-Reversed and Round Initial enabled.

## Round Rate

The Round Rate will automatically round finger positions to the nearest half step any time during a note and after the finger is lifted. After you complete a glissando, it can automatically correct your pitch. If you are playing vibrato the average finger position will be rounded so that the vibrato will be centered at the nearest half step.

Round Rate values:
0: No Rounding (default setting).
1 to 127: Small Round Rates cause a slow drift to half-step finger positions; larger rates round more quickly. The maximum Round Rate of 127 causes immediate rounding; with this rate you will get a piano-style glissando when you slide a finger over several half steps.

Notes:
(1) The Round Rate mechanism is a separate feature from Round Initial (Section 10.14), and it may be used with or without Round Initial.
(2) You can limit the Round Rate to have effect only after a finger is lifted using the Release Rounding feature (Section 10.14).
(3) You can use foot pedals to influence the round rate as you play; see details in Section 14.

A common desire is to retain the current round rate when moving between presets that may have a different or no rate. This can be achieved by going into Midi and Global settings through the cogwheel and set Surface Processing from the default "Replace" to "Preserve". Any RndRate dial setting you set while in the current preset will be retained after selecting any new preset.

## Tuning (Select Pitch Table)

The Continuum Fingerboard allows you to select Pitch Tables, for use with rounding (Sections 10.14 and 10.15) or for radical pitch transformations of the playing surface (Section 6.4).

Tuning values:
0: 12-tone equal tempered tuning (default setting).
1 to 50: N-tone Equal tuning, where N is a number from 1 to 50.
60 to 71: Twelve Just tuning tonic centres. The value "0" lines up with Middle C, so if you touch "Tuning", then "60+", then middle C, the Just C tuning (value 60) will be selected; the C#, Just C# tuning (value 61) will be selected; etc. In this Just tuning, any of the major triads (I, IV, V) will have perfect 4:5:6 frequency ratios in the rounded finger position, and the ii and vi minor triads will have perfect 10:12:15 frequency ratios.
80 to 87: Eight downloadable custom Pitch Tables. A graphical Pitch Table Editor, and its User Guide, are available in the cogwheel menu (see Sections 6.4 and 10.22).

## Pedal 1 and Pedal 2

Use Pedal 1 and Pedal 2 to select a Midi controller (cc) for the pedal jacks (Section 6.5). The pedal jack data values are truncated to 7 bits for Midi, but the EaganMatrix and the CVC use the exact pedal data values (no truncation). Pedal 1 and Pedal 2 must be one of the performance controller numbers that has special meaning to the Continuum Fingerboard. For example, 64 is Sustain, 66 is Sostenuto, 69 is a second Sostenuto, 8 is Octave Shift (works with the Tri-Value Pedal), 9 is Mono Switch, 20 through 24 are Recirculator controls for the Internal Sound, and 31 is the Advance pedal. See Section 14.3 for a complete pedal listing. The ContinuuMini has only the first pedal jack, so only the Pedal 1 setting is used with the ContinuuMini.

Pedal 1 and Pedal 2 values:
9-10, 12-31, 64-69, 80-83: Continuous controller number (cc) for pedal 1 or pedal 2.

A subrange of data values can be created using the Min and Max controls in the Editor.

## Pedals Min and Max

Editor Only: Min and Max sets the output range of the pedal jacks. This allows for fine control of subranges of parameters. Making Min greater than Max will invert the pedal action. Pedal 1 has a normal full range, from 0 to 127. Pedal 2 can have a reduced range (e.g., 0 to 90). For the EaganMatrix and the CVC, reducing the pedal range does not reduce accuracy. For switch pedals, Min specifies the value when the pedal is at rest, and Max when the pedal is pressed.

## Options

Less frequently used Continuum Fingerboard configuration choices are grouped under Options. Options 8, 9, and 127 are not available in the Editor.

Options values:
0: This will disable any of the Options below that were previously enabled.
1: Medium Action. In "Midi and Global Settings" (in the cogwheel menu) an additional option, "Light Action - Narrow" is Light Action optimized for narrow intervals.
2: Digital audio output syncs to digital audio input. AES options are in "Midi and Global Settings" (in the cogwheel menu).
3: Digital audio output rate at 48 kHz. AES options are in "Midi and Global Settings" (in the cogwheel menu).
4: Make octave foot switch transpose two octaves instead of one octave.
5: Make octave foot switch transpose four octaves instead of one octave.
6: Reverse X (pitch), so the lower notes are to the right and the higher notes to the left.
7: Disables Continuum Fingerboard's recirculator. Useful if you prefer an external reverb. This option is in "Midi and Global Settings" (in the cogwheel menu), as well as an option to enable the recirculator on the analog headphone output but disable it on AES3.
8: Limit Continuum Fingerboard's Midi transmission to 8% of the Midi bandwidth (200 Byte/sec).
9: Limit Continuum Fingerboard's Midi transmission to 5% of the Midi bandwidth (150 Byte/sec).
10: Load User Preset Slots with "Demo Assortment." This option is in the Group menu.
127: Factory reset.

Option 1: Continuum Fingerboards built after 2012 are capable of Light Action, responding to lighter finger pressure than the Classic Action of older Continuum Fingerboards. Choosing Medium Action makes a newer Continuum's action equivalent to the Classic Action.

Option 2: Use external clock sync from the AES3 input. The Continuum Fingerboard's Led will shine purple if this option is selected and no valid digital sync is present at the AES3 input. The led will switch to blue when sync is present.

Option 3: Causes the external digital audio output to transmit at 48 kHz instead of the default rate of 96 kHz.

Options 4 and 5: Additional transposition values are available using the Haken Editor. Settings can range from +/- 4 octaves in one octave increments.

Option 8 and 9: This data rate is much too slow for Continuum playing, but convenient for configuration with wireless Continuum Remote apps. See Section 15.7.

Option 127: Factory reset sets all presets (the current configuration as well as Internal User Preset Slots 1-16) and the Global options to factory default.

## Send

Send value:
1: Transmit current configuration via Midi, using the messages described in Section 15.

## Load and Store (User Preset Slots)

Load values:
1 to 16: This will load from the selected Internal User Preset Slot.

A single-touch alternative is available for loading user presets from the surface: Press the red button and then press the playing surface on the opposite side of the Overlay Strip, at the desired user preset number. This saves the intermediate step of pressing "load".

Hardware alternatives are also available for loading user presets, see Sections 6.6, 6.7, and 6.8.

In the Editor, click on one of the 16 Internal User Presets to load the current configuration from it (Section 8.6).

Store values:
1 to 16: This will store into the selected Internal User Preset Slot. It will also store the Global settings internally.

In the Editor, Shift-click on one of the 16 Internal User Presets to store the current configuration into it, or drag a preset file from the Finder (Mac) or Explorer (Windows) and drop it onto one of the Internal User Presets (Section 8.6).

## Cogwheel Menu

The Cogwheel Menu provides access to: Global Settings, Kenton Settings, Pitch Table Editor, User Guides, Editor Shortcuts, Barrel Styles, List of System Presets, and About.

Midi and Global Settings: Select USB-Midi connections for the Editor (Section 8.1), and set Global settings: Recirculator Enable, Light Action, Preserve Parameters, and AES Digital Audio Rates. Shortcut: Command+G (Mac) or Control+G (Windows).

Preserve Parameters (in Midi and Global Settings): When a preset is opened from your Mac or Windows computer, or when a preset is loaded from an Internal User Preset Slot, you may globally preserve the existing values of certain sets of parameters as follows:
- Midi Encoding: X Bend, Y Controller, Z Controller, Midi Note Processing, Midi Program, Midi Routing, CVC Standard CV Definition (Note: use to preserve MPE+MPE modes between presets).
- Pedal: Pedal Assignments, Pedal Min/Max, Octave Shift Effect
- Surface Processing: Channel Priority, Reverse, Split, Transpose, Mono Switch, Mono Interval, Mono Function, Round Rate, Pitch Table

Kenton Settings: View and customize functionality of Kenton Mini Controller. Separate Kenton Settings are stored for each preset (see Section 6.6). Shortcut: Command+K (Mac) or Control+K (Win).

Pitch Tables Editor: A graphical editor for creating custom downloadable Pitch Tables, written by Pablo De La Loza (see Section 6.4, and the Pitch Tables Editor User Guide in the Cogwheel menu).

User Guides: Select "Continuum User Guide," "EaganMatrix User Guide," "CEE User Guide," "CVC User Guide," or "Pitch Tables Editor User Guide" to launch a window showing the Guide. The User Guide pdf files are located in the User Guides folder inside your Haken Editor folder.

Editor Shortcuts: A reference list of keyboard shortcuts and mouse drags available in the Haken Editor.

Barrel Styles: A compendium of barrel display styles available for the i, ii, iii, iv barrels in EaganMatrix sounds you design. This Barrel Styles display allows you to try out each barrel, or automatically animate them (click top left of window). Shortcut: Command+B (Mac) or Control+B (Win).

List of System Presets: Creates a text list of System Presets. You can copy and paste the preset list into your favourite word processor for formatting or printing. The list includes the system preset numbers required for loading presets using the Overlay Strip (Section 10.2).

About: Select "About" to see the Editor version, as well as information on the Editor authors Edmund Eagan and Lippold Haken.

## Surface Display

A detailed visual display of finger activity on the Continuum Fingerboard can be activated by clicking on the Surface Display menu in the Editor.

When the Surface Display is turned on, finger activity from the Continuum Fingerboard's playing surface will be displayed on an on-screen Continuum surface. Each new note played will display as a combination of a circle, line, number, and a pair of triangles:

- Circle diameter: Pressure (Z) value, larger diameter means more pressure.
- Circle placement: Centre of circle reflects the left-to-right (X) position.
- Line: Deviation left-to-right from vertical reflects the pitch deviation from nearest equal temperament pitch.
- Triangle Pair (Y position): The lower triangle gets darker as finger is towards the front; upper triangle gets darker as finger is towards the back.
- Numerical: The Midi channel of the note.

## Pitch Trim

Editor Only: Some algorithms for sound generation, such as physical models that use delays, generate pitches that are sharp or flat over parts of their pitch range. The Pitch Trim functionality provides a way for the preset designer to correct for this.

The Pitch Trim consists of two user-definable graphs, overlaid onto the Surface Display (see Section 10.23). The blue pitch graph is for Y=0 Pitch Trim, and the red pitch graph is for Y=1 Pitch Trim. The Pitch Trim is particular to each preset, and will be stored with the preset.

To see the Pitch Trim graphs, select Pitch Trim from the Surface Display menu. Each Pitch Trim graph can specify a trim value at half-octave positions; these half-octave positions are indicated with vertical white lines on the Pitch Trim display. To add a trim value to the Pitch Trim graph, place a finger on the surface at Y=0 (to add to the Y=0 graph) or Y=1 (to add to the Y=1 graph) at one of the half-octave positions. Then move the finger until the pitch generated is correct for that half-octave position, and choose "Add Current Pitch" from the Surface Display menu (or type "="). To remove a trim value you added previously, place a finger on the surface at Y=0 (to remove from the Y=0 graph) or Y=1 (to remove from the Y=1 graph) at the half-octave point, and choose "Delete Trim Value" from the Surface Display menu (or type "-"). To remove all pitch trim values, choose "Reset Trim" from the Surface Display menu. The Pitch Trim functionality should not be confused with the Pitch Table Editor, which is available in the Cogwheel menu (see Section 6.4 for more about Pitch Tables).

# Loading New Firmware into the Continuum Fingerboard or ContinuuMini

New firmware is supplied from Haken Audio integrated into the Editor. If you have presets you previously created and stored in your Continuum's Internal User Preset Slots, please save those presets (using your old Editor) to your Mac or PC before updating firmware.

To update the firmware:
1. Run the new Haken Editor (available in the Resources area at www.HakenAudio.com). Make sure the Editor is communicating with your Continuum Fingerboard as outlined in Section 8.1, then go to the Haken Editor's Midi and Global Settings (in the cogwheel menu).
2. Load Update File 1 from the Update Firmware menu. If the Update procedure does not start please take a screen shot of the Midi and Global Settings page and send it to ed@HakenAudio.com.
3. When it finishes Update File 1 then select Update File 2. When Update File 2 finishes your instrument has been updated to firmware 8.85.

Note: Continuum firmware updates MUST be done with a Roland UM-ONE interface.

If you have trouble with your USB-Midi cable:
(1) Try resetting the USB-Midi cable by unplugging and replugging its USB connector.
(2) If you continue to have problems, try connecting your USB-Midi cable through a powered USB hub.

# Connecting to External Hardware and the Editor

The following are a number of recommended configurations for connecting the Continuum Fingerboard and its accessories to external hardware. Also shown where appropriate is the settings for the Haken Editor's "Midi and Global" page (Section 8.1).

## Analog Audio Only

Analog Audio: The Continuum's analog headphone output is connected to an external audio mixer. It is important not to mono sum the audio signals from the Continuum; a TRS-to-split-mono cable must be used.

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor.

## Digital Audio

Digital Audio: The Continuum's digital output is connected to an external audio mixer. A digital signal is fed back to the Continuum so that the Continuum can optionally sync to the AES signal supplied by the external source. Notice that the Sync out in the Editor has been set to "sync to incoming", so that the Continuum can sync to that digital signal. Successful digital clocking will report "Sync".

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor. ContinuuMinis are autodetected and show as Contin.

## Analog Audio and CVC

This section covers connecting the Continuum Fingerboard with both analog audio output and the Continuum Voltage Converter (CVC).

## Analog Audio and CVC

Analog Audio: The Continuum's analog headphone output is connected to an external audio mixer. It is important not to mono sum the audio signals from the Continuum; a TRS-to-split-mono cable must be used.

CVC: The CVC is connected to the Continuum via the i2c information that is carried through the unused pins of the Midi cable. The i2c cable is a high quality Midi cable with all 5 pins connected. It connects the Midi Out of the Continuum to the In on the CVC.

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor. ContinuuMinis are autodetected and show as ContinuuMini with serial number.

## Digital Audio and CVC

Digital Audio: The Continuum's digital output is connected to an external audio mixer. A digital signal is fed back to the Continuum so that the Continuum can optionally sync to the AES signal supplied by the external source. Notice that the Sync out in the Editor has been set to "sync to incoming", so that the Continuum can sync to that digital signal. Successful digital clocking will report "Sync".

CVC: The CVC is connected to the Continuum via the i2c information that is carried through the unused pins of the Midi cable. The i2c cable is a high quality Midi cable with all 5 pins connected. It connects the Midi Out of the Continuum to the In on the CVC.

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor. ContinuuMinis are autodetected and show as ContinuuMini with serial number.

## Analog Audio and CEE

Analog Audio: The Continuum's analog headphone output is connected to an external audio mixer. It is important not to mono sum the audio signals from the Continuum; a TRS-to-split-mono cable must be used.

CEE: The CEE is connected to the Continuum via a bidirectional connection via the AES on the Continuum to the Link on the CEE. Using analog "mic" cables instead of proper digital audio cables for this connection may compromise performance.

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor. ContinuuMinis are autodetected and show as ContinuuMini with serial number.

## Digital Audio and CEE

Digital Audio: The CEE's digital audio output is connected to an external audio mixer. Using analog "mic" cables instead of proper digital audio cables for this connection may compromise performance. A digital signal is fed back to the CEE so that the Continuum and CEE can optionally sync to the AES signal supplied by the external source. Notice that the Sync out in the Editor has been set to "sync to incoming", so that the Continuum and CEE can sync to that digital signal. Successful digital clocking will report "Sync".

CEE: The CEE is connected to the Continuum via a bidirectional connection via the AES on the Continuum to the Link on the CEE. Using analog "mic" cables instead of proper digital audio cables for this connection may compromise performance.

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor. ContinuuMinis are autodetected and show as ContinuuMini with serial number.

## Analog Audio, CVC and CEE

Analog Audio: The Continuum's analog headphone output is connected to an external audio mixer. It is important not to mono sum the audio signals from the Continuum; a TRS-to-split-mono cable must be used.

CEE: The CEE is connected to the Continuum via a bidirectional connection via the AES on the Continuum to the Link on the CEE. Using analog "mic" cables instead of proper digital audio cables for this connection may compromise performance.

CVC: The CVC is connected to the CEE using i2c. The i2c cable is a high quality Midi cable with all 5 pins connected. It connects the Data 4 port of the CEE to the In on the CVC.

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor. ContinuuMinis are autodetected and show as ContinuuMini with serial number.

## Digital Audio, CVC and CEE

Digital Audio: The CEE's digital audio output is connected to an external audio mixer. Using analog "mic" cables instead of proper digital audio cables for this connection may compromise performance. A digital signal is fed back to the CEE so that the Continuum and CEE can optionally sync to the AES signal supplied by the external source. Notice that the Sync out in the Editor has been set to "sync to incoming", so that the Continuum and CEE can sync to that digital signal. Successful digital clocking will report "Sync".

CEE: The CEE is connected to the Continuum via a bidirectional connection via the AES on the Continuum to the Link on the CEE. Using analog "mic" cables instead of proper digital audio cables for this connection may compromise performance.

CVC: The CVC is connected to the CEE using i2c. The i2c cable is a high quality Midi cable with all 5 pins connected. It connects the Data 4 port of the CEE to the In on the CVC.

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor. ContinuuMinis are autodetected and show as ContinuuMini with serial number.

In addition to the previous connections setups, the following are connection setups for incorporating 3rd party hardware and software.

## Connecting a Softsynth

Softsynth: A Midi connection to a soft synth running on the same computer as the Haken Editor is established by creating a virtual Midi bus, in this case labeled IAC Driver IAC Bus 1.

## Connecting to Kyma (Mac)

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor. ContinuuMinis are autodetected and show as ContinuuMini with serial number.

Kyma: A Midi connection to the Paca(rana) and Kyma running on the same computer as the Haken Editor is established by using Delora Software's Kyma Connect via a virtual Midi bus via ethernet called vPacarana. See Section 10.10 for a necessary Kyma-specific configuration setting.

Paca(rana): A data connection to the Paca(rana) and the computer is established via Firewire.

Paca(rana) Audio Interface: A data connection to the Paca(rana) and the Interface is either Firewire or USB, depending on the interface.

## Connecting to Kyma (PC)

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor. ContinuuMinis are autodetected and show as ContinuuMini with serial number.

Kyma: A Midi connection to the Paca(rana) and Kyma running on the same computer as the Haken Editor is established by using a USB Midi connection. In this case the "Midi and Globals" page this connection is labeled UM-1. See Section 10.10 for a necessary Kyma-specific configuration setting.

Paca(rana): A data connection to the Paca(rana) and the computer is established via Firewire.

Paca(rana) Audio Interface: A data connection to the Paca(rana) and the Interface is either Firewire or USB, depending on the interface.

## Connecting Midi Keyboard, Continuum and Kyma (Mac)

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor.

Kyma: A Midi connection to the Paca(rana) and Kyma running on the same computer as the Haken Editor is established by using Delora Software's Kyma Connect via a virtual Midi bus via ethernet called vPacarana. See Section 10.10 for a necessary Kyma-specific configuration setting.

Paca(rana): A data connection to the Paca(rana) and the computer is established via Firewire.

Paca(rana) Audio Interface: A data connection to the Paca(rana) and the Interface is either Firewire or USB, depending on the interface.

Midi Keyboard: A connection is made via Midi/USB, in this case labeled UM-1 in the Midi and Global Settings. CME xKey keyboards are often used with the Continuum and ContinuuMini. Certain presets are set up for the xKey, explicitly combining MPE+ "Channel 1 Data" with playing surface data from the Continuum or ContinuuMini. For this to work properly, configure the xKey with First Aftertouch value is derived from Velocity.

## Connecting Midi Keyboard, Continuum and Kyma (PC)

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor.

Kyma: A Midi connection to the Paca(rana) and Kyma running on the same computer as the Haken Editor is established by using a USB Midi connection. In this case the "Midi and Globals" page this connection is labeled UM-1. See Section 10.10 for a necessary Kyma-specific configuration setting.

Paca(rana): A data connection to the Paca(rana) and the computer is established via Firewire.

Paca(rana) Audio Interface: A data connection to the Paca(rana) and the Interface is either Firewire or USB, depending on the interface.

Midi Keyboard: A connection is made via Midi/USB, in this case labeled Vmidi 1 in the Midi and Global Settings. CME xKey keyboards are often used with the Continuum and ContinuuMini. Certain presets are set up for the xKey, explicitly combining MPE+ "Channel 1 Data" with playing surface data from the Continuum or ContinuuMini. For this to work properly, configure the xKey with First Aftertouch value is derived from Velocity.

## Connecting to External Midi Synthesizer

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor.

External Synth: A connection is made via Midi/USB, in this case labeled UM-1 in the Midi and Global Settings.

## Connecting a Kenton Controller with Computer

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the "Midi and Globals" page of the Editor.

Kenton Controller: A connection is made via USB, and the Kenton is auto-recognized as shown in the Midi and Global Settings.

## Connecting a Kenton Controller Standalone (No Computer)

Kenton USB Host: A bidirectional Midi connection is made between the Kenton Midi Host and the Continuum.

Kenton Controller: A connection is made via USB to the Kenton USB Host.

## Connecting a BeatStep with Computer

Haken Editor: Connections to the Editor on an external computer are made through the supplied Roland UM-ONE USB connection, which is auto-detected and shows up in the Midi and Globals page of the Editor.

BeatStep Controller: A connection is made via USB, and "Arturia BeatStep" is chosen as the Ext Control (with "Config Data" or "All Data" selected) in Midi and Global Settings.

## Connecting a BeatStep Standalone (No Computer)

BeatStep Controller: A connection is made via the BeatStep's Midi Out. Note that in this configuration the BeatStep will require external USB power.

# Hardware Maintenance for the Continuum Fingerboard

ContinuuMini players may wish to skip to section 14, as the next sections are specific to the Full-size and Half-size Continuum Fingerboard.

## Cleaning

The Continuum Fingerboard can be treated much like any modern electronic device. If you feel the Continuum Fingerboard playing surface or body requires cleaning, wipe with a slightly damp cloth. If necessary, you can use a cleaning agent like Windex. Never spray a cleaning material directly on the Continuum Fingerboard.

## Surface Alignment

A Continuum Fingerboard with a plain (unmarked) playing surface does not have surface alignment problems. But Continuum Fingerboards that have reference markings on the playing surface must have the marked areas on the playing surface aligned with the precise dot markings on the frame around the playing surface. The playing surface may eventually come out of alignment, sometimes due to overly vigorous playing.

To correct this surface alignment problem, press multiple fingers on the playing surface and move it into position. Refer to the step-by-step instructions:

1. Frame dot mark does not align with centre of black playing surface "key".
2. Press down with multiple fingers along the edge of the surface around here (bottom out).
3. Slide the fingers along the edge while constantly bottoming out to about here.
4. Repeat steps 2 to 3 until centre of black surface aligns with dot.

Depending on the model of your hardware, your Continuum Fingerboard may have screws on the sides of the top frame. A half-size of this design will have 6 such screws, a full-size will have 8. Loosening these screws by a single turn may make it easier to adjust the surface. After you have done the adjustment, tighten the screws with a single turn — do not over-tighten the screws.

If you have trouble getting good surface alignment, please contact Haken Audio. Please do not open up your Continuum Fingerboard without instructions from Haken Audio; hundreds of springs may come out of position in the playing surface unless the proper procedure is followed.

## Continuum Fingerboard Hardware Problems

If you suspect your Continuum Fingerboard is not functioning properly, please try the following:

If you have trouble with your USB-Midi cable:
(1) Try resetting the USB-Midi cable by unplugging and replugging its USB connector.
(2) If you continue to have problems, try connecting your USB-Midi cable through a powered USB hub.

If you are using an external synthesizer, reset and test your synthesizer: Power cycle and do a full reset on your synthesizer, then test the synthesizer with a standard Midi keyboard, to ensure the synthesizer is in a known working configuration.

Discard Calibration: Discard the calibration, then follow the calibration procedure described in Section 7.

Try the built-in synthesizer: Connect headphones and play internal sounds. If this works, then you probably have a Midi configuration problem.

Discard all Internal User Presets and reconfigure: Discard all the presets using Options then 127, as outlined in Section 10.19. Use Section 10 to guide you in reconfiguring your Midi encoding.

Perform the Factory Calibration: Please contact technical support before you resort to this. The Factory Calibration is described in Section 13.7.

Boot in "Safe Mode": Please contact technical support before you resort to this. If you suspect problems with your firmware, you can revert to the factory-programmed firmware. Turn off power, press and hold the Red Button, then turn on the power as you keep the button pressed. Wait until power-up completes and the light flashes dim blue before you release the button. The light will continue to flash all the time, indicating a Safe Mode boot. You will need to recalibrate and set configuration options.

Other things to try: If you are still having problems, please contact technical support. It may be that new firmware will correct the problem you are seeing. If it is a hardware problem, the procedures below may be effective in hiding the problem, but it is important to inform tech support so that any necessary repairs can be made as soon as possible. You can have Haken Audio make repairs, or (for most repairs) you can obtain instructions from Haken Audio to make the repairs yourself.

## Sensor Stuck On, or Sensor Intermittently Turn On

The Continuum Fingerboard has hundreds of Hall-Effect sensors. In the unlikely event that a sensor has a hardware failure, this can cause a sensor to be stuck on, or intermittently turn on, causing spurious notes. To quiet such a sensor, press and release the Red Button, then touch "Calibrate", then value "1". This will set the at-rest threshold for the sensors and should quiet any sensor that was active while you first pressed the button. This procedure is necessary even if there is no hardware problem, if you have Light Action (Section 10.19) selected.

## Sensor Stuck Off – Marking a Flawed Sensor

If a normalized sensor value is stuck off, this can cause gross discontinuities in pitch (more than 40 cent jumps) on the Continuum Fingerboard's playing surface, or it can cause two notes to sound (with pitches about 85 cents apart) for a single finger. Please contact technical support to discuss the situation and verify the cause of the problems – pitch discontinuities and note doubling can be caused by Midi problems and other problems as well.

To mark a stuck-off sensor as flawed, press and release the Red Button and touch "Calibrate", then value "10". The LED will shine violet. Touch a finger on the playing surface location corresponding to the pitch discontinuity. When the flawed sensor is detected, the LED will shine dim blue. (If you decide to skip it, you can press the button again to return to normal operation without marking a flawed sensor.) A sensor that is marked flawed will not be used in the finger tracking, and thus the pitch discontinuity should be resolved.

## Clearing the Flawed Sensor List

To clear out the list of sensors marked as flawed, press and release the Red Button, touch "Calibrate" then value "11."

## Factory Calibration of the Continuum Fingerboard

At the end of a Continuum Fingerboard's manufacturing process, a Factory Calibration is done. Factory Calibration is a one-time procedure, and need not be repeated. Continuum Fingerboard owners need to know how to refine calibration and discard calibration (Section 7), but this three-step Factory Calibration is only described here for completeness.

1. Make sure nothing is pressing on the Continuum Fingerboard (no fingers or other objects on the playing surface or frame). Press and release the Red Button, then touch at "Calibrate", then "120+", then "7". Now the Continuum's LED should shine bright white, and (if the Haken Editor is running) the Editor will display a special message for Factory Calibration.

2. Slowly drag the back of a fingernail (to minimize friction) horizontally across the whole span of the playing surface (from one end all the way to the other) several times, using a forte finger pressure. Do this a few times next to the front edge of the playing surface, and also next to the back edge of the playing surface. Be sure to include the very ends of the surface.

3. Next, make sure nothing is pressing on the Continuum Fingerboard (no fingers or other objects on the playing surface or frame), then press and release the Red Button. The LED will now shine dim blue, indicating normal operation.

## Do-It-Yourself Repairs and Adjustments

If you loosen the screws in the Continuum Fingerboard, hundreds of springs inside your Continuum Fingerboard may slide out of position, causing serious damage to your instrument. If you wish to perform modifications or repairs on your Continuum Fingerboard, please discuss your situation with Haken Audio technical support and obtain an up-to-date Continuum Fingerboard Repair Manual. After you read the repair manual, you can decide if you would rather have Haken Audio do the repairs for you.

# Performance Controller Assignments

Midi controller data sent to the Continuum Fingerboard and ContinuuMini on Midi channels 1 and 2 has special functionality. This functionality allows external Midi controller of performance parameters that are normally available as pedal performance controls on the Continuum and ContinuuMini.

## Sending Midi Performance Values to the Continuum Fingerboard

If you use a third-party device (or software) to supply performance controller Midi values to the Continuum Fingerboard or ContinuuMini, you have the choice of using relative or absolute encoding.

Use Midi channel 2 for relative encoding. Send a pedal cc from the table below on channel 2, and use data value 63 to decrease the data value by 1, or 65 to increase by one. The relative change will be DataValue-64. If you send only values 63 and 65, the Continuum will automatically implement an acceleration algorithm for repeated decrements or increments. This feature is used with early-firmware Arturia BeatStep to work around bugs in the BeatStep's native acceleration (for more information on the BeatStep, see Sections 6.7, 12.17 and 12.18).

Use Midi channel 1 for absolute data encoding. Send a pedal cc from the table below on channel 1, with data value 0 to 127. You can either connect your device directly to the Continuum Fingerboard's Midi In jack, or, if the Haken Editor is running, connect via the "Ext Controls" (with "Music Data" or "All Data" selected) in the "Midi and Global Settings" (see Section 12 for examples).

## Receiving Midi Performance values from the Continuum Fingerboard

If you want third-party software (or a device) to receive performance pedal values from the Continuum Fingerboard, connect it via the "Ext Synth" connection (with "Config Data" or "All Data" selected) in "Midi and Global Settings" (see Section 12). The performance pedals will be encoded with the cc numbers from the table below on channel 1, and the data value will be absolute from 0 to 127.

## Performance Controller Assignments Table

Channel 1 (absolute) and Channel 2 (relative):

cc 8 — Octave Shift: Shift the playing surface by one octave down (value 48) or one octave up (value 72), or no octave shift (value 60). Regular switch pedals, as well as the Tri-Value pedal, can generate cc 8. The shift values generated may be configured to shift a different number of octaves (see cc 54 in Section 15.1, and Section 10.19).

cc 9 — Mono Switch: The Mono Switch enables single-note lines when Polyphony is greater than 1, for notes that are within the Mono Interval (see cc 48 below, and Sections 6.3 and 10.13).

cc 10 — Fine Tune: Fine Tune control, in cents. 64 is normal, 63 is one cent flat, 65 is one cent sharp.

cc 12 — i / cc 13 — ii / cc 14 — iii: The Continuum Fingerboard's internal sound parameters "i", "ii", and "iii". These may also be set using the Overlay Strip's i, ii, iii.

cc 15 — iv: The Continuum Fingerboard's internal sound parameter "iv".

cc 16 — Gen1 / cc 17 — Gen2: Gen1 and Gen2 are used with the EaganMatrix. Gen1 also is used to control release time for certain Specialty Sounds.

cc 18 — Gain: Output gain level of the internal sound. See Section 10.1.

cc 19 — AES Input Level: Level for AES input.

cc 20 — R1: Recirculator control R1, 0 (minimum) to 127 (maximum). The EaganMatrix's Master Section can provide an offset to the cc 20 value, scaled 0..1.

cc 21 — R2: Recirculator control R2, 0 (minimum) to 127 (maximum). The EaganMatrix's Master Section can provide an offset to the cc 21 value, scaled 0..1.

cc 22 — R3: Recirculator control R3, 0 (minimum) to 127 (maximum). The EaganMatrix's Master Section can provide an offset to the cc 22 value, scaled 0..1.

cc 23 — R4: Recirculator control R4, 0 (minimum) to 127 (maximum). The EaganMatrix's Master Section can provide an offset to the cc 23 value, scaled 0..1.

cc 24 — Recirculator Mix: Mix between recirculator output and dry signal. 0 = 100% dry, 127 = 100% recirculator. The EaganMatrix's Master Section can provide an offset to the cc 24 value, scaled 0..1.

cc 25 — Round Rate: Sets the rate for the Continuum Fingerboard's finger position rounding feature (see Sections 6.4 and 10.15).

cc 28 — Round Initial: Round initial finger positions to nearest half step (or nearest point in the current Pitch Table).

cc 31 — Advance: Advance to next User Preset (value 127, also called "Full Advance"), or to next preset within a Combination Preset (value 64, also called "Half Advance"; see Section 8.9). The ideal Advance pedal is a Tri-Value pedal, which does both Full Advance and Half Advance (see Section 6.5). A Yamaha switch pedal by default does only Full Advance, but can be changed to Half Advance by setting Pedal Max to 64 (see Section 10.18).

cc 65 — Equal: This is used to temporarily disable rounding, and to temporarily ignore the selected Pitch Table. Value 0 ignores rounding; value 64 does the rounding specified by the preset; value 127 does rounding but uses the Equal scale (ignores the preset's Pitch Table).

cc 64 — Sustain / cc 66 — Sostenuto 1 / cc 69 — Sostenuto 2: The Continuum Fingerboard supports one sustain and two sostenuto pedals. These pedals are dynamic: if the pedal's data value is 127, the sustain or sostenuto will be at full volume; smaller pedal values can be used for lower volume (if you use a continuous-valued pedal as opposed to a switch pedal). The Continuum Fingerboard will wait until the sustain or sostenuto pedal is released before it sends Midi Note Off. If you use a continuous-valued pedal and release it gradually, the sustained notes will fade out. If you use the two sostenuto pedals at the same time, you can control two sets of sostenuto notes.

# Configuration Controller Assignments



## Load, Store, and List Presets

Channel 16:

cc 0 (category) / cc 32 (preset) — Load Preset: Select Category with cc 0; first preset in Category will be activated. Select Preset Within Category using cc 32. Alternative method for loading preset: cc 81 and cc 82 (see below).

cc 81 (lsb) / cc 82 (msb) — Load Preset: Load User Preset Slot (Section 8.6) with values 1-16. Load System Preset with values 17-511 (add 17 to system preset #). Absolute preset number: 1-16 Load User Preset, 17-511 System Preset. The 7 LSBs (cc 81) must always be followed by the MSBs (cc 82). cc81=1-16, cc82=0 (User Presets 1-16); cc81=17-127, cc82=0 (System Presets 17-110); cc81=0-127, cc82=1 (System Presets 111-238); cc81=0-127, cc82=2 (System Presets 239-366).

cc 109 — Store Config: Store current configuration and store global settings to flash. Value: 8.

cc 57 (lsb) / cc 58 (msb) — Store Preset: Store User Preset Slot (Section 8.6) with values 1-16. Store System Preset with values 17-511 (for Editor use only). The 7 LSBs (cc 57) must always be followed by the MSBs (cc 58). Absolute preset number: 1-16 Store User Preset, 17-511 System Presets.

cc 109 — Demo Setup: Load 16 demo presets into User Preset Slots, and transmit names of the 16 demo presets using cc 56 Text (see below). Value: 39.

cc 109 — Transmit Config: Transmit the current configuration on its Midi Out jack, using the same Midi messages used to download the configuration. Value: 16.

cc 55, bit 0 — Transmit Updates: The Continuum Fingerboard will automatically transmit the current configuration whenever the configuration changes, using the same Midi messages used to download configurations. 0 no updates (default), 1 transmit updates.

cc 109 — Transmit Names: Transmit names of 16 User Preset Slots and all System Presets, using cc 56 Text (see below). Category names will be included. Value: 32.

cc 56 — Text: Identifies the Ascii text that follows; included in the Continuum Fingerboard's response to Transmit Config, Transmit Updates, and Transmit Names (see above). Ascii data is transmitted as channel 16 channel pressure, terminated by value 127. Finally, if text is a preset name, cc 57 and 58 (see above) identify the preset number. Values: 0 preset name, 1 preset text, 8 category name.

## Midi Device Compatibility

Channel 16:

cc 61, bit 3 — Kyma Mode: Communicate with Symbolic Sound's Kyma; automatically update polyphony and multi-split as Sounds are loaded within Kyma; if the Haken Editor is running and has a Midi keyboard as ExtDevice, the Continuum will channelize the keyboard data (one note per Midi channel) allowing both keyboard and Continuum. 1 to activate, 0 is default.

cc 109 — Low Power Bluetooth: Use 5% of Midi Data Rate, for Low Power Bluetooth Midi. This data rate is much too slow for Continuum playing, but convenient for configuration with wireless Continuum Remote apps. 38 = 5% Midi rate, 37 = 33% Midi rate, 36 = 100% Midi rate.

cc 117 — Loopback Detect: When receiving Midi input, the Continuum outputs cc 117 once per second to test for Midi loopback. Both Channel 16 and Channel 1 are checked with this mechanism. Values: 0-127 random data.

## X, Y, and Z Coding

Channel 16:

cc 44 — Middle C: Midi note number corresponding to middle C position. 0-127, 60 is default.

cc 54 — Octave Shift Configuration: Midi note number corresponding to middle C position while the Octave Shift is active. This value and 60 minus this value will be encoded in the Octave Shift (cc 8) if the Tri-Value pedal is used. 0-127, 48 is -1 octave, 72 is +1 octave.

cc 40 — X Bend Range: Number of half steps for Midi Pitch Bends. Values > 96 indicate MPE+ bend range of 96, with ch1 input bend range = Value-95. 1-96 bend range, >96 MPE+ ch1 range.

cc 41 — Y Controller Assignment: Controller assignment for finger Y position (front-back). No value is transmitted for Y if the controller assignment is 0. Controller assignment 127 will transmit using cc 74, without shelving at the extremes of the Y range. 1-127, 74 is default, 0 no output.

cc 42 — Z Controller Assignment: Controller assignment for finger Z position (pressure). Special value 127 selects MPE encoding: Channel Pressure for Z, ch 1 cc 127 for polyphony, ch 2 RPN 0 for pitch bend range (see Section 10.9). No value is transmitted for Z if the controller assignment is 0. Value 70 selects MPE+ Encoding (see Section 10.9 for details). 1-69 to select Z cc, 70 MPE+ (default), 127 MPE, 0 no output.

cc 43, bits 0-2 — Midi Note Processing: A value of 0 sets the Note On velocity to a constant maximum (127). A value of 1 encodes initial finger velocity in the Note On velocity byte. Value 2 encodes Note On velocity computed by EaganMatrix formula V. Value 3 avoids transmitting any Note On, Note Off, or Pitch Bend messages. Value 4 makes the Continuum act as a 3-d ribbon controller, providing pitch bends for an external Midi keyboard. Value 5 always uses 60 for the Midi key number, and all bends are referenced from Middle C. Value 6 enables special Kyma processing. See Section 10.10 for details. 0 constant 127, 1 velocity, 2 formula, 3 no note output, 4 External Note mode, 5 Ethervox mode, 6 Kyma mode.

## Rounding and Pitch Tables

See Section 14.3 for the Round Rate controller. The following configuration affects how Round Rate is used.

Channel 16:

cc 61, bit 1 — Release Only: Round rate has effect only after finger is lifted from surface (during release portion of note). 1 to activate, 0 is default.

cc 51 — Select Pitch Table: Select Pitch Table for Round Initial, Round Rate, and surface pitch warping. 60..71 for Just tuning with C..B tonic centre. 1..50 for n-tone Equal tuning, with n divisions per octave. 80..87 for a user-defined downloadable Pitch Tables (see Section 6.4). 1-50 n-tone Equal, 60-71 Just, 80-87 custom, 0 is default.

cc 61, bit 0 — Reverse Pitches: Reverse X so that high pitches are to the left and lower pitches are to the right. 1 to activate, 0 is default.

## Polyphony, Routing, and Split

Channel 16:

cc 39 — Polyphony: Base polyphony, and two flags: Allow Increased Sample Computation Rate and Allow Expanded Polyphony. 1-16, +32 Increased Rate, +64 Allow Expand Poly.

cc 49, bits 2-4 — Channel Priority: Select how new notes get assigned to Midi channels: Oldest (assign the new note to the Least Recently Used channel), Same (assign to channel that played the same pitch), or Lowest (assign to the lowest channel number that is available). Select High 1, High 2, High 3, or High 4 to restrict notes from the playing surface to the highest Midi channel(s) within the polyphony (see Section 10.6). 0 Oldest, 1 Same, 2 Lowest, 3-6 High 1 to 4.

cc 36, bits 0-2 — Surface Routing: The Continuum Fingerboard's surface activity may be merged to any or all of the following: Midi Out, Continuum Voltage Converter (CVC), and Internal Sound. bit 0 for Midi Out, bit 1 for Internal, bit 2 for CVC.

cc 36, bits 3-5 — Midi In Routing: The Continuum Fingerboard's Midi In may be merged to any or all of the following: Midi Out, Continuum Voltage Converter (CVC), and Internal Sound. bit 3 for Midi Out, bit 4 for Internal, bit 5 for CVC.

cc 45 — Split Point: Note number for split point. 0-127, 60 is default.

cc 43, bits 3-5 — Split Mode: Select split mode (see Section 10.12). An alternative split mechanism, Multi-Split, is described in Section 10.12. 0 off, 1 polyphonic, 2,3 single below/above, 4,5 internal b/a, 6-8 CEE Combination, 9-10 CEE triple.

## Pedals

Channel 16 (see also Section 14):

cc 52 — Pedal1 Jack: Midi controller assignment for Pedal 1 Jack. See Section 14, 64 is default.

cc 76 — Pedal1 Min: Minimum data value for Pedal 1. 0-127, 0 is default.

cc 77 — Pedal1 Max: Maximum data value for Pedal 1. 0-127, 127 is default.

cc 53 — Pedal2 Jack: Midi controller assignment for Pedal 2 Jack. See Section 14, 66 is default.

cc 78 — Pedal2 Min: Minimum data value for Pedal 2. 0-127, 0 is default.

cc 79 — Pedal2 Max: Maximum data value for Pedal 2. 0-127, 127 is default.

## Mono Function

Channel 16:

cc 46 — Mono Function Configuration: Select between portamento, legato, and retrigger in single note lines. Transitions can be pressure-based or time-based. See Section 6.3 and Section 10.13. 0 Portamento (default), 1 Legato Z, 2 Retrigger Z, 3 Legato T, 4,5 Retrig New/All.

cc 48 — Mono Interval: Sequential notes played within the Mono Interval will be performed as single-note lines. The Mono Switch (see Section 14.3) can be used to enable and disable effect of the Mono Interval during a performance. 0 disables this, 1-96 interval, 0 is default.

## Firmware Version and CVC Serial Number

Channel 16:

cc 102 / cc 103 — Firmware Version: High 7 bits of firmware version (cc 102) and Low 7 bits of firmware version (cc 103). This is included in the Continuum Fingerboard's response to Transmit Config and Transmit Updates. Values: 0-127.

cc 104 / cc 105 / cc 106 — CVC Serial: Bits 15-14 of 16-bit CVC serial number (cc 104, values 0-3), Bits 13-7 (cc 105, values 0-127), Bits 6-0 (cc 106, values 0-127). This is included in the Continuum Fingerboard's response to Transmit Config and Transmit Updates.

## Other Configuration Controller Assignments

Channel 16:

cc 35 — Midi Program: Transmit Midi program change on each Midi channel used by the Continuum Fingerboard. The Midi program change will be transmitted immediately, and whenever this preset is loaded. 0 disabled, 1-20 Midi program.

cc 33, bits 3-4 — Aes3 Options: Select the Aes3 output sample rate. This rate can be internally generated or slaved to the Aes3 input sample rate. 0 = 96 kHz, 1 = Slave, 2 = 48 kHz.

cc 91 — Tweak: When the Haken Editor is running, this will modify (tweak) the mouseover parameter in the Editor. 0-127.

cc 109 — Calibration: Refine calibration, and discard calibration (see Section 7). 35 refine, 34 discard.

# Using the ContinuuMini

ContinuuMini Specific Information

Now that you have your new ContinuuMini, how do you connect, configure and use it to its full potential? This section will get you on your way. Note: in this section when the term "Continuum" is used, it refers to the half or full-size Haken Continuum, not the ContinuuMini.

Additional Equipment You Might Consider Useful: All you need to start using your ContinuuMini is a USB power supply (for example your laptop), a USB MINI-B cable (provided) and a 1/8" (3.5mm) TRS stereo cable to connect to your mixer, amplifier or possibly DAW (or a compatible set of headphones). You might also consider purchasing one or more of the following items:

- Mobile Power: APC 3400mAh Mobile Power Pack - APC M3PMBK - or similar (for battery-powered playing). Add a pair of headphones or earbuds and you can play your ContinuuMini anywhere, anytime.
- Pedal Connection: HOSA MHE-100.5 Right Angle 1/8" TRS to 1/4" TRS Adapter. The ContinuuMini supports a single pedal which can be a switched pedal, Continuous pedal or the tri-octave pedal available from Haken Audio.
- RCA Connection: Stereo mini to RCA cable - HOSA CMR-206 - for connection to RCA connections on amplifier.
- Carrying Case: A nice solution is the 25" Clear 2 ID Alvin Ice Tube – Model: MT25-CL (also comes in a variety of colors).

Firmware Download: One of the first things you may need to do after receiving your ContinuuMini is update the firmware. See firmware download section (Chapter 11). The ContinuuMini downloads firmware identically to the Continuum once it is connected to your computer, however, make sure to download the ContinuuMini firmware versus the Continuum firmware. If you download firmware and the menu systems seems strange, make sure you have not downloaded Continuum firmware by mistake. You can always redownload at any time.

## Connecting Up

The ContinuuMini is simple to set up and use right out of the box with no computer involvement.

1. Connect your ContinuuMini's USB port (labelled "500 mA") to a USB source using the provided MINI-B USB cable or a longer one of your own if you wish. This source could be a USB port on your computer, a USB charger or even a battery powered USB device. Windows and Mac computers will automatically recognize the USB connection and you can then also bring up the EaganMatrix Editor as well if you like. Once powered, the ContinuuMini will boot up almost instantly and be ready to play once you see the LEDs on the 7 Segment Display (front LED panel) show a non-blinking preset number. If the Display shows "ERRP", the USB host or other device you are using to power the ContinuuMini is not providing the required 500 milliamps. On first boot, you should see a "001" (User Preset 1) in the LED display - or the last preset number set if you are powering up from a previous playing session. If you see an "ERRL" message, you have a MIDI loop – check your MIDI connections. Note: The ContinuuMini performs a self-calibration when booting. It is important not to touch the surface during this time or you will receive an ERRF error message. If you get this message, simply depower and repower the instrument through its USB connection making sure not to touch the playing surface while booting.

2. Connect the audio headphone output using a mini stereo TRS cable to the desired source (mixer, amplifier, sound system, headphones, etc.) If you hear hum and suspect a ground loop, you can try a ground loop noise isolator such as that provided by besign-tech.com (which comes with the ContinuuMini Kickstarter units). Connect this to the headphone port and then connect your stereo TRS cable to the isolator. You can also connect a 3.5mm to 1/8" headphone adaptor to the isolator if you wish to connect to a stereo mixer, amp or headphone. As with the continuum, always use a stereo audio cable for this connection.

Ground Loop Isolator Note: You will never need the isolator when you have headphones plugged into your ContinuuMini. But when you connect your ContinuuMini to your home stereo (using cables like HOSA CMR-206), or a studio amplifier, or an A/D converter to your DAW – then you might need the Isolator. Only use the Isolator if you need it – try the connection first without Isolator – if it sounds good, great! If you hear noise, then insert the Ground Loop Isolator. You want one and only one ground connection between the ContinuuMini and whatever you connect it to. For headphones and battery-powered speakers, the audio cable provides this one ground connection. But in a home or studio setup, there might be multiple ground paths. While USB connections are convenient, they are not ground-isolated like traditional DIN-5 Midi, so it is easy to get ground loops. If you hear ground loop noise, it is easy to fix - use the Isolator. The Isolator referenced above has two matched transformers inside, one for the right channel audio and one for the left channel audio.

3. Finally, if you wish to use a switched or continuous pedal (depending on the needs of your presets) or perhaps the Haken Audio Tri-Value pedal. Connect it to the Ped/Ext bi-directional port using a 3.5mm to 1/4" stereo adapter as recommended above. See the Pedal Jacks section of this manual for pedal recommendations. Note that certain presets assume the pedal has specific EaganMatrix programmed functions pertaining to one or more aspects of the preset. You can assign the pedal to various ContinuuMini functions of any preset using the ContinuuMini display or the EaganMatrix. The Ped/Ext port is also used to connect to a Haken Audio Continuum Voltage Converter or Evaton Technologies uCVC (Eurorack) using a custom cable allowing you to interface (send CV outputs) to a modular synthesis system. A special CV cable is also available to allow CV inputs to be sent directly into the ContinuuMini using the same pedal port.

Now simply use the Preset "+" and "–" buttons to scroll through the hundreds of presets stored on the ContinuuMini. We suggest you start by turning down the volume/gain and bring it up gradually as you press the playing surface – especially if you are connecting a set of headphones. The ContinuuMini is preset to "dim" the audio in case you start by plugging in a headphone and play too loud. This can be removed through the display function described below.

## The ContinuuMini Seven Segment Display

The ContinuuMini 7 Segment Display allows you to perform the following functions:

- Displays the storage code for the present preset (you will need the EaganMatrix to see the text associated with each preset code)
- Allows you to scroll through presets and preset categories
- Allows you to store a currently displayed preset in one of the 16 user defined preset locations
- Displays how close you are to being in tune while playing
- Displays if rounding is set for a preset
- Displays if the external (Ext) port is activated for a pedal or I2C mode (for CVC or uCVC connection)
- Allows you to change octave – up to two octaves up or down
- Displays if octave up or octave down is engaged (applies to pedal octave control as well)
- Allows you to enter the Menu system and display and edit various settings
- Displays error codes

## Preset Display

The initial release of ContinuuMini firmware contains 350+ System Presets arranged into 15 categories accessed by category number (for example 101, 309 or 1302). Presets 0..016 are reserved for User Presets that can be set to any system or user created preset.

The ContinuuMini system preset categories are:
1. Bass (1xx) – A few different bass synth sounds
2. Keyboard (2xx) – Presets that emulate keyboard and tine sounds (but note the continuum is not a sampler and the intent is not to try and exactly duplicate acoustic instruments such as a piano)
3. Looping (3xx) – Presets that contain internal looping elements
4. Morphing (4xx) – Presets that morph between sounds in various ways
5. Percussion (5xx) – Pitched and non-pitched percussion presets
6. Plucked (6xx) – A separate set of presets for plucked sounds
7. Sound Design (7xx) – A set of presets that show off the many sound design capabilities of the EaganMatrix
8. String (8xx) – String presets – bowed, plucked and struck
9. Synth (9xx) – Various presets emulating different synthesizer sounds
10. Vocal (10xx) – Presets using the EaganMatrix formant generator to create all kinds of vocal sounds
11. Wind (11xx) – Presets that emulate wind instrument both real and fantastic
12. Midi (12xx) – These are for playing external MIDI devices and create no sound
13. CVC (13xx) – These are for connecting to the Continuum Voltage Converter or Evaton Technologies uCVC. They create different voltage outputs based on the requirements of various popular modular and CV controlled devices
14. Drones (14xx) – These are presets that play themselves without touching the fingerboard. They concentrate on the use of Shape Generators (see EaganMatrix Manual)
15. Utilities (15xx) – Various presets that are used to create noise for calibrating speakers perhaps, and simple presets for demonstrating EaganMatrix basics. If you are interested in programming your own presets, start with these examples

More presets and sound design features will be coming in future releases and you can load presets you or others in the Continuum and ContinuuMini community create using the EaganMatrix at any time. Note that the categories in the Continuum are slightly different due to some functions in the Continuum that are not supported by the ContinuuMini. Any Continuum preset can be loaded into the ContinuuMini (and vice versa), however many ContinuuMini presets have been optimized for the Mini's playing surface versus the Continuum and some Continuum presets use functions not available on the ContinuuMini. Otherwise the sound engine and method of preset creation is identical for Continuum and ContinuuMini.

## Connecting to the EaganMatrix (Haken Editor)

Connection to the EaganMatrix editor can be of great assistance when using the ContinuuMini as it lets you easily access presets and most features you have available on the seven segment display. It also is required for the following:

• Updating ContinuuMini firmware
• Programming and making changes to EaganMatrix presets
• Loading user created presets to user preset locations
• Easily interfacing external MIDI-host based keyboards and other MIDI controllers to the Mini - especially if you want to use more than one MIDI host device, as it is hard to find stand-alone MIDI host interfaces supporting more than one MIDI host.

Assuming you have installed the ContinuuMini firmware, which includes the EaganMatrix application, do the following:

1. Connect the ContinuuMini to the computer's USB port (or USB hub if you are using one). The Mini should be autodetected by your computer.
2. Make sure the ContinuuMini boots and displays its current preset (normally 001 when first starting).
3. Bring up the EaganMatrix program by clicking on its icon (it will be labelled "Haken Editor" in the top level Firmware directory.
4. Wait for the program to load and detect the ContinuuMini. This could take a few seconds. Initially the top right hand corner of the screen may display a Version 0.00 until the actual firmware is detected and displayed in the upper righthand corner of the screen.
5. Eventually the version should change to the current firmware release installed and you should see the type of Continuum listed as M2x for the Mini. You should also see the active LED icon on the left side of the screen turn blue. The top left notice should also display Haken Editor text with the ContinuuMini Device in parentheses (ContinuuMini SN00nnnn).
6. If the Blue LED icon does not light, the ContinuuMini is not being detected properly. In this case go to the top right Cog Wheel and bring up the "MIDI and Global Settings" window.
7. From there, make sure the Sources/Continuum and Destinations/Continuum selections are set to your ContinuuMini device. If you have the Mini connected before you bring up the editor it should be automatically recognized and placed in the Continuum Source and Destination slots. If you also have a continuum and use the same computer to bring up the editor, the continuum device may have previously been set instead of the Mini. In this case always check that the correct device is being detected in the EaganMatrix. You can not connect to both devices at the same time using a single instance of the EaganMatrix.
8. Also note that the Blue triangle icons on the Continuum line should be blinking indicating the ContinuuMini is connected to the editor. From here please consult the EaganMatrix manual for details on its operations and preset programming. If the ContinuuMini is not listed as the Source and Destination or the blue triangles are not blinking make sure you do not have another copy of the Haken Editor running or another program running that has already connected to the ContinuuMini's USB interface (such as a DAW).

## Playing the ContinuuMini

Here are a few tips to getting the most out of playing the instrument:

1. The ContinuuMini's surface is not a soft neoprene bed like the Continuum. It is a very sensitive plate that can be depressed and slightly rocked inwards as you play from the bottom to the top of the surface. Its sensors can detect very slight pressure changes in the Pitch (left to right direction - X), Volume (pressure - Z) and to a lesser extent front to back motion (Y). Try gently rocking your finger left-to-right on a pitched preset that does not have the Rnd (Rounding) indicator lit such as "VlnVlaCelBass 2". You should be able to get a very expressive vibrato similar to what you would achieve playing a string instrument. Try playing individually articulated notes and glissandi up and down the fingerboard. Note that some presets are static and do not change with Y motion, others do, especially as you approach the top of the playing surface. For those that own continuums, the playing surface of the ContinuuMini uses the same fabric, however it feels quite different due to the harder surface on the Mini. So while the ContinuuMini retains many of the expressive fundamentals of the Continuum, it is in other ways a different instrument that requires its own playing techniques to be mastered.

2. As indicated on the instrument, the ContinuuMini is duo-tactic. This means you can play up to two notes at a time (unless the preset only supports monophonic playing). Most of the time you will be playing with one finger and one internal voice. The most common use of using two voices is either playing a drone in one hand and some melodic line with it in the other or playing some interval in one hand, perhaps as a glissando. Internally, the instrument can play up to eight voices. For example, one note can be sustained as another is triggered to build up layers of polyphony even though only two voices can be played at any time. See the online videos that will be more instructive to demonstrate the various ContinuuMini playing techniques. Note that not all presets react the same to duo-tactic playing. Presets that are highly dependent on pressure changes in formulas may not respond well when two fingers are playing at the same time. You may find the volume of the second finger increases dramatically in some presets when playing duo-tactically, especially those involving Shape Generator envelope control of noise inputs to formulas (for example Karplus Basic and other Waveguide based formulas). These presets are best played monophonically. Take care when articulating to not overlap fingers which may create a breaking sound if you are not careful when articulating - if two fingers touch the surface at once when you expect monophonic output. In general, it will take a while to get used to developing ContinuuMini playing technique, but it should not take that much time to become attuned to the instrument. If you are a Continuum owner, don't expect the Mini to respond exactly like the Continuum. They are two different instruments even though they share a number of basic performance characteristics and have a common sound engine.

3. A special note on playing front to back (Y): Obviously there is limited range in Y on the playing surface, however, Y itself has certain performance characteristics that you should be aware of. The range sensitivity of Y is most pronounced in the middle two thirds of the playing surface. Here Y will respond from min to max (default values 0..1) depending on how you place your finger on the playing surface. However, the range of Y reduces towards the ends of the playing surface. If you want to make use of Y to its fullest, play in the center two thirds of the fingerboard.

4. If you notice a preset does not respond well to duo-tactic playing or you are getting unwanted transitions between notes because two fingers slightly overlap and you desire to set it to purely monophonic mode (as may be the case with many solo instrument presets such as a sax or trumpet), you can go into the EaganMatrix for that preset and set "Base Polyphony" to 1, making sure the "Allow Expanded Polyphony" option is not checked. You can tell if this is set correctly if the Preset displays Polyphony as "Base 1". If it displays "Base1+", you have "Allow Expanded Polyphony" checked. Be aware that some presets assume higher polyphony for sound design. If you set a preset to Base 1 from a higher polyphony and it does not sound right, that preset may have to be kept at its original polyphony setting.

## Octave Buttons and ContinuuMini Range

The "Oct +" and "Oct –" buttons can be pressed at any time to raise and lower the current pitch by up to two octaves (press once for one octave and twice for two octaves). The "+" or "-" octave indicator (".") will be lit if you have raised or lowered the default octave setting. Note that you cannot raise or lower an octave while you are playing a pitch. You must press the octave buttons before the note comes in you want to shift. The new octave setting will remain until changed. On resetting the ContinuuMini the default octave setting will be applied. You can also change octaves with a pedal and the display's octave indicators will respond as expected.

Range Comparison: The ContinuuMini (without octave transposition engaged) has a range of 28 notes, MIDI Note Numbers 52..79. This compares to the half and full size Continuums.

## Menu Mode Options and Preset Selection

Consult the template on the back of your ContinuuMini for a summary of configuration operations. If the two Octave buttons are pressed simultaneously, the front panel enters Menu mode and blinks. From there you can press either the "Oct +" or "Oct –" buttons to scroll through the ContinuuMini's menu options and use the "Preset +" or "Preset –" buttons to select values for the current option. Menu settings are retained if you turn the ContinuuMini off and on.

### Menu Option 1: Preset Category and Preset Selection and Storage

The default Menu option displays the preset number. Press both octave buttons together when the preset is displayed and you will enter Category selection mode. The leftmost digit in the preset will blink. Select either the "Preset +" or "Preset –" buttons to scroll through the Preset categories: 001 (user preset) to 1501 (Utilities category). When you reach a desired category, once again press the "Oct +" and "Oct –" buttons simultaneously to exit Menu mode. Now you can use the "Preset +" or "Preset –" buttons to scroll forward and backward through the current category's presets. You can in this manner continue to scroll to the next or previous category's presets as well. The quickest way to traverse presets is to bring up the EaganMatrix editor which allows you to easily select them from the "Category" and "System Preset" pull downs – the same as with the continuum. After selecting preset values 1..15 (User Presets), if you power the ContinuuMini off and on, the last selected User Preset will be maintained.

Storing a User Preset Using the 7 Segment Display: If you want to store the current preset being played to a user preset (be it a System Preset or one you loaded from disk to current preset storage using the EaganMatrix), when out of Menu mode, press the "Oct +" and "Preset +" buttons simultaneously. "to nn" will be displayed. While continuing to hold down the "Oct +" button scroll to the desired user preset location ("to01".."to16") you want to store the preset to using the "Preset +" or "Preset –" buttons and then release the "Oct +" button. The System or loaded preset will be stored to that user location and if the EaganMatrix is connected, the name of the newly stored preset will appear in the user preset display.

Fast Preset Increment/Decrement: If you press the "+" button and then press "+" and "-" together you will fast increment through the presets to the max preset as you continue to hold both buttons. If you press the "-" button and then press "+" and "-" together you will fast decrement through the presets to the min preset (001).

### Menu Option 2: Audio Dim

The second menu option is the audio dimming setting ("di n"). This allows for four levels of audio attenuation where n can range from 0..3. The zero setting is unity level (no added attenuation). The default setting is 3 (max dim). This function was included to guard against connecting headphones without realizing a preset may be set to a volume level that could be distressing. This also can be helpful when you are creating EaganMatrix presets and want to set max dim in case you program a sound that generates a massive burst of sound (easily done if you are new to EaganMatrix programming). Default = 3 (Maximum audio dimming). Minimum = 0 (full volume). Note that the EaganMatrix has an additional dim function that works independently from the ContinuuMini dim. If you power the ContinuuMini off and on, the last Dim value set will be retained. Future firmware release will add additional Dim options.

### Menu Option 3: Gain Setting

This sets the current preset's output gain that can also be adjusted in the EaganMatrix ("ga nn"). If you set the gain in the 7 Segment Display, the EaganMatrix gain dial will change accordingly, and vice versa. As in the preset selection, press "Preset +" or "Preset –" to increment or decrement the gain and press both Preset buttons simultaneously to fast increment or decrement (depending on whether you last pressed the "+" or "-" button. Note that there are only four values displayed and two are taken for display of "ga". If you go past 99, values 100..127 will be displayed as ".00" through ".27". Other options use this display code. As always, press both Oct buttons simultaneously to exit the Menu mode and retain the last Gain value set. Minimum value = 0, maximum value = 127. Default = 52.

### Menu Option 4: Round Rate

This option sets the round rate (pitch quantization) of the preset ("rr nn"). If "rr" is greater than 0, the "RND" indicator in the 7 Segment Display will be lit ("."). The round rate ranges from 0 (no rounding) to 127 (full rounding). At full rounding, pitches on the fingerboard will change in increments of a semitone (unless programmed differently in the EaganMatrix). As you change values in the 7 Segment Display, the associated rounding dial in the EaganMatrix will be changed in tandem. Changes in the EaganMatrix Round Rate dial will be reflected in the ContinuuMini 7 Segment Display. Note that a round rate of 1 has a special meaning (glacial rounding – see section 6.4). Minimum value = 0, maximum value = 127.

### Menu Option 5: Round Initial

This menu option sets initial rounding ("ri n"). This allows you to instantly move to the closest semitone you press on the fingerboard, but after that the rounding will be determined by the round rate (from none to full). Default = 0 (Initial Rounding = Off), 1 = Initial Rounding is On.

### Menu Options 5-8: Setting Barrels i, ii, iii, iv

This menu option ("b[1..4] nn") allows you to set the designated barrel to a value. In practice, using the EaganMatrix or an external MIDI controller will be a much better and faster way to dynamically change barrel settings during performance or set the pedal to control a desired barrel. Minimum value = 0, maximum value = 127.

Examples:
"b110" indicates Barrel i is set to MIDI value 10
"b237" indicates Barrel ii is set to MIDI value 37
"b3 0" indicates Barrel iii is set to MIDI value 0 (minimum)
"B4.27" indicates Barrel iv is set to MIDI value 127 (maximum)

### Menu Option 9: Effect Level

This menu option ("EL nn") allows you to set the Recirculator Mix level (amount) control from 0 (no Recirculator effect) to 127 (Max Recirculator effect). The associated EaganMatrix dial is affected and that dial also sets the 7 Segment Display effect level.

### Menu Option 10: Effect Time

This menu option ("Et nn") allows you to set the Recirculator Time from 0 (none) to 127 (max reverb time). The associated EaganMatrix dial is affected and that dial also sets the 7 Segment Display recirculator time.

### Menu Option 11: Pedal Setting

This menu option ("PEd n") allows you to set the Pedal control association. Values are:

• 0 = Octave control (default)
• 1 = Barrel Control i
• 2 = Barrel Control ii
• 3 = Barrel Control iii
• 4 = Barrel Control iv
• 5 = Output Level
• 6 = Sustain
• 7 = Sostenuto
• 8 = Advance Preset

The associated EaganMatrix control is enabled when setting through the ContinuuMini's display and setting the control in the EaganMatrix will set the appropriate pedal setting on the ContinuuMini. Note that the EaganMatrix contains more pedal options than are supported in the 7 Segment Display. If any of the unsupported pedal options are set in the EaganMatrix, the ContinuuMini's Pedal option will be defaulted, normally to 6 (Sustain).

### Menu Option 12: i2C Setting

This menu option ("i2c n") sets the Ped/Ext jack setting. Values are:

• 0 - Jack is for a pedal. Yamaha pedals, and ones that are electrically equivalent, are autodetected (See Pedal Jack section)
• 1 - Jack is for i2c. At this time, that means CVC or uCVC; more devices in the future. See CVC connection information below.
• 2 - Jack allows two non-audio rate control voltage (CV) inputs to be used by the ContinuuMini for controlling certain parameters of a preset, at this time through Ped1 and Ped2 control. Requires a custom made dual CV cable which can be purchased from Haken Audio or you can make your own. This cv-in-cable allows you to use a Eurorack (or other format) sequencer or LFO to control timbre changes or do other things you would otherwise do with an expression pedal or a damper pedal. Ideally scale your input voltage in the +/- 2.5V range, though the circuit has headroom up to +/- 3V. Try and avoid higher voltages (for example you can use a mixer to scale a +/- 5V or +/-10V CV signal into the desired range). You may also need to offset a unipolar CV signal depending on the sound design programmed.

Note: The "Ext" indicator will be lit in the display if "i2c" is set greater than zero. If you set "i2c=1" and do not connect to a CVC through the "Ped/Ext" jack, the EaganMatrix will issue a "Turn on CVC or Disconnect it" warning.

Dual CV Cable Specification: If you do not want to order a dual CV cable through Haken Audio, you can make a custom cable to connect two CV inputs to the Ped/Ext jack using standard Eurorack connectors or two 1/4" to Mini TRS.

Once connected and the i2C setting is set to "2", the EaganMatrix Ped1 and Ped2 controls can be used as they normally would in an EaganMatrix program, only now they might be associated with a CV controller input. When I2C is set to "0", a Yamaha pedal (or other as previously defined) is assumed to be connected to the Ped/Ext jack and in this case only Ped1 is active in the EaganMatrix.

Example usage: Using an Intellijel Planar(2) Joystick to have the X axis and Y axis control respectively the cutoff frequency and bandwidth of an OSC fed Low Pass Filter, programmed in the EaganMatrix. Connect the CV outputs from the Planar (ideally scaled +/- 2.5V) using the dual CV custom cable to the Ped/Ext input jack of the ContinuuMini with Ped/Ext setting set to I2C="2". Then assign Ped1 and Ped2 to barrels using the pedal pulldown options, set formulas tied to those barrels and associate those formulas with filter cutoff and bandwidth of the LPF. This function is intended for CV control signals, not audio rate signals (which will not harm anything but will alias). This lets you have direct control of pedal associated EaganMatrix functions through CV.

### Menu Option 12: 7 Segment Display Brightness Setting

This menu option ("brt n") sets the brightness of the 7 Segment Display from 0 (min) to 3 (max). On powering the ContinuuMini off and back on, the previous brightness setting will be retained. The default setting is 3 (max brightness).

## CVC Connection and Setup (Used with "I2C" setting = 1)

The CVC connection requires a special cable or adapter which you can make or purchase from Haken Audio. If you want to make your own CVC cable or connection adapter, you will connect to your CVC with a 5 pin populated male-to-male MIDI cable. The CVC uses unused MIDI pins 1 and 3 for I2C connections in addition to reusing the MIDI shield (Pin2).

Mini TRS to DIN wiring connections: In one case you can use a Mini TRS to Female MIDI DIN connector to create the adaptor. The adaptor is useful if you already have a Continuum and you want to easily switch the CVC connection from one to the other by just changing the MIDI cable from Continuum to ContinuuMini adaptor. You can also use the same pinouts (1-3 reversed for Male connection) to create a cable that will connect directly from your ContinuuMini to the CVC Input. In this case you will use a MINI TRS on one end of the cable and a Male MIDI DIN on the other. The cable you create should be no more than 10 feet long.

To test the CVC setup:
• Set the "i2c" menu option = 1
• Connect a MIDI cable from CVC out to the ContinuuMini's custom cable's Female DIN output connection. The MIDI cable you use must contain all five pins terminated (as some MIDI cables only connect the pins MIDI requires (2, 3 and 4), but the CVC uses pins 1, 2 and 5.
• Connect the TRS end of the custom cable to the Ped/Ext port of the ContinuuMini
• In the EaganMatrix, select preset CVC: "CVC 10V Linear Z" (assuming you are connecting to a Eurorack modular system. See other settings if you are connecting to a Buchla or Voyager, etc.
• Verify that the EaganMatrix sees the CVC by hovering your mouse over the CVC section.
• It is suggested that you set the Note Priority (also referred to as Channel Priority) to Low to test (Use Lowest Channel Number). The ContinuuMini can only play two notes at a time but it will cycle through all MPE channels to max polyphony of the preset if you set a Note Priority to Oldest.
• If you want to play duo-phonically and send two CVC channels to your modular make sure your preset is not set to Polyphony Base 1. It must be set greater than 1 for sending two CVC channels (though it will only send a max of two channels regardless of how much higher you set polyphony).
• Connect up the CVC WXYZ outputs as you desire for channels 1 and 2 (the setup above will only play duo-phonically on two channels). Note that if you kept the default Note Priority Oldest setting in the EaganMatrix and set polyphony of the preset to 4, all four channels of the CVC would output as you play (but only two channels at any time).
• Play your ContinuuMini and you should both see the lights on your CVC activate and the appropriate channels engage and the WXYZ CV outputs should be controlling your modular or other CV controlled device as you expect. Note that Y changes very quickly from 0V to 10V (with the test setting described here). When you lift your finger, Y will remain at whatever voltage output setting it was at when you broke contact with the playing surface. Z will always return to zero when you lift your finger (unless you have programmed Y and Z to do other things in the EaganMatrix for a preset).

## Pitch Reference

Once you start playing the ContinuuMini, the display changes from showing the current preset to pitch display mode. A series of hashes are displayed indicating how true the finger placement is to "correct" pitch. If you are playing monophonically the pitch display will appear in the middle of the display. If you are playing two voices, the pitch display of the lower voice will appear at the bottom of the seven segment display and the pitch of the upper voice will appear up top.

The pitch display is interpreted as follows: Two bright hashes in the middle of the display indicate the tone is perfectly in tune to Equal Temperament, A=440 Hz. The reference dashes are in absolute cents (where 4900 cents are A440, or if you prefer MIDI note numbers over cents units, 49.00 is the MIDI note number for A 440). The hashes move to the left or right progressively dimming and brightening as you slide from note to note, giving you 1/8 of a semitone resolution on each side of the note's center.

The display is most useful when playing slowly to get accustomed to the playing surface. If you set rounding to full, you will notice that you get a consistent set of bright hashes in the middle as pitches are always corrected from note to note, no matter where you press in the note's X axis.

A "note" template is stenciled on the ContinuuMini for assisting in playing. Some may choose to ignore this and just concentrate on the playing surface, especially if you are interested in microtonal performance. Pianists will need to get used to this a bit as each note on the Mini is the same distance from the last/next.

## Continuum vs. ContinuuMini Presets and Usage

Almost all of the system presets that are part of the ContinuuMini's firmware release are also part of the Continuum's firmware. However a number of these have been optimized for use on the ContinuuMini, for example adjusting Y due to its reduced range of motion versus that available on the Continuum. If you have a Continuum and a Mini, you may notice that not all presets sound exactly the same on the two instruments. This is usually due to differences in how Y shapes a sound. On the ContinuuMini, because the range of motion is compressed, you may hear that changes in timbre (or other parameters based on Y) occur much quicker. You may want to go into the EaganMatrix for some presets and adjust Y motion to best suit your ear.

Another difference between the ContinuuMini and the Continuum is that the Continuum has more precise sensing technology. If you are comparing how the same preset responds to touch, you may perceive that the articulation profile of the Continuum is slightly different than that of the Mini. Nothing is wrong. These are two different instruments with different playing techniques and different response.

## Use of Pedals and System Presets on the ContinuuMini

The ContinuuMini supports a single pedal jack whereas the Continuum supports two. Because the ContinuuMini presets are based on Continuum versions, you will often see two pedal assignments defined. The default pedal assignment used in the "Utilities/Empty" preset assigns Pedal#1 to Sustain (Sus) and Pedal #2 to Sostenuto1 (Sos1). You can set the first pedal to some other control if you like (for example to control barrel i), but setting Pedal2 will have no effect on the ContinuuMini. Many presets will define a control for Pedal #2 as they are carried over from Continuum definitions. You will have to decide which control you will assign to Pedal #1.

For example, the preset "Utilities/TheLadder" defines Pedal #1 as the default Sustain and Pedal #2 is set to control Barrel ii (defined in this preset as "Freq"). If you prefer to use your pedal to control Barrel ii and not sustain, you can set it to Ped1 with a Mini pedal option or go into the EaganMatrix and make the assignment.

## Error Codes

The ContinuuMini can display a few error codes that are valuable to know for troubleshooting:

ERRP – This indicates that the USB device you are using to power the ContinuuMini does not put out enough power. It must supply at least 500 milliamperes.

ERRL - MIDI loopback detected. Check your MIDI setup to make sure you are not creating a MIDI loop. If you are using a Continuum with the ContinuuMini, make sure you do not have them both set as Continuum and External devices.

ERRF – A finger has been detected on the playing surface during power up. Make sure when you power the ContinuuMini that it completes its bootup and the preset number is visible before playing.

Other Codes – If you receive any other error codes, it likely indicates an unexpected problem. Note the code and contact Haken Audio if resetting the ContinuuMini does not solve the problem.

Factory Reset: You can reset your ContinuuMini to its default factory configuration by holding the "Oct +" button as you apply power to the device. There is not normally a need to do this.

## Using the ContinuuMini in Parallel with a Half or Full Size Continuum

You can have a Continuum and a ContinuuMini connected to your computer at the same time but the EaganMatrix will only detect one. If you have both connected, the ContinuuMini will be defaulted as the connected device unless it was previously manually set to detect the Continuum. You cannot at this time without a special configuration procedure (that may not work for all MIDI interfaces) run two separate instances of the EaganMatrix on a single computer, one connected to the Continuum and the other to the Mini. You can, however, easily switch the EaganMatrix between the two instruments for control and programming.

Assuming you are connected to the ContinuuMini and want to switch to connect to the Continuum, bring up the "Midi and Global Settings" window and in the Source and Destination fields replace the ContinuuMini device with the MIDI device you have connected to your Continuum (in this case the "MIO" interface). In a few seconds the EaganMatrix firmware version will change to that supported by the Continuum (which for some releases may be the same as for the ContinuuMini). Any operations you perform in the EaganMatrix at this point will now be recognized and performed on by the Continuum. Once manually switched to the Continuum device in this manner, the editor will thereafter default to the Continuum. To switch back to editing the ContinuuMini, go back to the "Midi and Global Settings" window and replace the Continuum MIDI device with your ContinuuMini device.

## Playing the ContinuuMini from an External MIDI Controller Through EaganMatrix

If you would like to play the ContinuuMini either with an External MIDI controller/keyboard (or even along with another MIDI controller) and you are connected to the EaganMatrix perform the following steps:

1. Make sure your ContinuuMini is connected to your computer's USB port (or USB hub if you are using one).
2. Exit the EaganMatrix if it is running (the EaganMatrix will not recognize new MIDI controllers added to your system while it is running).
3. Connect your MIDI USB controller/keyboard to the PC's USB connection (or USB Hub if you are using one). Verify the device is seen by your computer and any drivers are loaded that might be required. In this example we will use a Linnstrument, which is autodetected.
4. Bring up the EaganMatrix.
5. Go to the Cogwheel at the top right of the screen and select the "Midi and Global Settings" pull down option.
6. Up to two External device connections are allowed ("Ext1" and "Ext2"). These will initially be defined as "Unconnected" if they were not previously set to a device.
7. Select the USB device you have connected from the pull down list for Source, Destination or both depending on if you want to pass MIDI data to the ContinuuMini (source) or have the ContinuuMini pass data to your device (Destination) or both. If you just want to play the Mini from an external controller, only the Source field is required.
8. Select an external data type. Each external control supports three data filtering options:
   a. Music Data – This allows Music data to pass to/from the selected device. This is normally data affecting the MIDI notes and durations you will be playing, pitch bend data, pedal data, octave transposition and even barrel controls. If you only want to play the Mini's sound engine from your external source and do not want to risk changing presets, choose this option.
   b. Config Data – This allows EaganMatrix specific configuration data to be sent to/from the ContinuuMini along with other configuration information such as preset selection. If you only want to connect an external controller to change presets, choose this option.
   c. All Data - This allows both Music data and Config data to pass through to/from the external device. If you want to use both MIDI note and MINI configuration information choose this option. If you want full Continuum control choose this option.
9. From here you will want to determine what kind of external MIDI controller/device you are using. Does it need to be defined on Channel 1 only? Is it an MPE device? Will you need to set up the EaganMatrix to use CC74 for Y detection or Channel 11 for Z, etc.

## Monophonic vs. Duophonic vs. Polyphonic MPE ContinuuMini Operation

If you have never owned an MPE MIDI instrument there are a few things you need to know to understand how the ContinuuMini is receiving (for using an external MIDI controller) and transmitting MIDI data (for controlling other MIDI instruments or recording in a DAW). The ContinuuMini can never transmit on more than two MIDI channels at a time when played, however, depending on the polyphony set for the current preset it can receive and transmit on up to eight MIDI channels. The Continuum for example can transmit eight simultaneous MIDI channels if set to Base Polyphony 8 if you press eight fingers at the same time. No matter how many fingers you press on the ContinuuMini, it will only transmit a maximum of two MIDI channels (if polyphony is set greater than 1). However, if you connect an external MIDI keyboard to the Mini, it is possible to play up to eight simultaneous notes using the Mini's sound engine depending on the polyphony set.

The ContinuuMini uses a 2x DSP processor and will display M2x under the Cogwheel. It will support Base Polyphony and Expanded Polyphony with the following limitations as it cannot be further expanded.

A plus sign after the Base Polyphony numeral indicates expanded polyphony is set for that preset which doubles the polyphony. While a Continuum can support up to 24 voices on a fully expanded unit, the ContinuuMini supports a maximum of 8 MIDI channels. Thus, a "Base 1+" preset will allow you to send data in on two MIDI channels and the Mini will play duo-phonically outputting on up to two MIDI channels. "Base 2+" will process on up to four MIDI channels, etc.

MPE instruments normally expect MIDI input channels to start on Channel 2 (Channel 1 being reserved) and will start outputting MIDI data on Channel 2. The ContinuuMini is an MPE instrument and will operate in this mode. However, the Mini's MPE modes also will accept polyphonic MIDI input data on Channel 1 (Channel 1 mode). This allows a standard MIDI keyboard that does not support MPE to be used with the ContinuuMini. In this case, all polyphony should be transmitted on Channel 1 with the following assumptions:

• MPE/MPE+ Channel 1 operation assumes Polyphonic Pressure is sent for Z pressure if the controller supports it but it will process standard MIDI keyboard velocity. It will support up to eight channels/voices based on the Base polyphony setting. When playing, MPE mode will always output Aftertouch and MPE+ mode will output Polyphonic Pressure. Output will always be on channels 2..Max Polyphony+1 even though polyphonic input is accepted on channel 1. Note Process should be set to "Dynamic" if you are recording the ContinuuMini MIDI data and you cannot process aftertouch or polyphonic pressure. If note process is set to its default of "Static", the output MIDI velocity of all notes will be set to 127.

• If MPE is not set and Y/Z are set to explicit CC values (defaulting Y=CC74, Z=CC11), the pressure CC specified (default CC11) should be used and the MIDI channels processed start on one, not two. For example if you set "Base Polyphony 1+", the ContinuuMini will play two incoming voices on channels 1 and 2 but will not recognize polyphonic input on Channel 1.

### Note Priority

Because the ContinuuMini plays a maximum of two notes, it is advisable to set Note Priority to "Low" if you are recording in a DAW. Depending on if you are playing monophonically or duo-phonically, MIDI output will always be on channels 1 and 2 (if X/Y set to a CC value) or 2 and 3 (if X/Y is set to MPE/MPE+). You can thus predict the channels you are outputting on. If you set Note Priority to its default of "Oldest" you will cycle through channels every time you play a note through your maximum polyphony and you will not be able to predict what channels you are playing on. See section 10.6.

### Configuring Bend, Timbre (Y) and Pressure (Z) Control

X (Bend), Y (front to back) and Z (pressure) configuration works as follows: Bend can be set independently from the X or Y settings. If MPE or MPE+ mode is set for Y/Z bend is limited to 12, 24, 36, 48 or 96 semitones assuming the MPE device playing the ContinuuMini is set to the same bend value. If Y/Z are set to a specific CC value (for example: Y=74/CC=11), all Bend range selections are then available.

If MPE/MPE+ is set and you are playing the ContinuuMini with a MIDI controller in Channel 1 mode, the 96:2, 96:5, 96:7 and 96:12 options should be used to map to your bend device.

If either Y or Z are set to MPE+ or MPE mode, both will be set to that value. If either Y or Z are set to a specific MIDI channel, the other will be set to its CC default (Default Y=CC74, Default Z=CC11) – though they can be set to specific values at this point as noted in the option list.

Polyphony for the ContinuuMini presets you create should be set from 1 to 8 without expanded polyphony or 1 to 4 with expanded polyphony (as max polyphony is 8). Also note that if MPE+ or MPE is set for Y/Z, channels 2 through max polyphony +1 will be used. Channel 1 in this case is reserved for control use. If Y/Z are set to specific CCs (Y=CC74, Z=CC11 for example), MIDI channels 1 through max base polyphony will be used.

MIDI operation is also influenced by the EaganMatrix Note Process Setting. If you are using MPE/MPE+ Channel 1 playing mode and your device is not an MPE device, you likely want to set Note Process to Dynamic to allow the ContinuuMini to process MIDI Velocity as expected.

### Channel and Priority Processing Preservation on Preset Loading

Normally, the X/Y MPE/MPE+ setting and Channel priority (as well as other settings such as rounding) are stored per preset. If you go to Midi and Global Settings in the Cogwheel options, you can set the Preset Loading option from the default of "Replace" to "Preserve". Replace will replace the options using whatever values are stored with the preset. This option is very useful if you are using Channel 1 processing mode (Y/Z set to MPE+ or MPE) and you want to quickly move between presets and insure you are always going to stay in that mode (use "Preserve Midi Encoding"). Use "Preserve Surface Processing" to preserve Note Process. This is detailed in section 10.22.

## Playing the ContinuuMini from the Continuum

While the ContinuuMini cannot be used as a Continuum DSP extension (like an iCEE or xCEE) it is easy to play the ContinuuMini from the full or half size continuum with up to 8 voice polyphony. This will allow you to use the ContinuuMini to augment your presets with other presets that will play with them if you mix the outputs of both instruments. Follow these steps for use with EaganMatrix:

• Bring up the EaganMatrix connected to the Continuum. Select the preset you wish to play on the Continuum along with a preset you will play on the ContinuuMini (if you only want to play the Mini from the Continuum, it is suggested you select the Empty preset so no sound will be generated from the Continuum).
• In the Continuum preset, set Y/Z to MPE+ and Bend to 96 and Select a desired Note Priority (you can set Midi and Global "Preserve" options to keep these settings if you will be changing presets on the continuum).
• Match polyphony as best you can. Select a polyphony for the preset you wish to play on the ContinuuMini. Here is where there may be a conflict. You are setting the preset for play from the Continuum, but you also want to play the ContinuuMini. If you have a preset of Base 4 set on the Continuum for example, you will only be able to play four of the eight possible voices on the preset you are playing on the Mini. Be aware of this if you are playing and you do not hear the number of voices you expect being played on the ContinuuMini.
• Save that preset to a user position on the Continuum if you like for recall later so you do not have to make any more modifications.
• Exit the editor for the Continuum (if you are using the old editor) or change the input source to be the ContinuuMini if you are using the new integrated editor.
• Make sure the ContinuuMini is connected to the editor (blue dot on).
• Go to MIDI and Global Settings and select the Continuum's MIDI controller as the External Source and make sure it is set to Music Data (as you do not want to pass Continuum configuration data to the ContinuuMini).
• Select a preset on the ContinuuMini you want to play on the Continuum and make sure that is also set to Y/Z MPE+, Bend=96 and to be safe set that preset to the same Note Priority you set in your Continuum controlling preset.
• You should now be able to play the ContinuuMini from the Continuum, however the Mini is now a "satellite" of the Continuum and for best effect, you should not try and play the ContinuuMini while you are playing the Continuum controlling the MINI or notes may cut out or distort as they are both playing on the same channels.

## Playing the Continuum from the ContinuuMini

It is possible to play the Continuum from the ContinuuMini, though likely if you have them both you will be playing the Mini from the Continuum as described above. To play the Continuum from the Mini:

• Bring up the Haken Editor by replacing the ContinuuMini Source/Destination with the interface of your Continuum (MIO in this case).
• Select a preset on the Continuum you want to play. Set Y/Z to MPE+.
• In the External Data Source select your ContinuuMini as Source device – but make sure to leave the Destination unconnected or you will create a MIDI loop and get an error.
• Make sure your ContinuuMini is playing a preset that sets Y/Z to MPE+ and bend is set to whatever will be set in the Continuum preset being played, likely 96. Set the Continuum preset to match.
• You should now be able to play the Continuum from the Mini.

## Playing the ContinuuMini from Other MPE and non-MPE MIDI Instruments/Controllers through the EaganMatrix - Use Cases

Use Case 1: Using a Non MPE-based MIDI Controller/Instrument to play the ContinuuMini (Standard USB MIDI keyboard for example).

• Connect MIDI instrument to computer USB port
• Verify it is recognized by your operating system (if not a class compliant USB interface and drivers need to be loaded)
• Bring up EaganMatrix
• Select the Device in MIDI and Global Settings as External Source (set as "Music" if you just want to control notes or "All" if you also want to control preset functions with knobs or dials)
• Set MIDI Instrument to play on Channel 1
• Set EaganMatrix Preset's Y/Z to "MPE+" (if you set Y or Z to a CC you will not be able to play polyphonically). Set Midi and Global Setting Preset Loading to "Midi Encoding Preserve" if you want to guarantee you preserve Channel 1 processing as you change presets.
• Set EaganMatrix Preset's Bend = 96:N, where N=2, 5, 7, or 12 semitones. A standard MIDI keyboard's bend wheel will go to the max bend you set, so if you set 12 you will be able to bend up/down an octave, etc. If your MIDI controller has a bend setting, set to the same value.
• If possible set your modulation wheel to CC74 (or some other control you might have for that purpose if you want to control Y while you play). However, the EaganMatrix will interpret the default CC1 as Y if you do not set to 74 (but the EaganMatrix will not display Y changing in the latter case).
• You should now be able to play the ContinuuMini polyphonically using standard MIDI Velocity for dynamic control.
• If you have any dials or push buttons that can be set to CCs, consult Chapter 15 for proper settings to be able to control preset functions such as Barrels, Gens, Recirculator, etc.

Use Case 2: Using a Semi MPE-based MIDI Instrument to play the ContinuuMini (that supports Aftertouch but perhaps not MPE Channel per Note operation – such as the CME XKey37).

• Connect MIDI instrument to computer USB port
• Verify it is recognized (MIDI class compliant devices should be recognized automatically)
• If your device needs configuring in a software tool do that first as you may not be able to run the tool once the device is connected to the EaganMatrix.
• Set Aftertouch to Polyphonic Key Pressure (so each key can react independently to pressure)
• Set other aftertouch and key sensitivity, velocity curves, etc. as desired if you can. In the XKey37 case, set "First Aftertouch value is derived from Velocity".
• Save setting to your MIDI controller.
• Bring up EaganMatrix
• Select the Device in MIDI and Global Settings as External Source (set as "Music" if you just want to control notes or "All" if you also want to control preset functions with knobs or dials)
• Set MIDI Instrument to play on Channel 1
• Set EaganMatrix Y/Z to "MPE+"
• Set EaganMatrix Bend = 96:N, where N=2, 5, 7, or 12.
• You should now be able to play with Polyphonic Aftertouch on Channel 1

## Use Case 3: Using an MPE-based MIDI Instrument to play the ContinuuMini

Using an MPE-based MIDI Instrument to play the ContinuuMini (such as Linnstrument or Roli Rise as examples of settings to use for other MPE controllers).

• Connect MIDI instrument to computer USB port
• Verify it is recognized (MIDI class compliant devices should be recognized automatically)
• If your device needs configuring in a software tool do that first as you may not be able to run the tool once the device is connected to the EaganMatrix (for example the Roli Rise the Roli Dashboard for configuration as the Linnstrument can be set manually on the fly at any time).

On Linnstrument:
- Set Midi Mode = Channel Per Note
- Set View = Per Note Channels
- Set Channels = 2..Max Polyphony+1 (as set in your desired Mini preset)
- Set Pitch = On
- Set Timbre/Y=C74
- Set Loudness (Pressure) Z = Chan Pres (Channel Pressure)
- Set X Bend = 12, 24, 36, 48 or 96 (suggest 24)

Roli Rise:
- Bring up Roli Dashboard
- Set MIDI Channel Mode = Multi
- Set MPE = On
- Set Range = 2..Max Polyphony+1 (as set in your desired Mini preset)
- Set Glide and Slice Tracking = Last Note Played (default)
- Set Press Tracking (Z) = Last Note Played (default)
- Set Pitch Bend Range = 96 (or less if you don't need large bend – just match ContinuuMini setting)
- Set Octave setting to match your desired range of ContinuuMini output (normally this would be down one octave on Rise).
- If using a pedal, set that to desired CC (see CC control section in this manual). In this case make sure EaganMatrix is set to receive "All" Midi data, not just "Music" data.

On ContinuuMini:
- Set Y/Z= "MPE" for desired preset ("MPE+" will work too)
- Set Z/Bend = 12, 24, 36, 48 or 96 (whatever you set your MIDI instrument to)

## Playing the ContinuuMini Directly from Another Source

If you wish to play the ContinuuMini directly from another MPE or Standard MIDI controller without interfacing to a computer, a MIDI interface with a host connection port will be required. In cases where you want to connect two instruments that use a host MIDI connection (such as ContinuuMini and Linnstrument) you will need a way to connect multiple host ports through a USB/MIDI hub configuration of some sort.

Perhaps the controller has a MIDI DIN port or perhaps a MIDI USB port or as in the case of the Linnstrument or XKey37 they have both MIDI output options. Here are two configuration options that can be used. This example uses an iConnectMIDI4+ MIDI interface, but any similar device that can support a MIDI USB host port with DIN inputs should also work. The first uses a USB host connection to a MIDI interface and then MIDI DIN Linnstrument output to the MIDI interface. The second uses a secondary USB hub to connect to the MIDI interface host port and then everything gets connected over USB (but you have to make sure the hub has enough port power for your devices). The Linnstrument is an example in the diagram. Other MIDI controllers could be substituted in its place.

## Connecting the Anckorage Spring Sound App to the ContinuuMini

If you plan on using the Continuum Remote function in the Anckorage Spring Sound app with your ContinuuMini running an iPad or iPhone, you will need to connect the Mini to the USB host port of a MIDI interface such as the iConnectivity iConnectMidi4+ or iConnectAudio4+ interfaces and then with a Lightning-to-USB adapter (the Apple camera adapter can be used or a generic alternative) connected to the iOS device, connect to the USB port of the MIDI interface. In the iConnectivity device case, this will require a USB A-male to USB B-male cable.

An alternative if your MIDI interface has a USB MIDI host port but no extra USB ports (such as the Kenton MIDI Host mk2 interface) is to connect a powered USB hub capable of powering the ContinuuMini to the host port of your MIDI interface and connect the iPad or iPhone to that using a Micro USB to USB-A cable from the Lightning-to-USB adapter. In this configuration you can also connect other external controllers like a Linnstrument or XKey37 if you wish.

## Recording the ContinuuMini with a DAW for processing and playback

Not many DAWs support MPE operation. Bitwig does and Traction, Reaper and Cubase to some degree, but any DAW can be used to record ContinuuMini MIDI data, though you may need to edit CCs for best operation. Here are some tips for general DAW use:

• Set up the ContinuuMini as you desire and exit the EaganMatrix prior to bringing up your DAW as it may not see your Mini device if the Editor is still connected to it.

• When recording the ContinuuMini in your DAW make sure you never set both the Input and Output device as the Mini. If recording the Mini, set the output device to your normal MIDI controller (or its current setting). When you are ready to play, set the input device to something other than the ContinuuMini and set ContinuuMini as the output device (if you are planning to play back from the Mini).

• If you only want to record monophonically, set the EaganMatrix preset you are on to Base 1. In this case, it doesn't matter what Note Priority you set. Everything will be recorded on Channel 1 (if Y/X is set to a specific CC value) or channel 2 (if Y/X is set to MPE/MPE+). This will make it easier to play back Mini data if you want to do this on a non MPE compliant MIDI instrument or instrument plugin (else you may have to duplicate sample plugin channels for example to process all MPE outputs).

• If you set anything other than polyphony Base 1 and you play duo-phonically, you will always be recording on more than one MIDI channel.

• Always look at your MIDI data stream after recording the Mini to have a better idea of what it has output, as it may not be recording what you expect if you don't fully understand Note Priority and duo-tactic voice assignments.

• Remember based on your Y/Z setting (specific CCs set, "MPE" or "MPE+") you will be generating different MIDI Data channel outputs:
  - MIDI Velocity will always be set to 127 if Note Process for the current preset is set to the default "Static Velocity". For DAW input and playback expecting Velocity, the preset should be set to "Dynamic Velocity" (initial finger velocity) which will create a better default playback if you are not going to record/process Z data.
  - If Y and Z are set to specific CC values, those will be generated in the MIDI output stream for example defaults: Y=CC74 (brightness), Z=CC11 (expression). MIDI will be output between channels 1 and max polyphony set in your preset depending on the Note Priority used.
  - If MPE mode is set, Aftertouch will be output for Z along with CC74
  - If MPE+ is set Aftertouch plus CC87 will be output for Z along with CC74
  - Pitch Bend information is always sent on the current channel played/output (even if 96:NN is set – as that is for receiving bend information).

• Note Priority will affect how MIDI Channels are output. If you are recording multiple times, the channel that you last played will be the last in the Note Priority sequence for the next recording. This will make it impossible for you to really know what channel is being recorded to for some Note Priorities (Oldest and Same Pitch for example). If you need predictability in what channels are output, set to Base 1 so you can predict Channel 1 (or 2) or use "Lowest Channel Number" or one of the "Highest" options. For example, if you set Base polyphony to Base 4 and Note Priority to "Lowest", because you can play a maximum of two notes on the ContinuuMini, you know you will always be recording channels 1 and 2 if Y/Z are set to a CC value or recording channels 2 and 3 if you are set to MPE or MPE+ mode.

• If you want to record the ContinuuMini on a specific MIDI channel, set Note Priority to "Highest Channel Within Polyphony" and then set Base Polyphony to the Channel you want to record (if YZ are set to a specific CC) or to Base Polyphony +1 (if you are using MPE/MPE+ mode). This will have the effect of setting you to Base 1 as only the highest channel in the polyphony you set will be recorded even if you play duo-phonically (last finger pressed will be the note sent). Note that you can set the Polyphony higher than 8 in this case if you want to record to channels 9-16 but that should be avoided. Remember to take the Expanded Polyphony setting into account when determining the highest voice in the polyphony.

Highest Channel Within Polyphony output table (Y=CC74,Z=CC11 / MPE or MPE+):
Base 1: Channel 1/2 | Base 1+: Channel 2/3
Base 2: Channel 2/3 | Base 2+: Channel 4/5
Base 3: Channel 3/4 | Base 3+: Channel 6/7
Base 4: Channel 4/5 | Base 4+: Channel 8/9
Base 5: Channel 5/6 | Base 5+: Channel 8/9
Base 6: Channel 6/7 | Base 6+: Channel 8/9
Base 7: Channel 7/8 | Base 7+: Channel 8/9
Base 8: Channel 8/9 | Base 8+: Channel 8/9

## ContinuuMini Troubleshooting Use Cases

Here is a representative list of possible issues you may experience and suggested solutions.

### Case 1: Low Volume

I connect my ContinuuMini to a sound system, but the output seems much lower in volume than expected.

Check: Is your Gain setting too low?
Check: Do you have the Dim setting set greater than zero?
Check: Is Dim in the EaganMatrix selected?

### Case 2: No EaganMatrix Connection

The ContinuuMini will not connect to the EaganMatrix. I don't get the expected Blue connection LED displayed.

Check: Is your Source and Destination in Midi and Global Settings set to a ContinuuMini device?
Check: Do you have a proper USB connection to your computer?
Check: Did you disconnect and reconnect the ContinuuMini to your computer? For example, if you unplugged your ContinuuMini from a USB port on a Windows computer and reinserted the cable into a different port. On Windows, when you plug into a different port, Windows changes the name of the device (it appends numbers) -- so that you can have several of the "identical" device at once. It is normally a nice convenience, but in this case, restart the EaganMatrix editor.
Check: Do you have another device connected to the ContinuuMini? For example are you connected to it in your DAW or some other MIDI controller or MIDI program? Exit the DAW and then bring up the editor and see if it now connects to the Mini.

### Case 3: ContinuuMini Presets Sound Different than on Continuum

I'm playing presets on my ContinuuMini but they don't sound exactly the same as on my Continuum.

Check: Does the preset make use of the Y parameter in very noticeable ways. Y has a much greater range of motion on the continuum. On the Mini you more use a rocking motion for engaging Y and some presets that are highly dependent on Y may not sound exactly the same as Y will be engaged much quicker from min to max. You may want to experiment altering Y control in the EaganMatrix to tweak some presets to your liking.
Check: Did you reset the Polyphony of the preset on the Mini? Certain presets make assumptions on base polyphony and if you set it lower than expected the sound may not be what you expect.

### Case 4: ERRF Message

I just applied power to my ContinuuMini and it is displaying ERRF?

Check: Make sure when you booted the ContinuuMini your finger was not on the playing surface. The device needs to initialize when starting up and a finger on the surface will interfere with this process.

### Case 5: Pedal Doesn't Work

I just connected a pedal but it does not seem to work.

Check: That the preset you are playing has Pedal 1 set to control the expected parameter you assume the pedal will trigger (for example sustain).
Check: That the EaganMatrix if you have it up displays the expected pedal icon. If not check your pedal type compatibility and possibly pedal adapter.
Check: That the "I2C" setting is set to 0 (pedal mode) and not 1 or 2 (CVC and external input modes).

### Case 6: No Sound for Preset

I set the ContinuuMini to a preset number but no sound is coming out.

Check: Your audio output is properly connected.
Check: That you did not load a preset that is meant for playing CVC (12nn) or MIDI (13nn). These presets are not programmed to output a sound but instead to control external devices.
Check: The Empty preset is not set as it creates no sound and it is meant as a blank EaganMatrix template to use as a starting point to create your own presets.

### Case 7: External Controller Doesn't Work with EaganMatrix

I plug an external MIDI controller into my computer to use with the ContinuuMini but the EaganMatrix does not see it to select it for External Music Data Control in the Midi and Global Settings window.

Check: Did you connect the device while the Editor was running? The EaganMatrix editor should be exited and restarted if you attach a USB device while it is running. Then it should see the new device for selection.

### Case 8: Duophonic Playing Doesn't Work

I can't seem to play two voices at the same time for a preset.

Check: Check that the preset is not set to Polyphony Base 1 in the EaganMatrix. For two voice playing this must be set to Base 2 or above (though you will only be able to play a maximum of two voices at the same time, but you can build up a higher layer of internal polyphony using sustain).

### Case 9: Duo-Phonic Playing Not What I Expect

I can play two voices at the same time for some presets but they are not as independent as I would like.

Check: The ContinuuMini is not 100% independently polyphonic from the playing surface. If you have one finger down, that will control some of the characteristics of the sound if you press a second finger. For example, the dynamic level of your polyphony is based on the highest pressure level played on either finger. You can however play minor second intervals on the ContinuuMini without any problems (that can be a challenge on the Continuum). The best use of two voice playing is to use one voice as a pedal tone and play the second along with that or play intervals, perhaps in glissando.

### Case 10: CVC (or uCVC) Doesn't Play as Expected

I've connected my ContinuuMini up to my CVC and set i2C=1 on the Mini and it seems to be doing something, but it does not play as I expect it to. Notes cut out.

Check: Remember that the CVC follows the Note Priority setting, that defaults to Oldest (MIDI channel used for new notes). Depending on what your polyphony setting is this means that any of the four CV sets of parameters may be playing. If you are set to Polyphony Base 2 and Oldest Priority, the CVC channels will alternate between the first 2 channels. Because the ContinuuMini can only play a max of two voices, you likely will get the most desired CVC results by setting Polyphony to "Lowest".

### Case 11: Can't Switch Between Continuum and ContinuuMini in Editor

I have a Continuum and ContinuuMini and can't seem to switch back and forth in the EaganMatrix Editor.

Check: In Midi and Global Settings make sure you have the Source and Destination set to the MIDI device connected to your Continuum or Mini and make sure you are set to MPE+ and the routing indicators are all lit for In and Out.

### Case 12: Unknown Error Code is Displayed

My ContinuuMini is displaying a strange error code (not ERRP, ERRL or ERRF).

Check: Write down the code and simply unplug the ContinuuMini from USB and reconnect. The error code will likely disappear and you are back to normal playing mode. If this happens again please contact Haken Audio.

### Case 13: Trouble Recording in a DAW (on PC/Windows10)

I've connected up a MIDI device to control the ContinuuMini or a DAW (for example Cubase) to record or control, however I don't seem to be able to use the DAW properly but it sees the Mini as an input source (for example, the DAW will not record ContinuuMini MIDI information).

Check: Is the EaganMatrix editor running and connected before you brought up the DAW and connected it? The EaganMatrix should be closed out if you want to perform certain operations that use the ContinuuMini USB interface with other connections. The EaganMatrix Editor can normally be left up if you are using a device that sends information to the Mini through the Editor (by selecting the device in the Editor MIDI controls). Note: this is not an issue on the MAC where multiple devices can grab the ContinuuMini device.

### Case 14: ContinuuMini Doesn't Play as Expected from Continuum

I'm trying to play the ContinuuMini from my Continuum and it plays but I get notes that cut out and bend does not seem to work.

Check: Make sure that you have set both to Y/Z = MPE+ with bend 96 and that the External Source when you have the ContinuuMini connected to the EaganMatrix is set to the MIDI interface you use to connect your Continuum to the EaganMatrix.

### Case 15: ContinuuMini Seems out of Tune

When running the Haken Editor, turning on the surface display and then pressing down on the surface, the tracking is shown to be slightly off in the x-direction. In addition, the ContinuuMini plays out of expected tune.

Check: When you go to MIDI and Global Settings in Cogwheel, is the Fine Tune setting set to no pitch offset (exactly in the middle)?

### Case 16: Recirculator/Reverb Does Not Seem to Work

The Recirculator (reverb) functions do not appear to work. None of the reverb options do anything to the sound.

Check: When you go to MIDI and Global Settings in Cogwheel, is the Recirculator (Recirc) option set to Enabled?

### Case 17: Using ContinuuMini as a MIDI Ribbon Controller

I want to use the ContinuuMini as a MIDI Ribbon Controller but can't seem to get it to output on a single channel.

Remember you will change MIDI output channels if polyphony is > 1 every time you play a new note. In MPE modes, the output channel starts at 2 and will cycle through channels 2..9 depending on the polyphony set. If you set Y=74 (or any non MPE setting) then MIDI output channels start at 1 and you will cycle through channels 1..8 (if max polyphony is set to 8 or 4+). So if you want to use the Mini as a MIDI ribbon sending output to a single channel (CH1), set Y=74 and Polyphony=1 (not 1+) for your preset. If you set to MPE/MPE+ only channel 2 will be output in this setting. And you can turn MIDI routing off to the DSP if you don't want the Mini to play on pressing.

Note: On Pitch Bend input to the Mini on Channel 1, there are four new options: 96:2, 96:5, 96:7, 96:12. These let you set incoming PB range when you are sending data to the Mini on channel 1 - which you would likely do for most external keyboard/controller or sequencing applications. (Also applies for Continuum)

### Case 18: Pitch Bend Magnitude When Recording to DAW

The pitch bend range you set will affect the magnitude of the pitch bend messages. This may be important to you if you are recording the pitch bend into a DAW and cannot easily scale it to your desired range. There is normally no reason to set the ContinuuMini to PB=96 range as the normal playing range of the Mini is 28 notes without using octave keys or octave scaling.

The following MIDI input examples of a DAW recording give you an example of what the pitch bend magnitude scaling is for min and max settings. It is suggested if you want to use the ContinuuMini as a pitch bend recorder, set to Y=74 and then set your desired PB range. In MPE modes, the minimum range allowed is 12. If Y=74 (or some non-MPE setting) the EaganMatrix has lower settings. You can set anything up to 96 in this case if you are programming it through MIDI. The Editor choices are limited. (Also applies for Continuum)

### Case 19: Pitch Bend Amount Changes Between Presets

I want the Pitch Bend amount to stay the same from preset to preset but it keeps changing.

Check: In the MIDI and Global Settings page, set MIDI ENCODING to "Preserve". All preset selections will then maintain the MIDI encoding until you set the option back to its default value of "Replace". (Also applies for Continuum)

### Case 20: Rounding Rate Changes Between Presets

I want the Rounding Rate to stay the same from preset to preset but it keeps changing.

Check: In the MIDI and Global Settings page, set SURFACE PROCESSING to "Preserve". All preset selections will then maintain the MIDI encoding until you set the option back to its default value of "Replace". (Also applies for Continuum)
