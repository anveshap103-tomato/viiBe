const path = require("path");
const readline = require("readline");

const MusicLibrary = require("./library/musicLibrary");
const MusicPlayer = require("./player/player");
const Display = require("./ui/display");

const songsPath = path.join(__dirname, "../songs");

const library = new MusicLibrary(songsPath);
const player = new MusicPlayer();
const display = new Display();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let currentIndex = 0;

display.showWelcome();


try {
    const songs = library.loadSongs();

    if (songs.length === 0) {
        console.log("❌ No MP3 songs found.");
        rl.close();
        return;
    }

    display.showSongs(songs);

    askForSong();

} catch (error) {
    console.log(`❌ ${error.message}`);
    rl.close();
}


function askForSong() {
    rl.question("Enter song number: ", (answer) => {

        const songNumber = Number(answer);

        if (Number.isNaN(songNumber)) {
            display.showError("Please enter a number.");
            askForSong();
            return;
        }

        if (
            songNumber < 1 ||
            songNumber > library.getSongCount()
        ) {
            display.showError("Invalid song number. Please choose a number from the list.");

            askForSong();
            return;
        }

        currentIndex = songNumber - 1;

        playCurrentSong();

        commandLoop();
    });
}


function playCurrentSong() {
    const selectedSong = library.getSong(currentIndex);
    const songPath = library.getSongPath(currentIndex);

    display.showNowPlaying(selectedSong);

    player.play(songPath, selectedSong);
}


function playNextSong() {

    if (currentIndex === library.getSongCount() - 1) {
        console.log("\n⚠️ Already at the last song.");
        return;
    }

    currentIndex++;

    playCurrentSong();
}


function playPreviousSong() {

    if (currentIndex === 0) {
        console.log("\n⚠️ Already at the first song.");
        return;
    }

    currentIndex--;

    playCurrentSong();
}


function commandLoop() {
    display.showControls();
        console.log();

    console.log(
        "\x1b[95m\x1b[1m" +
        "╭───────────────────── COMMAND ─────────────────────╮" +
        "\x1b[0m"
    );
    rl.question(
        "\nCommand: ",
        (input) => {

            const command = input.trim().toLowerCase();


            if (command === "p") {
                player.pause();
                commandLoop();
                return;
            }


            if (command === "r") {
                player.resume();
                commandLoop();
                return;
            }


            if (command === "n") {
                playNextSong();
                commandLoop();
                return;
            }


            if (command === "b") {
                playPreviousSong();
                commandLoop();
                return;
            }


            if (command === "s") {
                player.stop();
                commandLoop();

                return;
            }


            if (command === "q") {
                player.stop();

                console.log("\n👋 Goodbye!");

                rl.close();
                return;
            }


            display.showError("Invalid command. Use p, r, n, b, s or q.");

            commandLoop();
        }
    );
}