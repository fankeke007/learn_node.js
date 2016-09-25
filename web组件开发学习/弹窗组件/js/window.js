// 初级
/*define(function(){
	function Window(){}
	Window.prototype={
		alert:function(){},
		confirm:function(){},
		prompt:function(){},
	}
	return{
		Window:Window
	}

});*/

//添加jquery模块依赖
define(['jquery'],function($){
	function Window(){
		//设置默认值
		this.cfg={
			width:500,
			height:300,
			title:"系统消息",
			content:"",
			handler:null,
			hasCloseBtn:false,
			hasMask:true
		}
	}
	Window.prototype={
		// alert:function(content,handler,cfg){
		// 	var boundingBox=$('<div class="window_boundingBox"></div>');
		// 	boundingBox.appendTo("body");
		// 	boundingBox.html(content);
		// 	var btn=$('<input type="button" value="确定">');
		// 	btn.appendTo(boundingBox);
		// 	btn.click(function(){
		// 		//若handler存在这执行
		// 		handler&&handler();
		// 		//执行完handler之后销毁弹出框
		// 		boundingBox.remove();
		// 	});
		// 	//此处的this？
		// 	$.extend(this.cfg,cfg);
		// 	boundingBox.css({
		// 		width:this.cfg.width+"px",
		// 		height:this.cfg.height+"px",
		// 		left:(this.cfg.x||(window.innerWidth-this.cfg.width)/2)+"px",
		// 		top:(this.cfg.y||(window.innerHeight-this.cfg.height)/2)+"px"

		// 	})
		// },
		// 改进：调整借口格式
		alert:function(cfg){

			/*var boundingBox=$('<div class="window_boundingBox"></div>');
			boundingBox.appendTo("body");
			boundingBox.html(cfg.content);
			var btn=$('<input type="button" value="确定">');
			btn.appendTo(boundingBox);*/
			// 升级：定制标题
			var CFG=$.extend(this.cfg,cfg),
				boundingBox=$('<div class="window_boundingBox">'+
					'<div class="window_header">'+CFG.title+'</div>'+
					'<div class="window_body">'+CFG.content+'</div>'+
					'<div class="window_footer"><input type="button" value="确定"></div>'+'</div>'),
				btn=boundingBox.find(".window_footer input"),
				mask=null;
				if(CFG.hasMask){
					var mask=$('<div class="window_mask"></div>');
					mask.appendTo("body");
				}
				boundingBox.appendTo("body");
			btn.click(function(){
				//若handler存在这执行
				CFG.handler&&CFG.handler();
				//执行完handler之后销毁弹出框
				boundingBox.remove();
				mask.remove();
			});
			//此处的this？
			// $.extend(this.cfg,cfg);
			boundingBox.css({
				width:CFG.width+"px",
				height:CFG.height+"px",
				left:(CFG.x||(window.innerWidth-CFG.width)/2)+"px",
				top:(CFG.y||(window.innerHeight-CFG.height)/2)+"px"

			});
			if(CFG.hasCloseBtn){
				var closeBtn=$('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					boundingBox.remove();
					mask.remove();
				})
			};
			
		},

		confirm:function(){},
		prompt:function(){},
	}
	return{
		Window:Window
	}

});