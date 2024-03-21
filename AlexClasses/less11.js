// // function declaration
// function greet() {
//   console.log("Sup");
// }
// greet();

// function hello(name) {
//   console.log(`Hello ${name}`);
// }
// //value provided is argument
// hello("Dan");

// //anonymos functions
// let anon = function () {
//   console.log("I'm anonymos");
// };
// anon();

// //arrow functions
// let sayHello = () => {
//   console.log("Hey an arrow function");
// };
// sayHello();
//calc
function add(a, b) {
  return a + b;
}
let substract = (a, b) => {
  return a + b;
};

let multiply = (a, b) => a * b;

let devided = function (a, b) {
  if (a !== 0) {
    return a / b;
  } else {
    return "cannot devide by 0";
  }
};
console.log(add(10, 5));
console.log(substract(10,5));
console.log(multiply(10,5));
console.log(devided(10,2));