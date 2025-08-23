const UserModel = require("../../models/usermodel")
const generateToken = require("../../Util/util")

//!register
const register=async(req,res)=>{
    const New_user=req.body
    try {
        const isExit= await UserModel.findOne({email:New_user.email})
        if(isExit) return res.json({message:"email has already been registered.."})
        //generate a password
        const password=`${New_user.F_name}@123`
        const UserwithPassword={...New_user,password}
        //add the user
        await UserModel.insertOne(UserwithPassword)
        res.json({message:"user added"})

    } catch (error) {
      res.json({message:"error.."})  
    }
}

//! login
 const login=async(req,res)=>{
    const {email,password}=req.body
try {
        const get_User=await UserModel.findOne({email})
        if(! get_User) return res.json({message:"oops !! email has't registered "})
            if(get_User.password !== password)return res.json({message:"invalid password !!"})
            //generate token
            const token=generateToken({user:get_User})
            res.json({message:"login successful",token})

} catch (error) {
    res.status(500).json({message:"server error.."})
    
} }


module.exports={register,login}