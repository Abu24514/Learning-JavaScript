// ======================================================================
//                               SCOPE
// ======================================================================

/*
Scope defines where a variable or function can be accessed in your code.
In other words, it decides the visibility of variables.

There are three types of scope in JavaScript:
1. Function Scope
2. Global Scope
3. Block Scope
*/

// ======================================================================
//                          1. Function Scope
// ======================================================================

/*
A variable declared inside a function can only be accessed inside that function.
It cannot be accessed outside.
*/

function exampleFunction() {
  var a = 12;
  console.log(a); // ✅ Works
}

exampleFunction();
console.log(a); // ❌ Error: a is not defined

// ======================================================================
//                          2. Global Scope
// ======================================================================

/*
A variable declared outside any function is in the global scope.
It can be accessed from anywhere in the code.
*/

var b = 14;
console.log(b); // ✅ Works anywhere in the file

// ======================================================================
//                          3. Block Scope
// ======================================================================

/*
Variables declared with let or const inside a block (curly braces {}) are only accessible inside that block.
*/

if (true) {
  let c = 3;
  console.log(c); // ✅ Works
}
console.log(c); // ❌ Error: c is not defined
