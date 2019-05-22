var year = 2016;
var month = 5;
if(year%4==0){	
	document.write(year+" is leap year <br>");
}
else{
	month=13;
	document.write(year+" is not leap year <br>");
}
switch(month){
	case 1:document.write("31 days");
	break;
	case 3:document.write("31 days");
	break;
	case 5:document.write("31 days");
	break;
	case 7:document.write("31 days");
	break;
	case 8: document.write("31 days");
	break;
	case 10: document.write("31 days");
	break;
	case 12: document.write("31 days");
	break;
	case 2:document.write("29 days");
	break;
	case 13:document.write("28 days");
	break;
	default:document.write("30 days");
	break;
}
