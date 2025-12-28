/*
==========================================================
📘 JavaScript Array Method: reduce()
==========================================================

📖 Simple Definition:
reduce() is an array method that is used when you want to
**convert an array into a single value**.

That single value can be:
- a number (sum, total)
- a string
- an object
- or even another array

In short:
👉 jab array ko ek final result me badalna ho, tab reduce() use hota hai.

----------------------------------------------------------
Why do we use reduce()?
----------------------------------------------------------
- To calculate total / sum
- To combine all values into one
- To avoid writing extra loops
- To get a single output from an array

==========================================================
📘 Syntax:
----------------------------------------------------------
array.reduce(function(accumulator, currentValue) {
  return updatedAccumulator;
}, initialValue);
==========================================================

🔹 accumulator (acc):
- Ye value har step me result ko store karti hai

🔹 currentValue (val):
- Array ka current element

🔹 initialValue:
- accumulator ki starting value

==========================================================
*/

// ==========================================================
// 🧩 Example: Sum of all numbers using reduce()
// ==========================================================

let nums = [1, 2, 3, 4, 5];

let total = nums.reduce(function (acc, val) {
  return acc + val;
}, 0);

console.log("Total:", total); // 15

/*
==========================================================
🧠 Step-by-step Working (Easy way)
==========================================================

Initial value:
acc = 0

Step 1:
acc = 0, val = 1  → acc = 1

Step 2:
acc = 1, val = 2  → acc = 3

Step 3:
acc = 3, val = 3  → acc = 6

Step 4:
acc = 6, val = 4  → acc = 10

Step 5:
acc = 10, val = 5 → acc = 15

Final Output = 15
==========================================================
*/

// ==========================================================
// 🧩 One more simple example: Multiply all numbers
// ==========================================================

let numbers = [2, 3, 4];

let result = numbers.reduce((acc, val) => {
  return acc * val;
}, 1);

console.log("Multiplication Result:", result); // 24

/*
==========================================================
⚙️ Key Points (Yaad rakhne layak baatein)
==========================================================
1. reduce() array ko ek single value me convert karta hai.
2. Ye original array ko change nahi karta.
3. accumulator har step ka result store karta hai.
4. initial value dena best practice hai.
5. reduce() powerful hai but thoda practice chahiye.

==========================================================
*/
