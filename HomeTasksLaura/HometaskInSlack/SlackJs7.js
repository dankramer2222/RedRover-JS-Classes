// Задача 07. Что произойдет при выполнении следующего кода?
// let numbers = [1, 2, 3, 4, 5];
// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         count++;
//     }
// }

// console.log(count);
// 1) Выведет в консоль число 3.
// 2) Выведет в консоль число 5.
// 3) Выведет в консоль число 2.
// 4) Выведет в консоль число 4.
// Выберите один ответ: 3) Выведет в консоль число 2.

let numbers = [1, 2, 3, 4, 5];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}
console.log(count);