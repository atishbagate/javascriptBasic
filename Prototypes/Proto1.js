console.log("Prototype");

//  def -> it is property which is constructor to an object,
// this property is added to the function when new instance is being cerated

function Family (name,city){
    let info = Object.create(Family.prototype);
    info.name = name,
    info.city = city

    return info;
}
 
Family.prototype.data = function (work){
    console.log(`Family Name ${this.name} and Lives in ${this.city}`);
    this.city += work
}

let newFamily = Family("dev","akola");
console.log("family ",newFamily.data());