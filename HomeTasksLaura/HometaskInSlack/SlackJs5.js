// Задача 05: Область тестирования программных продуктов активно развивается и появляются новые 
//названия профессии тестировщик. С помощью какого метода можно добавить название профессии SDET в конец массива 
// testerPositions:

// let  testerPositions = [
//     "Quality Assurance Engineer",
//     "Software Tester",
//     "Test Automation Engineer",
//     "Quality Analyst",
//     "QA Tester",
//     "Test Engineer",
//     "Quality Control Analyst",
// ];
// Варианты ответа:
// 1) testerPositions.push("SDET"),
// 2) testerPositions.pop(),
// 3) testerPositions.unshift("SDET"),
// 4) testerPositions.shift()
// Выберите один ответ:  1) testerPositions.push("SDET"),

let  testerPositions = [
    "Quality Assurance Engineer",
    "Software Tester",
    "Test Automation Engineer",
    "Quality Analyst",
    "QA Tester",
    "Test Engineer",
    "Quality Control Analyst",
];

testerPositions.push("SDET");

console.log(testerPositions);
// Верный ответ 1) testerPositions.push("SDET")

// Метод `push()` используется для добавления одного или нескольких элементов в конец массива. В данном случае, `testerPositions.push("SDET")` добавит строку "SDET" в конец массива `testerPositions`, соответственно, добавляя новое название профессии "SDET" в массив.
// Краткое описание остальных методов и результаты их применения к массиву `testerPositions`:
// 2) `testerPositions.pop()`: Этот метод удаляет последний элемент из массива и возвращает его. Если применить `testerPositions.pop()`, то элемент "Quality Control Analyst" будет удален из массива, и метод вернет этот удаленный элемент.
// 3) `testerPositions.unshift("SDET")`: Этот метод добавляет один или несколько элементов в начало массива и возвращает новую длину массива. Если применить `testerPositions.unshift("SDET")`, то строка "SDET" будет добавлена в начало массива, а возвращаемое значение будет новой длиной массива.
// 4) `testerPositions.shift()`: Этот метод удаляет первый элемент из массива и возвращает его. Если применить `testerPositions.shift()`, то элемент "Quality Assurance Engineer" будет удален из массива, и метод вернет этот удаленный элемент.
// Наберите код и поделитесь результатом измененного массива.