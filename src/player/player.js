const { spawn } = require("child_process");

class MusicPlayer {
    constructor(spawnProcess = spawn) {
        this.spawnProcess = spawnProcess;
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

        if (this.playerProcess) {
            this.stop(false);
        }

        this.currentSong = songName;

        let playerProcess;

        try {
            playerProcess = this.spawnProcess("afplay", [songPath]);
        } catch (error) {
            this.isStopped = true;
            this.currentSong = null;
            throw error;
        }

        this.playerProcess = playerProcess;

        this.isPaused = false;
        this.isStopped = false;

        playerProcess.on("error", (error) => {
            if (this.playerProcess !== playerProcess) {
                return;
            }

            console.error(`\n❌ Player error: ${error.message}`);
        });

        playerProcess.on("close", (code) => {
            if (this.playerProcess !== playerProcess) {
                return;
            }

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
