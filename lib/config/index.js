const { Pool } = require("pg");

require("dotenv").config();

// const connectionString = process.env.DATABASE_URL;
const connectionString = DATABASE_URL;

// const pool = new Pool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     port: process.env.PORT,
//     ssl: true,
//     dialect: "postgres",
//     dialectOptions: {
//         ssl: { require: true },
//     },
// });

const pool = new Pool({
    connectionString,
});

module.exports = pool;
