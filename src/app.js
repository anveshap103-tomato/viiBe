const path = require("path");
const readline = require("readline");

const MusicLibrary = require("./library/musicLibrary");
const MusicPlayer = require("./player/player");

const songsPath = path.join(__dirname, "../songs");

const library = new MusicLibrary(songsPath);
const player = new MusicPlayer();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let currentIndex = 0;

console.log("\n".repeat(3));

console.log("==========================================");
console.log("==========================================");
console.log("        Welcome to your viiBe! 😎         ");
console.log("==========================================");
console.log("==========================================");

console.log("\n".repeat(2));


try {
    const songs = library.loadSongs();

    if (songs.length === 0) {
        console.log("❌ No MP3 songs found.");
        rl.close();
        return;
    }

    console.log("Songs Found:\n");

    songs.forEach((song, index) => {
        console.log(`${index + 1}. ${song}`);
    });

    console.log();

    askForSong();

} catch (error) {
    console.log(`❌ ${error.message}`);
    rl.close();
}


function askForSong() {
    rl.question("Enter song number: ", (answer) => {

        const songNumber = Number(answer);

        if (Number.isNaN(songNumber)) {
            console.log("\n❌ Please enter a number.\n");
            askForSong();
            return;
        }

        if (
            songNumber < 1 ||
            songNumber > library.getSongCount()
        ) {
            console.log("\n❌ Invalid song number.");
            console.log("Please choose a number from the list.\n");

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

    console.log(`\n▶ Playing: ${selectedSong}\n`);

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
    rl.question(
        "\n[p] Pause   [r] Resume   [n] Next   [b] Previous   [s] Stop   [q] Quit\nCommand: ",
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


            console.log("\n❌ Invalid command.");
            console.log(
                "Use p, r, n, b, s or q."
            );

            commandLoop();
        }
    );
}