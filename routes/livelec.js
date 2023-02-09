const express = require("express")
const livelec = require("../models/livelec-model")

const router = express.Router()


router.post('/get',(req,res)=>{
    try{
        livelec.find({year:req.body.year,},(err,result)=>{
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
        livelec.find({},(err,result)=>{
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
    
     const livelecs = new livelec({
         year:req.body.year,
         subject:req.body.subject,
         link:req.body.link,
     })
     try {
         const a1 = livelecs.save()
         res.json(a1)
     } catch (err) {
        res.send(400).json("err")
     }
 })

 router.delete('/delete/:id',(req,res)=>{
    try{
        livelec.remove({_id:req.params.id},function (err, user) {
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