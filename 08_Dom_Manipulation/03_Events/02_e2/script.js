let h2 = document.querySelector("h2");
// <-------------------------KEY Down------------------------->

window.addEventListener("keydown", (evt) => {
  // console.log(evt);
  if (evt.key === " ") {
    h2.textContent = "space";
  } else {
    h2.textContent = evt.key;
  }
});

