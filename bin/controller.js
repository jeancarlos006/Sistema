const mongoose = require("mongoose");

class controller{
    constructor (){
        this.connect();
}
async connect(){

try{
await mongoose.connect(
    "mongodb+srv://JoelNaranjo:joel123456789@cluster0-axepn.mongodb.net/mySistemPlanet?retryWrites=true&w=majority",
    {useNewUrlParser:true}
);
console.log("conectados a la base de datos!")
}catch(e){
    console.error(e)
}
}
}

exports.controller = new controller()