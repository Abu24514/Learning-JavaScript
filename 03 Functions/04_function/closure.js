// ======================================================================
//                          CLOSURE
// ======================================================================

/*
A closure is created when a function is returned from another function
and the returned function can still access the parent function variables.

In simple words:
A function remembers the variables of its parent function
even after the parent function has finished execution.

This happens because of lexical scoping.
*/

// Example of Closure

function abc() {
  let a = 12;

  return function () {
    console.log(a);
  };
}

const result = abc();
result(); // Output: 12

/*
Explanation:

1. abc() function is called
2. Variable 'a' is created inside abc
3. abc returns an inner function
4. abc execution ends
5. Still, the inner function remembers variable 'a'

This memory of parent variables is called Closure.
*/

// ======================================================================
//                          IMPORTANT POINTS
// ======================================================================

/*
- Closure is created automatically
- Inner function can access outer function variables
- Parent function variables stay in memory
- Closure works because of lexical scope
*/

// ======================================================================
//                          ONE LINE DEFINITION
// ======================================================================

/*
A closure is a function that remembers and uses variables
from its outer function even after the outer function has executed.
*/
