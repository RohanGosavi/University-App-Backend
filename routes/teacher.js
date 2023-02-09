const express = require("express")
const teacher = require("../models/teacher-model")

const router = express.Router()


router.post('/get',(req,res)=>{
    try{
        teacher.findOne({id:req.body.id},(err,result)=>{
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

router.get('/',(req,res)=>{
    try{
        // const tl = TestLink.find()
        // console.log(tl)
        // res.json(tl)
        teacher.find({},(err,result)=>{
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
    teacher.findOne({id:req.body.id,},(err,result)=>{
        if(err) throw err
         if(!result){
             teacher({
                 id:req.body.id,
                 name:req.body.name,
                 email:req.body.email,
                 phone:req.body.phone,
                 address:req.body.address,
                 educationqual:req.body.educationqual,
                 subjects:req.body.subjects,
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
