// Задача 40. Работник и его возраст.
class Employee {
  constructor(name, age, position, salary) {
    this._name = name;
    this._age = age;
    this._position = position;
    this._salary = salary;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Invalid age input. Age must be a positive number.");
    }
  }

  get position() {
    return this._position;
  }

  set position(newPosition) {
    this._position = newPosition;
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary) {
    if (typeof newSalary === "number" && newSalary >= 0) {
      this._salary = newSalary;
    } else {
      console.error(
        "Invalid salary input. Salary must be a non-negative number."
      );
    }
  }
}
// Вопрос:
// Какой метод класса Employee используется для получения значения возраста работника?
// Варианты ответов:
// 1) getAge()
// 2) get age()
// 3) age()
// 4) get age
// Выберите один ответ.
