const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { spawn } = require("child_process");

const songsPath = path.join(__dirname, "../songs");

fs.readdir(songsPath, (err, files) => {

    console.log("\n".repeat(3));
    console.log("==========================================");
    console.log("==========================================");
    console.log("        Welcome to your viiBe! 😎         ");
    console.log("==========================================");
    console.log("==========================================");
    console.log("\n".repeat(2));

    if (err) {
        console.log(`Error reading files: ${err.message}`);
        return;
    }

    const songs = files.filter(song => song.endsWith(".mp3"));

    console.log("Songs Found:\n");

    if (songs.length === 0) {
        console.log("       No songs found in the directory.");
        return;
    }

    songs.forEach((song, idx) => {
        console.log(`${idx + 1}. ${song}`);
    });

    console.log();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    function askForSong() {

        rl.question("Enter song number: ", (answer) => {

            const songNumber = Number(answer);

            if (Number.isNaN(songNumber)) {
                console.log("\n❌ Please enter a number.\n");
                askForSong();
                return;
            }

            if (songNumber < 1 || songNumber > songs.length) {
                console.log("\n❌ Invalid song number.");
                console.log("Please choose a number from the list.\n");
                askForSong();
                return;
            }

            const selectedIndex = songNumber - 1;

            const selectedSong = songs[selectedIndex];

            console.log(`\n▶ Playing: ${selectedSong}`);

            const fullSongPath = path.join(songsPath, selectedSong);

            const command =
                process.platform === "darwin"
                    ? "afplay"
                    : process.platform === "win32"
                        ? "cmdmp3"
                        : "mpg123";

            const playerProcess = spawn(command, [fullSongPath]);

            playerProcess.on("error", (error) => {
                console.error(
                    `\n❌ Failed to start audio player (${command}): ${error.message}`
                );

                if (process.platform !== "darwin") {
                    console.log(
                        "Make sure an appropriate audio player is installed and available in PATH."
                    );
                }

                rl.close();
            });

            playerProcess.on("close", (code) => {

                if (code === 0) {
                    console.log("\n✓ Finished playing.");
                } else {
                    console.log(
                        `\n❌ Player process exited with code ${code}.`
                    );
                }

                rl.close();
            });
        });
    }

    askForSong();
});

