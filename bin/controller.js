const mongoose = require("mongoose");

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
}

exports.controller = new controller()