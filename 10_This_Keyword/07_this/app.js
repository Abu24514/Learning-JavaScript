// ======================================================
// 7️ Event Handler → element
// ======================================================

document.getElementById("btn").addEventListener("click", function () {
  console.log(this);
});

/*
In an event handler,
"this" refers to the element that received the event.

Here: this === button element
*/

/* simple summary--> 

1. Global scope           → window
2. Normal function        → window
3. ES5 method             → object
4. Arrow method           → window
5. Function inside method → window
6. Arrow inside method    → object
7. Event handler          → element


-------------------------------------------------------

--> simple rule for understanding this

Normal function → its own "this"  
Arrow function  → takes "this" from parent  
Method call     → "this" = object  
Event handler   → "this" = element

*/
