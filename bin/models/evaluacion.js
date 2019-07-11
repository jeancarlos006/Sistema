    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const evaluacionSchema = new Schema ({
    nombre: String,
    nota: String,

    });

    var evaluacion=  mongoose.model("evaluacionSchema",evaluacionSchema);
    module.exports = evaluacion;
