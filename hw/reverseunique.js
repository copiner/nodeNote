/*
输入一个int型整数,按照从右向左的阅读顺序，返回一个不含重复数字的新的整数
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    let earr = [];
    let arr = answer.split('');
    let len = arr.length;
    for(let i=len-1; i>-1; i--){
        if(!earr.includes(arr[i])){
            earr.push(arr[i])   
        }
        
    }
    console.log(earr.join(''))

})
