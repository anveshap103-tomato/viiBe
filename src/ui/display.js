class Display {
    showWelcome() {
        console.clear();

        console.log("╔══════════════════════════════════════════════╗");
        console.log("║                  viiBe 🎵                    ║");
        console.log("╠══════════════════════════════════════════════╣");
        console.log("║              Terminal Music Player           ║");
        console.log("╚══════════════════════════════════════════════╝");
        console.log();
    }

    showSongs(songs) {
        console.log("🎵 Your Songs\n");

        songs.forEach((song, index) => {
            console.log(`  ${index + 1}. ${song}`);
        });

        console.log();
    }

    showNowPlaying(song, status = "Playing") {
        console.log("┌──────────────────────────────────────────────┐");
        console.log("│ Now Playing                                  │");
        console.log("│                                              │");
        console.log(`│ ▶ ${song.padEnd(42)}│`);
        console.log("│                                              │");
        console.log(`│ Status: ${status.padEnd(35)}│`);
        console.log("└──────────────────────────────────────────────┘");
        console.log();
    }

    showControls() {
        console.log("────────────────────────────────────────────────");
        console.log("[p] Pause   [r] Resume   [n] Next");
        console.log("[b] Previous   [s] Stop   [q] Quit");
        console.log("────────────────────────────────────────────────");
    }

    showError(message) {
        console.log(`\n❌ ${message}\n`);
    }

    showMessage(message) {
        console.log(`\n${message}\n`);
    }
}

module.exports = Display;