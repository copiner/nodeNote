/*
 输入一个整数（int类型）
 这个数转换成2进制后，输出1的个数
*/
const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',(input)=>{
    let str = Number(input).toString(2)
    let num = 0;
    str.split('').forEach((e)=>{
        if(e === '1') num++;
    })
    console.log(num)
})
