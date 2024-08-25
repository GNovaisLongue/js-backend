const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

// const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.POSTGRES_DB}?schema=${process.env.DB_SCHEMA}`;

// const db = new pg.Pool(connectionString);
let pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});

module.exports = { pool };
