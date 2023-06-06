const mysql = require('mysql');

exports.db = mysql.createPool({
    database : 'maria_turbantes',
    user : 'root',
    password : '',
    host : 'localhost',
    port : 3306
});

