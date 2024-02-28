

function getDrink(name, age) {
    return age < 21 ? "Возьмите стакан сока" :
           age >= 21 && age <= 80 ? "Могу предложить бокал вина" :
           "Может, кефир?";
}

// Пример
console.log(getDrink("John", 18)); // Выведет: "Возьмите стакан сока"
console.log(getDrink("Alice", 25)); // Выведет: "Могу предложить бокал вина"
console.log(getDrink("James", 85)); // Выведет: "Может, кефир?"
        