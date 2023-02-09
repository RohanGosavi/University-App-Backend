const express = require("express")
const login = require("../models/login-model")

const router = express.Router()

router.get('/',(req,res)=>{
    try{
        // const tl = TestLink.find()
        // console.log(tl)
        // res.json(tl)
        login.find({},(err,result)=>{
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

router.post('/authenticate',(req,res)=>{
     login.findOne({username:req.body.username,},(err,result)=>{
         if(err) throw err
         if(!result){
             res.status(404).json("username error")
         }else if(result.password == req.body.password){
             res.json(result)
         }else{
            res.status(401).json("error")
         }
     })
 })

 router.post('/add',(req,res)=>{
    login.findOne({username:req.body.username,},(err,result)=>{
        if(err) throw err
         if(!result){
             login({
                 id:req.body.id,
                 username:req.body.username,
                 password: req.body.password,
                 usertype: req.body.usertype
             }).save()
             res.json("added")
         }else{
             res.send(400).json("username exist")
         }
    })
})

 module.exports = router