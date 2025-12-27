// ======================================================================
//                       IIFE (Immediately Invoked Function)
// ======================================================================

/*
Definition:
IIFE stands for Immediately Invoked Function Expression.
It is a function that is **created and executed immediately** after it is defined.

Purpose:
1. To run code immediately
2. To create a private scope (avoid global variable conflicts)
3. To keep variables safe inside the function

*/

// ======================================================================
// Example 1: Basic IIFE
// ----------------------------------------------------------------------

(function () {
  console.log("This runs immediately!");
})();

// ======================================================================
// Example 2: IIFE with parameters
// ----------------------------------------------------------------------

(function (name) {
  console.log("Hello " + name);
})("Sonu");

// ======================================================================
// Example 3: Storing IIFE result in a variable
// ----------------------------------------------------------------------

const result = (function () {
  let a = 10;
  let b = 20;
  return a + b;
})();

console.log(result); // 30

// ======================================================================
// Key Points
// ----------------------------------------------------------------------
// 1. IIFE runs automatically without being called separately
// 2. Variables inside IIFE are not accessible outside
// 3. Useful to avoid polluting global scope
// 4. Commonly used in module pattern or temporary calculations

// ======================================================================
// One-Line Definition
// ----------------------------------------------------------------------
// An IIFE is a function that is defined and executed immediately to create a private scope.
