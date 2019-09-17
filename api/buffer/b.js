
/*
  fill(value,start,end);
*/
let buf = Buffer.alloc(3);

buf.fill(1);
console.log(buf);

let buff = Buffer.alloc(6);
buff.fill(1,2,4);
console.log(buff);

let bu = Buffer.from("hello","utf-8");

let a = bu.slice(0,2);
let b = bu.slice(2);
let c = bu.slice(-2);

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());

