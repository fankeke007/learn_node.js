var http=require('http');
var fs=require('fs');
var path=require('path');
var mime=require('mime');
var cache={};

//404响应
function send404(response){
	response.writeHead(404,{'content-Type':'text/plain'});
	response.write('Error 404:resource not found');
	response.end();
}
//文件数据服务
function sendFile(response,filePath,fileContents){
	response.writeHead(200,{'content-Type':mime.lookup(path.basename(filePath))});
	response.end(fileContents);
}
//静态文件服务
function serveStatic(response,cache,absPath){
	if(cache[absPath]){
		sendFile(response,absPath,cache[absPath]);
	}else{
		fs.exists(absPath,function(exists){
			if(exists){
				fs.readFile(absPath,function(err,data){
					if(err){
						send404(response);
					}else{
						cache[absPath]=data;
						sendFile(response,absPath,data);
					}
				});
			}else{
			sendFile(response);
			}
		});
		}
}
//http服务器
var server=http.createServer(function(request,response){
	var filePath=false;
	if(require.url=='/'){
		filePath='public/index.html';
	}else{
		filePath='public'+request.url;
	}
	var absPath='./'+filePath;
	serveStatic(response,cache,absPath);
})
server.listen(3030,function(){
	console.log("Server listening on port 3030");
});

var chatServer=require('./lib/chat_server');
chatServer.listen(server);


