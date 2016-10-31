node模块的一些知识
1.node 魔模块系统避免了对全局作用域的污染，从而也就避免了命名冲突，并简化了模块的重用。
2.node模块既可以是一个文件也可是一个文件夹目录。若模块是个目录node通常会在这个目录下找
 package.json 若无 package.json ,则找一个叫 index.js 的文件作为模块入口（这个默认设置可以重写）。
3.node模块的几种典型的方式：
形式一：exports.[moduleName]=[moduleContext];
可以这样用：
exports.A=fnA;
exports.B=fnB;
即一个模块文档中可以返回多个函数或内容可以这样使用。
若要返回单个不能这样使用 exports=[xxxx];//这是错误的用法
形式二：Module.exports=[xxx];
//形式一中需要注意的地方:赋值表达式右侧的部分不能是一个变量名
//exports只是对module.exports的一个引用，为一个可以添加属性的空对象.
//注意：！！！若一个模块文件中既有 exports又有module.exports,则exports会被忽略。
4.require 是node中少数几个同步I/O之一（会阻塞，因而一般只用于程序最初加载时和同步操作中）。
5.？？？？？node中模块引用路径。
"./"以这开头的模块意味着模块文件和引用他的文件位于同一文件夹中。.js扩展名可忽略。
"./lib/xx"被引用的模块文件 xx.js存放于子目录lib中。
6.node能把模块作为对象缓存起来。

node异步编程的一些知识
1.在node的世界里流行2中响应逻辑管理方式：回调和事件监听。
回调通常用来定义一次性响应逻辑。
事件监听本质上也是一个回调，不同的是他跟一个概念实体（事件）相关联。
2.一个node HTTP服务器实例就是一个事件发射器，一个可以继承、能够添加事件发射及处理能力的类（EventEmitter）.
node的很多核心功能都继承自EventEmitter,你也能自己创建事件发射器。
3.Telnet协议是TCP/IP协议族中的一员，是Internet远程登陆服务的标准协议和主要方式。
它为用户提供了在本地计算机上完成远程主机工作的能力。在终端使用者的电脑上使用
telnet程序，用它连接到服务器。终端使用者可以在telnet程序中输入命令，这些命令
会在服务器上运行，就像直接在服务器的控制台上输入一样。可以在本地就能控制服务
器。要开始一个telnet会话，必须输入用户名和密码来登录服务器。Telnet是常用的远
程控制Web服务器的方法。
4.流程控制：让一组异步任务顺序执行的概念被node社区成为流程控制。这种控制分为两类：串行和并行。
5. Common.js / AMD / CMD 规范？

node HTTP 相关知识
1.模块引入: var http=require('http');
2.创建HTTP服务器: var server = http.createServer(function(req,res){});
http.createServer()只有一个回调函数作为参数，回调函数中的2个参数分别为 请求 和 响应 对象。
背后细节：服务器每次收到一条HTTP请求就会用新的req、res对象触发请求回调函数。在触发回调函数
之前，Node会解析请求的HTTP头，并将它作为req对象的一部分提供给请求回调。Node不会自动往客户端写任何响应。
在调用完请求回调函数之后，就要由你负责调用 res.end() 方法结束响应。这样在响应结束之前你可以在请求的生命周期内
运行任何异步逻辑。如果你没有结束响应，请求会挂起，直到客户端超时，或者它会一直处于打开状态。
Node服务器是长期运行的进程，在它的整个生命周期里，它会处理很多请求。
3.处理响应内容和结束响应：res.write()和res.end()可以合起来缩写成一条语句，这样对于小型的响应来说很方便。res.end('Hello World')
4.监听端口：server.listen() 绑定一个端口让服务器可以监听接入的请求。
5.？？？？服务器是如何监听请求的？
6.读取请求头及设定响应头
node提供的几个修改HTTP响应头的方法：
res.steHeader(field,value)
res.getHeader(field)
res.removeHeader(field)
添加和移除响应头的顺序可以随意，但一定要在调用 res.write()和 res.end()之前。
在响应主体的第一部分写入之后，node会刷新已经设定好的HTTP头。
7.设定HTTP响应的状态码：
res.statusCode

8.node的策略是提供小而强的网络API，不去跟Rails或Django之类的框架竞争，而是作为类似框架构建基础的巨大平台。
9.CRUD操作：create、read、update、delete。 REST风格：post、get、put、delete
10.HTTP 协议支持的请求方法：GET、HEAD、PUT、DELETE、POST、OPPTIONS
11.查看HTTP请求方法：req.method
12.__dirname:该文件所在目录的路径。
13.node中流的5种类型：readable、writable、transform、duplex(双向的)、'classic'
14.formidable:用于大文件上传

node中的数据存储
i:内存和文件系统数据存储：内存存储不持久、文件系统会遭遇并发问题
ii:传统的关系型数据存储：MySQL、postgreSQL
iii:非关系型数据库存储：redis、MongoDB、Mongoose

1.RAM 是 Random Access Memory
  ROM 是 Read-Only Memory
2.数据算法：大O表示法？







