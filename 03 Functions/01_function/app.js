// ======================================================================
//                        JAVASCRIPT FUNCTIONS
// ======================================================================
//
// A function is a reusable block of code designed to perform a specific task.
// Instead of writing the same logic multiple times, you wrap it inside a
// function and call it whenever needed.
//
// Think of a function as a machine:
// - You give input (if needed)
// - It processes something
// - It gives output
//
// Example idea:
// Input: Mango  →  (function: makeJuice)  →  Output: Mango Juice
//
// ======================================================================
// Why We Use Functions
// ----------------------------------------------------------------------
// 1. To avoid repeating code
// 2. To organize code into smaller logical parts
// 3. To make code clean and readable
// 4. To reuse logic many times
// 5. To improve debugging and maintenance
//
// ======================================================================
// 1. FUNCTION DECLARATION
// ----------------------------------------------------------------------

function greet() {
  console.log("Hello User");
}

greet();


// ======================================================================
// 2. PARAMETERIZED FUNCTION
// ----------------------------------------------------------------------

function greetUser(name) {
  console.log("Welcome", name);
}

greetUser("Sonu");
greetUser("Rahul");


// ======================================================================
// 3. FUNCTION WITH MULTIPLE PARAMETERS
// ----------------------------------------------------------------------

function add(a, b) {
  console.log("Sum =", a + b);
}

add(10, 20);
add(5, 7);


// ======================================================================
// 4. FUNCTION WITH RETURN VALUE
// ----------------------------------------------------------------------

function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log("Result =", result);


// ======================================================================
// 5. DEFAULT PARAMETERS
// ----------------------------------------------------------------------

function welcome(name = "Guest") {
  console.log("Hello", name);
}

welcome();
welcome("Aman");


// ======================================================================
// 6. FUNCTION EXPRESSION
// ----------------------------------------------------------------------

const sayHi = function() {
  console.log("Hi from function expression");
};

sayHi();


// ======================================================================
// 7. NAMED FUNCTION EXPRESSION
// ----------------------------------------------------------------------

const multiplyNumbers = function multiplyFn(x, y) {
  return x * y;
};

console.log(multiplyNumbers(3, 4));


// ======================================================================
// 8. ANONYMOUS FUNCTION
// ----------------------------------------------------------------------

setTimeout(function() {
  console.log("Anonymous function executed after 1 second");
}, 1000);


// ======================================================================
// 9. ARROW FUNCTION
// ----------------------------------------------------------------------

const sayHello = () => {
  console.log("Hello from arrow function");
};

sayHello();


// ======================================================================
// 10. ARROW FUNCTION WITH PARAMETERS
// ----------------------------------------------------------------------

const square = num => num * num;

console.log("Square =", square(6));


// ======================================================================
// 11. IMPLICIT RETURN FUNCTION (Arrow Function)
// ----------------------------------------------------------------------
// When an arrow function has no curly braces `{}` and no `return` keyword,
// the value after `=>` is automatically returned.
// This is called *implicit return*.
//
// Example:

const double = n => n * 2;

console.log("Double =", double(8));
// Here n * 2 is returned automatically without using `return`


// ======================================================================
// 12. ARROW FUNCTION WITH MULTIPLE STATEMENTS
// ----------------------------------------------------------------------

const calculate = (a, b) => {
  let sum = a + b;
  let product = a * b;
  return { sum, product };
};

console.log(calculate(3, 4));


// ======================================================================
// SUMMARY
// ----------------------------------------------------------------------
// 1. Function Declaration
// 2. Parameterized Function
// 3. Function with Multiple Parameters
// 4. Function with Return Value
// 5. Default Parameters
// 6. Function Expression
// 7. Named Function Expression
// 8. Anonymous Function
// 9. Arrow Function
// 10. Arrow Function with Parameters
// 11. Implicit Return Function
// 12. Arrow Function with Multiple Statements
//
// ======================================================================
