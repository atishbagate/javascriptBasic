// string sorting  - normal sorting

const str = "abcd";

function Sort(str){

    for( let i = 0; i < str.length; i++){
 
        for( let j = i+1; j < str.length; j++){

            if(str[i] > str[j]){
                var tmp = str[i];
                str[i] = str[j];
                str[j] = tmp;
            }
        }
    }
    return str;
}

const op = Sort(str.split('')); 
console.log(op);
