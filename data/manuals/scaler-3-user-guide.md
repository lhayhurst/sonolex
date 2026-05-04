---
id: scaler-3-user-guide
title: "Scaler 3 User Guide"
source: "Scaler-3-User-Guide.pdf"
convertedAt: 2026-03-21T09:53:25.513Z
summary: "Scaler 3 is a music software plugin (and standalone app) designed to help musicians and producers with chords, scales, and music theory. It detects keys, suggests chord progressions, and provides tools for binding chords and exploring harmonic ideas, making it easier to compose and arrange music even without deep theory knowledge."
---

# User Guide

Scaler 3 User Guide

# Table of Contents

Introduction, Disclaimer, Scaler 3: Empowering Creativity, Resources, Installation & Registration, Quick Start, Quick Tips, Operating Modes, Plugin Operation, Standalone Operation, Interface Overview, Recurring Features, Binding Chords, Suggest Mode, Colors, Header Section, About Menu, Registration, Help, Navigation Tabs, Presets, Detection, Transport Controls, DAW Sync, Timing Indicators, Exporting, Misc. Header Features, Midi Panic, Undo & Redo, Output Level, Settings Menu, Playback Menu, Preferences Menu, Browse Page, Section A, Browsing Scales, Browsing Chord Sets, Section A Header, Section B, Section B Header, Scale List, Section C, Working with Chords, Suggest Mode (Per Scale, Tonal), Additional Section C Features, Create Page, Interactivity with Sections B & C, Circle of Fifths, Modulation (Progression, Secondary Scale, Modal Interchange, Mediants, Neo-Riemannian), Explore, Colors, Sketch, Arrange Page, Main Track, Arrange Page Header, Motions, Motions Browser, Motion Tracks, Multi-Channel MIDI Out, Working with MIDI, MIDI Modifier Controls, MIDI Editor, Mixer, Track Controls, Loading Sounds, Adjusting Sounds, Loading Effects, Adjusting Effects, Instrument Panel, Keyboard Visualization, Fretboard Visualization, Chord Charts, Global Controls, Main Track Motions, Humanize, Keys Lock, Voice Grouping, Appendix, Color-Coding System, Musical Notation, Troubleshooting, Legal.

# Introduction



## Disclaimer

The information in this document is subject to change without notice and does not represent a commitment on the part of Scaler Music. No part of this publication may be copied, reproduced or otherwise transmitted or recorded, for any purpose, without prior written permission by Scaler Music. Scaler Music and Scaler 3 associated logos are (registered) trademarks of Scaler Music. Special thanks to the Scaler Music Forum and Beta Testers, who were invaluable not just in tracking down bugs, but in making Scaler 3 a better product.

## Scaler 3: Empowering Creativity

Scaler 3 is a powerful composition assistant that helps you identify scales, build expressive chord progressions, and create melodic sequences with ease. Designed to enhance creativity while keeping you in control, it streamlines the composition process, making it faster and more intuitive. With multi-track sequencing, real-time performance features, and intelligent harmonic tools, Scaler 3 provides a dynamic environment for musical exploration. It also includes an extensive library of curated chord progressions and performances from world-renowned artists across a wide range of genres, offering endless inspiration for producers, composers, and musicians alike.

## Resources

In addition to this guide, the Scaler Music YouTube channel and the School of Synthesis YouTube channel offer a wide range of tutorials, how-to and guided videos, and creative walkthroughs. Furthermore, the Scaler Music Forum hosts a vibrant and supportive community where users can seek help and share insights. Scaler Music YouTube Channel, School of Synthesis YouTube Channel, Scaler Music Forum.

## Installation & Registration

The installation and registration process may vary slightly depending on where Scaler 3 was purchased. This guide outlines the general process. For specific instructions, please log in to your Scaler Music or Plugin Boutique account, depending on where Scaler 3 was purchased.

1. Download the Mac or Windows installer file and double-click it to begin the installation process.
2. Open the Scaler 3 plugin within your DAW or launch the standalone version.

Before activation, Scaler 3 will run in trial mode for 14 days with full functionality. After the trial period expires, the plugin must be activated to continue use.

To activate Scaler 3:
1. Click the Scaler 3 logo in the top-left corner and select Registration.
2. Locate your serial number in your Scaler Music or Plugin Boutique account.
3. Enter the serial number and click Activate Plugin.
4. If the serial number is valid, the activation window will close, and Scaler 3 will be fully functional without interruption.

## Quick Start

Mixer: Use mixer channels to adjust each track's volume, pan, mute, or solo. Use insert slots to select an instrument sound, or a 3rd party instrument plugin with multiple audio effect slots.

Arrange Page: Add tracks using the + icon in the top left. This will display the Motion browser. A track will be created based on the Motion selected. This track will automatically follow your Main Track chords. Select a clip and use the sidebar controls to change the Motion pattern, or make modifications to the existing Motion. Enable and browse Motions to perform your chord progression expressively.

Browse Page: Find a pre-made chord set using the browser in Section A. Find chords belonging to a particular scale using Section B. Drag chords to Section C to create your own custom chord progression.

Global Controls: For a variety of real-time chord voicing adjustments, activate a Voice Grouping profile. To automatically tune incoming MIDI notes to your selected chord or scale, activate Keys Lock.

Header: Use the tabs on the top left to select one of the three pages: Browse | Create | Arrange.

Create Page - Circle of Fifths: Use the Circle of Fifths page to find new chords or modify existing chords. For chord suggestions, select a key from the Circle of Fifths, or select notes on the keyboard. Search for any chord by typing. Select a chord from Section C to edit notes via the keyboard, or via the controls at the top of the Circle of Fifths page.

Create Page - Explore: Browse expansive chord constellations via Genre and Mood. Dynamic Scale automatically adjusts the color of all chords to show how closely they relate to the last played chord. Chords around the inner circle are safe and those around the outer circle are more adventurous. Chords on the left tend to sound darker, whereas chords on the right sound brighter.

Create Page - Colors: Quickly browse and audition voicing variations and substitutions for your selected scale's diatonic chords. Click the voicing name on the left to select an alternate voicing for that row of chords. Then drag chords to Section C to add to your progression, or for further editing via the Circle of Fifths page.

## Quick Tips

Scaler 3 includes a variety of global presets designed to help you get started and discover the features of Scaler 3. These can be accessed via the preset menu in Scaler 3's Header.

If you are coming from Scaler 2, it is possible to import your User Chord Sets for use in Scaler 3. Either click use the 'Import Chord Set' button from the User category in Section B, or drag your own folders or XML files into the Scaler 3 'ChordSets' folder using your computer's file browser.

When dragging chords, make sure to align the left side of the chord with the intended destination e.g. between chords to add to the existing progression, or on top of chords to replace existing chords.

When dragging chords to your Main Track in Section C, they default to a length of one bar, relative to your selected time signature. You can manually adjust chord lengths after adding them; however, you may need to adjust the division setting on the Arrange Page to accommodate finer changes, as the default division is set to one bar.

### Horizontal Scroll & Zoom Bar

Visible in most sections of Scaler 3, the horizontal scroll and zoom bar provides two functions:

- Scroll – Click and drag anywhere within the bar (except the edges) to move left or right across your chord progressions or motion patterns.
- Zoom – Click and drag the left or right edges of the bar to zoom in or out. Dragging inward (towards the center) zooms in, while dragging outward (away from the center) zooms out.

Quick Scroll Shortcut – Hold the Shift key and scroll the mouse wheel up or down to scroll left or right.

Hold the Shift key and left-click on a chord or motion clip to mute it. This is especially useful in the Arrange Page sequencer when you want to mute certain chords from your Main Track progression while still allowing motion clips to follow their harmonic content.

## Operating Modes

You have the choice of running Scaler 3 as a standalone application, in which it will behave like any other program on your computer. Alternatively, you can use it as a virtual instrument plug-in within your DAW (Digital Audio Workstation) or compatible host.

### Plugin Operation

Scaler is an audio plugin that works with most Digital Audio Workstations (DAWs) and is available in VST, AU, and AAX formats. To start using Scaler, load it onto a software instrument, audio, or MIDI track in your DAW. If you're unsure how to do this, refer to your DAW's manual for specific instructions.

