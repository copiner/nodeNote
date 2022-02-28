/*
输入一个int整数,将这个整数以字符串的形式逆序输出
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    let earr = [];
    let arr = answer.split('').reverse();
    console.log(arr.join(''))
})
