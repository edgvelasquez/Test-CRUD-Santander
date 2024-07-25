const express=require("express")
const router=express.Router()
const fileController=require("../controllers/file.controller")
const fileControllerInstance=new fileController();

router.get("/files/readFile",fileControllerInstance.readFile)

module.exports=router