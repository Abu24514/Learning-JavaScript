// ==========================================================
// 3️⃣ every()
// ==========================================================
/*
📖 What is every()?
every() checks if ALL elements match the condition.
It returns true or false.

Use every when:
- you want to check "are all?"
*/
let numbers = [10, 20, 30, 40, 50];
let allAboveFive = numbers.every(function (num) {
  return num > 5;
});

console.log("every() result:", allAboveFive); // true

// ==========================================================
// 🔁 Quick Difference (Easy to remember)
// ==========================================================
/*
find()  → returns ONE value
some()  → returns true / false (any one)
every() → returns true / false (all)
*/

// ==========================================================
// ⚙️ Important Points
// ==========================================================
/*
✔ These methods do NOT change the original array
✔ They stop checking once result is found
✔ Very useful for validation and checks

Real-life examples:
- find → find one student
- some → is there any error?
- every → is everything valid?
==========================================================
*/
