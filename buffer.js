//JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
// 但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，
// 定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
// 在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为
//  Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
//  每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
//  原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，
//  但它对应于 V8 堆内存之外的一块原始内存。


//创建长度为 26 字节的 Buffer 实例
//法1
buf = new Buffer(26);
//法2 通过给定的数组创建buffer实例 var buf=new Buffer([10,20,30,40,50])

for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
};
//从缓冲区读取数据 buf.toString([encoding[, start[, end]]])
console.log("1："+ buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log("2："+ buf.toString('ascii',0,5));   // 输出: abcde
console.log("3："+ buf.toString('utf8',0,5));    // 输出: abcde
console.log("4："+ buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。

//法3 通过字符串创建buffer
buf2=new Buffer("d0cf 11e0 a1b1 1ae1 0000 0000 0000 0000 0000 0000 0000 0000 3e00 0300 feff 0900 0600 0000 0000 0000 0000 0000 0100 0000 0100 0000 0000 0000 0010 0000 0200 0000 0100 0000 feff ffff 0000 0000 0000 0000 ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff ffff");
console.log("5："+ buf2.toString('utf8',0)); 


//将buffer转换为JSON对象
var buf3 = new Buffer('www.runoob.com');
var json = buf3.toJSON();
console.log("6："+json);
/*{ type: 'Buffer',
 data: [ 119, 119, 119, 46, 114, 117, 110, 111, 111, 98, 46, 99, 111, 109 ] }*/

//写入缓冲区
buf = new Buffer(256);
len = buf.write("www.runoob.com");
console.log("7："+"写入字节数 : "+  len);

//缓冲区合并 Buffer.concat(list[, totalLength])
var buffer1 = new Buffer('第一条缓冲区 ');
var buffer2 = new Buffer('第二条缓冲区');
var buffer3 = Buffer.concat([buffer1,buffer2]);//totalLength指定合并后Buffer对象的总长度
console.log("8："+"合并缓冲区1，2后buffer3 内容: " + buffer3.toString());

//缓冲区比较
var buffer1 = new Buffer('ABC');//改为ABCG后显示在之后
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log("9："+buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log("9："+buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log("9："+buffer1 + " 在 " + buffer2 + "之后");
}

//拷贝缓冲区 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer("henghenghahei");
buffer1.copy(buffer2);
console.log("10："+"buffer2 content: " + buffer2.toString());

//缓冲区裁剪buf.slice([start[, end]])
var buffer1 = new Buffer('hello Kitty');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("11："+"buffer2 content: " + buffer2.toString());

//缓冲区长度buf.length;
//返回 Buffer 对象所占据的内存长度。注意这未必是buffer内容的大小，不会随着buffer内容的改变而改变
var buf=new Buffer(1024);
//var buf=new Buffer(1024);
console.log("12："+"buf.length "+ buf.length);
buf.write("somestring",0);
console.log("13："+"buf.length "+ buf.length);
//?如何获取内容的长度,以下为错误结果
var len=buf.toString('utf8').length;
console.log("14："+"内容区长度 "+ len);
console.log("15："+"内容区 "+ buf.toString('utf8'));