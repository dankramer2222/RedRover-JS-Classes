// let str = "Danilakramer";
// console.log(str.length)
// for (let i=0; i <= str.length-1; i++){
//     console.log(str[i])
// }

// let str = "Kramer";

// for (let i = 0; i<=str.length-1; i++){
//     if (str[i] =='r'){
//         console.log(i);
//     }
// }


// let str = "Kramer";

// for (let i = 0; i<=str.length-1; i++){
//     if (i % 2 == 0){
//         console.log(str[i]);
//     }
// }

// let arrayNumber = [1, 2 , 3, 4];
// // let sum = 0;
// let multipliye = 1;
// let evenSum = 0;
// for (let i = 0; i < arrayNumber.length; i++){
//     if (arrayNumber[i]%2 == 0){
//     console.log(arrayNumber[i]);
//     evenSum += arrayNumber[i];
// }
//     // sum+=arrayNumber[i];
//     // multipliye *= arrayNumber[i];
// }   
//     console.log("_____________________________________________________________________________________________")
//     // console.log(sum);
//     // console.log(multipliye);
//     console.log(evenSum);


// let arrayNumber = [1, 2 , 3, 4];
// evenIndexElements = 0;

// for (let i = 0; i < arrayNumber.length; i++){
//     if (i%2 == 0){
//         evenIndexElements += arrayNumber[i];
//     }
// }
//     console.log(evenIndexElements);

var str = "hello javaScript".split(" ");
console.log(str)
for (let i = 0; i<str.length; i++){
    console.log(str[i]);
    for (let j = 0; j < str[i].length; j++){
        console.log(str[i][j]);
    }
}