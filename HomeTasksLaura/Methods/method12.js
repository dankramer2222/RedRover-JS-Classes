// 12. Array flat():
//    - Задание 12.1: Создайте массив `nestedArray` с вложенными массивами и используйте метод `flat()`, чтобы преобразовать его в одномерный массив.
//    - Задание 12.2: Напишите функцию `flattenArray`, которая принимает массив, содержащий вложенные массивы, и использует метод `flat()`, чтобы "сплющить" массив до одномерного массива.
// const nestedArray = [['London',"Moskow"],["Paris","Erevan","Madrid"],[1,2,3,4,5]];
// let nestedArray1 = nestedArray.flat();
// console.log(nestedArray1);


// function flattenArray(nestedArray){
//     return nestedArray.flat()
// }
// console.log(flattenArray(nestedArray)); 
const nestedArray = [['London',"Moskow"],["Paris","Erevan","Madrid"],[1,2,3,4,5]];
let nestedArray1 = nestedArray.flat().join(', '); // Используем flat() без аргументов и join() для объединения в строку
console.log(nestedArray1);


function flattenArray(nestedArray){
    return nestedArray.flat().join(', '); // Также используем flat() без аргументов и join() для объединения в строку
}
console.log(flattenArray(nestedArray)); 
