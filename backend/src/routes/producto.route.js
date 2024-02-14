const express=require("express")
const router=express.Router()
const productoController=require("../controllers/producto.controller")
const productoControllerInstance=new productoController();
const {productoValidator}=require("../models/validators/producto.validator")
const verifyRequest=require("../middlewares/producto.middleware")

router.get("/products/listarProductos",productoControllerInstance.listarProductos)
router.get("/products/buscarProducto",productoControllerInstance.buscarProducto)
router.post("/products/crearProducto",productoValidator,productoControllerInstance.crearProducto)
router.put("/products/actualizarProducto",productoValidator,productoControllerInstance.actualizarProducto)
router.delete("/products/eliminarProducto",productoControllerInstance.eliminarProducto)

module.exports=router