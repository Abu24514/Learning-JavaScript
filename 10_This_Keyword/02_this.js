// ======================================================
// 2 Normal Function → window
// ======================================================

function showThis() {
  console.log(this);
}

showThis();

/*
When a normal function is called directly,
"this" refers to the global object (window).
*/
