const obj = {};

// const user = {};

// console.log(user.color);

// obj.color = 'blue';
// console.log(obj['color']);
// console.log(obj.color);

// const size1 = Symbol();
// obj.size1 = 8;

// console.log(obj.size1)

// for (let key in  obj){
//     console.log(`${key} - ${obj[key]}`);
// }

// const sam = {
//     name:"Sam",
//     speak(){
//         console.log(`${this.name} can speak`);
//         return;
//     }

// }

// sam.speak()

// console.log(delete sam.name);

/*
const obj ={
    get propName(){

    }

    set propName(value){

    }
}

*/const user1 = {
    name: "John",
    surname: "Doe",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
};

// Accessing the getter
console.log(user1.fullName);

// Setting the fullName property
user1.fullName = "Bob Miller";

// Accessing the getter after setting the fullName property
console.log(user1.fullName);

// Defining a new property using Object.defineProperty
Object.defineProperty(user1, "job", {
    value: "QA",
    writable:true,
    enumerable:true,
    configurable:true
});

// Accessing the job property
console.log(user1.job);


const user2 = {
    name: "John",
    surname: "Doe",
}

Object.defineProperty(user2, "fullName", {
    get () {
        return `${this.name} ${this.surname}`;
    },

    //writable:true,
    enumerable:true,
    configurable:true
})

console.log(user2);

const animal = {
    eats:true,
    walk() {
        console.log("Animal walks")
    }
};

const rabit ={
    jumps:true
};

//если кролик является прототипом от животного

rabit.__proto__ = animal;

console.log(rabit.eats);
console.log(rabit.jumps);

rabit.walk()

danya = new Professor('Danya',"js");
danya.introduceSelf();

kondrat = new Student("Condrat",1)
kondrat.introduceSelf();

fekla = new Person("Fekla");
fekla.introduceSelf();