// Задача 06:
// В доме живет несколько людей. Данные о Жителях храняться в массиве. Номер индекса массива соответствует номеру этажа, 
// на котором живет человек. Как узнать кто живет на 3 этаже?
// let house = [
//     [], // Нулевой этаж (кафе и рецепция)
//     ["Анна"], // Первый этаж
//     ["Петр", "Елена"], // Второй этаж
//     ["Иван", "Митрофан", "Дуняша"], // Третий этаж
//     ["Сергей", "Ольга", "Мария"] // Четвертый этаж
// ];
// Какие скобки используются для обращения к элементу массива в языке программирования JavaScript?
// 1) Круглые скобки house(3)
// 2) Квадратные скобки house[3]
// 3) Фигурные скобки house{3}
// 4) Угловые скобки house<3>

//Ответ 2) Квадратные скобки house[3]

let house = [
    [], // Нулевой этаж (кафе и рецепция)
    ["Анна"], // Первый этаж
    ["Петр", "Елена"], // Второй этаж
    ["Иван", "Митрофан", "Дуняша"], // Третий этаж
    ["Сергей", "Ольга", "Мария"] // Четвертый этаж
];

console.log(house[3]);