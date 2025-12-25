// ======================================================================
// 1. REST PARAMETER
// ======================================================================
//
// When a function receives many arguments, creating parameters for
// each one is not practical.
// The REST parameter allows us to collect all arguments into an array.
//
// IMPORTANT:
// - Three dots (...) used in function parameters are called REST operator
// - It must be the last parameter
//

function abcd(...values) {
  console.log(values);
}

// Calling the function with multiple arguments
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 12, 41);

// Output:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 12, 41]


// ======================================================================
// 2. RETURN STATEMENT
// ======================================================================
//
// The `return` keyword sends a value back to where the function was called from.
// After return, the function stops executing.
//

function num() {
  return 28;
}

let a = num();
console.log(a);

// Output:
// 28


// ======================================================================
// 3. PURE FUNCTION
// ======================================================================
//
// A pure function:
// - Does NOT change any external (outside) variable
// - Always gives the same output for the same input
// - Has no side effects
//

let b = 21;

function outer() {
  console.log("Hi");
}

// Calling the function
outer();

// Here, variable `b` is NOT changed
// So this is a PURE function


// ======================================================================
// 4. IMPURE FUNCTION
// ======================================================================
//
// An impure function:
// - Changes an external (outside) variable
// - Output may change even with same input
// - Causes side effects
//

let c = 15;

function change() {
  c++;        // changing external variable
  return c;
}

let changeNum = change();
console.log(changeNum);

// Output:
// 16
//
// Here the function modifies variable `c`
// So this is an IMPURE function


// ======================================================================
// SUMMARY
// ======================================================================
//
// 1. Rest Parameter → collects multiple arguments into an array
// 2. Return → sends value back from function
// 3. Pure Function → does not change external values
// 4. Impure Function → changes external values
//
// ======================================================================
