//java script new ECMA T.E, ES6 
//feature have 
// 1) let and const
// 2) Destructuring
/////3) template Strings
//4) Object Properties
//5) Default Arguments
///6) Arrow function
/// 7) rest Operators
////8) Spread Operattion.

//-----------------------------------> 1] let v/s const v/s var
 
//var can be changable many times 
// var myName = "atish";
// console.log(myName);

// myName= "atish Bagate";
// console.log(myName);


// //const cannot be change once created  
// const myName = "atish";
// console.log(myName);

// // myName= "atish Bagate";      
// console.log(myName);

// let and const are block scope 
//var have a function scope 
// // for ex:=
// function bio() {
//     var first = "atish";
//     console.log(first);

//     if (true) {
//         console.log("function called var : "+first);
//         let last = "bagate";

//         const addr = "hingoli";
        
//     }
//     // console.log("accessing let last : "+last);
//     console.log(addr);
// }
//we cannot access ler out of function hence it has function scope 
// console.log(first);

///calling bio function
// bio();


//-----------------------------------> 2] template and literals 

// `${value}` =====> this is know as templates or literals
// let num1 = 1, num2 = 2;
// console.log(`number 1  is ${num1}  and number two is ${num2}`);

//-----------------------------------> 3] default parameters
// // default value initialize ho jayega 

// function multiply(a,b = 5) { //b = 5 yaha hum default value de sakate hain 
//     return a*b;
// }
// console.log(multiply(4));


// --------------> fat arrow /function

////different way to write function 

// const sum = () =>{
//     let a = 5, b = 6;
//     let sum = a+b;
//     return `sum of the numbers is ${sum}`
// }
//  console.log(sum());

// const sum = () =>
//     `sum of the numbers is ${(a=3)*(b=5)}`;

//  console.log(sum());

// ----------------------------------------------
// ------------------------------------------------
// -----------------6th lesson= Arrays----------------
// in js we have arrays class
///arrays are prototype of this class


///create a instannce of name myFrd and put values inside an array 
//single va/riables /ke //and/er multiple data store karana ke liye use array 
//no need to write var myfrd = new array;  js will automatically see from [] brackets.
// var myFrd = ['ramesh','harish','ganesh'];

//to show single data 
// console.log(myFrd[2]);

//for loop
// for (let index = 0; index < myFrd.length; index++) {
//     const element = myFrd[index];
//     console.log(element);
    
// }

//------------------for in loop------------
//this loop returns only index number inside an arrray 
    // for (let element in myFrd){
    //     console.log(element);
    // }

    //-----------------for of loop------------
    //this loop returns value of an array 
    // for(let element of myFrd){
    //     console.log(element);
    // }
    ///------------for each loop is a combination of for in and for of loop---------
    // //-------we cannot use brak statment inside this loop
    // myFrd.forEach(function (element,index,array) {
    //     console.log(`this is an element : ${element} on index number ${index} and inside ${array}`);
        
    // })


    //---- forEach loop inside Fat Arrow function-----
    //this function not work in fat arrow function 
    // myFrd.forEach((element,index,array) => {
    //     console.log(`this is an element : ${element} on index number ${index} and inside ${array}`); 
    // });

    //arrays subsection 
    ///searching and filtering  of an array 
    //indexOf()
    /////
    var frds = ['harish','shubham','tatya','pratik'];

    // console.log(frds.indexOf('pratik',1));

//array concat 
var frd2 = ['aniket','prannet','trupti','vishal'];
var frd3 = ['amit'];

//indexOf--> search and give index number of given data 
// console.log(frd2.indexOf('trupti'));

// console.log(frds.concat(frd2,frd3));
//copyWithin()  copies elements to another position in the array overwrriting the existing values.

// frd2.copyWithin(1,0);
// console.log(frd2);
// var frd4 = frd2.copyWithin(0,2,4); //(target-index,start-index,end-index); 
// console.log(frd4);

