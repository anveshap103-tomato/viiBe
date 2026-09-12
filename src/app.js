const fs = require("fs");
const path = require("path")

const songsPath = path.join(__dirname, '../songs')

fs.readdir(songsPath, (err, files)=>{
    console.log("\n".repeat(3));
    console.log("==========================================")
    console.log("==========================================")
    console.log("        Welcome to your viiBe!😎          ")
    console.log("==========================================")
    console.log("==========================================")
    console.log("\n".repeat(3));

    
    if(err){
        console.log(`Error reading files: ${err.message}`)
    }else{
        let songs = files.filter(song => song.endsWith('.mp3'))
        console.log("Songs Found: ")
        console.log("\n".repeat(2));

        if (songs.length == 0){
            console.log("       No songs found in the directory.")
        }else{
            songs.forEach((song, idx) =>   console.log(`${idx+1}. ${song}`))
        }
    }
})
