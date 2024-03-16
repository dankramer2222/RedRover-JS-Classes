// Задача 27. Шифр Цезаря.
// Как исправить конструктор объекта в JavaScript, который реализует шифрование и дешифрование строк с помощью шифра Цезаря:
function CaesarCipher(shift) {
  this.shift = shift;

  this.encrypt = function (text, shift = this.shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // uppercase letters
        result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // lowercase letters
        result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        result += text.charAt(i); // non-alphabetic characters
      }
    }
    return result;
  };

  this.decrypt = function (text) {};
}

// Example usage:
const cipher = new CaesarCipher(3); // create a cipher with shift 3

// Adding the decrypt method
// код нужно добавить

const encrypted = cipher.encrypt("Hello, World!"); // encrypt a string
console.log(encrypted); // Output: "Khoor, Zruog!"

const decrypted = cipher.decrypt(encrypted); // decrypt the encrypted string
console.log(decrypted); // Output: "Hello, World!"
// Варианты ответов:
//     1) Часть текста утерена при шифровании, расшифровать невозможно.
//     2) this.decrypt = function(text) {
//          return this.encrypt(text, -this.shift);
//        };
//     3) CaesarCipher.decrypt = function(text) {
//         return this.encrypt(text, 26 - this.shift);
//          };
//     4) CaesarCipher.prototype.decrypt = function(text) {
//         return this.encrypt(text, 26 - (this.shift % 26));
//         };
//    Выберите один ответ.
//    / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
