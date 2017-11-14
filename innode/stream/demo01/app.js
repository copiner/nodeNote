const http = require('http');
const fs = require('fs');
const moviePath = './vedio.wmv';

http.createServer((req, res) => {
   fs.readFile(moviePath, (err, data) => {
      res.end(data);
   });
}).listen(8080);
