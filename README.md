# viiBe 🎵

> A lightweight terminal-based music player built with Node.js.

viiBe is a simple command-line music player that lets you play your local MP3 files directly from the terminal.

The project is being developed version by version, with new features planned for future releases.

---

##  Features — v1.0.0

The first stable release of viiBe includes:

- 🎵 Scan local MP3 files
- 📋 Display available songs
- ▶️ Play songs
- ⏸️ Pause playback
- ▶️ Resume playback
- ⏹️ Stop playback
- ⏭️ Play next song
- ⏮️ Play previous song
- 🎨 Colorful terminal interface
- 💻 macOS audio playback using `afplay`

---

##  Tech Stack

- **JavaScript**
- **Node.js**
- **Node.js `fs` module** — reading the songs directory
- **Node.js `path` module** — handling file paths
- **Node.js `readline` module** — terminal input
- **Node.js `child_process` module** — controlling audio playback
- **macOS `afplay`** — audio playback
- **Git & GitHub** — version control

No external npm packages are required for the current version.

---

##  Project Structure

```text
viiBe/
│
├── songs/
│   └── your-music.mp3
│
├── src/
│   ├── app.js
│   │
│   ├── library/
│   │   └── musicLibrary.js
│   │
│   ├── player/
│   │   └── player.js
│   │
│   └── ui/
│       └── display.js
│
├── .gitignore
├── package.json
└── README.md
What each part does

src/app.js

The main application. It connects the music library, player, UI, and user commands.

src/library/musicLibrary.js

Responsible for finding and managing MP3 files from the songs directory.

src/player/player.js

Responsible for controlling audio playback using the macOS afplay command.

src/ui/display.js

Responsible for displaying the colorful terminal interface.

songs/

The folder where you place your own MP3 files.




🚀 Getting Started

Requirements

Currently, viiBe requires:

macOS
Node.js
A terminal
MP3 audio files

Note: v1.0.0 uses macOS afplay, so this version is currently macOS-only.




📥 Installation

Clone the repository:

git clone https://github.com/anveshap103-tomato/viiBe.git

Move into the project:

cd viiBe

Install dependencies:

npm install

There are currently no external dependencies, but running npm install ensures the project is initialized correctly from package.json.




🎵 Adding Your Songs

Create a songs folder in the root of the project:

viiBe/
└── songs/

Place your MP3 files inside it:

songs/
├── song1.mp3
├── song2.mp3
├── song3.mp3
└── song4.mp3

viiBe automatically scans this folder and displays the available .mp3 files.

Example
🎵 Your Songs

1. song1.mp3
2. song2.mp3
3. song3.mp3
4. song4.mp3

MP3 files are intentionally not included in this repository. Add your own music files that you have the right to use.



▶️ Running viiBe

From the project directory, run:

node src/app.js

You should see the viiBe interface in your terminal.

You'll first be asked to select a song:

Enter song number: 2

The selected song will then start playing.



🎮 Controls

Once a song is playing, use the following commands:

Command	Action
p	Pause
r	Resume
n	Next song
b	Previous song
s	Stop
q	Quit viiBe
Example
Command: p
⏸️ Paused

Command: r
▶️ Resumed

Command: n
▶️ Playing next song

Command: s
⏹️ Stopped

Command: q
👋 Goodbye!



🧠 How viiBe Works

The application follows a simple flow:

                Start viiBe
                     │
                     ▼
              Scan songs folder
                     │
                     ▼
              Display MP3 files
                     │
                     ▼
             Select a song number
                     │
                     ▼
                Play the song
                     │
                     ▼
              ┌──────────────┐
              │ User command │
              └──────┬───────┘
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
     Pause         Next          Previous
       │             │             │
       └─────────────┼─────────────┘
                     ▼
                  Continue



🧩 Node.js Concepts Used

viiBe is also a learning project for understanding Node.js.

The project currently uses:

File System

The fs module is used to read the songs directory.

fs.readdirSync()
Path Handling

The path module is used to construct valid file paths.

path.join()
Terminal Input

The readline module is used to receive commands from the user.

readline.createInterface()
Child Processes

The child_process module is used to start and control the macOS audio player.

spawn("afplay", [songPath])
Events

Node.js process events are used to detect changes in playback state.

 Terminal UI

viiBe uses ANSI escape sequences and Unicode characters to create a colorful terminal interface.

Different sections of the interface are visually separated:

🎵 Your Songs
🟢 Now Playing
🟡 Controls
🟣 Command

The goal is to keep the application lightweight while still making the terminal experience enjoyable.



⚠️ Current Limitations

v1.0.0 is intentionally simple.

Currently:

macOS only
MP3 files only
No queue
No shuffle
No repeat mode
No playlists
No song search
No metadata management
No album artwork
No keyboard shortcuts without entering a command
No progress bar

These features may be added in future versions.



🗺️ Roadmap

viiBe will be developed incrementally.

v1.0.0 — Basic Player ✅
 Scan local MP3 files
 Song selection
 Play
 Pause
 Resume
 Stop
 Next
 Previous
 Colorful terminal UI
v1.1.0 — Queue
 Add songs to queue
 View queue
 Remove songs from queue
 Clear queue
 Automatically play the next queued song
v1.2.0 — Better Controls
 Keyboard controls
 Playback progress
 Current time / duration
 Improved terminal rendering
 Better playback error handling
v1.3.0 — Playback Modes
 Shuffle
 Repeat
 Repeat one
 Looping
v1.4.0 — Organization
 Search songs
 Create playlists
 Manage playlists
 Favorites
v2.0.0 — Major Upgrade

Possible future improvements:

 Cross-platform playback
 Improved terminal interface
 Song metadata
 Album artwork
 Configuration
 Installable CLI package



📌 Version

Current version:

v1.0.0

viiBe follows a version-based development approach so that new features can be introduced without making the initial application unnecessarily complex.




🎵 viiBe

Your music. Your terminal. Your vibes.

Built with Node.js ❤️
