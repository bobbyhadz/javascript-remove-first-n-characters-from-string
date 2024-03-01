// EXAMPLE 1 - Remove the first N characters from a String using `String.slice()`

const str = 'bobbyhadz.com';

// ✅ remove the first 2 characters from a string
const removeFirst2 = str.slice(2);
console.log(removeFirst2); // 👉️ bbyhadz.com

// ✅ remove the first 3 characters from a string
const removeFirst3 = str.slice(3);
console.log(removeFirst3); // 👉️ byhadz.com

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove the first N characters from a String using `String.substring()`

// const str = 'bobbyhadz.com';

// const removeFirst2 = str.substring(2);
// console.log(removeFirst2); // 👉️ bbyhadz.com

// const removeFirst3 = str.substring(3);
// console.log(removeFirst3); // 👉️ byhadz.com

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove the first N characters from a string conditionally

// const str = 'bobbyhadz.com';

// // ✅ remove the first 2 characters from a string conditionally
// const removeFirst2 = str.replace(/^bo/, '');
// console.log(removeFirst2); // 👉️ bbyhadz.com

// // ✅ remove the first 3 characters from a string conditionally
// const removeFirst3 = str.replace(/^bob/, '');
// console.log(removeFirst3); // 👉️ byhadz.com
