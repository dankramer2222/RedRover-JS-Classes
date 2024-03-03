// task 2 
// суммировать все значения в обьекте

let salaries = {
    John:100,
    Ann:160,
    Pete:130
};

// console.log(salaries.John+salaries.Ann+salaries.Pete)
let sum =0;
for (let key in salaries){
    sum+= salaries[key];
}
console.log(sum);