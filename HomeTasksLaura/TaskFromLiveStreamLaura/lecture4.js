// function  addA(Astring){
//     Astring += "a";
//     return Astring;
// };

// console.log(addA("JavaScript"))

// function getDate(){
//     let rightNow = new Date();
//     console.log(rightNow.toDateString());
// };

// getDate();

// function getHi(){
//     return 'hello!'
// }
// let Hi = getHi();
// console.log(Hi)

// function getCircle(){
//     let radius = 12;
//     return 2 * Math.PI * radius ** 2;
// }

// console.log(getCircle());

// function addNumbers(numbersToAdd){
//     let sum = 0;
//     for (let i = 0; i < numbersToAdd.length; i++){
//         sum += numbersToAdd[i];
//     }
//     return sum;
// }

// let numbers = [1, 2, 3, 4];
// console.log(addNumbers(numbers)); // Output will be 10

// function myTacos(meat,produce){
//     //
// };

// myTacos("beef","onions")

function welcome (yourName){
    if (typeof yourName === 'undefined'){
        yourName ='friend';
    };
    console.log(`Hello, ${yourName}`);
}

welcome();