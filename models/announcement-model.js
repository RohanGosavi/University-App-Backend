const mongoose = require("mongoose")

const announceSchema = new mongoose.Schema({
    announcement:{
        type : String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    by:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("announceSchema",announceSchema)