If your DAW organizes your plugins by vendor, you will find Scaler under Scaler Music.

Scaler Plugin Versions:

Scaler 3 (Virtual Instrument)
- Designed for use on MIDI/instrument tracks.
- Detects chords from both MIDI and audio input
- Can send MIDI output to external instruments via multichannel MIDI (if supported by your DAW or compatible host)

Scaler Audio 3 (Audio FX)
- Designed for use on audio tracks
- Analyzes and detects chords and scales from audio input
- Ideal for working with pre-recorded audio, samples, or live instruments

Scaler 3 Control
- Designed for DAWs that support AU MIDI Controlled Effect plugins
- Includes the same detection features and exclusive content as Scaler 3
- Ideal for controlling external instruments within DAWs that only support AU plugins, such as Logic Pro
- Does not generate sound; requires a separate instrument plugin on the same track for audio output

*Not compatible with all DAWs. Refer to the manual of your DAW for more information on how to route audio and MIDI in your software.

### Standalone Operation

Scaler 3 can also be used as a standalone application, allowing you to work independently of a DAW. Once launched, Scaler 3 will function like any other software on your computer. You can configure audio and MIDI settings within the application to ensure proper input and output routing. This mode enables you to explore Scaler 3's features, play and manipulate chords, and experiment with musical ideas without requiring a DAW.

Select Options at the top left of the Scaler 3 standalone application to access:

Audio/MIDI Settings:
- Feedback Loop – When on audio input is muted to avoid a feedback loop
- Output – Set to your preferred output device. Select "Test" for a tone to confirm the output destination registers sound from Scaler 3.
- Input – Set to your preferred input device.
- Active Output Channels – Enable or disable channels
- Active Input Channels – Enable or disable channels
- Sample Rate – Adjust the audio sample rate
- Audio Buffer Size – Adjust the buffer size
- Active MIDI Inputs – Enable or disable MIDI inputs
- Bluetooth MIDI – Enable Bluetooth MIDI connections

State Management:
- Save/Load State – Save your current state or load a saved one
- Reset to Default State – Reset Scaler 3 to its default state

## Interface Overview

Scaler 3 features a structured interface designed for both exploration and composition. The Header Section and Global Controls remain visible at all times, providing essential navigation and playback functionality. The core workflow is divided across three main pages: Browse, Create, and Arrange, each offering specialized tools for different stages of the music-making process.

Header Section: This section offers key navigation, playback, and customization controls and remains visible at all times when using Scaler 3.

Browse Page: The main Scaler 3 page used to browse scales and chord sets, and create your own custom chord progression.

Create Page: A variety of compositional tools to help you create and discover chords, and to help you develop the rest of your song.

Arrange Page: Add additional instruments to your song with full multi-track mixing and editing control.

Instrument Panel / Global Controls: Visualize and play Scaler's sounds using a keyboard or guitar interface, and control a variety of playback parameters related to the Main Track.

## Recurring Features



### Binding Chords

As well as triggering chords by clicking on them with your mouse, you can also 'bind' sections of Scaler's interface to trigger chords with individual MIDI notes. This is accomplished by clicking the 'bind' button to the right of certain rows of chords.

The inactive bind button indicates that its corresponding row or group of chords can be bound and triggered by your MIDI controller.

When the icon is highlighted in yellow the selected row or group of chords is bound, meaning incoming MIDI notes will trigger the corresponding chords.

Additionally, Scaler 3's on-screen keyboard/piano will indicate the bind range by displaying yellow highlights with the bind icon at the bottom of the keys.

By default, the bind range is mapped to the white keys from C2, but this can be adjusted in Settings > Playback Menu.

### Suggest Mode

Suggest Mode provides chord suggestions, generates entire patterns, or helps complete your existing progression. While it is primarily associated with Section C – Main Track, it is also accessible via Sketch on the Create Page, making it a Recurring Feature.

For a detailed explanation, see Section C - Main Track > Suggest Mode.

### Colors

Colors in Scaler 3 allow you to easily enhance basic triads with harmonic variations, helping you create richer, more expressive chords. This includes extensions, custom voicings, and functional variations such as tonics, subdominants, substitutions, and inversions, giving your progressions more depth and character.

While a dedicated Colors page exists within the Create Page, quick access is also available via Section B – Current Scale on the Browse Page, making it a Recurring Feature.

For a detailed explanation, see Create > Colors.

# Header Section



## About Menu

To access the About Menu, click the Scaler 3 logo at the top left of the header section. The version of Scaler 3 you are currently using can be found at the top left of the window.

### Registration

This is where you can activate the Scaler 3, purchase a license, continue in trial mode, or view the successfully registered status of Scaler 3. For more information, please visit the Installation and Registration section of this user guide.

### Help

This section is comprised of links to the Welcome Tutorial, Video Tutorials, User Guide, and Scaler Music Community Forum.

Right-clicking the menu displays the following options:
- New Session - Reset the current Scaler 3 session as if you first opened it.
- Reset to Default Size - Reset to the window size as if you first opened it.

## Navigation Tabs

Access Scaler 3's core pages: Browse | Create | Arrange. Each of these pages will be described in detail over the following chapters of this user guide.

## Presets

The Preset Section allows you to load and save presets containing chords, multi-track arrangements, internal and external instruments, and effects.

When Scaler 3 is in its default state, the Preset Indicator displays the text New Session. If a preset is loaded, its name will appear in this area.

Clicking on the Preset Indicator opens the Preset Browser, where you can explore Scaler 3's factory presets, categorized by genre, or filter by Favourites and your own User Presets. You can also search for presets using the search field in the top left.

To the left of the Preset Indicator is the Favourite button, which adds the current preset to your Favourites for quick access.

When hovering over the Preset Indicator, additional controls appear:
- Previous & Next Navigation – quickly scroll through presets
- Save button – Save the current session state as a User Preset. Clicking this icon opens a dialog box to select a save location.

## Detection

Scaler 3's Detection feature allows you to analyze and capture musical input in multiple ways. It listens to MIDI or audio and evaluates the notes against hundreds of scales and modes to identify harmonic matches.

To access the Detection popup, click the Record button.

Scaler 3 offers four detection methods:
- Capture MIDI
- Detect MIDI
- Audio Detection
- File Detection

After selecting your preferred detection method, press Record in the popup. The button will highlight to indicate that recording is active.

After detection, Scaler 3 processes the input and presents the results in an intuitive way. If MIDI Capture was used, the drag icon will flash, allowing you to drag the recorded MIDI to your DAW or computer. For MIDI or Audio Detection, identified chords appear in Section A. When using File Detection, Scaler analyzes the imported MIDI or audio file and extracts its harmonic content for further exploration.

## Transport Controls

The Transport Controls allow you to manage playback and looping within Scaler 3.

Play Button: Starts playback of the Main Track sequencer. Right-click to toggle DAW Sync on or off.

Rewind Button: Resets the Arrange Page sequencer to the start position.

Loop Button: Activates the loop region in the Arrange Page sequencer for continuous playback.

### DAW Sync

The plugin version of Scaler 3 seamlessly integrates with your DAW, ensuring that your arrangement stays in sync no matter where you start playback. When DAW Sync is enabled, Scaler 3 follows your DAW's transport controls, automatically updating its position to match your project timeline, including tempo, time signature, and bar position.

- Playback Sync – Press play in your DAW, and Scaler 3 will follow along, staying locked to your arrangement.
- Loop Markers – Define loop regions in Scaler 3 to keep playback contained within a specific section, even when starting from different positions in your DAW.
- Dynamic Positioning – When working on complex arrangements, Scaler 3 will instantly jump to the correct position when you start playback, ensuring a seamless workflow.
- Tempo & Time Signature Sync – Scaler 3 automatically follows your DAW's tempo and time signature, keeping all rhythmic elements aligned.
- Bar Position Tracking – Scaler 3 updates its position in real-time based on your DAW's playback, ensuring accurate synchronization throughout your session.

## Timing Indicators

These indicators and controls display key timing information for Scaler 3's internal sequencer, or when DAW Sync is enabled, align with your DAW's parameters.

1. Sequencer Position – Displays the current playback position in bars and beats.
2. Time Signature – Shows the time signature of the Arrange Page sequencer.
3. Tempo – Displays and controls Scaler's global tempo.

