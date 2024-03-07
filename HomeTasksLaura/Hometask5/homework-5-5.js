// 5. Создать объект Testing, который обладает 7 принципами тестирования, и 4 типа тестирования обладают этими свойствами – 7-ью принципами тестирования из Силлабуса 4.0. Выведите в консоль текст, подтверждающий это. 
let Testing = {
    principle1: "Testing shows presence, not absence of defects.",
    principle2: "Exhaustive testing is impossible; focus on techniques.",
    principle3: "Early testing saves time and money; start ASAP.",
    principle4: "Defects cluster together; use Pareto principle for risk.",
    principle5: "Tests wear out; modify existing, write new ones.",
    principle6: "Testing is context dependent; no universal approach.",
    principle7: "Absence-of-defects fallacy; validate, not just verify."
};

let TestingTypes = {
    type1: ["principle1", "principle2", "principle3"],
    type2: ["principle4", "principle5", "principle6"],
    type3: ["principle2", "principle6", "principle7"],
    type4: ["principle1", "principle3", "principle5"]
};

for (let type in TestingTypes) {
    console.log("Тип тестирования:", type);
    console.log("Принципы тестирования:");
    for (let i = 0; i < TestingTypes[type].length; i++) {
        let principle = TestingTypes[type][i];
        console.log("- " + Testing[principle]);
    }
    console.log("--------------------");
}
