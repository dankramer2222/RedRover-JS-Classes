// "redriver"
// "deed"
// "peep"
// "Madam I'm Adam"
// "A man , a plan, a canal"
// "was it a car or a cat i saw?"
// "not a New York"


// 1
// function isPalindrom(params) {
//     for (let i=0; i < params.length/2; i++){
//         if (params[i] !== params[params.length-1-i]){
//                return false;
// }
//     }
//              return true;
// }
// console.log(isPalindrom("redivider"))

// 2 
function isPalindrome(str) {
    // Приводим строку к нижнему регистру и удаляем из нее все символы, кроме букв, пробелов и запятых
    const cleanStr = str.toLowerCase().replace(/[^a-z,\s]/g, '');
    // Проверяем, является ли очищенная строка равной своему отражению
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("A man , a plan, a canal".replace(/[, ]/g,'')));


//3

// function isPalindrome(str) {
//     // Приводим строку к нижнему регистру
//     str = str.toLowerCase();
//     // Удаляем все символы, не являющиеся буквами
//     let cleanStr = '';
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (char >= 'a' && char <= 'z') {
//             cleanStr += char;
//         }
//     }
    
//     // Проверяем, является ли очищенная строка равной своему отражению
//     let isPalindrome = true;
//     for (let i = 0; i < cleanStr.length / 2; i++) {
//         if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
//             isPalindrome = false;
//             break;
//         }
//     }
    
//     return isPalindrome;
// }

// // Пример использования функции для тестирования строк из задания
// console.log(isPalindrome("redriver")); // true
// console.log(isPalindrome("deed")); // true
// console.log(isPalindrome("peep")); // true
// console.log(isPalindrome("Madam I'm Adam")); // true
// console.log(isPalindrome("A man, a plan, a canal")); // true
// console.log(isPalindrome("was it a car or a cat i saw?")); // true
// console.log(isPalindrome("not a New York")); // false
