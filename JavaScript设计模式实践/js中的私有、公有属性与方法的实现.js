//1-1分析以下对象的属性和方法
var Book = function(id,name,price){
	//私有属性
	var num=1;
	//私有方法
	function checkId(){};
	//特权方法
	this.getName=function(){
		console.log(this.name)
	};
	this.getPrice=function(){};
	this.setName=function(name){
		this.name=name;
	};
	this.setPrice=function(){};
	//对象的公有属性
	this.id=id;
	//对象公有方法
	this.copy=function(){};
	//构造器
	this.setPrice(price);
	this.setName(name);
};
//类静态公有属性（对象不能访问）
Book.isChinese=true;
//类静态公有方法（对象不能访问）
Book.resetTime=function(){
	console.log(new Date);
}
Book.prototype={
	//公有属性
	isJSBook:false,
	display:function(){

	}
}
//1-2闭包实现1
var Book = (function(){
	//静态私有变量
	var bookNum = 0;
	//静态私有方法
	function checkBook(neme){};
	//返回构造函数
	return function(newId,newName,newPrice){
		//私有变量
		var name,price;
		//私有方法
		function checkID(id){};
		//特权方法
		this.getName=function(){};
		this.getPrice=function(){};
		this.setName=function(){};
		this.setPrice=function(){};
		//公有属性
		this.id=newId;
		//公有方法
		this.copy=function(){};
		bookNum++;
		if(bookNum>100){
			throw new Error("我们仅出版100本书。");
		}
		//构造器
		this.setName(name);
		this.setPrice(price);
	}
}();
Book.prototype={
	//静态公有属性
	isJSBook:false,
	//静态公有方法
	display:function(){}
};
在闭包外部添加原型属性和方法看上去似乎脱离了闭包这个类，所以有时在闭包内完整实现一个类后将其返回，如下：
//1-3利用闭包实现2
var Book=(function(){
	//静态私有变量
	var bookNum=0;
	//静态私有方法
	var function checkBook(name){};
	//创建类
	function _book(newId,newName,newPrice){
		//私有变量
		var name,price;
		//私有方法
		function checkID(){};
		//特权方法
		this.getName=function(){};
		this.getPrice=function(){};
		this.setPrice=function(){};
		this.setName=function(){};
		//公有属性
		this.id=newId;
		//公有方法
		this.copy=function(){};
		bookNum++;
		if(bookNum>100){
			throw new Error("仅出版100本哟");
		}
		//构造器
		this.setName(name);
		this.setPrice(price);
	}
	//构建原型
	_book.prototype={
		//静态公有属性
		isJSBook:false,
		//静态公有方法
		display:function(){};
	};
	//返回类
	return _book;
})();

注意：在创建对象时，新手容易忘记使用new而犯错误。
eg:
var Book=function(title,time,type){
	this.thile=title;
	this.time=time;
	this.type=type;
}
var book=Book('javascript','2014','js');
console.log(book);//undefined
console.log(window.title);//javascript

为了避免上述错误，可以使用安全模式。
//创建对象的安全模式
var Book=function(title,time,type){
	//判断执行过程中this是否是当前对象（若是则说明是用new创建的）
	if(this instanceof Book){
		this.title=title;
		this.time=time;
		this.type=typw;
	}else{
		return new Book(title,time,type);
	}
}
var book = Book('javascript','2014','js');
console.log(book);//Book