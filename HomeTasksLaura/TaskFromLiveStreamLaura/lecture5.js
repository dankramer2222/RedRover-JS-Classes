const arr1 = [1,2,3];
const arr2 = arr1;
arr1.push('a');
console.log(arr1);
console.log(arr2);

let obj = {};
const guitar = {};

console.log(typeof obj);

obj = 'hello';

console.log(typeof obj);

// guitar = 15 
// console.log(typeof guitar); //erorr 

const meta ={
    for:1,
    return:2,
    let:3,
}
console.log(meta.for + meta.return + meta.let);

const personGirl = new Object;

personGirl.feet = 2;
personGirl.name = 'Sandy';
personGirl.hair = 'black';

console.log(personGirl)
console.log("------------------------")
let person = {}
person.firstName = "Bob"
console.log(person);