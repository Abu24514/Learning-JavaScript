// ==========================================================
// Object Destructuring
// ==========================================================

let user = {
  name: "Sonu",
  age: 21,
  city: "Delhi"
};

// old way
// let name = user.name;

// destructuring way
let { name, age } = user;

console.log(name); // Sonu
console.log(age);  // 21


// ==========================================================
// Rename variables while destructuring
// ==========================================================

let { city: location } = user;
console.log(location); // Delhi


// ==========================================================
// Why use Destructuring?
// ==========================================================
/*
✔ Code becomes short
✔ Easy to read
✔ Less repetition
✔ Very useful with functions and APIs
*/

