const mysql = require('mysql');

const connection = 
    mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'AZ8GwyF3?', // Add your password
    database : 'burgers_db' // Add your database
  });

  module.exports = connection;