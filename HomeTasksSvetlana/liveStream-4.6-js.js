var str1 = 'hello world ! You are welcome!'.split(' ');
console.log(str);
let str2 = ["august", "september", "october", "november", "december"];

function newStr(str){

for(let i = 0; i < str.length; i++){
    for (let j = 0; j < str[i].length; j++){ // Исправлена опечатка в условии цикла
        if (str[i][j] == 'w'){
            return (str[i]);
           // return (str[i][j]);
        }
    }
}
}
console.log(newStr(str1));