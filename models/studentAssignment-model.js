const mongoose = require("mongoose")

const studAssignschema = new mongoose.Schema({
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
    submittedBy:{
        type:String,
        required:true
    },
    submissionDate:{
        type:String,
        required:true
    },
    submitted:{
        type:Boolean,
        required:true
    },
    file:{
        type: String,
    }
})

module.exports=mongoose.model("StudAssignment",studAssignschema)