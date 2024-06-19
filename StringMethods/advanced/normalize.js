console.log("Normalization method.");
// two character may visually see same but have different code. 
// this create a comparesion and search issue.
// https://book.hacktricks.xyz/pentesting-web/unicode-injection/unicode-normalization
// https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/

// types of normalization form -> NFC,NFD,NFKC,NFKD

console.log('\u00C7');
console.log('\u0043\u0327');

const st1 = '\u00C7';
const st2 = '\u0043\u0327';


const norm1 = st1.normalize();
const norm2 = st2.normalize();

// sme code point after normalization.
console.log(norm1.codePointAt(0));
console.log(norm2.codePointAt(0));

console.log(st1 === st2);
console.log(norm1 === norm2);

