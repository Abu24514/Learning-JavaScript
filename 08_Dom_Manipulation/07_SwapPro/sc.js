let img1 = document.querySelector("#img-1")
let img2 = document.querySelector("#img-2")

let btn = document.querySelector("button")

btn.addEventListener("click", () => {
      // image  get src
      let img1src = img1.getAttribute("src")
      let img2src = img2.getAttribute("src")
      // image set src
      img1.setAttribute("src", img2src)
      img2.setAttribute("src", img1src)
      btn.style.backgroundColor = "green"
      btn.style.color = "white"
})


// getAttribute- for getting the attribute value
// setAttribute - for setting the attribute value