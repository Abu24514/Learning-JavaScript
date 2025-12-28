// ===============================
// Array in JavaScript
// ===============================

// What is an Array?
// An array is a special variable that can store multiple values
// in a single variable.

// Example:
let fruits = ["apple", "banana", "mango"];

// fruits is an array
// "apple", "banana", "mango" are values stored in the array

// ===============================
// Accessing Array Values
// ===============================

// Array index starts from 0
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango

// ===============================
// Array Length
// ===============================

// length gives total number of items in array
console.log(fruits.length); // 3

// ===============================
// Update Array Value
// ===============================

// You can update a value using index
fruits[1] = "orange";

console.log(fruits); // ["apple", "orange", "mango"]

// ===============================
// Another Example
// ===============================

let numbers = [10, 20, 30, 90];

console.log(numbers.length); // 4
console.log(numbers[2]); // 30

// Update value
numbers[1] = 50;

console.log(numbers); // [10, 50, 30, 90]

// ===============================
// Important Points
// ===============================

// 1. Array can store multiple values
// 2. Index always starts from 0
// 3. length gives total items
// 4. Values can be changed using index
