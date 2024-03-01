// 2. Array toString():
//    - Задание 2.1: Создайте массив `colors` с несколькими цветами и используйте метод `toString()`, чтобы преобразовать его в строку.
//    - Задание 2.2: Напишите функцию `arrayToString`, которая принимает массив чисел в качестве аргумента и возвращает строку, представляющую этот массив.
const colors = ["yellow","green","red","blue"];
console.log(colors.toString());
console.log("*------------------------------*")
function arrayToString(array){
    return array.toString();
}
console.log(arrayToString(colors))