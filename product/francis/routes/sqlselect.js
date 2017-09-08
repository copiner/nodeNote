var express = require('express');
var mysql = require('../dbase.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  var sqllan = 'select * from infos';
  mysql.manipulate(sqllan, function(result){
    console.log(result[0].name);
    res.render('index', { title: result[0].name});
  })
});

module.exports = router;
