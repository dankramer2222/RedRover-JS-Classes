/*
for, arrays
task 10:
*/

const numbers = [1,2,3,4,5];
let sum = 0 ;

for (let i = 0; i<numbers.length;i++){
    if (i%2!==0){
        sum += numbers[i];
    }
}
console.log(sum);
