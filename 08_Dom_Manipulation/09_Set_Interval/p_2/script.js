let btn = document.querySelector('button')
let percent = document.querySelector('#percent')
let growth = document.querySelector('#growth')

let grow = 0;

btn.addEventListener("click", () => {
  let int = setInterval(() => {
    if (grow >= 100) {
      clearInterval(int);
      btn.style.opacity = 0.5;
      btn.innerHTML = 'Downloaded';
    } else {
      grow++;
      percent.innerHTML = grow + "%";
      growth.style.width = grow + "%";
    }
  }, 50);
});
