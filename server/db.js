var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "GroceryList"
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to database");
  }
});

module.exports = connection;
