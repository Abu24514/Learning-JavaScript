/* ========== Element Selectors ========== */
let progress = document.querySelector("#progress");
let progressText = document.querySelector("#progressText");
let downloadBtn = document.querySelector("#downloadBtn");
let st = document.querySelector("#status");

/* Variables */
let count = 0; // Progress percentage tracker
let Inter; // Global interval reference

/* Download button click event */
downloadBtn.addEventListener("click", () => {
  clearInterval(Inter); // Agar pehle se interval chal raha hai toh usse stop karo
  count = 0; // Reset progress count
  progress.style.width = "0"; // Reset progress bar width
  progressText.textContent = "0%";
  st.textContent = "Downloading..."; // Show downloading status
  downloadBtn.disabled = true; // Disable button until download completes

  /* Progress simulation interval */
  Inter = setInterval(function () {
    if (count <= 99) {
      count++;
      progress.style.width = `${count}%`; // Update bar width
      progressText.textContent = `${count}%`; // Update text
    } else {
      clearInterval(Inter); // Stop interval when complete
      st.textContent = "✅ Download Complete!";
      downloadBtn.disabled = false; // Re-enable button
    }
  }, 10000 / 100); // Total 10 seconds download (100 steps, 100ms each)
});
