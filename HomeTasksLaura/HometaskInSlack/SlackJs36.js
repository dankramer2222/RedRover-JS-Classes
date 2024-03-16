// Задача 36. Возможноли делегированием метода или проксированием метода в объектах JS?

// Объект John
let john = {
  name: "John",
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

// Создание другого объекта Alice
let anotherPerson = {
  name: "Alice",
  age: 28,
  greet: john.greet,
};

console.log(anotherPerson.greet());
//  Вопрос:
// Какой будет результат вызова метода greet у объекта anotherPerson?
// Варианты ответов:
// 1. "Hello, my name is Alice and I am 28 years old."
// 2. "Hello, my name is John and I am 30 years old."
// 3. TypeError: anotherPerson.greet is not a function
// 4. "Hello, my name is undefined and I am undefined years old."
// Выберите один ответ.
// / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
