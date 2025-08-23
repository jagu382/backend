const express=require("express")
const { register, login } = require("../../controllers/public_Controller/publicController")
const publicRoute=express.Router()

publicRoute.post("/login",login)
publicRoute.post("/register",register)

module.exports=publicRoute