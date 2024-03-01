// 11. Array copyWithin():
//    - Задание 11.1: Создайте массив `numbers` и используйте метод `copyWithin()`, чтобы скопировать элементы из одной части массива в другую.
//    - Задание 11.2: Напишите функцию `copyWithinExample`, которая принимает массив и копирует часть массива внутри него самого, смещая и перезаписывая существующие элементы, используя метод `copyWithin()`.

const numbers = ['London',"Moskow","Paris","Erevan","Madrid"];
// console.log(numbers.copyWithin(1,4));

function copyWithinExample(array){
    return array.copyWithin(1,4);
}
console.log(copyWithinExample(numbers));