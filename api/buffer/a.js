/*
  Buffer.from(), Buffer.alloc(), and Buffer.allocUnsafe()
*/

console.log(Buffer.alloc(10));

console.log(Buffer.alloc(10,1));

console.log(Buffer.allocUnsafe(10));

console.log(Buffer.from([1,2,3]));

console.log(Buffer.alloc(10,16)); //0x

console.log(Buffer.from("xjx"));

let bu = Buffer.from([0xe4, 0xbd, 0xa0, 0xe5, 0xa5, 0xbd]);
console.log(bu);
console.log(bu.toString("utf8"));
