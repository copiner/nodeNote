var mysql = require("mysql");
var dbase = {};
dbase.manipulate = function sqlback(sqllan, func){
  var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'francis',
    database:'copiner',
    port:3306
  });

  connection.connect(function(err){
    if(err){
      console.log(err);
      return;
    }
  });

  connection.query(sqllan, function(err, result, fields){
    if(err){
      console.log(err);
      return;
    }
    func(result);
  });

  connection.end(function(err){
    if(err){
      return;
    } else {
      console.log('connection close');
    }
  });
}

module.exports = dbase;
