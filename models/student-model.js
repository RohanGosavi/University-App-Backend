const mongoose = require("mongoose")

const  studentSchema = new mongoose.Schema({
    id:{
        type: String,
        required:true,
        unique:true,
    },
    uniroll :{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true
    },
    div:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    savedfeedid:{
        type:[Number],
    },
    savedblogid:{
        type:[Number],
    }
})

module.exports = mongoose.model("studentSchema",studentSchema)