var year = 2018;
var month = 2;
if(year%4==0){	
	document.write(year+" is leap year <br>");
}
else{
	var temp=1;
	document.write(year+" is not leap year <br>");
}
switch(month){
	case 1:case 3:case 5:case 7:case 8: case 10:case 12: document.write("31 days");
	break;
	case 2:if(temp==1)document.write("28 days");else document.write("29 days");
	break;
	case 4:case 6: case 9: case 11:document.write("30 days");
	default:document.write("please give month less than 13 value");
	break;
}
