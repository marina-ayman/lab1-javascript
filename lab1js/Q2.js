var name=prompt("enter your Name : ");
//isNaN
//false-----number
//true------string



if(isNaN(name)){
    alert("name is string" );
}
else
{
    alert("name is number" );

}












do{
    var name1 =prompt("enter your name; ")


}while(isFinite(name1))

do{
    var birth =prompt("enter your birthday; ")


}while(isNaN(birth) || birth>2010)
document.write("<br> birth year: ",birth)


document.write("<br>name: ",name1)


var age = 2022 -birth
document.write("<br>your age is :",age)

document.write("birth is : ",typeof birthyear,"<br>");
document.write("name is: ",typeof name);

