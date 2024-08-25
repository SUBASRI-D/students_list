require("dotenv").config()
const express=require("express")
const studentroute=require("./routes/students/student.js")
const studentdb=require("./db/index.js")
const app=new express();
const port=process.env.PORT ||8030;
app.use('/student',studentroute)
studentdb()

app.listen(port,()=>{
    console.log(`Express studentdetails listening http://localhost:${port}`)


})

