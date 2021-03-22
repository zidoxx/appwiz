const express = require("express");
const app = express();

app.get("/productos", (req, res) => {
    res.send("Directo a productos");
});

module.exports = app;
