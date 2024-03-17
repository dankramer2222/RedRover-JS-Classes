// Задача 34: Определить, где массив isArray?
const obj = {
  name: "John",
  age: 25,
  hobbies: ["reading", "running", "painting"],
};
// Выберите правильный вариант:
// 1. obj is the array: true
// 2. obj.hobbies[0] is the array: true
// 3. obj[2] is the array: true
// 4. obj.hobbies is the array: true
// Выберите один ответ: 4) 

// Ответ: Правильный вариант - 4. obj.hobbies is the array: true, поскольку `obj.hobbies` является массивом.
// Свойство `hobbies` объекта `obj` является массивом. В JavaScript, когда мы проверяем, является ли переменная массивом с помощью метода `Array.isArray()`, мы обычно применяем его к самой переменной, а не к ее элементам или свойствам.
// Таким образом, когда мы используем `Array.isArray(obj.hobbies)`, результат будет `true`, потому что `hobbies` является массивом.
// Остальные варианты неверны, так как они не относятся к массиву, а к другим типам данных (объекту и строке).