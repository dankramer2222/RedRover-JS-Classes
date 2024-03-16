// Задача 31: Семейные узы.

function Family(lastName) {
  this.lastName = lastName;
  this.addMember = function (memberType, details) {
    this[memberType] = { ...details };
  };
}

const skriptunovyFamily = new Family("Скриптуновы");
skriptunovyFamily.addMember("mother", {
  name: "Анна",
  age: 35,
  profession: "Учитель",
});
skriptunovyFamily.addMember("father", {
  name: "Иван",
  age: 40,
  profession: "Инженер",
});
skriptunovyFamily.addMember("daughter", {
  name: "Екатерина",
  age: 10,
  hobby: "Рисование",
});
skriptunovyFamily.addMember("son", {
  name: "Алексей",
  age: 15,
  hobby: "Футбол",
});

const sonsHobby = skriptunovyFamily.son.hobby;
console.log(sonsHobby);
// Вопрос: Какое увлечение у сына в семье Скриптуновых?
// 1. Undefined
// 2. Инженер
// 3. Рисование
// 4. Футбол
// Выберите один ответ.
// / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
