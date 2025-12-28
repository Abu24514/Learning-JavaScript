// ======================================================================
//                         DYNAMIC SCOPING
// ======================================================================

/*
Dynamic scoping means:
- The scope of a variable depends on the function call stack (where it is called from), not where it is defined.
- JavaScript does NOT use dynamic scoping, some other languages like Lisp do.
*/

// Example conceptually (JavaScript does NOT support this)
let a = 100;

function first() {
  console.log(a); // JavaScript will use lexical scope, so prints 100
}

function second() {
  let a = 200;
  first(); // If JS had dynamic scoping, it would print 200
}

second(); // Prints 100 in JS because JS uses lexical scoping
