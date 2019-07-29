const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contenidoSchema = new Schema({
    descripcion: String,
    documento: String,
    videos: String,
});

var Contenido = mongoose.model("contenido", contenidoSchema);
module.exports = Contenido;
