const mongoose = require("mongoose")

const subjectSchema = new mongoose.Schema({
    year:{
        type: String,
        required:true
    },
    subject:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model("Subjects",subjectSchema)