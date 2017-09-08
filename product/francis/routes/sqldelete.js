var express = require('express');
var mysql = require('../dbase.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  var sqllan = "delete from infos where name='cookie'"
  mysql.manipulate(sqllan, function(result){
    console.log(result);
  })
});

module.exports = router;
