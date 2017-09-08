
const fs = require('fs');

fs.rename('./tmp/tt.js','./kk.js', (err) => {
  if (err) throw err;
  console.log('kk');
});

//更改文件名字和路径
