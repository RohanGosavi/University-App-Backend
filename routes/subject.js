const express = require("express")
const subject = require("../models/subject-model")

const router = express.Router()


router.post('/get',(req,res)=>{
    try{
        subject.find({year:req.body.year,},(err,result)=>{
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

router.get('/getAll',(req,res)=>{
    try{
        subject.find({},(err,result)=>{
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
    
    const sub = new subject({
        year:req.body.year,
        subject:req.body.subject,
    })
    try {
        const a1 = sub.save()
        res.json(a1)
    } catch (err) {
        res.send('err'+err)
    }
})

router.delete('/delete/:id',(req,res)=>{
    try{
        subject.remove({_id:req.params.id},function (err, user) {
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