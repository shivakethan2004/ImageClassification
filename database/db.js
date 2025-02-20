const {Pool} = require('pg')
const pool = new Pool({
    user:'postgres',    
    host: 'localhost',           // Change if using a remote server
    database: 'FaceMatch',   // Change to your actual database name
    password: '1652904', // Use the password you set
    port: 5432,   
})
// async function createDatabase() {
//     try {
//       await pool.query('CREATE DATABASE "FaceMatch";');
//       console.log("Database 'FaceMatch' created successfully!");
//     } catch (err) {
//       console.error("Error creating database:", err);
//     }
//   }
//   createDatabase();
module.exports = pool;