const express=require("express")
const { allsongs, addSong } = require("../../controllers/song_Controller/songController")
const songRoute=express.Router()

songRoute.post("/addsong",addSong)
songRoute.get("/allsongs",allsongs)
// songRoute.get("/trending",trendingsongs)
// songRoute.get("/popularsong",popularsong)

module.exports=songRoute