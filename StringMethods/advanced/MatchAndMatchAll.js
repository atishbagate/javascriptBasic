console.log("MatchAndMatchAll");

let str = "This is the string to match  by using match method.";
// same as search but return an array of details of first occurences of regEx 
// syntax 
// .match(RegExp);
console.log(str.match(/is/));

// MatchAll  ,mathch all will return an array of given string or regular expression. 
// note - >  regEx have to be a global flag.
const op = str.matchAll('is');
console.log([...op]);

const op2 = str.matchAll(/i/gi);
console.log([...op2]);