const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({
 nickname: String,
 password: String,
 picture: String,
});

var usuario=  mongoose.model("usuarioSchema",UserSchema);
module.exports = usuario;
