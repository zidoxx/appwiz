const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost/testing",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    },
    (err, res) => {
        if (err) throw err;
        console.log("Base de datos conectada");
    }
);

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/producto"));
app.use(require("./routes/usuario"));
app.use(require("./routes/login"));

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
