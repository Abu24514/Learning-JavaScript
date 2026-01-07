// 🔹 What is Event Bubbling?
/* 
When you click (or trigger any event) on a child element, the event first happens on that child, and then it moves upward to its parent, then to grandparent, and so on… until it reaches the window.

👉 You can imagine it like a bubble rising up in water → starting from bottom (child) and going up (parent → Container → body → document → window).
*/

// Select all the div
const con = document.querySelector(".container");
const par = document.querySelector(".parent");
const child = document.querySelector(".child");
//
// < ======================================= >
// event on window --->
window.addEventListener("click", (e) => {
  console.log(" window event clicked!");
});
// event on document --->
document.addEventListener("click", (e) => {
  console.log(" document event clicked!");
});
// event on  Body --->
document.body.addEventListener("click", (e) => {
  console.log("body event  clicked!");
});
// event on Container --->
con.addEventListener("click", (e) => {
  console.log("container div is clicked!");
});
// event on Parent --->
par.addEventListener("click", (e) => {
  console.log(" parent div is clicked!");
});
// event on child --->
child.addEventListener("click", (e) => {
  console.log(" child div is clicked!");
});


/* 
window
 └── document
     └── body
         └── .container
             └── .parent
                 └── .child

*/