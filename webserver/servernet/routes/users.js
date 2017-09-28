var express = require('express');
var router = express.Router();
var cryp = require('./crypto.js');
var qs = require('express');
const httpget = require('./get.js');

// const decipher = crypto.createDecipher('des-ede3', 'abcdefgh00000000abcdefgh');
// const encrypted ='%09t%16d%0F%EF%BF%BD%07%EF%BF%BD5D%EF%BF%BD%5D%600%EF%BF%BD%03';
// var  decrypted = decipher.update(encrypted, 'hex', 'utf8');
// decrypted += decipher.final('utf8');
// console.log(decrypted);

//var usersdata = {key: '23', name: 'calvin'};
/* GET users listing. */
router.get('/', function(req, res, next){
  res.render('users');
});
//key : abcdefgh00000000abcdefgh
//
router.get('/phone', function(req, res, next){
  var appid = req.query.appid;
  var timestamp = req.query.timestamp;
  var auth = req.query.auth;
  var unikey = req.query.unikey;
  if(req.query.callback){
    var callback = req.query.callback;
  }
  var url = "/getnum?appid="+appid+"&timestamp="+timestamp+"&auth="+auth+"&unikey="+unikey;
  console.log(url);
  httpget.httpget(url, back);
  var resda = '';
  function back(data){
    console.log(data);
    var data = JSON.parse(data);
    if(data.phone){
      var phone = data.phone;
      var deciph = {
          alg: 'des-ede3',    //3des-ecb
          autoPad: true,
          key: 'abcdefgh00000000abcdefgh',
          plaintext: phone,
          iv: null
      }
      var deciphtxt = cryp.decrypt(deciph);
      data.phone = deciphtxt;
    }
    if(callback){
      resda =  callback + '(' + JSON.stringify(data) + ')';
    } else {
      resda = JSON.stringify(data);
    }
    console.log(resda);
    res.send(resda);
  }
});

// router.post('/', function(req, res, next){
//   var appid = req.body.appid;
//   var timestamp = req.body.timestamp;
//   var unikey = req.body.unikey;
//   var auth = req.body.auth;
//   var url = "/getnum"+"?appid="+appid+"&timestamp="+timestamp+"&auth="+auth+"&unikey="+unikey;
//   console.log(url);
//   httpget.httpget(url, back);
//   function back(data){
//     console.log(data);
//     res.send(data);
//   }
// });

module.exports = router;