## Exporting

Scaler 3 allows you to export both audio and MIDI, providing flexibility in bit depth, sample rate, and file structure. You can export either a loop region or the entire arrangement from the Arrange Page sequencer. You can also export chord sets in several different ways. Select the Export button to open the Export window.

Audio Export:
- Bit Depth: 16-bit, 24-bit, or 32-bit float
- Sample Rate: 44.1 kHz, 48 kHz, 88.2 kHz, or 96 kHz
- Anti-Clip: On prevents clipping. Off allows full volume output, which may cause clipping
- Export Range: Loop exports the loop region, or Arrangement exports the full sequence.

MIDI Export:
- Export Range: Loop exports the loop region, or Arrangement exports the full sequence.
- MIDI File Format: Single Track – Merges all tracks into one MIDI file. Multi Track – Exports each track as a separate MIDI file.

## Misc. Header Features



### MIDI Panic

Send "All Notes OFF" message to stop any stuck/hung MIDI notes.

### Undo & Redo

Scaler 3 includes Undo and Redo functions to help you easily revert or reapply changes:

Undo – Reverts the last action performed, allowing you to step back through your changes.
Redo – Reapplies the most recent undone action, letting you move forward again.

### Output Level

Scaler 3 provides a visual indicator of its audio output level, allowing you to monitor the volume of the sound being generated.

## Settings Menu

The Settings Menu in Scaler 3 allows you to customize playback behavior and user preferences to suit your workflow. It is divided into two sections:

Playback – Controls timing, MIDI binding, performance settings, and synchronization options.
Preferences – Adjusts interface behavior, MIDI input/output settings, and additional customization options.

To access the Settings Menu, click the menu icon in the top-right corner of the window.

### Playback Menu

Chord Preview Duration: Sets the standard duration of a chord, which determines playback timing of the Main Track and Motions.

Scaler UI Velocity: Adjusts the velocity of notes and chords triggered from Scaler's graphical interface. This setting does not affect MIDI input, as MIDI-triggered notes retain their original velocity. It also does not apply to Main Track chords, which can be edited via the Arrange Page or Circle of Fifths page.

Sync To DAW: Toggles synchronization with your DAW's tempo and transport controls (plugin operation only).

Play Quantize: Delays the start of the pattern to the next beat. Allows you to play in time and to tempo.

Play Quantize To: Delays the start of playback to align with the next beat, ensuring tighter timing.

Perform Mode: Determines how melodic and phrase content behaves when switching chords:
- Follow – Melodic and phrase content continues from its current position but in the new key.
- Retrigger – Melodic and phrase content restarts from the beginning when switching chords.

Latch: Toggles whether expressions continue looping after you release the chord trigger. When enabled, performances will keep playing, allowing for continuous one-shot playback.

Motion on Bound Chords Only: Toggles whether motion patterns are applied exclusively to bound chords in your Main Track progression.

Active Bind Keys: Determines which keys on your MIDI controller are used for chord triggering:
- White – Binds only to white keys.
- Black – Binds only to black keys.
- All – Binds to both white and black keys.
- True Scale – Binds chords only to the notes of the currently selected scale.

Bind Octave: Shift the entire bind range by octaves.

Bind Semi Transpose: Shift the entire bind range by semitones.

Keys Lock Chord Mute: When enabled (with Keys Lock active), Main Track chords are muted so that only motion patterns are played.

### Preferences Menu

Show Tooltips: When enabled, tooltips will appear when hovering over interface elements. Disabling this option hides tooltips.

Show Bass Inversion: When enabled, the bass note is displayed in the chord name when chords are inverted. When disabled, the bass note is hidden from inverted chord names.

Rescan Your Plugins: Scaler 3 will rescan your plugin library to detect any newly installed or updated plugins, or if the plugin scan was skipped during installation.

# Browse Page



## Overview

The Browse Page is primarily used for exploring scales and chord sets, helping you build custom chord progressions. It also includes several additional functions which will be covered in the following sections.

The Browse Page is divided into three sections: Section A | Section B | Section C. You can adjust the layout by resizing Section B. Drag its upper border up or down to allocate more space to either Section A or Section C based on your workflow needs.

## Section A

Browse Scales & Chord Sets. Section A is used for browsing Scaler 3's library of scales and chord sets, including your own saved or imported user chord sets. Use the menu on the left to choose which content is displayed to the right, as well as what can be selected using Section B beneath.

### Browsing Scales

Selecting 'All Scales' at the top of the list allows you to explore Scaler 3's full database of scales. Scales can be chosen in Section B below, and will appear in Section B's header once selected.

You can search for and filter scales in multiple ways: by selecting notes on the Section A keyboard, filtering by modes or moods, entering a scale name into the search field, or using a combination of these methods.

Filtering Options:

Section A Keyboard:
- Clicking a note sets it as the root note (e.g., selecting 'C' will display all 'C' scales: C Major, C Minor, etc.).
- Selecting additional notes refines the list to scales that contain those notes whilst still acknowledging the selected root note.
- Clicking on the selected root note again deselects it to display all matching scales regardless of root note.

Modes (scale types) – Filter scales by major, minor, harmonic minor, melodic minor, double harmonic major, and various modal variations.

Moods – Browse scales based on their emotion or feel.

Search Field – Type in the name of a scale to quickly locate it.

To reset all filters, click 'Clear All Filters.'

### Browsing Chord Sets

A chord set is a collection of chords representing a progression or song saved in Scaler. Chord sets help you find inspiration, listen to chord voicings in context, and discover how different progressions and songs are structured.

In Section A, you can browse various chord sets included with Scaler 3, as well as your own saved or imported sets. You can choose a chord set from one of five categories or filter by mood or favourites:

- Common Progressions – A list of widely used chord progressions, available with various voicings.
- Uncommon Progressions – A collection of uncommon progressions, available with various voicings.
- Genre Sets – Chord sets organized by musical genre.
- Artist Sets – Chord sets crafted by artists.
- User Sets – Chord sets you have saved.

Additional filters:
Moods – Filter chord sets based on emotion or feel.
Favourites – Access chord sets you have marked as favourites.

Tip: Select the heart button next to a chord set to add it to your favourites list.
Tip: With multiple chords selected in Section C, right-click and choose 'Save As User Chord Set'. These chords will appear in the User Sets category.

### Section A Header

Once selected, chord sets appear in Section A's header, where you can preview them as a full sequence, listen to individual chords, or drag them onto the Main Track (Section C) to create your own custom progression.

Tip: Left-click individual chords to preview them, or right-click for more options.
Tip: Right-click chords to add them to the Main Track as an alternative to drag and drop.

In Section A's header, you can:
1. View the name of the selected chord set
2. Load the previous or next chord set from the selected category.
3. Play the currently selected chord set.
4. Lock the chord set to the current scale.
5. Drag up/down to transpose the chord set by semitones.
6. Bind chords from the selected chord set to MIDI trigger notes (highlighted in yellow on the keyboard).

## Section B

Current Scale. Section B consists of a header and Scaler 3's full database of scales.

### Section B Header

In Section B's header, you can:
1. View the currently selected scale.
2. Play or preview the diatonic chords of the selected scale in a sequence.
3. View the chords belonging to the selected scale. Tip: Left-click individual chords to preview them, or right-click for more options.
4. Quickly access the Colors menu to apply voicings or variations to the current scale's chords.
5. Change the octave of the current scale's chords by dragging up or down.
6. Bind chords from the selected scale to MIDI trigger notes (highlighted in yellow on the keyboard).

### Scale List

Below the Section B header, Scaler 3 displays its full database of selectable scales. By default, the complete list is shown and can be browsed by scrolling. The list updates dynamically based on searches and filters applied via All Scales or selected chord sets.

Scales can be played or previewed using the Play button. To select a scale, click anywhere on its row—you will see the Section B header update to reflect your choice.

Each scale is displayed under the following column headers:
- Note Match – The number of notes in the selected scale that match the user's chosen notes (e.g., if you select C, E, and G, this shows how many notes in the scale contain those).
- Chord Match – How many of the chords in the scale match the currently selected chord set or progression.
- Mode – The classification of the scale, such as Major, Minor, Harmonic Minor, etc.
- Mood – A descriptive label that categorizes the scale based on its tonal quality, emotion, or feel.

