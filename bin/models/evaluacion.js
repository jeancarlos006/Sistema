    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const evaluacionSchema = new Schema ({
    nombre: String,
    nota: String,
    idcontenido:{ref: contenido, id:objectid},
    idUser:{ref: User,id:objectid}

    });

    var evaluacion=  mongoose.model("evaluacionSchema",evaluacionSchema);
    module.exports = evaluacion;
