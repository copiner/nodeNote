/*
输入第一行为一个正整数n(1≤n≤1000),下面n行为n个字符串(字符串长度≤100),
字符串中只含有大小写字母

数据输出n行，输出结果为按照字典序排列的字符串
*/
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let arr = [];
rl.on('line',(input)=>{
    arr.push(input)
    if(arr.length-1 == arr[0]){
        arr.shift();
        arr.sort().forEach((v)=>{
            console.log(v)
        })
    }
})
