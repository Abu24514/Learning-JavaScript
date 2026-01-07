// What is stopPropagation()?
/* 
stopPropagation() is a method used to stop event bubbling.
When an event happens on an element, it normally moves upward to its parent elements.
Using stopPropagation() stops the event at the current element.

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
  e.stopPropagation();
  console.log(" child div is clicked!");
});
