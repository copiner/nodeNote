
const fs = require('fs');

fs.stat('./tmp/hello.js', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// { dev: 2022478838,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: undefined,
//   ino: 2533274790469947,
//   size: 9,
//   blocks: undefined,
//   atime: 2017-04-01T07:07:58.678Z,
//   mtime: 2017-04-01T08:00:14.450Z,
//   ctime: 2017-04-01T08:00:14.450Z,
//   birthtime: 2017-04-01T07:07:58.678Z }
