const hero = {
    fname: 'Batman',
    realName: 'Bruce Wayne',
    // enemy:"woldomort",
    address: {
        city: 'Gotham'
      }
  };

// destructuring, default value , alias name, 
const {fname,realName,enemy=["Joker"],fname:fullname} = hero;
console.log(fname,realName,enemy,fullname);

// nested obect destructuring 
const {address:{city:location}} = hero;
console.log(location);

// dynamic property name 
const prop = "realName";
const {[prop]:latestName} = hero;
console.log(latestName);

// rest operator - it is used to collect all the property after destructuring.
const hero2 = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    company: 'WayneCorp'
  };
  const { name, ...rest } = hero2;
console.log(rest);

