const express=require("express")
const rootDir=require("../util/pathUtil")
const hostRouter=express.Router()
const path=require("path")

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","addhome.html"))
})
hostRouter.post("/add-home",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","homeadd.html"))
})

module.exports=hostRouter