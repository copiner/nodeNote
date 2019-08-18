var fs = require('fs');

fs.mkdir('stuff',function(){
    fs.readFile('f.txt','utf8',function(err,data){
	fs.writeFileSync('./stuff/d.txt',data);
    })
})

console.log('ahead');
