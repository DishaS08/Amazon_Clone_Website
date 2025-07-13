const imgs = document.querySelectorAll(".header-slider ul img");
const prev = document.querySelector(".ctr-prev");
const next = document.querySelector(".ctr-next");

let n = 0;

function change_Slide() {
  imgs.forEach((img) => (img.style.display = "none"));
  imgs[n].style.display = "block";
}

change_Slide();

prev.addEventListener("click", () => {
  n = (n > 0) ? n - 1 : imgs.length - 1;
  change_Slide();
});

next.addEventListener("click", () => {
  n = (n < imgs.length - 1) ? n + 1 : 0;
  change_Slide();
});
