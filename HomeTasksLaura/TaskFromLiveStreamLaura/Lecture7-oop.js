class Person {
    name;

    constructor(name = "friend"){
        this.name = name;
    }

    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

const danya = new Person("Danya")
    //danya.name = "Danya";

danya.introduceSelf()

class Animals{
    constructor(){

    }

    sleep(){
        console.log("ZZZZZ")
    }
}

const animalMoskit = new Animals()

animalMoskit.sleep()

class Professor extends Person{
    teaches;

    constructor(name, teaches){
        super(name)
        this.teaches = teaches;
    }

    introduceSelf(){
        console.log(`My name is  ${this.name}, I will teach you ${this.teaches}`);
    }
}

const albert = new Professor("Albert","C#")
albert.introduceSelf()
