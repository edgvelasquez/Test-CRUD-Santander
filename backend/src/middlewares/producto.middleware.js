const verifyRequest=async (err,req,res,next)=>{
    try{
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            return res.status(400).send({ status: 404, message: err.message }); // Bad request
        }
        next();
    }catch(e){
    }
}
module.exports=verifyRequest