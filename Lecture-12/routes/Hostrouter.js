const path=require('path')
const express=require('express')
const rootDir=require('../utils/pathutils')
const hostrouter=express.Router()
hostrouter.get("/add-home",(req,res,next)=>{
  console.log(req.url,req.method)
    res.sendFile(path.join(rootDir,'views','addHome.html'))//Saving PAth
})
const registeredHomes=[]
hostrouter.post("/add-home",(req,res,next)=>{
  console.log(req.body,req.body.houseName)//parcel
  registeredHomes.push({houseName:req.body.houseName})
    res.sendFile(path.join(rootDir,'views','homeadd.html'))//Saving PAth
})
exports.hostrouter=hostrouter
exports.registeredHomes=registeredHomes