const modelProducto=require("../models/producto.model")

class ProductoService{
    async listarProductos(req,res){
        try {
            const productos = await modelProducto.find().exec();
            return res.send(productos);
        }catch (e){
            return res.status(500).send({type:"error",message:e.message});
        }
    }
    async crearProducto(req,res){
        console.log(req.body);
        try {
            const p = await modelProducto.find({name: req.body.name}).exec();
            if (p.length>0) {
                return res.send({type: "error", message: "Producto existente"});
            }
            req.body.fecha=new Date(req.body.fecha);
            const producto = await modelProducto.create(req.body);
            return res.send({type:"success",message:"Información creada",producto:producto});
        }catch (e){
            return res.status(500).send({type:"error",message:e.message});
        }
    }
    async buscarProducto(req,res){
        try {
            const p = await modelProducto.findOne({_id: req.query._id}).exec();
            return res.send(p);
        }catch (e){
            return res.status(500).send({type:"error",message:"Id ingresado es incorrecto"});
        }
    }
    async actualizarProducto(req,res){
        try{
            const p=await modelProducto.updateOne({_id:req.body._id},{
                name:req.body.name,
                price:req.body.price,
                description:req.body.description,
                mail:req.body.mail,
                fecha:req.body.fecha,
            }).exec();
            if(p.modifiedCount>0){
                const producto=await modelProducto.findOne({_id:req.body._id});
                return res.send({type:"success",message:"Información actualizada",producto:producto});
            }
            return res.send({type:"info",message:"No se ha realizado ningún cambio"});
        }catch (e){
            return res.status(500).send({type:"error",message:"Id ingresado no es correcto"})
        }
    }
    async eliminarProducto(req,res){
        try{
            const result=await modelProducto.deleteOne({_id:req.query._id}).exec();
            if(result.deletedCount>0){
                return res.send({type:"success",message:"Producto eliminado"})
            }
            return res.send({type:"info",message:"No se eliminó ningún producto"})
        }catch (e){
            return res.status(500).send({type:"error",message:"Id ingreso no es correcto"})
        }
    }
}
module.exports=ProductoService