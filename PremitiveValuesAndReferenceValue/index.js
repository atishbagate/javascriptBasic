/*
this code and image shows how actually primitive values and reference values
stores in memory in js.

what is call stack - ( stores the primitive value ) and what is memory heap - ( stores the reference value )


*/

let lastName = "willams";
let oldLastName = lastName;
lastName = "David";
// here primitive types not changes. 
console.log(lastName,oldLastName);

const jass = {
    fname:"jass",
    lname:"wills",
    age:20
};
const afterJass = jass;
afterJass.age = 30;
// but here object changes for both of them. 
console.log("Before - ",jass);
console.log("After - ",afterJass);