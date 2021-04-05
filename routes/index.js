const { Router } = require("express");
const router = Router();

const {
    getTypeUser,
    createTypeUser,
} = require("../lib/controllers/tipo_usuario.controller");

const {
    getUsers,
    createUsers,
    deleteUserById,
} = require("../lib/controllers/usuarios.controller");

router.get("/typeusers", getTypeUser);
router.post("/typeusers", createTypeUser);
router.delete("/users/:codigo", deleteUserById);

router.get("/users", getUsers);
router.post("/users", createUsers);

module.exports = router;
