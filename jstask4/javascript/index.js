function animate(id)
{
	var element = document.getElementById("demo");
	var textnode = element.childNodes[0];
	var text= textnode.data;
	setInterval(function () {
		text=text[text.length-1]+text.substring(0,text.length-1);
		textnode.data=text;
	},300);

}


