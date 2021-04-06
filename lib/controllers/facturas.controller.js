const pool = require("../config/index");

const getBills = async (request, response) => {
    try {
        const result = await pool.query("SELECT * FROM facturas");
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

const createBills = async (request, response) => {
    const { id_restaurante, id_usuario, fecha_factura } = request.body;
    try {
        const result = await pool.query(
            "INSERT INTO facturas(id_restaurante, id_usuario, fecha_factura) VALUES($1,$2,$3)",
            [id_restaurante, id_usuario, fecha_factura],
            (err, res) => {
                if (err) {
                    response.status(404).json({
                        error: err.detail,
                    });
                } else {
                    response.status(200).json({
                        message: "factura creada correctamente",
                        factura: {
                            id_restaurante,
                            id_usuario,
                            fecha_factura,
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
    getBills,
    createBills,
};
