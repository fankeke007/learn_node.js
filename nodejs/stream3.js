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


//以下示例管道流pipe
//管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);//此操作会将output中原有的内容覆盖

console.log("程序执行完毕");
