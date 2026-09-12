const fs = require("fs");
const path = require("path");

class MusicLibrary {
    constructor(songsPath) {
        this.songsPath = songsPath;
        this.songs = [];
    }

    loadSongs() {
        try {
            const files = fs.readdirSync(this.songsPath);

            this.songs = files.filter(file =>
                path.extname(file).toLowerCase() === ".mp3"
            );

            return this.songs;
        } catch (error) {
            throw new Error(`Unable to read songs directory: ${error.message}`);
        }
    }

    getSongs() {
        return this.songs;
    }

    getSong(index) {
        if (index < 0 || index >= this.songs.length) {
            return null;
        }

        return this.songs[index];
    }

    getSongPath(index) {
        const song = this.getSong(index);

        if (!song) {
            return null;
        }

        return path.join(this.songsPath, song);
    }

    getSongCount() {
        return this.songs.length;
    }
}

module.exports = MusicLibrary;