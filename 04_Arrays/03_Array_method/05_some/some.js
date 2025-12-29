// ==========================================================
// 2️⃣ some()
// ==========================================================
/*
📖 What is some()?
some() checks if AT LEAST ONE element matches the condition.
It returns true or false.

Use some when:
- you want to check "is there any?"
*/
let numbers = [10, 20, 30, 40, 50];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true