const pool = require("../config/index");
const bcrypt = require("bcrypt");

const getUsers = async (request, response) => {
    const result = await pool.query("SELECT * FROM usuarios");
    if (result) {
        response.status(200).json(result.rows);
    } else {
        response.status(404).json({
            message: "No hay usuarios en la base de datos",
        });
    }
};

const createUsers = async (request, response) => {
    const {
        id_tipo_usuario,
        email,
        nombre,
        direccion,
        telefono,
        whatsapp,
        password,
    } = request.body;

    const hash = bcrypt.hashSync(password, 10);

    const result = await pool.query(
        "INSERT INTO usuarios(id_tipo_usuario, email, nombre, direccion, telefono, whatsapp, password) VALUES ($1,$2,$3,$4,$5,$6,$7)",
        [id_tipo_usuario, email, nombre, direccion, telefono, whatsapp, hash],
        (err, res) => {
            if (err) {
                response.status(404).json({
                    error: err.detail,
                });
            } else {
                response.status(200).json({
                    message: "Usuario creado correctamente",
                    usuario: {
                        id_tipo_usuario,
                        email,
                        nombre,
                        direccion,
                        telefono,
                        whatsapp,
                    },
                });
            }
        }
    );
};

const deleteUserById = async (request, response) => {
    const id_usuario = request.params.codigo;
    const result = await pool.query(
        "DELETE FROM usuarios WHERE id_usuario = $1",
        [id_usuario],
        (err, res) => {
            if (res.rowCount == 0) {
                response.status(404).json({
                    error: "el id no existe",
                });
            } else {
                response.status(200).json({
                    message:
                        "Usuario con id: " +
                        id_usuario +
                        " eliminado correctamente",
                });
            }
        }
    );
};

module.exports = {
    getUsers,
    createUsers,
    deleteUserById,
};
