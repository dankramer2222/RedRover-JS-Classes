// Задача 08.
// const testingTypesString = "Unit Testing, Integration Testing, System Testing, Acceptance Testing";
// const splitResult = testingTypesString.split(',');
// console.log(splitResult);
// Что из следующего лучше всего описывает назначение метода Split() в JavaScript?
// 1) Удалить указанный символ из строки и вернуть новую строку без этого символа.
// 2) Объединить несколько строк в одну, используя указанный разделитель.
// 3) Разделить строку на подстроки на основе заданного разделителя и вернуть массив этих подстрок.
// 4) Чтобы найти определенную подстроку внутри строки и вернуть ее индекс.

// ответ 3) Разделить строку на подстроки на основе заданного разделителя и вернуть массив этих подстрок.

const testingTypesString = "Unit Testing, Integration Testing, System Testing, Acceptance Testing";
const splitResult = testingTypesString.split(',');
console.log(splitResult);

// Назначение метода `split()` в JavaScript - это разделение строки на подстроки на основе заданного разделителя и возврат массива этих подстрок. Таким образом,
// :javascript: правильный ответ :
// 3) Разделить строку на подстроки на основе заданного разделителя и вернуть массив этих подстрок.
// Пояснение: В данном коде `split()` используется для разделения строки `testingTypesString` по запятой (`,`), что приводит к созданию массива `splitResult`, содержащего подстроки, разделенные запятыми.
// [
//   'Unit Testing',
//   ' Integration Testing',
//   ' System Testing',
//   ' Acceptance Testing'
// ]