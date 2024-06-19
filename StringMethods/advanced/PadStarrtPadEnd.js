console.log("PAd Start and Pad End.");

// syntax 
// str.padstart(targetLength);
// str.padstart(targetLength,padString);

const str = "Hai";

// only length of string 
// const padStart1 = str.padStart(10);
// console.log(padStart1,padStart1.length);
// const padEnd1 = str.padEnd(10);
// console.log(padEnd1,padEnd1.length);

// with padding string 
const padStart1 = str.padStart(10,"@");
console.log(padStart1);
const padEnd1 = str.padEnd(10,"@");
console.log(padEnd1);

// more pad string length 
const padStart2 = str.padStart(10,"1,2,3,4,5,6,7,8,9,10,11,12");
console.log(padStart2);
const padEnd2 = str.padEnd(10,"1,2,3,4,5,6,7,8,9,10,11,12,13");
console.log(padEnd2);


// less length than String. 
const padStart3 = str.padStart(2);
console.log(padStart3);
const padEn3 = str.padEnd(2);
console.log(padEn3);



