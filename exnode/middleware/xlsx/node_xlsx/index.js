var xlsx = require('node-xlsx').default;
var fs = require('fs');

//var zhejiang = fs.readFileSync(`${__dirname}/myFile.xlsx`)
var obj = xlsx.parse(__dirname+'/zhejiang.xlsx');
var excelObj=obj[0].data;//一个二维数组
//console.log(excelObj);

var data = [];
for(var i in excelObj){
    var arr=[];
    var value=excelObj[i];
    for(var j in value){
        arr.push(value[j]);
    }
    data.push(arr);
}
//console.log(data);
// var buffer = xlsx.build([
//     {
//         name:'sheet1',
//         data:data
//     }
// ]);

//将文件内容插入新的文件中
//fs.writeFileSync('beijing.xlsx', buffer, {'flag':'w'});

for (var i = 1; i < excelObj.length; i++){
    for (var j = 0; j < excelObj[0].length; j++){
        //处理excel表格中的空数据和脏数据
        console.log(excelObj[i][j]);
        if (excelObj[i][j] == undefined || excelObj[i][j] == '/'){
            excelObj[i][j] = '';
        }
    }
}
