/* ==========================================================
📌 2. SPREAD OPERATOR (...)
==========================================================

📖 What is Spread Operator?
Spread operator spreads values
of array or object into individual values.

Short me:
array ya object ko open kar deta hai.

==========================================================
*/

// ==========================================================
// Spread with Array
// ==========================================================

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

// combine arrays
let combined = [...arr1, ...arr2];

console.log(combined); // [1,2,3,4,5]

// ==========================================================
// Copy array using spread
// ==========================================================

let original = [10, 20, 30];
let copy = [...original];

copy.push(40);

console.log(original); // [10,20,30]
console.log(copy); // [10,20,30,40]
