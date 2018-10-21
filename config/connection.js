const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection =
    mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'AZ8GwyF3?', // Add your password
      database: 'burgers_db' // Add your database
    });
}

module.exports = connection;