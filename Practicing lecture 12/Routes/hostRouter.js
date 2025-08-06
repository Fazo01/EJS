const express=require("express")
const rootDir=require("../util/pathUtil")
const hostRouter=express.Router()
const path=require("path")

hostRouter.get("/add-home",(req,res,next)=>{
  res.render('addHome',{pageTitle:'Add Home'})
})
const registeredName=[]

hostRouter.post("/add-home",(req,res,next)=>{
  console.log("House name:",req.body,req.body.houseName)
  registeredName.push(req.body)
  res.render('homeadd',{pageTitle:'Home Added'})
})

exports.hostRouter=hostRouter
exports.registeredName=registeredName