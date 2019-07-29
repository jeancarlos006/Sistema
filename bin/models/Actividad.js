const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actividadSchema = new Schema({
    nombre: String,
    propiedades: String,
    videos: String,
});

var Actividad = mongoose.model("actividad", actividadSchema);
module.exports = Actividad;
