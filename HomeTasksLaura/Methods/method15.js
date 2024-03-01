
// 15. Array slice():
//    - Задание 15.1: Создайте массив `letters` и используйте метод `slice()`, чтобы выбрать только определенные буквы из массива.
//    - Задание 15.2: Напишите функцию `getSubarray`, которая принимает массив и возвращает подмассив, используя метод `slice()`, чтобы выбрать элементы из определенного диапазона индексов.

const letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters); 
console.log(letters.slice(1, 3)); 


function getSubarray(array, startIndex, endIndex) {
    return array.slice(startIndex, endIndex);
}

console.log(getSubarray(letters, 1, 3)); // Выводим подмассив, начиная с индекса 1 и заканчивая индексом 2 (не включая 3)
