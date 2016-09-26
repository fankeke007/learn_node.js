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
define(['widget','jquery','jqueryUI'],function(widget,$,$UI){
	function Window(){
		//设置默认值
		this.cfg={
			width:500,
			height:300,
			title:"系统消息",
			content:"",
			handler:null,
			hasCloseBtn:false,
			hasMask:true,
			isDraggable:true,
			dragHandle:null,
			handler4AlertBtn:null,
			handler4CloseBtn:null
		};
		this.handlers={};
	}
	//抽象出widget后此处修改如下
		// Window.prototype={
		Window.prototype=$.extend({},new widget.Widget(),{
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
				mask=null,
				that=this;
				if(CFG.hasMask){
					var mask=$('<div class="window_mask"></div>');
					mask.appendTo("body");
				}
				boundingBox.appendTo("body");
			btn.click(function(){
				//若handler存在这执行
				// CFG.handler&&CFG.handler();//可放于自定义事件中来执行
				//执行完handler之后销毁弹出框
				boundingBox.remove();
				// 对不一下两行代码
				mask.remove();/*mask && mask.remove()*//*后一种更好，避免不必要的函数执行*/
				// 执行自定义事件
				that.fire("alert");
			});
			//此处的this？
			// $.extend(this.cfg,cfg);
			boundingBox.css({
				width:CFG.width+"px",
				height:CFG.height+"px",
				left:(CFG.x||(window.innerWidth-CFG.width)/2)+"px",
				top:(CFG.y||(window.innerHeight-CFG.height)/2)+"px"

			});
			if(CFG.isDraggable){
				if(CFG.dragHandle){
					boundingBox.draggable({handle:CFG.dragHandle});
				}
			};
			if(CFG.hasCloseBtn){
				var closeBtn=$('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);
				closeBtn.click(function(){
					boundingBox.remove();
					mask&&mask.remove();
					that.fire("close");

				})
			};
			if(CFG.handler4AlertBtn){
				this.on("alert",CFG.handler4AlertBtn);
			}
			if(CFG.handler4CloseBtn){
				this.on("close",CFG.handler4CloseBtn);
			}

			return this;
		},

		confirm:function(){},
		prompt:function(){},

	});
	return{
		Window:Window
	}

});