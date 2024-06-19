console.log("Split");
const s = 'Good morning Friends';
// G o o d   m o r n  i  n  g     F  r  i  e  n  d  s
// 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20

// syntax  return an array.
// split();
// split(seperator);
// split(seperator,limit);

console.log(s.split());
console.log(s.split(' '));
console.log(s.split(''));
console.log(s.split('o'));
console.log(s.split('o',2));
console.log(s.split('o',0)); //zero limit return empty str.