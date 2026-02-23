const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

// Create the connection pool
// The pool is more efficient for a server handling multiple requests
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// A wrapper to use promises instead of callbacks
const promisePool = pool.promise();

// Test the connection
promisePool.getConnection()
    .then(connection => {
        console.log('Database connected successfully.');
        connection.release();
    })
    .catch(err => {
        console.error('Database connection failed: ', err.message);
    });

module.exports = promisePool;
