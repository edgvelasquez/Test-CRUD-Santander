const mongoose=require("mongoose")
const connectDB=()=>{
    console.log("Conectando a la base de datos "+process.env.URL_MONGO+"...");
    mongoose.connect(process.env.URL_MONGO,{
        serverSelectionTimeoutMS:10000
    }).catch(e=>console.log(e.message)).then((data)=>{
        console.log("Conexión establecida OK.");
    });
}
module.exports=connectDB