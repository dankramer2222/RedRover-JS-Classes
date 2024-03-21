// // array with three elements
let colors = ["red", "green", "blue"];
// console.log(colors[0]);
// let green = colors[1];
// console.log(green);
// colors[1] = "yellow";
// console.log(colors);

//creating an empty array
// let fruits = [];
// fruits.push("apple");
// fruits.push("banana");
// fruits.push("peach");
// console.log(fruits[1]);

// //loop thru array
let numbers = [1, 2, 3, 4, 5];
// //for loop
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// let evenNum = numbers.filter((i) => i % 2 == 0);
// console.log(evenNum);

// newColors = colors.forEach(function (color) {
//   console.log(color);
// });

// //join
// let words = ["hello", "world"];
// let sentence = words.join(' ');
// console.log(sentence);

// //slice
// let num = [0, 1, 2, 3, 4, 5, 6];
// let slicednum = num.slice(0,4)
// console.log(slicednum);

// create two-dimensional array

let matrix = [
  [1, 2, 3], //0
  [4, 5, 6], //1
  [7, 8, 9], //2
];
// let firstRow = matrix[0][0];
// console.log(firstRow);
// console.log(matrix[2][1]);

// loop through two dimensional array

for (let i = 0; i < matrix.length; i++) {
  //loop thru rows
  for (j = 0; j < matrix[i].length; j++) { //loop thru columns

    console.log(matrix[i][j]);
  }
}
