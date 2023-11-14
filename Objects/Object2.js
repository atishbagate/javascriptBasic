console.log("Quokka");
// object using singleton 

// const user  = {};
// user.id = "123abc"
// user.name = "John Smith"
// user.isStudent = true

// console.log("user - ",user);

// const regularUser = {
//     email:"John@example.com",
//     fullName : {
//         userFullName : {
//             fname:"John",
//             lname:"smith"
//         }
//     }
// }
// // many objcts 
// console.log("regular user - ",regularUser.fullName.userFullName.lname);

// adding more than 2 object in one result obj 
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

// by using assign operator 
const res = Object.assign({}, obj1, obj2,obj3);
console.log("conbined object...",res);

// by using spread operator 
const res2 = {...obj1, ...obj2,...obj3};
console.log("conbined spread object...",res2);

const user  = {};
user.id = "123abc"
user.name = "John Smith"
user.isStudent = true

// getting keys and values from object 
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("name"));

// object destructuring

const userDetails = {
    name:"sumit",
    age : 20, 
    college: {
        name:"PICT",
        city:"pune",
        pin:202091
    }
};
const {name,age,college:collegeAddr} = userDetails;

console.log(`name is ${name} and age is ${age} and college is ${collegeAddr.city} and pin is ${collegeAddr.pin}`);