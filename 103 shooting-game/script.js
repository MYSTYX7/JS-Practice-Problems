let p1Health = 100,
  p2Health = 100;
var p1DmgHealth, p2DmgHealth;
let p1Game = 0,
  p2Game = 0;
// const startButton = document.querySelector(".start");

// startButton.addEventListener("click", show);

// function show() {
//   document.getElementById("p1").innerHTML = "Great";
//   document.getElementById("p2").innerHTML = "Show";
// }

function red() {
  while (p1Health > 0 || p2Health > 0) {
    const max = 5;
    let hit1 = Math.floor(Math.random() * (max + 1));
    let hit2 = Math.floor(Math.random() * (max + 1));
    p1Health -= hit1;
    p2Health -= hit2;
    if (p1Health <= 0 || p2Health <= 0) {
      break;
    }
  }
  if (p1Health > p2Health) {
    p1Game++;
    console.log(`P1 win`);
  } else {
    p2Game++;
    console.log(`P2 win`);
  }
  console.log(p1Game, p2Game);
  p1Health = 100;
  p2Health = 100;
}

for (let i = 0; i <= 5; i++) {
  red();
  if (p1Game === 3) {
    console.log(`P1 wins the tournament`);
    break;
  } else if (p2Game === 3) {
    console.log(`P2 wins the tournament`);
    break;
  }
}
