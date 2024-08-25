const express=require("express")
const studentroute=express.Router();
studentroute.get("/",(req,res)=>{
    res.json({
        name:"subasri",
        roll_no:115,
        department:"CSE",
        dob:7-12-2003,
        cpga:8.59,
        course:"Fullstack"



    })

})

module.exports=studentroute