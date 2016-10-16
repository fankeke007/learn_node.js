//event5.js error事件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error',"自定义error事件","自定义error事件arg2"); 
