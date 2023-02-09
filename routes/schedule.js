const express = require("express")
const schedule = require("../models/schedule-model")

const router = express.Router()


router.post('/get',(req,res)=>{
    try{
        schedule.find({year:req.body.year,day:req.body.day},(err,result)=>{
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
        schedule.find({},(err,result)=>{
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
    
     const schedules = new schedule({
         year:req.body.year,
         day:req.body.day,
         subject:req.body.subject,
         teacher:req.body.teacher,
         time:req.body.time
     })
     try {
         const a1 = schedules.save()
         res.json(a1)
     } catch (err) {
        res.send(400).json("err")
     }
 })

 router.delete('/delete/:id',(req,res)=>{
    try{
        schedule.remove({_id:req.params.id},function (err, user) {
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