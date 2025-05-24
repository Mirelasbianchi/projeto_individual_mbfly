const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const env = process.env.CURRENT_ENV;

const dbConfig = {
  local: {
    user: process.env.LOCAL_DB_USER,
    host: process.env.LOCAL_DB_HOST,
    database: process.env.LOCAL_DB_DATABASE,
    password: process.env.LOCAL_DB_PASSWORD,
    port: process.env.LOCAL_DB_PORT,
  },
};

const pool = new Pool(dbConfig[env]);

const runSQLScript = async () => {
  const filePath = path.join(__dirname, 'init.sql');
  const sql = fs.readFileSync(filePath, 'utf8');

  try {
    await pool.query(sql);
    console.log('✅ Script SQL executado com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao executar o script SQL:', err);
  } finally {
    await pool.end();
  }
};

runSQLScript();
