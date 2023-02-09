const mongoose = require("mongoose")

const  loginSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    username :{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    usertype:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("loginSchema",loginSchema)