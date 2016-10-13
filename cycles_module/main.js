console.log('main starting');
var a=require('./a.js');
var b=require('./b.js');
console.log('in main ,a.done=%j,b.done=%j',a.done,b.done);
// 当 main. js 加载 a. js， a. js 加载 b. js。 此时， b. js 试着 加载 a. js。 为了 阻止 循环 调用，
// a. js 输出 对象 的 不完全 拷贝 返回 给 b. js 模块。 b. js 会 结束 加载， 并且 它的 exports 对象
//提 供给 a. js 模块。