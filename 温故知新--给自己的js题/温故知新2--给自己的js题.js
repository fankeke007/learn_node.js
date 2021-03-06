//you don't know js
1.es6中新增数据类型symbol？
typeof Symbol() === 'symbol'; //true
2.数组通过键值赋值的值不会改变数组的length长度
var a=[];
a[0]=1;
a["foo"]="foo";
a["bar"]=2;
console.log(a.length);//1
console.log(a);//[1, foo: "foo", bar: 2]
//but WTF
a["12"]=42;
consolel.log(a.length);
3.类数组？类数组转换为数组？
Array.prototype.slice.call(arg);//其中arg为类数组
es6中用Array.from(arg);能实现相同的功能
4.字符串反转？
（字符串不可借用数组的可变更方法，因为字符串是不可变的）
var a="foo";
var c=a.split("").reverse().join("");
c;//'oof'
思路：先将字符串转换为数组然后利用数组反转方法后再将数组转化为字符串；这对于
简单的字符串可以，对于复杂的字符串处理则较费力。
5.比较字符串与数组？（字符串是类数组）
字符串可以借用数组的非变更方法来处理字符串
6.js小数计算不准确的解决办法？（Number.EPSILON）（2，-52）
7. 零值：正零与负零？（符号）如何区分？-Infinity&&Infinity
8.es6 Number.isNaN();
Object.is();判断两个值是否绝对相等。NaN，+0-0,一般值
isNaN();存在bug,判断一对象也为true
9. 单行竖行文字两端对齐？
10. 注意分析以下几种情况：
(由于引用指向的是值本身而非变量，所以一个引用无法更改另一个引用的
	指向)（这是js与其他语言不同的地方）
i:
var a=[1,2,3];
var b=a;
a;//[1,2,3]
b;//[1,2,3]
//然后
b.push(4);//a?
b=[4,5,6];//a?

ii:
var a=[1,2,3];
var b=a;
a=[4,5,6];
b;//[1, 2, 3]

iii:(明白一点a作为参数传入时是RHS查询，做了一个赋值)
（复习LHS与RHS）
function foo(x){
	x.push(4);
	x;//?
	//then
	x=[4,5,6];
	x.push(7);
	x;?
}
var a=[1,2,3];
foo(a);
a;//?
11.我们无法自行决定使用值复制还是引用复制，一切由值的类型来决定。
如果通过值复制方式来传递复合值（如数组），就需要为其创建一个复本，
这样传递的就不是原始值。eg:foo(a.slice());
相反，如果要将标量基本类型值传递到函数内并进行更改，就需要将该值
封装到一个复合对象（数组或对象）中，然后通过引用复制的方式传递。

结合10/11/12三条分析如下：
function foo(x){
	x++;
	console.log(x);//3
}
var a=new Number(2);
typeof a;//object 而不是number
foo(a);
console.log(a.toString());//"2"
(原因是标量基本类型的值是不可更改的（字符串和布尔值也是如此）)

12.原生函数（Number()/String()/Object()/Symbol()...）可以被当做
构造函数来使用，但是其构造出来的对象可能会和我们设想的有所出入。
通过构造函数创建出来的是封装了基本值类型的 封装对象 ，而不是基本类型值。
13.如何获取封装对象、有如何解封？
获取：new Construct();或者直接 Object(基本类型值)，这里无需使用用效果使用构造函数一样。
解封：valueOf();或利用隐式转化规则

14.针对特定错误的原生够着函数：
EvalError();RangeError();ReferenceError();SyntaxError();TypeError();
URIError();（各自在什么时候发生）
自定义错误：Error();

Object.getOwnPropertyNames(Error.prototype);
//["name", "message", "constructor", "toString"]
Object.getOwnPropertyNames(Error);
//["length", "name", "arguments", "caller", "prototype", "captureStackTrace", "stackTraceLimit"]
name:对应type,eg:EvalError
message:对应要显示的消息

