console.log("string methods.");
// Sting as an object 
// string contains one property - length 
// and many methods 34 methods.
// 1) By string literal
const str = `str`;
// 2) By string object (using new keyword)
const str2 = new String("this is a string");
// -----------------------------
// proprty  - length 
// console.log(str.length);
// --------------------
// string character access at Point. 
// console.log(str2[3]);
// console.log(str2[str2.length - 1]);
// ----------------------------
// charAt() - access character at specific index. 
// console.log(str.charAt(2));
// ------------------------------------
// indexOf() and lastIndexOf() 
const s = "the code is code"
console.log(s.indexOf("code"));
console.log(s.lastIndexOf("code"));
// 2nd parameter is to start position to search 
console.log(s.indexOf("code",6));
console.log(s.lastIndexOf("code",6));
// negative parameter 
console.log(s.indexOf("code",-6));
console.log(s.lastIndexOf("code",-6));
// empty string 
console.log(s.indexOf(""));
console.log(s.lastIndexOf(""));
// no parameter 
console.log(s.indexOf());
console.log(s.lastIndexOf());
