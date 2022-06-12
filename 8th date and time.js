//date and time object in js
// // 4 ways to create date object 
// new Date();
// new Date(year,month,day,hour,munutes,seconds,miliseconds);
// new Date(date string)

// new Date()
// //Date object are created with new Date() constructor
// // let cudDate = new Date();
// // console.log(cudDate);
// console.log(new Date().toLocaleString());  //to get perfect local time and date
// console.log(new Date().toString()); //te get date and time with GMT
// console.log(Date.now()); //gives date inmili second . it will count from 1 jan 1970

// var d = new Date(2019,11,12,10,30,59);
// console.log(d.toLocaleString()); ///to get date in specific time ;
// console.log(d.toUTCString()); ///to get date in GMT time ;
// console.log(d.toLocaleDateString()); ///to get date in specific date ;
// console.log(d.toLocaleTimeString()); ///to get date in specific time ;
// console.log(d.getMinutes());

// Date Methods
// const Da = new Date();
// console.log(Da.toLocaleString());
// console.log(Da.getDate());
// console.log(Da.getMonth());
// console.log(Da.getDay());
// console.log(Da.getFullYear());

// //how to set a date method 
// const Da2 = new Date();
// console.log(Da2.setDate(2012,5,8));
// console.log(Da2.toLocaleString());

// console.log(Da2.setMonth(5));
// console.log(Da2.getMonth());

// console.log(Da2.setDate(2012,5,8));
// console.log(Da2.getDay());

// // time Method
// const tim = new Date();

// console.log(tim.getTime());
// console.log(tim.getHours());
// console.log(tim.getMinutes());
// console.log(tim.getMilliseconds());

//set time 
const tim = new Date();

// console.log(tim.setTime(11,21,60,0));
// console.log(tim.setHours(24));/
// console.log(tim.setMinutes(22));
// console.log(tim.toLocaleString());

var dt = new Date();
console.log(dt.toLocaleTimeString()); //to see just time 
console.log(dt.toLocaleDateString()); //to see just date

console.log(dt.toLocaleString()); //to see Date and time 