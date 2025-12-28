# Execution Context in JavaScript ⚡

Execution Context (EC) is the environment where your JavaScript code runs.  
It contains everything the code needs to execute:
- Variables 📝
- Functions 🔧
- The value of `this` 👤

---

## Phases of Execution Context

### 1️⃣ Memory Phase (Creation Phase)
- JavaScript scans the code.
- Allocates memory for variables and functions.
- Functions are stored completely.
- Variables are initialized with `undefined`.

### 2️⃣ Execution Phase
- JavaScript executes the code line by line.
- Variables are assigned their actual values.
- Functions are executed when called.

---

## Example

```javascript
let x = 10; // memory phase -> undefined, execution phase -> 10

function greet() {
    console.log("Hello 👋");
}

greet(); // Execution phase -> prints "Hello 👋"

