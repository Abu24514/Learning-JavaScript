let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "hello everyone ji";

console.log(ul.appendChild(li));
let p = document.querySelector('p');
console.log(p);
p.innerHTML="<b>Updated</b> by JavaScript";

// change li color using JavaScript
let all = document.querySelectorAll("ul li:nth-child(2n)")
console.log(all);

all.forEach(function(val){
val.classList.add("high")
});