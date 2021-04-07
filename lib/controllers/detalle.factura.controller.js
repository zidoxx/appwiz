const pool = require("../config/index");

const getDetailBill = async (request, response) => {
    try {
        const result = await pool.query("SELECT * FROM detalle_factura");
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

const createDetailBill = async (request, response) => {
    try {
        const { id_factura, id_producto, cantidad, valor_total } = request.body;
        const result = await pool.query(
            "INSERT INTO detalle_factura (id_factura,id_producto,cantidad,valor_total) VALUES ($1,$2,$3,$4)",
            [id_factura, id_producto, cantidad, valor_total],
            (err, res) => {
                if (err) {
                    response.status(404).json({
                        error: err.detail,
                    });
                } else {
                    response.status(200).json({
                        message: "detalle factura creado correctamente",
                        detalle_factura: {
                            id_factura,
                            id_producto,
                            cantidad,
                            valor_total,
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
    getDetailBill,
    createDetailBill,
};
