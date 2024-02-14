const mongoose=require("mongoose")
const connectDB=()=>{
    mongoose.connect(process.env.URL_MONGO,{
        serverSelectionTimeoutMS:10000
    }).catch(e=>console.log(e.message));
}
module.exports=connectDB