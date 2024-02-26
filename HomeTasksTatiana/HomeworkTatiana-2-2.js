function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
  
    if (bmi < 18.5) {
      return "Мало каши ел(а)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Молодец! Так держать!";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return "А тортик лучше отдать соседке";
    } else {
      return "С завтрашнего дня - на воде и огурцах!";
    }
  }
  
  // Пример использования функции
  const weight = 70; // Вес в кг
  const height = 1.75; // Рост в метрах
  const bmiComment = calculateBMI(weight, height);
  console.log(bmiComment); // Выводим комментарий в зависимости от BMI
  