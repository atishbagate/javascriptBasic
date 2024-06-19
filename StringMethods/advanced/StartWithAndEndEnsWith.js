console.log("Start With and End With.");
const s = 'Good morning Friends';
// G o o d   m o r n  i  n  g     F  r  i  e  n  d  s
// 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
// syntax 
// startWith(searchString);
// startWith(searchString,Position);
// case sesitive
// return Boolean value 

console.log(s.startsWith("Good"));
console.log(s.startsWith("good"));
console.log(s.startsWith("morning",5));

// ---------------------------
// syntax 
// startWith(searchString);
// startWith(searchString,LengthOFString);
// case sesitive
// return Boolean value 

console.log(s.endsWith("Friends"));
console.log(s.endsWith("Friend"));
console.log(s.endsWith("Friend",19));
