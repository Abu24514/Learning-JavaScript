// ==========================================================
// Spread with Object
// ==========================================================

let person = {
  name: "Sonu",
  age: 21,
};

let updatedPerson = {
  ...person,
  city: "Delhi",
};

console.log(updatedPerson);
/*
{
  name: "Sonu",
  age: 21,
  city: "Delhi"
}
*/

// ==========================================================
// Why use Spread Operator?
// ==========================================================
/*
✔ Copy array/object safely
✔ Merge arrays or objects
✔ Avoid mutation
✔ Clean and modern syntax
*/
/* ==========================================================
📌 Destructuring vs Spread (Simple Difference)
==========================================================

Destructuring:
➡ values NIKAALTA hai

Spread:
➡ values FAILATA hai

Example:
let [a,b] = arr;   // destructuring
let newArr = [...arr]; // spread

==========================================================
*/
