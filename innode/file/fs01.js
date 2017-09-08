
var fs = require('fs');

fs.writeFile('./tmp/hello01.js','copiner', 'utf-8', function(err) {
    if (err) {
        throw err;
    }

    console.log('Saved.');

    // 写入成功后读取测试
    fs.readFile('./tmp/hello01.js', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});
