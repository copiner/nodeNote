var express = require('express');
var mysql = require('../dbase.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  var sqllan = "update infos set sex=0 where name='francis'"
  mysql.manipulate(sqllan, function(result){
    console.log(result);
  })
});


module.exports = router;
