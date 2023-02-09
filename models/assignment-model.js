const mongoose = require("mongoose")

const assignmentschema = new mongoose.Schema({
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
    assignedBy:{
        type:String,
        required:true
    },
    createDate:{
        type:String,
        default:Date.now,
        required:true
    },
    submissionDate:{
        type:String,
        required:true
    },
    file:{
        type: String,
    }
})

module.exports=mongoose.model("Assignment",assignmentschema)