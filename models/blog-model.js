const mongoose = require("mongoose")

const blogSchema= mongoose.Schema(
    {
        image:{
            type: String,
            required: true
        },
        name:{
            type:String,
            required:true
        },
        topic:{
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


module.exports=mongoose.model("Blog",blogSchema)