const mysql = require('mysql'); // mysql사용
//db정보
const dbConnection = mysql.createPool(
    {
    host: process.env.DATABASE_IP,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_DB,
    dateStrings:'date'
    }
); 

module.exports = dbConnection