const productoService=require("../services/producto.service")
const productoServiceInstance=new productoService();
class ProductoController{
    listarProductos(req,res){
        return productoServiceInstance.listarProductos(req,res);
    }
    buscarProducto(req,res){
        return productoServiceInstance.buscarProducto(req,res);
    }
    crearProducto(req,res){
        return productoServiceInstance.crearProducto(req,res);
    }
    actualizarProducto(req,res){
        return productoServiceInstance.actualizarProducto(req,res);
    }
    eliminarProducto(req,res){
        return productoServiceInstance.eliminarProducto(req,res);
    }
}
module.exports=ProductoController