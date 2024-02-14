const {check} =require("express-validator")
const validator=require("../../utils/producto.validator.util")

const productoValidator=[
    check("name").trim().toUpperCase().exists().withMessage("No se encuentra en campo name").notEmpty().withMessage("Ingrese name").isString(),
    check("price").trim().toUpperCase().exists().withMessage("No se encuentra en campo price").notEmpty().withMessage("Ingrese price").isNumeric(),
    check("description").trim().toUpperCase().exists().withMessage("No se encuentra en campo description").notEmpty().withMessage("Ingrese description").isString(),
    check("mail").trim().toUpperCase().exists().withMessage("No se encuentra en campo mail").notEmpty().withMessage("Ingrese mail").isEmail().withMessage("Mail incorrecto"),
    check("fecha").trim().exists().withMessage("No se encuentra en campo fecha").notEmpty().withMessage("Ingrese fecha").toDate().withMessage("Fecha incorrecta"),
    (req,res,next)=>{
        return validator(req,res,next);
    }
]
module.exports={productoValidator}