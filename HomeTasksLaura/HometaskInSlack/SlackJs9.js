// Задача 09
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {
        sum += numbers[i];
    }
}

console.log(sum);
// Каков будет результат выполнения данного кода?
// 1) 9
// 2) 6
// 3) 3
// 4) 15
// Выберите один ответ:  2)