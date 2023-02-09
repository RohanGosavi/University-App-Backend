const express = require("express")
const attendance = require("../models/attendance-model")

const router = express.Router()


router.post('/get',(req,res)=>{
    try{
        attendance.find({year:req.body.year,subject:req.body.subject},(err,result)=>{
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
        attendance.find({},(err,result)=>{
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

router.post('/',(req,res)=>{
    
     const attendances = new attendance({
         year:req.body.year,
         date:req.body.date,
         subject:req.body.subject,
         attendancelist:req.body.attendancelist
     })
     try {
         const a1 = attendances.save()
         res.json(a1)
     } catch (err) {
        res.send(400).json("err")
     }
 })

 router.delete('/delete/:id',(req,res)=>{
    try{
        attendance.remove({_id:req.params.id},function (err, user) {
            if (err)
              return console.error(err)
            //console.log('deleted')
            res.status(200).send()
          })
    }catch(err){
        res.send("err"+err)
    }
  })

 module.exports = router