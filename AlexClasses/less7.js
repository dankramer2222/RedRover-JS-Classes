// for loop
// for (let i = 0; i < 3; i++) {
//   console.log("this is for loop,going thru iteration: "+i);
// }

// // while loop
// let i = 0;
// while (i < 3) {
//   console.log("this is for loop,going thru iteration: " + i);
//   i++;
// }
// let i = 0;
// do{
//     console.log("do while loop: "+i);
//     i++
// }while(i<3)

//for in loop iterate over an object
// let obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//   console.log(
//     "For in loop going thru key: " +
//       key +
//       "this is value inside obj: " +
//       obj[key]
//   );
// }

//for of loop, iterate over an array
// let arr = ["a", "b", "c", "d", "e"];
// for (let value of arr) {
//   console.log("for of loop,this is value: " + value);
// }
// console.log(arr[1]);
// console.log(arr[arr.length - 1]);

//nested for loop
let letters = ["a", "b", "c"];
let numbers = [1, 2, 3];

for (let i = 0; i < letters.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (i === j) {
      console.log(
        `this is letter ${letters[i]} and this is number ${numbers[j]}`
      );
    }
  }
}
