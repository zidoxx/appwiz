const express = require("express");
const app = express();

app.get("/producto", (req, res) => {
    res.send("Directo a productos");
});

module.exports = app;
