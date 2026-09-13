const colors = {
    reset: "\x1b[0m",

    bold: "\x1b[1m",

    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",

    brightRed: "\x1b[91m",
    brightGreen: "\x1b[92m",
    brightYellow: "\x1b[93m",
    brightBlue: "\x1b[94m",
    brightMagenta: "\x1b[95m",
    brightCyan: "\x1b[96m",
    brightWhite: "\x1b[97m",

    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgGreen: "\x1b[42m",
};

class Display {

    showWelcome() {
        console.clear();

        console.log();

        console.log(
            `${colors.brightMagenta}${colors.bold}` +
            "╔══════════════════════════════════════════════════════╗" +
            `${colors.reset}`
        );

        console.log(
            `${colors.brightMagenta}${colors.bold}║` +
            `${colors.brightCyan}                    viiBe 🎵` +
            `${colors.brightMagenta}                    ║` +
            `${colors.reset}`
        );

        console.log(
            `${colors.brightMagenta}${colors.bold}║` +
            `${colors.brightYellow}              Your music. Your vibes.              ` +
            `${colors.brightMagenta}║` +
            `${colors.reset}`
        );

        console.log(
            `${colors.brightMagenta}${colors.bold}║` +
            `${colors.brightPink || colors.brightMagenta}        ♪ ♫    🐈 🎧    ♫ ♪    ✨    ♪    →       ` +
            `${colors.brightMagenta}║` +
            `${colors.reset}`
        );

        console.log(
            `${colors.brightMagenta}${colors.bold}║` +
            `${colors.brightGreen}             Good Music • Better Mood              ` +
            `${colors.brightMagenta}║` +
            `${colors.reset}`
        );

        console.log(
            `${colors.brightMagenta}${colors.bold}` +
            "╚══════════════════════════════════════════════════════╝" +
            `${colors.reset}`
        );

        console.log();
    }

    showSongs(songs) {
        console.log(
            `${colors.brightBlue}${colors.bold}` +
            "╭──────────────────── YOUR SONGS ────────────────────╮" +
            `${colors.reset}`
        );

        console.log();

        songs.forEach((song, index) => {
            console.log(
                `${colors.brightBlue}  ${index + 1}. ` +
                `${colors.brightWhite}${song}` +
                `${colors.reset}`
            );
        });

        console.log();

        console.log(
            `${colors.brightBlue}${colors.bold}` +
            "╰────────────────────────────────────────────────────╯" +
            `${colors.reset}`
        );

        console.log();
    }

    showNowPlaying(song, status = "Playing") {
        console.log(
            `${colors.brightGreen}${colors.bold}` +
            "╭────────────────── NOW PLAYING ────────────────────╮" +
            `${colors.reset}`
        );

        console.log();

        console.log(
            `${colors.brightGreen}  🎵  ` +
            `${colors.brightWhite}${colors.bold}${song}` +
            `${colors.reset}`
        );

        console.log();

        console.log(
            `${colors.brightGreen}  Status: ` +
            `${colors.brightYellow}${status}` +
            `${colors.reset}`
        );

        console.log();

        console.log(
            `${colors.brightGreen}  ♪ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ♪` +
            `${colors.reset}`
        );

        console.log();

        console.log(
            `${colors.brightGreen}${colors.bold}` +
            "╰────────────────────────────────────────────────────╯" +
            `${colors.reset}`
        );

        console.log();
    }

    showControls() {
        console.log(
            `${colors.brightYellow}${colors.bold}` +
            "╭──────────────────── CONTROLS ─────────────────────╮" +
            `${colors.reset}`
        );

        console.log();

        console.log(
            `  ${colors.brightMagenta}[p]${colors.reset} Pause      ` +
            `${colors.brightCyan}[r]${colors.reset} Resume      ` +
            `${colors.brightGreen}[n]${colors.reset} Next`
        );

        console.log(
            `  ${colors.brightBlue}[b]${colors.reset} Previous   ` +
            `${colors.brightRed}[s]${colors.reset} Stop        ` +
            `${colors.brightWhite}[q]${colors.reset} Quit`
        );

        console.log();

        console.log(
            `${colors.brightYellow}${colors.bold}` +
            "╰────────────────────────────────────────────────────╯" +
            `${colors.reset}`
        );
    }

    showCommandPrompt() {
        console.log(
            `${colors.brightMagenta}${colors.bold}` +
            "╭───────────────────── COMMAND ─────────────────────╮" +
            `${colors.reset}`
        );

        console.log();

        console.log(
            `  ${colors.brightMagenta}${colors.bold}➜${colors.reset} `
        );
    }

    showError(message) {
        console.log(
            `\n${colors.brightRed}${colors.bold}❌ ${message}${colors.reset}\n`
        );
    }

    showMessage(message) {
        console.log(
            `\n${colors.brightCyan}${colors.bold}${message}${colors.reset}\n`
        );
    }
}

module.exports = Display;