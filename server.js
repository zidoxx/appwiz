require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(require("./routes/index"));

app.post("/register", (request, response) => {
    //Authenticate User
    const email = request.body.email;
    const password = request.body.password;
    const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
    response.json({
        accessToken,
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
