function darkOrLightTheme(){
    
    // Helper function to apply theme
function applyTheme(theme) {
  document.body.classList.remove("dark", "light"); // clear old
  document.body.classList.add(theme);              // set new
}

// Detect system theme
function setDarkOrLight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
}

// On load → check localStorage first, fallback to system
if (localStorage.getItem("theme")) {
  applyTheme(localStorage.getItem("theme"));
} else {
  setDarkOrLight();
}

// Toggle button
let btn = document.querySelector("#toggleTheme");
btn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    applyTheme("light");
    localStorage.setItem("theme", "light");
  } else {
    applyTheme("dark");
    localStorage.setItem("theme", "dark");
  }
});

// Listen to system theme change (only if user hasn’t set preference)
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (!localStorage.getItem("theme")) {
    setDarkOrLight();
  }
});

}

darkOrLightTheme();