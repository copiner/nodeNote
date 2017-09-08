var express = require('express');
var mysql = require('../dbase.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  var sqllan = "insert into infos (name, age, sex, height) values('cookie', 19, 1, 168)";
  mysql.manipulate(sqllan, function(result){
    console.log(result);
  })
});


module.exports = router;
