// ==========================================================
// 1️⃣ find()
// ==========================================================
/*
📖 What is find()?
find() returns the FIRST element that matches a condition.
If nothing matches, it returns undefined.

Use find when:
- you need only one value
- you want the first matching result
*/

let numbers = [10, 20, 30, 40, 50];

let result = numbers.find((num) => num > 25);
console.log(result); // 30
