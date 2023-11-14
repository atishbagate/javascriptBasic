console.log("Objexts in JS.");

// two ways to declare Object
// by object in singleton
// by object literals

// 1)
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
// const user  = Object.create(mainUser); 

// 2)
// by using normal curly braces 
// "square notation " - symbol
// const sym =  Symbol("User Symbole");
// const JsUser = {
//     name:"atish",
//     mobNo : 8912321,
//     address : "karve nagar, PUNE",
//     [sym]:sym,
//     listCity : ["pune","latur","hingoli"]
// };

// to access the values 
// console.log(JsUser.name);

// how to use Symbol in object 
// console.log(JsUser[sym]);
// console.log(typeof JsUser[sym]);
// console.log(JsUser);

// -----
// objects accessing values 
// JsUser.name = "ganu.."
// Object.freeze(JsUser);
// JsUser.name = "vaibhav";
// console.log(JsUser.name);

//adding functions in object 
// JsUser.greeting = function(){
//     console.log("hello Friends...");
// }
// JsUser.greettwo = function(){ 
//     console.log(`greet 2 funtion,..${this.name}`);
// };

// console.log(JsUser.greeting);


