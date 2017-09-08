
const fs = require('fs');
fs.readdir('../', (err,files)=>{
    var path,stat;
    files.map((val)=>{
        path = `../${val}`;
        stat= fs.statSync(path);
        if(stat.isFile()){
            console.log(`file includes ${val}`);
        }else if(stat.isDirectory()){
            console.log(`dir includes ${val}`);
        }
    })
})
