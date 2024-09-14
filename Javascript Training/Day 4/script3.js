// To Fixed Method
let a = 100;
let b = 3;
let c = a / b;
console.log(c.toFixed(2));

// To Precision Method
console.log(c.toPrecision(4));

// To Exponential Method

let num1 = 10000000000054;
console.log(num1.toExponential());

// To LocaleString

let num2 = 4000000;

console.log(
  num2.toLocaleString("en-IN", { style: "currency", currency: "INR" })
);

console.log(num2.toLocaleString("bn-IN", { style: "decimal" }));
console.log(
  num2.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })
);
