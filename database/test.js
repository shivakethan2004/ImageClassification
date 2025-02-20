const pool = require('./db');

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected to PostgreSQL:', res.rows[0]);
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

module.export =  testConnection;
