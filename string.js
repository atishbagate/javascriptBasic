/*
js strings is a zero or more character written inside quotes.
js strings are used for store and manipulating text.
you can use single or double quotes
strings can nbe created as premitives, from string literals, or as objects, or the string() constructor.
*/
// let myName = 'atish bagate';

// // let youName = new String(" bagate "); // by using string constructor.(not use now)
// console.log(myName);
// console.log(myName.length);

//escape character
// let sentence = "we are good student of \"BATU NCC unit\" cadets";
// console.log(sentence);

//else use combination of double quots and single quotes
// console.log('we are good "students" of DBATU');
// console.log("we are good student of 'college ' engineer");

// //finding the string inside the string 
// const myBio = 'this is where i grow';
// console.log(myBio.indexOf('where'));

//last index of ()
// const myBio = 'this is where i grow';
// console.log(myBio.lastIndexOf('e'));

//search the string in the string 
// const myBio = 'this is where i grow';
// console.log(myBio.search('where'));

//extracting string parts
// 3 methods
// // slice(start,end),substring(start,end),substr(stat,length) 
const myBio = 'this, is, where, i, grow';

// //1)-->slice method take start point and end point but not print the last point.
// console.log(myBio.slice(0,7));
// console.log(myBio.slice(7,-4)); //it iterate from number 7 and goes till last data from where it count -4 number and then return

// // take a limited number of character in strings
// myComment = 'ahiughtiugahw;ghbna; ;iaohgnai hngahbnikgahbn iahgnakag haohnakhna igakhni';
// console.log(myComment.slice(0,50));

// 2)---> substring() ,method 
//difference between substring and slice is --> substring not accept negative value .
// console.log(myBio.substring(7,3)); //3 represent how many length of the exracted part.

// console.log(myBio.substring(7,-8)); //-8 is not taken as value and it return value till index number 7

// // 3) substr(indexnumber,length)
// console.log(myBio.substr(-4));
// console.log(myBio.substr(4,7));

// String.prototype.replace(searchFor,replaceWith);

//replacing in  string content
// let replce = 'i am atish bagate';
// console.log(replce.replace('atish','sumit'));

//extraction method are 3 types in String characters
//charAt(index),charCodeAt(position),Property access[]

// 1)--/> charAt()
let str = "hello worlD";
// console.log(str.charAt(1));
// 2) charCodeAt() ---> it returns the unicode value 
// returns utf-16 code 
// an interger between 0 to 65535
// console.log(str.charCodeAt(1));
// find the unicode value of last charater of string 
// console.log(str.charCodeAt(str.length-1));

// 3) Property Access in ecma 5(2009) allow property acess[] to string 
var str1 = 'HELLOW WORLD';
// console.log(str[2]);
// console.log(str[0]);

// // touppercase() , tolowercase() 
// console.log(str1.toUpperCase());
 
// console.log(str1.toLowerCase());

// concatination 
// console.log(str.concat(" "+str1));
// console.log(`${str}  ${str1}`); //this is another option for concat

// 3) trim() --> it removes the whitespace from both side of string
// var str3 = "        hello  ";
// console.log(str3.trim());
 

// converting string to array 
// // using split method  , it split string using given break point 
// var txt = 'q,g,b,d,r';
// console.log(txt.split(","));
// var txt = 'q,g/b,d/r,m/g,y';
// console.log(txt.split("/"));