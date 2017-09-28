const cheerio = require('cheerio');
const http = require('http');
//const $ = cheerio.load('<ul id="fruits">...</ul>');
function getPageNum(host, path, callback){
  var options = {
  host: host,
  port: 80,
  path: path,
  method:"GET",
  headers:{
      'accept': '*/*',
      'content-type': "application/json; charset=UTF-8",
      // 'accept-encoding': 'gzip, deflate',
      'accept-language': 'zh-CN,zh;q=0.8,en;q=0.6',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36'
  }
  };
  var html = "";
  var req = http.request(options, function(res){
    res.on('data', function(data){
      html += data;
    });
    res.on('end', function(){
      var $ = cheerio.load(html);
      var pagenum = $('.pager').find('a').length;
      var num = $('.pager').find('a').eq(pagenum-2).find("span").text();
      callback(num);
    });
  }).on('error', function (e) {
    callback(e);
  });
  req.end();
}
exports.getPageNum = getPageNum;
