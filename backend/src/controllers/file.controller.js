const readFilePath = require("../utils/producto.file.util");


class FileController{
    readFile(req,res){
        readFilePath.readFilePath('./certificados/cert.crt');
        return res.send({
            type:"success",
            message:"Read file Ok."
        });
    }


}
module.exports=FileController