15.symbol是具有唯一性的特殊值（并非绝对），用他来命名对象属性不容易导致重名。
符号可以用作属性名，但无论在代码还是控制台都无法查看和访问他的值，只会显示诸如
Symbol(Symbol.create)这样的值。
es6中有一些预定义的符号以Symbol静态属性的形式出现，如 Symbol.create,Symbol.iterator等
我们可以利用 Symbol()原生构造函数来自定义符号。但它比较特殊，不能带有new关键字
否则报错。
判断如下：
var a,b,c;
a=Symbol(2);
b=Symbol(2);
c={};
a===b;//false
a==b;//false
Symbol(2)===Symbol(2);//false
c.a="haha";
c.b="hello";
c[Symbol(2)]="wowo";
console.log(c);//chrome:Object {a: "haha", b: "hello", Symbol(2): "wowo"}
//firefox: Object { a="haha",  b="hello"}

16.这样设计的目的？
    Functon.prototype 是一个空函数
    Array.prototype 是一个空数组
    RegExp.prototype 是一个空正则 /(?:)/

17.强制类型转换&&类型转换
将值从一种类型转换为另一种类型通常称为类型转换，这是显式的情况；隐式的
情况下称为 强制类型转换。

js强制类型转换总是返回标量基本类型值，不会返回对象和函数。

18.【JSON.stringify(a,fn(k,v),num/string)的三个参数的作用】JSON.stringify()和 toString()效果基本相同，但JSON.stringify()
遇到undefined、function、Symbol 和包含循环引用的对象时会特别处理。
遇到 undefined、function 、Symbol 在对象中自动将其忽略，在数组中
则返回null.
遇到循环引用的对象时会报错。
JSON.stringify([1,undefined,function(){},4]);
//"[1,null,null,4]"
JSON.stringify({a:2,b:function(){},c:[1,undefined,function(){},4]});
//"{"a":2}"
JSON.stringify("2");//""2"",注意此种结果
JSON.parse()执行上述过程反操作。

var a=[1,2,function(){}];
JSON.stringify(a,function(k,v){
	if(typeof v =="function"){
	return ""+v;

	}else{
		console.log(v);return v
	}
})//"[1,2,"function (){}"]"

19.将function 用 toString()操作后如何逆操作执行函数？(数组或对象中的函数字符串执行，因为 JSON.stringify()
	会忽略function，因此需字符串化)
eg:var foo=function(){alert('逆操作成功！')};
var bar=foo.toString();//"function(){alert('逆操作成功！')}"
直接 eval(bar);会报错
得用 eval("var x="+bar);
然后 x();//alert:逆操作成功！

20.非数值转化为数值的内部实现：
基本值转化为数值规则：
undefined：NaN
null:0
false:0
true:1
Symbol：不能转换为数值，但能转化为字符串
string:数值型：数值，非数值型：NaN
object、array、function :先调用 valueOf()若返回基本值则在返回值基础上转化。否则调用toString()重复以上过程。
若都不能返回基本值，则TypeError。

21.js中的假值：假值的布尔强制类型转换结果为false。（其他为真）
false
+0,-0,NaN
""
undefined
null

假值的包装对象的Boolean转换为真值。

假值对象：一些起浏览器的奇怪特性

22. []+{} VS {}+[]  ?
[]+{};//[object Object]
{}+[];//0
//第二个中{}被当作空代码块来执行，因而就 +[]起作用

23. （规则优先级从上而下）
i:     string==number，string转为number后再比较
ii:    boolean==?,boolean转为number后再比较
iii:   null==undefined ,（==操作中null等同于undefined）除此以外 null /undefined 和其他任何职都不想等。
iiii:  对象==非对象，对象 ToPromitive()后再与非对象比较。


包装对象和基本值==操作为true；===操作为false。
==操作中：



