const pool = require("../config/index");

const getCategories = async (request, response) => {
    try {
        const result = await pool.query("SELECT * FROM categorias");
        if (result) {
            response.status(200).json(result.rows);
        } else {
            response.status(404).json({
                error: "no hay datos",
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const createCategories = async (request, response) => {
    const { nombre } = request.body;
    try {
        const result = pool.query(
            "INSERT INTO categorias(nombre) VALUES ($1)",
            [nombre],
            (err, res) => {
                if (err) {
                    response.status(404).json({
                        message: err.detail,
                    });
                } else {
                    response.status(200).json({
                        message: "categoria creada correctamente",
                        categoria: {
                            nombre,
                        },
                    });
                }
            }
        );
    } catch (error) {
        console.error(err);
    }
};

module.exports = {
    getCategories,
    createCategories,
};
