// 9. Array delete(): (Нет такого метода в стандартном API JavaScript)

// два задания с использованием оператора `delete` для массива:


//    - Задание 9.1. Удаление элемента по индексу:
//    Напишите функцию `removeItemByIndex`, которая принимает массив и индекс элемента, который нужно удалить, и использует оператор `delete`, чтобы удалить элемент с указанным индексом из массива. 

//    - Задание 9.2. Очистка массива:
// Напишите функцию `clearArray`, которая принимает массив и использует оператор `delete`, чтобы удалить все его элементы и сделать массив пустым.
const array = ["NewYork","Seattle","Chicago","Atlanta"];
console.log(array);
// function removeItemByIndex(array,i){
//      delete array[i];
//      return array;
// }
// console.log(removeItemByIndex(array, 2));

function clearArray(array){
    for (let i=0;i<array.length;i++){
        delete array[i];
        console.log("element have been deleted");
    }
}
console.log(clearArray(array));
