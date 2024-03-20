var this_is_var = "i'm var"
console.log(this_is_var);

this_is_var = "bananas"
console.log(this_is_var);

console.log('*_____________________*');

let this_is_let = "I'm let"
console.log(this_is_let);

this_is_let = "it's updated now"
console.log(this_is_let);

console.log('*_____________________*');

const this_is_const = "I'm const"
console.log(this_is_const);

console.log('*_____________________*');

//scope

var globalVar = "I'm global variable"
let globalLet = "i'm also global variable"
const globalConst = "Me too"

function showGlobal(){
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}

showGlobal()

//all tasks were in codewars