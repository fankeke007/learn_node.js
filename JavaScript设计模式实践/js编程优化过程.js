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
// 2-4改进2-3,2-4缺点：每次实例化都会
var checkObject= function(){
	this.checkName=function(){};
}
var a=new checkObject();//注意与2-3的不同
a.checkName();


