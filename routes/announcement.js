const express = require("express")
const announcement = require("../models/announcement-model")

const router = express.Router()


router.delete('/delete/:id',(req,res)=>{
    try{
        announcement.remove({_id:req.params.id},function (err, user) {
            if (err)
              return console.error(err)
            //console.log('deleted')
            res.status(200).send()
          })
    }catch(err){
        res.send("err"+err)
    }
})

router.get('/',(req,res)=>{
    try{
        announcement.find({},(err,result)=>{
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


router.post('/get',(req,res)=>{
    try{
        announcement.find({year:req.body.year,},(err,result)=>{
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

router.post('/getTeacher',(req,res)=>{
    try{
        announcement.find({by:req.body.by},(err,result)=>{
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
    announcement({
        announcement:req.body.announcement,
        year:req.body.year,
        by:req.body.by
    }).save()
    res.json("added student")
})

module.exports = router