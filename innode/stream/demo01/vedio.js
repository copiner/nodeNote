const http = require('http');
const fs = require('fs');
const moviePath = './movie.ogg';

http.createServer((req, res) => {
   fs.createReadStream(moviePath).pipe(res);
}).listen(3000);

// const http = require('http');
// const fs = require('fs');
// const oppressor = require(oppressor);
// http.createServer((req, res) => {
//    fs.createReadStream(moviePath)
//       .pipe(oppressor)  //对视频内容压缩流
//       .pipe(res);
// }).listen(8080);
