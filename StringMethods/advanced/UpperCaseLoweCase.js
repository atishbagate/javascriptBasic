console.log("UpperCase LowerCase");

const str = "this Is String." 
// it return new string 
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// local method used as per region and language. 
const str2 = "istanbul" 
console.log(str2.toLocaleUpperCase('en-US'));
console.log(str2.toLocaleLowerCase('en-US'));

console.log(str2.toLocaleUpperCase('tr'));
console.log(str2.toLocaleLowerCase('tr'));