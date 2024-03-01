// 5. Array pop():
//    - Задание 5.1: Создайте массив `items` и используйте метод `pop()`, чтобы удалить последний элемент из него.
//    - Задание 5.2: Напишите функцию `removeLastElement`, которая принимает массив и удаляет последний элемент из него.

const items = ["apple","orange","tomato"];
console.log(items.pop());
console.log(items);

function removeLastElement(array){
    return array.pop();
}
console.log(removeLastElement(items));
console.log(items);
