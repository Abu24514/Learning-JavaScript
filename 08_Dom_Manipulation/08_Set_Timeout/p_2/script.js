function createToaster(config) {
  const parent = document.querySelector(".parent");
  parent.className = `parent 
        ${config.positionX === "right" ? "right-5" : "left-5"} 
        ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;

  return function (message) {
    const div = document.createElement("div");
    div.textContent = message;
    div.className = `toast ${config.theme === "dark" ? "dark" : ""}`;

    parent.appendChild(div);

    // Fade out and remove
    setTimeout(() => {
      div.classList.add("fade-out");
      setTimeout(() => div.remove(), 500);
    }, config.duration * 1000);
  };
}

// Example usage
const toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  theme: "light", // or "dark"
  duration: 3, // seconds
});

toaster("Download Done");
setTimeout(() => toaster("Harsh accepted your request"), 2000);
setTimeout(() => toaster("Rupesh sent you a message"), 1500);
