var fs = require('fs');
var request = require('request');

request('http://www.baidu.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body);//baidu 首页html
  }
});
//request('https://www.baidu.com/img/bd_logo1.png').pipe(fs.createWriteStream('baidu.png'));
//fs.createReadStream('./file.json').pipe(request.put('http://127.0.0.1:3000/file/file.json'));
request.get('https://www.baidu.com/img/bd_logo1.png').pipe(request.put('http://127.0.0.1:3000/images/img.png'));
