const express = require("express")
const TestLink = require("../models/testlink-model")

const router = express.Router()


router.post('/get',(req,res)=>{
    try{
        TestLink.find({year:req.body.year,},(err,result)=>{
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
        TestLink.find({},(err,result)=>{
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
     console.log("Testlink");
     const testLinks = new TestLink({
         year:req.body.year,
         subject:req.body.subject,
         link:req.body.link,
     })
     try {
         const a1 = testLinks.save()
         res.json(a1)
     } catch (err) {
         res.send('err'+err)
     }
 })

 router.delete('/delete/:id',(req,res)=>{
    try{
        TestLink.remove({_id:req.params.id},function (err, user) {
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