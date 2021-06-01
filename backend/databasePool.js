const { Pool } = require("pg");

const databaseConfiguration = require("./secrets/databaseConfiguration.js")

const pool = new Pool(databaseConfiguration);

module.exports = pool;

/** 
pool.query("SELECT * FROM generation ", (error, response) => {
    if(error) console.log("error", error);

    console.log("response.rows", response.rows);
})

**/