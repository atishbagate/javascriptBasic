console.log("Inclides");
const s = 'Good morning Friends';
// G o o d   m o r n  i  n  g     F  r  i  e  n  d  s
// 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
// syntax 
// inclides(searchString);
// inclides(searchString,start to check from position);
// return boolean value 
// and it is caseSensitive

console.log(s.includes("morning"));
console.log(s.includes("Morning"));
console.log(s.includes("morning",0));
console.log(s.includes("morning",5));
console.log(s.includes("morning",6));
