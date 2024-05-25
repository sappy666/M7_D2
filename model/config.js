import pg from "pg";
const { Pool } = pg;

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: 5432,
  allowExitOnIdle: true,
};

const pool = new Pool(config);

export default pool;
