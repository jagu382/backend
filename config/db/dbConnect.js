const mongoose=require("mongoose")
const dburl=process.env.DB_URL

const connectDB=async()=>{
    try {
        await mongoose.connect(dburl)
        console.log("connected")
    } catch (error) {
       console.log(error) 
    }
}
module.exports=connectDB