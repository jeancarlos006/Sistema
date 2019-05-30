const express = require("express");
const app = express();
const controller = require("./controller")

app.get("/",(req,res)=>{
    res.send("hola mundo!");
})

app.get("/users",(req,res)=>{
    let users = [
    {name:"jean", password:"1234"},
    {name:"Ana", password:"jknbrk4"}
    ]
    res.send(users);

})

exports.app = app;