// Задача 38. Деструктуризация объктов в JS.
function processUserData(person) {
  const { name, age } = person;
  console.log(`Пользователь ${name} имеет возраст ${age} лет.`);
}

function processUserLocation(person) {
  const { country } = person;
  console.log(`Пользователь находится в стране ${country}.`);
}

function processRequest(request) {
  const { source } = request;
  console.log(`Запрос получен из источника: ${source}`);
}

const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  country: "USA",
};

const person = {
  name: "Jane",
  age: 25,
  email: "jane@example.com",
  country: "UK",
};

const request = {
  source: "localhost",
};

processUserData(user);
processUserLocation(user);
processRequest(request);
// Вопрос: Что выведется в консоль после выполнения данного кода?
// 1. Пользователь Jane имеет возраст 25 лет.Пользователь находится в стране UK. Запрос получен из источника: localhost.
// 2. Пользователь John имеет возраст 30 лет. Пользователь находится в стране USA. Запрос получен из источника: localhost.
// 3. Запрос получен из источника: localhost.
// 4. Ошибка: "processRequest is not defined".
// Выберите один ответ.
