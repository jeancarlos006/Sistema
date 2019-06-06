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

exports.app = app;