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
require(['jquery','window'],function($,w){
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
	})
})