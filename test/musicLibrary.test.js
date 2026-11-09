const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const MusicLibrary = require("../src/library/musicLibrary");

test("loads only MP3 files, regardless of extension casing", (t) => {
    const songsDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "viibe-"));
    t.after(() => fs.rmSync(songsDirectory, { recursive: true, force: true }));
    fs.writeFileSync(path.join(songsDirectory, "track.mp3"), "");
    fs.writeFileSync(path.join(songsDirectory, "other.MP3"), "");
    fs.writeFileSync(path.join(songsDirectory, "notes.txt"), "");

    const library = new MusicLibrary(songsDirectory);

    assert.deepEqual(library.loadSongs(), ["other.MP3", "track.mp3"]);
    assert.equal(library.getSongPath(0), path.join(songsDirectory, "other.MP3"));
});
