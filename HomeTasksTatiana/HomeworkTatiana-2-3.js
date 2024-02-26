function TicketPrice(price, age) {
    const priceCoefficient = 
        age < 2 ? 0.1 :
        age >= 2 && age <= 18 ? 0.5 :
        age > 18 && age <= 65 ? 1 :
        age > 65 ? 0.6 : "are u alien?"; // Этот вопрос задан для случая, когда возраст не попадает ни в один из перечисленных диапазонов.

    return price * priceCoefficient;
}

const prompt = require('prompt-sync')();

const ticketPriceInput = parseFloat(prompt("Введите цену билета: "));
const passengerAgeInput = parseInt(prompt("Введите возраст пассажира: "));

const finalTicketPrice = TicketPrice(ticketPriceInput, passengerAgeInput);

console.log("Стоимость билета: $" + finalTicketPrice.toFixed(2));
