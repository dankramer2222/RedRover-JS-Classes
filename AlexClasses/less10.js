import dog from "./10.dog.json" assert { type: "json" };

// console.log(dog);

// convert json in a string

let dogString = JSON.stringify(dog);
console.log(dogString);

// convert json string in an object
let dogObj = JSON.parse(dogString);
console.log(dogObj);
