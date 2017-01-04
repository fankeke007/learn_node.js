var net=require('net');
var chatServer=net.createServer();
var clientList=[];
chatServer.on("connection",function(client){
	client.write("hi!\n");
	clientList.push(client);
	client.on("data",function(data){
		for(var i=0;i<clientList.length;i++){
			if(client!==clientList[i]){
				clientList[i].write(data);
			}
		}
	});

})
chatServer.listen(9000);

//telnet 127.0.0.1 9000
//GHOST_WIN10X64Pro_14393_351.iso