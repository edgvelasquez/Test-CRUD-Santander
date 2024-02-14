const mongoose=require("mongoose")
const ProductoSchema=new mongoose.Schema({
    name:{type:String,require:true,unique:true},
    price:{type:Number,require:true},
    description:{type:String,require:true},
    mail:{type:String,require:true,unique:true},
    fecha:{type:Date,require:true},
});
module.exports=mongoose.model("productos",ProductoSchema)