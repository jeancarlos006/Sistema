const mongoose = require("mongoose");
const User = require("./models/User");
const Evaluacion = require("./models/Evaluacion");
const Actividad = require("./models/Actividad");
const Contenido = require("./models/Contenido");

class controller {
    constructor() {
        this.connect();
    }
    async connect() {

        try {
            await mongoose.connect(
                "mongodb+srv://jeancarlos006:jeancarlos16fcb.@cluster0-wzhie.mongodb.net/SISTEMA?retryWrites=true&w=majority",
                { useNewUrlParser: true }
            );
            console.log('conectados a la base de datos!')
        } catch (e) {
            console.error(e)
        }
    }
    getUsers(res) {
        User.find({}, (err, users) => {
            if (err) throw err;
            res.send(users);
        })
    }

    getevaluaciones(res) {
        evaluacion.find({}, (err, evaluaciones) => {
            if (err) throw err;
            res.send(evaluaciones);
        })
    }

    getactividades(res) {
        Actividad.find({}, (err, actividades) => {
            if (err) throw err;
            res.send(actividades);
        })
    }

    getcontenidos(res) {
        Contenido.find({}, (err, contenidos) => {
            if (err) throw err;
            res.send(contenidos);
        })
    }
    postUsers(req, res) {
        let user = req.boddy.users;
        User.create(user, (err, newUser) => {
            if (err) throw err;
            res.send({ nU: newUser })
        })
    }

    postContenido(req, res) {
        //let user = req.boddy.users;
        let contenido = { descripcion: 'Des', documento: 'doc', video: 'vid' }
        Contenido.create(contenido, (err, newUser) => {
            if (err) throw err;
            res.send({ nU: newUser })
        })
    }

    postEvaluacion(req, res) {
        //let user = req.boddy.users;
        let evaluacion = {
            Nombre: 'pedro', Nota: '4.2',
            Nombre: 'Maria', Nota: '3.8'
        }
        Evaluacion.create(evaluacion, (err, newUser) => {
            if (err) throw err;
            res.send({ nU: newUser })
        })
    }

    postActividad(req, res) {
        //let user = req.boddy.users;
        let actividad = { nombre: 'Des', propiedades: 'doc' }
        Actividad.create(actividad, (err, newUser) => {
            if (err) throw err;
            res.send({ nU: newUser })
        })
    }
}


exports.controller = new controller()