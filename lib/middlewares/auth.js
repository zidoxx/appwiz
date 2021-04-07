require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(404);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, state) => {
        if (err) return res.sendStatus(403);
        res.json(state);
        next();
    });
};

module.exports = authenticate;
