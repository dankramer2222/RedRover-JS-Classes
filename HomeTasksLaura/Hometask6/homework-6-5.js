// 5. Создать конструктор объекта Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это. Используя данный конструктор можно создавать конкретный экземпляр тестирования программного проду

// Создаем конструктор объекта Testing
function Testing() {
    this.principle1 = "Testing shows presence, not absence of defects.";
    this.principle2 = "Exhaustive testing is impossible; focus on techniques.";
    this.principle3 = "Early testing saves time and money; start ASAP.";
    this.principle4 = "Defects cluster together; use Pareto principle for risk.";
    this.principle5 = "Tests wear out; modify existing, write new ones.";
    this.principle6 = "Testing is context dependent; no universal approach.";
    this.principle7 = "Absence-of-defects fallacy; validate, not just verify.";
}

// Создаем объекты типов тестирования на основе конструктора Testing
let type1 = new Testing();
let type2 = new Testing();
let type3 = new Testing();
let type4 = new Testing();

// Выводим информацию о типах тестирования в консоль
console.log("Тип тестирования: type1");
console.log("Принципы тестирования:");
console.log("- " + type1.principle1);
console.log("- " + type1.principle2);
console.log("- " + type1.principle3);
console.log("--------------------");

console.log("Тип тестирования: type2");
console.log("Принципы тестирования:");
console.log("- " + type2.principle4);
console.log("- " + type2.principle5);
console.log("- " + type2.principle6);
console.log("--------------------");

console.log("Тип тестирования: type3");
console.log("Принципы тестирования:");
console.log("- " + type3.principle2);
console.log("- " + type3.principle6);
console.log("- " + type3.principle7);
console.log("--------------------");

console.log("Тип тестирования: type4");
console.log("Принципы тестирования:");
console.log("- " + type4.principle1);
console.log("- " + type4.principle3);
console.log("- " + type4.principle5);
console.log("--------------------");
