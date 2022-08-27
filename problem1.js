const prompt = require("prompt-sync")();
var a,b;
var j,i =1;

while(i==1){

console.log("ENTER THE OPERATION TO BE PERFORMED\nENTER + : ADDITION \nENTER - : SUBSTRACTION\nENTER * : MULTIPLICATION\nENTER div / : DIVISION\nEXAMPLE : +");
operation = prompt();
a = parseInt(prompt("Enter First Number = "));
b = parseInt(prompt("Enter Second Number "));
if(operation == "+"){
add(a,b)
}else if(operation == "-"){
sub(a,b)
}
else if(operation == "*"){
mul(a,b)
}else if(operation == "/"){
div(a,b)
}
else{
	console.log("undefined  operation  cannot performed")
}
j = parseInt(prompt("press enter to continue & 0 to exit "));
if(j==0){
	i=0;
}

}

function add (a,b){
	console.log(a,"+",b,"= ",a+b)
}
function sub (a,b){
	console.log(a,"-",b,"= ",a-b)
}
function mul (a,b){
	console.log(a,"*",b,"= ",a*b)
}
function div (a,b){
	console.log(a,"/",b,"=",a/b)
}