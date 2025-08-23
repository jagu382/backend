require ("dotenv").config()
const express=require("express")
const connectDB = require("./config/db/dbConnect")
const publicRoute = require("./routes/public_Route/publlicRoute")
const songRoute = require("./routes/song_Route/songRoute")
// const publicRoute = require("./routes/publicRoute/publlicRoute")
// const userRoute = require("./routes/userRoute/userRoute")
const app=express()
app.use(express.json())

const cors=require("cors")
app.use(cors())

connectDB()

//!public route
app.use("/music",publicRoute)

// //!music route
app.use("/music",songRoute)

app.listen(process.env.PORT,()=>{
    console.log("server started")
})