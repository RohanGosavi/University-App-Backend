const mongoose = require("mongoose")

const attendanceschema = new mongoose.Schema({
    year:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    attendancelist:{
        type:[Number],
        required:true
    }
})

module.exports=mongoose.model("Attendance",attendanceschema)
