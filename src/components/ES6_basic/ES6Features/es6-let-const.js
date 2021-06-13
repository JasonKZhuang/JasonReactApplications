var nameVar = "Jason";
var nameVar = "Peter";//define the save variable is not a good  one
console.log("NameVar", nameVar);

let nameLet = "Ann";
nameLet = "Julie"
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
    let petName = "Hal";
    return petName;
}
const petName = getPetName();

console.log("petName", petName);

//Arrow Functions
// ES5
let x = function (x, y) {
    return x * y;
}

// ES6
const z = (x, y) => x * y;

const A = (x, y) => { return x * y };