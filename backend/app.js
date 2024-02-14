require("dotenv").config()
const express=require("express")
const cors=require("cors")
const connectDB=require("./src/config/mongo.config")
const app=express()

app.use(cors())
app.use(express.json())
app.use("/api",require("./src/routes/producto.route"))
app.use(express.json())
app.listen(process.env.PORT,()=>{
    console.log("App run port: "+process.env.PORT)
})
connectDB();
module.exports=app
