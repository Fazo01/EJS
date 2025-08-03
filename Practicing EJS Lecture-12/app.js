const express=require("express")
const app=express()
const useRouter=require("./Routes/useRouter")
const PORT=3000

app.use(useRouter)

app.listen(PORT,()=>{
  console.log(`Server port link http://localhost:${PORT}` )
})