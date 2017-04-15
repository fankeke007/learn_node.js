//引入模块
var path=require('path');
var HtmlwebpackPlugin=require('html-webpack-plugin');
//设置路径
var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'app');
var BUILD_PATH=path.resolve(ROOT_PATH,'build');
// 开始
module.exports={
	entry:APP_PATH,
	output:{
		path:BUILD_PATH,
		filename:'bundle.js'
	},
	plugins:[
		new HtmlwebpackPlugin({
			title:'hello world app'
		})
	],
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true
		// progress:true
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:['style-loader','css-loader','sass-loader'],
				// loaders:'style-loader!css-loader!sass-loader',
				include:APP_PATH
			}
		]
	}
};
