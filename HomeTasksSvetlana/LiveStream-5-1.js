// function plusNum(a,b) 
// {
//     return a + b
// }
// console.log(sum(2,2));

// let minusNum = (a,b)=> a-b;

// console.log(minusNum(5,2))

//functional expression
// let sumn = function sum(c,d) {
//     return c + d
// }
// console.log(sumn(13,17));

let arr1 = [1,2,3,4,5,"a","b","c","d"]

// function isNum(arr){
//     numArr = [];
//     for (let i=0;i<arr.length;i++){
//         if (typeof arr[i] === 'number'){
//             numArr.push(arr[i]);
//         }
//     }
//     return numArr
// }

// console.log(isNum(arr1))

// let isNumber = argument => typeof argument === 'number';
// console.log(arr1.filter(el => typeof el === 'number'));

function isString(value) {
    return typeof value === 'string';
}

console.log(arr1.filter(isString));