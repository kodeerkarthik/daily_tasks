var a=new Array("India", "America", "SouthAfrica","England");
var max=a[0].length;
var large=a[0];
for(var i=1;i<a.length;i++){
	if(a[i].length>max){
		max= a[i].length;
		large=a[i];
	}
	
}
document.write(large);

