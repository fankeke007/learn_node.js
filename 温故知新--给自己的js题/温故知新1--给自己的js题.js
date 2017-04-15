1.词法作用域：(js是基于词法作用域的)无论函数在哪被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。
（作用域链只会在定义的地方向上查找，而不会在调用的地方向上查找。结合以下例子仔细体会）
	function foo(){
		console.log(a);
	}	
	function bar(){
		var a=3;
		foo();
	}
	//若bar()在这里执行是什么结果(undefined)
	var a=2;//若此处a没定义则ReferenceError错误
	bar();//函数执行结果2
2.IIFE是什么？机制？优缺点？典型应用场景？
IIFE：(Immediately Invoked Function Expression)立即执行函数表达式。
//函数名对IIFE并不是必须的，IIFE最常见形式是使用一个匿名函数，但具名函数具有匿名函数的所有优势且语义明确
形式1：(function(){}());//这两种形式功能上是一致的
形式2：(function[name](){})();//第一个括号将函数变成一个表达式，第二个括号执行了这个函数
eg1:注意例1中window与global的关系
var a=2;
(function IIFE(global){
	var a=3;
	console.log(a);//3
	console.log(global.a);//2
})(window);
console.log(a);//2
eg2:倒置代码运行顺序
var a=2;
(function IIFE(def){
	def(window)
})(function def(global){
	var a=3;
	console.log(a);//3
	console.log(global.a);//2
});
3.闭包？机制？典型应用？
《你不知道的JavaScript》：当函数可以记住并访问所在的词法作用域时，就产生了闭包。
即使函数是在当前词法作用域之外执行。
MDN：是指那些能够访问独立(自由)变量的函数 (变量在本地使用，但定义在一个封闭的作用域中)。
换句话说，这些函数可以“记忆”它被创建时候的环境。
典型应用场景：
i:保护函数内的变量安全。以最开始的例子为例，函数a中i只有函数b才能访问，而无法通过其他途径访问到，因此保护了i的安全性。
ii:在内存中维持一个变量。依然如前例，由于闭包，函数a中i的一直存在于内存中，因此每次执行c()，都会给i自加1。
iii:通过保护变量的安全实现JS私有属性和私有方法（不能被外部访问）推荐阅读：http://javascript.crockford.com/private.html
4.es6中 let/const/module/export/import
Object.assign();

5.模块依赖加载器/管理器工作原理？
6.词法作用域与动态作用域的区别？
7.es6中 => ?

准备：必知的小知识点

8.变量存储在哪里？程序需要时如何找到他们？(作用域)
9.传统编译语言流程中，程序中的一段源代码在执行之前会经历三个步骤，统称为编译：
词法分析、语法分析、代码生成。（词法单元流，抽象语法树）
10.任何JavaScript代码片段在执行前都要进行编译（通常就在执行前）。
（涉及的3个方面：
引擎：从头到尾负责整个JavaScript程序的编译及执行过程；
编译器：负责语法分析及代码生成；
作用域：负责收集并维护由所声明的标识符（变量）组成的一系列查询，
并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权；
）
（一个变量定义与赋值（var a=2;）的过程的通俗描述：
i:遇到 var a,编译器会询问作用域是否已由该名称的变量存在于同一个作用域的
集合中。若存在，编译器会忽略该声明，继续执行编译；否则他会要求作用域在当前
作用域集合中声明一个新的变量，并命名为 a。
ii：接下来编译器会为浏览器引擎生成运行时所需的代码，这些代码被用来处理 a=2
这个赋值操作。引擎运行时会首先询问作用域，在当前作用域的集合中是否存在一个
叫作a的变量。若存在引擎就会使用这个变量；若不存在引擎会继续查找该变量。
若引擎最终找到了变量a,就会将2赋值给它。否则浏览器就会抛出一个异常。
总结：变量的复制操作会执行两个动作，首先浏览器会在当前作用域中声明一个变量
（如果之前没有生命过），然后在运行时引擎会在作用域中查找该变量，如果能够
找到机会对它赋值。
）
11.LHS查询与RHS查询。
当变量出现在赋值操作左侧时进行LHS查询。当变量不出现在赋值操作左侧（即非左侧）
是进行RHS查询。
LHS查询若变量不存在则（在非严格模式下）就会创建一个具有该名称的变量。
RHS查询若变量不存在就会抛出ReferenceError。


