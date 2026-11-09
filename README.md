# viiBe 🎵

A lightweight macOS terminal music player built with Node.js. viiBe plays MP3 files stored in the project's `songs/` folder.

## v1 features

- Scans and lists local MP3 files
- Starts a selected song
- Pauses, resumes, stops, and quits playback
- Moves to the next or previous song
- Shows a colourful terminal interface
- Uses macOS's built-in `afplay` audio player

## Requirements

- macOS (v1 uses `afplay`)
- Node.js 18 or later
- MP3 files

## Run it

```sh
git clone https://github.com/anveshap103-tomato/viiBe.git
cd viiBe
npm start
```

You can also run `node src/app.js` directly.

## Add music

Put MP3 files in the `songs/` directory:

```text
songs/
├── song1.mp3
└── song2.mp3
```

viiBe scans this directory each time it starts. Add only music you have the right to use.

## Controls

After choosing a song, enter one of these commands:

| Command | Action |
| --- | --- |
| `p` | Pause |
| `r` | Resume |
| `n` | Next song |
| `b` | Previous song |
| `s` | Stop |
| `q` | Quit viiBe |

When a track ends, viiBe reports that playback has finished and remains open so you can choose another action.

## Development

Run the v1 regression tests with:

```sh
npm test
```
