const pool = require("../config/index");

const getRestaurants = async (request, response) => {
    try {
        const result = await pool.query("SELECT * FROM restaurantes");
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

const createRestaurants = async (request, response) => {
    const {
        id_categoria,
        nombre,
        direccion,
        imagen,
        valor_domicilio,
    } = request.body;
    try {
        const result = await pool.query(
            "INSERT INTO restaurantes(id_categoria, nombre, direccion, imagen, valor_domicilio) VALUES ($1,$2,$3,$4,$5)",
            [id_categoria, nombre, direccion, imagen, valor_domicilio],
            (err, res) => {
                if (err) {
                    response.status(404).json({
                        message: err.detail,
                    });
                } else {
                    response.status(200).json({
                        message: "restaurante creado correctamente",
                        restaurante: {
                            id_categoria,
                            nombre,
                            direccion,
                            imagen,
                            valor_domicilio,
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
    getRestaurants,
    createRestaurants,
};
