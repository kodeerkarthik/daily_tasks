var a=new Array();
function save(){
	var i=0;		
	a.push(document.getElementById("text").value);
	document.getElementById("text").value=" ";
	i++;
}
function display(){
	for(i=0;i<a.length;i++)
	document.write(a[i]+"<br>");
}
