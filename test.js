const arr = ["ab","cd","ef","gh","ij","kl","mn","opq","rs","uvw","xy","z"];
 
// question - find the prime number - 
const numArr = [1,2,4,2,5,9,4,2,10,3,18];

 function Bubble(arr){

  let i,j,temp;

  for(i=0; i< arr.length; i++){
    for(j=i+1;j<arr.length;j++){
      if(arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
 }

 function Sorting(arr){
  
    let i,j,temp; 

    for(i=0;i<arr.length;i++){
      for(j=i+1;j < arr.length; j++){

        if(arr[i] > arr[j]){
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
 };

function FindPrime(arr){
  let primeArr = [];
  const sorted = arr.sort((a,b)=> a-b);
  const bubbleSort = Bubble(arr);
  const bubbling = Sorting(arr);
  console.log(bubbling);

  const uniqueArr = [...new Set(sorted)];
  console.log(uniqueArr);

  const primeCal = (val) => (val > 1 && val%2 === 0) ? primeArr.unshift(val) : null;
  console.log(uniqueArr.map(primeCal));
  console.log(primeArr);

};

FindPrime(numArr);