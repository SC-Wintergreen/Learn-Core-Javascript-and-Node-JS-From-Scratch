// lastIndexOf Method
const str1 = "Mississippi";
console.log(str1.lastIndexOf("i", 6));

// Substring method
console.log(str1.substring(2));
console.log(str1.substring(0, 4));

console.log(str1.substring(1, 5));

// Slice Method
const str2 = "Issac Asimov";
console.log(str2.slice(-5, -2));
console.log(str2.slice(-5, -3));

// Trim Method

let str3 = "   Vladimir Putin     ";
str3 = str3.trim();

// str3.trimStart()
// str3.trimEnd()
console.log(str3, str3.length);
// console.log("Vladimir Putin".length);

// Replace Method

let str4 = "United States Of America";
console.log(str4.replace("States", "Provinces"));
console.log(str4.replace("Of", ""));
