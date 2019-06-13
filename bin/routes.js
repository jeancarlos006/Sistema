const express = require("express");
const app = express();
const {controller} = require("./controller")

app.get("/",(req,res)=>{
    res.send("hola mundo!");
})

app.get("/users",(req,res)=>{
    controller.getUsers(res);
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

exports.app = app;