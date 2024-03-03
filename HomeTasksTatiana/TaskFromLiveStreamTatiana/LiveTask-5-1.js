//task 1
// Создайте пустой обьект User
// Добавьте свойтсво name со значением Danila
// Добавьте свойтсво surname со значением Kramer
// Добавьте свойтсво age со значением 23
// Добавьте свойтсво Likescoffee со значением true
// Измените значение свойство name на Ivan
// удалите свойство age из обьекта

let user = {
    name:"Danila",
    surname:"Kramer",
    age:23,
    likescoffee:true
};

user.name = "Ivan";
delete user.age

console.log(user);