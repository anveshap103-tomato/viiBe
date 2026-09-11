const fs = require("fs");
const path = require("path")

const songs_path = path.join(__dirname, '../songs')

let data = fs.readdir(songs_path, 'utf-8', (err, files)=>{
    
    if(err){
        console.log(err)
    }else{
        let songs = files.filter(song => song.endsWith('.mp3'))
        console.log()
        console.log("==========================================")
        console.log("==========================================")
        console.log("        Welcome to your viiBe!😎          ")
        console.log("==========================================")
        console.log("==========================================")
        console.log()
        console.log(songs)
    }
})
