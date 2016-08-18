// 多态
var makeSound = function(animal){
	if(animal instanceof Duck){
		console.log("嘎嘎嘎");

	}else if(animal instanceof Chicken){
		console.log("咯咯咯");
	}
}
var Duck=function(){};
var Chicken=function(){};
makeSound(new Duck());
makeSound(new Chicken());

// 改进，将“做什么”和“谁去做以及怎样做分离”
var makeSound = function(animal){
	animal.sound();
}
var Duck = function(){};
Duck.prototype.sound=function(){
	console.log("嘎嘎嘎");
}
var Chicken = function(){};
Chicken.prototype.sound=function(){
	console.log("咯咯咯");
}
var Dog = function(){};
Dog.prototype.sound=function(){
	console.log("汪汪汪");
}
makeSound(new Dog());

//封装
var myObject = (function(){
	var _name = 'seven';
	return {
		getName:function(){
			return _name;
		}
	}
})();
console.log(myObject.getName());
console.log(myObject._name);

// js中的this
var o = {//对象o
	m:function(){//对象中的方法m
		var self = this ;//将this的值保存在一个变量中
		console.log(this===o);//true
		f();//调用辅助函数
		function f(){//定义一个嵌套函数f();
			console.log(this===o);//false
			console.log(this===window);//true
			console.log(self===o);//true

		};
	};
}
// es6 class
class Animal {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}
class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	speak() {
		return "woof";
	}
}
var dog = new Dog("Scamp");
console.log(dog.getName() + ' says ' + dog.speak());

//call 、apply
var func = function( a, b, c ){
alert ( [ a, b, c ] ); // 输出 [ 1, 2, 3 ]
};
func.apply( null, [ 1, 2, 3 ] );


//理解new的运算过程（看不懂说明基础不牢）
function Person( name ){
     this.name = name;
};
Person.prototype.getName = function(){
     return this.name;
};
var objectFactory = function(){
	console.log(arguments);
     var obj = new Object(), // 从Object.prototype 上克隆一个空的对象
	 
     Constructor = [].shift.call( arguments ); // 取得外部传入的构造器，此例是 Person
	 console.log(arguments);
     obj.__proto__ = Constructor.prototype; // 指向正确的原型
     var ret = Constructor.apply( obj, arguments ); // 借用外部传入的构造器给 obj 设置属性
     return typeof ret === 'object' ? ret : obj; // 确保构造器总是会返回一个对象
};
var a = objectFactory( Person, 'sven' );

// 封装变量
var cache = {};
var mult = function(){
	var args = Array.prototype.join.call( arguments, ',' );
	console.log(args);
	if ( cache[ args ] ){
		console.log("huancun:"+cache[ args ]);
		return cache[ args ];
		
	}
	var a = 1;
	for ( var i = 0, l = arguments.length; i < l; i++ ){
		a = a * arguments[i];
	}
	return cache[ args ] = a;
};
console.log ( mult( 1,2,3 ) ); // 输出：6
console.log ( mult( 1,2,3 ) ); // 输出：6

// AOP
Function.prototype.before = function( beforefn ){
     var __self = this; // 保存原函数的引用
     return function(){ // 返回包含了原函数和新函数的"代理"函数
          beforefn.apply( this, arguments ); // 执行新函数，修正this
console.log("X:"+__self.apply( this, arguments ));
          return __self.apply( this, arguments ); // 执行原函数
     }     
};
Function.prototype.after = function( afterfn ){
     var __self = this;
     return function(){
     var ret = __self.apply( this, arguments );
     afterfn.apply( this, arguments );
     return ret;
     }
};
var func = function(){
     console.log( 2 );
};
func = func.before(function(){
     console.log( 1 );
});