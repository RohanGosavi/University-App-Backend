const mongoose = require("mongoose")

const studymaterialschema = new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    by:{
        type:String,
        required:true
    },
    file:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model("StudyMaterial",studymaterialschema)