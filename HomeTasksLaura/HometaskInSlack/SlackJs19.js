// Задача 19. Строковые типы данных в массиве.
// Что вернет вызов findLongestString(['apple', ['banana', 'orange', 'strawberry'], ['grape', ['kiwi', 'pear']]])?
console.log(findLongestString(['apple', ['banana', 'orange', 'strawberry'], ['grape', ['kiwi', 'pear']]]));

function findLongestString(arr) {
    let longest = '';
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            let nestedLongest = findLongestString(arr[i]);
            if (nestedLongest.length > longest.length) {
                longest = nestedLongest;
            }
        } else if (typeof arr[i] === 'string') {
            if (arr[i].length > longest.length) {
                longest = arr[i];
            }
        }
    }
    return longest;
}
// Варианты ответов:
// 1. Результатом будет ошибка, так как функция findLongestString не определена внутри цикла.
// 2.  Результатом будет 'banana', так как это самая длинная строка во втором вложенном массиве.
// 3. Результатом будет 'kiwi', так как это самая длинная строка во втором вложенном массиве.
// 4. Результатом будет 'strawberry', так как это самая длинная строка в массиве.
// Выберите один ответ: 4) но нужно лучше разобраться в массивах

//оставил пока не разбирал массивы