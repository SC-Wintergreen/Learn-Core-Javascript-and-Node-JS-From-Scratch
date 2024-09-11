let num1 = prompt("Enter A NUmber");
let num2 = prompt("Enter 2nd Number");
let num3 = num1 + num2;

// Conversion Using Unary Method
num1 = +num1;
num2 = +num2;

console.log(num1 + num2);
// Conversion Using Parse Int Function
console.log(num3);
console.log(parseInt(num1) + parseInt(num2));

// Conversion Using Number Constructor
num1 = Number(num1);
num2 = Number(num2);

console.log(num1 + num2);
