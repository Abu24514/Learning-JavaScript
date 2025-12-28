// ======================================================================
//                         LEXICAL SCOPING
// ======================================================================

/*
Lexical scoping means:
- The scope of a variable is determined by its position in the source code.
- Inner functions can access variables of their parent functions.
- 🍁 JavaScript always uses lexical scoping.
*/

let globalVar = 10; // global scope

function parentFunction() {
  let parentVar = 20; // parent function scope

  function childFunction() {
    console.log(globalVar); // ✅ Can access globalVar
    console.log(parentVar); // ✅ Can access parentVar
  }

  childFunction();
}

parentFunction();
// console.log(parentVar); // ❌ Error: parentVar is not defined
