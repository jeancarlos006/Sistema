    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const contenidoSchema = new Schema ({
    descripcion: String,
    documento: String,
    videos:String,
    idactividad:{ref: actividad, id:objectid},
    idevaluacion:{ref: evaluacion, id:objectid}
    });

    var contenido=  mongoose.model("contenidoSchema",contenidoSchema);
    module.exports = contenido;
