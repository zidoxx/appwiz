const pool = require("../config/index");

const getTypeUser = async (request, response) => {
    const result = await pool.query("SELECT * FROM tipo_usuarios");
    if (result) {
        response.status(200).json(result.rows);
    } else {
        response.send("No hay datos en la base de datos");
    }
};

const createTypeUser = async (request, response) => {
    const { id_tipo_usuario, nombre } = request.body;
    const result = await pool.query(
        "INSERT INTO tipo_usuarios (id_tipo_usuario, nombre) VALUES($1, $2)",
        [id_tipo_usuario, nombre],
        (err, res) => {
            if (err) {
                response.status(404).json({
                    error: err.detail,
                });
            } else {
                response.status(200).json({
                    message: "tipo usuario creado correctamente",
                    body: {
                        tipo_usuario: {
                            id_tipo_usuario,
                            nombre,
                        },
                    },
                });
            }
        }
    );
};

module.exports = {
    getTypeUser,
    createTypeUser,
};
