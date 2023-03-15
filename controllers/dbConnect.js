// eslint-disable-next-line import/no-extraneous-dependencies
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  port: '3306',
  database: 'myDB', // SCHEMA 명
});

connection.connect();

module.exports = connection;
