// spread is to destructure multiple elements into array 
const arr1 = [1,2,3,4];
const arr2 = [6,7,8,9];
const combine = [...arr1,...arr2];
console.log(combine);

// rest on string 
const str = "Tony Stark";
console.log([...str]);
// rest in object 
const obj = {
    rest:[...arr1,...arr2],
    val:[...str]
}
console.log(obj);
// merge object 
const user1 = {
    name: 'Jen',
    age: 22,
};

const user2 = {
    name: "Andrew",
    location: "Philadelphia"
};

const mergedUsers = { ...user1, ...user2 };
console.log(mergedUsers);