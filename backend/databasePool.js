const { Pool } = require("pg");

const databaseConfiguration = require("./secrets/databaseConfiguration.js")

const pool = new Pool(databaseConfiguration);