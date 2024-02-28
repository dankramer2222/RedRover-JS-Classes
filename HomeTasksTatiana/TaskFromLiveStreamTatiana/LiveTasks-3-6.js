//input alphabet leter 
//output should be number this letter in alpphabet
function position(letter){
    // Преобразуем буквы алфавита в нижний регистр для удобства сравнения
    letter = letter.toLowerCase();
    
    // Строка, содержащая алфавит
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    // Возвращаем индекс буквы в алфавите
    return alphabet.indexOf(letter) + 1; // добавляем 1, так как индексация начинается с 0
}

// Пример использования
console.log(position('a')); // 1
console.log(position('b')); // 2
console.log(position('z')); // 26

