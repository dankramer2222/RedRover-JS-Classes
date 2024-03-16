// Задача 39. Наш веселый пес. ООП , Классы, экземпляры, наследование
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} издает звук.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} лает.`);
  }

  displayBreed() {
    console.log(`${this.name} - это ${this.breed}.`);
  }
}

const animal = new Animal("Животное");
const dog = new Dog("Барсик", "Дворняжка");

dog.makeSound();
// Вопрос: Что выведется на экран при вызове метода makeSound() для экземпляра dog?
// Варианты ответа:
// 1. "Животное издает звук."
// 2. "Барсик лает."
// 3. "Барсик издает звук."
// 4. Ошибка: метод makeSound() не определен для класса Dog.
// Выберите один ответ.
// / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
