const pool = require("../config/index");

const getProducts = async (request, response) => {
    try {
        const result = await pool.query("SELECT * FROM productos");
        if (result) {
            response.status(200).json(result.rows);
        } else {
            response.status(404).json({
                message: "no hay datos",
            });
        }
    } catch (error) {
        console.error(error);
    }
};

const createProducts = async (request, response) => {
    try {
        const {
            id_restaurante,
            nombre,
            imagen,
            descripcion,
            precio,
        } = request.body;
        const result = await pool.query(
            "INSERT INTO productos (id_restaurante, nombre, imagen, descripcion, precio) VALUES ($1,$2,$3,$4,$5)",
            [id_restaurante, nombre, imagen, descripcion, precio],
            (err, res) => {
                if (err) {
                    response.status(404).json({
                        error: err.detail,
                    });
                } else {
                    response.status(200).json({
                        message: "Producto creado correctamente",
                        producto: {
                            id_restaurante,
                            nombre,
                            imagen,
                            descripcion,
                            precio,
                        },
                    });
                }
            }
        );
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    getProducts,
    createProducts,
};
