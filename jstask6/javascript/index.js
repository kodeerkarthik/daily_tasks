function selectAll(){
	var items=document.getElementsByName('check');
	for(var i=0; i<items.length; i++){
		if(items[i].type=='checkbox')
			items[i].checked=true;
	}
}
			
function UnSelectAll(){
	var items=document.getElementsByName('check');
	for(var i=0; i<items.length; i++){
		if(items[i].type=='checkbox')
			items[i].checked=false;
	}
}	
function calculate(){
	debugger;
	var total=0;
	var items=document.getElementsByName('check');
	for(var i=0; i<items.length; i++){
		if(items[i].type=='checkbox' && items[i].checked==true)
				total=parseInt(items[i].value)+total;
	}
	// document.write("the total is :"+total);
	document.getElementById("output").innerHTML="the total is : "+total;	
}
 