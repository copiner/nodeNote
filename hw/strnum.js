/*
输入一行没有空格的字符串,输出 输入字符串 中范围在(0~127，包括0和127)字符的种数
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    let earr = [];
    let arr = answer.split('');
    arr = [...new Set(arr)]
    console.log(arr.length)
})
