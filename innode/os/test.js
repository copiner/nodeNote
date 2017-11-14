var os = require("os");

//返回操作系统的默认临时文件夹
var tmpdir = os.tmpdir();
//
var endian = os.endianness();

//返回操作系统的主机名。
var host = os.hostname();

//返回操作系统名
var type = os.type();//Windows_NT

var platform = os.platform();//win32

//返回操作系统 CPU 架构
var arch = 	os.arch();

//返回操作系统的发行版本
var release = os.release();

//返回操作系统运行的时间，以秒为单位
var uptime = os.uptime();
var loadavg = os.loadavg();
var totalmem = os.totalmem();
var freemem = os.freemem();
var cpus = os.cpus();
var networkInterfaces = os.networkInterfaces();
console.log(freemem);
