const express=require("express")
const path=require("path")
const app=express()
const {hostRouter}=require("./Routes/hostRouter")
const useRouter=require("./Routes/useRouter")
const rootDir=require("./util/pathUtil")

app.use(express.urlencoded())
app.use(express.static(path.join(rootDir,"public")))
app.use((req,res,next)=>{
  console.log(req.method)
  next()
})

app.use(useRouter)
app.use("/host",hostRouter)
app.use((req,res,next)=>{
  res.sendFile(path.join(rootDir,"Views","page_404.html"))
})

const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server link http://localhost:${PORT}`)
})