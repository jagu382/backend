const mongoose=require("mongoose")
//!schema
const userSchema=new mongoose.Schema({
    F_name:String,
    L_name:String,
    age:String,
    email:String,
    gender:String,
    password:String
})
//!model
const UserModel=mongoose.model("users",userSchema)




module.exports=UserModel