//entries() ---> ////this method returns an array Iterator object with key values.
///for each item in an array this new iteration occures with new key-value 
//this comes in further topics 
// var entry = frd2.entries();

// for (x of entry){
//     document.getElementById("demo"),innerHTML +=x;
// }
frd4 = ['ravi','mangal','garry'];
// //every() --> chek every element condition matches or not.
// If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// // If no false occur, every() returns true
// function ever(name) {
//     return name =  'garry';
// }
// console.log(frd4.every(ever));


// ////fill()--> filles the given value inside array . it changes array content.
// frd4 = ['ravi','mangal','garry'];
// frd4.fill("roshan",'ganesh',2); //('values',till index number to fill start, end);
// console.log(frd4);

// //array filter()--> chek whether it is true or not and return the string with and without condition values as we gave in function.
// function fltr(name) {
//     return name != "ravi";
// }
// console.log(frd4.filter(fltr));

//find() --> The find() method returns the value of the first element in an array that pass a test (provided as a function).

// The find() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined
// function bagh(name) {
//     if (name == 'ravi') {
//         console.log("ravi is present");
//     } else {
//         console.log("ravi is absent");
//     }
// }
// console.log(frd4.find(bagh)); //this create a iteration searching for each value to match with condition and return .

// findIndex()--->The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).

// The findIndex() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
// Otherwise it returns -1
// Note: findIndex() does not execute the function for array elements without values.

// Note: findIndex() does not change the original array.
// bar  = [11,12,13,14,14,16];
// function indxfind(number) {
//     return number >= 16;
// }
// console.log(bar.findIndex(indxfind));

// //forEach()--> this method call a function for every element inside the array.
// function welcome(name) {
//     console.log(`welcome to party  ${name}`);
// }
// console.log(frds.forEach(welcome));

// includes()---> check wheather array is include or not
// console.log(frd2.includes('aniket')); 
//The indexOf() method searches the array for the specified item, and returns its position.
// console.log(frd2.indexOf('aniket'));
//isArray() ---> check wheather it is array or not.
// console.log(Array.isArray(frd2));

//join()--> The join() method returns the array as a string.
// The elements will be separated by a specified separator. The default separator is comma (,).
// console.log(frd2.join(" / "));

// keys()---> The keys() method returns an Array Iterator object with the keys of an array.

// var frdKeys = frds.keys();
// for (x of frdKeys){
//     console.log(`index number is ${x}`);
// }
// //to find the length of an Array
// console.log(frds.length);

//The lastIndexOf() method searches the array for the specified item, and returns its position.
// The search will start at the specified position, or at the end if no start position is specified, and end the search at the beginning of the array.
// Returns -1 if the item is not found.
// If the item to search for is present more than once, the lastIndexOf method returns the position of the last occurence.

// console.log(frds);
// var frd6 = frds.concat('tatya','pratik');
// console.log(frd6);
// console.log(frd6.lastIndexOf('tatya',2));

// // The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// Note: map() does not execute the function for array elements without values.
// var num = [1,2,3,4,5,6];
// var square = num.map(Math.sqrt);
// console.log(square);

// function table(num) {
//     return  `${num}* 10 = ${num * 10}`;
// }
// var multiple = num.map(table);
// console.log(multiple);

// The pop() method removes the last element of an array, and returns that element.
// Note: This method changes the length of an array.
// var num = [1,2,3,4,5,6];
// console.log(num.pop());
// console.log(num);

// The prototype constructor allows you to add new properties and methods to the Array() object.
// When constructing a property, ALL arrays will be given the property, and its value, as default.
// When constructing a method, ALL arrays will have this method available.
// Note: Array.prototype does not refer to a single array, but to the Array() object itself.
// Note: Prototype is a global object constructor which is available for all JavaScript objects.

