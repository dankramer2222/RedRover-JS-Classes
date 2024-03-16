// Задача 24. Получение информации из объектов.
// Предположим, вы разрабатываете приложение для управления задачами в командной системе. У вас есть объект `TaskList`, который представляет список задач. Каждая задача содержит информацию, такую как название, описание, статус выполнения и т.д. Вы хотите добавить метод `printTaskDetails`, который будет выводить на консоль подробную информацию о каждой задаче в списке. Для этого вы используете цикл для обхода всех задач в списке и формируете строку с информацией о каждой задаче.
// Создаем объект TaskList
const TaskList = {
  tasks: [
    {
      name: "Подготовить отчет",
      description: "Подготовить ежемесячный отчет по финансам",
      status: "в процессе",
    },
    {
      name: "Провести собрание",
      description:
        "Организовать собрание с командой для обсуждения новых проектов",
      status: "запланировано",
    },
    {
      name: "Обновить дизайн",
      description: "Обновить дизайн веб-сайта",
      status: "выполнено",
    },
  ],

  // Метод для печати подробной информации о каждой задаче
  printTaskDetails: function () {},
};
// В этом контексте метод `printTaskDetails` помогает управлять списком задач, обеспечивая видимость состояния каждой из них для участников команды.

// Какой из следующих вариантов правильно выведет на консоль названия и описания задач из объекта `TaskList`?

// 1)
TaskList.printTaskDetails = function () {
  for (let i = 0; i < this.tasks.length; i++) {
    console.log(
      this.status +
        " | " +
        this.tasks[i].name +
        ": " +
        this.tasks[i].description
    );
  }
};

// 2)
TaskList.printTaskDetails = function () {
  for (let i = 0; i < this.tasks.length; i++) {
    let task = this.tasks[i];
    console.log("Задача: " + task.name);
    console.log("Описание: " + task.description);
    console.log("Статус: " + task.status);
    console.log("-------------------");
  }
};

// 3)
TaskList.printTaskDetails = () => {
  for (let task of this.tasks) {
    console.log(task.name + ": " + task.description + " | " + task.status);
  }
};

// 4)
TaskList.printTaskDetails = function () {
  for (let i in this.task) {
    let task = this.task[i];
    console.log("Задача: " + task.name);
    console.log("Описание: " + task.description);
    console.log("Статус: " + task.status);
    console.log("-------------------");
  }
};

// Вызываем метод для печати подробной информации о задачах
TaskList.printTaskDetails();

// Выберите один ответ.
// / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
