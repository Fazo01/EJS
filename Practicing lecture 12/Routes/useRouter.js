const express=require("express")
const path=require("path")
const useRouter=express.Router()
const rootDir=require("../util/pathUtil")
const {registeredName}=require("../Routes/hostRouter")
useRouter.get("/",(req,res,next)=>{
  console.log(registeredName)
  res.render('home',{pageTitle:'Home',registeredName:registeredName})
})

module.exports=useRouter