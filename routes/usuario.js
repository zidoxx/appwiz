const express = require("express");
const User = require("../models/usuarios");
const app = express();

app.post("/user", (req, res) => {
    let body = req.body;
    let user = new User({
        name: body.name,
        email: body.email,
        password: body.password,
        role: body.role,
        active: body.active,
    });
    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err,
            });
        }
        res.json({
            ok: true,
            usuario: userDB,
        });
    });
});

module.exports = app;
