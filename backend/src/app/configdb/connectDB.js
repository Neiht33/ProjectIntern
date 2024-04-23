const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CoverLetter',
  password: 'thienthien2',
  port: 5432
});

pool.connect(function (err, connection) {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database successfully');
    // Do something with the connection if needed
    connection.release(); // Always release the connection when done with it
});

module.exports = pool 