const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionSchema = new Schema({
    nombre: String,
    nota: String

});

var Evaluacion = mongoose.model("Evaluaciones", EvaluacionSchema);
module.exports = Evaluacion;
