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
//1-2闭包实现
var Book = (function(){
	//静态私有变量
	var bookNum = 0;
	//静态私有方法
	function checkBook(){};
	//返回构造函数
	return function(newId,newName,newPrice){
		//私有变量
		var name,price;
		//私有方法
		function checkID(id){};
		//特权方法
		this.
	}
}