var express = require('express');
var router = express.Router();

var usersdata = {key: '23', name: 'calvin'};
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'users' });
});

/* GET about clientget.js */
router.get('/get', function(req, res, next) {
  console.log(req.query.appid);
  console.log(req.query.timestamp);
  res.send(JSON.stringify(usersdata));
});

/* POST about clientpost.js*/
router.post('/post', function(req, res, next) {
  console.log(req.body);
  res.send(JSON.stringify(usersdata));
});

module.exports = router;
