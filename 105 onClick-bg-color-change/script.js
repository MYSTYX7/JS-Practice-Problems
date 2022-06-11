const containerEl = document.querySelector(".container");
const boxEl = document.querySelectorAll(".box");

containerEl.addEventListener("click", (e) => {
  // console.log(e.target)
  if (!e.target.matches(".box")) return;
  boxEl.forEach((el) => {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
});
