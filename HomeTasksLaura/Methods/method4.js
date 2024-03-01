// 4. Array join():
//    - Задание 4.1: Создайте массив `words` и используйте метод `join()`, чтобы объединить его элементы в строку с пробелами между ними чтобы получилось предложение.
//    - Задание 4.2: Напишите функцию `arrayJoin`, которая принимает массив строк и объединяет их в одну строку с заданным разделителем.
//    - Задание 4.3: Создайте из массива ["In this syllabus, the following five test levels are described:", "component testing,", "component integration testing,", "system testing,", "system integration testing,", "acceptance testing."] следующий текст:  
//"In this syllabus, the following five test levels are described: the component testing, the component integration testing, the system testing, the system integration testing, the acceptance testing."

// const words = ["I","love","JavaScript"];
// // console.log(words.join(" "));

// function arrayJoin(array){
//     return array.join(" ")
// }
// console.log(arrayJoin(words))

const text = ["In this syllabus, the following five test levels are described:", "component testing,", "component integration testing,", "system testing,", "system integration testing,", "acceptance testing."];
function arrayJoin(array){
    return array.join(" the ")
}
console.log(arrayJoin(text));