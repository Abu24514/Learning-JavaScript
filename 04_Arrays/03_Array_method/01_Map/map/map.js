/*
==========================================================
📘 JavaScript Array Method: map()
==========================================================

📖 What is map()?
map() is used to create a NEW array by changing each value of an existing array.
It runs a function on every element and returns the updated result.

👉 map() is mainly used when you want to TRANSFORM data
and keep the original array safe (unchanged).

----------------------------------------------------------
Why do we use map()?
----------------------------------------------------------
1. When you want to change each item of an array.
2. When you want a new array instead of modifying the old one.
3. When the output array size should be the same as input.
4. When you want clean and readable code.

----------------------------------------------------------
Syntax:
----------------------------------------------------------
array.map(function(element, index, array) {
  return newValue;
});
----------------------------------------------------------
element → current value
index   → position of value (optional)
array   → original array (optional)
----------------------------------------------------------
Returns:->
A NEW array with updated values.
==========================================================
*/

// ==========================================================
// 🧩 Example 1: Multiply each number by 2
// ==========================================================
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => {
  return num * 2;
});

console.log("Original Array:", numbers); // [1, 2, 3, 4]
console.log("Doubled Array:", doubled); // [2, 4, 6, 8]

// ==========================================================
// 🧩 Example 2: Convert all names to uppercase
// ==========================================================
const names = ["sonu", "abu", "rahul"];

const upperNames = names.map((name) => {
  return name.toUpperCase();
});

console.log("Uppercase Names:", upperNames);
// ["SONU", "ABU", "RAHUL"]

// ==========================================================
// 🧩 Example 3: Get only names from array of objects
// ==========================================================
const users = [
  { name: "Sonu", age: 21 },
  { name: "Abu", age: 19 },
  { name: "Rahul", age: 23 },
];

const userNames = users.map((user) => {
  return user.name;
});

console.log("User Names:", userNames);
// ["Sonu", "Abu", "Rahul"]

// ==========================================================
// ⚙️ Important Points to Remember
// ==========================================================
// 1. map() does NOT change the original array.
// 2. map() always returns a new array.
// 3. Output array length is same as input array.
// 4. Use map() when you want to transform data.
// 5. If you don’t return anything, map() will give undefined values.
