// Type Coercion- Adding a Number and A String Will Give Us  A String

let a = "5";
let b = 8.5;

console.log(a + b, typeof (a + b));

// Type Coercion- Substracting  a Number and A String Will Give Us  A Number
a = 21;
b = "14";
console.log(a - b, typeof (a - b));

// Type Coercion- Adding a Number and A Null Will Give Us  A Number
a = 4;
b = null;
console.log(a + b, typeof (a + b));

// Type Coercion- Adding a Number and True Will Give Us  A Number
a = 55;
b = true;
console.log(a + b, typeof (a + b));

// Type Coercion- Adding a Number and False Will Give Us  A Number
b = false;
console.log(a + b, typeof (a + b));
// Type Coercion- Adding a Number and Undefined Will Give Us  A NaN
let c;
console.log(a + c, typeof (a + c));
