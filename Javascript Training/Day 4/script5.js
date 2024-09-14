const prompt = require("prompt-sync")();

let weight = prompt("Enter A weight");

if (weight <= 50) console.log("Do not need to pay");
else if (weight > 50 && weight <= 70) console.log("Have to pay 100$");
else if (weight > 70 && weight <= 90) console.log("Have to pay 300$");
else if (weight > 90 && weight <= 120) console.log("Have to pay 500$");
else console.log("Have to pay 1000$");
