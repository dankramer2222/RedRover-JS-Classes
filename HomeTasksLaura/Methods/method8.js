// 8. Array unshift():
//    - Задание 8.1: Создайте массив `cities` и используйте метод `unshift()`, чтобы добавить новый город в начало массива.
//    - Задание 8.2: Напишите функцию `addNewFirstElement`, которая принимает массив и новый элемент, и добавляет этот элемент в начало массива.
const cities = ["NewYork","Seattle","Chicago","Atlanta"];
// console.log(cities.unshift("Madison"));
// console.log(cities);

function addNewFirstElement(array,newElement){
    return array.unshift(newElement);
}

console.log(addNewFirstElement(cities,"Sakramento"));
console.log(cities);