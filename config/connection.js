// Set up MySQL connection
const mysql = require("mysql");
const dbConfig = require("./db.config.js");
let connection;

// build connection to JAWSDB for Heroku
// if (process.env.JAWSDB_URL){
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
//   } else {
    connection = mysql.createPool({
      host: dbConfig.HOST,
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      database: dbConfig.DB
    });
  
  // }

// make connection
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;