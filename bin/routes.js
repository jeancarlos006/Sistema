const express = require("express");
const app = express();
const {controller} = require("./controller")

app.get("/",(req,res)=>{
    res.send("hola mundo!");
})

app.get("/users",(req,res)=>{

    controller.getUsers(res);
})

app.get("/evaluaciones",(req,res)=>{

    controller.getevaluaciones(res);
})

 app.post("/users",(req, res)=>{
     controller.postUsers(req, res)
 })

app.get("/evaluacion/:notaMayor",(req,res)=>{
    var notaMayor = req.params.notaMayor;
    console.log(notaMayor)
    res.send('ok')
    //controller.getUsers(res);
})

app.get("/evaluacion/:notaMayor_f/usuario/genero_f",(req,res)=>{
    var notaMayor_f = req.params.notaMayor_f;
    console.log(notaMayor_f)
    res.send('ok')
    //controller.getUsers(res);
})

app.get("/usuario/:genero_m",(req,res)=>{
    var genero_m = req.params.genero_m;
    console.log(genero_m)
    res.send('ok')
    //controller.getUsers(res);
})

app.get("/evaluacion/:notaMayor_m/usuario/:genero_m",(req,res)=>{
    var notaMayor_m = req.params.notaMayor_m;
    var genero_m = req.params.genero_m;
    console.log(notaMayor_m  ,genero_m)
    res.send('ok')
    //controller.getUsers(res);
})

app.get("/usuario/edad/:edadMayor",(req,res)=>{
    var edadMayor = req.params.edadMayor;
    console.log(edadMayor)
    res.send('ok')
    //controller.getUsers(res);
})

app.get("/usuario/genero/:genero_f/edad/:edadMenor",(req,res)=>{
    var genero_f = req.params.genero_f;
    var edadMenor = req.params.edadMenor;
    console.log(edadMenor, genero_f)
    res.send('ok')
    //controller.getUsers(res);
})

exports.app = app;