const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "ILikeDogs",
  host: "localhost",
  port: 5432,
  database: "apptracker",
});

module.exports = pool;
