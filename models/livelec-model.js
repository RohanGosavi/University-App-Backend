const mongoose = require("mongoose")



const LivelecSchema = new mongoose.Schema({
    year :{
        type : String,
        required:true
    },
    subject:{
        type : String,
        required:true
    },
    link:{
        type: String,
        required:true
    },
});

module.exports = mongoose.model("livelec",LivelecSchema);