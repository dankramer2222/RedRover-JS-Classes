// 6. Array push():
//    - Задание 6.1: Создайте массив `fruit` и используйте метод `push()`, чтобы добавить новый фрукт в конец массива.
//    - Задание 6.2: Напишите функцию `addNewItem`, которая принимает массив и новый элемент, и добавляет этот элемент в конец массива.

 const fruit = ["apple","orange","tomato","banana"];
// console.log(fruit.push("pineapple"))
// console.log(fruit);

function addNewItem(array){
     array.push("new fruit"); 
     return array;
}
console.log(addNewItem(fruit));