// адача 23. Выбор десерта.
// Какой десерт окажется в корзине покупателя после выполнения данной программы?
// // Массив товаров для десерта
const desserts = [
  { name: "Пирожное", price: 120 },
  { name: "Мороженое", price: 90 },
  { name: "Торт", price: 250 }
];
// // Функция для поиска десерта для покупателя
function findTheBestProduct(products) {
  let customerProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > customerProduct.price) {
      customerProduct = products[i];
    }
  }
  return customerProduct;
}
// // Поиск десерта для покупателя
const theBestDessert = findTheBestProduct(desserts);
// Вывод выбранного десерта
console.log("Наслаждайтесь лучшим десертом:", theBestDessert.name);
// Варианты ответов:
// 1. "Пирожное",
// 2. "Мороженое",
// 3. "Торт",
// 4. "Ни один из перечисленных"
// Выберите один ответ.