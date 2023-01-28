


let myArray = [];
let arrayLength = prompt("Enter the array length:");


for (let i = 0; i < arrayLength; i++) {
	let element = prompt("Enter an array element:");
	myArray.push(element);
}


myArray.sort(function (a, b) {
	return a - b;
});
console.log(myArray);


let elementsToRemove = myArray.splice(1, 2, 3);
console.log(myArray);


document.write(myArray.join(", "));