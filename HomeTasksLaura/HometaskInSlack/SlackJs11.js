// Задача 11.
// Тестировщик хочет исправить в резюме слова 'Quality control' на 'Quality assurance' с помощью следующего кода :

let resumeText = 'Quality control'; //  нужно заменить на 'Quality assurance'.;
resumeText.split("Quality control").join("Quality assurance");
console.log(resumeText);

// 1) Результат достигнут и в консоль выводится 'Quality assurance';
// 2) Результат не достигнут и в консоль ничего не выводится;
// 3) Результат не достигнут и в консоль выводится 'Quality controlQuality assurance';
// 4) Результат не достигнут и в консоль выводится 'Quality control';

// Ответ: 