console.log("CharCodeAt CodePointAt");

const str = "ok 👍";
    // ok 👍
    // 0 1 2 3 4
    // character occupies at two index number

console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));
console.log(str.charCodeAt(3));
console.log(str.charCodeAt(4));
console.log(str.charCodeAt(5));

console.log(str.codePointAt(0));
console.log(str.codePointAt(1));
console.log(str.codePointAt(2));
console.log(str.codePointAt(3));
console.log(str.codePointAt(4));
console.log(str.codePointAt(5));

// now to reverse this approach 
// fromCharCode() and fromCodePoint() is used 
// takes code as parameter 
// String.fromCharCode(num);
// String.fromCharCode(num,...num2,...num3);

// fromCodePoint();
// String.fromCodePoint(num);
// String.fromCodePoint(num,...num2,...num3);

console.log(String.fromCharCode(111));
console.log(String.fromCharCode(107));
console.log(String.fromCharCode(32));
console.log(String.fromCharCode(55357));
console.log(String.fromCharCode(56397));
console.log(String.fromCharCode(128077));
// combined 
console.log(String.fromCharCode(111,107,32,55357,56397,128077));

console.log(String.fromCodePoint(111));
console.log(String.fromCodePoint(107));
console.log(String.fromCodePoint(32));
console.log(String.fromCodePoint(55357));
console.log(String.fromCodePoint(56397));
console.log(String.fromCodePoint(128077));

// note - last 128077 code not needed.
// combined 
console.log(String.fromCodePoint(111,107,32,55357,56397,));
