var http = require('http');
var qs = require('querystring');

function send (theName) {
  var opt = {
      host : '127.0.0.1',
      port : 3000,
      url : '/',
      method : 'POST'
  }

  var req = http.request(opt, (res) =>{
      //console.log("res : " + res.statusCode);
      res.setEncoding('utf8');
      res.on('data',(data) => {
          console.log(data);
      }).on('end', () => {
          console.log('request complete');
      });
  }).on('error', (e)=> {
      console.log("error: " + e.message);
  })

  //写入数据，完成发送
  req.write(qs.stringify({name : theName}));
  req.end();
}

// function send (theName) {
//     http.request({
//         host : '127.0.0.1',
//         port : 3000,
//         url : '/',
//         method : 'POST'
//     }, function (res) {
//         var body = '';
//         res.setEncoding('utf-8');
//         res.on('data', function (chunk) {
//             body += chunk;
//         });
//         res.on('end', function () {
//             console.log('\n \033[90m request complete!\033[39m');
//             process.stdout.write('\n your name: ');
//         });
//     }).end(qs.stringify({name : theName}));
// }

process.stdout.write('\n your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function (data) {
    send(data);
});
