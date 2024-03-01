// 13. Array splice():
//    - Задание 13.1: Создайте массив `fruits` и используйте метод `splice()`, чтобы удалить несколько элементов из массива и вставить новые элементы на их место.
//    - Задание 13.2: Напишите функцию `removeElements`, которая принимает массив и использует метод `splice()`, чтобы удалить элементы из массива по заданному индексу и количеству элементов.
//splice takes 3 parametres(index el-t which we are deleted,how many elements we are put,element)
const fruits = ["apple","orange","banana","strawberry","watermelon"];
// console.log(fruits)
// console.log(fruits.splice(1,3,"pear"));
// console.log(fruits);

function removeElements(array,start,del,el){
    return array.splice(start,del,el);
}
console.log(removeElements(fruits,1,3,"pear"))
console.log(fruits);