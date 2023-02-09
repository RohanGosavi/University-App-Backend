const express = require("express")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")

const url = 'mongodb+srv://Rohan:rohan123@cluster0.j5fma.mongodb.net/appdb?retryWrites=true&w=majority'

const app =express()
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log("connected...")
})

app.use(express.json())
app.use('/uploads', express.static('uploads'));
const tlRouter = require('./routes/testlink')
app.use('/testlink',tlRouter)

const loginroute = require('./routes/login')
app.use('/login',loginroute)

const studentroute = require('./routes/student')
app.use('/student',studentroute)

const teacherroute = require('./routes/teacher')
app.use('/teacher',teacherroute)

const announceroute = require('./routes/announcement')
app.use('/announcement',announceroute)

const feedroute = require('./routes/feeds')
app.use('/feeds',feedroute)

const livelecroute = require('./routes/livelec')
app.use('/livelec',livelecroute)

const assignmeroute = require('./routes/assignment')
app.use('/assignment',assignmeroute)

const subjectroute = require('./routes/subject')
app.use('/subjects',subjectroute)


const studassignroute = require('./routes/studentAssignment')
app.use('/studentAssign',studassignroute)

const studymaterialroute = require('./routes/studymaterial')
app.use('/studymaterial',studymaterialroute)

const scheduleroute = require('./routes/schedule')
app.use('/schedule',scheduleroute)

const blogroute = require('./routes/blog')
app.use('/blogs',blogroute)

const attendanceroute = require('./routes/attendance')
app.use('/attendance',attendanceroute)


app.route("/").get((req,res)=>res.json("hello"))

app.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log("server started...")
})

// app.listen(5000,()=>{
//     console.log("server started...")
// })