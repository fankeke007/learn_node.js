// 1初级
function checkName(){};
function checkEmail(){};
function checkPassword(){};
//2-1进化:对象收编减少全局对象，通过点语法checkObject.checkName()来访问方法。
var checkObject={
	checkName:function(){};
	checkEmail:function(){};
	checkPassword:function(){};
};
//2-2对象的另一种形式,通过点语法添加方法，2-2的缺点：无法继承,new时无法继承这些方法
var checkObject = function(){};
checkObject.checkName=function(){};
//2-3 改进2-2的缺点,缺点：不为真正意义上的类a和checkObject没有关系。return返回的对象checkObject无关
var checkObject=function(){
	return {
		checkName:function(){};
	}
}
var a = checkObject();
a.checkName();
// 2-4改进2-3,2-4缺点：每次实例化都会创建方法造成浪费
var checkObject= function(){
	this.checkName=function(){};
}
var a=new checkObject();//注意与2-3的不同
a.checkName();
// 2-5改进2-4。通过原型继承，一次创建所有实例均可通过原型链获得该方法
// 缺点：需多次敲 xx.prototype.xx
var checkObject=function(){};
checkObject.prototype.checkName = function() {};
checkObject.prototype.checkEmail = function() {};

// 2-6改进2-5.将一个对象赋值给原型对象。
// 注意：不能与2-5混用，极大可能会造成覆盖
// 使用时写了多遍a
var checkObject=function(){};
checkObject.prototype={
	checkName:function(){},
	checkEmail:function(){}
}
var a=new checkObject();//无参数是可以省略圆括号
a.checkName();
a.checkEmail();
// 2-7-1升级版的链式调用.
var checkObject={
	checkName = function(){
		//验证邮箱
		return this;
	},
	checkEmail = function(){
		//验证邮箱
		return this;
	}
}
可像如下链式调用：
checkObject.checkName().checkEmail();
// 2-7-2
var checkObject=function(){};
checkObject.prototype={
	checkName = function(){
		//验证邮箱
		return this;
	},
	checkEmail = function(){
		//验证邮箱
		return this;
	}
}
