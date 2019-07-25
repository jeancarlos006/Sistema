const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
 nombre: String,
 apellido: String,
 edad: String,
 genero:String,
 correo:String,
 contraseña:String,
//* idcontenido:{ref:contenido,id:objectid}
});

var User=  mongoose.model("User",UserSchema);
module.exports = User;
