// Node.js 全局对象
// JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。
// 在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
// 在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

//__filename:表示当前正在执行的脚本的文件名
//它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
console.log("1: "+__filename);

//__dirname:表示当前执行脚本所在的目录
console.log("2: "+__dirname);

//setTimeout(cb, ms):在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
//返回一个代表定时器的句柄值。
function printHello(){
   console.log("3: "+ "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);

//clearTimeout(t)

//setInterval(cb, ms)
//setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
//返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
//setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

//console

console.log("4: "+'Hello world'); 
console.log("5: "+'byvoid%diovyb'); 
console.log("6: "+'byvoid%diovyb', 1991); 

console.trace("7");//向标准错误流输出当前的调用栈。

console.time("8:获取数据");//输出时间，表示计时开始。
//
// 执行一些代码
process.on('exit',function(code){
	// 以下代码永远不会执行
  setTimeout(function() {
    console.log("9: "+"该代码不会执行");
  }, 0);
  
  console.log("10: "+'退出码为:', code);
});
// 
console.timeEnd('8:获取数据');//结束时间，表示计时结束。





// 输出到终端
process.stdout.write("12: "+"Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log("13: "+index + ': ' + val);
});

// 获取执行路局
console.log("14: "+process.execPath);


// 平台信息
console.log("15: "+process.platform);

// 输出当前目录
console.log("16: "+'当前目录: ' + process.cwd());

// 输出当前版本
console.log("17: "+'当前版本: ' + process.version);

// 输出内存使用情况
console.log("18: "+process.memoryUsage());
// process.memoryUsage():结果为一对象{ rss: 12541952, heapTotal: 4083456, heapUsed: 2157056 }
