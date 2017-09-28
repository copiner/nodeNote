const http = require('http');
var httpget = function (url, callback) {
  var opt = {
    host: "127.0.0.1",
    port: "8090",
    method:'GET',
    path: url
    // headers:{
    //     'accept': '*/*',
    //     'content-type': "application/json",
    //     'accept-encoding': 'gzip, deflate',
    //     'x-forwarded-for': '124.160.212.17',
    //     'accept-language': 'en-US,en;q=0.9',
    //     'user-agent': 'client',
    //
    // }
  };
  var req = http.request(opt, function(res){
    //var resdata = "";
    res.setEncoding('utf8');
    res.on('data', function(data){
      //resdata += chunk;
      callback(data);
    });
    res.on('end', function() {
      console.log("No more data in response");
    });
  });
  req.on('error', function (e) {
    console.log("error: " + e.message);
  });
  req.end();
};
exports.httpget = httpget
