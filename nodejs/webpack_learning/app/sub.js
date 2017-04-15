function generateText(){
	var element=document.createElement('h2');
	element.innerHTML="hello h2 world!webpack很强大!!";
	return element;
}
module.exports=generateText;