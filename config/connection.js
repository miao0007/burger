// Set up MySQL connection
const mysql = require("mysql");
let connection;

// build connection to JAWSDB for Heroku
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "huanXI861109",
      database: "burgers_db"
    });
  
  }

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