const buf = Buffer.from('hello world', 'ascii');

// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// Prints: aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));

const buf2 = Buffer.alloc(10, -1);

console.log(buf2);

const buf3 = Buffer.alloc(10, 1);

console.log(buf3);

const buf4 = Buffer.alloc(10);

console.log(buf4);

const b = Buffer.allocUnsafe(20).fill('h');

// Prints: hhhhhhhhhhhhhhhhhhhh
console.log(b.toString());

const en = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'
  en[i] = i + 97;
}

// Prints: abcdefghijklmnopqrstuvwxyz
console.log(en.toString('ascii'));
// Prints: abcde
console.log(en.toString('ascii', 0, 5));
