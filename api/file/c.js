var fs = require("fs");

fs.unlink('./stuff/d.txt', function(err){
    if(err) throw err;
    
    console.log('d.txt was deleted;');
    fs.rmdir('stuff',function(err){
	if(err) throw err;
	console.log('stuff was deleted;');	
    });
});
