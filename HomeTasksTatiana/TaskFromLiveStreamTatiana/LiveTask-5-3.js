//Создайте ф-ию MultiplyNumeric(obj),которая умножает все числовые  свойства обьекта obj на 2

function MultiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] === 'number'){
            obj[key] = obj[key] * 2;
        }
    }
}

let doc = {
    width: 200,
    height: 30,
    length: 250,
    title: "box"
};
MultiplyNumeric(doc);
console.log(doc);