const arr2 = [
    { no: 1 }, { no: 2 }, { no: 3 }, { no: 4 }, { no: 5 }, { no: 6 }
];

const result = arr2.map((item) => {
    if (item.no/2 > 2) {
        return item.no*2
    }
    return item.no;
})

console.log("result ", result);