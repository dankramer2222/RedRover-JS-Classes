// 10. Array concat():
//    - Задание 10.1: Создайте два массива `arr1` и `arr2` и используйте метод `concat()`, чтобы объединить их в один массив.
//    - Задание 10.2: Напишите функцию `concatArrays`, которая принимает два массива и возвращает новый массив, объединяя их.

const arr1 = [1,2,3,4,5];
const arr2 = ['London',"Moskow","Paris","Erevan","Madrid"];
// console.log(arr1.concat(arr2))

function concatArrays(array1,array2){
    return arrConcat = array1.concat(array2)
}
console.log(concatArrays(arr1,arr2));