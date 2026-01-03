let crs = document.querySelector(".cursor");
let main = document.querySelector(".main")

// box.addEventListener("mouseover", ()=>{
//     box.style.backgroundColor="green";
    
// })
// box.addEventListener("mouseout", ()=>{
//     box.style.backgroundColor="red";
    
// })


main.addEventListener("mousemove", (evt) =>{
crs.style.top =evt.clientY + "px";
crs.style.left =evt.clientX + "px";



})