// Array.prototype.table = function() {
//    for (let index = 0; index < this.length; index++) {
//        return `${num}* ${index} = ${num*index}`;
// }
// var table2 =[1,2,3,4,5];
// console.log(table2.table);

// The push() method adds new items to the end of an array, and returns the new length.
// Note: The new item(s) will be added at the end of the array.
// Note: This method changes the length of the array.
// var table2 =[1,2,3,4,5];
// table2.push('6');
// // console.log(table2);

// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// // The return value of the function is stored in an accumulator (result/total).
// var table2 =[1.7,2.4,9,3.3,4.2,5.9];
// function add1(total,num) {
//     return total + Math.round(num);
// }
// var roundSum = table2.reduce(add1,0);
// console.log(roundSum);

//another use of reduce method is to accumulate 
//it takes 3 aurguments -- accumulator,currentValue,currentIndex,source Array()=>{}

// let num = [4,6,7];
// let sum = num.reduce((accumulator,currentValue)=>{
   
//     return accumulator += currentValue;
// }); 
// console.log(sum);

// // //agar hame koi aur value add karani hain joh ki pata nahi hain hame abhi toh hum {} ke side main , ke sath value de denge.
// let num = [4,6,7];
// let sum = num.reduce((accumulator,currentValue)=>{
    
//     return accumulator += currentValue;
// },7); 
// console.log(sum);

// conversion of 2D,3D array into 1D array 
// const arry = [
//     ['num11','num12'],
//     ['num21','num22'],
//     ['num31','num32'],
// ];
// console.log("this is 2D array => "+arry);
// let FlatArry = arry.reduce((accum,currVal)=>{
//     return accum.concat(currVal);
// })
// console.log('this is flat array => '+FlatArry);

//reverse-->
// // console.log(frds.reverse());
// The shift() method removes the first item of an array.
// Note: This method changes the length of the array.
// Note: The return value of the shift method is the removed item.
// var table2 =[1.7,2.4,9,3.3,4.2,5.9];
// table2.shift();
// console.log(table2);

// The slice() method returns the selected elements in an array, as a new array object.
// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
// var table2 =[1.7,2.4,9,3.3,4.2,5.9];
// console.log(table2.slice(1,3));

// The some() method checks if any of the elements in an array pass a test (provided as a function).
// The some() method executes the function once for each element present in the array:
// If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
// Otherwise it returns false
// var table2 =[1.7,2.4,9,3.3,4.2,5.9];
// function overNumber(number) {
//     return number >= 2.0;
// }
// tableOutput = table2.some(overNumber)
// console.log(tableOutput);

// The sort() method sorts the items of an array.
// The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
// By default, the sort() method sorts the values as strings in alphabetical and ascending order.
// This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce an incorrect result when sorting numbers.
// You can fix this by providing a "compare function" (See "Parameter Values" below).

// var number = [1,2,3,4,5,9,8,7,10,17,16,14];
// // var comp = number.sort(function (a,b) {
// //     return a-b; //for ascending order 
// // });
// // console.log(comp);
// var comp = number.sort(function (a,b) {
//     return b-a; //for descending order 
// });
// console.log(comp);
// console.log("get the highest value of an array = "+comp[0]);
// console.log("get the lowest value of an array = "+comp[comp.length-1]);

//alphabetic sorting
// var letter = ['atish','man','goat','Bat'];
// console.log("ascending order = "+letter.sort());
// console.log("descending  order = "+letter.reverse());

// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.
// array.splice(index, howmany, item1, ....., itemX)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// The toString() method returns a string with all the array values, separated by commas.
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var str = fruits.toString();
// console.log(str);
// console.log(typeof(str));

// The unshift() method adds new items to the beginning of an array, and returns the new length.
// Note: This method changes the length of an array.
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift('lemon','water mellown');
// console.log(fruits);

// The valueOf() method returns the array.
// // This method is the default method of the array object. Array.valueOf() will return the same as Array.
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.valueOf());