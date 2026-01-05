let h5 = document.querySelector("h5");
let btn = document.querySelector("button");
let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    h5.innerHTML = "Request Sending...";
    h5.style.color = "blue";
    btn.innerHTML = "Adding....";
    setTimeout(() => {
      h5.innerHTML = "Friends";
      h5.style.color = "green";
      btn.innerHTML = "Remove Friend";
      flag = 1
    }, 3000);
  } else {
    h5.innerHTML = "Stranger";
    h5.style.color = "red";
    btn.innerHTML = "Add Freind";
    flag = 0
  }
});
