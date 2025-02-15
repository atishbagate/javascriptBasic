// Input: str = “i.like.this.program.very.much” 
// Output: str = “much.very.program.this.like.i” 

const str = "i.like.this.program.very.much";

function revStr(str){
    let revStr = str.split(".").reverse().join(".");
    console.log(revStr);
}
revStr(str);