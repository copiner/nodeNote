var http = require('http')
var fs = require('fs')
function getVedio(){
  var options = {
      host:'localhost',
      port:'3000',
      path:'/',
      method:'GET'
  }

  var writeStream = fs.createWriteStream('file.mpg')

  var req = http.request(options, function(res){
      console.log('STATUS' + res.statusCode)

      res.on('data', function(chunk){
          writeStream.write(chunk);
      })

      res.on('end', function(){
          writeStream.end();
          console.log('writeStream end');
      })
  })

  req.end();
}


http.createServer(function(req, res){
  getVedio();
  var datas = fs.readFileSync("./ve.html","utf-8");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(datas);
  res.end(" ");
}).listen(8080);
