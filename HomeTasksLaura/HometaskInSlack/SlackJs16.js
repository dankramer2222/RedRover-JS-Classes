// Какой результат работы кода?
function greet(name) {
    if (name === undefined) {
      return "Hello, stranger!";
    } else {
      return "Hello, " + name + "!";
    }
  }
  
  console.log(greet());
//   Варианты ответов:
//   1. "Hello, stranger!"
//   2. "Hello, undefined!"
//   3. Ошибка: "name is not defined"
//   4. Ошибка: "greet() takes exactly 1 argument (0 given)"

//   ответ:1)
// Верный Ответ: 1. "Hello, stranger!"
// Функция `greet()` проверяет, передан ли аргумент `name`. Если аргумент не передан (то есть `name` равно `undefined`), она возвращает строку "Hello, stranger!". Таким образом, когда вызывается `console.log(greet());`, без аргумента, функция возвращает "Hello, stranger!".