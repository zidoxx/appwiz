const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
