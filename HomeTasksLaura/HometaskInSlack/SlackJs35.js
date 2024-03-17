// Задача 35. Подсчет символов в строке.
// // Конструктор StringJS
function StringJS(value) {
  this.value = value;

  this.countCharacters = function () {
    return this.value.length;
  };
}

let str = "testing";
// Вопрос:
// "Как можно подсчитать количество символов в строке с использованием конструктора StringJS?";
// Варианты ответов:
//     1.  new StringJS(str).length();
//     2.  let strObj = new StringJS(str); strObj.count();
//     3.  new StringJS(str).countCharacters();
//     4.  str.size(this.countCharacters());
//     Выберите один ответ: 3)

// Правильный ответ: 3. new StringJS(str).countCharacters();

// let strObj = new StringJS(str);

// // console.log(new StringJS(str).length()); // TypeError: (intermediate value).length is not a function
// // console.log(strObj.count()); // TypeError: strObj.count is not a function
// console.log(new StringJS(str).countCharacters());  // 7
// // console.log(str.size(this.countCharacters()));  // TypeError: this.countCharacters is not a function
// 1. new StringJS(str).length();: Этот вариант неверен, потому что `length` в этом контексте не является методом, определенным в конструкторе `StringJS`. Кроме того, строка `str` внутри объекта `StringJS` не является методом, поэтому вызов `length()` вызовет ошибку.
// 2. let strObj = new StringJS(str); strObj.count();: Этот вариант также неверен, потому что метод `count()` не определен в конструкторе `StringJS`. Вызов этого метода приведет к ошибке.
// 3. new StringJS(str).countCharacters();: Этот вариант правильный. Мы создаем новый объект `StringJS` с переданной строкой `str`, затем вызываем метод `countCharacters()`, который определен в конструкторе `StringJS`, чтобы подсчитать количество символов в строке.
// 4. str.size(this.countCharacters());: Этот вариант неверен, потому что метод `size()` не является стандартным методом для строк в JavaScript. Кроме того, `this.countCharacters()` также вызовет ошибку, так как `this` в данном контексте не указывает на объект `StringJS`.







