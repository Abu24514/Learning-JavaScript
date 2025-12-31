/* ==========================================================
  DESTRUCTURING
==========================================================

📖 What is Destructuring?
Destructuring means:
Extracting values from arrays or objects
and storing them into variables easily.

Short me:
array ya object se value nikalna
simple syntax me.

==========================================================
*/


// ==========================================================
// Array Destructuring
// ==========================================================

let numbers = [10, 20, 30];

// old way
let a = numbers[0];
let b = numbers[1];

// destructuring way
let [x, y, z] = numbers;

console.log(x); // 10
console.log(y); // 20
console.log(z); // 30


// ==========================================================
// Skip values in array destructuring
// ==========================================================

let colors = ["red", "green", "blue"];

let [first, , third] = colors;

console.log(first); // red
console.log(third); // blue

