// Homework 07. Course JavaScript.
// Задача.
// Определите класс Shape. 
// Он имеет три свойства: name, sides, и sideLength. 
// Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, например квадрат или равносторонний треугольник.
// Добавьте конструктор в этот класс. 
// Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
// Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр (длину внешнего края фигуры) и записывает результат в консоль.
// Создайте новый экземпляр класса Shape с именем square. 
// Дайте name ему square, sides = 4 и sideLength = 5​
// Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, записывает ли он результаты вычислений в консоль браузера, как ожидалось.
// Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
// Вызовите  triangle.calcPerimeter(), чтобы убедиться, что все работает.

class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        console.log(`The perimeter of ${this.name} is ${perimeter}`);
    }
}

// Создание экземпляра класса Shape с именем square, сторонами = 4 и длиной стороны = 5
const square = new Shape('square', 4, 5);
// Вызов метода calcPerimeter для square
square.calcPerimeter();

// Создание экземпляра Shape с именем triangle, сторонами = 3 и длиной стороны = 3
const triangle = new Shape('triangle', 3, 3);
// Вызов метода calcPerimeter для triangle
triangle.calcPerimeter();
