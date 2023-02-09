const express = require("express")
const feed = require("../models/feed-model")
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
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      
      
      const imagepost= new feed({
        image: file.path,
        name:req.body.name,
        studentid:req.body.studentid,
        desc:req.body.desc,
        likes:req.body.likes
      })
      const savedimage= await imagepost.save()
      res.json(savedimage)
    
  })

  router.patch('/update',async(req,res)=>{
    feed.findOneAndUpdate(
      { _id: req.body.id },
      { $push: { likes:req.body.saveid} },
      (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.json(result)
        }
      }
    );
  })

  router.patch('/deletelike',async(req,res)=>{
    feed.findOneAndUpdate(
      { _id: req.body.id },
      { $pull: { likes:req.body.saveid} },
      (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.json(result)
        }
      }
    );
  })

  router.get('/get',async(req, res)=>{
   const image = await feed.find()
   res.json(image)
   
  })
  module.exports = router