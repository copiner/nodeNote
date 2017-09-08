var http = require('http');

var httpget = function (url, callback) {
  var opt = {
    host: "127.0.0.1",
    port: "3000",
    method:'GET',
    path: url,
    headers:{
        'accept': '*/*',
        'content-type': "application/json",
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US,en;q=0.9',
        'user-agent': 'client'
    }
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

var appid = "0123456789abcdef";
var timestamp = "201708061110";
var url = "/users/get"+"?appid="+appid+"&timestamp="+timestamp;
//httpget("/users/get?id=12", callback);
httpget(url, callback);
function callback(str){
  console.log(str);
}
