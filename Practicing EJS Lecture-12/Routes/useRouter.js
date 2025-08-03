const express=require("express")
const path=require("path")
const useRouter=express.Router()
const rootDir=require("../util/pathUtil")
useRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","home.html"))
})
module.exports=useRouter