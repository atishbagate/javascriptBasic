// A nested object is an object inside another object. This helps structure complex data logically.

// const person = {
//     name:"atish",
//     age:26,
//     addr:{
//         city:"pune",
//         code:203432
//     }
// }
// console.log(person);

// accesing nested object 
// console.log(person.addr);

// brackate notation
// console.log(person["addr"]["city"]);

// mmodefying nested object
// person.addr.city = "mumbai";
// console.log(person["addr"]["city"]);

// adding nested new property
// person.addr.state = "maharashtra";
// console.log(person.addr.state);

//deleting nested object
// delete person.addr;
// console.log(person);

//looping nested object
// for (const key in person.addr) {
//     console.log(`${key} : ${person.addr[key]}`);
// }
// object.entries()
// Object.entries(person.addr).forEach(([key,value]) => {
//     console.log(`${key}: ${value}`);
//     }
// )
//nested object with methods
const user = {
    name:"atish",
    contact:{
        email:"Atish@gmail.com",
        phone:"123-456-789",
        printContact(){
            console.log(`email : ${this.email}, phone: ${this.phone}`);
        }
    }
};
user.contact.printContact();

// handling deeply nested objects
console.log(user?.contact?.phone);

//copying nested object.
// Shallow Copy (Issue with Nesting)
// const newPerson = {...user};
// newPerson.contact.city = "pune";
// console.log(newPerson.contact.city);
// console.log(user.contact); 

