//event3.js 文件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) { 
	console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
	console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 

// 返回指定时间的监听器地址
var listener_num=emitter.listeners('someEvent');
console.log(listener_num);

// 返回指定事件的监听器个数法1
var num = require('events').EventEmitter.listenerCount(emitter,'someEvent');
console.log(num);
// 返回指定事件的监听器个数法2
var num = emitter.listenerCount('someEvent');
console.log(num);