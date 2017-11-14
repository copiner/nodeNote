var fs = require('fs');
var url = require("url");
var http = require('http').createServer(function(req, res){

if(req.url != "/favicon.ico"){
     var pathname = url.parse(req.url).pathname;
     if(pathname == "/"){
          res.writeHead(200, {'Content-Type': 'video/mpg'});
          var rs = fs.createReadStream('./han.mpg');

          rs.pipe(res);

          rs.on('end',function(){
            res.end();
            console.log('end call');
          });
     }
 }

}).listen(3000);

http.on('error',function(err){
  console.log('err');
});
