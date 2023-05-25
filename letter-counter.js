// This text contains 24 a, 24 b, 2 h and 1 c letter.

const text = "ababababababababababababhchabababababababababababab";

const result = text.split('a').length - 1;
console.log(result);

// const result = text.match(/a/g).length;
// console.log(result)

// let counter = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text.charAt(i) === 'a' ) {
//             counter++;
//         }
//     }
// console.log(counter);




