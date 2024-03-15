// 5. Создать объект Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это.
let Testing = {
  principle1: "Testing shows presence, not absence of defects.",
  principle2: "Exhaustive testing is impossible; focus on techniques.",
  principle3: "Early testing saves time and money; start ASAP.",
  principle4: "Defects cluster together; use Pareto principle for risk.",
  principle5: "Tests wear out; modify existing, write new ones.",
  principle6: "Testing is context dependent; no universal approach.",
  principle7: "Absence-of-defects fallacy; validate, not just verify.",
};

let TestingTypes = {
  type1: [Testing.principle1, Testing.principle2, Testing.principle3],
  type2: [Testing.principle4, Testing.principle5, Testing.principle6],
  type3: [Testing.principle2, Testing.principle6, Testing.principle7],
  type4: [Testing.principle1, Testing.principle3, Testing.principle5],
};

for (let type in TestingTypes) {
  console.log("Тип тестирования:", type);
  console.log("Принципы тестирования:");
  for (let principle of TestingTypes[type]) {
    console.log("- " + principle);
  }
  console.log("--------------------");
}
