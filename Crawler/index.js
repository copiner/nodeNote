const http = require('http');
const cheerio = require('cheerio');
const pager = require('./pager.js');
const title = require('./title.js');
const random = require('./random.js');
// http://bj.58.com/chuzu/

var host = "bj.58.com";
var path = "/chuzu/";

pager.getPageNum(host, path, getNum);
function getNum(num){
  var ran = random.GetRandomNum(0, num);
  var num = "pn"+ran+"/";
  console.log(num);
  title.getTitle(host, path, num, showTitle);
}
//title.getTitle(host, path, num, showTitle);
function showTitle(title){
  console.log(title.length);
}
