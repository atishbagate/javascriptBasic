// Anagram Check
// ip = ('listen', 'silent')); // Output: true

const ip1 = "listen";
const ip2 = "silent";

function Sorting(impStr){
    for (let i = 0; i < impStr.length; i++) {
        for (let j= i+1; j < impStr.length; j++) {
            if(impStr[i] > impStr[j]){
               var x = impStr[i];
               impStr[i] = impStr[j];
               impStr[j] = x;
            }
        }   
    }
    return impStr;
}

 
function CheckAnagram(ip1,ip2){

    const ip1Arr = ip1.split('');
    const ip2Arr = ip2.split('');

    let sortedStr1 = Sorting(ip1Arr);
    console.log(sortedStr1);

    let sortedStr2 = Sorting(ip2Arr);
    console.log(sortedStr2);

    return sortedStr1.join() === sortedStr2.join();
    }
    

const op = CheckAnagram(ip1,ip2);
console.log(op
    
);


 