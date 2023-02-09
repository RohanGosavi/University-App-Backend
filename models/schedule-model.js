const mongoose = require("mongoose")

const scheduleschema = new mongoose.Schema({
    year:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    teacher:{
        type:String,
        required:true
    },
    time:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model("Schedule",scheduleschema)