// Homework 06. Course JavaScript.
// Задача.
// Создание простого конструктора: Создайте конструктор Person, который принимает параметры name и age, и создает объекты, представляющие людей. Каждый объект должен иметь метод greet, который выводит приветствие с именем и возрастом этого человека.
// Изучение прототипов: Расширьте предыдущий пример, добавив метод celebrateBirthday в прототип Person, который увеличивает возраст человека на единицу.
function Person(name,age){
    this.name = name;
    this.age = age;
}

// function greet(Person.name) {
//     return "Hello" +" " +Person.name + " " + "It's good to see you"
// }

Person.prototype.greet = function(){
    return "Hello" + " " + this.name + " " + "It's good to see you your age is: "+ this.age
};

Person.prototype.celebrateBirthday = function() {
    this.age++;
};

const myFather = new Person("John Doe",25);
const myMother = new Person("Marry Doe",27);

console.log(myFather.greet());
console.log(myMother.greet());

myFather.celebrateBirthday()
console.log("After birthday celebration:");
console.log(myFather.greet());