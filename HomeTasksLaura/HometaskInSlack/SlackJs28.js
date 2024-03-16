// Задача 28.
// Конструкторы в JavaScript - это функции, которые используются для создания и инициализации объектов. Они определяют свойства и методы, которые будут у объектов, созданных с их помощью.
// В JavaScript нет четкого различия между функциями и конструкторами. Когда вы создаете функцию и используете ее с оператором new, она становится конструктором. Внутри конструктора this ссылается на новый созданный объект.
// // Конструктор, создающий объект с методами для работы со строками
function StringProcessor() {}

StringProcessor.prototype.countOccurrences = function (str, substring) {
  let count = 0;
  let index = str.indexOf(substring);

  while (index !== -1) {
    count++;
    index = str.indexOf(substring, index + 1);
  }
  return count;
};

// Создание экземпляра объекта StringProcessor
const stringProcessor = new StringProcessor();

// Использование метода countOccurrences
const inputString = "abababab";
const substringToCount = "ab";
const occurrencesCount = stringProcessor.countOccurrences(
  inputString,
  substringToCount
);
console.log(occurrencesCount);

// Вопрос: Какую функцию выполняет метод `countOccurrences` в конструкторе `StringProcessor`?
// 1. Он проверяет, существует ли заданная подстрока в строке.
// 2. Он выполняет сложение двух строк и возвращает результат.
// 3. Он подсчитывает количество вхождений заданной подстроки в строку.
// 4. Он преобразует строку к нижнему регистру и удаляет из неё все пробелы.
//    Выберите один ответ.
//    / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
