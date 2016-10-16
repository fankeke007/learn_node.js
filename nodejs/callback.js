// 函数回调，阻塞代码示例
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");

var os = require("os");

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 返回操作系统的默认临时文件夹。
console.log('os.tmpdir() : ' + os.tmpdir());


// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");

/*console.log('os.cpus() : ' + os.cpus()[0] );*/
var cpus=os.cpus()[0];
for (var i in cpus){
	console.log(cpus[i]);
}