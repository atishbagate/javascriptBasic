console.log("Locally comparing str");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

// str values returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order

// syntax 
// localeCompare(compareString)
// localeCompare(compareString, locales)
// localeCompare(compareString, locales, options)

// negative value - false 
// positive value - true and existed
// 0 - matched value 

console.log('a'.localeCompare('b'));
console.log('b'.localeCompare('a'));
console.log('a'.localeCompare('a'));


console.log("ä".localeCompare("z", "de")); // a negative value: in German, ä sorts before z
console.log("ä".localeCompare("z", "sv")); // a positive value: in Swedish, ä sorts after z

// in German, ä has a as the base letter
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// in Swedish, ä and a are separate base letters
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // a positive value
