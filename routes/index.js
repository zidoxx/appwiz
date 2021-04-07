const { Router } = require("express");
const router = Router();
const middleware = require("../lib/middlewares/auth");

const {
    getTypeUser,
    createTypeUser,
} = require("../lib/controllers/tipo_usuario.controller");

const {
    getUsers,
    createUsers,
    deleteUserById,
} = require("../lib/controllers/usuarios.controller");

const {
    getCategories,
    createCategories,
} = require("../lib/controllers/categorias.controller");

const {
    getRestaurants,
    createRestaurants,
} = require("../lib/controllers/restaurantes.controller");

const {
    getBills,
    createBills,
} = require("../lib/controllers/facturas.controller");

const {
    getProducts,
    createProducts,
} = require("../lib/controllers/productos.controller");

const {
    getDetailBill,
    createDetailBill,
} = require("../lib/controllers/detalle.factura.controller");

router.get("/admin", middleware, (req, res) => {
    res.redirect("/admin.html");
});

router.get("/typeusers", getTypeUser);
router.post("/typeusers", createTypeUser);

router.get("/users", getUsers);
router.post("/users", createUsers);
router.delete("/users/:codigo", deleteUserById);

router.get("/categories", getCategories);
router.post("/categories", createCategories);

router.get("/restaurants", getRestaurants);
router.post("/restaurants", createRestaurants);

router.get("/bills", getBills);
router.post("/bills", createBills);

router.get("/products", getProducts);
router.post("/products", createProducts);

router.get("/detailsbill", getDetailBill);
router.post("/detailsbill", createDetailBill);

module.exports = router;
