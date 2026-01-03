let sel = document.querySelector("select")
let h1 = document.querySelector("h1")

sel.addEventListener("change", (dets) => {
    h1.textContent = `${dets.target.value} fruit Selected`
    h1.style.color = "green"

    // console.log(dets.target.value);

})

