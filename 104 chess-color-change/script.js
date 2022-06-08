const clickButton = document.querySelector("button");
const odd = document.querySelectorAll(".odd");
const even = document.querySelectorAll(".even");
clickButton.addEventListener("click", show);

function show() {
  odd.forEach((item) => {
    item.classList.toggle("odd-toggle");
  });
  even.forEach((item) => {
    item.classList.toggle("even-toggle");
  });
}
