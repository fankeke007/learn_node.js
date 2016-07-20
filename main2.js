/*var fs = require("fs");

fs.readFileSync('E:\\learn_node\\input.txt',function(err,data){
	if(err) return console.log("程序执行结束!");
	console.log(data.toString());

});*/

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");