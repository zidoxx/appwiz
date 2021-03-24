const mongoose = require("mongoose");
const uniqueValitor = require("mongoose-unique-validator");

let rolesValidos = {
    values: ["ADMIN_ROLE", "USER_ROLE"],
    message: "{VALUE} no es un rol válido",
};

let Schema = mongoose.Schema;

let usersSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es necesario"],
    },
    email: {
        type: String,
        required: [true, " El correo es necesario"],
    },
    password: {
        type: String,
        required: [true, "la constraseña es obligatoria"],
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: rolesValidos,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

usersSchema.plugin(uniqueValitor, {
    message: "{PATH} debe ser único",
});

module.exports = mongoose.model("usuario", usersSchema);
