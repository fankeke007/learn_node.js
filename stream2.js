//Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。
//例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
// Node.js，Stream 有四种流类型：
// Readable - 可读操作。
// Writable - 可写操作。
// Duplex - 可读可写操作.
// Transform - 操作被写入数据，然后读出结果。
// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。


//以下示例从stream中写入数据

var fs = require("fs");
var data = '这是通过stream写入的内容';

// 创建可写流
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');
// 标记文件末尾
writerStream.end();
// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
