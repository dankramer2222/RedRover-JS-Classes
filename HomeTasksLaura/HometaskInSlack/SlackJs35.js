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
//     Выберите один ответ.
// / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
