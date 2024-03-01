// 3. Array at():
//    - Задание 3.1: Создайте массив `letters` и используйте метод `at()` для получения элемента массива по индексу.
//    - Задание 3.2: Напишите функцию `getElementAtIndex`, которая принимает массив и индекс в качестве аргументов и возвращает элемент массива по указанному индексу.
//     - Задание 3.3: Напишите  функцию, которая возвращает последний элемент переданного массива.

const letters = ["a","b","c","d","e"];
// console.log(letters.at(2));

// function getElementAtIndex(array){
//     return array.at()
// }
// console.log(getElementAtIndex(letters[3]));

function getElementAtIndex1(array1){
    return array1.at(-1)
}
console.log(getElementAtIndex1(letters));