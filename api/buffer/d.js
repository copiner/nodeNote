
let a = Buffer.alloc(6);
let b = Buffer.from("ÄãºÃ","utf8");


b.copy(a,0,0,6);
console.log(a.toString());

let c = Buffer.alloc(3);
b.copy(a,0,0,6);

console.log(c.toString());
