// With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

//     Output: (examples)
//         1) input a = 1, then output : 1
//         2) input a = 2, then output : 1
//         3) input a = 3, then output : 1, 3, 5
//         4) input a = 4, then output : 1, 3, 5
//         5) input a = 5, then output : 1, 3, 5, 7, 9
//         6) input a = 6, then output : 1, 3, 5, 7, 9

const prompt = require("prompt-sync")();
var s=1;
while(s==1){
var a;
let j=1;
var a1 = new Array()
a = parseInt(prompt("Enter a number  "));
if(a%2==0){
	a-=1
}
for (let i = 0; i < a; i++) {
	
	a1[i]=j;
	j+=2;
  }

var a2 = a1.join(', ');
console.log(a2);
j = parseInt(prompt("press enter to continue & 0 to exit "));
if(j==0){
	s=0;
}

}