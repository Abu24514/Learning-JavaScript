/*
==========================================================
📘 String and Template Literal in JavaScript
==========================================================
*/


// ==========================================================
// 1️⃣ What is a String?
// ==========================================================
/*
A string is a sequence of characters used to store text.
Strings are written inside single quotes (' ')
or double quotes (" ").
*/

let name1 = "Sonu";
let city = 'Delhi';

console.log(name1); // Sonu
console.log(city);  // Delhi


/*
Important points about String:
✔ Used to store text
✔ Written in quotes
✔ Strings are immutable (cannot be changed directly)
*/


// ==========================================================
// 2️⃣ What is a Template Literal?
// ==========================================================
/*
Template literals are a modern way to write strings.
They are written using backticks (` `).

Why use template literals?
✔ Easy string formatting
✔ Variable insertion
✔ Multi-line strings
*/

let username = "Sonu";
let age = 21;

// Using normal string
console.log("My name is " + username + " and my age is " + age);

// Using template literal
console.log(`My name is ${username} and my age is ${age}`);


/*
${ } is used to insert variables or expressions
inside a template literal.
*/


// ==========================================================
// 3️⃣ Multi-line String using Template Literal
// ==========================================================

let message = `
Hello,
My name is Sonu.
I am learning JavaScript.
`;

console.log(message);


/*
==========================================================
🔁 Difference between String and Template Literal
==========================================================

String:
- Uses ' ' or " "
- Hard to manage long text
- Variables need + operator

Template Literal:
- Uses ` `
- Easy to write multi-line text
- Variables directly inside ${ }

==========================================================
*/


// ==========================================================
// 🧠 When to use what?
// ==========================================================
/*
Use String:
- Simple text
- Short messages

Use Template Literal:
- Dynamic values
- Long text
- Clean and readable code
==========================================================
*/
