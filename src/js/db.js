"use strict";

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "mrfletgg2009",
  host: "localhost",
  port: 5432,
  database: "pupsiki",
});

module.exports = pool;
