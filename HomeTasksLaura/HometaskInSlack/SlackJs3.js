// Задача 3
// В этом коде что-то пропущено!
// let number = 5;
// let result;

// // Найдите ошибку и дополните код, чтобы он работал правильно

//    (number > 0) {
//     result = "Positive";
// } else if (number < 0) {
//     result = "Negative";
// } else {
//     result = "Zero";
// }

// switch (number) {
//     default:
//         result += " is undefined";
//         break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
    
//         result += " is prime";
//         break;
//     case 2:
//     case 4:
//     case 6:
//     case 8:
//        case 10:
//         result += " is even";
//         break;
// }

// console.log(result)
// 1) ошибка в записи оператора присваивания +=
// 2) ошибка в записи switch оператора - для каждого case нужно действие
// 3) ошибка в записи if оператора - пропущено ключевое слово if
// 4) ошибка в записи switch оператора - блок кода с ключевым словом default должно быть последним

// Выберите один ответ: 3)

 let number = 5;
 let result;
if (number > 0) {
    result = "Positive";
} else if (number < 0) {
    result = "Negative";
} else {
    result = "Zero";
}

switch (number) {
    default:
        result += " is undefined";
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    
        result += " is prime";
        break;
    case 2:
    case 4:
    case 6:
    case 8:
       case 10:
        result += " is even";
        break;
}
// верный ответ:
// 3) ошибка в записи if оператора - пропущено ключевое слово if
// В коде пропущено ключевое слово `if` перед условием `(number > 0)`. В JavaScript, чтобы начать условную конструкцию, нужно использовать ключевое слово `if`, за которым следует условие в круглых скобках. Таким образом, код должен быть дополнен следующим образом:
// if (number > 0) {
//     result = "Positive";
// } else if (number < 0) {
//     result = "Negative";
// } else {
//     result = "Zero";
// }
// После этого, условная конструкция будет правильно работать.