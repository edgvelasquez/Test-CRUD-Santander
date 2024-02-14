const {validationResult}=require("express-validator")
const productoValidator=(req,res,next)=>{
    try{
        validationResult(req).throw()
        return next();
    }catch (e){
        res.status(403)
        res.send({type:"error",message:e.array()})
    }
}
module.exports=productoValidator