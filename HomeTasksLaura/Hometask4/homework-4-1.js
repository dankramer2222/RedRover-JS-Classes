//Задача.
// Создать функцию  getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

// console . log ( "Hello world ! " ) ; 
// console . log("! Hola mundo ! " ); 
// console . log ( "Hallo wereld ! " ) ; 
// console . log ( "Пpивeт мир!" ) ;
// Создать декларируемую функцию (function Declaration) и функцию выражение (function Expression).

function getGreetings(){
    return [
        "Hello world!",
        "! Hola mundo!",
        "Hallo wereld!",
        "Пpивeт мир!"
    ];
}

console.log(getGreetings());

// const getGreetings = function(){
//     return [
//         "Hello world!",
//         "! Hola mundo!",
//         "Hallo wereld!",
//         "Пpивeт мир!"
//     ];
// }
// console.log(getGreetings());

// const greetings = {
//     "english": "Hello world!",
//     "spanish": "! Hola mundo!",
//     "german": "Hallo wereld!",
//     "russian": "Пpивeт мир!"
// };

// function getGreetings() {
//     return Object.values(greetings);
// }

// console.log(getGreetings());
