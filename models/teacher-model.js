const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
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
    educationqual:{
        type:String,
        required:true
    },
    subjects:{
        type:[String],
        required:true
    },
    savedfeedid:{
        type:[Number],
    },
    savedblogid:{
        type:[Number],
    }
})
module.exports = mongoose.model("TeacherSchema",teacherSchema);