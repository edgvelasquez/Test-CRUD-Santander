const request=require("supertest")
const app =require("../../app")

describe("CRUD test productos",()=>{
    test("listarProductos",async () => {
        const response = await request(app).get("/api/products/listarProductos").send();
        expect(response.statusCode).toEqual(200);
    });
    test("buscarProducto con id correcto",async () => {
        const response = await request(app).get("/api/products/buscarProducto?_id=65cbe1c201b8eeaddbc899b7");
        expect(response.statusCode).toEqual(200);
    });
    test("buscarProducto con id incorrecto",async () => {
        const response = await request(app).get("/api/products/buscarProducto?_id=65cbe1c201b8eeaddbc899b");
        expect(response.statusCode).toEqual(500);
    });
    test("crearProducto que ya se encuentra en sistema",async () => {
        const response = await request(app).post("/api/products/crearProducto").send({
            "name":"Fideos",
            "price":1500,
            "description":"Tallarines número 77",
            "mail":"tallarin_@gmail.com",
            "fecha":"2024-02-11"
        });
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty("type","error");
    });
    test("crearProducto con paramentros en blanco",async () => {
        const response = await request(app).post("/api/products/crearProducto").send({
            "name":"",
            "price":"",
            "description":"",
            "mail":"",
            "fecha":""
        });
        expect(response.statusCode).toEqual(403);
        expect(response.body).toHaveProperty("type","error");
    });
    test("crearProducto no enviando parametros",async () => {
        const response = await request(app).post("/api/products/crearProducto").send({
        });
        expect(response.statusCode).toEqual(403);
        expect(response.body).toHaveProperty("type","error");
    });
    test("actualizarProducto existente",async () => {
        const response = await request(app).put("/api/products/actualizarProducto").send({
            "_id": "65cbe1c201b8eeaddbc899b7",
            "name": "FIDEOS",
            "price": 1500,
            "description": "TALLARINES NÚMERO 5",
            "mail": "TALLARIN@GMAIL.COM",
            "fecha": "2024-02-11",
        });
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty("type");
    });
    test("actualizarProducto no existente",async () => {
        const response = await request(app).put("/api/products/actualizarProducto").send({
            "_id": "65cbe1c201b8eeaddbc899b",
            "name": "FIDEOS",
            "price": 1500,
            "description": "TALLARINES NÚMERO 5",
            "mail": "TALLARIN@GMAIL.COM",
            "fecha": "2024-02-11",
        });
        expect(response.statusCode).toEqual(500);
        expect(response.body).toHaveProperty("type","error");
    });
    test("eliminarProducto con id incorrecto",async () => {
        const response = await request(app).delete("/api/products/eliminarProducto?_id=65cbe1c201b8eeac899b");
        expect(response.statusCode).toEqual(500);
        expect(response.body).toHaveProperty("type","error");
    });
});