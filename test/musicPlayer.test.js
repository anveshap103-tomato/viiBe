const test = require("node:test");
const assert = require("node:assert/strict");
const { EventEmitter } = require("node:events");

const MusicPlayer = require("../src/player/player");

class FakePlayerProcess extends EventEmitter {
    constructor() {
        super();
        this.signals = [];
    }

    kill(signal) {
        this.signals.push(signal);
        return true;
    }
}

test("changing tracks keeps controls attached to the new track", () => {
    const firstTrack = new FakePlayerProcess();
    const secondTrack = new FakePlayerProcess();
    const processes = [firstTrack, secondTrack];
    const player = new MusicPlayer(() => processes.shift());

    player.play("first.mp3", "First");
    player.play("second.mp3", "Second");
    firstTrack.emit("close", null);

    assert.equal(player.isPlaying(), true);
    assert.equal(player.getCurrentSong(), "Second");

    player.pause();
    assert.deepEqual(secondTrack.signals, ["SIGSTOP"]);
    assert.equal(player.isPlaying(), false);
});
