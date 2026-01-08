/*
==========================================================
📘 Event Capturing in JavaScript
==========================================================

📖 What is Event Capturing?
Event Capturing is a phase where the event starts from the
TOP (window) and moves DOWN to the target element.

This is the opposite of event bubbling.

----------------------------------------------------------
In short:
👉 Event flows from parent to child
👉 window → document → body → target
----------------------------------------------------------
*/


/*
==========================================================
🧠 Event Flow has 3 Phases
==========================================================

1. Capturing phase (top → down)
2. Target phase (actual element)
3. Bubbling phase (down → up)
*/


/*

==========================================================
🧩 Example: Event Capturing in Action
==========================================================
*/

const container = document.querySelector(".container");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

/*
To enable capturing, we pass TRUE as the third parameter
in addEventListener
*/

container.addEventListener(
  "click",
  (e) => {
    e.stopPropagation()
    console.log("Container clicked (capturing)");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent clicked (capturing)");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    console.log("Child clicked");
  },
  true
);


/*
==========================================================
📌 Output when clicking CHILD
==========================================================

Container clicked (capturing)
Parent clicked (capturing)
Child clicked
*/


/*
==========================================================
⚖️ Event Capturing vs Event Bubbling
==========================================================

Event Capturing:
- Top to bottom
- window → document → body → target
- Rarely used

Event Bubbling:
- Bottom to top
- target → parent → document → window
- Used most of the time
*/


/*
==========================================================
📝 One-line Definition
==========================================================

Event Capturing is when an event moves from the outermost
element to the target element before bubbling starts.
==========================================================
*/
