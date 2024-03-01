// 14. Array toSpliced(): 
//     - Задание 14.1: Создайте массив `months` и используйте метод `splice()`, чтобы удалить несколько элементов из массива и вставить новые элементы на их место.
//    - Задание 14.2: Напишите функцию `removeElementsSafely`, которая принимает массив и использует метод `toSpliced()`, чтобы удалить элементы из массива по заданному индексу и количеству элементов.
// Создаем массив months
const months = ["august", "september", "october", "november", "december"];

// Используем метод toSpliced()
console.log(months);
console.log(months.toSpliced(1, 2, "may", "april"));

// Напишем функцию removeElementsSafely
function removeElementsSafely(array, start, deleteCount, ...items) {
    return array.toSpliced(start, deleteCount, ...items);
}

console.log(removeElementsSafely(months, 1, 2, "may", "april"));