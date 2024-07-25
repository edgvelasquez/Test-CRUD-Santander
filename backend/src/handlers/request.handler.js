const requestHandler=(err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(403).send({type:"error",message:"Error body request"})
    }
    next();
}
module.exports=requestHandler