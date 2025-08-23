const mongoose =require("mongoose")
//!schema
const songsSchema=new mongoose.Schema({
    title:String,
    artist:String,
    song_url:String,
    img_url:String
})

//!model
const songsModel=mongoose.model("songs",songsSchema)

module.exports=songsModel