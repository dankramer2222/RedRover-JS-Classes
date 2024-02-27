// Задача 13: Как объявить функцию в JavaScript?

const correctAnswer = "myFunction() {}";

// Функция проверки ответа
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
        console.log("Правильно!");
    } else {
        console.log("Неправильно. Правильный ответ: " + correctAnswer);
    }
}

// Вызов функции
checkAnswer("myFunction() {}"); 

// Варианты ответов:
//  1) def checkAnswer (selectedAnswer) {}
//  2) void checkAnswer (selectedAnswer) {}
//  3) function checkAnswer (selectedAnswer) {}
//  4) func checkAnswer (selectedAnswer) {}
// Этот код добавляет функцию `checkAnswer`, которая принимает выбранный пользователем ответ в качестве аргумента. Функция затем сравнивает выбранный ответ с правильным и выводит соответствующее сообщение в консоль.
// Выберите один ответ: 3)