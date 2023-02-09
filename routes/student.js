const express = require("express")
const student = require("../models/student-model")

const router = express.Router()


router.post('/get',(req,res)=>{
    try{
        student.findOne({id:req.body.id},(err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.json(result)
            }
        })
    }catch(err){
        res.send('error'+err)
    }
})

router.post('/getAll',(req,res)=>{
    try{
        student.find({year:req.body.year},(err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.json(result)
            }
        })
    }catch(err){
        res.send('error'+err)
    }
})



router.post('/add',(req,res)=>{
    student.findOne({id:req.body.id,},(err,result)=>{
        if(err) throw err
         if(!result){
             student({
                 id:req.body.id,
                 uniroll:req.body.uniroll,
                 name:req.body.name,
                 email:req.body.email,
                 year:req.body.year,
                 div:req.body.div,
                 phone:req.body.phone,
                 address:req.body.address,
                 savedfeedid:req.body.savedfeedid,
                 savedblogid:req.body.savedblogid
             }).save()
             res.json("added student")
         }else{
            res.send(400).json("id exist")
         }
    })
})

module.exports = router