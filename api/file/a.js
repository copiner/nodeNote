
var fs = require('fs');

//var f = fs.readFileSync('f.txt','utf8')
//console.log(f);

//fs.writeFileSync('w.txt',f);

//or

fs.readFile('f.txt','utf8',function(err,data){
    fs.writeFileSync('w.txt',data);
})
console.log('ahead');
