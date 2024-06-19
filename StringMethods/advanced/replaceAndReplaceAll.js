console.log("Replace Replace All");

// syntax - > 
// .replace(searchString,replaceString);
// .replace(searchString,replaceFunction);

// note -> replace and replace all must call with global flag reg expression 

let str = "This is the string to replace The string with replace methods.";
console.log(str.replace("is","no"));

// using function 
console.log(str.replace("is",(match)=>{return match.toUpperCase()}));

// regEx using 
console.log(str.replace(/is/gi,"no"));
// regex and function both 
console.log(str.replace(/is/gi,(match)=>{return match.toUpperCase()}));


// replaceAll 
console.log(str.replaceAll("is","no"));
// using function 
console.log(str.replaceAll("is",(match)=>{return match.toUpperCase()}));


// regEx using 
console.log(str.replaceAll(/is/gi,"no"));
// regex and function both 
console.log(str.replaceAll(/is/gi,(match)=>{return match.toUpperCase()}));
