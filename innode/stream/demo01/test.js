//在 NodeJS 中所有的 Stream 都是 EventEmitter 的实例
const fs = require('fs');
const FILEPATH = './streamout/net.txt';
const DEST = './streaminto/test.txt'

const rs = fs.createReadStream(FILEPATH);
const ws = fs.createWriteStream(DEST);

rs.pipe(ws);