12.遮蔽效应（作用域链中存在多个同名变量时，里层的变量会遮蔽外层变量）
13.欺骗词法作用域的几种方式：eval()(只接受含代码的字符串或变量名),
with(){},若对with中没有的属性赋值，会执行LHS查询，属性会被赋值给全局对象。
欺骗词法作用域会导致引擎无法在编译时对对代码进行优化，大大影响代码执行性能。


14.函数声明与函数表达式的区别？怎样辨别函数声明与函数表达式？（是否提升）
区分函数声明与函数表达式最简单的方法是看function关键字出现在声明中的位置（
不仅仅是一行代码，而是整个声明中的位置）。若function是声明中的第一个词，那
么就是一个函数声明，否则就是一个函数表达式。
函数声明会提升。

15.函数作用域/块作用域？
js中实现块作用域：
with(){..};
try{}catch{};catch分句会创建一个块作用域，其中声明的变量只在catch内部有效;
let;(let 声明的变量不会提升)

16.提升
变量声明和函数声明都会提升。函数具有更高优先级。
注意具名的函数表达式，名称标识符在复制之前无法再所在作用域中使用。
eg1:(函数名bar只是函数体中的一个本地变量)
foo();//typeerror
bar();//referenceerror
var foo=function bar(){
	//..
};
这段代码经过提升后会被理解为以下代码：
var foo;
foo();
bar();
foo=function(){
	var bar=...self...;
	//...
}
命名函数表达式（Named function expression）
如果你想在函数体内部引用当前函数，则需要创建一个命名函数表达式。
然后函数名称将会（且只会）作为函数体（作用域内）的本地变量。这样
也可以避免使用非标准的 arguments.callee 属性。
var math = {
  'factorial': function factorial(n) {
    if (n <= 1)
      return 1;
    return n * factorial(n - 1);
  }
};

//第二部分
17.自实现bind函数（MDN bind实现）
18.Object.create(null)与{}的区别？
Object.create(null)并不会创建Object.prototype委托。因而比{}"更空".
19.this?
20.es6 super?
21.属性描述符(属性的特性),Object.getOwnPropertyDescriptor(obj,propertyName);
Object.defineProperty(obj,propertyName,{
	value:2,
	writable:true,
	configurable:true,
	enumerable:true
});
Object.preventExtensions();//禁止扩展
Object.seal();//密封对象
Object.freeze();//冻结对象


普通对象的属性描述符包含以下4个特性：
value、writeable、enumerable、configurable

22.属性访问实现细节？
var myObject={
	a:2
};
myObject.a;//2
myObject.a是一次属性访问，但是并不仅仅是在myObject中查找
名为a的属性，虽然看起来是这样。实质上是调用内置的[[get]]
操作。
23.in 操作符：检查属性是否在对象及其原型链中。
hasOwnProperty()：只会检查属性是否在对象中，不会检查原型链。
24.prototype VS __proto__?
25.Object.create()的内部实现机制?
26.获取对象所有属性名
Object.getOwnPropertyNames(Error.prototype);

对比如下两个可知方法一般定义在原型上
Object.getOwnPropertyNames(Array);
//["length", "name", "arguments", "caller", "prototype", "isArray", "from", "of"]
Object.getOwnPropertyNames(Array.prototype);
//["length", "constructor", "toString", "toLocaleString", "join", "pop", "push", "reverse", "shift", "unshift", "slice", "splice", "sort", "filter", "forEach", "some", "every", "map", "indexOf", "lastIndexOf", "reduce", "reduceRight", "copyWithin", "find", "findIndex", "fill", "includes", "entries", "keys", "concat"]0: "length"1: "constructor"2: "toString"3: "toLocaleString"4: "join"5: "pop"6: "push"7: "reverse"8: "shift"9: "unshift"10: "slice"11: "splice"12: "sort"13: "filter"14: "forEach"15: "some"16: "every"17: "map"18: "indexOf"19: "lastIndexOf"20: "reduce"21: "reduceRight"22: "copyWithin"23: "find"24: "findIndex"25: "fill"26: "includes"27: "entries"28: "keys"29: "concat"length: 30__proto__: Array[0]
27.数组操作方法：数组 a.slice();slice方法从何处来？






