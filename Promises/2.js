console.log("promises blog.");
/*
Promises gives us the option to perform an asynchronous computation in easy and simpler way.
previous to Promises callbacks were used which leads to callbackHell,
to overcome this Problem Promises were introduced.  
short example of promises - 
*/

const timer = time => new Promise((resolve,reject)=> setTimeout(resolve("promise is resolved."),time));

 timer(3000)
 .then((val)=> console.log("Timer executeds --- "+val))
 .catch((err)=> console.log(" promise is rejected --- "+err))
 .finally(()=>console.log("Promise is closed"))
 /*
 Promise consist of 3 state of execution - 
 1. Before the result is ready, the Promise is pending.
 2. If a result is available, the Promise is fulfilled.
 3. If an error happened, the Promise is rejected.

 note - A Promise is settled if inside function logic execute. (if it is either fulfilled or rejected). only once promise is settled.
 */

 /*
 Inside promise  There are two operations for changing the state. After you have invoked either one of them once.

    1. resolve - promise has been executed properly.
    2. reject - promise has been rejected.
 */

/*
How to consume the promises - 
    .then() block handle the resolved output by promises. 
    .error() block catch the error if rejected state send by promise.
    .finally() block execute insipite of resolve or reject of promise.

    note - promise chaining is the concept where we can handle the resolved output by promises. in multiple .then blocks. 
            .then()
            .then()
            .then()
    */

/*
    what if we have multiple promises - 
    there is methods provided by promises to handle all at once.
    1. Promise.all()  -  it is static method takes an iterable of promises as input and returns a single Promise when all promises are fulfilled.
*/
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log("all promises values - ",values);
})

/*
    2. Promise.allSettled() - it is static method takes an iterable of promises as input and returns a single Promise when all promises are settled. ( either it may resolve or reject. )
*/
const promise4 = Promise.resolve(4);
const promise5 = Promise.resolve(5);
const promise6 = Promise.reject(6);
Promise.allSettled([promise4,promise5,promise6]).then((values)=>{
    console.log("all promises values - ",values);
})
/*
    3. Promise.any() = static method takes an iterable of promises as input and returns a single Promise. 
    This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 
   note -  if any one of the rejected promise come then also it will give output.
*/
const promise7 = Promise.reject(0);
const promise8 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise9 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
Promise.any([promise7,promise8,promise9]).then((values)=>{
    console.log("all promises values - ",values);
})
/*
    3. Promise.race() = static method takes an iterable of promises as input and returns a single Promise. 
    This returned promise settles with the eventual state of the first promise that settles
    note -  if any one of the rejected promise come then also it will give error.
*/ 
// const promise11 = Promise.reject(0);
const promise11 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise12 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
Promise.race([promise11,promise12]).then((values)=>{
    console.log("all promises values - ",values);
})
/*
basically both below used to This function flattens nested layers of promises.
Promise.resolve() - return promise resolve with value. 
Promise.reject() - return the promise rejected.
*/

/*
 Advantages of promises :

    1. Easy to Read Code and maintain.
    2. Advantage over callbacks.
    3. can handle multiple asynchronus tasks.

 Disadvantages of promises :

    1. Complex Error Handling.
    2. For beginners it will create confusion.
    3. Hard Debugging error.

*/


/*
At the end - Promises is Great Tool to handle Async Tasks. By using Async await we can handle Promises lot easy way.
*/