// Задача 26. Светофор.
// Программа запускает работу светофора.

const colors = ["зеленый", "желтый", "красный"];

let currentIndex = 0;

const printColor = () => {
  console.log(colors[currentIndex]);

  // Проверка, если текущий цвет красный и есть следующий цвет, который должен быть зеленым
  if (
    colors[currentIndex] === "красный" &&
    colors[(currentIndex + 1) % colors.length] === "зеленый"
  ) {
    console.log("желтый"); // Добавляем вывод желтого цвета
  }

  currentIndex = (currentIndex + 1) % colors.length;
};

const startTrafficLight = () => {
  printColor();
  return setInterval(printColor, 2000);
};

// Остановка программы светофора через 2 минуты
setTimeout(() => {
  clearInterval(intervalId);
}, 120000);

// Запускаем программу светофора
const intervalId = startTrafficLight();
// Вопрос: Какая функция в этой программе JavaScript выводит в консоль цвета светофора каждые 2 секунды?
// 1) `printColor();`
// 2) `startTrafficLight();`
// 3) `setInterval(printColor, 2000);`
// 4) `colors[currentIndex];`
// Выберите один ответ.
//   / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
