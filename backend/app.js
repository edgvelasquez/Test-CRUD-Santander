require("dotenv").config()
const express=require("express")
const cors=require("cors")
const connectDB=require("./src/config/mongo.config")
const helmet=require('helmet')
const bodyParser = require("body-parser")
const https = require('https')
const fs = require('fs')
const requestHandler=require("./src/handlers/request.handler")

if(process.env.NODE_ENV!=="dev") {
    console.log = function () {}
}

const options = {
    key: fs.readFileSync('./certificados/privkey.pem'),
    cert: fs.readFileSync('./certificados/cert.crt'),
    secureProtocol: "TLSv1_2_method",
    honorCipherOrder: true,
};

const app=express()
app.use(cors())
app.use(bodyParser.json({
    limit: "10mb",
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestHandler);
app.use(helmet())
app.use("/api",require("./src/routes/producto.route"))
app.use("/api",require("./src/routes/file.route"))

https.createServer(options, app).listen(process.env.PORT, function(){
    console.log("App express run port: "+process.env.PORT)
    connectDB();
});

process.on( 'uncaughtException', ( err )=> {
    console.log("uncaughtException__: "+err);
});
process.on('unhandledRejection',(reason,promise)=>{
    console.error('unhandledRejection__: ',promise,' razón:',reason);
});

module.exports=app