        const mongoose = require("mongoose");
        const Schema = mongoose.Schema;

        const actividadSchema = new Schema ({
         nombre: String,
        propiedades: String,
        videos:String,
        });

        var actividad=  mongoose.model("actividadSchema",actividadSchema);
        module.exports = actividad;