## Section C

Main Track. Section C is where you can build custom chord progressions, explore chord suggestions that complement your chords, preview your chord set with an instrument of your choosing, and save or export your chord set for future use.

### Working with Chords

Add Chords to the Main Track – Drag and drop chords from Section A or Section B into Section C to start building your progression. To select multiple chords at once, left-click near a chord on the header bar, hold the mouse button, and 'lasso' multiple chords before dragging them into Section C.

Edit Chords – Modify any chord in your progression by right clicking and selecting Edit Chord which takes you to the Circle of Fifths page for a variety of editing options.

Adjust Chord Length – You can change the length of a chord by clicking and dragging the edge of its box. The length will snap to beats based on your chord duration settings. By default, chord duration is set to 4 beats. To adjust these settings:
- Change default chord duration in Settings > Playback.
- Update the time signature in your DAW with DAW Sync enabled or, in standalone mode, by dragging the time signature values up or down.

Copy Chords – Copy any chord by holding Option (Mac) or Alt (Windows) while dragging it to a new position.

Rearrange Your Progression – Reorder chords in your progression by dragging and dropping them into different positions.

Add Rests – Create rests by leaving blank spaces in your progression. You can also add rests from the Suggest window. To remove empty spaces, lasso multiple chords, right-click one of them, and select Remove Empty Spaces.

Add to Sketch – Quickly add chords to one of the seven Sketch progressions by right-clicking a chord and selecting Add to Sketch: Progression 1-7.

Delete Chords – Hover over a chord and click the 'X' at the top right, or right-click and select Delete Chord. To delete multiple chords at once, lasso them first and apply either method to one of the selected chords.

Play Your Progression – Press Play to preview your chord sequence.

Re-detect Your Progression's Scale – You can re-detect the scale of your progression at any time. After adding or editing chords, lasso your progression, right-click, and select Detect to identify the scale.

## Suggest Mode

Suggest Mode helps you discover new chords, complete your current pattern, or generate an entirely new progression. It offers an intuitive way to find chords beyond the standard diatonic chords of a scale. There are multiple suggestion methods, with the two primary modes being Tonal and Per Scale.

Clicking the Suggest Mode button in Section C will open the Suggest Mode window.

### Per Scale

Per Scale mode suggests chords that belong to your current scale. This mode is useful for expanding progressions with suspended and extended chords while maintaining harmonic consistency. It analyzes movement between chords based on their degrees within the selected scale.

For example, in the C Major scale, the relationship between G Major and C Major can be defined as V → I. Since both degrees exist in the selected scale, Scaler considers them harmonically linked.

# Browse Page



## Suggest Mode



### Tonal

Tonal mode suggests chords that complement your progression but may lie outside your current scale. It analyzes chord sets curated by musicians and artists exclusively for Scaler, allowing you to find harmonies that may not fit conventional scale-based music theory. This mode helps you explore unique voicings and add richness to your chord sequences.

For example, the relationship between F Minor and C Major cannot be defined using the degrees of the C Major scale. However, F Minor is commonly played after C Major because of various harmonic connections:

• Modal Interchange: F Minor exists in the C Phrygian, C Minor, and C Locrian modes.
• Minor Subdominant: In harmonic analysis, F Minor functions as a minor subdominant (iv) of C Major.
• Shared Scales: Both chords co-exist in C Harmonic Major, C Phrygian Dominant, and F Harmonic Minor.

### Auto-Detect

With Auto-Detect enabled, Scaler continuously analyzes your progression and updates the detected scale when you make changes. This ensures that chord suggestions remain relevant, especially when switching between Per Scale and Tonal modes.

### Minimize Movement

The Minimize Movement option helps keep suggested chords closer together in terms of voice leading. Enabling this option ensures smoother progressions by reducing large jumps between chords, making transitions feel more natural and connected.

This is especially useful when aiming for cohesive voicings that maintain a consistent harmonic flow.

### Live Suggest Mode

Live Suggest Mode allows you to trigger suggested chords in real time when chord binding is enabled. Scaler 3 maps 8 suggested chords to MIDI keys starting from C4, letting you experiment with different harmonic options live as you play.

This feature is useful for improvisation, real-time composition, or quickly testing harmonic possibilities with your MIDI controller.

### Pattern Fill

Clicking the Pattern Fill button generates a unique chord progression based on the selected suggestion mode (Tonal or Per Scale). This feature allows you to either extend your current pattern or create a fresh progression from scratch.

## Additional Section C Features

In Section C, you can also:

1. Choose a sound for your Main Track chord progression. Click the Main Track Sounds Panel to open the Sounds Browser, and fine-tune your sound or instrument using the Sounds Editor. For more details, see Create Page > Mixer > Loading & Adjusting Sounds.
2. Preview & play the currently selected Chord Set.
3. Drag your Main Track chords as MIDI into your DAW or onto a location on your computer.
4. Bind your chord progression to MIDI trigger notes (highlighted in yellow on the keyboard). For more details, see Recurring Features > Binding Chords.

# Create Page



## Overview

The Create Page offers a variety of compositional tools designed to help you explore, develop, and refine your chord progressions. Whether you're looking to expand a simple idea, introduce harmonic complexity, or experiment with advanced music theory concepts, this page provides powerful tools to shape your music.

The Create Page is divided into the following sub-pages, each offering unique ways to modify, and enhance your chord progressions:

Circle of Fifths – Find new chords or modify existing chords.
Modulation – Explore harmonic relationships within your selected scale, borrow chords from relative modes, find secondary scales for modulation, and discover suggested progressions.
Explore – Browse expansive chord constellations in a non-linear layout, helping you create unique chord progressions guided by Genre, Mood, and harmonic relationships.
Colors – Add expressive harmonic colors to your progression.
Sketch – Quickly build, organize, and refine your chord progressions.

## Interactivity with Sections B & C

While using the Create Page, Section B's Header and Section C – Main Track remain visible at all times, ensuring a fluid and interactive workflow.

Section B displays the currently selected scale, which informs most Create Page tools by guiding suggestions and transformations, though some tools extend beyond the scale for broader harmonic exploration.

The ever-present Section C allows you to drag and drop chords to refine, rearrange, and build upon your chord progression in real time as you explore different compositional tools.

## Circle of Fifths

The Circle of Fifths page allows you to modify existing chords or find new ones.

With a single chord selected, you can modify it:

Inversion – Choose different inversions to modify the chord's voicing.
Semitones – Transpose the chord's root up or down by a semitone.
Octaves – Raise or lower all notes of the selected chord by an octave.

Chord Suggestions: Select chords from your progression in Section C, or select notes on the keyboard visualization for dynamic suggestions based on your selections.

Circle of Fifths Chord Suggestions: Select a key from the Circle of Fifths for key-specific chord suggestions.

Chord Search: Search for any chord by typing its name.

Additional Controls:
• Enable/Disable Chord Preview when selecting chords from the Circle of Fifths.
• Display Notes or Velocity Values on your keyboard.
• Quick Reset – Use 'Clear Notes' to remove all selected notes instantly.

## Modulation

Explore harmonic relationships within your selected scale, borrow chords from relative modes, find secondary scales for modulation, and discover suggested progressions. Choose from five modulation presets to assist with your creative process.

### Modulation - Progression

This preset helps you modulate from the key of your Main Track progression (Section C). The top row represents your Main Track Chords.

The Circle of Fifths on the left allows you to select a destination scale. Once a key has been selected, your progression is automatically transposed into the Destination Scale, allowing you to hear your chord progression in a new scale.

You can change the scale type by clicking the Destination Scale type indicator bar.

If sufficiently similar, Scaler 3 suggests a path from the original scale to the destination scale.

Scaler 3 suggests Modulation Pathways consisting of chords that share notes between the selected scale and the destination scale, creating a smoother and more musical transition.

### Modulation - Secondary Scale

This preset helps you modulate from your currently selected scale into a second scale.

The circle of fifths on the left allows you to select a destination scale.

Once selected, the bottom row populates with the diatonic chords of the destination scale.

If sufficiently similar, Scaler 3 can suggest a Modulation Pathway from the origin to the destination scale.

