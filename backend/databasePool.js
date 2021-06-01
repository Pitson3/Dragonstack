const { Pool } = require("pg");

const pool = new Pool({
    user : "node_user",
    host : "localhost",
    database : "dragonstackdb",
    password : "node_password",
    port : 5432
});