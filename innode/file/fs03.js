
const fs = require('fs');

fs.realpath('./tmp/hello.js', (err, resolvedPath) => {
  if (err) throw err;
  console.log(resolvedPath);
});

//E:\Node\node02\file\tmp\hello.js
