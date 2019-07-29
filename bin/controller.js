const mongoose = require("mongoose");
const User = require("./models/User");
const evaluacion = require("./models/evaluacion");
const actividad = require("./models/actividad");
const contenido = require("./models/contenido");

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
    console.log('conectados a la base de datos!')
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

    getevaluaciones (res){
        evaluacion.find({},(err,evaluaciones)=>{
            if(err) throw err;
            res.send(evaluaciones);
        })
    }

    getactividades (res){
        actividad.find({},(err,actividades)=>{
            if(err) throw err;
            res.send(actividades);
        })
    }

 getcontenidos (res){
        contenido.find({},(err,contenidos)=>{
            if(err) throw err;
            res.send(contenidos);
        })
    }
    postUsers(req, res){
        let user = req.boddy.users;
        User.create(user,(err, newUser)=>{
            if(err) throw err;
            res.send({nU:newUser})
        })
    }

    }

    exports.controller = new controller()