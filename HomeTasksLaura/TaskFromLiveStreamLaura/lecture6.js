// const obj = {}
// const obj1 = new Object();
// из обьекта можно создать другой обьект с помощью метода QA

// console.log(typeof obj);

// objectName.property
// obj.name = "John";

// obj['age'] = 25;

// console.log(obj['name']);

//arr[0] ... arr[n]
// console.log(obj);

//for of, for inn

// for (key in obj){
//     console.log(key);
// }

// for(key of obj){
//     console.log(key);
// }

// TypeError: obj is not iterable

// for (let i=0; i<obj.length; i++){
//     console.log(obj);
// }

// obj.name = {
//     firstName:"John",
//     lastName:"Doe"
// };
// console.log(obj.name)

// obj.name.fullName = this.firstName +" "+ this.lastName
// console.log(obj.name.fullName)
//---------------------------------------------------------------------------------------------------------------
// let obj = {
//     name: {
//         fullName: ""
//     },
//     firstName: "John",
//     lastName: "Doe",
//     setFullName: function() {
//         this.name.fullName = this.firstName + " " + this.lastName;
//     }
// };

// obj.setFullName();
// console.log(obj.name.fullName); // Выведет: John Doe


// const myArr = Object.values(obj);

// console.log(myArr)


// //получение обьекта в виде строки
// let myString = JSON.stringify(obj);
// console.log(myString)
// console.log(typeof myString)

function Person(first, last, age , eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myMother = new Person("Marry","Doe","38","green");
const myFather = new Person("John","Doe","35","blue");
console.log(myFather)
console.log(myMother)

myFather.nationality = "English";
console.log(myFather)