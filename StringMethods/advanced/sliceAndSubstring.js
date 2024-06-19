console.log("Slice and substring");
const s = 'Good morning Friends';
// G o o d   m o r n  i  n  g     F  r  i  e  n  d  s
// 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
// syntax 
// slice(startIndex,EndIndex);
// substring(startIndex,EndIndex);

console.log(s.slice(5));
console.log(s.substring(5));
// ---------------------------
console.log(s.slice(-5));
console.log(s.substring(-5)); //any negative number is zero in negative substring.
// ---------------------
console.log(s.slice(30));
console.log(s.substring(30));
// ------------------------
console.log(s.slice(12,15)); // second parameter end index
console.log(s.substring(12,15)); // second parameter end index
// ---------------
console.log(s.slice(15,12)); //reverse is consider as empty OP.
console.log(s.substring(15,12)); // parse in reverse order
// ------------------
console.log(s.slice(-16,-12)); // reverse parsing.
console.log(s.substring(-16,-10)); //substring not takes negative number. negative number consider as zero(0)
// ---------------------
console.log(s.slice(-12,4)); //reverse is consider as empty OP.
console.log(s.substring(-12,4)); 
// ---------------------
console.log(s.slice(12,-4)); //reverse is consider as empty OP.
console.log(s.substring(12,-4)); 
