const cheerio = require('cheerio');
const http = require('http');

function getTitle(host, path, num, callback){
   var options = {
      host: host,
      port: 80,
      path: path+num,
      method:"GET",
      headers:{
          'accept': '*/*',
          'content-type': "application/json",
          // 'accept-encoding': 'gzip, deflate',
          'accept-language': 'en-US,en;q=0.9',
          'user-agent': 'client'
      }
  };
  var html = "";
  var title = [];
  var req = http.request(options,function(res){
      res.on('data', function (data){
          html += data;
      });
      res.on('end', function(){
          var $ = cheerio.load(html);
           $('.des').find('h2').each(function(i, elem){
               title.push($(this).find('a').text().trim());
           });
           callback(title);
      });
  }).on('error', function(e){
        callback(e);
      });
  req.end();
}
exports.getTitle = getTitle;
