//在js中类的创建已办有函数模拟。每个类都由3个部分》：
//第一部分：构造函数内的，这是供实例化对象复制用的。
//第二部分：构造函数外的，直接通过点语法添加的，这是供类使用的，实例化对象访问不到。
//第三部分：类的原型中的，实例化对象可以通过其原型链间接地访问到，也是为供所有实例化对象共用的。

//子类的原型对象--类式继承
//类式声明
//声明父类
function SuperClass(){
	this.surperValue=true;
}
//为父类添加共有方法
SuperClass.prototype.getSuperValue=function(){
	return this.surperValue;
}
//声明子类
function SubClass(){
	this.subValue=false;
}
//继承父类
SubClass.prototype=new SuperClass();//不实例化结果就是undefined
//为子类添加共有方法
SubClass.prototype.getSubValue=function(){
	return this.subValue;
}
类式继承:声明两个类，将一个类（父类）的实例赋值给另一个类（子类）的原型。
？原理：类的原型对象的作用就是为类的原型添加共有方法，但类不能直接访问这些属性和方法，
必须通过原型来访问。而我们实例化一个父类的时候，新创建的对象复制了父类的构造函数内的属性和方法
并且将原型__proto__指向了父类的原型对象，这样就拥有了福类的原型对象上的属性和方法，并且
这个新创建的对象可以直接访问到父类原型对象上的属性和方法。
将这个实例化的父类对象赋值给子类的原型，那么子类的原型同样可以访问到父类原型上的属性和方法
与从父类构造函数中复制的属性和方法。这正是类式继承的原理。

类式继承的2个缺点：
其一：子类通过其原型prototype对父类实例化，继承了父类。若父类中共有属性要是引用类型，
就会在子类中被所有实例共用。一个修改会影响到其他。
其二：由于子类实现继承是靠其原型prototype对父类实例化实现的，因此在创建父类的时候是无法向父
类传递参数的。

//解决以上问题，构造函数继承
//创建及继承--构造函数继承
//构造函数式继承

//父类声明
function SuperClass(id){
	this.books=['javascript','html','css'];
	this.id=id;
}
//父类声明原型方法
SuperClass.prototype.showBooks=function(){
	console.log(this.books);
}
//声明子类
function SubClass(id){
	//继承父类
	SuperClass.call(this,id);
}

注意：SuperClass.call(this,id);这条语句是构造函数式继承的精华。
原理？：由于call方法可以改变函数的作用环境，因此在子类中，对SuperClass
调用这个方法就是将子类中的变量在父类中执行一遍，由于父类中是给this绑定
属性的，因此子类自然就继承了父类的共有属性。

构造函数式继承的缺点：
由于这种类型的继承没有涉及原型prototype，所以父类的原型方法自然不会被子类继承，
而如果想要被子类继承就必须放在构造函数中，这样创建出来的实例每个都会单独拥有一份
而不能共用。

//结合类式继承与构造函数式继承两者之长--组合继承
//组合式继承
//声明父类
function SuperClass(name){
	//值类型共有属性
	this.name=name;
	//引用类型共有属性
	this.books=['javascript','html','css'];
}
//父类原型共有方法
SuperClass.prototype.getName=function(){
	consoe.log(this.name);
}
//声明子类
function SubClass(name,time){
	//构造函数式 继承父类name属性
	SuperClass.call(this,name);
	//子类中新增共有属性
	this.time=time;
}
//类式继承 子类原型继承父类
SubClass.prototype=new SuperClass();
//子类原型方法
SubClass.prototype.getName=function(){
	console.log(this.name);
};

组合模式中调用了两边父类的构造函数。因而还不够完美。
//洁净的继承者--原型式继承
//原型式继承
function inheritObject(o){
	//声明一个过渡函数对象
	function F(){};
	//过渡对象的原型继承父对象
	F.prototype=o;
	//返回过渡对象的一个实例，该实例的原型继承了
	retrun new F();
}