Above the destination scale, the secondary dominant path to the chord is displayed. You can use the < > buttons to cycle through and view the secondary dominant and predominant chords for any chord in the scale.

### Modulation - Modal Interchange

This preset helps you find chords to borrow from a relative mode.

Your selected scale is displayed at the top of the Section B Header, with its related modes shown in rows below.

Each row represents a mode from the same scale family, displaying its corresponding chords as triads by default.

You can quickly audition these chords with different extensions—7ths, 9ths, 11ths, or 13ths—to explore richer harmonic variations.

### Modulation - Mediants

This artist-curated preset helps you generate mediant chords starting from any chord of the currently selected scale, enabling stylistic and subversive chord progressions.

Clicking on a chord generates a new line containing its mediant chords.

A mediant chord is a minor or major third above or below the root of your chord.

For example, from a C chord, Scaler 3 will generate the following chords:
• G# Min / G# Maj - One major third below C
• A Min / A Maj - One minor third below C
• D# Min / D# Maj - One minor third above C
• E Min / E Maj - One major third above C

You can stack up to three lines of mediants to keep moving further by thirds.

The last chords played are shown at the bottom, allowing you to explore and copy your new chord progression to a new or existing pattern.

### Modulation - Neo-Riemannian

This preset, based on the Neo-Riemannian theory, allows you to create chord progressions using specific transformations based on harmonic proximity.

Drag a chord into each slot to generate related chords.

The Minimize Movement option will try to maintain the number of voices and reduce the amount of movement between chords.

The Triads Only option will simplify all chords to triads, ignoring the original voicing of the chord.

With Select on Click enabled, clicking on a chord from a previous row will add it to the next available row.

## Explore

The Explore page in Scaler 3 offers a fresh way to compose and explore chords, built around chord constellations based on specific genres and moods. It includes intuitive visual aids to help you navigate and create progressions. Unlike Chord Sets, which are pre-composed with a fixed order, duration, and scale, Explore provides a flexible palette of chords. Each constellation has a preset tonal center, with a dynamic scale that adapts to the last played chord, allowing for more creative and intuitive composition.

Explore Presets:
Each chord constellation in Explore is curated around specific musical genres and moods.
• Genre – Select a preset based on various musical genres.
• Mood – Adjust the mood of the genre preset to your taste by applying a bright, dark, or neutral mood.

Constellation Key/Tonal Center:
The key or tonal center of each preset is represented by the lower-middle chord in the constellation. The top-center chord represents the relative minor or major of the root chord in the lower-middle.
• Chords near the center are the strongest, 'safe' diatonic chords (e.g., I, II, IV, V, VI).
• Chords around the outer edge are more adventurous, featuring non-diatonic chords with colorful extensions.

Left and Right Hemispheres:
• Chords on the left are typically darker, more minor-focused.
• Chords on the right are typically brighter, more major-focused.

### Explore - Dynamic Scale

The default mode in Explore is Dynamic Scale, where the current key or scale automatically changes based on the last played chord. This is reflected in the Dynamic Scale indicator bar, and the colors of the chords update to match the selected chord and its associated dynamic scale.

Deactivating Dynamic Scale mode activates Fixed Scale mode, where the chord colors remain fixed based on the Current Scale indicated in Section B. The dynamic scale is still displayed in the Dynamic Scale indicator bar to help you choose an appropriate scale.

For example, if C Major is selected but a C minor preset is played, the dynamic scale will show why the chords may not align with the current scale.

Additional Controls:
• Bind incoming MIDI notes to the Explore chords
• Lock Explore chords to the Current Scale
• Transpose the entire constellation up or down by semi-tones

## Colors

The Colors Page in Scaler 3 lets you enhance basic triads from your selected scale with harmonic variations, adding richness and expressiveness to your chords.

Chords are presented across 5 rows, each offering different extensions, voicings, substitutions, inversions, or variations.

Use the Colors Menu to select different chord variations for each row.

Tip: Quickly scroll through different colors using the previous/next buttons.

You can also:
1. Adjust the octave for each row of chords.
2. Audition chord variations by clicking the Play button or selecting individual chords.
3. Bind incoming MIDI notes to any row.

## Sketch

The Sketch page lets you build, organize, and refine multiple chord progressions in one place. Experiment with up to seven different progressions, making it easy to sketch out and structure different sections of your composition.

Drag and drop chords onto a progression row.

Tip: Right-click a chord or multiple chords anywhere in Scaler 3 to add it to one of the seven Sketch progressions.

Use Suggest Mode to generate a unique chord progression with the pattern fill feature.

Apply Motions to your progressions (See: Arrange > Motions for details).

Audition progressions sequentially with the Autoplay button.

Bind incoming MIDI notes to any progression.

Use Keyswitches to trigger different progressions on the fly.

# Arrange Page



## Overview

The Arrange Page provides a multi-track environment where you can layer instruments, shape performances, and refine your composition—all based on the active chord progression in your Section C Main Track.

You can adjust the layout by resizing the Track Header—drag its upper border up or down to allocate more space to the Arrange Sequencer or the MIDI Editor/Mixer section based on your workflow needs.

