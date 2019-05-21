var mark_mass=50;
var mark_height=5;
var john_mass=60;
var john_height=6;
var mark_BMI=mark_mass/mark_height**2;
var john_BMI=john_mass/john_height**2;
var bool=mark_BMI>john_BMI;
document.write("Mark's mass = "+mark_mass+" kg<br>");
document.write("Mark's height = "+mark_height+" meter<br>");
document.write("John's mass = "+john_mass+" kg<br>");
document.write("John's height = "+john_height+" meter<br>");
document.write("Mark's BMI = "+mark_BMI+"<br>");
document.write("John's BMI = "+john_BMI+"<br>");
document.write(bool);
if(mark_BMI>john_BMI)
{
	console.log("Is Mark's BMI higher than John's? "+bool);
}