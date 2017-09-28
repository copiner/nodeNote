var express = require('express');
var router = express.Router();
//var crypto = require('crypto');
var fetch = require('node-fetch');
const func = require('./func.js');
const httpget = require('./get.js');

var appid= "ffe174e0-9ba9-4586-92c4-6976384c32b7";
var appkey = "fbfbd738-9464-4784-b621-be51f250cf7c";

var uuike = func.uuid();
//console.log(uuike);
var unikey = "01001210" + uuike.substring(9);
var timestamp = func.format();
var auth = func.MD5(appid+appkey+timestamp);//自己封装MD5方法
//var md5 = crypto.createHash("md5");//crypto模块MD5
//md5.update(appid+appkey+timestamp);
//console.log(md5.digest('hex'));
//console.log(auth);

var url = "/getnum"+"?appid="+appid+"&timestamp="+timestamp+"&auth="+auth+"&unikey="+unikey;

//httpget.httpget(url, back);
function back(data){
  console.log(data);
}
// crypto.cipher()
// crypto.des()
var option = {
  appid : appid,
  auth : auth,
  timestamp : timestamp,
  unikey : unikey
}

// fetch(url).then(function(res){
//       return res.json();
//     }).then(function(json){
//       console.log(json);
//     }).catch(function(err){
//         console.log(err);
//     });

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
