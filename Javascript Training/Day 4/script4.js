// Conditional Statements

// Voting Age - 18
age1 = 29;

if (age1 >= 18) console.log("Person Can Vote");
else console.log("Person Cannot Vote");

// Write a program to determine whether an airline passenger has to pay extra cess based on  her weight

/*
        weight above 50 Kilo and below 70 Kilo - $100 Extra
        weight above 70 Kilo and below 90 Kilo - $300 Extra
        weight above 90 Kilo and below 120 Kilo - $500 Extra
        weight 120 Kilo - $1000 Extra
    */
let weight = 60;

if (weight <= 50) console.log("Do not need to pay");
else if (weight > 50 && weight <= 70) console.log("Have to pay 100$");
else if (weight > 70 && weight <= 90) console.log("Have to pay 300$");
else if (weight > 90 && weight <= 120) console.log("Have to pay 500$");
else console.log("Have to pay 1000$");
