let input2 = "smarte india pvt ltd";
// op =  o/p :- Ltd Pvt India Smarte
function reverse(str){
    const revStr = str.split(" ").reverse();
    console.log(revStr);
   const op =  revStr.map((word)=> 
        {
            const wrd = word.split('');
            return wrd[0].toUpperCase()+ wrd.slice(1).join("");
        }
    );
   console.log(op.join(' '));
};

reverse(input2);