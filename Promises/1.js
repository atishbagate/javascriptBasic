/*
A promise is an object which can be returned synchronously from an asynchronous function.
 It will be in one of 3 possible states:

 Fulfilled:
 Pending:
 Rejected:



 */

 const timer = time => new Promise((resolve,reject)=> setTimeout(resolve("promise is resolved."),time));

 timer(3000)
 .then((val)=> console.log("Timer executeds --- "+val))
 .catch((err)=> console.log(" promise is rejected --- "+err))
 .finally(()=>console.log("Promise is closed"))
