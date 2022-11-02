function Prod(arg1,arg2){
    this.arg1 = arg1;
    this.arg2 = arg2;
}

function Prod2(in1,in2){
    Prod.call(this,in1,in2);
    this.cata = 'food';
}
console.log(new Prod2('cheese',5).cata);
