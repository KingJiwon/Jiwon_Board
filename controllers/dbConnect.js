// eslint-disable-next-line import/no-extraneous-dependencies
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: '3306',
  database: process.env.MYSQL_DB, // SCHEMA 명
});

connection.connect();

module.exports = connection;
