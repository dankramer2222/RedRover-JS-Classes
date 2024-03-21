//objects
let dog = {
  name: "Luna",
  age: 9,
  color: "white",
  breed: "pitbul",

  speak: function () {
    //this.is usedkeyword to access curent object's name property
    console.log(this.name + " says WOOF");
  },
};

console.log("the dogs name is : " + dog.name);
console.log("The dog age is : " + dog["age"]);
dog.age = 6;
console.log("Updated dog age is : " + dog.age);
//
dog.isTrained = true;

console.log(dog);
dog.speak();
