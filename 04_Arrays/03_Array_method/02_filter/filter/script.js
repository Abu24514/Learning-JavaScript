/*
==========================================================
📘 JavaScript Array Method: filter() (Chhanni Example)
==========================================================

📖 Simple Explanation:
Think of filter() like a **chhanni (filter)** in the kitchen 🥣

- You pour everything into the chhanni.
- Unwanted things go out.
- Only useful things stay inside.

In JavaScript:
👉 filter() removes unwanted values from an existing array
👉 It keeps only those values that match the condition.

----------------------------------------------------------
Why use filter()?
----------------------------------------------------------
- To remove unwanted data
- To get only required values
- To reduce array size based on a condition
- Original array stays safe

==========================================================
*/
// ==========================================================
// 🧩 Example1: Chhanni (Filter) Example
// ==========================================================

// Existing array (sab kuch mixed hai)
const mixedItems = [10, -5, 20, -3, 0, 15, -1];

// Filter (chhanni) lagayi
const usefulItems = mixedItems.filter((item) => {
  return item > 0; // sirf positive values chahiye
});

console.log("Original Array:", mixedItems);
// [10, -5, 20, -3, 0, 15, -1]

console.log("Filtered Array:", usefulItems);
// [10, 20, 15]

// ==========================================================
// 🧩 Example 2: Get users older than 20
// ==========================================================
const users = [
  { name: "Sonu", age: 21 },
  { name: "Abu", age: 19 },
  { name: "Rahul", age: 23 },
];

const adults = users.filter((user) => {
  return user.age > 20;
});

console.log("Adult Users:", adults);
// [{ name: "Sonu", age: 21 }, { name: "Rahul", age: 23 }]

// ==========================================================
// 🔍 Simple Understanding
// ==========================================================
// mixedItems  → raw data (sab kuch)
// filter()   → chhanni
// condition  → kya rakhna hai
// result     → clean data

// ==========================================================
// ⚙️ Key Points
// ==========================================================
// 1. filter() works like a chhanni.
// 2. It removes unwanted values.
// 3. It returns a new array.
// 4. Original array does NOT change.
