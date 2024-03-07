// const arr1 = [1,2,3];
// const arr2 = arr1;
// arr1.push('a');
// console.log(arr1);
// console.log(arr2);

// let obj = {};
// const guitar = {};

// console.log(typeof obj);

// obj = 'hello';

// console.log(typeof obj);

// // guitar = 15 
// // console.log(typeof guitar); //erorr 

// const meta ={
//     for:1,
//     return:2,
//     let:3,
// }
// console.log(meta.for + meta.return + meta.let);

// const personGirl = new Object;

// personGirl.feet = 2;
// personGirl.name = 'Sandy';
// personGirl.hair = 'black';

// console.log(personGirl)
// console.log("------------------------")
// let person = {}
// person.firstName = "Bob"
// person.lastName = 'Smith'
// console.log(person);
// console.log("_____________________");
// let fullName = person.firstName + " " +person.lastName
// console.log(fullName)
// console.log("_____________________");
// let key ="lips"
// person[key] = 2;
// console.log(person);

// console.log("_____________________");

// const personBoy = {
//     fullName:{
//         firstName:'John',
//         lastName:'Davis'    
//     },
//     age:20,
// }
// console.log(personBoy)

// console.log("_____________________");

// delete personBoy.age
// console.log(personBoy.age)

// console.log("_____________________");

// let sandwich = {
//     meat:"",
//     cheese:"",
//     bread:"",
//     condiment:"",

//     makeSandwich: function(meat, cheese, bread, condiment){
//         sandwich.meat = meat;
//         sandwich.cheese = cheese;
//         sandwich.bread = bread;
//         sandwich.condiment = condiment;

//         let mySandwich = sandwich.bread + " " + sandwich.meat + " " + sandwich.condiment + " " + sandwich.cheese;

//         return mySandwich;
//     },

// };
// console.log(sandwich.makeSandwich("brown","ham","parmesan","rome tomatoes"));

// let sandwich = {
//     meat:"",
//     cheese:"",
//     bread:"",
//     condiment:"",

//     makeSandwich: function(meat, cheese, bread, condiment = this.condiment){
//         this.meat = meat;
//         this.cheese = cheese;
//         this.bread = bread;
//         this.condiment = condiment;

//         let mySandwich = this.bread + " " + this.meat + " " + this.condiment + " " + this.cheese;

//         return mySandwich;
//     },

// };
// console.log(sandwich.makeSandwich("brown","ham","parmesan","rome tomatoes"));

//arrow js
// function myFunction(theObject){
//     theObject.make = "Tayota"
// };
// const myCar = {
//     make:"Honda",
//     model:"Accord",
//     year:1998
// }

let x,y;
x = myCar.make;

myFunction(myCar);

y = myCar.make;

console.log(y)

let carFunc = function (theObject){
    theObject = "Niva";
}

carFunc(myCar);
console.log(myCar)