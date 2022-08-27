// Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

const prompt = require("prompt-sync")();
var a1 = new Array()
l = parseInt(prompt("Enter the list length  "));
for (let i = 0; i < l; i++) {
	a1[i]=parseInt(prompt("Enter the list element "))
}
var dict = {}

for (let i = 1; i < 9; i++) {
	let k=0;
	for (let j = 0; j < l; j++) {
		if(a1[j]%i==0){
			k++;
		}
	}
	dict[i] = k
}

console.log(dict);