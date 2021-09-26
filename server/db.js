const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  possword: process.env.DBPW,
  host: "localhost",
  port: 5432,
  database: "apptracker",
});

module.exports = pool;
