// Задача 1 Напишите последовательность команд, в результате которых
// переменные х и у обменяются своими значениями. Выведите значения переменных х и у в консоль.
// Используйте 2 способа
// Способ 1: Используя временную переменную

let x = 5;
let y = 10;

let temp = x;
x = y;
y = temp;

console.log("Способ 1:");
console.log("x =", x); // Ожидаемое значение: 10
console.log("y =", y); // Ожидаемое значение: 5

// Способ 2: Используя деструктуризацию массива
let a = 15;
let b = 20;

[a, b] = [b, a];

console.log("Способ 2:");
console.log("a =", a); // Ожидаемое значение: 20
console.log("b =", b); // Ожидаемое значение: 15