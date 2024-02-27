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