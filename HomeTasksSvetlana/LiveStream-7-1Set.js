// const arr1 = [1,2,3,4,5,"a","b","c",3,25,43,"b"]
// console.log(arr.length);

// let set = new Set(arr)

// console.log(set);
// console.log(set.size);
// function findDup(arr){
//     let set = new Set();
//     let duplicates = '';

//     for (let el of arr){
//         if (set.has(el)){
//             if (duplicates !== '') {
//                 duplicates += ', ';
//             }
//             duplicates += el;
//         }
//         set.add(el);
//     }

//     return duplicates;
// }

// const arr1 = [1,2,3,4,5,"a","b","c",3,25,43,"b"];
// console.log(findDup(arr1)); // Вывод: 3, b
// str = "fhbbydhbfdf"
// let set = new Set(str)
// let strFromSet = [...set].join('');
// console.log(strFromSet);
let str = "fhbbydhbfdf";
let set = new Set(str);

let result = '';

for (let char of str) {
    if (!set.has(char)) {
        result += char;
    }
}

console.log(result); // Вывод: "bdf"

// function findUniq(arr) {
//     return parseFloat(arr.filter((el)=>arr.indexOf(el)==arr.lastIndexOf(el)))
//   }
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
// https://www.codewars.com/kata/558f0553803bc3c4720000af/train/javascript
// https://www.codewars.com/kata/5b64173e7dae89b7510000e5/train/javascript

var findDup=function(arr){
    //   return parseInt(arr.filter((el)=>arr.indexOf(el)!==arr.lastIndexOf(el))[0])
      return arr.find(el=> arr.indexOf(el)!==arr.lastIndexOf(el))
    }