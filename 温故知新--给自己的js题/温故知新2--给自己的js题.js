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



