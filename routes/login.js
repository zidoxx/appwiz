const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
    res.json({
        mensaje: "nodeJs and JWT",
    });
});

app.post("/api/login", (req, res) => {
    const user = {
        id: 1,
        test: "esteban",
        email: "estebancastriver@gmail.com",
    };

    jwt.sign({ user }, "secretkey", (err, token) => {
        res.json({
            token,
        });
    });
});

app.post("/api/posts", verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if (err) {
            res.status(403).json({
                error: "No encontrado",
            });
        } else {
            res.json({
                mensaje: "Creado correctamente",
                authData,
            });
        }
    });
});
// Autorization: Bearer <token>
function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
    } else {
        res.status(403).json({
            err: "no encontrado",
        });
    }
}

module.exports = app;