Playback Shortcuts:
• Spacebar plays/pauses
• Return restarts playback
(may differ in DAW Sync Mode, as playback is controlled by your DAW's transport)

## Main Track

Harmonic Foundation: Chords in the Main Track (Section C) serve as the harmonic foundation for additional musical parts, or "Motions." The key of the Main Track determines the key signature of any added tracks, enabling seamless compositional experimentation while maintaining harmonic cohesion.

Synchronicity Across Your Composition: When you change a chord note in the Main Track via the MIDI editor, effectively making a new chord, Motions immediately adjust to the new harmonic structure, allowing for fluid creative exploration. Similarly, if a chord or chords in your Main Track are modified elsewhere in Scaler 3, all connected parts will automatically update to maintain harmonic consistency.

## Arrange Page Header

From the Arrange Page Header, you can:
1. Add tracks using the + button in the top left. This will open the Motion browser.
2. View the current scale.
3. Toggle the scissor tool on/off to split chord or MIDI clips.
4. Adjust the sequencer division resolution to control clip length and snapping behavior (e.g. 1 bar, 1/2 bar, etc.)

Use the Scissors Tool to slice MIDI clips in your Arrangement. The grid resolution setting determines the smallest division at which clips can be sliced. For example, with a division resolution of 1/4, a 1-bar MIDI clip can be sliced into four equal parts. This allows for precise, on-the-fly editing of your arrangement.

Tip: If you have a single Motion Clip and want it to retrigger with each chord change, use the scissors tool to slice it into multiple clips that align with your chord progression. Motions will retrigger at the start of each clip instead of following the chord changes in Follow mode. For more on Perform Modes in Scaler 3, see Header Section > Settings Menu > Playback Menu.

## Motions

Motions in Scaler 3 transform static chords into expressive, editable MIDI clips that react in real time to your selected scale and chord progression. Developed by professional musicians, they provide dynamic movement, rhythm, and human-like variation to your compositions.

Motions are divided into Articulations and Expressions.

Articulations include Arpeggios, Passages, Strumming, and Chord Follow.

Expressions encompass Performances, Melodies, Phrases, Bass, Strummed Sequences, Rhythms, and Sequences.

Once added, Motion clips can be freely edited, rearranged, and customized to fit your arrangement.

### Motions Browser

The Motion Browser can be accessed by selecting the + button in the Arrange Page Header. Once a Motion is selected, using this route will create a motion track.

You can also access the Motion Browser via the Global Controls (see Global Controls > Main Track Motions) or the Sketch Page (see Create Page Chapter > Sketch).

Browse motions by category or filter:
• All – A list of all Motions.
• Favourites – Access Motions you've marked as favourites. Tip: Select the heart button next to a chord set to add it to your favourites list.
• Articulations – Arpeggios, Passages, Strumming, Chord Follow.
• Expressions – Performances, Melodies, Phrases, Bass, Strummed Sequences, Rhythms, Sequences.
• Moods – Filter motions based on emotion or feel.
• Genres – Filter motions by musical genre.

You can also use the search field to find specific Motions.

To select a Motion, single-click its title, or double-click the MIDI note visualization.

Tip: Click and hold the MIDI note visualization to audition it before making a selection.

### Motion Tracks

After selecting the + icon in the Arrange Page Header and choosing a Motion, a track will be created.

Track types are determined by the Motion selected, and once created, cannot be changed to a different track type. For example, if an Arpeggio track is created, only Arpeggios can be used on that track. To use a different Motion type, you must create a new track.

However, you can change to different motions of the same type on an existing track:
1. Select the track or motion clip.
   a. Use the previous or next buttons on the current motion indicator at the top of the MIDI Modifiers section.
   b. Or click the magnifying glass in the MIDI Modifiers section to open the Motion Browser.

Note: Only motions of the same type will be accessible. To select a different motion type, create a new track.

Tip: Delete a track by selecting | on a track to open the track menu.

## Multi-Channel MIDI Out

Scaler 3 supports routing multiple MIDI outputs, allowing you to send MIDI from different tracks to separate channels within your DAW.

This can be useful for organizing your composition and managing individual instruments on separate tracks. However, be aware that not all DAWs support this feature, so you may need to check your DAW's routing options before attempting this setup.

Use the menu button (three horizontal dots) on any track to select a MIDI channel that matches the corresponding channel in your DAW.

## Working with MIDI

Scaler 3 offers two methods for editing MIDI: via the MIDI Modifier Sidebar or the MIDI Editor.

MIDI Modifier Sidebar – This sidebar lets you make bulk changes to MIDI clips, adjusting multiple notes at once through various controls.

MIDI Editor – Clicking a chord or motion clip opens the MIDI Editor, displaying the selected clip's notes for manual adjustments.

Editing Modes:
Scaler 3 provides two modes for MIDI editing:
• Locked Mode (default): The Motion MIDI clip stays linked to the Main Track, automatically transposing as the main track chords change and reacting to Motion controls like arp speed or strum direction.
• Unlocked Mode: The Motion MIDI clip is detached from the main track, allowing full manual editing of notes in the piano roll. However, Motion controls via the MIDI Modifier Sidebar are disabled, and the clip no longer reacts to chord changes.

Tip: Quickly lock detached MIDI back to the key of your Main Track chords by selecting Re-Attach.

### MIDI Modifier Controls

MIDI Modifier Controls vary across different motion types and the main track chord clips, but share many common parameters.

Shared controls (applicable across most motions):

| Modifier Control | Effect on MIDI Clip |
|---|---|
| Motion Indicator | View current motion name, navigate between motions, or open the Motions Browser |
| Octaves | Transpose by octaves (drag up/down) |
| Inversion | Invert notes of the selected clip (drag up/down) |
| Transpose | Transpose notes of the selected clip (drag up/down) |
| Range | Increase/decrease pitch range of the selected clip (drag up/down) |
| Density | Increase/decrease note density of the selected clip (drag up/down) |
| Length | Increase/decrease note length of the selected clip (drag up/down) |
| Rotate Resolution | Select rotate resolution for the selected clip (opens a menu) |
| Rotate Increment | Rotate notes forward/backward according to Rotate Resolution (drag up/down) |
| Voicing | Select a voicing preset for the selected clip (opens a menu) |

### Motion-Specific Controls

| Modifier Control | Effect on MIDI Clip | Applicable Motion Types |
|---|---|---|
| Octave | Transpose the selected chord up/down in octaves | Main Track Chords |
| Semitone | Transpose the selected chord up/down in semitones | Main Track Chords |
| Timing | Select an arpeggio timing resolution (opens a menu) | Arpeggios |
| Note Length | Select an arpeggio note length (opens a menu) | Arpeggios |
| Resolution | Select a passage resolution/speed (opens a menu) | Passages, Performances, Melody, Phrases, Bass, Sequences |
| Direction | Select a motion pattern (drag up/down) | Strumming, Strummed Sequences |
| Profile | Select a strum profile (opens a menu) | Strumming, Strummed Sequences |
| Alternative | Select a strum variation (opens a menu) | Strumming, Strummed Sequences, Rhythms |
| Play Mode | Choose between Chord or Scale Expression play modes (Bass) or Select an expression play mode (Sequences) | Bass, Sequences |
| Play Style | Select an expression play style (opens a menu) | Sequences |

### MIDI Editor

Scaler 3's MIDI Editor presents a familiar piano roll format, allowing you to edit MIDI clips just like in most DAWs.

The MIDI Editor includes a range of tools and visual aids for intuitive MIDI editing and programming:

1. Speaker Icon: Toggle on to hear MIDI notes when selected or off to mute them while editing.
2. Keyboard View: Visualizes notes in relation to the selected scale, with three modes:
   • Chromatic: No highlights.
   • Scale Notes: Highlights notes in the selected scale.
   • Chord Notes: Highlights notes from the current main track chord progression.
3. Tools:
   • Selection Tool: Drag or resize notes.
   • Eraser Tool: Delete unwanted notes.
   • Pencil Tool: Draw in new notes.
   • Scissors Tool: Split notes according to the division setting.
4. Velocity: Adjust the overall or individual note velocities by sliding up or down.

Motion tracks only:
5. Humanize – Add slight variations to velocity and timing for a more natural feel.
6. Keyboard Icon – Toggle on to overlay main track chords for easy reference when working with Motion MIDI notes.

## Mixer

The Mixer in Scaler 3 provides full control over your tracks, allowing you to balance, shape, and refine your arrangement. Each track features independent controls for volume, solo, mute, pan, and plugin assignments, supporting both internal instruments and third-party plugins.

Track Controls:
Each track in the Mixer includes:
• Track Name Display – Identifies the track, such as Main Track, a Motion Track Type (e.g., Arpeggio), or Master
• Solo (S) & Mute (M) – Isolate or silence individual tracks
• Pan Control – Adjusts stereo positioning
• Volume Slider – Sets the track level
• Power Button – Enables/disables sound or insert slots
• Instrument and Effect Editors (dial icon) – Opens instrument or effect-specific parameters

### Loading Sounds

To load a sound or instrument, click a sound slot within a track channel to open the Sounds Browser.

The Sounds Browser organizes sounds and instruments into categories alongside filtering options:
• All – View all available instruments
• Favourites – Quickly access your saved instruments. Tip: Click the heart button next to an instrument to add it to your favourites list.
• Internal Sounds – Scaler 3's built-in sounds, categorized by Piano, Synth, Guitar, Hybrid, Orchestra, and Bass
• Instruments – All third-party instruments available on your system
• Manufacturer – Filter third-party instruments by their developer

You can also use the Search field to quickly locate an instrument by typing its name.

Single-click to load your selection.

### Adjusting Sounds

Once a sound has been loaded onto a track, use the Sounds Editor button to shape internal or third-party sounds and instruments.

Internal Sound Settings:
• AMP – Adjusts Attack, Decay, Sustain, and Release (ADSR)
• FILTER – Controls the Cutoff frequency
• REVERB – Adjusts the amount of reverb applied
• DELAY – Adjusts the delay effect level

For third-party sounds and instruments, the Sounds Editor opens the plugin in a separate window, allowing you to tweak its parameters directly. You can keep the window open alongside Scaler 3 for a seamless composition and sound design experience. The window can be minimized or closed at any time.

### Loading Effects

To load an effect, click an empty effect slot within a track channel to open the Effects Browser.

The Plugin Browser organizes effects into categories with filtering options:
• All – View all available effects
• Favourites – Quickly access your saved effects. Tip: Click the heart button next to an effect to add it to your favourites list.
• AudioFX – Browse third-party audio effects available on your system
• Manufacturer – Filter third-party effects by their developer

You can also use the Search field to quickly locate an effect by typing its name.

Single-click to load your selection.

### Adjusting Effects

Once an effect has been loaded onto a track, the Effects Editor opens the plugin in a separate window, allowing you to tweak its parameters directly.

You can keep the window open alongside Scaler 3 for a seamless composition and mixing experience. The window can be minimized or closed at any time.

# Instrument Panel

The Instrument Panel in Scaler 3 provides an interactive way to visualize and play sounds using a keyboard or guitar fretboard interface. These interfaces help identify whether notes match your selected scale, show key bindings and keyswitches, and allow for chord editing. Both the keyboard and fretboard can be expanded or collapsed to suit your workflow.

## Keyboard Visualization

The Keyboard is visible by default, but can be collapsed by selecting the Keyboard Display button.

It provides a visual reference for scale notes, chord voicings, and key mappings. It dynamically updates based on your selected scale and Bind MIDI settings.

• Scale Notes – Marked with blue indicators
• Active Keys – Highlighted in blue when within the selected scale, or grey if outside the selected scale
• Locked Keys – Display a lock icon, indicating restricted access
• Disabled Keys – Marked with a cross icon
• Bind Region – Highlighted in yellow, showing active chord binding areas
• Keyswitches – Shown in green, triggering specific functions or variations
• Feature-Specific Areas – Indicated in purple for contextual functionality

You can adjust the visible range of the keyboard by scrolling with your mouse wheel, allowing you to view lower or higher octaves.

## Fretboard Visualization

To display the Fretboard Visualization, select the Fretboard Display icon.

The fretboard helps you find notes, scales, and chords on fretted instruments, making it easier to navigate the neck of your instrument.

Scaler 3 supports over 25 tunings across multiple instruments, including guitar, bass, ukulele, and banjo.

Guitar Settings: With the Fretboard Visualization open, select the gear icon to access Guitar Settings.

Within the Guitar Settings, you can choose from a variety of tunings, organized into categories such as:
• Standard
• Custom
• Regular
• Bass
• Baritone
• Other
• User

### Chord Charts

The Chord Chart feature displays chord diagrams for any selected chord in Section C. These diagrams provide a simplified representation of the guitar neck, indicating finger placement and playing position. To access chord charts, select the Chord Chart button.

How to Read Chord Charts:
Vertical lines represent the guitar strings, with the lowest (bass) string on the left and the highest string on the right.
• Horizontal lines represent the frets, with the topmost line indicating either the nut or a specific fret (if a number is displayed).
• Circles and bars indicate where to place your fingers. Numbers inside the circles correspond to finger placement:
  • 1 = Index finger
  • 2 = Middle finger
  • 3 = Ring finger
  • 4 = Little finger
• O (open) and X (muted) symbols appear above the strings:
  • O means the string should be played open (not fretted).
  • X means the string should be muted and not played.

# Global Controls

The Global Control panel includes tools to enhance your progression on the Main Track, offering controls for humanization, note mapping, voice grouping, and transposition, all designed to refine the performance and expressiveness of your composition.

Semi - +: Transpose your main track chord set up or down by semitones.

## Main Track Motions

Enable and browse Motions to add expressive movement to your Main Track chord progression. For a detailed explanation of Motions, see Arrange > Motions.

1. Toggle Motions on or off using the circle button.
2. Open the Motion Browser by clicking the name of the currently selected Motion.
3. Previous / Next Navigation – Quickly scroll through Motions.
4. Adjust Motion resolution/speed by dragging up or down.

## Humanize

Add a natural feel to Motions by introducing slight variations in velocity and timing.

1. Toggle Humanization on or off.
2. Click on the currently selected profile to open humanization, quantization, and swing options:
   a. Velocity – Randomizes the dynamics of each note.
   b. Timing – Randomizes the start time of each note.
   c. Both – Applies randomization to both velocity and timing.
   d. Quantize – Aligns notes to a grid of the selected size for tighter timing.
   e. Swing – Shifts certain notes slightly off-grid to create a more expressive, grooved feel.

Adjustments:
3. Select a Humanize/Quantize division setting by clicking the division setting indicator.
4. Adjust the Humanization amount by dragging the percentage value up or down.

## Keys Lock

Map keyboard keys to the notes of any scale or chord, making it easy to play melodies while staying in key.

1. Toggle Keys Lock on or off.
2. Click to open the Keys Lock Modes Menu and select from several available modes.

Keys Lock Modes:
• Scale Notes Mapped - Transpose out of scale notes to notes of selected scale.
• Scale Notes Only – Locks all notes to the selected scale. Out-of-scale notes are redirected to the nearest fitting note, ensuring you always stay in key.
• Scale White Keys – Maps any scale to the white keys, deactivating black keys. The scale's first degree is placed on C, allowing you to play it as if it were C Major.
• Chord Notes – Locks a predefined keyboard area to trigger notes from the last chord played. The lowest note of the chord is placed on C, while black keys are deactivated. This makes it easy to create simple melodies while triggering different chords.
• Chord Extensions – Similar to Chord Notes, but expands the playable range to include extended chord tones. The root of the extended chord is placed on C, allowing for more complex melodies.
• Chord Scales – Works like 'Scale White Keys' option except a new scale is selected automatically based on the last triggered chord.

## Voice Grouping

Group notes in a specific range to allow for smooth changes between chords.

1. Toggle Voice Grouping on or off.
2. Click to open the Voice Grouping Profiles Menu and select from several available profiles.

Voice Grouping Profiles:

Dynamic: Allows for smooth changes between chords by automatically grouping notes around the tonal center of the currently selected scale. This prevents big jumps in intervals when moving from a lower diatonic chord to a higher diatonic chord, such as I > vi (for example, from a C Major to an A Minor chord). The Dynamic Grouping preset plays the bass note two octaves below the tonic, then automatically chooses the best inversions of each played chord to minimize their respective distance to the tonic of the scale. The upper extensions of the chord (9th, 11th, 13th) are grouped in a second octave unless the distance with the tonal center becomes too significant, in which case they are inverted and placed in the first octave.

Dynamic C1-B2, C2-B3, C3-B4: Automatically adapts voicing to play chords within the defined range. Typically used for restricting the range of octaves when using sample libraries that only play across certain octaves.

Open Voicing: Automatically adapts your chord to play an open voicing.

Guitar Voicing: Adapts the voicing to play a version adapted to the guitar neck.

Drop2/Drop3/Drop4/Drop2&3: Classic guitar voicings where the 2nd (3rd or 4th) voice is dropped (lowered) by an octave.

Extracted Voicing: After extracting the voicing from a chord, you can use Voicing Lock to preview other chords as if they were played with the same voicing. Scaler 3 automatically adapts the source voicing onto the chord, matching the playing position and minimizing the distance between each voice. Try creating your own preferred voicing by editing a chord, extracting its voicing, and applying it to all chords.

# Appendix



## Color-Coding System

Scaler 3 uses a color-coding system to display chords and notes based on their relationship to the currently selected scale.

Chords:
1. Chords with all notes belonging to the selected scale are highlighted in blue.
2. Chords with one note outside the selected scale are highlighted in light blue.
3. Chords with two or more notes outside the selected scale are highlighted in grey.

Notes:
1. Notes that fit within the selected scale are highlighted in blue.
2. Notes that are outside the selected scale are highlighted in grey.

## Musical Notation

Scaler uses a compact chord naming convention. The first part of the name is referring to the most general (non altered) part of the chord.

For example, a min7 chord refers to a minor seventh chord made up of a minor third and minor seventh above the root.

The second part are alterations applied to the chord. Alterations are optional and specified between parenthesis. Alterations affect the chord by taking precedence over the pitches that would normally establish the named chord.

For example, a min7(b5) chord means that the expected perfect fifth of the minor seventh chord will be replaced by a diminished fifth, the rest of the pitches remain unchanged.

The third part of the name are the extensions. This part is also optional and separated by spaces.

For example, a min7(b5) b9 is a minor seventh chord with a diminished fifth to which we have added a flat nine.

There can be multiple alterations and extensions to a chord.

For example, a min11(b5 #9) is a minor eleventh chord with two alterations on the fifth and ninth, and a min7 b9 #11 is a minor seventh chord with no alterations but two extensions a flat ninth and a raised eleventh.

## Troubleshooting

No MIDI Input: Check that your DAW is configured to send a MIDI signal to the track on which you loaded Scaler. Depending on your software, you might need to select or arm the track you wish to send MIDI to.

No Audio Input: When using Scaler, check that you have routed the audio signal correctly into Scaler. When using Scaler Audio, make sure there is audio content playing on the track.

Chord Progression Sounds Different When Dragged into DAW: Most likely you still have 'Bind' activated in Scaler 3 so you are effectively performing a performance. If you are dragging MIDI to your DAW please turn off 'Bind' in Scaler 3.

Hung/Stuck MIDI Notes: Simply press the MIDI Panic button located in the Header section to cancel any scheduled MIDI event and reset the state of the keyboard.

Help and Community: See above Introduction > Resources.

## Legal

Scaler End User Licence Agreement

Permission to use the Scaler 3 software (Software) is conditional upon you (Licensee) agreeing to the terms of this End User Licence Agreement (EULA). A licence to use Software and Additional Materials is offered to you by Scaler Music ACN 6333 215 808 (Scaler) only on the condition that you read and accept all the terms of this EULA and wish to become a licensee of the Software and Additional Materials.

1. Licence
(a) Scaler Music grants the Licensee a non-exclusive, revocable licence to: (i) use the Software on the basis of a fourteen (14) day trial licence (14 Day Trial); and (ii) subject to the payment of the Licence Fee, continue using the Software following the expiry of 14 Day Trial.
(b) The Licensee may install the Software concurrently on up to three (3) computers for the Licensee's use, but the Software is licensed for use by one (1) person only.

2. Licence Fee
Following the 14 Day Trial, the Licensee is not entitled to use the Software until the licence fee has been paid. The Licence Fee must be paid in the amount and manner specified by: (a) Scaler where the Software is acquired directly from Scaler; or (b) the authorised distributor.

3. Additional Materials
This EULA extends to any accompanying documentation, materials and files including but not limited to the manual, audio files, sound libraries, third party licensed content, bug fixes, updates and improvements provided by Scaler in conjunction with the Software.

4. Licensee's Obligations
The Licensee undertakes: (a) to not copy, reproduce, translate, adapt, reverse engineer, decompile, vary or modify the Software; (b) to supervise and control the use of the Software; (c) to ensure employees with authorised access comply with the EULA; (d) to not provide the Software to unauthorised persons; (e) to not sell, lease, assign, licence, sub-licence, transfer, distribute the Software; (f) to only use the Software in accordance with the manual; (g) to not develop derivative software; (h) to only use presets or sound libraries in the context of musical arrangements, recordings, and live performances; (i) to not extract or distribute presets, sounds, or MIDI files from the Software; (j) to not use the Software illegally.

5. Warranty
(a) The Licensee acknowledges the Software cannot be guaranteed error or interruption free. (b) Subject to clause 5(e), Scaler will not be liable for indirect or consequential loss. (c-d) Liability limitations under Australian Consumer Law. (e) Nothing in this EULA excludes rights that would render the EULA void, illegal, or unenforceable.

# Legal



## 5(f) Licensee Acknowledgements

The Licensee acknowledges that:

(i) prior to paying the Licence Fee, a reasonable opportunity has been provided, in the form of the 14 Day Trial Period (irrespective of whether the Licensee utilised the 14 Day Trial Period), to assess the suitability of the Software;

(ii) at no time prior to entering into this EULA has it relied on any representation by Scaler or any distributor of the Software regarding the Software or the Additional Materials which the Licensee has not been able to verify, or had the opportunity to verify or investigate (including by way of the 14 Day Trial), independently;

(iii) it is not obliged to continue use of the Software beyond the 14 Day Trial Period; and

(iv) prior to paying the Licence Fee, it has been given a reasonable opportunity:
(A) to satisfy itself that the Software and Additional Materials corresponds with any representation made by Scaler Music or Plugin Boutique; and
(B) to examine Software and Additional Materials for any apparent defects, and that it has availed itself of that opportunity; and

(v) the Software is provided as is, and Scaler has no obligation to provide the Licensee with updates, upgrades, bug fixes, improvements or supplements to the Software or provide any support services in connection with the Software.

## 5(g) Vienna Convention Exclusion

The application of the United Nations Convention on Contracts for the International Sale of Goods (the Vienna Convention) to this EULA (by virtue of any law relevant to this agreement) is excluded.

## 6. Intellectual Property and Title

(a) The Licensee acknowledges that the Software is the subject of copyright. The Licensee will not during or any time after the expiry or termination of this EULA permit any act which infringes that copyright and, without limiting the generality of the previously mentioned copyright, the Licensee specifically acknowledges that it may not copy the Software or any part of it except as otherwise expressly authorised or acknowledged by this EULA.

(b) You must not during or at any time after the expiry or termination of this EULA permit any act which infringes any of Scaler's trade marks (whether registered or unregistered) used in connection with the Software.

(c) This EULA does not transfer any ownership of the Software to the Licensee. Scaler retains all right, title and interest in and to the Software and any copies of the Software (including all intellectual property rights pertaining thereto).

## 7. Term of Licence

(a) The 14 Day Trial commences upon the Licensee's acceptance of the terms and conditions set out in this EULA.

(b) The EULA will continue beyond the 14 Day Trial upon payment of the Licence Fee and shall continue in effect until terminated in accordance with clause 7(c).

(c) This EULA may be terminated by Scaler in the following circumstances:
(i) if the Licensee is in breach of any term of this EULA;
(ii) if the Licensee, being a corporation, becomes the subject of insolvency proceedings;
(iii) if the Licensee, being a firm or partnership, is dissolved;
(iv) if the Licensee uses the Software in any way that, in the reasonable opinion of Scaler, does or is likely to cause damage to Scaler or bring it into disrepute; or
(v) if the Licensee destroys the Software for any reason.

(d) Upon termination, the Licensee or its representative will destroy any remaining copies of the Software and Additional Materials or otherwise dispose of such material in the manner directed by Scaler.

(e) Termination pursuant to this clause will not affect any rights or remedies which Scaler may have otherwise under this EULA or at law.

## 8. Limitation of Liability and Indemnity

(a) The Licensee will indemnify Scaler, its officers, employees, contractors and agents fully against all liabilities, costs, charge, claim, liabilities and expenses (including legal expenses) which Scaler may sustain or incur as a direct or indirect consequence of:
(i) a breach of the terms of this EULA by the Licensee (or its officers, employees, agents, representatives or contractors);
(ii) any negligent or unlawful act or omission of the Licensee (or its officers, employees, agents, representatives or contractors); and
(iii) the Licensee's use of the Software except as otherwise provided in this EULA.

## 9. Privacy

The Licensee acknowledges and agrees that Scaler may collect, use, store and share the Licensee's personal information and usage information in accordance with Scaler's privacy policy, as amended from time to time in Scaler's sole discretion, which is set out on Scaler's website at https://scalermusic.com/privacy-policy/ or such other website or location as notified to the Licensee from time to time.

## 10. Assignment

The benefit of this EULA will not be dealt with in any way by the Licensee (whether by assignment, sub-licensing or otherwise) without Scaler's written consent (which may be withheld in its absolute discretion). Scaler may transfer, novate or assign its rights and obligations under this EULA to a third party at any time in its absolute discretion.

## 11. Waiver

Failure or neglect by either party to enforce at any time any of the provisions of this EULA will not be construed or deemed to be a waiver of that party's rights under this EULA.

## 12. Severability

If any part of this EULA is or becomes invalid or unenforceable, that part is severed from this EULA. Such invalidity or unenforceability does not affect the validity or enforceability of the remaining provisions of this EULA.

## 13. Survival

Any indemnity under this EULA is independent from the other obligations of the parties and survives the termination of this EULA and any term which is expressed to survive termination of this EULA or any term which by its nature is intended to survive termination of this EULA shall survive the termination of this EULA.

## 14. Entire Agreement

This EULA and any documents expressly referred to in it (including Scaler's privacy policy and the Software user manual) constitutes the entire agreement between Scaler and the Licensee.

## 15. Governing Law

This EULA will be governed by and construed according to the law of the Victoria, Australia.

## Third Party Attribution

This Software may contain third party software components (or portions thereof). The following legal notices provide attribution to these software components.

### curl

Copyright (c) 1996 - 2022, Daniel Stenberg, daniel@haxx.se, and many contributors.
All rights reserved.

Permission to use, copy, modify, and distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF THIRD PARTY RIGHTS. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Except as contained in this notice, the name of a copyright holder shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization of the copyright holder.

### json

Copyright (c) 2013-2021 Niels Lohmann

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### mbedtls

This software uses mbedtls which is provided under the Apache 2.0 license.

You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

### zlib

(C) 1995-2017 Jean-loup Gailly and Mark Adler
