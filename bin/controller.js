const mongoose = require("mongoose");
const User = require("./models/User");

class controller{
    constructor (){
        this.connect();
}
async connect(){

try{
await mongoose.connect(
    "mongodb+srv://jeancarlos006:jeancarlos16fcb.@cluster0-wzhie.mongodb.net/SISTEMA?retryWrites=true&w=majority",
    {useNewUrlParser:true}
);
console.log("conectados a la base de datos!")
}catch(e){
    console.error(e)
}
}
getUsers (res){
    User.find({},(err,users)=>{
        if(err) throw err;
        res.send(users);
    })
}
}

exports.controller = new controller()