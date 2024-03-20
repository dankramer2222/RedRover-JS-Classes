class Car {
    constructor() {
    }
}

console.log(typeof Car); // Выведет: "function"

let car1 = new Car();
let car2 = new Car();

console.log('________________________');
console.log(typeof car1); // Выведет: "object"
console.log(car1 instanceof Car); // Выведет: true
console.log(car1 instanceof Array); // Выведет: false
console.log(car1 instanceof Object); // Выведет: true

class Car20 {

    static getNextVin(){
        return Car20.nextVin++;

    }
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ["P", "N", "R", "D"];
        this.userGear = this.userGears[0]; // Изначально устанавливаем первую передачу
        this.vin = Car20.getNextVin();
    }

    shift(gear) {
        if (this.userGears.indexOf(gear) < 0) {
            throw new Error(`ошибочная передача ${gear}`);
        }
        this.userGear = gear; // Устанавливаем передачу
    }
    static areSame(car1,car2){
        return car1.vin == car2.vin;
    }

    static areSimilar(car1,car2){
        return car1.make === car2.make && car1.model === car2.model
    }
}

Car20.nextVin = 0 

class InsurancePolicy {
    // Здесь определение класса InsurancePolicy
}

// const car3 = new Car2('Tesla', 'Model S');
// const car4 = new Car2('Toyota', 'Matrix');

// car3.shift('D');
// car4.shift('N'); // Будет ошибка, так как передачи 'S' нет в списке допустимых

// console.log(car3.userGear);
// console.log(car4.userGear);

function makeInsurable(o) {
    o.addInsurancePolicy = function (p) { this.InsurancePolicy = p; };
    o.getInsurancePolicy = function () { return this.InsurancePolicy; };
    o.isInsured = function () { return !!this.InsurancePolicy; };
}

makeInsurable(Car20.prototype);

const car30 = new Car20();

car30.addInsurancePolicy(new InsurancePolicy());

console.log(car30.isInsured()); // Выведет: true