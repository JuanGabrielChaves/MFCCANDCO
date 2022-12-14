const mysql = require('mysql');

const connection = mysql.createConnection({
    host : process.env.DB-HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(function(err){
    if(err) {throw err}
});

module.exports = connection;