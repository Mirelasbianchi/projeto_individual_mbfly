require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.LOCAL_DB_USER,
  password: process.env.LOCAL_DB_PASSWORD,
  host: process.env.LOCAL_DB_HOST || 'localhost',
  port: Number(process.env.LOCAL_DB_PORT) || 5432,
  database: process.env.LOCAL_DB_DATABASE,
  ssl: false,  // desativa SSL para conexão local
});

module.exports = pool;
