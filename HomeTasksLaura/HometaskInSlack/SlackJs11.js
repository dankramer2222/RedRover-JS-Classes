// Задача 11.
// Тестировщик хочет исправить в резюме слова 'Quality control' на 'Quality assurance' с помощью следующего кода :

let resumeText = 'Quality control'; //  нужно заменить на 'Quality assurance'.;
resumeText.split("Quality control").join("Quality assurance");
newResumeText = resumeText.split("Quality control").join("Quality assurance");
console.log(resumeText);
console.log(newResumeText);


// 1) Результат достигнут и в консоль выводится 'Quality assurance';
// 2) Результат не достигнут и в консоль ничего не выводится;
// 3) Результат не достигнут и в консоль выводится 'Quality controlQuality assurance';
// 4) Результат не достигнут и в консоль выводится 'Quality control';

// Ответ: 4)

// Правильный ответ: 4) Результат не достигнут и в консоль выводится 'Quality control';
// Пояснение: Методы строк в JavaScript не изменяют оригинальную строку, они возвращают новую строку с примененными изменениями. В данном случае, `split()` и `join()` создают новую строку, в которой "Quality control" заменяется на "Quality assurance", но этот результат не сохраняется ни в какую переменную и не выводится в консоль. Таким образом, исходная переменная `resumeText` остается неизменной, и в консоль выводится ее исходное значение "Quality control".