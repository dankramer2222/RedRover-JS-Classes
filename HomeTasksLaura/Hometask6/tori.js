function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return console.log(
    "Hi, my name is " + this.name + ", I am " + this.age + " years old"
  );
};

Person.prototype.celebrateBDay = function () {
  return this.age++;
};

const person1 = new Person(`Toxri`, 99);

person1.greet(); // Вызываем метод экземпляра
console.log(person1.name);
console.log(person1.celebrateBDay()); // Вызываем метод экземпляра
