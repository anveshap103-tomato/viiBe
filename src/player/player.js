const { spawn } = require("child_process");

class MusicPlayer {
    constructor() {
        this.playerProcess = null;
        this.isPaused = false;
        this.isStopped = true;
        this.currentSong = null;
    }

    play(songPath, songName) {
        if (process.platform !== "darwin") {
            throw new Error(
                "The current player implementation uses macOS afplay."
            );
        }

        // Stop the currently playing song if there is one
        if (this.playerProcess) {
            this.stop(false);
        }

        this.currentSong = songName;

        this.playerProcess = spawn("afplay", [songPath]);

        this.isPaused = false;
        this.isStopped = false;

        this.playerProcess.on("error", (error) => {
            console.error(`\n❌ Player error: ${error.message}`);
        });

        this.playerProcess.on("close", (code) => {
            this.playerProcess = null;

            if (!this.isStopped) {
                this.isStopped = true;
                this.isPaused = false;

                if (code === 0) {
                    console.log(`\n✓ Finished: ${this.currentSong}`);
                } else {
                    console.log(
                        `\n❌ Player exited with code ${code}: ${this.currentSong}`
                    );
                }
            }
        });
    }

    pause() {
        if (!this.playerProcess) {
            console.log("❌ Nothing is playing.");
            return;
        }

        if (this.isStopped) {
            console.log("❌ Player is stopped.");
            return;
        }

        if (this.isPaused) {
            console.log("⚠️ Song is already paused.");
            return;
        }

        this.playerProcess.kill("SIGSTOP");

        this.isPaused = true;

        console.log(`⏸️ Paused: ${this.currentSong}`);
    }

    resume() {
        if (!this.playerProcess) {
            console.log("❌ Nothing is playing.");
            return;
        }

        if (this.isStopped) {
            console.log("❌ Player is stopped.");
            return;
        }

        if (!this.isPaused) {
            console.log("⚠️ Song is not paused.");
            return;
        }

        this.playerProcess.kill("SIGCONT");

        this.isPaused = false;

        console.log(`▶️ Resumed: ${this.currentSong}`);
    }

    stop(showMessage = true) {
        if (!this.playerProcess) {
            if (showMessage) {
                console.log("❌ Nothing is playing.");
            }
            return;
        }

        this.playerProcess.kill("SIGTERM");

        this.playerProcess = null;
        this.isStopped = true;
        this.isPaused = false;

        if (showMessage) {
            console.log(`⏹️ Stopped: ${this.currentSong}`);
        }
    }

    isPlaying() {
        return (
            this.playerProcess !== null &&
            !this.isPaused &&
            !this.isStopped
        );
    }

    getCurrentSong() {
        return this.currentSong;
    }
}

module.exports = MusicPlayer;