const { Router } = require("express");
const router = Router();

const { getTypeUser } = require("../lib/controllers/tipo_usuario.controller");

router.get("/typeusers", getTypeUser);
