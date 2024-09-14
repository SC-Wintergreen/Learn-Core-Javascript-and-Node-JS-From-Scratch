// Includes Method
const str1 = "Anatoly Ivanov";
console.log(str1.includes("Ivan"));
console.log(str1.toLowerCase().includes("ivan"));

// Split Method

const data1 = "WB45G1234|Brown|Sedan|Lada";
const separatedData = data1.split("|");
console.log(separatedData);
console.log(
  separatedData[0],
  separatedData[1],
  separatedData[2],
  separatedData[3]
);

// Task

const data2 = "Maxim Boroshev|Engineer|Lada|45|Tambov";
const separatedData2 = data2.split("|");
console.log(separatedData2);

const data3 = "Lyudmila Supinskaya,Moscow,28,Teacher,Skoda";
const separatedData3 = data3.split(",");
console.log(separatedData3);
