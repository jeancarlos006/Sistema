    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const contenidoSchema = new Schema ({
    descripcion: String,
    documento: String,
    videos:String,
    });

    var contenido=  mongoose.model("contenidoSchema",contenidoSchema);
    module.exports = contenido;
