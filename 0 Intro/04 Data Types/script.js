// ============================✨ DATA TYPES IN JAVASCRIPT ✨============================

// 📘 Definition:
// A data type defines the kind of value a variable can hold.
// In JavaScript, data types are divided into two main categories:
//
// 1️⃣ Primitive Data Types  → basic, immutable (cannot be changed directly)
// 2️⃣ Non-Primitive (Reference) Data Types  → complex structures like objects, arrays, etc.

// -------------------------------------------------------------------------------------
// 🟢 PRIMITIVE DATA TYPES
// -------------------------------------------------------------------------------------

// 1️⃣ Number → Represents both integers and floating-point numbers.
// Special values include: Infinity, -Infinity, and NaN (Not a Number).

let integerValue = 100;
let floatValue = 3.14;
let notANumber = NaN; // e.g. result of invalid math like 0 / 0
let infinity = Infinity;

console.log(integerValue, floatValue, notANumber, infinity);

// -------------------------------------------------------------------------------------

// 2️⃣ String → Represents textual data written inside quotes (single, double, or backticks).

let username = "Rahul";
let greeting = 'Hello';
let message = `Hi, ${username}!`; // Template literal (uses backticks)

console.log(username, greeting, message);

// -------------------------------------------------------------------------------------

// 3️⃣ Boolean → Represents logical values: true or false.

let isOnline = true;
let isLoggedIn = false;

console.log(isOnline, isLoggedIn);

// -------------------------------------------------------------------------------------

// 4️⃣ Undefined → A variable declared but not assigned any value is undefined.

let x;
console.log(x); // undefined

// -------------------------------------------------------------------------------------

// 5️⃣ Null → Represents an intentional empty or “nothing” value.

let y = null;
console.log(y); // null

// -------------------------------------------------------------------------------------

// 6️⃣ Symbol (ES6) → Used to create unique identifiers (mostly for object properties).

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false → each symbol is always unique

// -------------------------------------------------------------------------------------

// 7️⃣ BigInt → Represents very large integers beyond Number.MAX_SAFE_INTEGER.

let bigNum = 1234567890123456789012345678901234567890n;
console.log(bigNum + 2n);

// -------------------------------------------------------------------------------------
// 🔵 NON-PRIMITIVE (REFERENCE) DATA TYPES
// These types store references (addresses) to data in memory, not the actual value.
// -------------------------------------------------------------------------------------

// 1️⃣ Object → A collection of key-value pairs.

let person = {
  name: "Rahul",
  age: 25,
  isStudent: true
};

console.log(person.name, person.age, person.isStudent);

// -------------------------------------------------------------------------------------

// 2️⃣ Array → A special type of object used to store ordered lists.

let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); // "banana"

// -------------------------------------------------------------------------------------

// 3️⃣ Function → A block of code designed to perform a particular task.
// In JavaScript, functions are also treated as objects.

function greet() {
  console.log("Hello from function!");
}
greet();

// -------------------------------------------------------------------------------------

// 4️⃣ Other Built-in Objects → Include Date, RegExp, Map, Set, etc.

let today = new Date();
console.log(today);

// =====================================================================================
// 🧩 Summary:
// ✅ Primitive → Number, String, Boolean, Undefined, Null, Symbol, BigInt
// ✅ Non-Primitive → Object, Array, Function, (and other built-in objects like Map, Date)
// =====================================================================================
