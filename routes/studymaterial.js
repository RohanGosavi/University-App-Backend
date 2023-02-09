const express = require("express")
const studymaterial = require("../models/studymaterial-model")
const multer=require('multer')

const router = express.Router()

router.use('/uploads', express.static(__dirname +'/uploads'));
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })
  router.post('/upload', upload.single('myFile'), async(req, res, next) => {
    const file = req.file
      const studym= new studymaterial({
        topic:req.body.topic,
        year:req.body.year,
        subject:req.body.subject,
        by:req.body.by,
        file: !file ? null: file.path
      })
      const savedstudy = await studym.save()
      res.json(savedstudy)
    
  })

  router.get('/',async(req, res)=>{
    const assign = await studymaterial.find()
    res.json(assign)
    
   })

   router.post('/get',(req,res)=>{
    try{
        studymaterial.find({year:req.body.year,subject:req.body.subject},(err,result)=>{
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
        studymaterial.find({by:req.body.by},(err,result)=>{
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

router.post('/download', function(req, res){
    try{
      var path = req.body.file;
      const file = path;
      res.download(file);
    }catch(err){
      res.send('error'+err)
    }
  })

router.delete('/delete/:id',(req,res)=>{
    try{
        studymaterial.remove({_id:req.params.id},function (err, user) {
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