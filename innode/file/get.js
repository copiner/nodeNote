var HTTP = require('http');
var APIGET = function (url, callback) {
  var op = {
    host: "127.0.0.1",
    port: "3000",
    method:'GET',
    path:url,
    headers:{
        'accept': '*/*',
        'content-type': "application/json",
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US,en;q=0.9',
        'user-agent': 'nodejs rest client'
    }
  };
  var req = HTTP.request(op, function(res) {
    var recvData = "";
    res.on('data', function(chunk) {
      recvData += chunk;
    });
    res.on('end', function() {
      if (callback) {
        console.log("endend");
        callback(null, recvData);
      }
    });
  });
  req.on('error', function (e) {
    if (callback) {
      console.log("errorerror");
      callback(e, null);
    }
  });
  req.end();
};

exports.APIGET = APIGET;
