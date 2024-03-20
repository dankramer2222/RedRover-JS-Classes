// const oTom = {
//     name:"Tom",
//     speak(){return `Меня зовут ${this.name}!`}
// }
// console.log(oTom.speak())

const bruce = {name:"Bruce"};
const madeline = {name:"Madeline"};

// function greet(){
//     return `Sup , my name is ${this.name} !`
// }

// Метод call() в JavaScript используется для вызова функции с указанием конкретного объекта в качестве контекста (то есть объекта, на который ссылается ключевое слово this внутри функции).

// В вашем случае, когда вы вызываете greet.call(bruce), вы говорите JavaScript использовать объект bruce в качестве контекста для функции greet(). Это означает, что внутри функции greet(), когда вы обращаетесь к this.name, this будет указывать на объект bruce, а затем будет взято его свойство name.

// Без использования call(), когда вы просто вызываете greet(), контекстом по умолчанию является глобальный объект (в браузере это window). Поскольку в глобальном объекте нет свойства name, результат будет undefined.
// console.log(greet());
// console.log(greet.call(bruce));

// function Person(name){
//     this.name = name;
// }

// let bruce1 = new Person("Bruce");
// console.log(greet.call(bruce)); // Выведет: "Sup, my name is Bruce!"

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// update.call(bruce,1949,'singer');
// console.log(bruce)
// update.call(madeline,1942,'actress')
// console.log(madeline);

/* метод apply идентичен методу call , за исключением способа, которым он обрабатывает аргументы ф-ии . Методу call аргументы передаются непосредственно,точно так же, как и в обычной ф-ии .метод apply аргументы передаются в виде массива
*/

update.apply(bruce,[1955,'actor'])
console.log(bruce);
update.apply(madeline,[1966,'singer'])
console.log(madeline);

const arrMath = [2,3,-5,15,7];
console.log(arrMath);
console.log(Math.min.apply(null, arrMath));
console.log(Math.max.apply(null, arrMath));

//ф-ия bind,позволяет определить значение для this.
const updateBruce = update.bind(bruce);
updateBruce(1904,'actor');
console.log(bruce);
//ex.
updateBruce.call(madeline,1274,'king')
console.log(bruce);