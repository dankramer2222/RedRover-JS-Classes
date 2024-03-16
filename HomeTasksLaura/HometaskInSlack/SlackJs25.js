// Задача 25. Использование методов строк и стрелочной функции:

const text = "Hello, world!";

// Методы строк в JavaScript
const upperCaseText = text.toUpperCase(); // Преобразует строку в верхний регистр
const lowerCaseText = text.toLowerCase(); // Преобразует строку в нижний регистр

// Стрелочная функция для обрезки текста
const truncateText = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

const truncatedText = truncateText(text, 5); // Обрезает текст до 5 символов

console.log("Upper case:", upperCaseText);
console.log("Lower case:", lowerCaseText);
console.log("Truncated text:", truncatedText);
// Вопрос: Какой вариант правильно использует методы строк в JavaScript для обработки текста, чтобы получить текст в нижнем регистре с заданной длиной строки 5?

// 1)  const modifiedText1 = text.toUpperCase().slice(0, 5);

// 2)  const modifiedText2 = text.toLowerCase().slice(0, 5);

// 3)  const modifiedText3 = text.slice(0, 5).toUpperCase();

//  4)  const modifiedText4 = text.slice(0, 5).toLowerCase();
