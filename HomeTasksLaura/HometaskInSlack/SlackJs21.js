// Задача 21. О Ключевом слове this в объектах JS.
// "Что будет значением 'this' внутри функции, если она вызвана как метод объекта?"
const person = {
    name: 'John',
    age: 30,
    sayHello: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

person.sayHello(); 
//  Варианты ответов:
//     1. "Глобальный объект window",
//     2. "Объект, для которого вызвана функция",
//     3. "Прототип объекта, для которого вызвана функция",
//     4. "Undefined"
// Выберите один ответ.