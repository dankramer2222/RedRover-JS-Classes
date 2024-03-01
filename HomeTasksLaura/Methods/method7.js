// 7. Array shift():
//    - Задание 7.1: Создайте массив `names` и используйте метод `shift()`, чтобы удалить первый элемент из него.
//    - Задание 7.2: Напишите функцию `removeFirstElement`, которая принимает массив и удаляет первый элемент из него.

const names = ["Danila","Olga","Irina","Oleg","Igor"]
// console.log(names.shift());
// console.log(names);

function removeFirstElement(firstEl){
    return firstEl.shift();
}
console.log(removeFirstElement(names));
console.log(names);