//初级
/*require(['window'],function(w){
	new w.Window().alert();
});*/
//增加jquery模块依赖后写法
require.config({
	//修正依赖模块名，默认所加载依赖模块名为文件名，可利用paths属性修正
	paths:{
		jquery:'../jquery-1.12.1.min',
		jqueryUI:'../jquery-ui.min'
	}
});
// 此处又重新再require中写了一遍jquery（必要），是因为main中需用到jquery，
// 但require.js只会加载一次jquery
require(['jquery','window2'],function($,w){
	$("#a").click(function(){
		// new w.Window().alert("welcome to js world!",function(){
		// 	alert("you click the button");
		// },{width:200,height:100});
		var win=new w.Window();
		win.alert({
			content:"welcome to js world!",
			// 将以下函数放于自定义事件中执行
			/*handler:function(){
					alert("you click the button");
				},*/
			width:200,
			height:100,
			hasCloseBtn:true,
			title:"给小爷注意点",
			isDraggable:true,
			dragHandle:".window_header",
			handler4AlertBtn:function (){alert("you click the alert btn")},
			handler4CloseBtn:function (){alert("you click the close btn")}
		}).on("alert",function(){alert("the second alert")});
		win.on("alert",function(){alert("the third alert")});
	});
	$("#b").click(function(){
		var win=new w.Window();
		win.confirm({
			content:"A you ready to go to js world?",
			width:300,
			height:180,
			hasCloseBtn:true,
			title:"给小爷注意点",
			isDraggable:true,
			dragHandle:".window_header",
			handler4ConfirmBtn:function (){alert("good boy,work hard!")},
			handler4CancelBtn:function (){alert("piss off")}
		})
	});
	$("#c").click(function(){
		var win=new w.Window();
		win.prompt({
			content:"我们将会为您保密您的输入信息",
			width:300,
			height:180,
			hasCloseBtn:true,
			title:"请输入您的名字",
			isDraggable:true,
			text4PromptBtn:"输入",
			defaultValue4PromptInput:"张三",
			dragHandle:".window_header",
			handler4PromptBtn:function(val){
				alert("您输入的内容是:"+val);
			},
			handler4CancelBtn:function (){alert("取消")}
		})
	})
	$("#d").click(function(){
		var win=new w.Window();
		win.common({
			content:"hahaha,来嘛",
			width:300,
			height:180,
			hasCloseBtn:true,
			title:"请输入您的名字",
			isDraggable:true,
		})
	})

})
