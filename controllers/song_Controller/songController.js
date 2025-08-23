
const songsModel = require("../../models/songsModel")

//!add songs
const addSong=async(req,res)=>{
    const song=req.body
    try {
        await songsModel.insertOne(song);
        res.json({message:"song added.."})
    } catch (error) {
        res.json({message:"server error "})
    }
}

//!allsongs
const allsongs=async(req,res)=>{
    try {
        const all_songs= await songsModel.find()
        res.json(all_songs)
    } catch (error) {
        res.json({message:"server error"})
        
    }

}



module.exports={addSong,allsongs}