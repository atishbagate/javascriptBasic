// i/p :- smarte india pvt ltd
// o/p :- Ltd Pvt India Smarte
let input = "smarte india pvt ltd";

// create string to array 
let arrayList = input.split(" ");
console.log(arrayList);

let op = [];

// to reverse specific word 
const revertStr = (value) => {
    let word = "";
   for (let i = value.length-1; i >= 0; i--) {
    console.log(value[i]);
    word += value[i];
    //I will capitalize the fist letter here.
    }
    return word;
}
console.log(revertStr(arrayList[0]));

// push the reverserd words in array 
for (let j = 0; j < arrayList.length; j++) {
    let reverseWord = revertStr(arrayList[j]);
    op.push(reverseWord);
};
console.log(op);

// convert array to string 
const reverseString  = () => {
    let outputString = "";
        for (let k = 0; k < op.length; k++) {
            console.log(op[k]);
            outputString += `${op[k]} `;
    }
    console.log(outputString);
    return outputString;
}
const revArr = reverseString();
console.log(revArr);
 