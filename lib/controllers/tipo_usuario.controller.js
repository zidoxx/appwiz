const pool = require("../config/index");

const getTypeUser = async (req, res) => {
    const response = await pool.query("SELECT * FROM tipo_usuario");
    if (response) {
        res.status(200).json(response.rows);
    } else {
        res.send("No hay datos en la base de datos");
    }
};

module.exports = {
    getTypeUser,
};
