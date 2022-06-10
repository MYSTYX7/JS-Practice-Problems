const clickButton = document.querySelectorAll("div");
clickButton.forEach((item) => {
  item.addEventListener("click", show);
});
const box = document.querySelectorAll(".box");
function show() {
  box.forEach((item) => {
    // item.classList.add('.click')
    item.style.backgroundColor = "red";
  });

  //  clickButton.classList.toggle(".click");
  // box.style.backgroundColor = "red"
  console.log("red");
}
