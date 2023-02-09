const mongoose = require("mongoose")

const feedSchema= mongoose.Schema(
    {
        image:{
            type: String,
            required: true
        },
        name:{
            type:String,
            required:true
        },
        studentid:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        likes:{
            type:[String]
        }
    }
);


module.exports=mongoose.model("Feed",feedSchema)