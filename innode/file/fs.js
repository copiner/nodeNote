
const fs = require('fs');

fs.readFile('./tmp/hello.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