24. [3].valueOf();//[3]
    [3].toString();//"3"
    [].valueOf();//[]
    [].toString();//"",注意是空字符串

    var a={};
    a.valueOf();//{},！！！若无定制则返回对象本身
    a.toString();//'[object Object]'

25. []==[];//false
    []==![];//true  ???Boolean([]);//true

26. js中处理 a<=b : 先是处理 b<a,然后将结果反转。
即“小于或等于”在js中是“不大于”的意思，即 !(a>b)

27. JSON 格式 {"a":43} 直接在控制台中运行，ff会报错，但
chrome会解析为一个对象。正解为ff 。
(注意：var a={a:42}与没有 var a 只有{a:42}的区别。
	有时为对象，无时为标签语法)
28. 对象解构？

eg:es6 开始{..}可用于“解构赋值”
function getData(){
	return {
		a:42,
		b:"foo"
	}
}
var {a,b}=getData();
console.log(a,b);//42 "foo"
eg: {..}用于函数命名参数的对象结构，方便隐式地用对象
属性赋值。
function foo({a,b,c}){
	//不再需要这样：
	//var a=obj.a;...
	console.log(a,b,c);
}
foo({
	c:[1,2,3],
	a:42,
	b:"foo"
});//42 "foo" [1,2,3]

29.左右关联与执行顺序的关系？（执行顺序不受关联影响，关联只影响组合）
三目运算符为右关联：  a?b:c?d:e
其组合为 a?b:(c?d:e)
右关联不是指从右往左执行，而是指从右往左组合。任何
时候，无论是组合还是关联，严格的执行顺序都应该是从左
到有。

30.chrome控制台缓存清理：console.clear()
或者快捷键"ctrl+L"

31. es6 yield

32.Number(null)//0
   Number([])//0
   Number({})//NaN
   Number(undefined)//NaN
   Number("")//0
   Number(false)//0

33. try catch finally throw

33. setTimeout(fn,1000);fn的执行时间？（不一定是1000之后，为什么）
34. promise
35.几个概念：并发、线程、进程、任务、事件循环
36. 回调地狱的真正问题所在：硬编码，前后依赖，一个环节出错
后面都挂。
对回调的改进：
分离回调（success、failure）、error-first（node）风格

37.Function.apply.bind(fn,null)?
//将函数fn的参数形式转换为数组形式（主要想利用apply）
   Function.bind.apply(fn)?
   // 主要想利用bind

function getY(x) {
    return new Promise( function(resolve,reject){
        setTimeout( function(){
            resolve( (3 * x) - 1 );
        }, 100 );
    } );
}

function foo(bar,baz) {
    var x = bar * baz;
    // return both promises
    return [
        Promise.resolve( x ),
        getY( x )
    ];
}

function spread(fn) {
    return Function.apply.bind( fn, null );
}

Promise.all(
    foo( 10, 20 )
)
.then(
    spread( function(x,y){
        console.log( x, y );    // 200 599
    } )
)

38.es6 结构？
39.解释如下代码？
// polyfill-safe guard check
if (!Promise.wrap) {
    Promise.wrap = function(fn) {
        return function() {
            var args = [].slice.call( arguments );
            return new Promise( function(resolve,reject){
                fn.apply(
                    null,
                    args.concat( function(err,v){
                        if (err) {
                            reject( err );
                        }
                        else {
                            resolve( v );
                        }
                    } )
                );
            } );
        };
    };
}

40. 对比闭包版本的迭代器与生成器版本的迭代器？

41. 生成器？
//分析如下代码？
function foo(x,y) {
    ajax(
        "http://some.url.1/?x=" + x + "&y=" + y,
        function(err,data){
            if (err) {
                // throw an error into `*main()`
                it.throw( err );
            }
            else {
                // resume `*main()` with received `data`
                it.next( data );
            }
        }
    );
}

function *main() {
    try {
        var text = yield foo( 11, 31 );
        console.log( text );
    }
    catch (err) {
        console.error( err );
    }
}

var it = main();

// start it all up!
it.next();


































