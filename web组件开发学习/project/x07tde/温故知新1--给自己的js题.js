1.词法作用域：无论函数在哪被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。
	function foo(){
		console.log(a);
	}	
	function bar(){
		var a=3;
		foo();
	}
	var a=2;//若此处a没定义则ReferenceError错误
	bar();//函数执行结果2
2.IIFE是什么？机制？优缺点？典型应用场景？
3.闭包？机制？典型应用？
4.es6中 let/const/module/export/import
5.模块依赖加载器/管理器工作原理？
6.词法作用域与动态作用域的区别？
7.es6中 => ?